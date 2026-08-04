import { addDays, addYears, subDays } from "date-fns";

/**
 * Single source of truth for the F-1 post-completion OPT date math.
 *
 * Reference: 8 CFR 214.2(f)(5)(iv) and the USCIS I-765 instructions.
 *
 * The 60-day grace period begins the day *after* the I-20 program end date, so
 * for a program end date of May 31 the grace period runs June 1 (day 1) through
 * July 30 (day 60). Every window below is inclusive of both endpoints.
 */

/** You may file up to 90 days before the program end date. */
export const APPLICATION_WINDOW_DAYS_BEFORE = 90;

/** The grace period, and the filing window, run 60 days past the program end date. */
export const GRACE_PERIOD_DAYS = 60;

/** Cumulative unemployment allowance during initial OPT. */
export const INITIAL_UNEMPLOYMENT_LIMIT = 90;

/** Earliest date USCIS will accept the OPT application. */
export const earliestApplicationDate = (graduationDate: Date): Date =>
  subDays(graduationDate, APPLICATION_WINDOW_DAYS_BEFORE);

/** First day of the 60-day grace period — the day after the program end date. */
export const gracePeriodStart = (graduationDate: Date): Date =>
  addDays(graduationDate, 1);

/** Last day of the 60-day grace period. Also the application filing deadline. */
export const gracePeriodEnd = (graduationDate: Date): Date =>
  addDays(graduationDate, GRACE_PERIOD_DAYS);

/**
 * The window in which an OPT start date may be requested. Identical to the
 * grace period: the start date must fall on or after the day following the
 * program end date, and no later than 60 days after it.
 */
export const optStartDateRange = (
  graduationDate: Date
): { min: Date; max: Date } => ({
  min: gracePeriodStart(graduationDate),
  max: gracePeriodEnd(graduationDate),
});

/** Last day of the 12-month initial OPT period. */
export const initialOptEndDate = (optStartDate: Date): Date =>
  addDays(addYears(optStartDate, 1), -1);

/** Earliest date the 90-day unemployment allowance can be exhausted. */
export const unemploymentDeadline = (optStartDate: Date): Date =>
  addDays(optStartDate, INITIAL_UNEMPLOYMENT_LIMIT - 1);
