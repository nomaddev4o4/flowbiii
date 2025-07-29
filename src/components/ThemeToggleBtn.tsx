"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggleBtn() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  function updateTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <Button variant="ghost" size="icon" onClick={updateTheme}>
      {theme === "dark" ? <Sun /> : <Moon />}
    </Button>
  );
}
