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
import { addDays, addYears, format, isAfter, isBefore, parseISO } from "date-fns";
import { useEffect, useState } from "react";
import { useTimeline } from "../../app/timeline-context";
import { cn } from "@/lib/utils";

const EadTimelineCalculator: React.FC = () => {
  const { graduationDate, setInitialOptStartDate, setInitialOptEndDate } =
    useTimeline();
  const [initialOptStartDateInput, setInitialOptStartDateInput] =
    useState<string>("");
  const [showResults, setShowResults] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  // Determine the valid date range for OPT start date
  const minOptStartDate = graduationDate
    ? format(parseISO(graduationDate), "yyyy-MM-dd")
    : "";
  const maxOptStartDate = graduationDate
    ? format(addDays(parseISO(graduationDate), 60), "yyyy-MM-dd")
    : "";

  useEffect(() => {
    // Clear the input if the graduation date is removed
    if (!graduationDate) {
      setInitialOptStartDateInput("");
      setShowResults(false);
      setError("");
    }
  }, [graduationDate]);

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
    setError(""); // Reset error on new calculation
    if (!initialOptStartDateInput || !graduationDate) return;

    const selectedStartDate = parseISO(initialOptStartDateInput);
    const gradDate = parseISO(graduationDate);
    const gracePeriodEndDate = addDays(gradDate, 60);

    // Final validation check before showing results
    if (isBefore(selectedStartDate, gradDate)) {
      setError("OPT start date cannot be before your graduation date.");
      setShowResults(false);
      return;
    }

    if (isAfter(selectedStartDate, gracePeriodEndDate)) {
      setError("OPT start date must be within 60 days after graduation.");
      setShowResults(false);
      return;
    }

    if (initialOptEndDateCalc) {
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
        {!graduationDate && (
          <div className="mb-4 text-center text-sm text-destructive p-3 bg-destructive/10 rounded-lg">
            Please enter your graduation date in the previous step first.
          </div>
        )}
        <div className="mb-6">
          <Label htmlFor="initialOptStartDate" className="mb-2">
            EAD Card Start Date:
          </Label>
          <Input
            type="date"
            id="initialOptStartDate"
            value={initialOptStartDateInput}
            min={minOptStartDate}
            max={maxOptStartDate}
            disabled={!graduationDate}
            onChange={(e) => {
              setInitialOptStartDateInput(e.target.value);
              setShowResults(false);
              setError(""); // Clear error when user changes date
            }}
            className={cn(!graduationDate && "cursor-not-allowed bg-muted/50")}
          />
          {error && <p className="text-sm text-destructive mt-2">{error}</p>}
        </div>
        <Button
          onClick={handleCalculate}
          disabled={!initialOptStartDateInput || !graduationDate}
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
            <Card className="bg-secondary/20 border-secondary shadow-inner py-0">
              <CardContent className="p-4 md:p-6 pt-6 space-y-4">
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
