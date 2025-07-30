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
  return (
    <Sidebar collapsible="none" className="rounded-lg">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Drag and drop</SidebarGroupLabel>
          <SidebarGroupContent>
            <Card>
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
