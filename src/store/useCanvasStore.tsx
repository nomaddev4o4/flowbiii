import { applyNodeChanges, applyEdgeChanges, addEdge } from "@xyflow/react";
import { create } from "zustand";
import { toast } from "sonner";
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

  validateAndSaveFlow: () => {
    const { nodes, edges } = get();

    // Check for nodes with empty messages
    const emptyNodes = nodes.filter(
      (node) => !node.data.value || node.data.value.trim() === "",
    );
    if (emptyNodes.length > 0) {
      toast.error("Cannot save flow with empty message nodes");
      return false;
    }

    // Check for nodes without connections
    if (nodes.length > 1) {
      const connectedNodeIds = new Set();
      edges.forEach((edge) => {
        connectedNodeIds.add(edge.source);
        connectedNodeIds.add(edge.target);
      });

      const orphanNodes = nodes.filter(
        (node) => !connectedNodeIds.has(node.id),
      );
      if (orphanNodes.length > 0) {
        toast.error("Cannot save flow with disconnected nodes");
        return false;
      }
    }

    console.log("Saving flow:", { nodes, edges });
    toast.success("Flow saved successfully!");
    return true;
  },
}));
