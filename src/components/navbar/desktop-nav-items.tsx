"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { proTipExamples } from "../main/examples-data/pro-tips-examples-data";
import { navItems } from "./constants/navbar.constants";
import ThemeToggle from "./theme-toggle";


const DesktopNavItems = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const scenarioId = searchParams.get("scenario");

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
                  "hover:bg-accent hover:text-primary-foreground"
                )}
              >
                {item.name}
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              {item.children.map((child) => {
                if (child.name === "Examples") {
                  return (
                    <DropdownMenuSub key={child.name}>
                      <DropdownMenuSubTrigger
                        className={cn(
                          "cursor-pointer",
                          pathname.startsWith(child.path)
                            ? "bg-accent text-accent-foreground"
                            : ""
                        )}
                      >
                        {child.name}
                      </DropdownMenuSubTrigger>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem
                          className="font-bold text-foreground cursor-default"
                          disabled
                        >
                          Initial OPT Scenarios
                        </DropdownMenuItem>
                        {proTipExamples
                          .filter((ex) => ex.category === "Initial OPT")
                          .map((example) => (
                            <Link
                              key={example.id}
                              href={`${child.path}?scenario=${example.id}`}
                            >
                              <DropdownMenuItem
                                className={cn(
                                  "cursor-pointer",
                                  scenarioId === example.id
                                    ? "bg-accent text-accent-foreground"
                                    : ""
                                )}
                              >
                                {example.title}
                              </DropdownMenuItem>
                            </Link>
                          ))}
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          className="font-bold text-foreground cursor-default"
                          disabled
                        >
                          STEM OPT Scenarios
                        </DropdownMenuItem>
                        {proTipExamples
                          .filter((ex) => ex.category === "STEM OPT")
                          .map((example) => (
                            <Link
                              key={example.id}
                              href={`${child.path}?scenario=${example.id}`}
                            >
                              <DropdownMenuItem
                                className={cn(
                                  "cursor-pointer",
                                  scenarioId === example.id
                                    ? "bg-accent text-accent-foreground"
                                    : ""
                                )}
                              >
                                {example.title}
                              </DropdownMenuItem>
                            </Link>
                          ))}
                      </DropdownMenuSubContent>
                    </DropdownMenuSub>
                  );
                }

                return (
                  <Link key={child.name} href={child.path}>
                    <DropdownMenuItem
                      className={cn(
                        "cursor-pointer",
                        child.path === pathname
                          ? "bg-accent text-accent-foreground"
                          : ""
                      )}
                    >
                      {child.name}
                    </DropdownMenuItem>
                  </Link>
                );
              })}
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
                "hover:bg-accent hover:text-primary-foreground"
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
