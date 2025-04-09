"use client";

import type React from "react";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
      waitlistEl.addEventListener("click", (e) => handleClick(e, waitlistRef));
    }

    if (featuresEl) {
      featuresEl.addEventListener("click", (e) => handleClick(e, featuresRef));
    }

    return () => {
      if (waitlistEl) {
        waitlistEl.removeEventListener("click", (e) =>
          handleClick(e, waitlistRef)
        );
      }
      if (featuresEl) {
        featuresEl.removeEventListener("click", (e) =>
          handleClick(e, featuresRef)
        );
      }
    };
  }, []);

  return (
    <section className="relative bg-background pb-16 pt-24 md:pb-24 md:pt-32 overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/20 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4"></div>

      <div className="container relative z-10">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              TN Visa Experience Tracker
            </h1>
            <p className="text-xl text-muted-foreground">
              Find US companies that have hired professionals on TN visas
            </p>
            <div className="flex flex-col gap-3 pt-4 sm:flex-row">
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
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[350px] w-full overflow-hidden rounded-lg border bg-card p-2 shadow-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300">
              <div className="relative h-full rounded-md border bg-card p-4">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Search Experiences</h3>
                  <span className="rounded-full bg-primary/10 px-2 py-1 text-xs text-primary">
                    Filter by criteria
                  </span>
                </div>
                <div className="mb-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search by company, job title, or location..."
                      className="w-full rounded-md border bg-secondary px-4 py-2 text-sm transition-all focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded-md border bg-secondary p-2 hover:border-primary/50 transition-all cursor-pointer">
                    <div className="text-xs text-muted-foreground">
                      All Categories
                    </div>
                  </div>
                  <div className="rounded-md border bg-secondary p-2 hover:border-primary/50 transition-all cursor-pointer">
                    <div className="text-xs text-muted-foreground">
                      All Statuses
                    </div>
                  </div>
                </div>
                <div className="mt-4 space-y-3">
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
                      className="rounded-md border bg-secondary p-3 hover:border-primary/30 transition-all cursor-pointer"
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
                        <span className="rounded-full bg-green-900 px-2 py-0.5 text-xs font-medium text-green-100">
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
          </div>
        </div>
      </div>
    </section>
  );
}
