"use client";

import React from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const faqData = [
  {
    value: "item-1",
    question: "What is the Program End Date on my Form I-20?",
    answer: (
      <>
        The Program End Date, found in the &ldquo;Program of Study&ldquo;
        section of your Form I-20, is the date your academic program is expected
        to be completed. This date is critical as it determines the eligibility
        window for your Optional Practical Training (OPT) application and marks
        the beginning of your 60-day grace period.
        <div className="mt-4">
          <Image
            src="/faq1.png"
            alt="Form I-20 with Program End Date highlighted"
            className="max-w-full h-auto rounded-lg border"
            width={500}
            height={300}
            priority
          />
        </div>
      </>
    ),
  },
  {
    value: "item-2",
    question: "What is the post-completion 60-day grace period?",
    answer:
      "Following your Program End Date, F-1 regulations grant a 60-day grace period. During this time, you may legally remain in the U.S. to prepare for departure, apply for a change of status, or transfer to a new academic program. You are not permitted to work during the grace period unless you have a pending or approved OPT application and a valid EAD.",
  },
  {
    value: "item-3",
    question: "How are OPT unemployment days calculated?",
    answer: (
      <>
        Per federal regulations, F-1 students on post-completion OPT are subject
        to an unemployment limit. These days are cumulative and begin accruing
        from the start date printed on your Employment Authorization Document
        (EAD).
        <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
          <li>
            For the initial period of{" "}
            <strong className="text-foreground">Post-Completion OPT</strong>,
            you are permitted a maximum of{" "}
            <strong className="text-primary">90 days</strong> of unemployment.
          </li>
          <li>
            If you are granted a{" "}
            <strong className="text-foreground">STEM OPT Extension</strong>, you
            receive an additional 60 days, for a total of{" "}
            <strong className="text-primary">150 days</strong> of unemployment
            aggregated across both OPT periods.
          </li>
        </ul>
        <div className="bg-muted/50 border border-border p-3 rounded-lg mt-4">
          <p className="text-sm text-muted-foreground">
            <strong className="font-bold text-foreground">Note</strong>: If you
            accrued 30 unemployment days during your initial OPT, you will have
            a remaining 120 days for the STEM OPT extension period.
          </p>
        </div>
      </>
    ),
  },
  {
    value: "item-4",
    question: "What are the STEM OPT validation reporting requirements?",
    answer: (
      <>
        Students on a 24-month STEM OPT extension must regularly validate their
        employment information with their Designated School Official (DSO).
        <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
          <li>
            A validation report is required every{" "}
            <strong className="text-primary">6 months</strong>, confirming that
            your name, address, employer information, and employment status are
            correct.
          </li>
          <li>
            This process also serves to verify that you are adhering to the
            training plan outlined in your Form I-983.
          </li>
        </ul>
        <div className="bg-destructive/10 border border-destructive p-3 rounded-lg mt-4">
          <p className="text-sm text-destructive font-medium">
            <strong className="font-bold">Compliance Warning</strong>: Failure
            to submit these mandatory reports in a timely manner is a violation
            of your F-1 status and may result in the{" "}
            <strong className="underline">
              termination of your SEVIS record
            </strong>
            .
          </p>
        </div>
      </>
    ),
  },
  {
    value: "item-5",
    question: "What is the H-1B Cap-Gap Extension?",
    answer: (
      <>
        The H-1B Cap-Gap Extension is a regulatory provision that extends an
        eligible F-1 student&apos;s status to bridge the &ldquo;gap&ldquo;
        between the end of their OPT period and the start of their H-1B status.
        <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
          <li>
            It automatically applies if your employer files a timely H-1B
            petition while your OPT is still valid, and requests an H-1B start
            date of October 1.
          </li>
          <li>
            This allows you to remain in the U.S. and, in most cases, continue
            working without interruption.
          </li>
        </ul>
      </>
    ),
  },
  {
    value: "item-6",
    question: "Where is the Alien Registration Number (A-Number) located?",
    answer: (
      <>
        The Alien Registration Number, or A-Number (also listed as USCIS#), is a
        unique identifier assigned by the Department of Homeland Security. You
        can find this number printed on your Employment Authorization Document
        (EAD).
        <div className="mt-4">
          <Image
            src="/faq7.jpg"
            alt="EAD card with USCIS# (A-Number) highlighted"
            className="max-w-full h-auto rounded-lg border"
            width={500}
            height={300}
          />
        </div>
      </>
    ),
  },
  {
    value: "item-7",
    question: "How can I find my USCIS Online Account Number?",
    answer: (
      <>
        If you filed an application online or received a paper receipt notice
        for a recent application, your USCIS Online Account Number is typically
        printed in the top section of the notice.
        <div className="mt-4">
          <Image
            src="/faq8.png"
            alt="USCIS receipt notice with Online Account Number highlighted"
            className="max-w-full h-auto rounded-lg border"
            width={500}
            height={300}
          />
        </div>
      </>
    ),
  },
  {
    value: "item-8",
    question: "How do I retrieve my Form I-94 Admission Record?",
    answer: (
      <>
        The Form I-94, your official Arrival/Departure Record, is generated
        electronically upon entry to the U.S. You can retrieve your most recent
        I-94 record, including the 11-digit admission number, from the official
        Customs and Border Protection (CBP) website.
        <div className="mt-4">
          <Image
            src="/faq9.png"
            alt="I-94 Admission Record with number highlighted"
            className="max-w-full h-auto rounded-lg border"
            width={500}
            height={300}
          />
        </div>
        <p className="text-sm text-foreground mt-4">
          Access your I-94 record via the official portal:{" "}
          <Link
            href="https://i94.cbp.dhs.gov/I94/#/home"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline inline-flex items-center gap-1"
          >
            CBP I-94 Website
            <ExternalLink className="h-4 w-4" />
          </Link>
        </p>
      </>
    ),
  },
  {
    value: "item-10",
    question: "Where is the SEVIS School Code located?",
    answer: (
      <>
        The SEVIS School Code, which identifies your academic institution, is
        listed on your Form I-20 under the &ldquo;School Information&ldquo;
        section.
        <div className="mt-4">
          <Image
            src="/faq10.png"
            alt="Form I-20 with SEVIS School Code highlighted"
            className="max-w-full h-auto rounded-lg border"
            width={500}
            height={300}
          />
        </div>
      </>
    ),
  },
  {
    value: "item-11",
    question: "What is a CIP Code and where do I find my Qualifying Major?",
    answer: (
      <>
        Your qualifying major and its corresponding Classification of
        Instructional Programs (CIP) code are listed on your Form I-20 in the
        &ldquo;Program of Study&ldquo; section. The CIP code is a six-digit
        number used to identify academic disciplines and is a key factor in
        determining eligibility for the STEM OPT extension.
        <div className="mt-4">
          <Image
            src="/faq11.png"
            alt="Form I-20 with Qualifying Major and CIP code highlighted"
            className="max-w-full h-auto rounded-lg border"
            width={500}
            height={300}
          />
        </div>
      </>
    ),
  },
  {
    value: "item-12",
    question: "Where can I find my EAD Card Number?",
    answer: (
      <>
        The number on your Employment Authorization Document (EAD) is also known
        as the case Receipt Number. It is a unique 13-character identifier that
        begins with three letters (e.g., YSC, EAC, LIN) and is printed on the
        face of the card.
        <div className="mt-4">
          <Image
            src="/faq12.png"
            alt="EAD card with Receipt Number highlighted"
            className="max-w-full h-auto rounded-lg border"
            width={500}
            height={300}
          />
        </div>
      </>
    ),
  },
];

export default function FAQPage() {
  return (
    <div className="mt-8 max-w-7xl mx-auto w-full px-4">
      <Card className="space-y-8 p-6 md:p-14 shadow-lg">
        <CardHeader className="text-center p-0">
          <CardTitle className="text-3xl font-serif font-extrabold text-foreground">
            Frequently Asked Questions
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((item) => (
              <AccordionItem
                key={item.value}
                value={item.value}
                className="rounded-xl border border-border bg-background shadow-sm p-2"
              >
                <AccordionTrigger className="text-left p-4 font-serif text-lg font-bold text-foreground hover:underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="p-4 pt-0 text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  )
}
