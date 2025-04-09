import { CheckCircle, Globe, Search, Share2, ShieldCheck, Users } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <Search className="h-10 w-10 text-primary" />,
      title: "Find TN Visa Sponsors",
      description: "Search our database of companies with a history of sponsoring TN Visas for professionals like you.",
    },
    {
      icon: <Share2 className="h-10 w-10 text-primary" />,
      title: "Share Your Experience",
      description: "Help others by sharing your TN Visa application journey, timeline, and tips for success.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Connect with Others",
      description: "Join a community of professionals navigating the TN Visa process and share insights.",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Country-Specific Guidance",
      description: "Access tailored information for Canadian and Mexican professionals seeking TN status.",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-primary" />,
      title: "Success Rate Insights",
      description: "View approval rates and processing times to make informed decisions about potential employers.",
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
      title: "Verified Information",
      description: "All submissions are verified to ensure you get accurate, up-to-date information.",
    },
  ]

  return (
    <section id="features" className="py-16 md:py-24 bg-secondary relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 opacity-50"></div>
      <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl translate-y-1/2 opacity-50"></div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need for your TN Visa journey
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Whether you're looking for a TN Visa opportunity or want to share your experience, our platform has you
            covered.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-lg border bg-card p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 hover:-translate-y-1"
            >
              <div className="mb-4 p-3 rounded-full bg-primary/10 inline-block">{feature.icon}</div>
              <h3 className="mb-2 text-xl font-medium">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

