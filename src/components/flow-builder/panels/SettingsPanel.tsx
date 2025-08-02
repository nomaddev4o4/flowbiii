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

export function SettingsPanel() {
  return (
    <Card className="w-full max-w-xs">
      <CardHeader>
        <CardTitle>Settings</CardTitle>
        <CardDescription>Configure the settings for the nodes</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <Label>Message</Label>
          <Textarea />
        </div>
      </CardContent>
    </Card>
  );
}
