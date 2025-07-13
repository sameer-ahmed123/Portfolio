import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sameer Ahmed Jan",
  description:
    "Welcome to my portfolio! I am a passionate full-stack developer who bridges the gap between frontend and backend development. Specializing in creating complete web solutions, from beautiful user interfaces to complete n secure Backends.",
  keywords: [
    "Full-Stack Developer",
    "Software Engineer",
    "Frontend Development",
    "Backend Development",
    "React",
    "Next.js",
    "HTML",
    "CSS",
    "JavaScript",
    "python",
    "django",
    "django rest framework",
    "TypeScript",
    "Database Design",
    "API Development",
    "Web Development",
    "Sameer Ahmed Jan",
  ],
  authors: [{ name: "Sameer Ahmed" }],
  creator: "Sameer Ahmed Jan",
  openGraph: {
    title: "Sameer Ahmed jan - Full-Stack Developer Portfolio",
    description:
      "Passionate full-stack developer creating complete web solutions. Explore my projects and technical expertise across the entire development stack.",
    url: "https://your-domain.com",
    siteName: "sameer ahmed  - Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "sameer ahmed - Full-Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "[Your Name] - Full-Stack Developer",
  //   description:
  //     "Passionate full-stack developer creating complete web solutions. Explore my projects and technical expertise across the entire development stack.",
  //   creator: "@yourusername",
  //   images: ["/og-image.jpg"],
  // },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
