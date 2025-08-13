import React from "react";
import Link from "next/link";
import { Info, AlertCircle, Lightbulb, ExternalLink, AlertTriangle } from "lucide-react";
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
                : This is a personal decision. You can choose an OPT start date
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
              📝 Required Documents for Form I-765
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              When preparing your OPT application, you must provide clear
              digital copies of your documents. Ensure that all scans or photos
              are in color and legible, without any filters or alterations.
              Allowed formats typically include PDF, JPEG, TIF, or TIFF.
            </p>

            {/* Official USCIS Checklist Link - CORRECTED */}
            <div className="bg-accent/10 border border-accent p-4 rounded-lg flex items-start gap-3">
              <Info className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <strong className="text-muted-foreground font-bold">
                  Always Verify with the Official Source
                </strong>
                <p className="text-muted-foreground mt-1">
                  Document requirements can change. For the most current list,
                  refer to the official{" "}
                  <Link
                    href="https://www.uscis.gov/forms/filing-guidance/checklist-of-required-initial-evidence-for-form-i-765-for-informational-purposes-only"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover-underline inline-flex items-center gap-1 font-medium"
                  >
                    <span>USCIS I-765 Checklist</span>
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                  . Expand the &ldquo;General Requirements&rdquo; and
                  &ldquo;Student Seeking Post-Completion Optional Practical
                  Training (c)(3)(B)&rdquo; sections to view the required
                  documents.
                </p>
              </div>
            </div>

            {/* General Document List - UPDATED */}
            <p className="text-foreground font-medium pt-2">
              Commonly required documents include:
            </p>
            <ul className="list-disc list-inside space-y-3 text-muted-foreground">
              <li>
                <strong className="text-foreground">
                  Signed Form I-20 with OPT Recommendation:
                </strong>{" "}
                A copy of your I-20 endorsed for OPT by your DSO. It&apos;s
                recommended to sign in{" "}
                <strong className="text-primary">blue ink.</strong>
              </li>
              <li>
                <strong className="text-foreground">
                  Most Recent Passport Size Photograph:
                </strong>{" "}
                Make sure it&apos;s not more than six months old. You must meet
                U.S. Department of State specifications. Check out the{" "}
                <Link
                  href="/photo-tool"
                  className="text-primary hover:underline font-semibold"
                >
                  Photo Tool
                </Link>{" "}
                for details.
              </li>
              <li>
                <strong className="text-foreground">
                  Form I-94 Arrival/Departure Record:
                </strong>{" "}
                Your most recent I-94, which you can retrieve from the{" "}
                <Link
                  href="https://i94.cbp.dhs.gov/I94/#/home"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  <span>here</span>
                  <ExternalLink className="h-4 w-4" />
                </Link>
                .
              </li>
              <li>
                <strong className="text-foreground">
                  Valid Passport & F-1 Visa:
                </strong>{" "}
                Copies of your passport&apos;s biographical page (front and
                back) and your F-1 visa page.
              </li>
              <li>
                <strong className="text-foreground">
                  Previous EAD Cards (if applicable):
                </strong>{" "}
                Copies of any previously issued Employment Authorization
                Documents.
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
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  My USCIS
                  <ExternalLink className="h-4 w-4" />
                </Link>
                .
              </li>
              <li>
                <strong className="text-foreground">
                  Create a USCIS Account
                </strong>
                <p className="mt-1 text-muted-foreground">
                  It is recommended to use your university email (.edu) to
                  create your account, but you{" "}
                  <strong className="text-destructive">MUST</strong> update it
                  to a personal email before you lose access after graduation.
                </p>
                <div className="mt-3 bg-muted/50 border border-border p-3 rounded-lg text-sm">
                  <p className="text-foreground font-semibold">
                    Why this matters:
                  </p>
                  <ul className="list-disc list-outside ml-5 mt-2 space-y-1 text-muted-foreground">
                    <li>
                      Your USCIS account is permanent and will be used for all
                      future applications (STEM OPT, H-1B, etc.).
                    </li>
                    <li>
                      Using a personal email you&apos;ll always have access to
                      (like Gmail) ensures you never miss a critical case
                      update.
                    </li>
                  </ul>
                </div>
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
                  <div className="mt-2 bg-destructive/10 border border-destructive p-3 rounded-lg flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <strong className="font-bold text-destructive">
                        Verify Application Fees Before Submitting
                      </strong>
                      <p className="text-muted-foreground mt-1">
                        USCIS fees change periodically. To avoid rejection, you{" "}
                        <strong className="text-destructive">MUST</strong>{" "}
                        verify the current filing fee on the official{" "}
                        <Link
                          href="https://www.uscis.gov/g-1055"
                          className="text-primary hover:underline inline-flex items-center gap-1 font-medium"
                        >
                          <span>USCIS Fee Schedule page</span>
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                        .
                      </p>
                      <p className="text-xs text-muted-foreground mt-2 pl-4 border-l-2 border-border ml-1">
                        ↳ Look for the &ldquo;Downloads&rdquo; section to find
                        the{" "}
                        <strong className="text-primary font-medium">
                          &ldquo;Fee Schedule link&rdquo;
                        </strong>
                        .
                      </p>
                    </div>
                  </div>
                </ul>
              </li>
            </ol>
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
                  : Your university&apos;s Designated School Official (DSO) is
                  your primary contact for employment-related updates and
                  questions. When in doubt,{" "}
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
