import { AppNode } from "@/types/canvas-type";
import { type Edge } from "@xyflow/react";

export const INITIAL_EDGES: Edge[] = [
  {
    id: "n1-n2",
    source: "n1",
    target: "n2",
  },
];

export const INITIAL_NODES: AppNode[] = [
  {
    id: "n1",
    type: "message",
    position: { x: 100, y: 300 },
    data: { value: "Hii" },
  },
  {
    id: "n2",
    type: "message",
    position: { x: 500, y: 100 },
    data: { value: "How are you?" },
  },
];
