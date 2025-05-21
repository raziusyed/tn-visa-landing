"use client";

import React from "react";
import { motion } from "framer-motion";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

export default function ExperiencesPage() {
  const experiences = useQuery(api.experiences.get);

  return (
    <section className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full flex justify-center px-4 sm:px-8"
      >
        <div className="relative lg:max-w-7xl w-full rounded-xl border bg-card/50 p-4 sm:p-8">
          {/* Card header */}
          <div className="mb-6 flex gap-4 items-center justify-between">
            <h3 className="text-2xl font-semibold">Latest Experiences</h3>
          </div>
          {/* Search input */}
          {/* <div className="mb-6">
            <input
              type="text"
              placeholder="Search by company, job title, port, or status..."
              className="w-full rounded-lg border bg-secondary px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              disabled
            />
          </div> */}
          {/* Filter mockups */}
          {/* <div className="flex flex-col sm:flex-row justify-start gap-4 mb-4"> */}
          {/* Category filter mockup */}
          {/* 
            <div className="inline-flex items-center gap-2 rounded-md border border-border bg-muted px-3 py-2 shadow-sm">
              <label
                htmlFor="category-filter"
                className="text-sm font-medium text-muted-foreground"
              >
                Category:
              </label>
              <select
                id="category-filter"
                className="rounded-md w-full border border-border bg-background px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                disabled
              >
                <option>All</option>
                <option>Engineer</option>
                <option>Analyst</option>
                <option>Consultant</option>
              </select>
            </div> */}

          {/* Status filter mockup */}
          {/* <div className="inline-flex items-center gap-2 rounded-md border border-border bg-muted px-3 py-2 shadow-sm">
              <label
                htmlFor="status-filter"
                className="text-sm font-medium text-muted-foreground"
              >
                Status:
              </label>
              <select
                id="status-filter"
                className="rounded-md w-full border border-border bg-background px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                disabled
              >
                <option>All</option>
                <option>Approved</option>
                <option>Pending</option>
                <option>Denied</option>
              </select>
            </div>
          </div> */}

          {/* Table container with horizontal scroll */}
          <div className="w-full overflow-x-auto">
            <table className="min-w-full text-sm bg-card rounded-xl shadow-sm">
              <thead>
                <tr className="bg-muted/60">
                  <th className="px-4 py-3 text-left font-semibold text-muted-foreground">
                    Nationality
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-muted-foreground">
                    TN Category
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-muted-foreground">
                    Job Title
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-muted-foreground">
                    Port of Entry
                  </th>

                  <th className="px-4 py-3 text-left font-semibold text-muted-foreground">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-muted-foreground">
                    Date of Crossing
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-muted-foreground">
                    Processing Time (hrs)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {experiences?.map((exp, i) => (
                  <tr key={i} className="hover:bg-muted/40 transition-colors">
                    <td
                      className="px-4 py-3 text-center align-middle"
                      style={{ fontSize: "1.5em" }}
                    >
                      {exp.nationalityIcon}
                    </td>
                    <td className="px-4 py-3">{exp.tnCategory}</td>
                    <td className="px-4 py-3">{exp.jobTitle}</td>
                    <td className="px-4 py-3">{exp.portOfEntry}</td>

                    <td className="px-4 py-3">
                      <span
                        className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                          exp.status === "Approved"
                            ? "bg-green-100 text-green-800"
                            : exp.status === "Pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                        }`}
                      >
                        {exp.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center align-middle">
                      {exp.crossingDate}
                    </td>
                    <td className="px-4 py-3 text-center align-middle">
                      {exp.processingTime}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
