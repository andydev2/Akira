import IdentityCard from "./cards/IdentityCard";
import JourneyCard from "./cards/JourneyCard";
import AboutCard from "./cards/AboutCard";
import ProjectsCard from "./cards/ProjectsCard";
import StackCard from "./cards/StackCard";
import CapabilitiesCard from "./cards/CapabilitiesCard";
import CodeCard from "./cards/CodeCard";
import LocationCard from "./cards/LocationCard";
import SocialCard from "./cards/SocialCard";
import ContactCard from "./cards/ContactCard";

export default function BentoGrid() {
  return (
    <section className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-20 sm:pb-28">
      {/* 
        Grid layout:
        - Mobile (<768px): single column, 4-col subgrid for smaller pairs
        - Tablet (768-1023px): 8 columns 
        - Desktop (≥1024px): 12 columns full bento
      */}
      <div
        className="grid gap-3.5 sm:gap-4 grid-cols-4 md:grid-cols-8 lg:grid-cols-12"
      >
        {/* Identity — large hero card */}
        <div className="col-span-4 md:col-span-5 lg:col-span-5 md:row-span-2">
          <IdentityCard />
        </div>

        {/* Journey */}
        <div className="col-span-4 md:col-span-3 lg:col-span-4">
          <JourneyCard />
        </div>

        {/* Projects — tall card, spans 3 rows on desktop */}
        <div className="col-span-4 md:col-span-4 lg:col-span-3 lg:row-span-3 md:row-span-2 order-1 md:order-none">
          <ProjectsCard />
        </div>

        {/* About */}
        <div className="col-span-4 md:col-span-4 lg:col-span-4">
          <AboutCard />
        </div>

        {/* Capabilities */}
        <div className="col-span-2 md:col-span-3 lg:col-span-3">
          <CapabilitiesCard />
        </div>

        {/* Code */}
        <div className="col-span-2 md:col-span-2 lg:col-span-2">
          <CodeCard />
        </div>

        {/* Stack — tall card, spans 2 rows on desktop */}
        <div className="col-span-4 md:col-span-4 lg:col-span-4 lg:row-span-2">
          <StackCard />
        </div>

        {/* Location */}
        <div className="col-span-2 md:col-span-3 lg:col-span-3">
          <LocationCard />
        </div>

        {/* Social */}
        <div className="col-span-2 md:col-span-2 lg:col-span-2">
          <SocialCard />
        </div>

        {/* Contact */}
        <div className="col-span-4 md:col-span-3 lg:col-span-3">
          <ContactCard />
        </div>
      </div>
    </section>
  );
}
