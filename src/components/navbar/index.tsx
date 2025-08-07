"use client";
import React, { useState, useEffect } from "react";
import Header from "../header";
import NavItems from "./nav-items"; 

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-card text-card-foreground py-2 px-6 md:px-8 transition-all duration-300 ${
        isScrolled ? "border-b border-border shadow-sm" : ""
      }`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto w-full">
        <Header />
        <NavItems />
      </div>
    </header>
  );
};

export default Navbar;
