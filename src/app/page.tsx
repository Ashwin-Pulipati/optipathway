"use client";

import Link from "next/link";
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

export default function HomePage() {
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
        <div className="pt-4 animate-fade-in-up delay-400">
          <Button
            asChild
            size="lg"
            className={cn(
              "inline-flex items-center hover:scale-110 rounded-full"
            )}
          >
            <Link href="/tools?tab=timeline">
              Start Your Timeline
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <Card className="p-6 rounded-lg shadow-md border border-border animate-fade-in-up delay-600">
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
          <Card className="p-6 rounded-lg shadow-md border border-border animate-fade-in-up delay-700">
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
          <Card className="p-6 rounded-lg shadow-md border border-border animate-fade-in-up delay-800">
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
