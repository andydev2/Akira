import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.akiradev.online'),
  title: {
    default: "AkiraDev — Full Stack Developer",
    template: "%s | AkiraDev"
  },
  description:
    "Building thoughtful digital experiences through code, design and technology. Full Stack Developer based in Ecuador specializing in React, Next.js, and Node.js.",
  keywords: [
    "Akira Dev",
    "AkiraDev",
    "Full Stack Developer",
    "React developer",
    "Next.js developer",
    "TypeScript",
    "Portfolio",
    "Ecuador",
    "Frontend Developer",
    "Backend Developer",
    "Web Development"
  ],
  authors: [{ name: "Andy Mendoza", url: "https://github.com/andydev2" }],
  creator: "Andy Mendoza",
  formatDetection: { telephone: false, date: false, email: false, address: false },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "AkiraDev (Andy Mendoza) — Full Stack Developer",
    description:
      "Building thoughtful digital experiences through code, design and technology.",
    type: "website",
    url: "https://www.akiradev.online",
    siteName: "AkiraDev Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AkiraDev (Andy Mendoza) — Full Stack Developer",
    description:
      "Building thoughtful digital experiences through code, design and technology.",
    creator: "@akiradev",
  },
};

import { ThemeProvider } from "../context/ThemeContext";
import { LanguageProvider } from "../context/LanguageContext";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body suppressHydrationWarning className="min-h-screen bg-background text-foreground font-sans antialiased transition-colors duration-300">
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
