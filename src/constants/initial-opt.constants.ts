// This file is 100% pure data. No JSX, no imports.
// This is the single source of truth. All content updates happen here.

import { PageContent } from "@/types/content.types";

export const initialOptContent: PageContent = {
  header: {
    title: "Initial OPT: Your First Step to U.S. Work Authorization",
    subtitle:
      "Navigating the Optional Practical Training (OPT) process is a crucial step for F-1 students seeking work experience in the U.S. This guide provides essential information and best practices for your Initial OPT journey.",
  },
  sections: [
    {
      id: "purpose",
      icon: "Info",
      title: "Purpose & Validity",
      description:
        "The primary purpose of Optional Practical Training (OPT) is to provide F-1 students with an opportunity to gain practical experience directly related to their major area of study.",
      content: [
        {
          type: "list",
          items: [
            [
              { type: "strong", text: "Work Authorization" },
              {
                type: "text",
                text: ": Successfully applying for OPT results in an Employment Authorization Document (EAD Card), which is your official work permit in the U.S.",
              },
            ],
            [
              { type: "strong", text: "EAD Card Validity" },
              {
                type: "text",
                text: ": The EAD Card for Initial OPT is typically valid for ",
              },
              { type: "strong-primary", text: "12 months" },
              { type: "text", text: "." },
            ],
          ],
        },
      ],
    },
    {
      id: "timeline",
      icon: "CalendarDays",
      title: "Key Dates & Grace Period",
      description:
        "Understanding your timeline is critical to a successful OPT application.",
      content: [
        {
          type: "list",
          items: [
            {
              text: [
                { type: "strong", text: "Application Window" },
                { type: "text", text: ": You can apply for OPT up to " },
                { type: "strong-primary", text: "90 days before" },
                {
                  type: "text",
                  text: " your I-20 program end date (graduation date) and ",
                },
                { type: "strong-primary", text: "up to 60 days after" },
                { type: "text", text: " your program end date." },
              ],
            },
            {
              text: [
                { type: "strong", text: "60-Day Grace Period" },
                {
                  type: "text",
                  text: ": This period begins immediately after your I-20 program end date. During this time, you can remain in the U.S., but you are generally ",
                },
                { type: "strong-destructive", text: "not authorized to work" },
                {
                  type: "text",
                  text: " unless your OPT application is pending or approved. You must file your OPT application before this 60-day grace period ends.",
                },
              ],
              subList: {
                type: "list",
                items: [
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
                          { type: "text", text: "If your " },
                          {
                            type: "strong-primary",
                            text: "Graduation Date (I-20 Program End Date)",
                          },
                          { type: "text", text: " is " },
                          { type: "strong-primary", text: "May 31, 2024" },
                          { type: "text", text: "." },
                        ],
                        [
                          { type: "text", text: "Your " },
                          {
                            type: "strong-primary",
                            text: "Application Window",
                          },
                          { type: "text", text: " is approximately " },
                          {
                            type: "strong-primary",
                            text: "March 1, 2024, to July 29, 2024",
                          },
                          { type: "text", text: "." },
                        ],
                        [
                          { type: "text", text: "Your " },
                          {
                            type: "strong-primary",
                            text: "60-Day Grace Period",
                          },
                          { type: "text", text: " is " },
                          {
                            type: "strong-primary",
                            text: "May 31, 2024, to July 29, 2024",
                          },
                          { type: "text", text: "." },
                        ],
                      ],
                    },
                  },
                ],
              },
            },
            {
              text: [
                { type: "strong", text: "Choosing Your OPT Start Date" },
                {
                  type: "text",
                  text: ": This is a personal decision. You can choose an OPT start date anywhere within your 60-day grace period. It's advisable to choose a weekday, avoiding weekends or holidays, to ensure smooth processing.",
                },
              ],
              subList: {
                type: "list",
                items: [
                  [
                    { type: "strong", text: "Example" },
                    { type: "text", text: ": If your desired " },
                    { type: "strong-primary", text: "OPT Start Date" },
                    { type: "text", text: " is " },
                    { type: "strong-primary", text: "July 10, 2024" },
                    { type: "text", text: ", your " },
                    { type: "strong-primary", text: "OPT End Date" },
                    { type: "text", text: " will be " },
                    { type: "strong-primary", text: "July 9, 2025" },
                    { type: "text", text: " (1 year minus 1 day)." },
                  ],
                  {
                    type: "infoBlock",
                    variant: "default",
                    icon: "Lightbulb",
                    content: [
                      {
                        type: "paragraph",
                        text: [
                          {
                            type: "text",
                            text: "For precise calculations and a visual representation of these dates, use our ",
                          },
                          {
                            type: "link",
                            text: "Graduation Timeline Calculator",
                            href: "/tools?tab=timeline",
                          },
                          { type: "text", text: " and " },
                          {
                            type: "link",
                            text: "Initial OPT Calculator",
                            href: "/tools?tab=ead",
                          },
                          { type: "text", text: ' under the "Tools" section.' },
                        ],
                      },
                    ],
                  },
                ],
              },
            },
            {
              type: "infoBlock",
              variant: "warning",
              icon: "AlertCircle",
              title: "Friendly Reminder",
              content: [
                {
                  type: "paragraph",
                  text: [
                    {
                      type: "text",
                      text: "Be mindful of holidays (like Spring Break or year-end holidays) as they might impact university DSO availability for I-20 endorsement or USCIS processing times. Plan accordingly!",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "documents",
      icon: "FileText",
      title: "Required Documents for Form I-765",
      description:
        "When preparing your OPT application, you must provide clear digital copies of your documents. Ensure that all scans or photos are in color and legible, without any filters or alterations. Allowed formats typically include PDF, JPEG, TIF, or TIFF.",
      content: [
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
                  text: ". Expand the “General Requirements” and “Student Seeking Post-Completion Optional Practical Training (c)(3)(B)” sections to view the required documents.",
                },
              ],
            },
          ],
        },
        {
          type: "paragraph",
          text: [
            { type: "strong", text: "Commonly required documents include:" },
          ],
        },
        {
          type: "list",
          items: [
            [
              {
                type: "strong",
                text: "Signed Form I-20 with OPT Recommendation:",
              },
              {
                type: "text",
                text: " A copy of your I-20 endorsed for OPT by your DSO. It's recommended to sign in ",
              },
              { type: "strong-primary", text: "blue ink." },
            ],
            [
              { type: "strong", text: "Most Recent Passport Size Photograph:" },
              {
                type: "text",
                text: " Make sure it's not more than six months old. You must meet U.S. Department of State specifications. Check out the ",
              },
              { type: "link", text: "Photo Tool", href: "/photo-tool" },
              { type: "text", text: " for details." },
            ],
            [
              { type: "strong", text: "Form I-94 Arrival/Departure Record:" },
              {
                type: "text",
                text: " Your most recent I-94, which you can retrieve from the ",
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
              { type: "strong", text: "Valid Passport & F-1 Visa:" },
              {
                type: "text",
                text: " Copies of your passport's biographical page (front and back) and your F-1 visa page.",
              },
            ],
            [
              { type: "strong", text: "Previous EAD Cards (if applicable):" },
              {
                type: "text",
                text: " Copies of any previously issued Employment Authorization Documents.",
              },
            ],
          ],
        },
      ],
    },
    {
      id: "process",
      icon: "Computer",
      title: "Application Process: USCIS Portal (Form I-765)",
      description:
        "The most common way to apply for OPT is online through the USCIS portal.",
      content: [
        {
          type: "ordered-list",
          items: [
            {
              text: [
                { type: "strong", text: "Access the USCIS Portal" },
                { type: "text", text: ": Go to " },
                {
                  type: "link",
                  text: "My USCIS",
                  href: "https://my.uscis.gov/",
                  external: true,
                },
                { type: "text", text: "." },
              ],
            },
            {
              text: [{ type: "strong", text: "Create a USCIS Account" }],
              nestedContent: [
                {
                  type: "paragraph",
                  text: [
                    {
                      type: "text",
                      text: "It is recommended to use your university email (.edu) to create your account, but you ",
                    },
                    { type: "strong-destructive", text: "MUST" },
                    {
                      type: "text",
                      text: " update it to a personal email before you lose access after graduation.",
                    },
                  ],
                },
                {
                  type: "infoBlock",
                  variant: "default",
                  icon: "Info",
                  title: "Why this matters:",
                  content: [
                    {
                      type: "list",
                      items: [
                        "Your USCIS account is permanent and will be used for all future applications (STEM OPT, H-1B, etc.).",
                        "Using a personal email you'll always have access to (like Gmail) ensures you never miss a critical case update.",
                      ],
                    },
                  ],
                },
              ],
            },
            {
              text: [{ type: "strong", text: "Fill in Form I-765 (Online)" }],
              subList: {
                type: "list",
                items: [
                  "Start filling out the I-765 form. Many fields may autofill based on your profile.",
                  [
                    {
                      type: "strong-destructive",
                      text: "Do NOT sign or submit yet.",
                    },
                    {
                      type: "text",
                      text: " Your responses are automatically saved as a draft.",
                    },
                  ],
                  'If you make any changes and save your responses on a different day, the "Last updated" and "Expires" dates for your draft will adjust accordingly.',
                ],
              },
            },
            {
              text: [
                { type: "strong", text: "Download Draft" },
                {
                  type: "text",
                  text: ': Before final submission, download the unsigned filled I-765 form from the "Review and Submit" section. This is for your records.',
                },
              ],
              subList: {
                type: "list",
                items: [
                  [
                    { type: "strong-destructive", text: "Important" },
                    {
                      type: "text",
                      text: ": USCIS will delete your application if there is no activity for 30 days.",
                    },
                  ],
                ],
              },
            },
            {
              text: [{ type: "strong", text: "OPT Fee Payment" }],
              subList: {
                type: "list",
                items: [
                  {
                    text: [
                      { type: "strong", text: "Payment Method" },
                      {
                        type: "text",
                        text: ": Ensure the payment is made from a bank account ",
                      },
                      {
                        type: "strong-primary",
                        text: "registered exclusively under your name",
                      },
                      {
                        type: "text",
                        text: ". Avoid using third-party accounts.",
                      },
                    ],
                  },
                  {
                    type: "infoBlock",
                    variant: "destructive",
                    icon: "AlertTriangle",
                    title: "Verify Application Fees Before Submitting",
                    content: [
                      {
                        type: "paragraph",
                        text: [
                          {
                            type: "text",
                            text: "USCIS fees change periodically. To avoid rejection, you ",
                          },
                          { type: "strong-destructive", text: "MUST" },
                          {
                            type: "text",
                            text: " verify the current filing fee on the official ",
                          },
                          {
                            type: "link",
                            text: "USCIS Fee Schedule page",
                            href: "https://www.uscis.gov/g-1055",
                            external: true,
                          },
                          { type: "text", text: "." },
                        ],
                      },
                      {
                        type: "paragraph",
                        text: [
                          {
                            type: "text",
                            text: "↳ Look for the “Downloads” section to find the ",
                          },
                          {
                            type: "strong-primary",
                            text: "“Fee Schedule link”",
                          },
                          { type: "text", text: "." },
                        ],
                      },
                    ],
                  },
                ],
              },
            },
          ],
        },
      ],
    },
    {
      id: "processing",
      icon: "Clock",
      title: "A Note on Processing Times",
      description: null,
      content: [
        {
          type: "infoBlock",
          variant: "default",
          icon: "Info",
          title: "How Processing Times Can Affect Your OPT Start Date",
          content: [
            {
              type: "paragraph",
              text: [
                {
                  type: "text",
                  text: "USCIS processing times for Form I-765 can vary, often taking several weeks to months. It is crucial to apply as early as possible.",
                },
              ],
            },
            {
              type: "list",
              items: [
                "If USCIS approves your application *after* your requested start date has passed, they will set your OPT start date to the date of the approval itself. Your OPT period will still last for 12 months from that new start date.",
                [
                  {
                    type: "text",
                    text: "You can check official estimates on the ",
                  },
                  {
                    type: "link",
                    text: "USCIS Processing Times",
                    href: "https://egov.uscis.gov/processing-times/",
                    external: true,
                  },
                  { type: "text", text: "." },
                ],
              ],
            },
            {
              type: "infoBlock",
              variant: "default",
              icon: "Info",
              title: "Example Scenario:",
              content: [
                {
                  type: "list",
                  items: [
                    [
                      {
                        type: "text",
                        text: "You request an OPT start date of ",
                      },
                      { type: "strong-primary", text: "July 10, 2025" },
                      { type: "text", text: "." },
                    ],
                    [
                      {
                        type: "text",
                        text: "Due to processing delays, USCIS approves your application on ",
                      },
                      { type: "strong-primary", text: "August 13, 2025" },
                      { type: "text", text: "." },
                    ],
                    [
                      { type: "strong", text: "Result:" },
                      {
                        type: "text",
                        text: " Your new EAD card will show a start date of ",
                      },
                      { type: "strong-primary", text: "August 13, 2025" },
                      { type: "text", text: ", and an end date of " },
                      { type: "strong-primary", text: "August 12, 2026" },
                      { type: "text", text: "." },
                    ],
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "post-approval",
      icon: "CheckCircle",
      title: "After Receiving Your EAD Card",
      description:
        "Congratulations on receiving your EAD Card! Here are some crucial next steps:",
      content: [
        {
          type: "list",
          items: [
            {
              text: [{ type: "strong", text: "SEVP Portal" }],
              subList: {
                type: "list",
                items: [
                  [
                    {
                      type: "text",
                      text: "Create your SEVP Portal account using your ",
                    },
                    { type: "strong-primary", text: "university email" },
                    { type: "text", text: "." },
                  ],
                  "This portal is managed by SEVP (Student and Exchange Visitor Program), the agency that oversees your SEVIS record. You'll use it to report employment updates.",
                ],
              },
            },
          ],
        },
      ],
    },
    {
      id: "reporting",
      icon: "Users",
      title: "Reporting Obligations",
      description:
        "Maintaining your F-1 status requires diligent reporting. Be aware of who to notify and when:",
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
                  "Change of U.S. mailing or physical address (via Form AR-11 or SEVP Portal).",
                  "Change in immigration status (e.g., F-1 to H-1B).",
                  "Lost, stolen, damaged, or erroneous EAD card (to request a replacement/correction).",
                ],
              },
            },
            {
              text: [
                {
                  type: "strong",
                  text: "Notify Your DSO (University) via your university's designated system or SEVP Portal (within 10 days)",
                },
              ],
              subList: {
                type: "list",
                items: [
                  "Moving to a new address (if different from what's in SEVIS).",
                  "Starting a new OPT job.",
                  "Ending your current OPT job.",
                  "Switching employers.",
                  "Any changes related to maintaining your SEVP record.",
                ],
              },
            },
            {
              type: "infoBlock",
              variant: "warning",
              icon: "AlertCircle",
              title: "Friendly Reminder",
              content: [
                {
                  type: "paragraph",
                  text: [
                    {
                      type: "text",
                      text: "Your university's Designated School Official (DSO) is your primary contact for employment-related updates and questions. When in doubt, ",
                    },
                    { type: "strong-primary", text: "contact your DSO" },
                    { type: "text", text: "." },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
