"use client";

import React from "react";
import Link from "next/link"; // Assuming Next.js Link for internal navigation
import {
  Info,
  AlertCircle,
  Lightbulb,
  CalendarCheck,
  ExternalLink,
} from "lucide-react"; // Importing icons
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


const StemOptProTips: React.FC = () => {
  return (
    <div className="mt-8 max-w-7xl mx-auto w-full">
      <Card className="space-y-8 p-14 shadow-lg">
        {/* Main Title */}
        <CardHeader className="text-center p-0">
          <CardTitle className="text-3xl font-serif font-extrabold text-foreground mb-4">
            STEM OPT Extension: Continuing Your U.S. Work Journey
          </CardTitle>
          <CardDescription>
            The STEM OPT extension provides eligible F-1 students with an
            additional 24 months of work authorization after their initial
            12-month OPT. This guide covers key aspects of the STEM OPT process.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-8 p-0">
          {/* Section: Validity & Eligibility */}
          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground border-b border-border pb-2 flex items-center gap-2">
              <CalendarCheck className="h-6 w-6 text-primary" /> Validity &
              Eligibility
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                <strong className="text-foreground">Validity</strong>: The STEM
                OPT extension is valid for{" "}
                <strong className="text-primary">2 years (24 months)</strong>.
                You can apply for it only once.
              </li>
              <li>
                <strong className="text-foreground">Timing</strong>: You can
                start applying for the STEM OPT extension{" "}
                <strong className="text-primary">90 days before</strong> your
                Initial OPT End Date. It&apos;s crucial to file your application
                before your current OPT expires.
                <div className="bg-muted/50 border border-border p-3 rounded-lg mt-3 flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <p className="text-sm text-muted-foreground">
                    <strong className="font-bold">Important Note</strong>: If
                    you have a new employer before your Initial OPT End Date,
                    you must first report this change to your DSO and/or via the
                    SEVP Portal (as per your university&apos;s guidance) and
                    then apply for STEM OPT. For example, if your Initial OPT
                    Start Date is July 18, 2024, and End Date is July 17, 2025,
                    and you get a new employer on July 16, 2025, report the new
                    employer first.
                  </p>
                </div>
              </li>
              <li>
                <strong className="text-foreground">
                  Employment Requirement
                </strong>
                : Maintaining employment and earning a salary is a{" "}
                <strong className="text-destructive">MUST</strong> throughout
                your STEM OPT period.
              </li>
              <li>
                <strong className="text-foreground">
                  Employer Requirements
                </strong>
                :
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-muted-foreground">
                  <li>
                    Your employer{" "}
                    <strong className="text-primary">
                      must be an E-Verify company
                    </strong>
                    . You can check if a company is E-Verify registered{" "}
                    <Link
                      href="https://www.e-verify.gov/employers/enrolled-employers"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      here
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                    .
                  </li>
                  <li>
                    <strong className="text-destructive">
                      No self-employment or unpaid work/employment
                    </strong>{" "}
                    is allowed for STEM OPT unless specifically permitted by
                    USCIS guidance (which is rare for STEM OPT).
                  </li>
                  <li>
                    Volunteer work generally does not count toward the
                    employment requirement for STEM OPT.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Bona Fide Employee-Employer Relationship
                    </strong>
                    : Your employer must have real control and oversight over
                    your work, similar to a regular job. This includes:
                    <ul className="list-disc list-inside ml-4 mt-1 text-muted-foreground">
                      <li>Supervising your tasks.</li>
                      <li>Providing training or guidance.</li>
                      <li>Having you on their payroll (paid work).</li>
                      <li>
                        <strong className="text-foreground">
                          For STEM OPT, this specifically means
                        </strong>
                        : You cannot be self-employed, nor can you work solely
                        for a staffing agency or consultancy without real,
                        direct supervision from them. Your job duties must be
                        directly related to your STEM degree.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong className="text-accent-foreground">
                      Note on Staffing & Consulting Agencies
                    </strong>
                    : Employer scrutiny is high for these types of arrangements.
                    Ensure a clear, direct employer-employee relationship
                    exists.
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Section: Application Process */}
          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground border-b border-border pb-2 flex items-center gap-2">
              📝 Application Process: Forms I-765 & I-983
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              You will file two key applications for your STEM OPT extension:
              Form I-765 (Application for Employment Authorization) and Form
              I-983 (Training Plan for STEM OPT Students).
            </p>
            <div className="bg-muted/50 border border-border p-3 rounded-lg mt-3 flex items-start gap-3">
              <Lightbulb className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
              <p className="text-sm text-muted-foreground">
                <strong className="font-bold">Photo Tip</strong>: Can you use
                the same photo for I-765 that you submitted to USCIS last year?
                If it&apos;s less than 6 months old, it&apos;s generally okay.
                However, to be safe and avoid potential Requests for Evidence
                (RFEs), it&apos;s always recommended to retake a new, recent
                picture.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3 font-serif">
              Best Approach to Apply:
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>
                <strong className="text-foreground">
                  First, Complete Form I-983
                </strong>
                :
                <ul className="list-disc list-inside ml-4 mt-1 text-muted-foreground">
                  <li>
                    Fill out the I-983 form digitally using Adobe Reader,
                    Microsoft Edge, or any reliable PDF tool.
                  </li>
                  <li>
                    <strong className="text-primary">
                      Digitally sign the PDF
                    </strong>
                    . There&apos;s no need to print, sign by hand, and then
                    scan. Avoid using screenshots for signatures.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Section 3 (Employer Information)
                    </strong>
                    : The start date here should be your STEM OPT start date (
                    <span className="font-bold text-primary">
                      Illustrative Example
                    </span>
                    : July 18, 2025).
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Section 5 (Employer Site Information)
                    </strong>
                    : This address should be your actual work location (e.g.,
                    branch office address), not necessarily the company&apos;s
                    headquarters if you work elsewhere. This section&apos;s
                    information does not have to match the signee who signs the
                    I-983 form for you, but it{" "}
                    <strong className="text-primary">
                      should match the supervisor&apos;s information that you
                      report in your university&apos;s international student
                      office/DSO
                    </strong>
                    .
                    <div className="bg-muted/50 border border-border p-3 rounded-lg mt-3 flex items-start gap-3">
                      <Info className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-1" />
                      <p className="text-sm text-muted-foreground">
                        <strong className="font-bold">
                          Scenario Examples for Section 5 (Illustrative Only):
                        </strong>
                        <ul className="list-disc list-inside ml-4 mt-1">
                          <li>
                            <strong className="text-foreground">
                              Working Remotely at a Branch (not HQ)
                            </strong>
                            : Employer Address = Company&apos;s HQ address; Site
                            Address = Your home address.
                          </li>
                          <li>
                            <strong className="text-foreground">
                              Working Onsite at a Branch (not HQ)
                            </strong>
                            : Employer Address = Company&apos;s HQ address; Site
                            Address = Specific branch office.
                          </li>
                          <li>
                            <strong className="text-foreground">
                              Working Remotely at the HQ (main office)
                            </strong>
                            : Employer Address = Company&apos;s HQ address; Site
                            Address = Your home address.
                          </li>
                          <li>
                            <strong className="text-foreground">
                              Working Onsite at the HQ (main office)
                            </strong>
                            : Employer Address = Company&apos;s HQ address; Site
                            Address = Same as employer address (HQ).
                          </li>
                        </ul>
                      </p>
                    </div>
                  </li>
                  <li className="mt-4">
                    <strong className="text-foreground">
                      Training Plan (Section 5, &quot;Student&apos;s Learning
                      Objectives&quot; and &quot;Employer&apos;s
                      Commitments&quot;)
                    </strong>
                    : Provide a clear, concise description of your training
                    plan. Aim for{" "}
                    <strong className="text-primary">4-6 sentences max</strong>{" "}
                    for each question, focusing on what you will learn and how
                    your employer will support your development. Use a
                    third-person perspective (e.g., &quot;The student will
                    develop skills in X by performing Y tasks...&quot;). Clarity
                    is more important than length.
                  </li>
                  <li>
                    <strong className="text-foreground">I-983 Page 5</strong>:
                    This section can be left empty for now while applying. It
                    should only be filled when you submit your 12-month and
                    24-month final validation reports.
                  </li>
                </ul>
              </li>
              <li>
                <strong className="text-foreground">
                  Make sure I-983 is Signed
                </strong>
                : Confirm that your I-983 is fully completed and digitally
                signed by both you and your employer.
              </li>
              <li>
                <strong className="text-foreground">
                  Next, Form I-765 (via USCIS Portal)
                </strong>
                :
                <ul className="list-disc list-inside ml-4 mt-1 text-muted-foreground">
                  <li>
                    Access the USCIS portal and begin filling out your I-765 for
                    STEM OPT.
                  </li>
                  <li>
                    <strong className="text-destructive">
                      Save the unsigned I-765 draft
                    </strong>{" "}
                    in the portal.
                  </li>
                </ul>
              </li>
              <li>
                <strong className="text-foreground">
                  Send both the unsigned I-765 & Signed I-983 Form via your
                  university&apos;s international student office/DSO.
                </strong>{" "}
                Your DSO will review and endorse your I-20 before you submit to
                USCIS.{" "}
                <strong className="text-destructive">
                  Do NOT submit Form I-983 directly to USCIS.
                </strong>
              </li>
            </ol>
            <div className="bg-muted/50 border border-border p-3 rounded-lg mt-3 flex items-start gap-3">
              <Lightbulb className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
              <p className="text-sm text-muted-foreground">
                For precise calculations of your STEM OPT dates, including start
                and end, and to see how they fit into your overall F-1 journey,
                use our{" "}
                <Link
                  href="/tools?tab=stem"
                  className="text-primary hover:underline font-semibold"
                >
                  STEM OPT Calculator
                </Link>{" "}
                under the &quot;Tools&quot; section.
              </p>
            </div>
          </div>

          {/* Section: Unemployment & Grace Periods */}
          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground border-b border-border pb-2 flex items-center gap-2">
              ⏳ Unemployment & Grace Periods
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                <strong className="text-foreground">Unemployment Period</strong>
                :
                <ul className="list-disc list-inside ml-4 mt-1 text-muted-foreground">
                  <li>
                    For Initial OPT, you are allowed a maximum of{" "}
                    <strong className="text-primary">90 days</strong> of
                    unemployment.
                  </li>
                  <li>
                    For STEM OPT, you are allowed an additional{" "}
                    <strong className="text-primary">60 days</strong>, bringing
                    your{" "}
                    <strong className="text-primary">
                      total cumulative unemployment days across Initial + STEM
                      OPT to 150 days
                    </strong>
                    .
                  </li>
                  <li>
                    You must report any employment to USCIS (via SEVP Portal)
                    within these periods.
                  </li>
                </ul>
              </li>
              <li>
                <strong className="text-foreground">Grace Period</strong>:
                <ul className="list-disc list-inside ml-4 mt-1 text-muted-foreground">
                  <li>
                    After your STEM OPT End Date, you have a{" "}
                    <strong className="text-primary">
                      60-day grace period
                    </strong>
                    . During this time, you can:
                  </li>
                  <ul className="list-disc list-inside ml-8 mt-1 text-muted-foreground">
                    <li>Look for a new job (e.g., H1B sponsorship).</li>
                    <li>Change your immigration status.</li>
                    <li>Transfer to another school.</li>
                    <li>Leave the U.S.</li>
                    <li>
                      Apply for another visa like a master&apos;s program.
                    </li>
                  </ul>
                </ul>
              </li>
            </ul>
          </div>

          {/* Section: Reporting Obligations (Crucial for Status Maintenance) */}
          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground border-b border-border pb-2 flex items-center gap-2">
              📢 Reporting Obligations (Crucial for Status Maintenance)
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Maintaining your F-1 status requires strict adherence to reporting
              requirements.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                <strong className="text-foreground">
                  Notify USCIS Directly (within 10 days)
                </strong>
                :
                <ul className="list-disc list-inside ml-4 mt-1 text-muted-foreground">
                  <li>
                    Change of U.S. mailing or physical address (Form AR-11 or
                    SEVP Portal).
                  </li>
                  <li>Change in immigration status (e.g., F-1 → H-1B).</li>
                  <li>
                    Lost, stolen, damaged, or erroneous EAD card (to request a
                    replacement/correction).
                  </li>
                </ul>
              </li>
              <li>
                <strong className="text-foreground">
                  Notify Your DSO (Designated School Official) or your
                  university&apos;s international student office within 10 days
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
                  <li>
                    Promotions or significant changes in job
                    title/responsibilities.
                  </li>
                  <li>Changes in how your job relates to your STEM degree.</li>
                  <li>
                    Changes in employer&apos;s EIN, name, or address (HQ or
                    worksite).
                  </li>
                  <li>
                    Changes in supervisor or supervisor&apos;s contact
                    information.
                  </li>
                  <li>
                    Reduction in compensation or significant decrease in work
                    hours (especially below the 20-hour minimum).
                  </li>
                  <li>
                    Changes to employer&apos;s commitments or student&apos;s
                    learning objectives outlined in Form I-983.
                  </li>
                  <li>Loss of employment.</li>
                </ul>
              </li>
              <div className="bg-accent/10 border border-accent p-4 rounded-lg flex items-start gap-3">
                <Lightbulb className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-sm text-accent-foreground font-medium">
                  <strong className="text-muted-foreground font-bold">
                    In Short
                  </strong>
                  :
                  <ul className="text-muted-foreground list-disc list-inside ml-4 mt-1">
                    <li>
                      <strong className="text-primary">USCIS</strong>: Only
                      address, immigration status, and EAD card issues go
                      directly to USCIS.
                    </li>
                    <li>
                      <strong className="text-primary">DSO (University)</strong>
                      : All employment-related changes—including all of your job
                      starts, ends, promotions, salary changes, site moves, and
                      the full palette of I‑983 &ldquo;material
                      changes&rdquo;—are reported to your DSO via your
                      university&apos;s designated system (e.g., SEVP Portal or
                      your school&apos;s specific portal).
                    </li>
                  </ul>
                </p>
              </div>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3 flex items-center gap-2 font-serif">
              <Info className="h-5 w-5 text-primary" /> Validation Reports (MUST
              Submit via University System)
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              These are critical reports to maintain your STEM OPT status.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                <strong className="text-foreground">Frequency</strong>: You{" "}
                <strong className="text-destructive">MUST</strong> submit a
                validation report every{" "}
                <strong className="text-primary">6 months</strong> throughout
                your STEM OPT extension.
              </li>
              <li>
                <strong className="text-foreground">Strict Deadlines</strong>:
                While your university may send reminders, missing these
                deadlines can lead to the{" "}
                <strong className="text-destructive">
                  revocation of your F-1 status
                </strong>
                .
                <div className="bg-muted/50 border border-border p-3 rounded-lg mt-3 flex items-start gap-3">
                  <Info className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-1" />
                  <p className="text-sm text-muted-foreground">
                    <strong className="font-bold">Note</strong>: Even if you
                    miss the due date to submit the validation report, you
                    generally have an additional{" "}
                    <strong className="text-primary">10 days</strong> after your
                    due date within which you can report. However, relying on
                    this grace period is risky and not advised.
                  </p>
                </div>
              </li>
              <li>
                <strong className="text-foreground">Submission Window</strong>:
                You can typically submit reports up to 30 days in advance, but
                it&apos;s generally{" "}
                <strong className="text-destructive">not advisable</strong> to
                submit too early or rely on last-minute submissions.
              </li>
              <li>
                <strong className="text-foreground">
                  I-983 Updates for Validation Reports
                </strong>
                :
                <ul className="list-disc list-inside ml-4 mt-1 text-muted-foreground">
                  <li>
                    Only the <strong className="text-primary">12-month</strong>{" "}
                    and <strong className="text-primary">24-month</strong>{" "}
                    validation reports typically require submission via your
                    university&apos;s designated system (e.g., SEVP Portal or
                    your school&apos;s specific portal).
                  </li>
                  <li>
                    The <strong className="text-primary">6-month</strong> and{" "}
                    <strong className="text-primary">18-month</strong> reports
                    are usually updates to your already signed Form I-983. You
                    only need to submit a revised I-983 if you&apos;ve had{" "}
                    <strong className="text-primary">material changes</strong>{" "}
                    (as listed above) since your last report.
                  </li>
                  <li>
                    Ensure your company address (Section 3) and site address
                    (Section 5) match your actual work location when submitting.
                  </li>
                </ul>
              </li>
            </ul>
            <div className="bg-muted/50 border border-border p-3 rounded-lg mt-3 flex items-start gap-3">
              <Lightbulb className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
              <p className="text-sm text-muted-foreground">
                For precise calculations of your STEM OPT dates, including start
                and end, and to see how they fit into your overall F-1 journey,
                use our{" "}
                <Link
                  href="/tools?tab=stem"
                  className="text-primary hover:underline font-semibold"
                >
                  STEM OPT Calculator
                </Link>{" "}
                under the &quot;Tools&quot; section.
              </p>
            </div>
          </div>

          {/* Section: H1B Cap-Gap Extension */}
          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground border-b border-border pb-2 flex items-center gap-2">
              🌉 H1B Cap-Gap Extension
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The Cap-Gap extension is designed to bridge the period between the
              expiration of your F-1 OPT/STEM OPT work authorization and the
              start of your H-1B status.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                <strong className="text-foreground">Eligibility</strong>: If
                your employer files an H-1B petition (with a change of status
                request) on your behalf during the H-1B lottery period
                (typically March-June), and your OPT/STEM OPT expires before
                October 1st (when H-1B status begins), the Cap-Gap extension
                automatically kicks in.
              </li>
              <li>
                <strong className="text-foreground">Purpose</strong>: It extends
                your F-1 status and work authorization until September 30th of
                the year your H-1B begins, preventing a gap in your legal status
                and ability to work.
              </li>
              <li>
                <strong className="text-foreground">
                  Example Timeline (Illustrative Only)
                </strong>
                :
                <ul className="list-disc list-inside ml-4 mt-1 text-muted-foreground">
                  <li>
                    <strong className="text-primary">
                      OPT/STEM OPT End Date
                    </strong>
                    : July 17, 2025
                  </li>
                  <li>
                    <strong className="text-primary">
                      H-1B Lottery Application
                    </strong>
                    : March 2025
                  </li>
                  <li>
                    <strong className="text-primary">
                      H-1B Petition Filed (if selected)
                    </strong>
                    : April 2025 (e.g., April 1 - June 30 filing window)
                  </li>
                  <li>
                    <strong className="text-primary">H1B Start Date</strong>:
                    October 1, 2025
                  </li>
                  <li>
                    <strong className="text-primary">Cap-Gap Period</strong>:
                    July 18, 2025 (day after OPT/STEM OPT ends) to September 30,
                    2025.
                  </li>
                </ul>
              </li>
              <div className="bg-accent/10 border border-accent p-4 rounded-lg flex items-start gap-3">
                <AlertCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-sm text-accent-foreground font-medium">
                  <strong className="font-bold">Important</strong>: The Cap-Gap
                  extension applies only if your H-1B petition is filed and
                  accepted by USCIS with a change of status request. If you
                  applied for STEM OPT previously, and then for H1B, the Cap-Gap
                  would extend your STEM OPT (if it expires before Oct 1).
                </p>
              </div>
            </ul>
            <div className="bg-muted/50 border border-border p-3 rounded-lg mt-3 flex items-start gap-3">
              <Lightbulb className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
              <p className="text-sm text-muted-foreground">
                To calculate your H1B Cap-Gap dates and understand the bridge
                period between your STEM OPT and H1B status, use our{" "}
                <Link
                  href="/tools?tab=h1b"
                  className="text-primary hover:underline font-semibold"
                >
                  H1B Cap-Gap Calculator
                </Link>{" "}
                under the &quot;Tools&quot; section.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StemOptProTips;
