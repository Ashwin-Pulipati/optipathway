import Image from "next/image";
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 text-primary hover:text-primary/90 transition-colors"
    >
      <Image src="/logo.png" alt="App Logo" width={36} height={36} />
      <h1 className="text-2xl font-bold font-display">OptiPathway</h1>{" "}
    </Link>
  );
};

export default Header;
