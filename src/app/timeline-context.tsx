"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

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

const TimelineContext = createContext<TimelineContextType | undefined>(
  undefined
);

interface TimelineProviderProps {
  children: ReactNode;
}

export const TimelineProvider: React.FC<TimelineProviderProps> = ({
  children,
}) => {

  const [graduationDate, setGraduationDate] = useState<string>("");
  const [initialOptStartDate, setInitialOptStartDate] = useState<string>("");
  const [initialOptEndDate, setInitialOptEndDate] = useState<string>("");
  const [stemOptStartDate, setStemOptStartDate] = useState<string>("");
  const [stemOptEndDate, setStemOptEndDate] = useState<string>("");
  const [unemploymentDaysUsed, setUnemploymentDaysUsed] = useState<number>(0);
  const [h1bPetitionDate, setH1bPetitionDate] = useState<string>("");
  const [h1bCapGapEndDate, setH1bCapGapEndDate] = useState<string>("");

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


export const useTimeline = () => {
  const context = useContext(TimelineContext);
  if (context === undefined) {
    throw new Error("useTimeline must be used within a TimelineProvider");
  }
  return context;
};
