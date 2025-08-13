"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "./constants/navbar.constants";
import ThemeToggle from "./theme-toggle";

const DesktopNavItems = () => {
  const pathname = usePathname();

  return (
    <div className="hidden lg:flex items-center space-x-4">
      {navItems.map((item) => {
        const isActive =
          item.path === pathname ||
          (item.children &&
            item.children.some((child) => pathname.startsWith(child.path)));

        return item.children ? (
          <DropdownMenu key={item.name}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="lg"
                className={cn(
                  "rounded-full",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground",
                  "hover:bg-primary hover:text-primary-foreground" // Simplified hover state
                )}
              >
                {item.name}
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              {item.children.map((child) => (
                <Link key={child.name} href={child.path}>
                  <DropdownMenuItem
                    className={cn(
                      "cursor-pointer",
                      pathname.startsWith(child.path) // Use startsWith for parent paths
                        ? "bg-accent text-accent-foreground"
                        : ""
                    )}
                  >
                    {child.name}
                  </DropdownMenuItem>
                </Link>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link key={item.name} href={item.path}>
            <Button
              variant="ghost"
              size="lg"
              className={cn(
                "rounded-full",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground",
                "hover:bg-primary hover:text-primary-foreground"
              )}
            >
              {item.name}
            </Button>
          </Link>
        );
      })}
      <ThemeToggle />
    </div>
  );
};

export default DesktopNavItems;
