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
          onDragStart={(event) => onDragStart(event, "message")}
          className="cursor-grab gap-2 p-4 transition-shadow hover:shadow-md active:cursor-grabbing"
        >
          <CardHeader className="p-0">
            <CardTitle className="flex items-center gap-1">
              <MessageCircleMore className="size-4" />
              Message
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <p className="text-muted-foreground text-sm">
              Add a new message to the canvas.
            </p>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
