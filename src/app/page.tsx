import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";
import BentoGrid from "@/components/BentoGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <BentoGrid />
      <Footer />
    </main>
  );
}
