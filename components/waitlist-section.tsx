import WaitlistForm from "@/components/waitlist-form";

export default function WaitlistSection() {
  return (
    <section
      id="waitlist"
      className="relative min-h-screen bg-background py-12 overflow-hidden"
    >
      {/* Background gradient elements */}
      <div className="absolute bottom-0 right-1/3 w-1/3 h-1/3 bg-primary/10 rounded-full blur-3xl translate-y-1/2 opacity-50"></div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight sm:text-4xl">
            Join our waitlist
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Be the first to know when we launch. Get early access to our
            platform.
          </p>
          <div className="mt-8">
            <WaitlistForm />
          </div>
        </div>
      </div>
    </section>
  );
}
