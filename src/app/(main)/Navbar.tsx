import SearchField from "@/components/SearchField";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-10 border-[1px] bg-card shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-around gap-5 px-5 py-3">
        <Link href="/" className="text-2xl font-bold text-primary">
          Deposits
        </Link>
        {/* 
            We haven't written the function to search the deposits. 
            so go to searchfield and write the "onsubmit" function.
        */}
        <SearchField />
        <UserButton />
      </div>
    </header>
  );
};

export default Navbar;
