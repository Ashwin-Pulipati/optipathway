"use client";

import { Button } from "@/components/ui/button";
import { navItems } from "./constants/navbar.constants";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import ThemeToggle from "./theme-toggle";

const MobileNavItems = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  // Close the menu after navigation
  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Reset accordion when menu closes
  useEffect(() => {
    if (!isMenuOpen) {
      setOpenAccordion(null);
    }
  }, [isMenuOpen]);

  const toggleAccordion = (itemName: string) => {
    setOpenAccordion(openAccordion === itemName ? null : itemName);
  };

  return (
    <div className="lg:hidden" ref={menuRef}>
      <Button
        variant="secondary"
        size="icon"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full right-3 mt-2 z-50 w-64 origin-top-right rounded-xl bg-card border border-border shadow-lg"
          >
            <nav className="p-2 max-h-[70vh] overflow-y-auto">
              <ul className="space-y-1">
                {navItems.map((item) => {
                  const isLinkActive = !item.children && pathname === item.path;
                  const isAccordionActive =
                    item.children?.some((child) =>
                      pathname.startsWith(child.path)
                    ) ?? false;

                  return (
                    <li key={item.name}>
                      {item.children ? (
                        <>
                          <button
                            onClick={() => toggleAccordion(item.name)}
                            className={cn(
                              "flex items-center justify-between w-full p-3 rounded-md text-card-foreground font-semibold text-left hover:bg-muted",
                              isAccordionActive && "bg-muted"
                            )}
                          >
                            <span>{item.name}</span>
                            <ChevronDown
                              size={18}
                              className={cn(
                                "transition-transform duration-200",
                                openAccordion === item.name && "rotate-180"
                              )}
                            />
                          </button>
                          <AnimatePresence>
                            {openAccordion === item.name && (
                              <motion.ul
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="pl-4 mt-1 space-y-1 overflow-hidden"
                              >
                                {item.children.map((child) => (
                                  <li key={child.name}>
                                    <Link
                                      href={child.path}
                                      className={cn(
                                        "block w-full p-2.5 rounded-md text-card-foreground hover:bg-muted text-sm",
                                        pathname.startsWith(child.path) &&
                                          "bg-primary text-primary-foreground hover:bg-primary/90"
                                      )}
                                    >
                                      {child.name}
                                    </Link>
                                  </li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={item.path}
                          className={cn(
                            "block w-full p-2 rounded-md text-card-foreground font-semibold hover:bg-muted",
                            isLinkActive &&
                              "bg-primary text-primary-foreground hover:bg-primary/90"
                          )}
                        >
                          {item.name}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
              <div className="p-2 mt-2 border-t border-border">
                <ThemeToggle />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNavItems;
