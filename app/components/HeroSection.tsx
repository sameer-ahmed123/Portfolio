"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const skillCards = [
  {
    id: "frontend" as const,
    label: "Frontend",
    color: "sky",
    items: [
      "HTML, CSS & JavaScript",
      "React & Component-Based UIs",
      "Responsive Designs",
    ],
  },
  {
    id: "backend" as const,
    label: "Backend",
    color: "violet",
    items: [
      "Django Web Framework",
      "RESTful API Development with DRF",
      "Database Management (PostgreSQL)",
      "Authentication & Authorization",
    ],
  },
  {
    id: "devops" as const,
    label: "Tools",
    color: "teal",
    items: [
      "Version Control (Git)",
      "RESTful API Consumption",
      "Problem Solving & Debugging",
    ],
  },
];

const colorMap = {
  sky: {
    active: "border-sky-400 bg-sky-50 shadow-sky-100",
    dot: "bg-sky-500",
    title: "text-sky-700",
  },
  violet: {
    active: "border-violet-400 bg-violet-50 shadow-violet-100",
    dot: "bg-violet-500",
    title: "text-violet-700",
  },
  teal: {
    active: "border-teal-400 bg-teal-50 shadow-teal-100",
    dot: "bg-teal-500",
    title: "text-teal-700",
  },
};

const techPills = [
  "HTML & CSS",
  "JavaScript & React",
  "Django",
  "Next.js",
  "Django Rest Framework",
];

export default function HeroSection() {
  const [selectedStack, setSelectedStack] = useState<
    "frontend" | "backend" | "devops" | null
  >(null);

  return (
    <section
      id="about"
      className="min-h-screen relative pt-28 pb-16 px-4 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Hero bento header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
        >
          <div className="md:col-span-2 rounded-3xl border border-white/80 bg-white/90 p-8 shadow-lg shadow-sky-100/80 backdrop-blur-sm">
            <p className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-3">
              Full Stack Developer
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-3">
              Sameer Ahmed Jan
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
              I specialize in building robust and dynamic web applications —
              from intuitive user interfaces to scalable backend solutions.
            </p>
          </div>

          <div className="rounded-3xl border border-white/80 bg-white/90 p-6 shadow-lg shadow-sky-100/80 backdrop-blur-sm flex flex-col justify-center">
            <p className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-4">
              Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {techPills.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Skills bento grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {skillCards.map((card) => {
            const colors = colorMap[card.color as keyof typeof colorMap];
            const isActive = selectedStack === card.id;

            return (
              <div
                key={card.id}
                className={`rounded-3xl border-2 p-6 transition-all cursor-default ${
                  isActive
                    ? `${colors.active} shadow-lg`
                    : "border-white/80 bg-white/90 shadow-md shadow-sky-100/60 hover:shadow-lg"
                }`}
                onMouseEnter={() => setSelectedStack(card.id)}
                onMouseLeave={() => setSelectedStack(null)}
              >
                <p className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-2">
                  {card.label}
                </p>
                <h3 className={`text-lg font-bold mb-4 ${colors.title}`}>
                  {card.label} Skills
                </h3>
                <ul className="space-y-2">
                  {card.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-slate-600"
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${colors.dot}`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
