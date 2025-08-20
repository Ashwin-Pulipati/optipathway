"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="w-full mt-24 p-10 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between space-y-8 md:space-y-0 text-sm text-muted-foreground md:gap-x-8">
        {/* Branding & Mission Statement */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1">
          <h3 className="text-xl font-bold font-serif text-foreground mb-2">
            F-1 Timeline
          </h3>
          <p className="text-sm max-w-xs">
            Your trusted assistant for navigating the complexities of F-1 visa
            timelines, from OPT to H1B Cap-Gap.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1">
          <h4 className="text-lg font-semibold font-serif text-foreground mb-3">
            Quick Links
          </h4>
          <nav className="flex flex-col space-y-2">
            <Link
              href="/tools"
              className="hover:text-primary transition-colors"
            >
              Tools
            </Link>
            <Link
              href="/about/initial-opt"
              className="hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/forms"
              className="hover:text-primary transition-colors"
            >
              Forms
            </Link>
            <Link href="/faq" className="hover:text-primary transition-colors">
              FAQ
            </Link>
          </nav>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1 md:self-stretch">
          <h4 className="text-lg font-semibold font-serif text-foreground mb-3">
            Ready to start?
          </h4>
          <Button asChild size="lg"className="inline-flex items-center gap-2 rounded-full px-16">
            <Link href="/tools?tab=timeline">
              Start Calculating
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Bottom Copyright Row */}
      <div className="mt-12 pt-6 border-t border-border text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} F-1 Timeline. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
