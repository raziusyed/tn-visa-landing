"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { handleFormSubmit } from "@/app/actions";
import confetti from "canvas-confetti";

export default function WaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    setError(null);
    try {
      const result = await handleFormSubmit(formData);
      if (result.success) {
        setIsSubmitted(true);
        // Trigger confetti on success
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      } else {
        setError(result.error || "Failed to submit form");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
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
        <h3 className="text-xl font-medium">
          Thank you for joining our waitlist!
        </h3>
        <p className="mt-2 text-muted-foreground">
          We'll notify you when we launch. Please check your email for a
          confirmation - it may take a few minutes to arrive. If you don't see
          it, please check your junk folder.
        </p>
      </div>
    );
  }

  return (
    <form
      action={handleSubmit}
      className="mx-auto max-w-md space-y-6 rounded-lg border bg-card p-6 shadow-lg mt-0"
    >
      {error && (
        <div className="rounded-md bg-destructive/15 p-3 text-sm text-destructive">
          {error}
        </div>
      )}
      <div className="space-y-2">
        <Label htmlFor="email">Email address</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          required
          className="bg-background transition-all focus:border-primary focus:ring-1 focus:ring-primary"
        />
      </div>

      <div className="space-y-2">
        <Label>I am a:</Label>
        <RadioGroup
          name="userType"
          defaultValue="seeker"
          className="flex flex-col space-y-1"
        >
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
        <Select name="tnCategory">
          <SelectTrigger className="bg-background transition-all focus:border-primary focus:ring-1 focus:ring-primary">
            <SelectValue placeholder="Select a TN category" />
          </SelectTrigger>
          <SelectContent className="bg-card border border-border shadow-lg">
            <SelectItem value="computer-systems-analyst">
              Computer Systems Analyst
            </SelectItem>
            <SelectItem value="engineer">Engineer</SelectItem>
            <SelectItem value="scientific-technician">
              Scientific Technician/Technologist
            </SelectItem>
            <SelectItem value="management-consultant">
              Management Consultant
            </SelectItem>
            <SelectItem value="accountant">Accountant</SelectItem>
            <SelectItem value="graphic-designer">Graphic Designer</SelectItem>
            <SelectItem value="mathematician">Mathematician</SelectItem>
            <SelectItem value="medical-professional">
              Medical Professional
            </SelectItem>
            <SelectItem value="scientist">Scientist</SelectItem>
            <SelectItem value="teacher">Teacher</SelectItem>
            <SelectItem value="other">Other</SelectItem>
            <SelectItem value="unknown">I don't know</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-xs text-muted-foreground">
          Select the TN category that applies to you or "I don't know" if you're
          unsure.
        </p>
      </div>

      <Button
        type="submit"
        className="w-full bg-primary text-white hover:bg-primary/90 transition-all shadow-md hover:shadow-lg hover:shadow-primary/30"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Join Waitlist"}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        By joining, you agree to our{" "}
        <a
          href="/terms-and-conditions"
          className="underline hover:text-primary transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms and Conditions
        </a>{" "}
        and{" "}
        <a
          href="/privacy-policy"
          className="underline hover:text-primary transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </a>
        .
      </p>
      <p className="text-xs text-muted-foreground mt-1">
        Have questions? Reach out at{" "}
        <a
          href="mailto:hello@tnconnect.fyi"
          className="underline hover:text-primary transition-colors"
        >
          hello@tnconnect.fyi
        </a>
        .
      </p>
    </form>
  );
}
