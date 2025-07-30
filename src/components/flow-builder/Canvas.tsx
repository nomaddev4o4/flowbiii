import {
  Background,
  BackgroundVariant,
  ConnectionMode,
  Edge,
  Node,
  ReactFlow,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { TextNodeTypes } from "./TextNode";

const initialEdges: Edge[] = [
  {
    id: "n1-n2",
    source: "n1",
    target: "n2",
  },
];

const initialNodes: Node[] = [
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

export default function FlowBuilderCanvas() {
  return (
    <ReactFlow
      nodes={initialNodes}
      nodeTypes={TextNodeTypes}
      edges={initialEdges}
      connectionMode={ConnectionMode.Loose}
    >
      <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
    </ReactFlow>
  );
}
