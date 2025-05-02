"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ExperiencesPage() {
  // Mock data similar to hero.tsx
  const experiences = [
    {
      nationality: "🇨🇦",
      tnCategory: "Engineer",
      jobTitle: "Software Engineer",
      portOfEntry: "Toronto Pearson Intl Airport",
      entryExperience: "up",
      status: "Approved",
      crossed: "2025-04-15",
      processingTime: "1 hour",
    },
    {
      nationality: "🇲🇽",
      tnCategory: "Analyst",
      jobTitle: "Data Analyst",
      portOfEntry: "Laredo Border Crossing",
      entryExperience: "up",
      status: "Approved",
      crossed: "2025-04-14",
      processingTime: "2 hours",
    },
    {
      nationality: "🇨🇦",
      tnCategory: "Consultant",
      jobTitle: "Management Consultant",
      portOfEntry: "San Ysidro Border",
      entryExperience: "down",
      status: "Pending",
      crossed: "2025-04-13",
      processingTime: "N/A",
    },
    {
      nationality: "🇨🇦",
      tnCategory: "Developer",
      jobTitle: "Software Developer",
      portOfEntry: "Vancouver Intl Airport",
      entryExperience: "up",
      status: "Approved",
      crossed: "2025-04-12",
      processingTime: "45 min",
    },
    {
      nationality: "🇲🇽",
      tnCategory: "Engineer",
      jobTitle: "Civil Engineer",
      portOfEntry: "Buffalo Niagara Intl Airport",
      entryExperience: "down",
      status: "Approved",
      crossed: "2025-04-11",
      processingTime: "1.5 hours",
    },
    {
      nationality: "🇨🇦",
      tnCategory: "Accountant",
      jobTitle: "Accountant",
      portOfEntry: "JFK Intl Airport",
      entryExperience: "up",
      status: "Approved",
      crossed: "2025-04-10",
      processingTime: "1 hour",
    },
    {
      nationality: "🇲🇽",
      tnCategory: "Designer",
      jobTitle: "Graphic Designer",
      portOfEntry: "Miami Intl Airport",
      entryExperience: "up",
      status: "Pending",
      crossed: "2025-04-09",
      processingTime: "N/A",
    },
    {
      nationality: "🇨🇦",
      tnCategory: "Scientist",
      jobTitle: "Research Scientist",
      portOfEntry: "Seattle Tacoma Intl Airport",
      entryExperience: "up",
      status: "Approved",
      crossed: "2025-04-08",
      processingTime: "2 hours",
    },
    {
      nationality: "🇲🇽",
      tnCategory: "Analyst",
      jobTitle: "Financial Analyst",
      portOfEntry: "Detroit Windsor Tunnel",
      entryExperience: "down",
      status: "Denied",
      crossed: "2025-04-07",
      processingTime: "N/A",
    },
    {
      nationality: "🇨🇦",
      tnCategory: "Engineer",
      jobTitle: "Mechanical Engineer",
      portOfEntry: "Blaine Peace Arch",
      entryExperience: "up",
      status: "Approved",
      crossed: "2025-04-06",
      processingTime: "1 hour",
    },
  ];

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
            placeholder="Search by company, job title, port, or location..."
            className="w-full rounded-lg border bg-secondary px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            disabled
          />
        </div> */}
          {/* Filter mockups */}
          {/* <div className="flex flex-col sm:flex-row justify-start gap-4 mb-4"> */}
          {/* Category filter mockup */}
          {/* <div className="inline-flex items-center gap-2 rounded-md border border-border bg-muted px-3 py-2 shadow-sm">
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
          </div> */}
          {/* </div>   */}

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
                    Entry Experience
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-muted-foreground">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-muted-foreground">
                    Crossed
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-muted-foreground">
                    Processing Time
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {experiences.map((exp, i) => (
                  <tr key={i} className="hover:bg-muted/40 transition-colors">
                    <td
                      className="px-4 py-3 text-center align-middle"
                      style={{ fontSize: "1.5em" }}
                    >
                      {exp.nationality}
                    </td>
                    <td className="px-4 py-3">{exp.tnCategory}</td>
                    <td className="px-4 py-3">{exp.jobTitle}</td>
                    <td className="px-4 py-3">{exp.portOfEntry}</td>
                    <td className="px-4 py-3 text-center align-middle">
                      {exp.entryExperience === "up" ? (
                        <div className="mx-auto flex items-center justify-center w-8 h-8 rounded-full bg-green-100/20 border border-green-300/30 shadow">
                          👍
                        </div>
                      ) : (
                        <div className="mx-auto flex items-center justify-center w-8 h-8 rounded-full bg-red-100/20 border border-red-300/30 shadow">
                          👎
                        </div>
                      )}
                    </td>
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
                      {exp.crossed}
                    </td>
                    <td className="px-4 py-3">{exp.processingTime}</td>
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
