"use client";

import { useCallback, useRef, useState } from "react";
import {
  Background,
  BackgroundVariant,
  Edge,
  NodeTypes,
  ReactFlow,
  ReactFlowInstance,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import TextNode from "./TextNode";
import { useShallow } from "zustand/shallow";
import { useCanvasStore } from "@/store/useCanvasStore";
import { AppNode, ICanvasStore } from "@/types/canvas-type";

export const TextNodeTypes: NodeTypes = {
  message: TextNode,
};

let id = 0;
const getId = () => `n${id++}`;

const selector = (state: ICanvasStore) => ({
  nodes: state.nodes,
  setNodes: state.setNodes,
  onNodesChange: state.onNodesChange,
  edges: state.edges,
  setEdges: state.setEdges,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
  setSelectedNode: state.setSelectedNode,
});

export default function FlowBuilderCanvas() {
  const {
    nodes,
    setNodes,
    onNodesChange,
    edges,
    onEdgesChange,
    onConnect,
    setSelectedNode,
  } = useCanvasStore(useShallow(selector));

  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance<
    AppNode,
    Edge
  > | null>(null);
  // const [nodes, setNodes, onNodesChange] = useNodesState(INITIAL_NODES);
  // const [edges, setEdges, onEdgesChange] = useEdgesState(INITIAL_EDGES);

  // const onConnect = useCallback(
  //   (params: Edge | Connection) => setEdges((edge) => addEdge(params, edge)),
  //   [setEdges],
  // );

  const onDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();

      const type = e.dataTransfer.getData("application/reactflow");

      if (typeof type === "undefined" || !type) return;
      if (!reactFlowWrapper.current || !reactFlowInstance) return;

      const position = reactFlowInstance.screenToFlowPosition({
        x: e.clientX,
        y: e.clientY,
      });

      const newNode: AppNode = {
        id: getId(),
        type: "message",
        position,
        data: { value: "New message" },
      };

      setNodes([...nodes, newNode]);
    },
    [reactFlowInstance, setNodes, nodes],
  );

  const onNodeClick = useCallback(
    (event: React.MouseEvent, node: AppNode) => {
      event.stopPropagation();
      setSelectedNode(node);
    },
    [setSelectedNode],
  );

  const onPaneClick = useCallback(() => {
    setSelectedNode(null);
  }, [setSelectedNode]);

  return (
    <div ref={reactFlowWrapper} className="h-full w-full">
      <ReactFlow<AppNode>
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={TextNodeTypes}
        onInit={setReactFlowInstance}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onNodeClick={onNodeClick}
        onPaneClick={onPaneClick}
      >
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
