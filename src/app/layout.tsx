import { TimelineProvider } from "@/app/timeline-context";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import type { Metadata } from "next";
import { ThemeProvider as NextJSThemeProvider } from "next-themes";
import { Quicksand, Roboto, Volkhov } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";

const quickSand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const volkhov = Volkhov({
  variable: "--font-volkhov",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "OptiPathway",
    template: `%s - OptiPathway`,
  },
  description:
    "A comprehensive web application to help F-1 international students navigate the complexities of OPT, STEM OPT, and H1B timelines.",
  keywords: [
    "F-1 visa",
    "OPT",
    "STEM OPT",
    "H1B",
    "timeline calculator",
    "international students",
    "USCIS",
    "Next.js",
    "React",
    "TypeScript",
  ],
  authors: [
    { name: "Ashwin Pulipati", url: "https://github.com/Ashwin-Pulipati" },
  ],
  creator: "Ashwin Pulipati",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://optipathway.vercel.app/",
    title: "OptiPathway",
    description:
      "A comprehensive web application to help F-1 international students navigate the complexities of OPT, STEM OPT, and H1B timelines.",
    siteName: "OptiPathway",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true} className="dark">
      <body
        className={`${quickSand.variable} ${volkhov.variable} ${roboto.variable} antialiased`}
      >
        <NextJSThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <TooltipProvider>
            <TimelineProvider>
              <Navbar />
              <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
              <Footer />
            </TimelineProvider>
          </TooltipProvider>
        </NextJSThemeProvider>
      </body>
    </html>
  );
}
