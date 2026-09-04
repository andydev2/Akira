import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";
import BentoGrid from "@/components/BentoGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Accessible skip link */}
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-slate-950 focus:font-semibold focus:rounded-xl focus:shadow-2xl focus:outline-none focus:ring-2 focus:ring-accent"
      >
        Skip to content
      </a>

      {/* Decorative ambient background */}
      <AnimatedBackground />

      {/* Navigation Landmark */}
      <header>
        <Navbar />
      </header>

      {/* Main Landmark */}
      <main id="content" tabIndex={-1} className="outline-none">
        <BentoGrid />
      </main>

      {/* Footer Landmark */}
      <Footer />
    </div>
  );
}
