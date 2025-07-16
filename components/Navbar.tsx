"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="text-xl font-bold hover:text-primary transition-colors"
          >
            TN Connect
          </Link>
          <div className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
            Beta
          </div>
        </div>
        {/* Desktop Nav */}
        <nav className="hidden sm:flex items-center space-x-6">
          <Button
            className="bg-primary text-white hover:bg-primary/90 transition-all shimmer-highlight shimmer-animate shadow-md hover:shadow-lg hover:shadow-primary/30"
            asChild
          >
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSc4sbPhj8ZLcShXSsKTDxMBMuR-0d2GvfqrvsTyHM1MktJ7kQ/viewform?usp=header"
              // className="bg-primary text-white hover:bg-primary/90 transition-all shimmer-highlight shimmer-animate shadow-md hover:shadow-lg hover:shadow-primary/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              Share your experience
            </Link>
          </Button>
          <Link
            href="/#features"
            className="text-sm font-medium hover:text-primary transition-colors"
            // onClick={(e) => handleNavClick(e, "#features")}
          >
            Features
          </Link>
          <div className="relative flex">
            <span className="absolute -top-3 -left-4 bg-pink-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md animate-pulse">
              NEW
            </span>
            <Link
              href="/experiences"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Experiences
            </Link>
          </div>
        </nav>
        {/* Mobile Nav - Hamburger */}
        <div className="block sm:hidden">
          <div className="flex items-center justify-between">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open menu"
                  className="ml-2"
                >
                  <Menu className="size-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="p-0 pt-4 w-64">
                <div className="flex flex-col gap-6 h-full">
                  <SheetTitle asChild>
                    <div className="flex items-center justify-between px-6">
                      <Link
                        href="/"
                        className="text-xl font-bold"
                        onClick={() => setOpen(false)}
                      >
                        TN Connect
                      </Link>
                    </div>
                  </SheetTitle>
                  <nav className="flex flex-col gap-4 px-6">
                    <Button
                      className="bg-primary text-white hover:bg-primary/90 transition-all shimmer-highlight shimmer-animate shadow-md hover:shadow-lg hover:shadow-primary/30"
                      asChild
                    >
                      <Link
                        href="https://docs.google.com/forms/d/e/1FAIpQLSc4sbPhj8ZLcShXSsKTDxMBMuR-0d2GvfqrvsTyHM1MktJ7kQ/viewform?usp=header"
                        target="_blank"
                      >
                        Share your experience
                      </Link>
                    </Button>
                    <Link
                      href="/#features"
                      className="text-base font-medium hover:text-primary transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      Features
                    </Link>
                    <div className="flex items-center gap-2">
                      <Link
                        href="/experiences"
                        className="text-base font-medium hover:text-primary transition-colors"
                        onClick={() => setOpen(false)}
                      >
                        Experiences
                      </Link>
                      <span className="flex items-center justify-center bg-pink-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md animate-pulse">
                        NEW
                      </span>
                    </div>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
