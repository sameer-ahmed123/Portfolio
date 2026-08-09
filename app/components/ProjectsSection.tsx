"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24 px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-slate-400">
            Portfolio
          </p>
          <h2 className="text-3xl font-bold text-slate-900">Projects</h2>
        </motion.div>

        {/* Predictable 12-column Bento Grid with dynamic content heights */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 items-start">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
