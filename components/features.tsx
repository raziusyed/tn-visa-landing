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

      colStart: "",
    },
    {
      icon: "📊",
      title: "Data-Driven Insights & Updates",
      description:
        "Access valuable insights from real TN visa experiences with verified submissions and stay informed about the latest crossing experiences and processing times.",

      colStart: "",
    },
    {
      icon: "📜",
      title: "Job Title Eligibility Check",
      description:
        "Quickly verify if your job title qualifies for a TN visa and under which NAFTA/USMCA professional category it falls, based on real approval data.",

      colStart: "",
    },
    {
      icon: "🤝",
      title: "Community Connection",
      description:
        "Share your TN visa journey anonymously and connect with others who have successfully navigated the process to learn from their experiences.",

      colStart: "lg:col-start-2",
    },
    {
      icon: "⚖️",
      title: "Lawyer & Firm Connections",
      description:
        "Get connected with lawyers and immigration firms who have successfully handled TN cases matching your job title, category, and educational background.",

      colStart: "md:col-start-2 lg:col-start-4",
    },
  ];

  return (
    <section id="features" className="py-8 md:py-12 bg-background">
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
          className="mt-16 grid gap-8 md:grid-cols-4 lg:grid-cols-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.045 }}
              whileTap={{ scale: 0.98 }}
              className={`col-span-2 group relative rounded-3xl border border-white/10 bg-card/90 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-300 p-8 flex flex-col h-full overflow-hidden hover:border-primary/40 ${feature.colStart}`}
            >
              <div className="flex flex-col gap-4 flex-1 relative z-10">
                <div className="mx-auto mb-2 flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 border border-primary/30 shadow group-hover:bg-primary/30 transition duration-300 text-4xl">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold tracking-tight text-white group-hover:text-primary transition-colors duration-300 text-center">
                  {feature.title}
                </h3>
                <p className="text-base text-white/80 text-center">
                  {feature.description}
                </p>
                
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
