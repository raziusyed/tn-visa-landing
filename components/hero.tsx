"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  // Refs for the navigation links to enable smooth scrolling
  const waitlistRef = useRef<HTMLAnchorElement>(null);
  const featuresRef = useRef<HTMLAnchorElement>(null);
  const [currentWord, setCurrentWord] = useState(0);

  const words = [
    "Share Your TN Journey",
    "Learn From Real Experiences",
    "Get the Latest Updates",
    "Make Informed Decisions",
    "Join a Trusted Community",
  ];

  // Effect hook to handle smooth scrolling functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Function to handle click events and perform smooth scrolling
    const handleClick = (
      e: MouseEvent,
      ref: React.RefObject<HTMLAnchorElement>
    ) => {
      // Prevent default anchor behavior
      e.preventDefault();

      // Get the target section's ID from the href attribute
      const href = ref.current?.getAttribute("href");
      if (href) {
        // Find the target element in the DOM
        const targetElement = document.querySelector(href);
        if (targetElement) {
          // Smoothly scroll to the target element with a 100px offset from the top
          window.scrollTo({
            top:
              targetElement.getBoundingClientRect().top + window.scrollY - 100,
            behavior: "smooth",
          });
        }
      }
    };

    // Get references to the DOM elements
    const waitlistEl = waitlistRef.current;
    const featuresEl = featuresRef.current;

    // Add click event listeners to both navigation links
    if (waitlistEl) {
      waitlistEl.addEventListener("click", (e) =>
        handleClick(e, waitlistRef as React.RefObject<HTMLAnchorElement>)
      );
    }

    if (featuresEl) {
      featuresEl.addEventListener("click", (e) =>
        handleClick(e, featuresRef as React.RefObject<HTMLAnchorElement>)
      );
    }

    // Cleanup function to remove event listeners when component unmounts
    return () => {
      if (waitlistEl) {
        waitlistEl.removeEventListener("click", (e) =>
          handleClick(e, waitlistRef as React.RefObject<HTMLAnchorElement>)
        );
      }
      if (featuresEl) {
        featuresEl.removeEventListener("click", (e) =>
          handleClick(e, featuresRef as React.RefObject<HTMLAnchorElement>)
        );
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    // Hero section with gradient background and animated elements
    <section className="relative min-h-screen flex items-center justify-center bg-background">
      {/* Main content container */}
      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left column - Main heading and call-to-action */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">
                  TN Connect
                </h1>
                <div className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                  Beta
                </div>
              </div>
              <div className="h-[40px] sm:h-[48px] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.h2
                    key={currentWord}
                    initial={{ y: -40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 40, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-2xl sm:text-3xl font-medium bg-gradient-to-r from-primary to-primary/50 text-transparent bg-clip-text"
                  >
                    {words[currentWord]}
                  </motion.h2>
                </AnimatePresence>
              </div>
            </div>
            <p className="text-lg leading-8 text-muted-foreground">
              Join our community to anonymously share your TN visa journey and
              stay updated. Your insights help others navigate the process with
              confidence.
            </p>
            {/* Call-to-action buttons */}
            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-primary text-white hover:bg-primary/90 transition-all"
                asChild
              >
                <Link href="#waitlist" ref={waitlistRef}>
                  Join waitlist
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="hover:bg-secondary/80 transition-all"
                asChild
              >
                <Link href="#features" ref={featuresRef}>
                  Learn more
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Right column - Interactive demo card */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[500px] w-full overflow-hidden rounded-2xl border bg-card p-4">
              <div className="relative h-full rounded-xl border bg-card/50 p-6">
                {/* Card header */}
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-xl font-semibold">Latest Experiences</h3>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                    Real-time updates
                  </span>
                </div>
                {/* Search input */}
                <div className="mb-6">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search by company, job title, or location..."
                      className="w-full rounded-lg border bg-secondary px-4 py-3 text-sm"
                    />
                  </div>
                </div>
                {/* Filter options */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg border bg-secondary p-3">
                    <div className="text-sm text-muted-foreground">
                      All Categories
                    </div>
                  </div>
                  <div className="rounded-lg border bg-secondary p-3">
                    <div className="text-sm text-muted-foreground">
                      All Statuses
                    </div>
                  </div>
                </div>
                {/* Example search results */}
                <div className="mt-6 space-y-4">
                  {[
                    {
                      title: "Computer Systems Analyst",
                      company: "Microsoft",
                      status: "Approved",
                      timeAgo: "1 week ago",
                      processingTime: "3 days",
                    },
                    {
                      title: "Mechanical Engineer",
                      company: "Tesla",
                      status: "Approved",
                      timeAgo: "3 days ago",
                      processingTime: "1 day",
                    },
                    {
                      title: "Management Consultant",
                      company: "McKinsey & Company",
                      status: "Approved",
                      timeAgo: "2 weeks ago",
                      processingTime: "4 days",
                    },
                  ].map((exp, i) => (
                    <div
                      key={i}
                      className="rounded-lg border bg-secondary/50 p-4"
                    >
                      <div className="flex justify-between">
                        <div className="font-medium">{exp.title}</div>
                        <div className="text-sm text-muted-foreground">
                          {exp.timeAgo}
                        </div>
                      </div>
                      <div className="mt-1 text-sm">
                        <span className="font-medium">Company:</span>{" "}
                        {exp.company}
                      </div>
                      <div className="mt-1 flex items-center gap-2">
                        <span className="rounded-full bg-green-900/20 px-2 py-0.5 text-xs font-medium text-green-100">
                          {exp.status}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          Processing time: {exp.processingTime}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
