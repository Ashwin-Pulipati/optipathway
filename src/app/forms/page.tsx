import React from "react";
import Link from "next/link";
import { ExternalLink, ClipboardList, CreditCard, Info } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Forms: React.FC = () => {
  return (
    <div className="mt-8 max-w-7xl mx-auto w-full">
      <Card className="space-y-8 p-14 shadow-lg">
        <CardHeader className="text-center p-0">
          <CardTitle className="text-3xl font-serif font-extrabold text-foreground mb-4">
            Essential Forms & Resources
          </CardTitle>
          <CardDescription>
            This page provides direct links to the official forms and resources
            you&apos;ll need for your OPT, STEM OPT, and SSN applications.
            Always refer to these official sources for the most accurate and
            up-to-date information.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-8 p-0">
          {/* Section: OPT Forms */}
          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground border-b border-border pb-2 flex items-center gap-2">
              <ClipboardList className="h-6 w-6 text-primary" /> OPT Application
              Forms
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>
                <strong className="text-foreground">USCIS</strong>:
                <Link
                  href="https://www.uscis.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1 ml-2"
                >
                  Official <ExternalLink className="h-4 w-4" />
                </Link>
              </li>
              <li>
                <strong className="text-foreground">
                  Form I-765 (Application for Employment Authorization)
                </strong>
                :
                <Link
                  href="https://www.uscis.gov/sites/default/files/document/forms/i-765.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1 ml-2"
                >
                  Official PDF
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </li>
              <li>
                <strong className="text-foreground">
                  Form I-983 (Training Plan for STEM OPT Students)
                </strong>
                :
                <Link
                  href="https://www.ice.gov/doclib/sevis/pdf/i983.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1 ml-2"
                >
                  Official PDF
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Section: Social Security Number (SSN) */}
          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground border-b border-border pb-2 flex items-center gap-2">
              <CreditCard className="h-6 w-6 text-accent" /> Social Security
              Number (SSN)
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              To apply for an SSN, you will need to fill out Form SS-5 and
              provide specific documents. You can begin the application online
              or in person at an SSA office.
            </p>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-2 text-muted-foreground">
              <li>
                <strong className="text-foreground">
                  SSN Application (Form SS-5)
                </strong>
                :
                <Link
                  href="https://secure.ssa.gov/ossnap/public/landingOSsnap"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1 ml-2"
                >
                  Online Application
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </li>
              <li>
                <strong className="text-foreground">
                  I-94 Arrival/Departure Record
                </strong>
                : You can print your latest I-94 record here.
                <Link
                  href="https://i94.cbp.dhs.gov/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1 ml-2"
                >
                  I-94 Official Website
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </li>
            </ul>
            <div className="bg-accent/10 border border-accent p-4 rounded-lg flex items-start gap-3">
              <Info className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
              <p className="text-sm font-medium">
                <strong className="font-bold">
                  Required Documents for SSN Application:
                </strong>
                <ul className="text-muted-foreground list-disc list-inside ml-4 mt-2">
                  <li>F-1 Visa and unexpired passport.</li>
                  <li>I-94 Arrival/Departure Record.</li>
                  <li>Most recent OPT I-20 with OPT approval on page 2.</li>
                  <li>I-797 Approval Notice from USCIS.</li>
                  <li>Your EAD Card.</li>
                </ul>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Forms;
