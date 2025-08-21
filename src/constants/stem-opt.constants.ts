import { PageContent } from "@/types/content.types";

export const stemOptContent: PageContent = {
  header: {
    title: "STEM OPT Extension: Continuing Your U.S. Work Journey",
    subtitle:
      "The STEM OPT extension provides eligible F-1 students with an additional 24 months of work authorization after their initial 12-month OPT. This guide covers key aspects of the STEM OPT process.",
  },
  sections: [
    {
      id: "eligibility",
      icon: "CalendarCheck",
      title: "Validity & Eligibility",
      description: null,
      content: [
        {
          type: "list",
          items: [
            [
              { type: "strong", text: "Validity" },
              { type: "text", text: ": The STEM OPT extension is valid for " },
              { type: "strong-primary", text: "2 years (24 months)" },
              { type: "text", text: "." },
            ],
            {
              text: [
                { type: "strong", text: "Timing" },
                {
                  type: "text",
                  text: ": You can start applying for the STEM OPT extension ",
                },
                { type: "strong-primary", text: "90 days before" },
                {
                  type: "text",
                  text: " your Initial OPT End Date. It's crucial to file your application before your current OPT expires.",
                },
              ],
            },
            {
              type: "infoBlock",
              icon: "Lightbulb",
              variant: "default",
              content: [
                {
                  type: "paragraph",
                  text: [
                    { type: "strong", text: "Important Note" },
                    {
                      type: "text",
                      text: ": If you have a new employer before your Initial OPT End Date, you must first report this change to your DSO and/or via the SEVP Portal (as per your university's guidance) and then apply for STEM OPT. For example, if your Initial OPT Start Date is July 18, 2024, and End Date is July 17, 2025, and you get a new employer on July 10, 2025, report the new employer first.",
                    },
                  ],
                },
              ],
            },
            [
              { type: "strong", text: "Employment Requirement" },
              {
                type: "text",
                text: ": Maintaining employment and earning a salary is a ",
              },
              { type: "strong-destructive", text: "MUST" },
              { type: "text", text: " throughout your STEM OPT period." },
            ],
            {
              text: [{ type: "strong", text: "Employer Requirements" }],
              subList: {
                type: "list",
                items: [
                  [
                    { type: "text", text: "Your employer " },
                    {
                      type: "strong-primary",
                      text: "must be an E-Verify company",
                    },
                    {
                      type: "text",
                      text: ". You can check if a company is E-Verify registered ",
                    },
                    {
                      type: "link",
                      text: "here",
                      href: "https://www.e-verify.gov/e-verify-employer-search",
                      external: true,
                    },
                    { type: "text", text: "." },
                  ],
                  "Volunteer work generally does not count toward the employment requirement for STEM OPT.",
                  {
                    text: [
                      {
                        type: "strong",
                        text: "Bona Fide Employee-Employer Relationship",
                      },
                      {
                        type: "text",
                        text: ": Your employer must have real control and oversight over your work, similar to a regular job. This includes:",
                      },
                    ],
                    subList: {
                      type: "list",
                      items: [
                        "Supervising your tasks.",
                        "Providing training or guidance.",
                        "Having you on their payroll (paid work).",
                        [
                          {
                            type: "strong",
                            text: "For STEM OPT, this specifically means",
                          },
                          {
                            type: "text",
                            text: ": You cannot be self-employed, nor can you work solely for a staffing agency or consultancy without real, direct supervision from them. Your job duties must be directly related to your STEM degree.",
                          },
                        ],
                      ],
                    },
                  },
                  [
                    {
                      type: "strong",
                      text: "Note on Staffing & Consulting Agencies",
                    },
                    {
                      type: "text",
                      text: ": Employer scrutiny is high for these types of arrangements. Ensure a clear, direct employer-employee relationship exists.",
                    },
                  ],
                ],
              },
            },
          ],
        },
      ],
    },
    {
      id: "application",
      icon: "FileSignature",
      title: "STEM OPT Application Process",
      description: null,
      content: [
        {
          type: "paragraph",
          text: [
            {
              type: "text",
              text: "Applying for the STEM OPT extension involves two key forms: the ",
            },
            {
              type: "strong",
              text: "Form I-983",
            },
            {
              type: "text",
              text: " (your training plan, submitted to your DSO) and the ",
            },
            {
              type: "strong",
              text: "Form I-765",
            },
            {
              type: "text",
              text: " (your work authorization application, submitted to USCIS).",
            },
          ],
        },
        {
          type: "infoBlock",
          icon: "Lightbulb",
          variant: "default",
          content: [
            {
              type: "paragraph",
              text: [
                { type: "strong", text: "Photo Tip" },
                {
                  type: "text",
                  text: ": Make sure it's not more than 6 months old. It's always recommended to retake a new, recent picture.",
                },
              ],
            },
          ],
        },
        {
          type: "paragraph",
          text: [
            {
              type: "strong",
              text: "Required Documents for Form I-765",
            },
          ],
        },
        {
          type: "paragraph",
          text: [
            {
              type: "text",
              text: "When preparing your OPT application, you must provide clear digital copies of your documents. Ensure that all scans or photos are in color and legible, without any filters or alterations. Allowed formats typically include PDF, JPEG, TIF, or TIFF.",
            },
          ],
        },
        {
          type: "infoBlock",
          variant: "warning",
          icon: "Info",
          title: "Always Verify with the Official Source",
          content: [
            {
              type: "paragraph",
              text: [
                {
                  type: "text",
                  text: "Document requirements can change. For the most current list, refer to the official ",
                },
                {
                  type: "link",
                  text: "USCIS I-765 Checklist",
                  href: "https://www.uscis.gov/forms/filing-guidance/checklist-of-required-initial-evidence-for-form-i-765-for-informational-purposes-only",
                  external: true,
                },
                {
                  type: "text",
                  text: ". Expand the “General Requirements”, “Student Seeking Post-Completion Optional Practical Training (c)(3)(B)” and “Student with a Degree in Science, Technology, Engineering, or Mathematics (STEM) Who is Seeking A 24-Month STEM Extension of Optional Practical Training (c)(3)(C)“ sections to view the required documents.",
                },
              ],
            },
          ],
        },
        {
          type: "list",
          items: [
            [
              {
                type: "strong",
                text: "Form I-20 with STEM OPT Recommendation: ",
              },
              {
                type: "text",
                text: "A copy of the new I-20 issued by your DSO that is endorsed for the 24-month STEM OPT extension. It's recommended to sign in ",
              },
              { type: "strong-primary", text: "blue ink." },
            ],
            [
              {
                type: "strong",
                text: "Copy of Your STEM-Qualifying Degree: ",
              },
              {
                type: "text",
                text: "Provide evidence of your degree, such as a copy of your diploma or an official transcript that shows the degree conferred.",
              },
            ],
            [
              {
                type: "strong",
                text: "Most Recent Passport Size Photograph: ",
              },
              {
                type: "text",
                text: "Make sure it's not more than six months old. You must meet U.S. Department of State specifications. Check out the ",
              },
              {
                type: "link",
                text: "Photo Tool",
                href: "/photo-tool",
              },
              { type: "text", text: " for details." },
            ],
            [
              {
                type: "strong",
                text: "Form I-94 Arrival/Departure Record: ",
              },
              {
                type: "text",
                text: "Your most recent I-94, which you can retrieve from ",
              },
              {
                type: "link",
                text: "here",
                href: "https://i94.cbp.dhs.gov/I94/#/home",
                external: true,
              },
              { type: "text", text: "." },
            ],
            [
              {
                type: "strong",
                text: "Valid Passport & F-1 Visa: ",
              },
              {
                type: "text",
                text: "Copies of your passport's biographical page (front and back) and your F-1 visa page.",
              },
            ],
            [
              {
                type: "strong",
                text: "Previous EAD Cards (if applicable): ",
              },
              {
                type: "text",
                text: "Clear copies of the front and back of any previously issued Employment Authorization Documents, including your initial OPT EAD.",
              },
            ],
          ],
        },
        {
          type: "ordered-list",
          items: [
            {
              text: [
                {
                  type: "strong",
                  text: "Complete the Form I-983 Training Plan with Your Employer",
                },
              ],
              nestedContent: [
                {
                  type: "paragraph",
                  text: [
                    {
                      type: "text",
                      text: "This is your training plan. You and your employer must complete and sign it. This form is submitted directly to your DSO, ",
                    },
                    { type: "strong-destructive", text: "not to USCIS." },
                  ],
                },
                {
                  type: "infoBlock",
                  variant: "default",
                  title: "Key points for Form I-983:",
                  icon: "Info",
                  content: [
                    {
                      type: "list",
                      items: [
                        [
                          { type: "strong", text: "Section 3 Start Date: " },
                          {
                            type: "text",
                            text: "This must be your official STEM OPT start date (the day after your initial OPT ends).",
                          },
                        ],
                        [
                          { type: "strong", text: "Section 5 Site Address: " },
                          {
                            type: "text",
                            text: "This should be your actual physical work location.",
                          },
                        ],
                        [
                          { type: "strong", text: "Page 5 Evaluations: " },
                          {
                            type: "text",
                            text: "Leave the self-evaluations on page 5 blank for the initial application.",
                          },
                        ],
                      ],
                    },
                  ],
                },
              ],
            },
            {
              text: [
                {
                  type: "strong",
                  text: "Submit Your Signed I-983 to Your DSO",
                },
              ],
              nestedContent: [
                {
                  type: "paragraph",
                  text: [
                    {
                      type: "text",
                      text: "Send the completed I-983 to your Designated School Official (DSO). They will review it and, upon approval, issue a new Form I-20 endorsed for the STEM OPT extension.",
                    },
                  ],
                },
              ],
            },
            {
              text: [
                {
                  type: "strong",
                  text: "File Form I-765 with USCIS Online",
                },
              ],
              nestedContent: [
                {
                  type: "paragraph",
                  text: [
                    {
                      type: "text",
                      text: "Once you receive your new STEM OPT-endorsed I-20, you can file Form I-765 through your MyUSCIS account. You must upload all the required documents listed above, including the new I-20.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "infoBlock",
          icon: "Lightbulb",
          variant: "default",
          content: [
            {
              type: "paragraph",
              text: [
                {
                  type: "text",
                  text: "To calculate your STEM OPT dates, including start and end, and to see how they fit into your overall F-1 journey, use our ",
                },
                {
                  type: "link",
                  href: "/tools?tab=stem",
                  text: "STEM OPT Calculator",
                },
                { type: "text", text: ' under the "Tools" section.' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "unemployment",
      icon: "Clock",
      title: "Unemployment & Grace Periods",
      description: null,
      content: [
        {
          type: "list",
          items: [
            {
              text: [{ type: "strong", text: "Unemployment Period" }],
              subList: {
                type: "list",
                items: [
                  [
                    {
                      type: "text",
                      text: "For Initial OPT, you are allowed a maximum of ",
                    },
                    { type: "strong-primary", text: "90 days" },
                    { type: "text", text: " of unemployment." },
                  ],
                  [
                    {
                      type: "text",
                      text: "For STEM OPT, you are allowed an additional ",
                    },
                    { type: "strong-primary", text: "60 days" },
                    { type: "text", text: ", bringing your " },
                    {
                      type: "strong-primary",
                      text: "total cumulative unemployment days across Initial + STEM OPT to 150 days",
                    },
                    { type: "text", text: "." },
                  ],
                  "You must report any employment to USCIS (via SEVP Portal) within these periods.",
                ],
              },
            },
            {
              text: [{ type: "strong", text: "Grace Period" }],
              subList: {
                type: "list",
                items: [
                  [
                    {
                      type: "text",
                      text: "After your STEM OPT End Date, you have a ",
                    },
                    {
                      type: "strong-primary",
                      text: "60-day grace period",
                    },
                    { type: "text", text: ". During this time, you can:" },
                  ],
                  {
                    subList: {
                      type: "list",
                      items: [
                        "Look for a new job (e.g., H1B sponsorship).",
                        "Change your immigration status.",
                        "Transfer to another school.",
                        "Leave the U.S.",
                        "Apply for another visa like a master's program.",
                      ],
                    },
                  },
                ],
              },
            },
          ],
        },
      ],
    },
    {
      id: "reporting",
      icon: "Megaphone",
      title: "Reporting Obligations (Crucial for Status Maintenance)",
      description:
        "Maintaining your F-1 status requires strict adherence to reporting requirements.",
      content: [
        {
          type: "list",
          items: [
            {
              text: [
                {
                  type: "strong",
                  text: "Notify USCIS Directly (within 10 days)",
                },
              ],
              subList: {
                type: "list",
                items: [
                  "Change of U.S. mailing or physical address (Form AR-11 or SEVP Portal).",
                  "Change in immigration status (e.g., F-1 → H-1B).",
                  "Lost, stolen, damaged, or erroneous EAD card (to request a replacement/correction).",
                ],
              },
            },
            {
              text: [
                {
                  type: "strong",
                  text: "Notify Your DSO (Designated School Official) or your university's international student office within 10 days",
                },
              ],
              subList: {
                type: "list",
                items: [
                  "Moving to a new address (if different from what's in SEVIS).",
                  "Starting a new OPT job.",
                  "Ending your current OPT job.",
                  "Switching employers.",
                  "Promotions or significant changes in job title/responsibilities.",
                  "Changes in how your job relates to your STEM degree.",
                  "Changes in employer's EIN, name, or address (HQ or worksite).",
                  "Changes in supervisor or supervisor's contact information.",
                  "Reduction in compensation or significant decrease in work hours (especially below the 20-hour minimum).",
                  "Loss of employment.",
                ],
              },
            },
          ],
        },
        {
          type: "infoBlock",
          icon: "Lightbulb",
          variant: "default",
          title: "In Short:",
          content: [
            {
              type: "list",
              items: [
                [
                  { type: "strong-primary", text: "USCIS: " },
                  {
                    type: "text",
                    text: "Only address, immigration status, and EAD card issues go directly to USCIS.",
                  },
                ],
                [
                  { type: "strong-primary", text: "DSO (University): " },
                  {
                    type: "text",
                    text: "All employment-related changes; including all of your job starts, ends, promotions, salary changes, site moves, and the full palette of I-983 “material changes”; are reported to your DSO.",
                  },
                ],
              ],
            },
          ],
        },
        {
          type: "paragraph",
          text: [{ type: "strong", text: "Validation Reports" }],
        },
        {
          type: "paragraph",
          text: [
            {
              type: "text",
              text: "These are critical reports to maintain your STEM OPT status.",
            },
          ],
        },
        {
          type: "list",
          items: [
            [
              { type: "strong", text: "Frequency: " },
              { type: "text", text: "You " },
              { type: "strong-destructive", text: "MUST" },
              { type: "text", text: " submit a validation report every " },
              { type: "strong-primary", text: "6 months" },
              { type: "text", text: " throughout your STEM OPT extension." },
            ],
            {
              text: [
                { type: "strong", text: "Strict Deadlines: " },
                {
                  type: "text",
                  text: "While your university may send reminders, missing these deadlines can lead to the ",
                },
                {
                  type: "strong-destructive",
                  text: "revocation of your F-1 status",
                },
                { type: "text", text: "." },
              ],
              nestedContent: [
                {
                  type: "infoBlock",
                  icon: "Info",
                  variant: "default",
                  content: [
                    {
                      type: "paragraph",
                      text: [
                        { type: "strong", text: "Note: " },
                        {
                          type: "text",
                          text: "Even if you miss the due date to submit the validation report, you generally have an additional 10 days after your due date within which you can report. However, relying on this grace period is risky and ",
                        },
                        { type: "strong-primary", text: "NOT advised" },
                        { type: "text", text: "." },
                      ],
                    },
                  ],
                },
              ],
            },
            [
              { type: "strong", text: "Submission Window: " },
              {
                type: "text",
                text: "You can typically submit reports up to 30 days in advance, but it's generally ",
              },
              {
                type: "strong-destructive",
                text: "not advisable",
              },
              {
                type: "text",
                text: " to submit too early or rely on last-minute submissions.",
              },
            ],
            {
              text: [
                {
                  type: "strong",
                  text: "I-983 Updates for Validation Reports",
                },
              ],
              subList: {
                type: "list",
                items: [
                  [
                    { type: "text", text: "Only the " },
                    { type: "strong-primary", text: "12-month" },
                    { type: "text", text: " and " },
                    { type: "strong-primary", text: "24-month" },
                    {
                      type: "text",
                      text: " validation reports typically require submission to your DSO.",
                    },
                  ],
                  [
                    { type: "text", text: "The " },
                    { type: "strong-primary", text: "6-month" },
                    { type: "text", text: " and " },
                    { type: "strong-primary", text: "18-month" },
                    {
                      type: "text",
                      text: " reports are usually updates to your already signed Form I-983. You only need to submit a revised I-983 if you've had ",
                    },
                    {
                      type: "strong-primary",
                      text: "material changes",
                    },
                    {
                      type: "text",
                      text: " (as listed above) since your last report.",
                    },
                  ],
                  "Ensure your company address (Section 3) and site address (Section 5) match your actual work location when submitting.",
                ],
              },
            },
          ],
        },
        {
          type: "infoBlock",
          icon: "Lightbulb",
          variant: "default",
          content: [
            {
              type: "paragraph",
              text: [
                {
                  type: "text",
                  text: "To calculate your STEM OPT dates, including start and end, and to see how they fit into your overall F-1 journey, use our ",
                },
                {
                  type: "link",
                  href: "/tools?tab=stem",
                  text: "STEM OPT Calculator",
                },
                { type: "text", text: ' under the "Tools" section.' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "h1b-cap-gap",
      icon: "Briefcase",
      title: "H1B Cap-Gap Extension",
      description:
        "The Cap-Gap extension is designed to bridge the period between the expiration of your F-1 OPT/STEM OPT work authorization and the start of your H-1B status.",
      content: [
        {
          type: "list",
          items: [
            [
              { type: "strong", text: "Eligibility: " },
              {
                type: "text",
                text: "If your employer files an H-1B petition (with a change of status request) on your behalf during the H-1B lottery period (typically March-June), and your OPT/STEM OPT expires before October 1st (when H-1B status begins), the Cap-Gap extension automatically kicks in.",
              },
            ],
            [
              { type: "strong", text: "Purpose: " },
              {
                type: "text",
                text: "It extends your F-1 status and work authorization until September 30th of the year your H-1B begins, preventing a gap in your legal status and ability to work.",
              },
            ],
            {
              text: [
                {
                  type: "strong",
                  text: "Example Timeline (Illustrative Only)",
                },
              ],
              subList: {
                type: "list",
                items: [
                  [
                    { type: "strong-primary", text: "OPT/STEM OPT End Date: " },
                    { type: "text", text: "July 17, 2025" },
                  ],
                  [
                    {
                      type: "strong-primary",
                      text: "H-1B Lottery Application: ",
                    },
                    { type: "text", text: "March 2025" },
                  ],
                  [
                    {
                      type: "strong-primary",
                      text: "H-1B Petition Filed (if selected): ",
                    },
                    {
                      type: "text",
                      text: "April 2025 (e.g., April 1 - June 30 filing window)",
                    },
                  ],
                  [
                    { type: "strong-primary", text: "H1B Start Date: " },
                    { type: "text", text: "October 1, 2025" },
                  ],
                  [
                    { type: "strong-primary", text: "Cap-Gap Period: " },
                    {
                      type: "text",
                      text: "July 18, 2025 (day after OPT/STEM OPT ends) to September 30, 2025.",
                    },
                  ],
                ],
              },
            },
          ],
        },
        {
          type: "infoBlock",
          icon: "AlertCircle",
          variant: "warning",
          title: "Important",
          content: [
            {
              type: "paragraph",
              text: [
                {
                  type: "text",
                  text: "The Cap-Gap extension applies only if your H-1B petition is filed and accepted by USCIS with a change of status request. If you applied for STEM OPT previously, and then for H1B, the Cap-Gap would extend your STEM OPT (if it expires before Oct 1).",
                },
              ],
            },
          ],
        },
        {
          type: "infoBlock",
          icon: "Lightbulb",
          variant: "default",
          content: [
            {
              type: "paragraph",
              text: [
                {
                  type: "text",
                  text: "To calculate your H1B Cap-Gap dates and understand the bridge period between your STEM OPT and H1B status, use our ",
                },
                {
                  type: "link",
                  href: "/tools?tab=h1b",
                  text: "H1B Cap-Gap Calculator",
                },
                { type: "text", text: ' under the "Tools" section.' },
              ],
            },
          ],
        },
      ],
    },
  ],
};
