import { type Edge, type Node } from "@xyflow/react";

export const INITIAL_EDGES: Edge[] = [
  {
    id: "n1-n2",
    source: "n1",
    target: "n2",
  },
];

export const INITIAL_NODES: Node[] = [
  {
    id: "n1",
    position: { x: 100, y: 300 },
    type: "textNode",
    data: { value: "Hii" },
  },
  {
    id: "n2",
    position: { x: 500, y: 100 },
    type: "textNode",
    data: { value: "How are you?" },
  },
];
