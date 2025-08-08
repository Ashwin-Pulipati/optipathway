"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FAQ = () => {
  return (
    <div className="mt-8 max-w-7xl mx-auto w-full">
      <Card className="space-y-8 p-14 shadow-lg">
        <CardHeader className="text-center p-0">
          <CardTitle className="text-3xl font-serif font-extrabold text-foreground mb-4">
            Frequently Asked Questions
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem
              value="item-1"
              className={cn(
                "border-border rounded-xl p-4 shadow-sm bg-background"
              )}
            >
              <AccordionTrigger
                className={cn(
                  "text-foreground hover:underline font-bold text-lg font-serif"
                )}
              >
                What is my graduation date or program end date?
              </AccordionTrigger>
              <AccordionContent className={cn("text-muted-foreground p-4")}>
                Your official graduation date, also known as your program end
                date, is listed on your Form I-20. It is a critical date as it
                marks the beginning of your OPT application window and grace
                period. You can find it on the first page of your Form I-20.
                <div className="mt-4">
                  <Image
                    src="/faq1.png"
                    alt="I-20 Form showing program end date"
                    className="max-w-full h-auto rounded-lg"
                    width={500}
                    height={500}
                  />
                  <p className="text-sm italic text-center mt-2"></p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className={cn(
                "border-border rounded-xl p-4 shadow-sm bg-background"
              )}
            >
              <AccordionTrigger
                className={cn(
                  "text-foreground hover:underline font-bold text-lg font-serif"
                )}
              >
                What is the 60-day grace period?
              </AccordionTrigger>
              <AccordionContent className={cn("text-muted-foreground p-4")}>
                The 60-day grace period begins the day after your program end
                date. During this period, you may remain in the U.S. but are not
                authorized to work. You must file your OPT application, transfer
                to a new program, or depart the U.S. before this period ends.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className={cn(
                "border-border rounded-xl p-4 shadow-sm bg-background"
              )}
            >
              <AccordionTrigger
                className={cn(
                  "text-foreground hover:underline font-bold text-lg font-serif"
                )}
              >
                What are cumulative unemployment days?
              </AccordionTrigger>
              <AccordionContent className={cn("text-muted-foreground p-4")}>
                Cumulative unemployment days are the total number of days you
                are unemployed while on OPT. The clock starts ticking from your
                EAD card start date.
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li>
                    For <strong className="text-foreground">Initial OPT</strong>
                    , you are allowed a maximum of{" "}
                    <strong className="text-primary">90 cumulative days</strong>{" "}
                    of unemployment.
                  </li>
                  <li>
                    For <strong className="text-foreground">STEM OPT</strong>,
                    you are allowed a total of{" "}
                    <strong className="text-primary">
                      150 cumulative days
                    </strong>{" "}
                    of unemployment across both your Initial and STEM OPT
                    periods.
                  </li>
                </ul>
                <div className="bg-muted/50 border border-border p-3 rounded-lg mt-4">
                  <p className="text-sm text-muted-foreground">
                    <strong className="font-bold text-foreground">
                      Example
                    </strong>
                    : If you used 30 days of unemployment during your Initial
                    OPT, you have 120 days remaining for your STEM OPT period.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className={cn(
                "border-border rounded-xl p-4 shadow-sm bg-background"
              )}
            >
              <AccordionTrigger
                className={cn(
                  "text-foreground hover:underline font-bold text-lg font-serif"
                )}
              >
                What are validation reports and why should I submit them?
              </AccordionTrigger>
              <AccordionContent className={cn("text-muted-foreground p-4")}>
                Validation reports are a requirement for STEM OPT students to
                confirm their employment information to their Designated School
                Official (DSO).
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li>
                    They must be submitted every{" "}
                    <strong className="text-primary">6 months</strong>{" "}
                    throughout your 24-month STEM OPT period.
                  </li>
                  <li>
                    The primary purpose is to ensure you are meeting the
                    requirements of your training plan (Form I-983).
                  </li>
                </ul>
                <div className="bg-destructive/10 border border-destructive p-3 rounded-lg mt-4">
                  <p className="text-sm text-destructive font-medium">
                    <strong className="font-bold">Warning</strong>: Missing
                    these deadlines can lead to the{" "}
                    <strong className="underline">
                      revocation of your F-1 status
                    </strong>
                    . You must submit these reports to your DSO via your
                    university&apos;s designated system.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className={cn(
                "border-border rounded-xl p-4 shadow-sm bg-background"
              )}
            >
              <AccordionTrigger
                className={cn(
                  "text-foreground hover:underline font-bold text-lg font-serif"
                )}
              >
                What is Cap-Gap?
              </AccordionTrigger>
              <AccordionContent className={cn("text-muted-foreground p-4")}>
                Cap-Gap is an extension of your F-1 status and work
                authorization that bridges the period between the end of your
                OPT/STEM OPT and the start of your H-1B status.
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li>
                    It is automatically applied if an H-1B petition is filed on
                    your behalf and selected, and your OPT/STEM OPT expires
                    before October 1st (the start of the H-1B fiscal year).
                  </li>
                  <li>
                    This prevents a gap in your legal status and ability to work
                    in the U.S.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-6"
              className={cn(
                "border-border rounded-xl p-4 shadow-sm bg-background"
              )}
            >
              <AccordionTrigger
                className={cn(
                  "text-foreground hover:underline font-bold text-lg font-serif"
                )}
              >
                Where do I find the Alien Registration Number (A-Number)?
              </AccordionTrigger>
              <AccordionContent className={cn("text-muted-foreground p-4")}>
                Your Alien Registration Number (A-Number) is a unique
                seven-to-nine-digit number that USCIS uses to identify you. It
                is located on your EAD card, typically under the
                &ldquo;USCIS&rdquo; heading.
                <div className="mt-4">
                  <Image
                    src="/faq7.jpg"
                    alt="EAD card with A-Number highlighted"
                    className="max-w-full h-auto rounded-lg"
                    width={500}
                    height={500}
                  />
                  <p className="text-sm italic text-center mt-2"></p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-7"
              className={cn(
                "border-border rounded-xl p-4 shadow-sm bg-background"
              )}
            >
              <AccordionTrigger
                className={cn(
                  "text-foreground hover:underline font-bold text-lg font-serif"
                )}
              >
                Where do I find my USCIS online account number?
              </AccordionTrigger>
              <AccordionContent className={cn("text-muted-foreground p-4")}>
                Your USCIS online account number can be found in the header of
                your Approval Notice you receive from USCIS.
                <div className="mt-4">
                  <Image
                    src="/faq8.png"
                    alt="USCIS receipt notice with account number highlighted"
                    className="max-w-full h-auto rounded-lg"
                    width={500}
                    height={500}
                  />
                  <p className="text-sm italic text-center mt-2"></p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-8"
              className={cn(
                "border-border rounded-xl p-4 shadow-sm bg-background"
              )}
            >
              <AccordionTrigger
                className={cn(
                  "text-foreground hover:underline font-bold text-lg font-serif"
                )}
              >
                Where do I find my I-94 arrival/departure record number?
              </AccordionTrigger>
              <AccordionContent className={cn("text-muted-foreground p-4")}>
                Your I-94 number is a unique 11-digit number that tracks your
                arrival and departure from the U.S. You can find it on your
                printed I-94 record, which you can retrieve from the official
                CBP website.
                <div className="mt-4">
                  <Image
                    src="/faq9.png"
                    alt="I-94 record with number highlighted"
                    className="max-w-full h-auto rounded-lg"
                    width={500}
                    height={500}
                  />
                  <p className="text-sm italic text-center mt-2"></p>
                </div>
                <p className="text-sm text-foreground mt-4">
                  You can get your latest I-94 record here:{" "}
                  <Link
                    href="https://i94.cbp.dhs.gov/I94/#/home"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    https://i94.cbp.dhs.gov/I94/#/home
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-10"
              className={cn(
                "border-border rounded-xl p-4 shadow-sm bg-background"
              )}
            >
              <AccordionTrigger
                className={cn(
                  "text-foreground hover:underline font-bold text-lg font-serif"
                )}
              >
                Where do I find my SEVIS school code?
              </AccordionTrigger>
              <AccordionContent className={cn("text-muted-foreground p-4")}>
                Your SEVIS school code is located on your Form I-20 under school
                information.
                <div className="mt-4">
                  <Image
                    src="/faq10.png"
                    alt="I-20 Form with SEVIS school code highlighted"
                    className="max-w-full h-auto rounded-lg"
                    width={500}
                    height={500}
                  />
                  <p className="text-sm italic text-center mt-2"></p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-11"
              className={cn(
                "border-border rounded-xl p-4 shadow-sm bg-background"
              )}
            >
              <AccordionTrigger
                className={cn(
                  "text-foreground hover:underline font-bold text-lg font-serif"
                )}
              >
                Where do I find my Qualifying Major and CIP number?
              </AccordionTrigger>
              <AccordionContent className={cn("text-muted-foreground p-4")}>
                The Qualifying Major and its corresponding CIP (Classification
                of Instructional Programs) number are on your Form I-20 under
                Program of Study. The major is listed in Section 3 and is
                crucial for determining STEM OPT eligibility. The CIP code is a
                six-digit number next to your major name. (eg.: Master&apos;s
                Computer Science 12.345)
                <div className="mt-4">
                  <Image
                    src="/faq11.png"
                    alt="I-20 Form with Qualifying Major and CIP number highlighted"
                    className="max-w-full h-auto rounded-lg"
                    width={500}
                    height={500}
                  />
                  <p className="text-sm italic text-center mt-2"></p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-12"
              className={cn(
                "border-border rounded-xl p-4 shadow-sm bg-background"
              )}
            >
              <AccordionTrigger
                className={cn(
                  "text-foreground hover:underline font-bold text-lg font-serif"
                )}
              >
                Where do I find my EAD number?
              </AccordionTrigger>
              <AccordionContent className={cn("text-muted-foreground p-4")}>
                The EAD number, also known as the Receipt Number, is a unique
                number that identifies your case with USCIS. It is printed on
                your EAD card and typically starts with three letters, followed
                by a series of numbers.
                <div className="mt-4">
                  <Image
                    src="/faq12.png"
                    alt="EAD card with EAD number highlighted"
                    className="max-w-full h-auto rounded-lg"
                    width={500}
                    height={500}
                  />
                  <p className="text-sm italic text-center mt-2"></p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

/**
 * Renders the FAQ page with suspenseful loading support.
 *
 * Wraps the FAQ component in a React Suspense boundary to enable suspenseful rendering.
 */
export default function FAQPage() {
  return (
    <Suspense>
      <FAQ />
    </Suspense>
  );
}
