"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import confetti from "canvas-confetti"

export default function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [userType, setUserType] = useState("seeker")
  const [tnCategory, setTnCategory] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const tnCategories = [
    { value: "computer-systems-analyst", label: "Computer Systems Analyst" },
    { value: "engineer", label: "Engineer" },
    { value: "scientific-technician", label: "Scientific Technician/Technologist" },
    { value: "management-consultant", label: "Management Consultant" },
    { value: "accountant", label: "Accountant" },
    { value: "graphic-designer", label: "Graphic Designer" },
    { value: "mathematician", label: "Mathematician" },
    { value: "medical-professional", label: "Medical Professional" },
    { value: "scientist", label: "Scientist" },
    { value: "teacher", label: "Teacher" },
    { value: "unknown", label: "I don't know" },
  ]

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    })

    // Fire a second batch for more effect
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      })
    }, 250)

    // And a third from the other side
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      })
    }, 400)
  }

  useEffect(() => {
    if (submitted) {
      triggerConfetti()
    }
  }, [submitted])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-lg border bg-card p-6 text-center shadow-lg">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-primary"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
        <h3 className="text-xl font-medium">Thank you for joining our waitlist!</h3>
        <p className="mt-2 text-muted-foreground">
          We'll notify you when we launch. In the meantime, check your email for a confirmation.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-6 rounded-lg border bg-card p-6 shadow-lg">
      <div className="space-y-2">
        <Label htmlFor="email">Email address</Label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-background transition-all focus:border-primary focus:ring-1 focus:ring-primary"
        />
      </div>

      <div className="space-y-2">
        <Label>I am a:</Label>
        <RadioGroup value={userType} onValueChange={setUserType} className="flex flex-col space-y-1">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="seeker" id="seeker" />
            <Label htmlFor="seeker" className="font-normal">
              TN Visa Job Seeker
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="holder" id="holder" />
            <Label htmlFor="holder" className="font-normal">
              Current TN Visa Holder
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="employer" id="employer" />
            <Label htmlFor="employer" className="font-normal">
              Employer
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label htmlFor="tn-category">TN Visa Category</Label>
        <Select value={tnCategory} onValueChange={setTnCategory}>
          <SelectTrigger className="bg-background transition-all focus:border-primary focus:ring-1 focus:ring-primary">
            <SelectValue placeholder="Select a TN category" />
          </SelectTrigger>
          <SelectContent className="bg-card border border-border shadow-lg">
            {tnCategories.map((category) => (
              <SelectItem key={category.value} value={category.value}>
                {category.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <p className="text-xs text-muted-foreground">
          Select the TN category that applies to you or "I don't know" if you're unsure.
        </p>
      </div>

      <Button
        type="submit"
        className="w-full bg-primary text-white hover:bg-primary/90 transition-all shadow-md hover:shadow-lg hover:shadow-primary/30"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Join Waitlist"}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        By joining, you agree to our Terms of Service and Privacy Policy.
      </p>
    </form>
  )
}

