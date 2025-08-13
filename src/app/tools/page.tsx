"use client";

import { TimelineProvider } from "@/app/timeline-context";
import OptTimelineCalculator from "@/components/main/graduation-calculator";
import H1BCalculator from "@/components/main/h1b-calculator";
import EadTimelineCalculator from "@/components/main/initial-opt-calculator";
import StemOptCalculator from "@/components/main/stem-opt-calculator";
import VisualTimeline from "@/components/main/visual-timeline";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type ActiveTab = "timeline" | "ead" | "stem" | "h1b";

const toolNavigationItems = [
  { id: "timeline" as ActiveTab, name: "Graduation" },
  { id: "ead" as ActiveTab, name: "Initial OPT" },
  { id: "stem" as ActiveTab, name: "STEM OPT" },
  { id: "h1b" as ActiveTab, name: "H1B Cap-Gap" },
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
    const tabParam = searchParams.get("tab") as ActiveTab;
    if (tabParam && toolNavigationItems.some((item) => item.id === tabParam)) {
      setActiveTab(tabParam);
    } else {
      const defaultTab = "timeline";
      router.replace(`/tools?tab=${defaultTab}`);
      setActiveTab(defaultTab);
    }
  }, [searchParams, router]);

  const handleNavigation = (tab: ActiveTab) => {
    router.push(`/tools?tab=${tab}`);
  };

  return (
    <div className="mt-8 max-w-7xl mx-auto w-full px-4 md:px-0">
      <Card className="p-4 md:p-10 shadow-lg">
        <CardHeader className="text-center p-0">
          <CardTitle className="text-3xl font-serif font-extrabold text-foreground mb-4">
            Your F-1 Timeline Assistant
          </CardTitle>
          <CardDescription>
            Calculate key dates for your F-1 journey, from graduation to H1B
            Cap-Gap.
          </CardDescription>
        </CardHeader>

        <CardContent className="p-0 mt-10">
          <div className="mb-8">
            {/* --- UNIFIED RESPONSIVE TABS --- */}
            <div className="flex justify-start md:justify-center overflow-x-auto scrollbar-hide pb-2">
              <Tabs
                value={activeTab}
                onValueChange={(value) => handleNavigation(value as ActiveTab)}
              >
                <TabsList className="bg-muted p-1.5 rounded-full h-auto flex-shrink-0">
                  {toolNavigationItems.map((item) => (
                    <TabsTrigger
                      key={item.id}
                      value={item.id}
                      className="rounded-full px-6 py-2 text-sm font-semibold text-muted-foreground transition-all duration-300 ease-in-out data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-md"
                    >
                      {item.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row w-full gap-8">
            {/* Calculator Section */}
            <div className="lg:w-1/2 w-full">
              {activeTab === "timeline" && <OptTimelineCalculator />}
              {activeTab === "ead" && <EadTimelineCalculator />}
              {activeTab === "stem" && <StemOptCalculator />}
              {activeTab === "h1b" && <H1BCalculator />}
            </div>

            {/* Visual Timeline Section */}
            <div className="lg:w-1/2 w-full lg:border-l lg:pl-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-serif font-bold text-foreground">
                  Your F-1 Timeline
                </h2>
              </div>
              <VisualTimeline />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
