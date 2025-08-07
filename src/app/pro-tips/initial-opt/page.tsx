"use client";

import React from "react";
import Link from "next/link";
import { Info, AlertCircle, Lightbulb, ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const InitialOptProTips: React.FC = () => {
  return (
    <div className="mt-8 max-w-7xl mx-auto w-full">
      <Card className="space-y-8 p-14 shadow-lg">
        {/* Main Title */}
        <CardHeader className="text-center p-0">
          <CardTitle className="text-3xl font-serif font-extrabold text-foreground mb-4">
            Initial OPT: Your First Step to U.S. Work Authorization
          </CardTitle>
          <CardDescription>
            Navigating the Optional Practical Training (OPT) process is a
            crucial step for F-1 students seeking work experience in the U.S.
            This guide provides essential information and best practices for
            your Initial OPT journey.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-8 p-0">
          {/* Section: Purpose & Validity */}
          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground border-b border-border pb-2 flex items-center gap-2">
              <Info className="h-6 w-6 text-primary" /> Purpose & Validity
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The primary purpose of Optional Practical Training (OPT) is to
              provide F-1 students with an opportunity to gain practical
              experience directly related to their major area of study.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>
                <strong className="text-foreground">Work Authorization</strong>:
                Successfully applying for OPT results in an Employment
                Authorization Document (EAD Card), which is your official work
                permit in the U.S.
              </li>
              <li>
                <strong className="text-foreground">EAD Card Validity</strong>:
                The EAD Card for Initial OPT is typically valid for{" "}
                <strong className="text-primary">12 months</strong>.
              </li>
            </ul>
          </div>

          {/* Section: Key Dates & Grace Period */}
          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground border-b border-border pb-2 flex items-center gap-2">
              <Lightbulb className="h-6 w-6 text-accent" /> Key Dates & Grace
              Period
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Understanding your timeline is critical to a successful OPT
              application.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                <strong className="text-foreground">Application Window</strong>:
                You can apply for OPT up to{" "}
                <strong className="text-primary">90 days before</strong> your
                I-20 program end date (graduation date) and{" "}
                <strong className="text-primary">up to 60 days after</strong>{" "}
                your program end date.
              </li>
              <li>
                <strong className="text-foreground">60-Day Grace Period</strong>
                : This period begins immediately after your I-20 program end
                date. During this time, you can remain in the U.S., but you are
                generally{" "}
                <strong className="text-destructive">
                  not authorized to work
                </strong>{" "}
                unless your OPT application is pending or approved. You must
                file your OPT application before this 60-day grace period ends.
                <ul className="list-disc list-inside ml-4 mt-2 text-muted-foreground">
                  <li>
                    <strong className="text-foreground">
                      Example Timeline (Illustrative Only)
                    </strong>
                    :
                    <ul className="list-disc list-inside ml-4 mt-1 text-muted-foreground">
                      <li>
                        If your{" "}
                        <strong className="text-primary">
                          Graduation Date (I-20 Program End Date)
                        </strong>{" "}
                        is{" "}
                        <strong className="text-primary">May 31, 2024</strong>.
                      </li>
                      <li>
                        Your{" "}
                        <strong className="text-primary">
                          Application Window
                        </strong>{" "}
                        is approximately{" "}
                        <strong className="text-primary">
                          March 1, 2024, to July 29, 2024
                        </strong>
                        .
                      </li>
                      <li>
                        Your{" "}
                        <strong className="text-primary">
                          60-Day Grace Period
                        </strong>{" "}
                        is{" "}
                        <strong className="text-primary">
                          May 31, 2024, to July 29, 2024
                        </strong>
                        .
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong className="text-foreground">
                  Choosing Your OPT Start Date
                </strong>
                : This is a personal decision. You can request an OPT start date
                anywhere within your 60-day grace period. It&apos;s advisable to
                choose a weekday, avoiding weekends or holidays, to ensure
                smooth processing.
                <ul className="list-disc list-inside ml-4 mt-2 text-muted-foreground">
                  <li>
                    <strong className="text-foreground">Example</strong>: If
                    your desired{" "}
                    <strong className="text-primary">OPT Start Date</strong> is{" "}
                    <strong className="text-primary">July 10, 2024</strong>,
                    your <strong className="text-primary">OPT End Date</strong>{" "}
                    will be{" "}
                    <strong className="text-primary">July 9, 2025</strong> (1
                    year minus 1 day).
                  </li>
                  <div className="bg-muted/50 border border-border p-3 rounded-lg mt-3 flex items-start gap-3">
                    <Lightbulb className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-sm text-muted-foreground">
                      For precise calculations and a visual representation of
                      these dates, use our{" "}
                      <Link
                        href="/tools?tab=timeline"
                        className="text-primary hover:underline font-semibold"
                      >
                        Graduation Timeline Calculator
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/tools?tab=ead"
                        className="text-primary hover:underline font-semibold"
                      >
                        Initial OPT Calculator
                      </Link>{" "}
                      under the &quot;Tools&quot; section.
                    </p>
                  </div>
                </ul>
              </li>
              <div className="bg-accent/10 border border-accent p-4 rounded-lg flex items-start gap-3">
                <AlertCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-sm text-muted-foreground font-medium">
                  <strong className="text-muted-foreground font-bold">
                    Friendly Reminder
                  </strong>
                  : Be mindful of holidays (like Spring Break or year-end
                  holidays) as they might impact university DSO availability for
                  I-20 endorsement or USCIS processing times. Plan accordingly!
                </p>
              </div>
            </ul>
          </div>

          {/* Section: Required Documents */}
          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground border-b border-border pb-2 flex items-center gap-2">
              📝 Required Documents
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              When preparing your OPT application, ensure you have clear, color
              copies of the following documents. Avoid applying filters like
              black & white. Allowed formats typically include PDF, JPEG, TIF,
              or TIFF.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                <strong className="text-foreground">Passport</strong>: Original
                form, color.
              </li>
              <li>
                <strong className="text-foreground">I-94</strong>: Latest
                original I-94, color. You can retrieve your latest I-94 record
                at{" "}
                <Link
                  href="https://i94.cbp.dhs.gov/I94/#/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  https://i94.cbp.dhs.gov/I94/#/home
                  <ExternalLink className="h-4 w-4" />
                </Link>
                .
              </li>
              <li>
                <strong className="text-foreground">Visa</strong>: Original
                form, color.
              </li>
              <li>
                <strong className="text-foreground">SSN Card</strong>: Original
                form, color. If you don&apos;t have one, you can apply for it.
              </li>
              <li className="flex gap-2 items-center">
                <strong className="text-foreground">
                  Most Recent Passport-Size Photo:
                </strong>

                <p>
                  For more information, visit{" "}
                  <Link
                    href="/photo-tool"
                    className="text-primary hover:underline font-semibold"
                  >
                    Passport Photo Tool & Requirements
                  </Link>
                </p>
              </li>
              <li>
                <strong className="text-foreground">
                  Chase Bank Statements (last 6 months)
                </strong>
                : Original form, color.{" "}
                <div className="bg-muted/50 border border-border p-3 rounded-lg mt-3 flex items-start gap-3">
                  <Info className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-1" />
                  <p className="text-sm text-muted-foreground">
                    <strong className="font-bold">Note</strong>: While often
                    requested by your DSO, USCIS does not typically require bank
                    statements for Form I-765.
                  </p>
                </div>
              </li>
              <li>
                <strong className="text-foreground">
                  Blue Pen Signed New I-20
                </strong>
                : Original form, color. This is the I-20 with the OPT
                recommendation from your Designated School Official (DSO).
              </li>
            </ul>
          </div>

          {/* Section: Application Process */}
          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground border-b border-border pb-2 flex items-center gap-2">
              💻 Application Process: USCIS Portal (Form I-765)
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The most common way to apply for OPT is online through the USCIS
              portal.
            </p>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>
                <strong className="text-foreground">
                  Access the USCIS Portal
                </strong>
                : Go to{" "}
                <Link
                  href="https://my.uscis.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  https://my.uscis.gov/
                  <ExternalLink className="h-4 w-4" />
                </Link>
                .
              </li>
              <li>
                <strong className="text-foreground">Create an Account</strong>:
                <ul className="list-disc list-inside ml-4 mt-1 text-muted-foreground">
                  <li>
                    <strong className="text-foreground">Recommendation</strong>:
                    Use a{" "}
                    <strong className="text-primary">personal email</strong>{" "}
                    address. This account will be permanent and used for future
                    immigration applications (e.g., H1B).
                  </li>
                  <li>
                    <strong className="text-foreground">
                      University Email
                    </strong>
                    : While you can use your university email, be aware that you
                    might lose access after graduation. You can update the email
                    associated with your USCIS account later.
                  </li>
                </ul>
              </li>
              <li>
                <strong className="text-foreground">
                  Fill in Form I-765 (Online)
                </strong>
                :
                <ul className="list-disc list-inside ml-4 mt-1 text-muted-foreground">
                  <li>
                    Start filling out the I-765 form. Many fields may autofill
                    based on your profile.
                  </li>
                  <li>
                    <strong className="text-destructive">
                      Do NOT sign or submit yet.
                    </strong>{" "}
                    Your responses are automatically saved as a draft.
                  </li>
                  <li>
                    If you make any changes and save your responses on a
                    different day, the &quot;Last updated&quot; and
                    &quot;Expires&quot; dates for your draft will adjust
                    accordingly.
                  </li>
                </ul>
              </li>
              <li>
                <strong className="text-foreground">Download Draft</strong>:
                Before final submission, download the unsigned filled I-765 form
                from the &quot;Review and Submit&quot; section. This is for your
                records.
                <ul className="list-disc list-inside ml-4 mt-1 text-muted-foreground">
                  <li>
                    <strong className="text-destructive">Important</strong>:
                    USCIS will delete your application if there is no activity
                    for 30 days.
                  </li>
                </ul>
              </li>
            </ol>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                <strong className="text-foreground">OPT Fee Payment</strong>:
                <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-muted-foreground">
                  <li>
                    <strong className="text-foreground">Payment Method</strong>:
                    Ensure the payment is made from a bank account{" "}
                    <strong className="text-primary">
                      registered exclusively under your name
                    </strong>
                    . Avoid using third-party accounts.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Fees (as of 2025)
                    </strong>
                    :
                    <ul className="list-disc list-inside ml-4 mt-1 text-muted-foreground">
                      <li>
                        <strong className="text-primary">Online Filing</strong>:
                        $470
                      </li>
                      <li>
                        <strong className="text-primary">Paper Filing</strong>:
                        $520
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong className="text-destructive">
                      Always check the latest fees on the official{" "}
                      <Link
                        href="https://www.uscis.gov/g-1055"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline inline-flex items-center gap-1"
                      >
                        USCIS Fee Schedule
                        <ExternalLink className="h-4 w-4" />
                      </Link>{" "}
                      before submitting.
                    </strong>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Section: After Receiving EAD Card */}
          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground border-b border-border pb-2 flex items-center gap-2">
              ✅ After Receiving Your EAD Card
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Congratulations on receiving your EAD Card! Here are some crucial
              next steps:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                <strong className="text-foreground">
                  Social Security Number (SSN)
                </strong>
                : If you don&apos;t already have one, you must visit a Social
                Security Administration (SSA) office to apply for your SSN.
                You&apos;ll need your EAD card.
              </li>
              <div className="bg-muted/50 border border-border p-3 rounded-lg mt-3 flex items-start gap-3">
                <Lightbulb className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                <p className="flex gap-2 text-sm text-muted-foreground">
                  For more information, go to{" "}
                  <Link
                    href="/forms"
                    className="flex gap-2 text-primary hover:underline font-semibold"
                  >
                    <span>Forms </span>
                  </Link>{" "}
                </p>
              </div>
              <li>
                <strong className="text-foreground">SEVP Portal</strong>:
                <ul className="list-disc list-inside ml-4 mt-1 text-muted-foreground">
                  <li>
                    Create your SEVP Portal account using your{" "}
                    <strong className="text-primary">university email</strong>.
                  </li>
                  <li>
                    This portal is managed by SEVP (Student and Exchange Visitor
                    Program), the agency that oversees your SEVIS record.
                    You&apos;ll use it to report employment updates.
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Section: Reporting Obligations */}
          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground border-b border-border pb-2 flex items-center gap-2">
              📢 Reporting Obligations
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Maintaining your F-1 status requires diligent reporting. Be aware
              of who to notify and when:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                <strong className="text-foreground">
                  Notify USCIS Directly (within 10 days)
                </strong>
                :
                <ul className="list-disc list-inside ml-4 mt-1 text-muted-foreground">
                  <li>
                    Change of U.S. mailing or physical address (via Form AR-11
                    or SEVP Portal).
                  </li>
                  <li>Change in immigration status (e.g., F-1 to H-1B).</li>
                  <li>
                    Lost, stolen, damaged, or erroneous EAD card (to request a
                    replacement/correction).
                  </li>
                </ul>
              </li>
              <li>
                <strong className="text-foreground">
                  Notify Your DSO (University) via your university&apos;s
                  designated system or SEVP Portal (within 10 days)
                </strong>
                :
                <ul className="list-disc list-inside ml-4 mt-1 text-muted-foreground">
                  <li>
                    Moving to a new address (if different from what&apos;s in
                    SEVIS).
                  </li>
                  <li>Starting a new OPT job.</li>
                  <li>Ending your current OPT job.</li>
                  <li>Switching employers.</li>
                  <li>Any changes related to maintaining your SEVP record.</li>
                </ul>
              </li>
              <div className="bg-accent/10 border border-accent p-4 rounded-lg flex items-start gap-3">
                <AlertCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-sm text-muted-foreground font-medium">
                  <strong className="text-muted-foreground font-bold">
                    Friendly Reminder
                  </strong>
                  : Your university&apos;s International Student Services Office
                  (DSO) is your primary contact for employment-related updates
                  and questions. When in doubt,{" "}
                  <strong className="text-primary">contact your DSO</strong>.
                </p>
              </div>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InitialOptProTips;
