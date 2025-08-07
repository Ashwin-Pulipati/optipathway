"use client";

import { TimelineProvider } from "@/app/timeline-context";
import OptTimelineCalculator from "@/components/main/graduation-calculator";
import H1BCalculator from "@/components/main/h1b-calculator";
import EadTimelineCalculator from "@/components/main/initial-opt-calculator";
import StemOptCalculator from "@/components/main/stem-opt-calculator";
import VisualTimeline from "@/components/main/visual-timeline";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { ToolCaseIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type ActiveTab = "timeline" | "ead" | "stem" | "h1b";

const toolNavigationItems = [
  { id: "timeline", name: "Graduation" },
  { id: "ead", name: "Initial OPT" },
  { id: "stem", name: "STEM OPT" },
  { id: "h1b", name: "H1B Cap-Gap" },
];

export default function ToolsPage() {
  return (
    <TimelineProvider>
      <ToolsPageContent />
    </TimelineProvider>
  );
}

const ToolsPageContent: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<ActiveTab>("timeline");

  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (
      tabParam &&
      (["timeline", "ead", "stem", "h1b"] as ActiveTab[]).includes(
        tabParam as ActiveTab
      )
    ) {
      setActiveTab(tabParam as ActiveTab);
    } else {
      router.replace("/tools?tab=timeline");
      setActiveTab("timeline");
    }
  }, [searchParams, router]);

  return (
    <div className="bg-background text-foreground min-h-screen p-4 flex flex-col items-center font-sans antialiased">
      <h1 className="text-3xl font-serif font-extrabold text-center mb-8 tracking-tight mt-4">
        Your F-1 Timeline Assistant
      </h1>
      <div className="flex flex-col lg:flex-row w-full max-w-7xl gap-6">
        <Card className="lg:w-1/2 w-full p-6 transition-all duration-300 flex flex-col">
          <div className="flex justify-end items-center">
            <TooltipProvider>
              <Tooltip>
                <DropdownMenu>
                  <TooltipTrigger asChild>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="secondary"
                        size="icon"
                        aria-label="Select Tool"
                        className="h-10 w-10"
                      >
                        <ToolCaseIcon className="h-10 w-10 text-primary-foreground" />
                      </Button>
                    </DropdownMenuTrigger>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">Explore Tools</TooltipContent>
                  <DropdownMenuContent align="end" className="w-48">
                    {toolNavigationItems.map((item) => (
                      <DropdownMenuItem
                        key={item.id}
                        onClick={() => router.push(`/tools?tab=${item.id}`)}
                        className={cn(
                          "cursor-pointer",
                          activeTab === item.id
                            ? "bg-accent text-accent-foreground"
                            : ""
                        )}
                      >
                        {item.name}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </Tooltip>
            </TooltipProvider>
          </div>
          {activeTab === "timeline" && <OptTimelineCalculator />}
          {activeTab === "ead" && <EadTimelineCalculator />}
          {activeTab === "stem" && <StemOptCalculator />}
          {activeTab === "h1b" && <H1BCalculator />}
        </Card>
        <Card className="lg:w-1/2 w-full p-6 transition-all duration-300">
          <CardHeader className="text-center p-0 mb-6">
            <CardTitle className="text-2xl font-serif font-bold text-foreground">
              Your Visual Timeline
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <VisualTimeline />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
