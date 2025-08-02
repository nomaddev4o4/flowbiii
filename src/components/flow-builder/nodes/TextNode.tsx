"use client";

import { Handle, NodeProps, Position } from "@xyflow/react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { MessageCircleMore } from "lucide-react";
import { cn } from "@/lib/utils";
import { MessageNode } from "@/types/canvas-type";

export default function TextNode({ data, selected }: NodeProps<MessageNode>) {
  const message = data.value;

  return (
    <Card
      className={cn(
        "w-[250px] gap-2 p-4",
        selected && "border-primary border-2",
      )}
    >
      <CardHeader className="p-0">
        <CardTitle className="flex items-center gap-1">
          <MessageCircleMore className="size-4" />
          Message
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <p
          className={`text-sm break-words ${!message?.trim() ? "text-red-500" : "text-muted-foreground"}`}
        >
          {message?.trim() || "No message set"}
        </p>
        <Handle
          type="source"
          position={Position.Right}
          className="!bg-primary !h-3 !w-3"
        />
        <Handle
          type="target"
          position={Position.Left}
          className="!bg-primary !h-3 !w-3"
        />
      </CardContent>
    </Card>
  );
}
