"use client";

import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  // Refs for the navigation links to enable smooth scrolling
  const waitlistRef = useRef<HTMLAnchorElement>(null);

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
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                }}
                transition={{ duration: 0.5 }}
                className="mx-auto max-w-3xl text-center"
              >
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight sm:text-4xl">
                  Real TN Experiences, From Real People
                </h2>
                <p className="text-md md:text-lg leading-8 text-muted-foreground max-w-xl mx-auto">
                  Browse a growing database of TN experiences, or share your
                  own––anonymously and effortlessly.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Call-to-action buttons */}
          <div className="flex flex-col gap-4 pt-4 sm:flex-row justify-center">
            <Button
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 transition-all shimmer-highlight shimmer-animate"
              asChild
            >
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSc4sbPhj8ZLcShXSsKTDxMBMuR-0d2GvfqrvsTyHM1MktJ7kQ/viewform?usp=header"
                target="_blank"
                ref={waitlistRef}
              >
                Share your experience
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="hover:bg-secondary/80 transition-all"
              asChild
            >
              <Link href="/experiences">Browse Submissions</Link>
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
        <div className="relative lg:max-w-7xl w-full">
          {/* Container with gradient border */}
          <div className="absolute inset-0 rounded-xl border opacity-100 [mask-image:linear-gradient(to_bottom,white,white_30%,transparent)]" />
          
          {/* Main content container */}
          <div className="relative rounded-xl bg-card/50 p-4 sm:p-8">
            {/* Gradient overlay for fade effect */}
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background via-background/95 to-transparent z-10 pointer-events-none rounded-b-xl" />
            
            {/* Table container with horizontal scroll */}
            <div className="w-full overflow-x-auto relative">
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
                  { nationality: "🇨🇦", status: "Approved" },
                  { nationality: "🇲🇽", status: "Approved" },
                  { nationality: "🇨🇦", status: "Denied" },
                  { nationality: "🇲🇽", status: "Approved" },
                  { nationality: "🇨🇦", status: "Approved" },
                  { nationality: "🇲🇽", status: "Denied" },
                  { nationality: "🇨🇦", status: "Approved" },
                  { nationality: "🇲🇽", status: "Approved" },
                  { nationality: "🇨🇦", status: "Approved" },
                  { nationality: "🇨🇦", status: "Approved" },
                ].map((row, i) => (
                  <tr key={i} className="bg-background/50">
                    <td className="px-4 py-3 text-center">
                      <span className="text-2xl">{row.nationality}</span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="h-4 w-20 bg-muted rounded" />
                    </td>
                    <td className="px-4 py-3">
                      <div className="h-4 w-28 bg-muted rounded" />
                    </td>
                    <td className="px-4 py-3">
                      <div className="h-4 w-40 bg-muted rounded" />
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                          {
                            Approved: "bg-green-100 text-green-800",
                            Denied: "bg-red-100 text-red-800",
                          }[row.status]
                        }`}
                      >
                        {row.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="h-4 w-24 bg-muted rounded" />
                    </td>
                    <td className="px-4 py-3">
                      <div className="h-4 w-8 bg-muted rounded mx-auto" />
                    </td>
                  </tr>
                ))}
              </tbody>
              </table>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
