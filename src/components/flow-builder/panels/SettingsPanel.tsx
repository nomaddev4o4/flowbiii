"use client";

import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Label } from "@/components/ui/label";
import { useCanvasStore } from "@/store/useCanvasStore";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const MAX_MESSAGE_LENGTH = 200;

export function SettingsPanel() {
  const { selectedNode, setSelectedNode, updateSelectedNodeData } =
    useCanvasStore();

  const handleChange = (value: string) => {
    // Prevent exceeding character limit
    if (value.length > MAX_MESSAGE_LENGTH) {
      return;
    }
    updateSelectedNodeData(value);
  };

  return (
    <Card className="w-full max-w-xs">
      <CardHeader>
        <CardTitle>Settings</CardTitle>
        <CardDescription>Configure the settings for the nodes</CardDescription>
        <CardAction>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setSelectedNode(null)}
          >
            <X />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <Label>Message</Label>
          <Textarea
            value={selectedNode?.data.value}
            onChange={(e) => handleChange(e.target.value)}
            maxLength={MAX_MESSAGE_LENGTH}
          />
          <p
            className={cn(
              "text-muted-foreground text-sm",
              selectedNode?.data.value.length === MAX_MESSAGE_LENGTH &&
                "text-destructive",
            )}
          >
            {selectedNode?.data.value.length} / {MAX_MESSAGE_LENGTH}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
