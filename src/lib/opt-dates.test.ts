import { describe, expect, it } from "vitest";
import { format, parseISO } from "date-fns";
import {
  earliestApplicationDate,
  gracePeriodEnd,
  gracePeriodStart,
  initialOptEndDate,
  optStartDateRange,
  unemploymentDeadline,
} from "./opt-dates";

const iso = (date: Date) => format(date, "yyyy-MM-dd");

/**
 * The May 31 case is the example used throughout the site's own content, and is
 * the one that surfaced the original off-by-one bugs.
 */
describe("May 31, 2024 program end date", () => {
  const grad = parseISO("2024-05-31");

  it("opens the filing window 90 days before graduation", () => {
    expect(iso(earliestApplicationDate(grad))).toBe("2024-03-02");
  });

  it("starts the grace period the day after graduation", () => {
    expect(iso(gracePeriodStart(grad))).toBe("2024-06-01");
  });

  it("ends the grace period 60 days after graduation", () => {
    expect(iso(gracePeriodEnd(grad))).toBe("2024-07-30");
  });

  it("allows OPT start dates from June 1 through July 30", () => {
    const { min, max } = optStartDateRange(grad);
    expect(iso(min)).toBe("2024-06-01");
    expect(iso(max)).toBe("2024-07-30");
  });

  it("does not allow the graduation date itself as an OPT start date", () => {
    expect(iso(optStartDateRange(grad).min)).not.toBe("2024-05-31");
  });

  it("does not allow July 31, which is day 61", () => {
    expect(iso(optStartDateRange(grad).max)).not.toBe("2024-07-31");
  });
});

describe("grace period length", () => {
  const cases = [
    "2024-05-31",
    "2024-06-01",
    "2024-12-31",
    "2025-01-01",
    "2024-02-29", // leap day
    "2023-12-15",
  ];

  it.each(cases)("spans exactly 60 inclusive days for %s", (date) => {
    const grad = parseISO(date);
    const start = gracePeriodStart(grad);
    const end = gracePeriodEnd(grad);
    const days = Math.round(
      (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
    );
    // Inclusive of both endpoints, so the delta is 59.
    expect(days + 1).toBe(60);
  });
});

describe("June 1 graduation crosses into July 31", () => {
  const grad = parseISO("2024-06-01");

  it("runs the grace period from June 2 to July 31", () => {
    expect(iso(gracePeriodStart(grad))).toBe("2024-06-02");
    expect(iso(gracePeriodEnd(grad))).toBe("2024-07-31");
  });
});

describe("the filing deadline matches the last day of the grace period", () => {
  it.each(["2024-05-31", "2024-06-01", "2025-01-15"])("for %s", (date) => {
    const grad = parseISO(date);
    expect(iso(gracePeriodEnd(grad))).toBe(iso(optStartDateRange(grad).max));
  });
});

describe("initial OPT period", () => {
  it("ends one day short of 12 months after the start date", () => {
    expect(iso(initialOptEndDate(parseISO("2024-07-01")))).toBe("2025-06-30");
  });

  it("handles a start date on a leap day", () => {
    expect(iso(initialOptEndDate(parseISO("2024-02-29")))).toBe("2025-02-27");
  });

  it("handles a January 1 start date", () => {
    expect(iso(initialOptEndDate(parseISO("2024-01-01")))).toBe("2024-12-31");
  });
});

describe("unemployment deadline", () => {
  it("falls on day 90 counting the start date as day 1", () => {
    expect(iso(unemploymentDeadline(parseISO("2024-07-01")))).toBe(
      "2024-09-28"
    );
  });
});
