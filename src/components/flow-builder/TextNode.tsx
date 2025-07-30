"use client";

import { useCallback, useState } from "react";
import { Handle, NodeTypes, Position } from "@xyflow/react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { MessageCircleMore } from "lucide-react";

export const TextNodeTypes: NodeTypes = {
  textNode: TextNode,
};

export default function TextNode({ data }: { data: { value: string } }) {
  const [message, setMessage] = useState(data.value);

  const onTextChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  }, []);

  return (
    <Card className="w-[250px]">
      <CardHeader>
        <CardTitle className="flex items-center gap-1">
          <MessageCircleMore className="size-4" />
          Message
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Input value={message} onChange={onTextChange} />
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
