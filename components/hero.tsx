"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  const waitlistRef = useRef<HTMLAnchorElement>(null);
  const featuresRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const handleClick = (
      e: MouseEvent,
      ref: React.RefObject<HTMLAnchorElement>
    ) => {
      e.preventDefault();
      const href = ref.current?.getAttribute("href");
      if (href) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          window.scrollTo({
            top:
              targetElement.getBoundingClientRect().top + window.scrollY - 100,
            behavior: "smooth",
          });
        }
      }
    };

    const waitlistEl = waitlistRef.current;
    const featuresEl = featuresRef.current;

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
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-background/80">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.8, 0.5, 0.8],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center space-y-6"
          >
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center gap-2"
              >
                <motion.h1
                  className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-primary/80"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  TN Connect
                </motion.h1>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    delay: 0.4,
                  }}
                  className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
                >
                  Beta
                </motion.div>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-2xl sm:text-3xl font-medium text-muted-foreground"
              >
                Connect with TN Visa Professionals
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg leading-8 text-muted-foreground"
            >
              Join our community to find companies that sponsor TN visas, share
              your experience, and connect with others navigating the TN visa
              process.
            </motion.p>
            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-primary text-white hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/50"
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

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[500px] w-full overflow-hidden rounded-2xl border bg-card p-4 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
              <div className="relative h-full rounded-xl border bg-card/50 backdrop-blur-sm p-6">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-xl font-semibold">Search Experiences</h3>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                    Filter by criteria
                  </span>
                </div>
                <div className="mb-6">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search by company, job title, or location..."
                      className="w-full rounded-lg border bg-secondary px-4 py-3 text-sm transition-all focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg border bg-secondary p-3 hover:border-primary/50 transition-all cursor-pointer">
                    <div className="text-sm text-muted-foreground">
                      All Categories
                    </div>
                  </div>
                  <div className="rounded-lg border bg-secondary p-3 hover:border-primary/50 transition-all cursor-pointer">
                    <div className="text-sm text-muted-foreground">
                      All Statuses
                    </div>
                  </div>
                </div>
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
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                      className="rounded-lg border bg-secondary/50 p-4 hover:border-primary/30 transition-all cursor-pointer backdrop-blur-sm"
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
                    </motion.div>
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
