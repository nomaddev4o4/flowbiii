"use client";

import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";
import ThemeToggleBtn from "../ThemeToggleBtn";
import { useCanvasStore } from "@/store/useCanvasStore";

export default function TopNavbar() {
  const validateAndSaveFlow = useCanvasStore(
    (state) => state.validateAndSaveFlow,
  );

  return (
    <div className="flex h-16 items-center justify-between px-6">
      <h1 className="text-4xl font-bold">flowbiii</h1>

      <div className="flex items-center gap-2">
        <ThemeToggleBtn />
        <Button size="lg" onClick={validateAndSaveFlow}>
          <Save />
          Save
        </Button>
      </div>
    </div>
  );
}
