export type ProjectStatus = "available" | "in-progress" | "archived";

export type ProjectCategory = "frontend" | "fullstack" | "backend" | "tooling";

export interface ProjectScreenshot {
  type: "screenshot";
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface ProjectMermaid {
  type: "mermaid";
  /** Mermaid diagram source (flowchart, sequenceDiagram, etc.) */
  chart: string;
  title?: string;
}

export type ProjectMediaItem = ProjectScreenshot | ProjectMermaid;

export interface ProjectLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  status: ProjectStatus;
  techStack: string[];
  highlights: string[];
  links: ProjectLink[];
  media: ProjectMediaItem[];
  /** Live deployment URL — renders a Vercel-style iframe preview when set */
  deployUrl?: string;
  /** Media layout mode: "stacked" (top/bottom, default for dual media) or "grid" (side by side) */
  mediaLayout?: "stacked" | "grid";
  /** Bento grid column span on md+ (4, 8, or 12 in a 12-column grid) */
  gridColSpan?: 1 | 2 | 4 | 6 | 8 | 12;
  /** Bento grid row span on md+ */
  gridRowSpan?: 1 | 2;
}
