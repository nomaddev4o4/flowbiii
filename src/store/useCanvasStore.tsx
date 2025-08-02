import { Node } from "@xyflow/react";
import { create } from "zustand";

interface CounterStore {
  selectedNode: Node | null;
}

export const useCanvasStore = create<CounterStore>(() => ({
  selectedNode: null,
}));
