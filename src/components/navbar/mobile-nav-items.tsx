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
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { proTipExamples } from "../main/examples-data/pro-tips-examples-data";
import { navItems } from "./constants/navbar.constants";
import ThemeToggle from "./theme-toggle";

const MobileNavItems = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const scenarioId = searchParams.get("scenario");

  return (
    <div className="lg:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          {navItems.map((item) => {
            const isActive =
              item.path === pathname ||
              (item.children &&
                item.children.some((child) => pathname.startsWith(child.path)));

            return item.children ? (
              <DropdownMenuSub key={item.name}>
                <DropdownMenuSubTrigger
                  className={cn(
                    "cursor-pointer",
                    isActive ? "bg-accent text-accent-foreground" : ""
                  )}
                >
                  {item.name}
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
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
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            ) : (
              <Link key={item.name} href={item.path}>
                <DropdownMenuItem
                  className={cn(
                    "cursor-pointer",
                    isActive ? "bg-accent text-accent-foreground" : ""
                  )}
                >
                  {item.name}
                </DropdownMenuItem>
              </Link>
            );
          })}
          <DropdownMenuSeparator />
          <DropdownMenuItem className="p-0">
            <ThemeToggle />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MobileNavItems;
