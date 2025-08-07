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
import { addDays, addMonths, addYears, format, parseISO } from "date-fns";
import { Calendar } from "lucide-react";
import { useEffect, useState } from "react";
import { useTimeline } from "../../app/timeline-context";

const StemOptCalculator: React.FC = () => {
  const {
    initialOptEndDate,
    setStemOptStartDate,
    setStemOptEndDate,
    unemploymentDaysUsed,
    setUnemploymentDaysUsed,
  } = useTimeline();

  // State for the inputs, allowing them to be manually edited
  const [initialOptEndDateInput, setInitialOptEndDateInput] =
    useState<string>("");
  const [stemOptStartDateInput, setStemOptStartDateInput] =
    useState<string>("");
  const [showResults, setShowResults] = useState<boolean>(false);

  // Sync state from context to local input state
  useEffect(() => {
    if (initialOptEndDate) {
      setInitialOptEndDateInput(initialOptEndDate);
      setShowResults(false);
    }
  }, [initialOptEndDate]);

  // Autofill STEM OPT Start Date based on the Initial OPT End Date input
  useEffect(() => {
    if (initialOptEndDateInput) {
      const initialEndDate = parseISO(initialOptEndDateInput);
      const calculatedStemStartDate = addDays(initialEndDate, 1);
      setStemOptStartDateInput(format(calculatedStemStartDate, "yyyy-MM-dd"));
      setShowResults(false);
    } else {
      setStemOptStartDateInput("");
      setShowResults(false);
    }
  }, [initialOptEndDateInput]);

  const formatDate = (date: Date): string => format(date, "MMMM do, yyyy");
  const stemUnemploymentLimit = 150;

  let stemOptStartDateCalc: Date | null = null;
  let stemOptEndDateCalc: Date | null = null;
  let remainingUnemploymentDays: number | null = null;

  if (stemOptStartDateInput) {
    const startDate = parseISO(stemOptStartDateInput);
    stemOptStartDateCalc = startDate;
    stemOptEndDateCalc = addDays(addYears(startDate, 2), -1);
    remainingUnemploymentDays =
      stemUnemploymentLimit - (unemploymentDaysUsed || 0);
  }

  const handleCalculate = () => {
    if (stemOptStartDateInput && stemOptEndDateCalc) {
      setShowResults(true);
      setStemOptStartDate(
        format(parseISO(stemOptStartDateInput), "yyyy-MM-dd")
      );
      setStemOptEndDate(format(stemOptEndDateCalc, "yyyy-MM-dd"));
    }
  };

  const getReportDates = (): {
    months: number;
    title: string;
    date: Date;
  }[] => {
    if (!stemOptStartDateCalc) return [];
    const startDate = parseISO(format(stemOptStartDateCalc, "yyyy-MM-dd"));
    return [
      {
        months: 6,
        title: "6-Month Validation Report",
        date: addMonths(startDate, 6),
      },
      {
        months: 12,
        title: "12-Month Validation Report",
        date: addMonths(startDate, 12),
      },
      {
        months: 18,
        title: "18-Month Validation Report",
        date: addMonths(startDate, 18),
      },
      {
        months: 24,
        title: "24-Month Validation Report",
        date: addMonths(startDate, 24),
      },
    ];
  };

  const generateGoogleCalendarUrl = (title: string, date: Date): string => {
    const formattedDate = format(date, "yyyyMMdd");
    const url = new URL("https://www.google.com/calendar/render");
    url.searchParams.set("action", "TEMPLATE");
    url.searchParams.set("text", `STEM OPT - ${title}`);
    url.searchParams.set("dates", `${formattedDate}/${formattedDate}`);
    url.searchParams.set(
      "details",
      "This is a reminder to submit your STEM OPT validation report. Report your employment and address to your DSO. Do not rely on any grace periods or school holidays."
    );
    return url.toString();
  };

  return (
    <div className="space-y-6">
      <CardHeader>
        <CardTitle className="text-center font-serif text-2xl">
          STEM OPT Extension
        </CardTitle>
        <CardDescription className="text-center">
          Enter your details to calculate your timeline and reminders.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Label htmlFor="initialOptEndDate" className="mb-2">
            Initial OPT End Date:
          </Label>
          <Input
            type="date"
            id="initialOptEndDate"
            value={initialOptEndDateInput}
            onChange={(e) => setInitialOptEndDateInput(e.target.value)}
            disabled={!!initialOptEndDate} // Disable if date is from context
            className={cn(
              "w-full",
              !!initialOptEndDate &&
                "bg-muted text-muted-foreground cursor-not-allowed"
            )}
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="stemOptStartDate" className="mb-2">
            STEM OPT Start Date:
          </Label>
          <Input
            type="date"
            id="stemOptStartDate"
            value={stemOptStartDateInput}
            onChange={(e) => {
              setStemOptStartDateInput(e.target.value);
              setShowResults(false);
            }}
          />
        </div>
        <div className="mb-6">
          <Label htmlFor="unemploymentDaysUsed" className="mb-2">
            Unemployment days used on Initial OPT:
          </Label>
          <Input
            type="number"
            id="unemploymentDaysUsed"
            value={unemploymentDaysUsed}
            onChange={(e) =>
              setUnemploymentDaysUsed(parseInt(e.target.value) || 0)
            }
          />
        </div>
        <Button
          onClick={handleCalculate}
          disabled={!stemOptStartDateInput}
          className="w-full"
          size="lg"
        >
          Calculate Dates & Reminders
        </Button>
      </CardContent>
      {showResults &&
        stemOptStartDateCalc &&
        stemOptEndDateCalc &&
        remainingUnemploymentDays !== null && (
          <div className="mt-8 space-y-4">
            <Card className="bg-secondary/20 border-secondary shadow-inner">
              <CardContent className="space-y-4 pt-6">
                <p className="text-foreground font-medium mb-4">
                  Here&apos;s your clear timeline:
                </p>
                <ul className="space-y-4 text-sm">
                  <li className="p-4 bg-background rounded-lg shadow-sm border border-border">
                    <span className="font-bold text-foreground block mb-1 font-serif">
                      1. STEM OPT Start Date:
                    </span>
                    <div className="flex flex-wrap items-baseline gap-x-1">
                      <span className="text-primary font-semibold">
                        {formatDate(stemOptStartDateCalc)}
                      </span>
                    </div>
                  </li>
                  <li className="p-4 bg-background rounded-lg shadow-sm border border-border">
                    <span className="font-bold text-foreground block mb-1 font-serif">
                      2. STEM OPT End Date:
                    </span>
                    <div className="flex flex-wrap items-baseline gap-x-1">
                      <span className="text-primary font-semibold">
                        {formatDate(stemOptEndDateCalc)}
                      </span>
                    </div>
                  </li>
                  <li className="p-4 bg-background rounded-lg shadow-sm border border-border">
                    <span className="font-bold text-foreground block mb-1 font-serif">
                      3. Remaining Unemployment Days:
                    </span>
                    <div className="flex flex-wrap items-baseline gap-x-1">
                      <span className="text-primary font-semibold">
                        {remainingUnemploymentDays} days
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground block mt-2">
                      (You have a total of {stemUnemploymentLimit} cumulative
                      days for Initial + STEM OPT.)
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-accent/30 border-accent shadow-inner">
              <CardContent className="space-y-4 pt-6">
                <p className="text-foreground font-medium mb-4">
                  Click to add these reminders to your calendar:
                </p>
                <ul className="space-y-4 text-sm">
                  {getReportDates().map((item, index) => (
                    <li
                      key={index}
                      className="p-4 bg-background rounded-lg shadow-sm border border-border flex justify-between items-center"
                    >
                      <div>
                        <span className="font-bold text-foreground block mb-1 font-serif">
                          {item.title}:
                        </span>
                        <div className="flex flex-wrap items-baseline">
                          <span className="text-primary font-semibold">
                            {formatDate(item.date)}
                          </span>
                        </div>
                      </div>
                      <Button
                        asChild
                        variant="secondary"
                        size="sm"
                        className="flex items-center gap-2 text-xs flex-shrink-0"
                      >
                        <a
                          href={generateGoogleCalendarUrl(
                            item.title,
                            item.date
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Calendar className="h-5 w-5" />
                          <span>Add to Calendar</span>
                        </a>
                      </Button>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs font-bold text-destructive">
                  <span className="underline">IMPORTANT CLARIFICATION:</span>{" "}
                  The official federal deadline is the specific date listed
                  above. While some schools may provide a small window for late
                  submissions, relying on this is a risk to your F-1 status. It
                  is always safest to submit your report to your DSO before the
                  deadline.
                </p>
              </CardContent>
            </Card>
          </div>
        )}
    </div>
  );
};

export default StemOptCalculator;
