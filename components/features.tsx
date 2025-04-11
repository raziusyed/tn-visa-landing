"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [searchIndex, setSearchIndex] = useState(0);
  const searchTerms = [
    "Software Engineer",
    "Data Scientist",
    "Product Manager",
    "UX Designer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSearchIndex((prev) => (prev + 1) % searchTerms.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: "🔍",
      title: "Find TN Visa Sponsors",
      description:
        "Search our database of companies with a history of sponsoring TN Visas for professionals like you.",
      highlight:
        "Real-time search with filters for job titles, locations, and processing times",
      mockup: (
        <motion.div
          className="relative h-[200px] w-full overflow-hidden rounded-lg border bg-card p-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
          <div className="relative h-full space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-xl">🔍</span>
              </div>
              <motion.div
                key={searchIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex-1"
              >
                <input
                  type="text"
                  placeholder="Search job titles..."
                  className="w-full rounded-lg border bg-secondary px-4 py-2 text-sm"
                  value={searchTerms[searchIndex]}
                  readOnly
                />
              </motion.div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {["Location", "Company", "Processing Time", "Success Rate"].map(
                (filter) => (
                  <div
                    key={filter}
                    className="rounded-lg border bg-secondary/50 p-2 text-center text-xs"
                  >
                    {filter}
                  </div>
                )
              )}
            </div>
          </div>
        </motion.div>
      ),
    },
    {
      icon: "📊",
      title: "Success Rate Insights",
      description:
        "View approval rates and processing times to make informed decisions about potential employers.",
      highlight: "Data-driven insights from verified TN visa applications",
      mockup: (
        <motion.div
          className="relative h-[200px] w-full overflow-hidden rounded-lg border bg-card p-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
          <div className="relative h-full flex items-end gap-2">
            {[
              { height: "60%", label: "Seattle", rate: "92%" },
              { height: "75%", label: "Detroit", rate: "85%" },
              { height: "85%", label: "Buffalo", rate: "95%" },
              { height: "70%", label: "San Diego", rate: "88%" },
            ].map((bar, i) => (
              <motion.div
                key={bar.label}
                initial={{ height: 0 }}
                whileInView={{ height: bar.height }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex-1 bg-primary/20 rounded-t-lg flex flex-col items-center"
              >
                <div className="mt-2 text-xs font-medium">{bar.rate}</div>
                <div className="mt-auto mb-2 text-xs text-muted-foreground">
                  {bar.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ),
    },
    {
      icon: "🤝",
      title: "Connect with Others",
      description:
        "Join a community of professionals navigating the TN Visa process and share insights.",
      highlight:
        "Private community for verified TN visa holders and applicants",
      mockup: (
        <motion.div
          className="relative h-[200px] w-full overflow-hidden rounded-lg border bg-card p-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
          <div className="relative h-full space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary/10" />
                <div className="space-y-1">
                  <div className="h-3 w-24 rounded-full bg-primary/10" />
                  <div className="h-2 w-16 rounded-full bg-primary/10" />
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-primary px-4 py-1 text-sm text-white"
              >
                Connect
              </motion.button>
            </div>
            <div className="space-y-2">
              <div className="h-4 w-full rounded-full bg-primary/10" />
              <div className="h-4 w-3/4 rounded-full bg-primary/10" />
            </div>
          </div>
        </motion.div>
      ),
    },
    {
      icon: "🌎",
      title: "Country-Specific Guidance",
      description:
        "Access tailored information for Canadian and Mexican professionals seeking TN status.",
      highlight:
        "Customized checklists and requirements for your specific situation",
      mockup: (
        <motion.div
          className="relative h-[200px] w-full overflow-hidden rounded-lg border bg-card p-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
          <div className="relative h-full flex items-center justify-center">
            <div className="relative w-40 h-40">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="absolute inset-0 bg-primary/10 rounded-full"
              />
              <motion.div
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2 }}
                className="absolute inset-0"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path
                    d="M20,50 Q50,20 80,50"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-primary"
                  />
                </svg>
              </motion.div>
              <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs">
                CA
              </div>
              <div className="absolute bottom-1/4 right-1/4 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs">
                MX
              </div>
            </div>
          </div>
        </motion.div>
      ),
    },
    {
      icon: "📝",
      title: "Share Your Experience",
      description:
        "Help others by sharing your TN Visa application journey, timeline, and tips for success.",
      highlight:
        "Anonymous sharing to protect your privacy while helping others",
      mockup: (
        <motion.div
          className="relative h-[200px] w-full overflow-hidden rounded-lg border bg-card p-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
          <div className="relative h-full space-y-3">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-2"
            >
              <input
                type="text"
                placeholder="Your role"
                className="w-full rounded-lg border bg-secondary px-3 py-2 text-sm"
              />
              <textarea
                placeholder="Share your experience..."
                className="w-full rounded-lg border bg-secondary px-3 py-2 text-sm h-20"
              />
            </motion.div>
            <motion.button
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full rounded-lg bg-primary px-4 py-2 text-sm text-white"
            >
              Share Experience
            </motion.button>
          </div>
        </motion.div>
      ),
    },
    {
      icon: "✅",
      title: "Verified Information",
      description:
        "All submissions are verified to ensure you get accurate, up-to-date information.",
      highlight: "Regular updates to reflect the latest immigration policies",
      mockup: (
        <motion.div
          className="relative h-[200px] w-full overflow-hidden rounded-lg border bg-card p-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
          <div className="relative h-full flex items-center justify-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2"
            >
              <span className="text-xl">✅</span>
              <span className="text-sm font-medium">Verified</span>
            </motion.div>
          </div>
        </motion.div>
      ),
    },
  ];

  return (
    <section
      id="features"
      className="py-16 md:py-24 bg-secondary relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl -translate-y-1/2"
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
        className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl translate-y-1/2"
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need for your TN Visa journey
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Whether you're looking for a TN Visa opportunity or want to share
            your experience, our platform has you covered.
          </p>
        </motion.div>

        <div ref={containerRef} className="mt-16 space-y-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-2xl border bg-card p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="text-5xl mb-4 md:mb-0">{feature.icon}</div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-medium mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {feature.description}
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                    {feature.highlight}
                  </div>
                  {feature.mockup}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
