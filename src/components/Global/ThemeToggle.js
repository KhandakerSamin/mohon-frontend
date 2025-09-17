"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme(); // use resolvedTheme
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? resolvedTheme : theme;

  return (
    <button
      onClick={() =>
        setTheme(currentTheme === "light" ? "dark" : "light")
      }
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-md border  bg-white text-sm font-medium transition-colors hover:bg-gray-100  dark:bg-gray-950 dark:hover:bg-gray-800 "
    >
      <Sun className={`h-4 w-4 transition-all ${currentTheme === "dark" ? "-rotate-90 scale-0" : "rotate-0 scale-100"}`} />
      <Moon className={`absolute h-4 w-4 transition-all ${currentTheme === "dark" ? "rotate-0 scale-100" : "rotate-90 scale-0"}`} />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
