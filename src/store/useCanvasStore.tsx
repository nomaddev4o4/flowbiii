import { applyNodeChanges, applyEdgeChanges, addEdge } from "@xyflow/react";
import { create } from "zustand";
import { INITIAL_EDGES, INITIAL_NODES } from "@/constants/flow-builder";
import { ICanvasStore } from "@/types/canvas-type";

export const useCanvasStore = create<ICanvasStore>((set, get) => ({
  nodes: INITIAL_NODES,
  setNodes: (nodes) => set({ nodes }),
  onNodesChange: (changes) =>
    set({ nodes: applyNodeChanges(changes, get().nodes) }),

  edges: INITIAL_EDGES,
  onEdgesChange: (changes) =>
    set({ edges: applyEdgeChanges(changes, get().edges) }),
  setEdges: (edges) => set({ edges }),

  onConnect: (connection) => set({ edges: addEdge(connection, get().edges) }),

  selectedNode: null,
  setSelectedNode: (node) => set({ selectedNode: node }),
  updateSelectedNodeData: (value) => {
    const selectedNodeId = get().selectedNode?.id;
    const updatedNodes = get().nodes.map((node) => {
      if (node.id === selectedNodeId) {
        return {
          ...node,
          data: { ...node.data, value },
        };
      }
      return node;
    });

    const updatedSelectedNode = updatedNodes.find(
      (node) => node.id === selectedNodeId,
    );

    set({
      nodes: updatedNodes,
      selectedNode: updatedSelectedNode || null,
    });
  },
}));
