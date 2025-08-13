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
import {
  addDays,
  format,
  isAfter,
  isBefore,
  parseISO,
  subDays,
} from "date-fns";
import { useEffect, useState } from "react";
import { useTimeline } from "../../app/timeline-context";

const H1BCalculator: React.FC = () => {
  const {
    graduationDate, // <-- Import graduationDate from context
    stemOptEndDate,
    setH1bPetitionDate,
    setH1bCapGapEndDate,
  } = useTimeline();

  const [stemOptEndDateInput, setStemOptEndDateInput] = useState<string>("");
  const [h1bPetitionDateInput, setH1bPetitionDateInput] = useState<string>("");
  const [showResults, setShowResults] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (stemOptEndDate) {
      setStemOptEndDateInput(stemOptEndDate);
      setShowResults(false);
      setError("");
    } else {
      setStemOptEndDateInput("");
      setH1bPetitionDateInput("");
      setShowResults(false);
      setError("");
    }
  }, [stemOptEndDate]);

  useEffect(() => {
    if (stemOptEndDateInput) {
      const stemEnd = parseISO(stemOptEndDateInput);
      const suggestedPetitionDate = new Date(stemEnd.getFullYear(), 3, 1);
      setH1bPetitionDateInput(format(suggestedPetitionDate, "yyyy-MM-dd"));
      setShowResults(false);
    }
  }, [stemOptEndDateInput]);

  const formatDate = (date: Date): string => format(date, "MMMM do, yyyy");

  const h1bStartMonth = 9; // October (0-indexed)
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
    setError("");
    if (!h1bPetitionDateInput || !stemOptEndDateInput || !graduationDate)
      return;

    const petitionDate = parseISO(h1bPetitionDateInput);
    const stemEnd = parseISO(stemOptEndDateInput);
    const gradDate = parseISO(graduationDate);

    // --- NEW EARLIEST DATE CHECK ---
    if (isBefore(petitionDate, gradDate)) {
      setError("H1B petition date cannot be before your graduation date.");
      setShowResults(false);
      return;
    }

    // --- EXISTING LATEST DATE CHECK ---
    if (isAfter(petitionDate, stemEnd)) {
      setError("H1B petition date cannot be after your STEM OPT expires.");
      setShowResults(false);
      return;
    }

    if (h1bCapGapEndDateCalc) {
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
          Calculate your cap-gap period after your STEM OPT ends.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {(!stemOptEndDate || !graduationDate) && (
          <div className="mb-4 text-center text-sm text-destructive p-3 bg-destructive/10 rounded-lg">
            Please complete the Graduation and STEM OPT steps first.
          </div>
        )}
        <div className="mb-4">
          <Label htmlFor="stemOptEndDate" className="mb-2">
            STEM OPT End Date:
          </Label>
          <Input
            type="date"
            id="stemOptEndDate"
            value={stemOptEndDateInput}
            readOnly
            className="w-full bg-muted/80 cursor-not-allowed"
          />
        </div>

        <div className="mb-6">
          <Label htmlFor="h1bPetitionDate" className="mb-2">
            H1B Petition Filing Date:
          </Label>
          <Input
            type="date"
            id="h1bPetitionDate"
            min={graduationDate} // <-- EARLIEST DATE SET HERE
            max={stemOptEndDateInput} // <-- LATEST DATE SET HERE
            disabled={!stemOptEndDateInput || !graduationDate}
            value={h1bPetitionDateInput}
            onChange={(e) => {
              setH1bPetitionDateInput(e.target.value);
              setShowResults(false);
              setError("");
            }}
            className={cn(
              (!stemOptEndDateInput || !graduationDate) &&
                "cursor-not-allowed bg-muted/50"
            )}
          />
          {error && <p className="text-sm text-destructive mt-2">{error}</p>}
        </div>

        <Button
          onClick={handleCalculate}
          disabled={
            !stemOptEndDateInput || !h1bPetitionDateInput || !graduationDate
          }
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
          <Card className="bg-secondary/20 border-secondary mt-8 shadow-inner py-0">
              <CardContent className="p-4 md:p-6 pt-6 space-y-4">
                <p className="text-foreground font-medium mb-4">
                  Here&apos;s your clear H1B cap-gap timeline:
                </p>
                <ul className="space-y-4 text-sm">
                  <li className="p-4 bg-background rounded-lg shadow-sm border border-border">
                    <span className="font-bold text-foreground block mb-1 font-serif">
                      1. H1B Cap-Gap Start Date:
                    </span>
                    <span className="text-primary font-semibold">
                      {formatDate(capGapStartDateCalc)}
                    </span>
                    <span className="text-xs text-muted-foreground block mt-1">
                      (Day after your STEM OPT ends)
                    </span>
                  </li>
                  <li className="p-4 bg-background rounded-lg shadow-sm border border-border">
                    <span className="font-bold text-foreground block mb-1 font-serif">
                      2. H1B Cap-Gap End Date:
                    </span>
                    <span className="text-primary font-semibold">
                      {formatDate(h1bCapGapEndDateCalc)}
                    </span>
                    <span className="text-xs text-muted-foreground block mt-1">
                      (Your status is extended until this date)
                    </span>
                  </li>
                  <li className="p-4 bg-background rounded-lg shadow-sm border border-border">
                    <span className="font-bold text-foreground block mb-1 font-serif">
                      3. H1B Start Date:
                    </span>
                    <span className="text-primary font-semibold">
                      {formatDate(h1bStartDateCalc)}
                    </span>
                    <span className="text-xs text-muted-foreground block mt-1">
                      (Your H1B status begins)
                    </span>
                  </li>
                </ul>
          </CardContent>
          </Card>
        )}
    </div>
  );
};

export default H1BCalculator;
