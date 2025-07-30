"use client";

import { useCallback, useRef, useState } from "react";
import {
  addEdge,
  Background,
  BackgroundVariant,
  Connection,
  Edge,
  Node,
  ReactFlow,
  ReactFlowInstance,
  useEdgesState,
  useNodesState,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { TextNodeTypes } from "./TextNode";
import { INITIAL_EDGES, INITIAL_NODES } from "@/constants/flow-builder";

let id = 0;
const getId = () => `dndnode_${id++}`;

export default function FlowBuilderCanvas() {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [reactFlowInstance, setReactFlowInstance] =
    useState<ReactFlowInstance | null>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(INITIAL_NODES);
  const [edges, setEdges, onEdgesChange] = useEdgesState(INITIAL_EDGES);

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((edge) => addEdge(params, edge)),
    [setEdges],
  );

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

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const position = reactFlowInstance.screenToFlowPosition({
        x: e.clientX - reactFlowBounds.left,
        y: e.clientY - reactFlowBounds.top,
      });

      const newNode: Node = {
        id: getId(),
        type,
        position,
        data: { value: "New message" },
      };

      setNodes((nodes) => [...nodes, newNode]);
    },
    [reactFlowInstance, setNodes],
  );

  return (
    <div ref={reactFlowWrapper} className="h-full w-full">
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDragOver={onDragOver}
        nodeTypes={TextNodeTypes}
        onDrop={onDrop}
        onInit={setReactFlowInstance}
      >
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
