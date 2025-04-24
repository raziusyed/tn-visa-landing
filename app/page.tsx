"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Hero from "@/components/hero";
import Features from "@/components/features";
import WaitlistForm from "@/components/waitlist-form";
import WaitlistSection from "@/components/waitlist-section";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col dark bg-background text-foreground">
      <main className="flex-1">
        <Hero />
        <Features />
        <WaitlistSection />
      </main>
    </div>
  );
}
