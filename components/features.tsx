"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const features = [
    {
      icon: "🔍",
      title: "Advanced Search & Filtering",
      description:
        "Find exactly what you need with precise filters for job titles, companies, locations, and processing times.",
      highlight:
        "Real-time search with filters for job titles, locations, and processing times",
    },
    {
      icon: "🔒",
      title: "Verified & Reliable Data",
      description:
        "All information is verified and confidential. Your privacy is our top priority.",
      highlight: "Data-driven insights from verified TN visa applications",
    },
    {
      icon: "🤝",
      title: "Share Your Experience",
      description:
        "Help others while building your professional network. Your insights can guide future applicants.",
      highlight:
        "Anonymous sharing to protect your privacy while helping others",
    },
    {
      icon: "👥",
      title: "Connect with Peers",
      description:
        "Join a community of TN professionals who understand your journey and can offer valuable advice.",
      highlight:
        "Private community for verified TN visa holders and applicants",
    },
    {
      icon: "🔄",
      title: "Real-time Updates",
      description:
        "Stay informed about the latest TN crossing experiences and processing times at different ports.",
      highlight: "Regular updates to reflect the latest immigration policies",
    },
    {
      icon: "📈",
      title: "Career Growth Support",
      description:
        "Access resources and connections to help with future TN applications and career transitions.",
      highlight: "Support for your long-term career development",
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight sm:text-4xl">
            Real TN Visa Experiences, From Real People
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Powerful filters. Transparent data. Clean design.
          </p>
        </motion.div>

        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative rounded-2xl border bg-card p-8 flex flex-col h-full"
            >
              <div className="flex flex-col gap-4 flex-1">
                <div className="text-4xl">{feature.icon}</div>
                <h3 className="text-2xl font-medium">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mt-auto">
                  {feature.highlight}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
