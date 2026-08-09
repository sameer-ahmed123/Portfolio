"use client";

import { useEffect, useId, useRef, useState } from "react";

interface MermaidDiagramProps {
  chart: string;
  title?: string;
  className?: string;
}

export default function MermaidDiagram({
  chart,
  title,
  className,
}: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rawId = useId();
  const diagramId = `mermaid-${rawId.replace(/:/g, "")}`;
  const [error, setError] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function renderDiagram() {
      try {
        const mermaid = (await import("mermaid")).default;
        mermaid.initialize({
          startOnLoad: false,
          theme: "neutral",
          securityLevel: "strict",
          fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
        });

        const { svg } = await mermaid.render(diagramId, chart.trim());
        if (!cancelled && containerRef.current) {
          containerRef.current.innerHTML = svg;
          setReady(true);
          setError(null);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Failed to render diagram");
        }
      }
    }

    renderDiagram();
    return () => {
      cancelled = true;
    };
  }, [chart, diagramId]);

  return (
    <div
      className={`flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm ${className ?? ""}`}
    >
      {title && (
        <div className="shrink-0 border-b border-slate-200 bg-slate-100 px-3 py-2">
          <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
            {title}
          </span>
        </div>
      )}
      <div className="relative flex w-full items-center justify-center overflow-auto p-4 min-h-[140px]">
        {!ready && !error && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-50 animate-pulse">
            <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
              Rendering diagram…
            </span>
          </div>
        )}
        {error ? (
          <pre className="overflow-x-auto rounded-lg bg-red-50 p-3 text-xs text-red-600">
            {error}
          </pre>
        ) : (
          <div
            ref={containerRef}
            className={`mermaid-diagram flex w-full justify-center transition-opacity duration-300 ${
              ready ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
      </div>
    </div>
  );
}
