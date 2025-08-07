"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addDays, addYears, format, parseISO } from "date-fns";
import { useState } from "react";
import { useTimeline } from "../../app/timeline-context";

const EadTimelineCalculator: React.FC = () => {
  const { setInitialOptStartDate, setInitialOptEndDate } = useTimeline();
  const [initialOptStartDateInput, setInitialOptStartDateInput] =
    useState<string>("");
  const [showResults, setShowResults] = useState<boolean>(false);

  const formatDate = (date: Date): string => format(date, "MMMM do, yyyy");
  const initialUnemploymentLimit = 90;

  let initialOptEndDateCalc: Date | null = null;
  let initialUnemploymentDeadline: Date | null = null;

  if (initialOptStartDateInput) {
    const startDate = parseISO(initialOptStartDateInput);
    initialOptEndDateCalc = addDays(addYears(startDate, 1), -1);
    initialUnemploymentDeadline = addDays(
      startDate,
      initialUnemploymentLimit - 1
    );
  }

  const handleCalculate = () => {
    if (initialOptStartDateInput && initialOptEndDateCalc) {
      setShowResults(true);
      setInitialOptStartDate(initialOptStartDateInput);
      setInitialOptEndDate(format(initialOptEndDateCalc, "yyyy-MM-dd"));
    }
  };

  return (
    <div className="space-y-6">
      <CardHeader>
        <CardTitle className="text-center font-serif text-2xl">
          Initial OPT Timeline
        </CardTitle>
        <CardDescription className="text-center">
          Enter your EAD card start date.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <Label htmlFor="initialOptStartDate" className="mb-2">
            EAD Card Start Date:
          </Label>
          <Input
            type="date"
            id="initialOptStartDate"
            value={initialOptStartDateInput}
            onChange={(e) => {
              setInitialOptStartDateInput(e.target.value);
              setShowResults(false);
            }}
          />
        </div>
        <Button
          onClick={handleCalculate}
          disabled={!initialOptStartDateInput}
          className="w-full"
          size="lg"
        >
          Calculate Timeline
        </Button>
      </CardContent>

      {showResults &&
        initialOptStartDateInput &&
        initialOptEndDateCalc &&
        initialUnemploymentDeadline && (
          <div className="mt-8 space-y-4">
            <Card className="bg-secondary/20 border-secondary shadow-inner">
              <CardContent className="pt-6 space-y-4">
                <p className="text-foreground font-medium mb-4">
                  Here&apos;s your clear timeline:
                </p>
                <ul className="space-y-4 text-sm">
                  <div className="p-4 bg-background rounded-lg shadow-sm border border-border">
                    <span className="font-bold text-foreground block mb-1">
                      1. Initial OPT End Date:
                    </span>
                    <div className="flex flex-wrap items-baseline gap-x-1">
                      <span className="text-primary font-semibold">
                        {formatDate(initialOptEndDateCalc)}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 bg-background rounded-lg shadow-sm border border-border">
                    <span className="font-bold text-foreground block mb-1">
                      2. Total Unemployment Days:
                    </span>
                    <div className="flex flex-wrap items-baseline gap-x-1">
                      <span className="text-primary font-semibold">
                        {initialUnemploymentLimit} days total, cumulative.
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground block mt-2">
                      (This is a total count over your entire OPT. The clock
                      starts ticking from your EAD start date.)
                    </span>
                  </div>
                  <div className="p-4 bg-background rounded-lg shadow-sm border border-border">
                    <span className="font-bold text-foreground block mb-1">
                      3. Earliest Possible Unemployment Deadline:
                    </span>
                    <div className="flex flex-wrap items-baseline">
                      <span className="text-primary font-semibold">
                        {formatDate(initialUnemploymentDeadline)}
                      </span>
                    </div>
                  </div>
                </ul>
              </CardContent>
            </Card>
          </div>
        )}
    </div>
  );
};

export default EadTimelineCalculator;
