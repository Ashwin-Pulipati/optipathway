import React from "react";
import { AlertCircle } from "lucide-react";

interface ProTipExample {
  id: string;
  title: string;
  category: "Initial OPT" | "STEM OPT";
  content: React.ReactNode;
}

export const proTipExamples: ProTipExample[] = [
  {
    id: "initial-no-change",
    title: "Initial OPT: No Employer Change",
    category: "Initial OPT",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Scenario:</strong> You start
          Initial OPT with Company A and remain with them for the entire
          12-month period without any changes.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-2">
          <strong className="text-foreground">
            Timeline (Illustrative Only):
          </strong>
        </p>
        <ul className="list-disc list-inside ml-4 text-muted-foreground">
          <li>
            <strong className="text-primary">Graduation Date:</strong> May 31,
            2024
          </li>
          <li>
            <strong className="text-primary">Initial OPT Start Date:</strong>{" "}
            July 10, 2024
          </li>
          <li>
            <strong className="text-primary">Initial OPT End Date:</strong> July
            9, 2025
          </li>
          <li>
            <strong className="text-primary">Employment Start:</strong> July 10,
            2024 (Company A)
          </li>
          <li>
            <strong className="text-primary">Employment End:</strong> July 9,
            2025 (Company A)
          </li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mt-2">
          <strong className="text-foreground">Reporting:</strong>
        </p>
        <ul className="list-disc list-inside ml-4 text-muted-foreground">
          <li>
            Report initial employment to DSO via SEVP Portal/university system
            within 10 days of starting.
          </li>
          <li>
            No further employment reporting needed unless address changes.
          </li>
        </ul>
        <div className="bg-accent/10 border border-accent p-3 rounded-lg mt-3 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
          <p className="text-sm text-muted-foreground ">
            <strong className="font-bold">Key takeaway:</strong> Maintain
            employment throughout OPT. Report changes promptly.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "initial-employer-change",
    title: "Initial OPT: Employer Change Mid-Period",
    category: "Initial OPT",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Scenario:</strong> You start
          Initial OPT with Company A, then switch to Company B during your
          12-month OPT period.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-2">
          <strong className="text-foreground">
            Timeline (Illustrative Only):
          </strong>
        </p>
        <ul className="list-disc list-inside ml-4 text-muted-foreground">
          <li>
            <strong className="text-primary">Initial OPT Start Date:</strong>{" "}
            July 10, 2024
          </li>
          <li>
            <strong className="text-primary">Initial OPT End Date:</strong> July
            9, 2025
          </li>
          <li>
            <strong className="text-primary">Employment 1 Start:</strong> July
            10, 2024 (Company A)
          </li>
          <li>
            <strong className="text-primary">Employment 1 End:</strong> December
            31, 2024 (Company A)
          </li>
          <li>
            <strong className="text-primary">Employment 2 Start:</strong>{" "}
            January 15, 2025 (Company B)
          </li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mt-2">
          <strong className="text-foreground">Reporting:</strong>
        </p>
        <ul className="list-disc list-inside ml-4 text-muted-foreground">
          <li>
            Report ending with Company A to DSO within 10 days of employment
            end.
          </li>
          <li>
            Report starting with Company B to DSO via SEVP Portal/university
            system within 10 days of employment start.
          </li>
        </ul>
        <div className="bg-accent/10 border border-accent p-3 rounded-lg mt-3 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
          <p className="text-sm text-muted-foreground ">
            <strong className="font-bold">Key takeaway:</strong> Report both
            ending previous employment and starting new employment to your DSO
            within 10 days.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "initial-employer-change-stem-neck",
    title: "Initial OPT: Employer Change Before STEM OPT Starts",
    category: "Initial OPT",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Scenario:</strong> You have an
          employer change right before your STEM OPT is about to begin (e.g.,
          your Initial OPT is ending, and you get a new job before your STEM OPT
          start date).
        </p>
        <p className="text-muted-foreground leading-relaxed mt-2">
          <strong className="text-foreground">
            Timeline (Illustrative Only):
          </strong>
        </p>
        <ul className="list-disc list-inside ml-4 text-muted-foreground">
          <li>
            <strong className="text-primary">Initial OPT End Date:</strong> July
            17, 2025
          </li>
          <li>
            <strong className="text-primary">New Employer Start Date:</strong>{" "}
            July 16, 2025 (Company C)
          </li>
          <li>
            <strong className="text-primary">STEM OPT Start Date:</strong> July
            18, 2025
          </li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mt-2">
          <strong className="text-foreground">Reporting:</strong>
        </p>
        <ul className="list-disc list-inside ml-4 text-muted-foreground">
          <li>
            Report ending previous employment (if any) to DSO within 10 days.
          </li>
          <li>Report starting with Company C to DSO within 10 days.</li>
          <li>
            Then, proceed with your STEM OPT application, ensuring the I-983
            reflects Company C.
          </li>
        </ul>
        <div className="bg-accent/10 border border-accent p-3 rounded-lg mt-3 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
          <p className="text-sm text-muted-foreground ">
            <strong className="font-bold">Key takeaway:</strong> All employment
            changes, even close to a transition, must be reported promptly to
            maintain status.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "stem-employer-change",
    title: "STEM OPT: Employer Change Mid-Period",
    category: "STEM OPT",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Scenario:</strong> You are on STEM
          OPT with Company A, and then you switch to Company B during your
          24-month STEM OPT period.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-2">
          <strong className="text-foreground">
            Timeline (Illustrative Only):
          </strong>
        </p>
        <ul className="list-disc list-inside ml-4 text-muted-foreground">
          <li>
            <strong className="text-primary">STEM OPT Start Date:</strong> July
            18, 2025
          </li>
          <li>
            <strong className="text-primary">STEM OPT End Date:</strong> July
            17, 2027
          </li>
          <li>
            <strong className="text-primary">Employment 1 Start:</strong> July
            18, 2025 (Company A)
          </li>
          <li>
            <strong className="text-primary">Employment 1 End:</strong> June 30,
            2026 (Company A)
          </li>
          <li>
            <strong className="text-primary">Employment 2 Start:</strong> July
            15, 2026 (Company B)
          </li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mt-2">
          <strong className="text-foreground">Reporting:</strong>
        </p>
        <ul className="list-disc list-inside ml-4 text-muted-foreground">
          <li>Report ending with Company A to DSO within 10 days.</li>
          <li>Submit a new Form I-983 for Company B to your DSO.</li>
          <li>
            Report starting with Company B to DSO via SEVP Portal/university
            system within 10 days.
          </li>
        </ul>
        <div className="bg-accent/10 border border-accent p-3 rounded-lg mt-3 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
          <p className="text-sm text-muted-foreground ">
            <strong className="font-bold">Key takeaway:</strong> Any employer
            change on STEM OPT requires a new I-983 and reporting to your DSO.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "stem-multiple-employers",
    title: "STEM OPT: Multiple Employers Simultaneously",
    category: "STEM OPT",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Scenario:</strong> You work for
          two different E-Verify employers simultaneously during your STEM OPT
          period.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-2">
          <strong className="text-foreground">
            Timeline (Illustrative Only):
          </strong>
        </p>
        <ul className="list-disc list-inside ml-4 text-muted-foreground">
          <li>
            <strong className="text-primary">STEM OPT Start Date:</strong> July
            18, 2025
          </li>
          <li>
            <strong className="text-primary">STEM OPT End Date:</strong> July
            17, 2027
          </li>
          <li>
            <strong className="text-primary">Employment 1:</strong> Company A
            (July 18, 2025 - ongoing)
          </li>
          <li>
            <strong className="text-primary">Employment 2:</strong> Company B
            (January 1, 2026 - ongoing)
          </li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mt-2">
          <strong className="text-foreground">Reporting:</strong>
        </p>
        <ul className="list-disc list-inside ml-4 text-muted-foreground">
          <li>Submit a separate Form I-983 for each employer to your DSO.</li>
          <li>
            Report starting each employment to DSO via SEVP Portal/university
            system within 10 days.
          </li>
          <li>
            Ensure each employment meets the minimum 20 hours per week
            requirement and is directly related to your STEM degree.
          </li>
        </ul>
        <div className="bg-accent/10 border border-accent p-3 rounded-lg mt-3 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
          <p className="text-sm text-muted-foreground ">
            <strong className="font-bold">Key takeaway:</strong> Each STEM OPT
            employer requires a separate, approved I-983.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "stem-unemployment-impact",
    title: "STEM OPT: Unemployment Impact",
    category: "STEM OPT",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Scenario:</strong> You experience
          a period of unemployment during your STEM OPT, impacting your
          cumulative days.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-2">
          <strong className="text-foreground">
            Timeline (Illustrative Only):
          </strong>
        </p>
        <ul className="list-disc list-inside ml-4 text-muted-foreground">
          <li>
            <strong className="text-primary">
              Initial OPT Unemployment Used:
            </strong>{" "}
            30 days
          </li>
          <li>
            <strong className="text-primary">STEM OPT Start Date:</strong> July
            18, 2025
          </li>
          <li>
            <strong className="text-primary">Employment End:</strong> January
            15, 2026 (Company A)
          </li>
          <li>
            <strong className="text-primary">New Employment Start:</strong>{" "}
            March 1, 2026 (Company B)
          </li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mt-2">
          <strong className="text-foreground">Calculation:</strong>
        </p>
        <ul className="list-disc list-inside ml-4 text-muted-foreground">
          <li>
            Unemployment on STEM OPT: January 16, 2026 - February 29, 2026 = 45
            days.
          </li>
          <li>
            Total Cumulative Unemployment: 30 (Initial OPT) + 45 (STEM OPT) = 75
            days.
          </li>
          <li>Remaining Unemployment Days: 150 - 75 = 75 days.</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mt-2">
          <strong className="text-foreground">Reporting:</strong>
        </p>
        <ul className="list-disc list-inside ml-4 text-muted-foreground">
          <li>
            Report employment end and new employment start to DSO within 10
            days.
          </li>
          <li>Monitor your cumulative unemployment days carefully.</li>
        </ul>
        <div className="bg-accent/10 border border-accent p-3 rounded-lg mt-3 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
          <p className="text-sm text-muted-foreground ">
            <strong className="font-bold">Key takeaway:</strong> Do not exceed
            150 cumulative unemployment days across your entire OPT period.
          </p>
        </div>
      </>
    ),
  },
];
