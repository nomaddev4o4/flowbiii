"use client";

import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Label } from "@/components/ui/label";
import { useCanvasStore } from "@/store/useCanvasStore";

export function SettingsPanel() {
  const { selectedNode, updateSelectedNodeData } = useCanvasStore();

  const handleChange = (value: string) => {
    updateSelectedNodeData(value);
  };

  return (
    <Card className="w-full max-w-xs">
      <CardHeader>
        <CardTitle>Settings</CardTitle>
        <CardDescription>Configure the settings for the nodes</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <Label>Message</Label>
          <Textarea
            value={selectedNode?.data.value}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
      </CardContent>
    </Card>
  );
}
