"use client";

import { useCanvasStore } from "@/store/useCanvasStore";
import { NodesPanel } from "./NodesPanel";
import { SettingsPanel } from "./SettingsPanel";

export default function Panel() {
  const selectedNode = useCanvasStore((state) => state.selectedNode);
  // Show settings panel when node is selected, otherwise show nodes panel
  return selectedNode ? <SettingsPanel /> : <NodesPanel />;
}
