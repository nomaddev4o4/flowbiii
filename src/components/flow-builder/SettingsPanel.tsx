"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import { Card, CardContent, CardTitle } from "../ui/card";
import { MessageCircleMore } from "lucide-react";

export function SettingsPanel() {
  const onDragStart = (event: React.DragEvent, nodeType: string) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <Sidebar collapsible="none" className="rounded-lg">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Drag and drop</SidebarGroupLabel>
          <SidebarGroupContent>
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
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
