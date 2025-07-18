"use client";
import "./markdown.css"; // adjust path if needed

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function ProjectIdeas() {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch("/Ideas.md")
      .then((res) => res.text())
      .then(setMarkdown);
  }, []);

  return (
    <div
      style={{ width: "80vw", color: "white", margin: "0 auto" }}
      className="project-ideas"
    >
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}
