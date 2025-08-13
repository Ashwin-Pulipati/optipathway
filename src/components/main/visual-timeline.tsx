"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { addDays, format, parseISO } from "date-fns";
import { useEffect, useRef, useState } from "react";
import { useTimeline } from "../../app/timeline-context";

interface TimelineItem {
  id: string;
  title: string;
  date: string;
  description: string;
}

const VisualTimeline: React.FC = () => {
  const {
    graduationDate,
    initialOptStartDate,
    initialOptEndDate,
    stemOptStartDate,
    stemOptEndDate,
    h1bPetitionDate,
    h1bCapGapEndDate,
  } = useTimeline();

  const formatDate = (dateInput: string | Date): string => {
    const date =
      typeof dateInput === "string" ? parseISO(dateInput) : dateInput;
    return format(date, "MMMM do, yyyy");
  };

  const [timelineItems, setTimelineItems] = useState<TimelineItem[]>([]);
  const timelineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const items: TimelineItem[] = [];

    if (graduationDate) {
      items.push({
        id: "grad-date",
        title: "Graduation Date",
        date: formatDate(graduationDate),
        description:
          "This is the date on your I-20. Your OPT application window is based on this date.",
      });
    }
    if (initialOptStartDate) {
      items.push({
        id: "initial-opt-start",
        title: "Initial OPT Start Date",
        date: formatDate(initialOptStartDate),
        description:
          "The first day of your 12-month OPT period as listed on your EAD card.",
      });
    }
    if (initialOptEndDate) {
      items.push({
        id: "initial-opt-end",
        title: "Initial OPT End Date",
        date: formatDate(initialOptEndDate),
        description: "The last day of your 12-month OPT period.",
      });
    }
    if (stemOptStartDate) {
      items.push({
        id: "stem-opt-start",
        title: "STEM OPT Start Date",
        date: formatDate(stemOptStartDate),
        description: "The first day of your 24-month STEM OPT extension.",
      });
    }
    if (stemOptEndDate) {
      items.push({
        id: "stem-opt-end",
        title: "STEM OPT End Date",
        date: formatDate(stemOptEndDate),
        description: "The last day of your 24-month STEM OPT extension.",
      });
    }
    if (h1bPetitionDate && h1bCapGapEndDate && stemOptEndDate) {
      const capGapStartDate = addDays(parseISO(stemOptEndDate), 1);
      const h1bStartDate = addDays(parseISO(h1bCapGapEndDate), 1);

      items.push(
        {
          id: "h1b-petition-date",
          title: "H1B Petition Filing Date",
          date: formatDate(h1bPetitionDate),
          description:
            "This is the date your H1B petition was filed. A timely filing can grant a Cap-Gap extension.",
        },
        {
          id: "h1b-cap-gap-start",
          title: "H1B Cap-Gap Start Date",
          date: formatDate(capGapStartDate),
          description:
            "Your F-1 status and work authorization are automatically extended during this period.",
        },
        {
          id: "h1b-cap-gap-end",
          title: "H1B Cap-Gap End Date",
          date: formatDate(h1bCapGapEndDate),
          description:
            "Your Cap-Gap period ends on this date, the day before your H1B status begins.",
        },
        {
          id: "h1b-start",
          title: "H1B Start Date",
          date: formatDate(h1bStartDate),
          description: "Your H1B status officially begins on this date.",
        }
      );
    }

    setTimelineItems(items);
  }, [
    graduationDate,
    initialOptStartDate,
    initialOptEndDate,
    stemOptStartDate,
    stemOptEndDate,
    h1bPetitionDate,
    h1bCapGapEndDate,
  ]);

  useEffect(() => {
    if (!timelineRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.5 }
    );

    const timelineItems =
      timelineRef.current.querySelectorAll(".timeline-item");
    timelineItems.forEach((item) => observer.observe(item));

    return () => {
      timelineItems.forEach((item) => observer.unobserve(item));
    };
  }, [timelineItems]);

  return (
    <div className="relative p-0 md:p-8">
      <div ref={timelineRef} className="relative z-10 space-y-12">
        <div className="timeline-line animated"></div>
        {timelineItems.length > 0 ? (
          timelineItems.map((item, index) => (
            <div key={item.id} className="timeline-item flex items-start mb-8">
              <div
                className="timeline-circle"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {index + 1}
              </div>
              <div className="flex-grow">
                <Card className="p-0">
                  <CardContent className="space-y-1 py-4">
                    <CardTitle className="text-lg font-serif">
                      {item.title}
                    </CardTitle>
                    <p className="text-primary font-semibold text-sm">
                      {item.date}
                    </p>
                    <CardDescription>{item.description}</CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-muted-foreground p-6">
            <p className="ml-5">
              Enter dates in the tools to see your visual timeline here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VisualTimeline;
