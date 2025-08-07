"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

// Define the shape of the context state
interface TimelineContextType {
  graduationDate: string;
  setGraduationDate: (date: string) => void;
  initialOptStartDate: string;
  setInitialOptStartDate: (date: string) => void;
  initialOptEndDate: string;
  setInitialOptEndDate: (date: string) => void;
  stemOptStartDate: string;
  setStemOptStartDate: (date: string) => void;
  stemOptEndDate: string;
  setStemOptEndDate: (date: string) => void;
  unemploymentDaysUsed: number;
  setUnemploymentDaysUsed: (days: number) => void;
  h1bPetitionDate: string;
  setH1bPetitionDate: (date: string) => void;
  h1bCapGapEndDate: string;
  setH1bCapGapEndDate: (date: string) => void;
}

// Create the context with a default undefined value (it will be set by the provider)
const TimelineContext = createContext<TimelineContextType | undefined>(
  undefined
);

// Define the props for the TimelineProvider component
interface TimelineProviderProps {
  children: ReactNode;
}

/**
 * TimelineProvider component.
 * Manages all the shared timeline state and provides it to its children.
 * State is now session-based (in-memory only), not persisted to local storage.
 */
export const TimelineProvider: React.FC<TimelineProviderProps> = ({
  children,
}) => {
  // Initialize state with empty strings or 0, no longer loading from local storage
  const [graduationDate, setGraduationDate] = useState<string>("");
  const [initialOptStartDate, setInitialOptStartDate] = useState<string>("");
  const [initialOptEndDate, setInitialOptEndDate] = useState<string>("");
  const [stemOptStartDate, setStemOptStartDate] = useState<string>("");
  const [stemOptEndDate, setStemOptEndDate] = useState<string>("");
  const [unemploymentDaysUsed, setUnemploymentDaysUsed] = useState<number>(0);
  const [h1bPetitionDate, setH1bPetitionDate] = useState<string>("");
  const [h1bCapGapEndDate, setH1bCapGapEndDate] = useState<string>("");

  // Removed the useEffect that saved state to local storage.
  // Data is now only held in memory for the current session.

  // The value object that will be provided to consumers
  const value = {
    graduationDate,
    setGraduationDate,
    initialOptStartDate,
    setInitialOptStartDate,
    initialOptEndDate,
    setInitialOptEndDate,
    stemOptStartDate,
    setStemOptStartDate,
    stemOptEndDate,
    setStemOptEndDate,
    unemploymentDaysUsed,
    setUnemploymentDaysUsed,
    h1bPetitionDate,
    setH1bPetitionDate,
    h1bCapGapEndDate,
    setH1bCapGapEndDate,
  };

  return (
    <TimelineContext.Provider value={value}>
      {children}
    </TimelineContext.Provider>
  );
};

/**
 * Custom hook to consume the TimelineContext.
 * Throws an error if used outside of a TimelineProvider.
 */
export const useTimeline = () => {
  const context = useContext(TimelineContext);
  if (context === undefined) {
    throw new Error("useTimeline must be used within a TimelineProvider");
  }
  return context;
};
