"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Hero from "@/components/hero"
import Features from "@/components/features"
import WaitlistForm from "@/components/waitlist-form"

export default function LandingPage() {
  const featuresRef = useRef<HTMLAnchorElement>(null)
  const waitlistNavRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const handleScroll = (e: MouseEvent, href: string) => {
      e.preventDefault()
      const targetElement = document.querySelector(href)
      if (targetElement) {
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
          behavior: "smooth",
        })
      }
    }

    const featuresEl = featuresRef.current
    const waitlistNavEl = waitlistNavRef.current

    if (featuresEl) {
      featuresEl.addEventListener("click", (e) => handleScroll(e, "#features"))
    }

    if (waitlistNavEl) {
      waitlistNavEl.addEventListener("click", (e) => handleScroll(e, "#waitlist"))
    }

    return () => {
      if (featuresEl) {
        featuresEl.removeEventListener("click", (e) => handleScroll(e, "#features"))
      }
      if (waitlistNavEl) {
        waitlistNavEl.removeEventListener("click", (e) => handleScroll(e, "#waitlist"))
      }
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col dark bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">TN Visa Tracker</span>
          </div>
          <nav className="flex items-center space-x-6">
            <Link
              href="#features"
              ref={featuresRef}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Features
            </Link>
            <Button
              className="bg-primary text-white hover:bg-primary/90 transition-all shadow-md hover:shadow-lg hover:shadow-primary/30"
              asChild
            >
              <Link href="#waitlist" ref={waitlistNavRef}>
                Join waitlist
              </Link>
            </Button>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <Hero />
        <Features />
        <section id="waitlist" className="bg-secondary py-16 md:py-24 relative overflow-hidden">
          {/* Background gradient elements */}
          <div className="absolute top-0 left-1/3 w-1/3 h-1/3 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 opacity-50"></div>
          <div className="absolute bottom-0 right-1/3 w-1/3 h-1/3 bg-primary/10 rounded-full blur-3xl translate-y-1/2 opacity-50"></div>

          <div className="container relative z-10">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Join our waitlist</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Be the first to know when we launch. Get early access to our platform.
              </p>
              <div className="mt-8">
                <WaitlistForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TN Visa Tracker. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

