"use client";

import "./markdown.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import Navbar from "../components/Navbar";
import SkyBackground from "../components/SkyBackground";

export default function ProjectIdeas() {
  const [markdown, setMarkdown] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/Ideas.md")
      .then((res) => res.text())
      .then((text) => {
        setMarkdown(text);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <>
      <SkyBackground />
      <Navbar />
      <main className="relative min-h-screen px-4 pb-16 pt-28">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/80 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm backdrop-blur-sm transition-colors hover:text-slate-900"
          >
            ← Back to portfolio
          </Link>

          <article className="project-ideas rounded-3xl border border-white/80 bg-white/95 p-8 shadow-lg shadow-sky-100/80 backdrop-blur-sm md:p-12">
            {loading ? (
              <p className="font-mono text-xs uppercase tracking-wider text-slate-400">
                Loading ideas…
              </p>
            ) : (
              <ReactMarkdown>{markdown}</ReactMarkdown>
            )}
          </article>
        </div>
      </main>
    </>
  );
}
