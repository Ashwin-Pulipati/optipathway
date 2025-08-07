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
import { addDays, format, parseISO, subDays } from "date-fns";
import { useState } from "react";
import { useTimeline } from "../../app/timeline-context";

const OptTimelineCalculator: React.FC = () => {
  const { setGraduationDate } = useTimeline();
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [showResults, setShowResults] = useState<boolean>(false);

  const formatDate = (date: Date): string => format(date, "MMMM dd, yyyy");

  const applicationWindowStartDays = 91;
  const applicationWindowEndDays = 59;

  let applyStartDate: Date | null = null;
  let applyEndDate: Date | null = null;
  let gracePeriodStart: Date | null = null;
  let gracePeriodEnd: Date | null = null;

  if (selectedDate) {
    const gradDate = parseISO(selectedDate);
    applyStartDate = subDays(gradDate, applicationWindowStartDays);
    applyEndDate = addDays(gradDate, applicationWindowEndDays);
    gracePeriodStart = gradDate;
    gracePeriodEnd = applyEndDate;
  }

  const handleCalculate = () => {
    if (selectedDate) {
      setShowResults(true);
      setGraduationDate(selectedDate);
    }
  };

  return (
    <div className="space-y-6">
      <CardHeader>
        <CardTitle className="text-center font-serif text-2xl">
          Graduation Timeline
        </CardTitle>
        <CardDescription className="text-center">
          Enter your I-20 graduation date.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="mb-6">
          <Label htmlFor="graduationDate" className="mb-2">
            I-20 Graduation Date:
          </Label>
          <Input
            type="date"
            id="graduationDate"
            value={selectedDate}
            onChange={(e) => {
              setSelectedDate(e.target.value);
              setShowResults(false);
            }}
          />
        </div>
        <Button
          onClick={handleCalculate}
          disabled={!selectedDate}
          className="w-full"
          size="lg"
        >
          Calculate Timeline
        </Button>
      </CardContent>

      {showResults &&
        selectedDate &&
        applyStartDate &&
        applyEndDate &&
        gracePeriodStart &&
        gracePeriodEnd && (
          <Card className="bg-secondary/20 border-secondary mt-8 shadow-inner">
            <CardContent className="space-y-4 pt-6">
              <p className="text-foreground font-medium mb-4">
                Here&apos;s your clear timeline:
              </p>
              <ul className="space-y-4 text-sm">
                <li className="p-4 bg-background rounded-lg shadow-sm border border-border">
                  <span className="font-bold text-foreground block mb-1 font-serif">
                    1. Application Window Period:
                  </span>
                  <div className="flex flex-wrap items-baseline gap-x-1">
                    <span className="text-primary font-semibold">
                      {formatDate(applyStartDate)}
                    </span>{" "}
                    to{" "}
                    <span className="text-primary font-semibold">
                      {formatDate(applyEndDate)}
                    </span>
                  </div>
                </li>
                <li className="p-4 bg-background rounded-lg shadow-sm border border-border">
                  <span className="font-bold text-foreground block mb-1 font-serif">
                    2. 60-day Grace Period (Pick your Start Date):
                  </span>
                  <div className="flex flex-wrap items-baseline gap-x-1">
                    <span className="text-primary font-semibold">
                      {formatDate(gracePeriodStart)}
                    </span>{" "}
                    to{" "}
                    <span className="text-primary font-semibold">
                      {formatDate(gracePeriodEnd)}
                    </span>
                  </div>
                </li>
                <li className="p-4 bg-background rounded-lg shadow-sm border border-border">
                  <span className="font-bold text-foreground block mb-1 font-serif">
                    3. USCIS must receive your application by:
                  </span>
                  <div className="flex flex-wrap items-baseline">
                    <span className="text-primary font-semibold">
                      {formatDate(applyEndDate)}
                    </span>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        )}
    </div>
  );
};

export default OptTimelineCalculator;
