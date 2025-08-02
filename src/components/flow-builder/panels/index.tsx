"use client";

import { useCanvasStore } from "@/store/useCanvasStore";
import { NodesPanel } from "./NodesPanel";
import { SettingsPanel } from "./SettingsPanel";

export default function Panel() {
  const selectedNode = useCanvasStore((state) => state.selectedNode);
  return selectedNode ? <SettingsPanel /> : <NodesPanel />;
}
