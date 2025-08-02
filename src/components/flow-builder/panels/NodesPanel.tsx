"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { NODE_REGISTRY, NodeDefinition } from "@/lib/node-registry";

interface NodeCardProps {
  nodeDefinition: NodeDefinition;
  onDragStart: (event: React.DragEvent, nodeType: string) => void;
}

function NodeCard({ nodeDefinition, onDragStart }: NodeCardProps) {
  const { type, label, icon: Icon, description } = nodeDefinition;

  return (
    <Card
      draggable
      onDragStart={(event) => onDragStart(event, type)}
      className="cursor-grab gap-2 p-4 transition-shadow hover:shadow-md active:cursor-grabbing"
    >
      <CardHeader className="p-0">
        <CardTitle className="flex items-center gap-1">
          <Icon className="size-4" />
          {label}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}

export function NodesPanel() {
  const onDragStart = (event: React.DragEvent, nodeType: string) => {
    // Store node type for drop handler
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <Card className="w-full max-w-xs">
      <CardHeader>
        <CardTitle>Nodes</CardTitle>
        <CardDescription>Drag and drop nodes into the canvas</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        {NODE_REGISTRY.map((nodeDefinition) => (
          <NodeCard
            key={nodeDefinition.type}
            nodeDefinition={nodeDefinition}
            onDragStart={onDragStart}
          />
        ))}
      </CardContent>
    </Card>
  );
}
