import { Button } from "@/components/ui/button";
import { Moon, Save } from "lucide-react";
import ThemeToggleBtn from "../ThemeToggleBtn";

export default function TopNavbar() {
  return (
    <div className="sticky top-0 z-50 flex h-16 items-center justify-between px-6">
      <h1 className="text-4xl font-bold">flowbiii</h1>

      <div className="flex items-center gap-2">
        <ThemeToggleBtn />
        <Button size="lg">
          <Save />
          Save
        </Button>
      </div>
    </div>
  );
}
