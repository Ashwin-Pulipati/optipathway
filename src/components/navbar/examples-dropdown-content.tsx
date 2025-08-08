"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { proTipExamples } from "../main/examples-data/pro-tips-examples-data";
import { cn } from "@/lib/utils";

export function ExamplesDropdownContent({ childPath }: { childPath: string }) {
  const searchParams = useSearchParams();
  const scenarioId = searchParams.get("scenario");

  return (
    <>
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
            href={`${childPath}?scenario=${example.id}`}
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
            href={`${childPath}?scenario=${example.id}`}
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
    </>
  );
}
