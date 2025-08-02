import {
  Edge,
  Node,
  OnConnect,
  OnEdgesChange,
  OnNodesChange,
} from "@xyflow/react";

export type MessageNode = Node<
  {
    value: string;
  },
  "message"
>;

export type AppNode = MessageNode;

export interface ICanvasStore {
  nodes: AppNode[];
  setNodes: (nodes: AppNode[]) => void;
  onNodesChange: OnNodesChange<AppNode>;

  edges: Edge[];
  setEdges: (edges: Edge[]) => void;
  onEdgesChange: OnEdgesChange;

  onConnect: OnConnect;

  selectedNode: AppNode | null;
  setSelectedNode: (node: AppNode | null) => void;
  updateSelectedNodeData: (value: string) => void;
}
