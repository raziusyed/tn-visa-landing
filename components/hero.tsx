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
    /* Hero section with gradient background and animated elements */
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-background py-12">
      {/* Main content container */}
      <div className="container max-w-3xl mx-auto flex flex-col items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center space-y-6"
        >
          <div className="space-y-4">
            <div className="flex flex-col items-center gap-2">
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
          <div className="flex flex-col gap-4 pt-4 sm:flex-row justify-center">
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
      </div>

      {/* Table/mockup container is now outside the hero container and expands responsively */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full mt-12 flex justify-center px-4 sm:px-8"
      >
        <div className="relative lg:max-w-7xl w-full rounded-xl border bg-card/50 p-4 sm:p-8">
          {/* Card header */}
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-2xl font-semibold">Latest Experiences</h3>
            <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
              Real-time updates
            </span>
          </div>
          {/* Search input */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search by company, job title, port, or location..."
              className="w-full rounded-lg border bg-secondary px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          {/* Filter mockups */}
          <div className="flex flex-row justify-start gap-4 mb-4">
            {/* Category filter mockup */}
            <div className="inline-flex items-center gap-2 rounded-md border border-border bg-muted px-3 py-2 shadow-sm">
              <label
                htmlFor="category-filter"
                className="text-sm font-medium text-muted-foreground"
              >
                Category:
              </label>
              <select
                id="category-filter"
                className="rounded-md border border-border bg-background px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                disabled
              >
                <option>All</option>
                <option>Engineer</option>
                <option>Analyst</option>
                <option>Consultant</option>
              </select>
            </div>
            {/* Status filter mockup */}
            <div className="inline-flex items-center gap-2 rounded-md border border-border bg-muted px-3 py-2 shadow-sm">
              <label
                htmlFor="status-filter"
                className="text-sm font-medium text-muted-foreground"
              >
                Status:
              </label>
              <select
                id="status-filter"
                className="rounded-md border border-border bg-background px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                disabled
              >
                <option>All</option>
                <option>Approved</option>
                <option>Pending</option>
                <option>Denied</option>
              </select>
            </div>
          </div>
          {/* Table container with horizontal scroll */}
          <div className="w-full overflow-x-auto">
            <table className="min-w-full text-sm bg-card rounded-xl shadow-sm">
              <thead>
                <tr className="bg-muted/60">
                  <th className="px-4 py-3 text-left font-semibold text-muted-foreground">
                    Job Title
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-muted-foreground">
                    Company
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-muted-foreground">
                    Port of Entry
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-muted-foreground">
                    Location
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-muted-foreground">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-muted-foreground">
                    Time Ago
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  {
                    title: "Computer Systems Analyst",
                    company: "Microsoft",
                    port: "Toronto Pearson Intl Airport",
                    location: "Toronto, ON",
                    status: "Approved",
                    timeAgo: "1 week ago",
                  },
                  {
                    title: "Mechanical Engineer",
                    company: "Tesla",
                    port: "Laredo Border Crossing",
                    location: "Laredo, TX",
                    status: "Approved",
                    timeAgo: "3 days ago",
                  },
                  {
                    title: "Management Consultant",
                    company: "McKinsey & Company",
                    port: "San Ysidro Border",
                    location: "San Diego, CA",
                    status: "Approved",
                    timeAgo: "2 weeks ago",
                  },
                  {
                    title: "Software Developer",
                    company: "Shopify",
                    port: "Vancouver Intl Airport",
                    location: "Vancouver, BC",
                    status: "Approved",
                    timeAgo: "5 days ago",
                  },
                  {
                    title: "Civil Engineer",
                    company: "AECOM",
                    port: "Buffalo Niagara Intl Airport",
                    location: "Buffalo, NY",
                    status: "Pending",
                    timeAgo: "2 days ago",
                  },
                  {
                    title: "Data Analyst",
                    company: "Google",
                    port: "Detroit Windsor Tunnel",
                    location: "Detroit, MI",
                    status: "Denied",
                    timeAgo: "4 days ago",
                  },
                  {
                    title: "Accountant",
                    company: "KPMG",
                    port: "Blaine Peace Arch",
                    location: "Blaine, WA",
                    status: "Approved",
                    timeAgo: "3 weeks ago",
                  },
                  {
                    title: "Graphic Designer",
                    company: "Adobe",
                    port: "Miami Intl Airport",
                    location: "Miami, FL",
                    status: "Approved",
                    timeAgo: "1 day ago",
                  },
                  {
                    title: "Financial Analyst",
                    company: "Goldman Sachs",
                    port: "JFK Intl Airport",
                    location: "New York, NY",
                    status: "Pending",
                    timeAgo: "6 hours ago",
                  },
                  {
                    title: "Research Scientist",
                    company: "Pfizer",
                    port: "Seattle Tacoma Intl Airport",
                    location: "Seattle, WA",
                    status: "Approved",
                    timeAgo: "2 days ago",
                  },
                ].map((exp, i) => (
                  <tr key={i} className="hover:bg-muted/40 transition-colors">
                    <td className="px-4 py-3 font-medium">{exp.title}</td>
                    <td className="px-4 py-3">{exp.company}</td>
                    <td className="px-4 py-3">{exp.port}</td>
                    <td className="px-4 py-3">{exp.location}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                          exp.status === "Approved"
                            ? "bg-green-100 text-green-800"
                            : exp.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {exp.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs text-muted-foreground">
                      {exp.timeAgo}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
