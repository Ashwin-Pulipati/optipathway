"use client";

import { cn } from "@/lib/utils";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // This hook is essential to prevent a hydration mismatch.
  // The UI shouldn't be rendered until the client-side theme is known.
  useEffect(() => {
    setMounted(true);
  }, []);

  const themeOptions = [
    { id: "light", label: "Light", icon: <Sun size={18} /> },
    { id: "dark", label: "Dark", icon: <Moon size={18} /> },
    { id: "system", label: "System", icon: <Monitor size={18} /> },
  ];

  // Render a skeleton loader until the component is mounted to prevent layout shift.
  if (!mounted) {
    return (
      <div
        className="flex w-full items-center gap-1 rounded-full bg-muted p-1"
        aria-hidden="true"
      >
        <div className="h-[34px] w-full rounded-full" />
        <div className="h-[34px] w-full rounded-full" />
        <div className="h-[34px] w-full rounded-full" />
      </div>
    );
  }

  return (
    <TooltipProvider delayDuration={150}>
      <div className="flex w-full items-center gap-1 rounded-full bg-muted p-1">
        {themeOptions.map((option) => {
          const isActive = theme === option.id;
          return (
            <Tooltip key={option.id}>
              <TooltipTrigger asChild>
                <button
                  onClick={() => setTheme(option.id)}
                  aria-label={`Switch to ${option.label} theme`}
                  className={cn(
                    "flex w-full items-center justify-center rounded-full p-2 transition-colors duration-200",
                    isActive
                      ? "bg-background text-primary shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {option.icon}
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{option.label}</p>
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </TooltipProvider>
  );
}
