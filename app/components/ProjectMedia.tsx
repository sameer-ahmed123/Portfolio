"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProjectMediaItem } from "@/types/project";
import MermaidDiagram from "./MermaidDiagram";

interface ProjectMediaProps {
  media: ProjectMediaItem;
  className?: string;
  onError?: () => void;
}

function MediaSkeleton({ label }: { label: string }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-slate-100 animate-pulse">
      <div className="h-6 w-6 rounded-full border-2 border-slate-300 border-t-orange-500 animate-spin" />
      <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
        {label}
      </span>
    </div>
  );
}

function ScreenshotMedia({
  media,
  className,
  onError,
}: {
  media: Extract<ProjectMediaItem, { type: "screenshot" }>;
  className?: string;
  onError?: () => void;
}) {
  const [loaded, setLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
    if (onError) {
      onError();
    }
  };

  if (hasError) {
    return null;
  }

  const isSvg = media.src.endsWith(".svg");

  return (
    <div
      className={`overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm ${className ?? ""}`}
    >
      <div className="border-b border-slate-200 bg-slate-100 px-3 py-2">
        <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
          Screenshot
        </span>
      </div>
      <div className="relative aspect-video w-full overflow-hidden bg-slate-50">
        {!loaded && <MediaSkeleton label="Loading screenshot…" />}
        <Image
          src={media.src}
          alt={media.alt}
          width={media.width ?? 1200}
          height={media.height ?? 800}
          unoptimized={isSvg}
          className={`h-full w-full object-cover object-top transition-opacity duration-300 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setLoaded(true)}
          onError={handleError}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}

export default function ProjectMedia({
  media,
  className,
  onError,
}: ProjectMediaProps) {
  if (media.type === "screenshot") {
    return (
      <ScreenshotMedia
        media={media}
        className={className}
        onError={onError}
      />
    );
  }

  return (
    <MermaidDiagram
      chart={media.chart}
      title={media.title}
      className={className}
    />
  );
}

