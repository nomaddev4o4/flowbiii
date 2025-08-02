"use client";

import { Handle, NodeTypes, Position } from "@xyflow/react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { MessageCircleMore } from "lucide-react";
import { cn } from "@/lib/utils";

export const TextNodeTypes: NodeTypes = {
  textNode: TextNode,
};

export default function TextNode({
  data,
  selected,
}: {
  data: { value: string };
  selected: boolean;
}) {
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
        <p className="text-muted-foreground text-sm">{message}</p>
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
