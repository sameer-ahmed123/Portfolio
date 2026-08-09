"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
  { label: "Ideas", href: "/personal" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav
        className={`flex items-center gap-1 sm:gap-2 rounded-full border border-white/60 bg-white/80 px-3 py-2 shadow-lg shadow-sky-200/50 backdrop-blur-xl transition-shadow ${
          scrolled ? "shadow-xl shadow-sky-300/40" : ""
        }`}
      >
        <a
          href="#"
          className="hidden sm:inline font-semibold text-slate-800 text-sm px-3 py-1.5"
        >
          SAJ
        </a>

        <span className="hidden sm:block w-px h-5 bg-slate-200" />

        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="rounded-full px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-sky-50 hover:text-slate-900 transition-colors"
          >
            {link.label}
          </a>
        ))}

        <span className="hidden md:flex items-center gap-1.5 ml-1 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-700">
            Available
          </span>
        </span>
      </nav>
    </header>
  );
}
