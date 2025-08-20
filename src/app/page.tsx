"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ArrowRight, Zap, Lightbulb, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function HomePage() {
  const [isAcknowledged, setIsAcknowledged] = useState(false);
  const router = useRouter();

  const handleContinue = () => {
    if (isAcknowledged) {
      router.push("/tools?tab=timeline");
    }
  };

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col items-center justify-center p-4 font-sans antialiased">
      <div className="text-center max-w-7xl space-y-8 px-4 sm:px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold font-serif leading-tight text-foreground tracking-tight animate-fade-in-up">
          F-1 Timeline. Simplified.
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-in-up delay-200">
          Your comprehensive assistant for F-1 visa timeline calculations, from
          OPT to H1B Cap-Gap. Get precise dates and clear insights to plan your
          academic and professional future in the U.S.
        </p>

        {/* --- MODIFICATION STARTS HERE --- */}

        <AlertDialog onOpenChange={() => setIsAcknowledged(false)}>
          <AlertDialogTrigger asChild>
            <div className="pt-4 animate-fade-in-up delay-400">
              <Button
                size="lg"
                className={cn(
                  "inline-flex items-center hover:scale-110 rounded-full"
                )}
              >
                Start Your Timeline
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="font-serif text-2xl">
                A Quick & Important Reminder
              </AlertDialogTitle>
              <AlertDialogDescription className="text-base py-4">
                Think of this app as your helpful co-pilot for planning.
                It&apos;s great for getting a clear picture of your timeline,
                but it is <strong className="text-primary">not</strong> a
                substitute for official advice.
                <br />
                <br />
                Your Designated School Official (DSO) is your single most
                important resource. Please{" "}
                <strong className="text-destructive underline">
                  always reach out to your DSO and confirm the dates
                </strong>{" "}
                to ensure you&apos;re on the right track.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <div className="flex items-center space-x-3 my-4">
              <Checkbox
                id="acknowledgment"
                checked={isAcknowledged}
                onCheckedChange={(checked) =>
                  setIsAcknowledged(checked as boolean)
                }
              />
              <Label
                htmlFor="acknowledgment"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I understand and will always consult my DSO.
              </Label>
            </div>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={handleContinue}
                disabled={!isAcknowledged}
              >
                Continue to App
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        {/* --- MODIFICATION ENDS HERE --- */}

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <Card className="p-6 rounded-lg shadow-md border border-border ">
            <CardHeader className="p-0 mb-3 flex-row items-center gap-3">
              <Zap className="h-8 w-8 text-primary" />
              <CardTitle className="text-xl font-semibold font-serif text-foreground">
                Instant Calculations
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <CardDescription>
                Generate accurate dates for every stage of your F-1 journey in
                seconds.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="p-6 rounded-lg shadow-md border border-border">
            <CardHeader className="p-0 mb-3 flex-row items-center gap-3">
              <Lightbulb className="h-8 w-8 text-primary" />
              <CardTitle className="text-xl font-semibold font-serif text-foreground">
                Intuitive Interface
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <CardDescription>
                A clean, easy-to-use design that simplifies complex immigration
                timelines.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="p-6 rounded-lg shadow-md border border-border">
            <CardHeader className="p-0 mb-3 flex-row items-center gap-3">
              <TrendingUp className="h-8 w-8 text-primary" />
              <CardTitle className="text-xl font-semibold font-serif text-foreground">
                Dynamic Visuals
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <CardDescription>
                See your entire timeline at a glance with interactive and
                real-time visual representations.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}