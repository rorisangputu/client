/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { cn } from "@/lib/utils";
import Container from "@/components/container";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import MainNav from "@/components/MainNav";
import { useEffect, useState } from "react";

interface HeaderProps {
  userId?: string | null;
}
const Header = ({ userId }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "w-full z-50 transition",
        scrolled ? "fixed top-0 left-0 bg-white shadow-lg" : "bg-transparent"
      )}
    >
      <Container>
        <div className="relative px-4 xl:px-0 flex h-16 items-center">
          <Link
            href={"/"}
            className="uppercase flex gap-x-2 font-bold text-neutral-700 text-lg md:text-xl"
          >
            Foodied
          </Link>

          {/*MAIN NAV*/}
          <MainNav scrolled={scrolled} />

          {userId ? (
            <div className="ml-4 flex items-center space-x-4">
              <UserButton afterSwitchSessionUrl="/" />
            </div>
          ) : (
            <div className="flex items-center space-x-2 ml-4">
              <Link href={"/sign-in"}>
                <Button variant={"outline"}>Sign In</Button>
              </Link>
              <Link href={"/sign-up"}>
                <Button className="bg-green-400 text-black hover:bg-green-500">
                  Sign Up
                </Button>
              </Link>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Header;
