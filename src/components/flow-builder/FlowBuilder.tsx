import { SettingsPanel } from "./SettingsPanel";
import { SidebarProvider } from "../ui/sidebar";
import FlowBuilderCanvas from "./Canvas";

export default function FlowBuilder() {
  return (
    <SidebarProvider className="h-full gap-2">
      <main className="flex-1">
        <FlowBuilderCanvas />
      </main>

      <SettingsPanel />
    </SidebarProvider>
  );
}
