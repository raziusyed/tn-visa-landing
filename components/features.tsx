"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const features = [
    {
      icon: "🔍",
      title: "Find TN Visa Sponsors",
      description:
        "Search our database of companies with a history of sponsoring TN Visas for professionals like you.",
      highlight:
        "Real-time search with filters for job titles, locations, and processing times",
    },
    {
      icon: "📊",
      title: "Success Rate Insights",
      description:
        "View approval rates and processing times to make informed decisions about potential employers.",
      highlight: "Data-driven insights from verified TN visa applications",
    },
    {
      icon: "🤝",
      title: "Connect with Others",
      description:
        "Join a community of professionals navigating the TN Visa process and share insights.",
      highlight:
        "Private community for verified TN visa holders and applicants",
    },
    {
      icon: "🌎",
      title: "Country-Specific Guidance",
      description:
        "Access tailored information for Canadian and Mexican professionals seeking TN status.",
      highlight:
        "Customized checklists and requirements for your specific situation",
    },
    {
      icon: "📝",
      title: "Share Your Experience",
      description:
        "Help others by sharing your TN Visa application journey, timeline, and tips for success.",
      highlight:
        "Anonymous sharing to protect your privacy while helping others",
    },
    {
      icon: "✅",
      title: "Verified Information",
      description:
        "All submissions are verified to ensure you get accurate, up-to-date information.",
      highlight: "Regular updates to reflect the latest immigration policies",
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
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    {feature.highlight}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
