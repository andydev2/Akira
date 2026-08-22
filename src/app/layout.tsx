import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "AkiraDev | Fullstack Developer & Web Architect",
  description: "I bridge complex backend architectures with pixel-perfect, high-performance web experiences. Expert in Next.js, React, Node.js, and Cloud Infrastructure.",
  keywords: ["AkiraDev", "Fullstack Developer", "Web Architect", "Next.js", "React", "TypeScript", "Node.js", "Software Engineer", "Freelance Developer"],
  authors: [{ name: "AkiraDev" }],
  creator: "AkiraDev",
  publisher: "AkiraDev",
  robots: "index, follow",
  metadataBase: new URL("https://www.akiradev.online"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AkiraDev | Fullstack Developer & Web Architect",
    description: "I bridge complex backend architectures with pixel-perfect, high-performance web experiences.",
    url: "https://www.akiradev.online",
    siteName: "AkiraDev",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AkiraDev Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AkiraDev | Fullstack Developer & Web Architect",
    description: "I bridge complex backend architectures with pixel-perfect, high-performance web experiences.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "AkiraDev",
    url: "https://www.akiradev.online",
    jobTitle: "Fullstack Developer & Web Architect",
    sameAs: [
      "https://www.instagram.com/akiradev78/",
      "https://www.facebook.com/Akirashiraishi78/?locale=es_LA",
      "https://wa.me/593998386973",
    ]
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
