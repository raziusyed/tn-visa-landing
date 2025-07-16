import Hero from "@/components/hero";
import Features from "@/components/features";
import MailinglistSection from "@/components/mailinglist-section";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col dark bg-background text-foreground">
      <main className="flex-1">
        <Hero />
        <Features />
        <MailinglistSection />
      </main>
    </div>
  );
}
