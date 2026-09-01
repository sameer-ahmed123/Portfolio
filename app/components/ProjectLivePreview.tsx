"use client";

import { useState, useRef, useEffect } from "react";
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
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  // Virtual desktop viewport dimensions
  const VIRTUAL_WIDTH = 1280;
  const VIRTUAL_HEIGHT = 800;

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const currentWidth = containerRef.current.clientWidth;
        setScale(currentWidth / VIRTUAL_WIDTH);
      }
    };

    updateScale();
    const observer = new ResizeObserver(updateScale);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  let hostname = url;
  try {
    hostname = new URL(url).hostname;
  } catch {
    /* keep raw url */
  }

  return (
    <div className="w-full overflow-hidden border-b border-slate-200/80 bg-slate-900">
      {/* Browser Chrome Header */}
      <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/90 px-4 py-2.5 backdrop-blur-sm">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
        </div>

        <div className="mx-2 max-w-[65%] shrink flex-1 truncate rounded-md bg-slate-800/80 px-3 py-1 text-center font-mono text-[11px] text-slate-300 shadow-inner border border-slate-700/50">
          {hostname}
        </div>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors"
        >
          Open ↗
        </a>
      </div>

      {/* Interactive Preview Container */}
      <div
        ref={containerRef}
        className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950"
      >
        {!iframeFailed ? (
          <>
            {/* Skeleton Loading State */}
            {!loaded && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 bg-slate-900">
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-slate-700 border-t-orange-500" />
                <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
                  Loading Interactive App…
                </span>
              </div>
            )}

            {/* Scaled Interactive Desktop Viewport */}
            <div
              className="absolute left-0 top-0 origin-top-left transition-opacity duration-300"
              style={{
                width: `${VIRTUAL_WIDTH}px`,
                height: `${VIRTUAL_HEIGHT}px`,
                transform: `scale(${scale})`,
                opacity: loaded ? 1 : 0,
              }}
            >
              <iframe
                src={url}
                title={`${title} live preview`}
                className="h-full w-full border-0"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                onLoad={() => setLoaded(true)}
                onError={() => setIframeFailed(true)}
              />
            </div>
          </>
        ) : fallbackScreenshot ? (
          <div className="relative h-full w-full">
            <Image
              src={fallbackScreenshot.src}
              alt={fallbackScreenshot.alt}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ) : (
          <div className="flex h-full items-center justify-center p-6 text-center">
            <p className="text-xs text-slate-400">
              Interactive preview constrained by site headers.{" "}
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 underline hover:text-orange-300"
              >
                Open in new tab →
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}