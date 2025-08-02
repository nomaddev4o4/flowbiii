"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { MessageCircleMore } from "lucide-react";

export function NodesPanel() {
  const onDragStart = (event: React.DragEvent, nodeType: string) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <Card className="w-full max-w-xs">
      <CardHeader>
        <CardTitle>Nodes</CardTitle>
        <CardDescription>Drag and drop nodes into the canvas</CardDescription>
      </CardHeader>
      <CardContent>
        <Card
          draggable
          onDragStart={(event) => onDragStart(event, "textNode")}
          className="cursor-grab transition-shadow hover:shadow-md active:cursor-grabbing"
        >
          <CardContent>
            <CardTitle className="flex items-center gap-1">
              <MessageCircleMore className="size-4" />
              Message
            </CardTitle>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
