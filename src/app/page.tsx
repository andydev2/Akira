import dynamic from "next/dynamic";
import { LazyMotion, domAnimation } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import SmoothScroll from "@/components/ui/SmoothScroll";
import ClientSections from "@/components/sections/ClientSections";

export default function Home() {
  return (
    <SmoothScroll>
      <LazyMotion features={domAnimation}>
        <Navbar />
        <main className="flex min-h-screen flex-col items-center justify-between">
          <div className="w-full">
            <Hero />
            <ClientSections />
          </div>
        </main>
      </LazyMotion>
    </SmoothScroll>
  );
}
