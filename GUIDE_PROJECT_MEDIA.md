# Project Media Guide

This document explains how to add screenshots, live deployment previews, and Mermaid diagrams to portfolio projects. All content is managed through local TypeScript configuration — no CMS required.

## Data Location

| File | Purpose |
|------|---------|
| `data/projects.ts` | Project entries (title, links, tech stack, media, deploy URL) |
| `types/project.ts` | TypeScript interfaces for type-safe project config |

Edit `data/projects.ts` to add or update projects. The site reads this file at build time.

---

## Adding Screenshots

### Step 1 — Save the image

Place screenshot files in `public/projects/`:

```
public/
  projects/
    my-project.png
    my-project-hero.webp
```

Files in `public/` are served at the root URL (`/projects/my-project.png`).

### Step 2 — Reference in project config

```typescript
media: [
  {
    type: "screenshot",
    src: "/projects/my-project.png",
    alt: "My Project dashboard screenshot",
    width: 1200,   // optional — reduces layout shift with next/image
    height: 800,
  },
],
```

Screenshots appear below the live preview (if hosted) or as the primary visual when no `deployUrl` is set.

---

## Live Deployment Preview (Vercel-style)

When a project is hosted, set `deployUrl` to render an iframe preview with browser chrome — similar to Vercel deployment cards.

```typescript
{
  id: "my-app",
  title: "My App",
  deployUrl: "https://my-app.vercel.app/",
  // ...
}
```

The `<ProjectLivePreview />` component:

- Shows a browser-style frame with traffic-light dots and the hostname
- Embeds the live site in an iframe
- Falls back to the screenshot if the site blocks iframe embedding (X-Frame-Options)
- Clicking the preview opens the site in a new tab

**Note:** Some hosts (Firebase, etc.) may block iframe embedding. In that case the screenshot fallback is shown automatically.

---

## Mermaid Diagrams

Add architecture or flow diagrams using Mermaid syntax — rendered interactively in the browser (no external iframe).

### Step 1 — Write Mermaid chart syntax

Use any [Mermaid diagram type](https://mermaid.js.org/intro/): `flowchart`, `sequenceDiagram`, `classDiagram`, etc.

### Step 2 — Add to project config

```typescript
media: [
  {
    type: "mermaid",
    title: "System Architecture",   // optional label
    chart: `flowchart TD
    Client["React App"]
    API["Django REST API"]
    DB["PostgreSQL"]
    Client --> API
    API --> DB`,
  },
],
```

Use template literals (backticks) for multi-line charts. Keep indentation consistent inside the string.

### Tips

- Test charts at [mermaid.live](https://mermaid.live) before adding them
- Wrap node labels in quotes if they contain special characters: `Node["My Label"]`
- Diagrams re-render automatically when you change the `chart` string

---

## Bento Grid Layout

Projects are displayed in a single variable grid (`ProjectsSection`). Control card size with:

```typescript
gridColSpan: 1 | 2,   // columns spanned on md+ (default 1)
gridRowSpan: 1 | 2,   // rows spanned on md+ (default 1)
```

Example: a featured project spanning 2×2:

```typescript
gridColSpan: 2,
gridRowSpan: 2,
```

---

## Component Hierarchy

```
app/page.tsx
├── SkyBackground
├── Navbar
└── main
    ├── HeroSection
    ├── ProjectsSection          ← single bento grid, all projects
    │   └── ProjectCard
    │       ├── ProjectLivePreview  ← when deployUrl is set
    │       └── ProjectMedia        ← screenshot or Mermaid diagram
    └── ContactSection

app/personal/page.tsx            ← ideas page (markdown, high-contrast card)
```

| Component | File | Purpose |
|-----------|------|---------|
| Live preview | `app/components/ProjectLivePreview.tsx` | Vercel-style iframe embed |
| Screenshots & diagrams | `app/components/ProjectMedia.tsx` | Routes to image or Mermaid |
| Mermaid renderer | `app/components/MermaidDiagram.tsx` | Client-side diagram rendering |
| Card layout | `app/components/ProjectCard.tsx` | Bento card, media grid, actions |
| Section grid | `app/components/ProjectsSection.tsx` | Single projects bento grid |

---

## Media Type Reference

```typescript
interface ProjectScreenshot {
  type: "screenshot";
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface ProjectMermaid {
  type: "mermaid";
  chart: string;      // Mermaid source syntax
  title?: string;
}

type ProjectMediaItem = ProjectScreenshot | ProjectMermaid;
```

---

## Adding a New Project (Checklist)

1. Add screenshot(s) to `public/projects/`.
2. Set `deployUrl` if the project is hosted.
3. Add an optional Mermaid architecture diagram to `media`.
4. Append a new entry to `projects` in `data/projects.ts`.
5. Set `gridColSpan` / `gridRowSpan` for bento sizing.
6. Run `npm run dev` to preview.
