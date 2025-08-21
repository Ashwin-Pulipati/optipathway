import { IconName } from "@/types/content.types";
import {
  AlertCircle,
  AlertTriangle,
  Briefcase,
  CalendarCheck,
  CalendarDays,
  CheckCircle,
  Clock,
  Computer,
  FileSignature,
  FileText,
  Info,
  Lightbulb,
  LucideProps,
  Megaphone,
  Users,
} from "lucide-react";
import React from "react";

/**
 * A centralized, type-safe mapping of IconName strings to their
 * corresponding Lucide React components.
 */
export const icons: Record<IconName, React.ElementType<LucideProps>> = {
  // Original Icons
  Info,
  CalendarDays,
  FileText,
  Computer,
  Clock,
  CheckCircle,
  Users,
  AlertCircle,
  Lightbulb,
  AlertTriangle,
  // STEM OPT Icons
  CalendarCheck,
  FileSignature,
  Megaphone,
  Briefcase,
};
