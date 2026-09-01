"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Project, ProjectScreenshot } from "@/types/project";
import ProjectMedia from "./ProjectMedia";
import ProjectLivePreview from "./ProjectLivePreview";

const statusStyles: Record<Project["status"], string> = {
  available: "border-emerald-200 bg-emerald-50 text-emerald-700",
  "in-progress": "border-amber-200 bg-amber-50 text-amber-700",
  archived: "border-slate-200 bg-slate-50 text-slate-500",
};

function getGridClasses(project: Project) {
  switch (project.gridColSpan) {
    case 4:
      return "md:col-span-4";
    case 8:
      return "md:col-span-8";
    case 12:
      return "md:col-span-12";
    default:
      return "md:col-span-6";
  }
}

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const [screenshotError, setScreenshotError] = useState(false);

  const screenshot = project.media.find(
    (m): m is ProjectScreenshot => m.type === "screenshot"
  );
  const diagram = project.media.find((m) => m.type === "mermaid");

  const hasPreviewEmbed = Boolean(project.deployUrl);
  const showScreenshot =
    !hasPreviewEmbed && Boolean(screenshot) && !screenshotError;
  const hasBothMedia = showScreenshot && Boolean(diagram);

  const isStackedMedia =
    project.mediaLayout === "stacked" ||
    (project.mediaLayout !== "grid" && hasBothMedia);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className={`${getGridClasses(
        project
      )} group flex flex-col justify-between overflow-hidden rounded-3xl border border-white/80 bg-white/90 p-6 shadow-lg shadow-sky-100/80 backdrop-blur-sm transition-all hover:shadow-xl hover:shadow-sky-200/60`}
    >
      <div>
        {/* Header */}
        <div className="mb-3 flex items-start justify-between gap-4">
          <div>
            <p className="mb-1 font-mono text-xs uppercase tracking-wider text-slate-400">
              {project.category}
            </p>
            <h3 className="text-xl font-bold text-slate-900 md:text-2xl">
              {project.title}
            </h3>
          </div>
          <span
            className={`shrink-0 rounded-full border px-3 py-1 font-mono text-xs uppercase tracking-wider ${
              statusStyles[project.status]
            }`}
          >
            {project.status.replace("-", " ")}
          </span>
        </div>

        {/* Description */}
        <p className="mb-3 text-sm leading-relaxed text-slate-600">
          {project.description}
        </p>

        {/* Tech stack pills */}
        <div className="mb-5 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-mono text-xs text-slate-600"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Embedded Interactive Frame Container */}
        <div className="-mx-6 mb-5 overflow-hidden border-y border-slate-200/60 bg-slate-50">
          {hasPreviewEmbed && project.deployUrl ? (
            <div className="flex flex-col w-full">
              <ProjectLivePreview
                url={project.deployUrl}
                title={project.title}
                fallbackScreenshot={screenshot}
              />
              {diagram && (
                <div className="p-4 border-t border-slate-200/60 bg-white">
                  <ProjectMedia media={diagram} className="w-full" />
                </div>
              )}
            </div>
          ) : isStackedMedia ? (
            <div className="flex flex-col w-full">
              {showScreenshot && screenshot && (
                <ProjectMedia
                  media={screenshot}
                  className="w-full"
                  onError={() => setScreenshotError(true)}
                />
              )}
              {diagram && (
                <div className="p-4 border-t border-slate-200/60 bg-white">
                  <ProjectMedia media={diagram} className="w-full" />
                </div>
              )}
            </div>
          ) : (
            <div
              className={`grid gap-4 items-start p-4 ${
                hasBothMedia ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1"
              }`}
            >
              {showScreenshot && screenshot && (
                <ProjectMedia
                  media={screenshot}
                  onError={() => setScreenshotError(true)}
                />
              )}
              {diagram && (
                <ProjectMedia
                  media={diagram}
                  className={!showScreenshot ? "w-full" : undefined}
                />
              )}
            </div>
          )}
        </div>

        {/* Highlights */}
        {project.highlights.length > 0 && (
          <ul className="mb-5 space-y-2">
            {project.highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm text-slate-600 leading-snug"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Action / CTA Buttons */}
      {project.links.length > 0 && (
        <div className="flex flex-wrap gap-3 pt-2">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-2 rounded-xl bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-500"
            >
              {link.label}
              {link.external && (
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5M10.5 6h6v6m-11.5 0L21 3"
                  />
                </svg>
              )}
            </a>
          ))}
        </div>
      )}
    </motion.article>
  );
}