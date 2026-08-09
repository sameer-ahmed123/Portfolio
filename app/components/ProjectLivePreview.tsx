"use client";

import { useState } from "react";
import Image from "next/image";
import type { ProjectScreenshot } from "@/types/project";

interface ProjectLivePreviewProps {
  url: string;
  title: string;
  fallbackScreenshot?: ProjectScreenshot;
}

export default function ProjectLivePreview({
  url,
  title,
  fallbackScreenshot,
}: ProjectLivePreviewProps) {
  const [iframeFailed, setIframeFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  let hostname = url;
  try {
    hostname = new URL(url).hostname;
  } catch {
    /* keep raw url */
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {/* Browser chrome — Vercel-style preview frame */}
      <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-100 px-3 py-2">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        </div>
        <div className="mx-2 min-w-0 flex-1 truncate rounded-md bg-white px-3 py-1 font-mono text-[10px] text-slate-500">
          {hostname}
        </div>
        <span className="shrink-0 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-emerald-700">
          Live
        </span>
      </div>

      <div className="relative aspect-video bg-slate-50">
        {!iframeFailed ? (
          <>
            {!loaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-slate-100 animate-pulse">
                <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
                  Loading preview…
                </span>
              </div>
            )}
            <iframe
              src={url}
              title={`${title} live preview`}
              scrolling="no"
              className={`absolute inset-0 h-full w-full border-0 no-scrollbar overflow-hidden transition-opacity duration-300 ${
                loaded ? "opacity-100" : "opacity-0"
              }`}
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              onLoad={() => setLoaded(true)}
              onError={() => setIframeFailed(true)}
            />
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-10"
              aria-label={`Open ${title} in a new tab`}
            />
          </>
        ) : fallbackScreenshot ? (
          <Image
            src={fallbackScreenshot.src}
            alt={fallbackScreenshot.alt}
            width={fallbackScreenshot.width ?? 1200}
            height={fallbackScreenshot.height ?? 800}
            className="h-full w-full object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center p-6 text-center">
            <p className="text-sm text-slate-500">
              Preview blocked by site policy.{" "}
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 underline hover:text-orange-500"
              >
                Open live site →
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
