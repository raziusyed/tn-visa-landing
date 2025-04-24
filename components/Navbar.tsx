"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useCallback } from "react";

export default function Navbar() {
  const router = useRouter();

  // Handles smooth scrolling with sticky offset for in-page anchors
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
      // Only handle if it's an in-page anchor
      if (window.location.pathname === "/" && hash.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(hash);
        if (target) {
          const yOffset = 100; // Height of sticky header
          const y =
            target.getBoundingClientRect().top + window.scrollY - yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
          // Optionally remove hash from URL for a cleaner look
          window.history.replaceState(null, "", window.location.pathname);
        }
      } else if (hash.startsWith("/#")) {
        // Navigating to home with anchor from another page
        e.preventDefault();
        router.push(`/${hash}`);
        // The scroll will be handled after navigation by browser
      }
      // Otherwise, let default behavior happen
    },
    [router]
  );

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
        </div>
        <nav className="flex items-center space-x-6">
          <a
            href="/#features"
            className="text-sm font-medium hover:text-primary transition-colors"
            onClick={(e) => handleNavClick(e, "#features")}
          >
            Features
          </a>
          <Button
            className="bg-primary text-white hover:bg-primary/90 transition-all shimmer-highlight shimmer-animate shadow-md hover:shadow-lg hover:shadow-primary/30"
            asChild
          >
            <a
              href="/#waitlist"
              onClick={(e) => handleNavClick(e, "#waitlist")}
            >
              Join waitlist
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
