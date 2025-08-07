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
import { cn } from "@/lib/utils";
import { addDays, format, parseISO, subDays } from "date-fns";
import { useEffect, useState } from "react";
import { useTimeline } from "../../app/timeline-context";

const H1BCalculator: React.FC = () => {
  const { stemOptEndDate, setH1bPetitionDate, setH1bCapGapEndDate } =
    useTimeline();

  const [stemOptEndDateInput, setStemOptEndDateInput] = useState<string>("");
  const [h1bPetitionDateInput, setH1bPetitionDateInput] = useState<string>("");
  const [showResults, setShowResults] = useState<boolean>(false);

  useEffect(() => {
    // Autofill the STEM OPT end date input if it's available from the context.
    if (stemOptEndDate) {
      setStemOptEndDateInput(stemOptEndDate);
      setShowResults(false);
    }
  }, [stemOptEndDate]);

  useEffect(() => {
    // Suggest H1B petition date based on the STEM OPT end date input.
    if (stemOptEndDateInput) {
      const stemEnd = parseISO(stemOptEndDateInput);
      let h1bPetitionYear = stemEnd.getFullYear();
      if (stemEnd.getMonth() >= 9) {
        h1bPetitionYear += 2;
      } else {
        h1bPetitionYear += 1;
      }
      const suggestedPetitionDate = new Date(h1bPetitionYear, 3, 1);
      setH1bPetitionDateInput(format(suggestedPetitionDate, "yyyy-MM-dd"));
      setShowResults(false);
    } else {
      setH1bPetitionDateInput("");
      setShowResults(false);
    }
  }, [stemOptEndDateInput]);

  const formatDate = (date: Date): string => format(date, "MMMM do, yyyy");

  const h1bStartMonth = 9;
  const h1bStartDay = 1;

  let capGapStartDateCalc: Date | null = null;
  let h1bStartDateCalc: Date | null = null;
  let h1bCapGapEndDateCalc: Date | null = null;

  if (h1bPetitionDateInput && stemOptEndDateInput) {
    const stemEnd = parseISO(stemOptEndDateInput);
    const petitionDate = parseISO(h1bPetitionDateInput);

    const h1bStartYear = petitionDate.getFullYear();
    h1bStartDateCalc = new Date(h1bStartYear, h1bStartMonth, h1bStartDay);

    h1bCapGapEndDateCalc = subDays(h1bStartDateCalc, 1);
    capGapStartDateCalc = addDays(stemEnd, 1);
  }

  const handleCalculate = () => {
    if (h1bPetitionDateInput && h1bCapGapEndDateCalc) {
      setShowResults(true);
      setH1bPetitionDate(h1bPetitionDateInput);
      setH1bCapGapEndDate(format(h1bCapGapEndDateCalc, "yyyy-MM-dd"));
    }
  };

  return (
    <div className="space-y-6">
      <CardHeader>
        <CardTitle className="text-center font-serif text-2xl">
          H1B Cap-Gap Extension
        </CardTitle>
        <CardDescription className="text-center">
          This calculator helps you understand your cap-gap period after STEM
          OPT.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Label htmlFor="stemOptEndDate" className="mb-2">
            STEM OPT End Date:
          </Label>
          <Input
            type="date"
            id="stemOptEndDate"
            value={stemOptEndDateInput}
            onChange={(e) => setStemOptEndDateInput(e.target.value)}
            disabled={!!stemOptEndDate} // Disable if date is from context
            className={cn(
              "w-full",
              !!stemOptEndDate &&
                "bg-muted text-muted-foreground cursor-not-allowed"
            )}
          />
        </div>

        <div className="mb-6">
          <Label htmlFor="h1bPetitionDate" className="mb-2">
            H1B Petition Filing Date:
          </Label>
          <Input
            type="date"
            id="h1bPetitionDate"
            value={h1bPetitionDateInput}
            onChange={(e) => {
              setH1bPetitionDateInput(e.target.value);
              setShowResults(false);
            }}
          />
        </div>

        <Button
          onClick={handleCalculate}
          disabled={!stemOptEndDateInput || !h1bPetitionDateInput}
          className="w-full"
          size="lg"
        >
          Calculate Cap-Gap Dates
        </Button>
      </CardContent>

      {showResults &&
        h1bPetitionDateInput &&
        stemOptEndDateInput &&
        capGapStartDateCalc &&
        h1bCapGapEndDateCalc &&
        h1bStartDateCalc && (
          <div className="mt-8 space-y-4">
            <Card className="bg-secondary/20 border-secondary shadow-inner">
              <CardContent className="pt-6 space-y-4">
                <p className="text-foreground font-medium mb-4">
                  Here&apos;s your clear H1B cap-gap timeline:
                </p>
                <ul className="space-y-4 text-sm">
                  <li className="p-4 bg-background rounded-lg shadow-sm border border-border">
                    <span className="font-bold text-foreground block mb-1 font-serif">
                      1. H1B Cap-Gap Start Date:
                    </span>
                    <div className="flex flex-wrap items-baseline gap-x-1">
                      <span className="text-primary font-semibold">
                        {formatDate(capGapStartDateCalc)}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground block mt-2">
                      (Day after your STEM OPT ends)
                    </span>
                  </li>
                  <li className="p-4 bg-background rounded-lg shadow-sm border border-border">
                    <span className="font-bold text-foreground block mb-1 font-serif">
                      2. H1B Cap-Gap End Date:
                    </span>
                    <div className="flex flex-wrap items-baseline gap-x-1">
                      <span className="text-primary font-semibold">
                        {formatDate(h1bCapGapEndDateCalc)}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground block mt-2">
                      (Your status is extended until this date)
                    </span>
                  </li>
                  <li className="p-4 bg-background rounded-lg shadow-sm border border-border">
                    <span className="font-bold text-foreground block mb-1 font-serif">
                      3. H1B Start Date:
                    </span>
                    <div className="flex flex-wrap items-baseline gap-x-1">
                      <span className="text-primary font-semibold">
                        {formatDate(h1bStartDateCalc)}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground block mt-2">
                      (Your H1B status begins)
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        )}
    </div>
  );
};

export default H1BCalculator;
