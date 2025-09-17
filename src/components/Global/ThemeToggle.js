"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative inline-flex h-8 w-16 items-center rounded-full p-1 transition-all duration-500 ease-out  ${
        isDark 
          ? "bg-slate-700 " 
          : "bg-gray-200 "
      }`}
    >
      {/* Background Icons */}
      <div className="absolute inset-0 flex items-center justify-between px-2">
        <Sun className={`h-4 w-4 transition-all duration-300 ${
          isDark ? "text-slate-500 opacity-50" : "text-amber-500 opacity-100"
        }`} />
        <Moon className={`h-4 w-4 transition-all duration-300 ${
          isDark ? "text-blue-400 opacity-100" : "text-gray-400 opacity-50"
        }`} />
      </div>
      
      {/* Slider Circle */}
      <div
        className={`relative h-6 w-6 transform rounded-full bg-white shadow-lg transition-all duration-500 ease-out ${
          isDark ? "translate-x-8" : "translate-x-0"
        }`}
      >
        {/* Active Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Sun className={`h-4 w-4 text-amber-500 transition-all duration-300 ${
            isDark ? "rotate-180 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
          }`} />
          <Moon className={`absolute h-4 w-4 text-slate-600 transition-all duration-300 ${
            isDark ? "rotate-0 scale-100 opacity-100" : "rotate-180 scale-0 opacity-0"
          }`} />
        </div>
      </div>
      
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}