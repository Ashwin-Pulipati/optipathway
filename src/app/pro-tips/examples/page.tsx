"use client";

import { proTipExamples } from "@/components/main/examples-data/pro-tips-examples-data"; // Import your example data
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const ExamplesPage: React.FC = () => {
  const searchParams = useSearchParams();
  const [activeExampleId, setActiveExampleId] = useState<string | null>(null);
  const [currentExample, setCurrentExample] = useState<any | null>(null);

  useEffect(() => {
    const scenarioId = searchParams.get("scenario");
    if (scenarioId) {
      setActiveExampleId(scenarioId);
      const foundExample = proTipExamples.find((ex) => ex.id === scenarioId);
      setCurrentExample(foundExample);
    } else {
      const defaultExample = proTipExamples[0];
      setActiveExampleId(defaultExample?.id || null);
      setCurrentExample(defaultExample || null);
    }
  }, [searchParams]);

  if (!currentExample) {
    return (
      <div className="bg-background text-foreground min-h-screen flex items-center justify-center p-4">
        <p className="text-muted-foreground text-lg">
          No examples found. Please check your data source.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-background text-foreground min-h-screen p-4 font-sans antialiased">
      <div className="mt-8 max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-8">
        {/* Left Sidebar: List of Examples */}
        <div className="w-full md:w-1/4 space-y-2">
          <h3 className="text-xl font-bold font-serif mb-4 text-foreground">
            Scenarios
          </h3>
          <nav className="flex flex-col space-y-2">
            {proTipExamples.map((example) => (
              <Link
                key={example.id}
                href={`/pro-tips/examples?scenario=${example.id}`}
                className={cn(
                  "p-3 rounded-lg transition-colors duration-200 ease-in-out font-medium",
                  activeExampleId === example.id
                    ? "bg-accent text-accent-foreground shadow-sm"
                    : "hover:bg-muted text-muted-foreground"
                )}
              >
                {example.title}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right Content: Details of the Active Example */}
        <Card className="w-full md:w-3/4 space-y-8 p-10 shadow-lg">
          <CardHeader className="text-center p-0">
            <CardTitle className="text-3xl font-serif font-extrabold text-foreground mb-4">
              Pro Tips: Scenario Examples
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 p-0">
            <h2 className="text-2xl font-serif font-bold text-foreground border-b border-border pb-2">
              {currentExample.title}
            </h2>
            <div className="space-y-4">{currentExample.content}</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ExamplesPage;
