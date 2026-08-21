import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "astro-blog",
    title: "My Astro Blog",
    description:
      "A simple blog site built with Astro, using Markdown and MDX for efficient content management and static site generation.",
    category: "frontend",
    status: "available",
    techStack: ["Astro", "Markdown", "MDX", "CSS", "Vercel"],
    highlights: [
      "Astro for static site generation",
      "Markdown/MDX content collections",
      "Component-based UI with Astro islands",
      "Deployed on Vercel",
    ],
    links: [
      {
        label: "Visit Blog",
        href: "https://astro-blog-eosin-phi.vercel.app/",
        external: true,
      },
    ],
    deployUrl: "https://astro-blog-eosin-phi.vercel.app/",
    media: [
      {
        type: "screenshot",
        src: "/projects/astro-blog.svg",
        alt: "Astro Blog homepage screenshot",
        width: 1200,
        height: 800,
      },
      {
        type: "mermaid",
        title: "Architecture",
        chart: `flowchart TD
    Browser["User Browser"]
    Astro["Astro SSG"]
    Content["MDX / Markdown"]
    Vercel["Vercel Hosting"]
    Browser --> Astro
    Astro --> Content
    Astro --> Vercel`,
      },
    ],
    gridColSpan: 4,
    gridRowSpan: 1,
  },
  {
    id: "cineview",
    title: "CineView",
    description:
      "A dynamic movie discovery platform built with React and Firebase, allowing users to search, filter, and explore films and TV shows.",
    category: "fullstack",
    status: "available",
    techStack: ["React", "Firebase", "TMDB API", "Axios", "React Router"],
    highlights: [
      "React UI with React Router navigation",
      "TMDB API for movie/TV data",
      "Firebase Auth, Firestore & Storage",
      "Deployed on Firebase Hosting",
    ],
    links: [
      {
        label: "Open CineView",
        href: "https://cineview-f70fd.web.app/",
        external: true,
      },
    ],
    deployUrl: "https://cineview-f70fd.web.app/",
    media: [
      {
        type: "screenshot",
        src: "/projects/cineview.svg",
        alt: "CineView movie discovery app screenshot",
        width: 1200,
        height: 800,
      },
      {
        type: "mermaid",
        title: "System Architecture",
        chart: `flowchart TD
    UI["React Frontend"]
    TMDB["TMDB API"]
    Firebase["Firebase Auth / Firestore"]
    Hosting["Firebase Hosting"]
    UI --> TMDB
    UI --> Firebase
    UI --> Hosting`,
      },
    ],
    gridColSpan: 8,
    gridRowSpan: 1,
  },
  {
    id: "smartlearn",
    title: "SmartLearn",
    description:
      "An AI-powered personalized learning platform that adapts educational paths based on student performance, assessment results, and learning activity. Features role-based access for students, instructors, and admins.",
    category: "fullstack",
    status: "available",
    techStack: [
      "React",
      "TypeScript",
      "Python",
      "Django",
      "Django REST Framework",
      "MySQL",
      "AI / ML",
    ],
    highlights: [
      "Client-server architecture with React & TypeScript frontend and Django REST Framework backend",
      "AI-assisted learning engine providing adaptive recommendations and educational content support",
      "Role-based access control (RBAC) supporting Students, Instructors, and Administrators",
      "Relational MySQL database storing courses, quizzes, assessment results, and progress metrics",
    ],
    links: [
      {
        label: "SmartLearn Source Code",
        href: "https://github.com/sameer-ahmed123/SmartLearn",
        external: true,
      },
    ],
    media: [
      {
        type: "screenshot",
        src: "/projects/smartlearn.png",
        alt: "SmartLearn AI-Powered Learning Platform screenshot",
        width: 1200,
        height: 800,
      },
      {
        type: "mermaid",
        title: "System Architecture",
        chart: `flowchart TD
    subgraph PL ["PRESENTATION LAYER"]
        ReactTS["React + TypeScript"]
        SUI["Student UI"]
        IUI["Instructor UI"]
        AUI["Admin Panel"]
        ReactTS --> SUI
        ReactTS --> IUI
        ReactTS --> AUI
    end

    subgraph API ["API / BACKEND LAYER"]
        DjangoDRF["Django + DRF"]
        Auth["Auth & User Mgmt"]
        Course["Courses & Lessons"]
        Assess["Assessments & Quizzes"]
        Prog["Progress Tracking"]
        DjangoDRF --> Auth
        DjangoDRF --> Course
        DjangoDRF --> Assess
        DjangoDRF --> Prog
    end

    subgraph DL ["DATA LAYER"]
        MySQL[("MySQL Database")]
    end

    subgraph AIL ["AI LAYER"]
        AISer["AI / ML Services"]
    end

    PL -->|"HTTP / JSON"| API
    API --> DL
    API --> AIL`,
      },
    ],
    gridColSpan: 12,
    gridRowSpan: 1,
  },
  {
  id: "mariam-crockery",
  title: "Mariam Crockery",
  description:
    "A dual-backend e-commerce platform built to seamlessly toggle between a Shopify Headless architecture (Storefront API) and a custom Firebase backend, featuring real-time inventory, custom bundle deals, dynamic filtering, an admin dashboard, and direct WhatsApp ordering.",
  category: "fullstack",
  status: "available",
  techStack: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Shopify Storefront API",
    "Firebase",
    "GraphQL",
    "Vercel",
  ],
  highlights: [
    "Dual-backend system supporting both Shopify Headless API and custom Firebase Firestore modes",
    "Dedicated Firebase Admin Panel for live product catalog updates and order delivery tracking",
    "Responsive interactive catalog with sticky filter sidebar and real-time category mapping",
    "Product Detail Modal with sticky image gallery scrolling and dynamic bundle/frequently-bought-together listings",
    "Integrated multi-channel checkout with Shopify hosted checkout, native Firebase order management, and direct WhatsApp order flow",
    "Secure client session handling and GDPR-compliant cookie consent system",
  ],
  links: [
    {
      label: "Visit Store",
      href: "https://mariamcrockery.vercel.app/",
      external: true,
    },
  ],
  deployUrl: "https://mariamcrockery.vercel.app/",
  media: [
    {
      type: "screenshot",
      src: "/projects/mariam-crockery.png",
      alt: "Mariam Crockery e-commerce storefront screenshot",
      width: 1200,
      height: 800,
    },
    {
      type: "mermaid",
      title: "Dual-Backend & Firebase Admin Architecture",
      chart: `flowchart TD
    subgraph Frontend ["Next.js Frontend (Vercel)"]
        UI["Storefront Catalog & Modals"]
        Cart["Cart & Checkout Engine"]
        AdminUI["Custom Firebase Admin Panel"]
    end

    subgraph ShopifyEngine ["Shopify Mode"]
        SFAPI["Storefront API (GraphQL)"]
        ShopifyCheckout["Shopify Hosted Payment"]
    end

    subgraph FirebaseEngine ["Firebase Mode"]
        Firestore[("Firestore Database")]
        FirebaseAuth["Firebase Auth (Admin/Users)"]
        CustomCheckout["Custom Checkout & Order Flow"]
        DirectWhatsApp["WhatsApp Order Direct"]
    end

    UI -->|"Shopify Mode"| SFAPI
    Cart -->|"Checkout Redirect"| ShopifyCheckout

    UI -->|"Firebase Mode"| Firestore
    Cart -->|"Native Order Flow"| CustomCheckout
    CustomCheckout -->|"Store Order"| Firestore
    Cart -->|"Direct Checkout"| DirectWhatsApp

    AdminUI -->|"Authenticate"| FirebaseAuth
    AdminUI -->|"Manage Catalog & Orders"| Firestore`,
    },
  ],
  gridColSpan: 12,
  gridRowSpan: 1,
}
];
