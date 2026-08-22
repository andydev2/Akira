"use client";

import dynamic from "next/dynamic";

// Dynamically import below-the-fold components with SSR disabled to reduce initial JS payload and fix TTI on Mobile.
const Projects = dynamic(() => import("@/components/sections/Projects"), { 
  ssr: false,
  loading: () => <div className="min-h-[400vh] bg-black" /> // Placeholder to prevent layout shift
});

const Services = dynamic(() => import("@/components/sections/Services"), { 
  ssr: false,
  loading: () => <div className="min-h-screen bg-background" />
});

const TrackRecord = dynamic(() => import("@/components/sections/TrackRecord"), { 
  ssr: false,
  loading: () => <div className="min-h-[300px] bg-background" />
});

const Testimonials = dynamic(() => import("@/components/sections/Testimonials"), { 
  ssr: false,
  loading: () => <div className="min-h-screen bg-background" />
});

const Footer = dynamic(() => import("@/components/sections/Footer"), { 
  ssr: false,
  loading: () => <div className="min-h-[400px] bg-black" />
});

export default function ClientSections() {
  return (
    <>
      <Projects />
      <Services />
      <TrackRecord />
      <Testimonials />
      <Footer />
    </>
  );
}
