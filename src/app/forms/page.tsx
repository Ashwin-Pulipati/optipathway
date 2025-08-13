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
                : You can always find the most current version on the official{" "}
                <Link
                  href="https://www.uscis.gov/i-765"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1 font-medium"
                >
                  <span>USCIS I-765 Page</span>
                  <ExternalLink className="h-4 w-4" />
                </Link>
                .
                <p className="text-sm text-muted-foreground mt-2 pl-4 border-l-2 border-border ml-1">
                  ↳ Look for the{" "}
                  <strong className="text-primary font-medium">
                    &ldquo;Form Details&ldquo;
                  </strong>{" "}
                  section to find the latest PDF.
                </p>
              </li>
              <li>
                <strong className="text-foreground">
                  Form I-983 (Training Plan for STEM OPT Students)
                </strong>
                : The latest version is available on the official{" "}
                <Link
                  href="https://studyinthestates.dhs.gov/stem-opt-hub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1 font-medium"
                >
                  <span>Study In The States</span>
                  <ExternalLink className="h-4 w-4" />
                </Link>
                .
                <p className="text-sm text-muted-foreground mt-2 pl-4 border-l-2 border-border ml-1">
                  ↳ Find the{" "}
                  <strong className="text-primary font-medium">
                    &ldquo;Students and the Form I-983&ldquo;
                  </strong>{" "}
                  link under the &ldquo;Student Resources&ldquo; section to
                  download the PDF.
                </p>
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
                : You can download the latest version of the form from the
                official{" "}
                <Link
                  href="https://www.ssa.gov/forms/"
                  className="text-primary hover:underline inline-flex items-center gap-1 font-medium"
                >
                  <span>SSA.gov</span>
                  <ExternalLink className="h-4 w-4" />
                </Link>
                .
                <p className="text-sm text-muted-foreground mt-2 pl-4 border-l-2 border-border ml-1">
                  ↳ While you can fill out the application online, it&apos;s
                  often helpful to review the PDF beforehand to gather all
                  necessary information.
                </p>
              </li>
              <li>
                <strong className="text-foreground">
                  I-94 Arrival/Departure Record
                </strong>
                : You can print your latest I-94 record
                <Link
                  href="https://i94.cbp.dhs.gov/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1 ml-2"
                >
                  here.
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </li>
            </ul>
            <div className="bg-accent/10 border border-accent p-4 rounded-lg flex items-start gap-3">
              <Info className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <strong className="font-bold text-accent-foreground">
                  Check Required Documents
                </strong>
                <p className="text-muted-foreground mt-1">
                  The documents you need can change. Always check the latest
                  requirements on the official{" "}
                  <Link
                    href="https://www.ssa.gov/ssnumber/ss5doc.htm"
                    className="text-primary hover:underline inline-flex items-center gap-1 font-medium"
                  >
                    <span>SSA.gov</span>
                    <ExternalLink className="h-4 w-4" />
                  </Link>{" "}
                  website before visiting an office.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Forms;
