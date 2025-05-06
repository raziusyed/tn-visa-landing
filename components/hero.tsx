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
  ];

  // Effect hook to handle smooth scrolling functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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
              className="bg-primary text-white hover:bg-primary/90 transition-all shimmer-highlight shimmer-animate"
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
          <div className="mb-6 flex gap-4 items-center justify-between">
            <h3 className="text-2xl font-semibold">Latest Experiences</h3>
            <span className="rounded-full text-center bg-primary/10 px-4 py-3 text-sm text-primary">
              Real-time updates
            </span>
          </div>
          {/* Search input */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search by company, job title, port, or status..."
              className="w-full rounded-lg border bg-secondary px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              disabled
            />
          </div>
          {/* Filter mockups */}
          <div className="flex flex-col sm:flex-row justify-start gap-4 mb-4">
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
                className="rounded-md w-full border border-border bg-background px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
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
                className="rounded-md w-full border border-border bg-background px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
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
                    Nationality
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-muted-foreground">
                    TN Category
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-muted-foreground">
                    Job Title
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-muted-foreground">
                    Port of Entry
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-muted-foreground">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-muted-foreground">
                    Crossed
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-muted-foreground">
                    Processing Time
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  {
                    nationality: "🇨🇦",
                    tnCategory: "Engineer",
                    jobTitle: "Software Engineer",
                    portOfEntry: "Toronto Pearson Intl Airport",
                    status: "Approved",
                    crossed: "2025-04-15",
                    processingTime: 1,
                  },
                  {
                    nationality: "🇲🇽",
                    tnCategory: "Analyst",
                    jobTitle: "Data Analyst",
                    portOfEntry: "Laredo Border Crossing",
                    status: "Approved",
                    crossed: "2025-04-14",
                    processingTime: 2,
                  },
                  {
                    nationality: "🇨🇦",
                    tnCategory: "Consultant",
                    jobTitle: "Management Consultant",
                    portOfEntry: "San Ysidro Border",
                    status: "Pending",
                    crossed: "2025-04-13",
                    processingTime: 3,
                  },
                  {
                    nationality: "🇨🇦",
                    tnCategory: "Developer",
                    jobTitle: "Software Developer",
                    portOfEntry: "Vancouver Intl Airport",
                    status: "Approved",
                    crossed: "2025-04-12",
                    processingTime: 1,
                  },
                  {
                    nationality: "🇲🇽",
                    tnCategory: "Engineer",
                    jobTitle: "Civil Engineer",
                    portOfEntry: "Buffalo Niagara Intl Airport",
                    status: "Approved",
                    crossed: "2025-04-11",
                    processingTime: 2,
                  },
                  {
                    nationality: "🇨🇦",
                    tnCategory: "Accountant",
                    jobTitle: "Accountant",
                    portOfEntry: "JFK Intl Airport",
                    entryExperience: "👍",
                    status: "Approved",
                    crossed: "2025-04-10",
                    processingTime: 1,
                  },
                  {
                    nationality: "🇲🇽",
                    tnCategory: "Designer",
                    jobTitle: "Graphic Designer",
                    portOfEntry: "Miami Intl Airport",
                    status: "Pending",
                    crossed: "2025-04-09",
                    processingTime: 1,
                  },
                  {
                    nationality: "🇨🇦",
                    tnCategory: "Scientist",
                    jobTitle: "Research Scientist",
                    portOfEntry: "Seattle Tacoma Intl Airport",
                    status: "Approved",
                    crossed: "2025-04-08",
                    processingTime: 2,
                  },
                  {
                    nationality: "🇲🇽",
                    tnCategory: "Analyst",
                    jobTitle: "Financial Analyst",
                    portOfEntry: "Detroit Windsor Tunnel",
                    status: "Denied",
                    crossed: "2025-04-07",
                    processingTime: 2,
                  },
                  {
                    nationality: "🇨🇦",
                    tnCategory: "Engineer",
                    jobTitle: "Mechanical Engineer",
                    portOfEntry: "Blaine Peace Arch",
                    status: "Approved",
                    crossed: "2025-04-06",
                    processingTime: 1,
                  },
                ].map((exp, i) => (
                  <tr key={i} className="hover:bg-muted/40 transition-colors">
                    <td className="px-4 py-3 text-center align-middle">
                      <span className="flex items-center justify-center text-2xl">
                        {exp.nationality}
                      </span>
                    </td>
                    <td className="px-4 py-3">{exp.tnCategory}</td>
                    <td className="px-4 py-3">{exp.jobTitle}</td>
                    <td className="px-4 py-3">{exp.portOfEntry}</td>

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
                    <td className="px-4 py-3 text-center align-middle">
                      {exp.crossed}
                    </td>
                    <td className="px-4 py-3 text-center align-middle">
                      {exp.processingTime !== null ? exp.processingTime : "-"}
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
