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
        - Mobile (<768px): 4 columns, full-width cards (col-span-4)
        - Tablet (768-1023px): 8 columns
        - Desktop (≥1024px): 12 columns perfectly balanced per row (7+5, 7+5, 4+4+4, 3+3+6)
      */}
      <div
        className="grid gap-3.5 sm:gap-4 lg:gap-5 grid-cols-4 md:grid-cols-8 lg:grid-cols-12"
      >
        {/* Row 1: Identity & Journey (7 + 5 = 12 cols) */}
        <div className="col-span-4 md:col-span-8 lg:col-span-7">
          <IdentityCard />
        </div>

        <div className="col-span-4 md:col-span-8 lg:col-span-5">
          <JourneyCard />
        </div>

        {/* Row 2: Selected Work & Tech Stack (7 + 5 = 12 cols) */}
        <div className="col-span-4 md:col-span-8 lg:col-span-7">
          <ProjectsCard />
        </div>

        <div className="col-span-4 md:col-span-8 lg:col-span-5">
          <StackCard />
        </div>

        {/* Row 3: Solutions, Code Craft & Philosophy (4 + 4 + 4 = 12 cols) */}
        <div className="col-span-4 md:col-span-4 lg:col-span-4">
          <CapabilitiesCard />
        </div>

        <div className="col-span-4 md:col-span-4 lg:col-span-4">
          <CodeCard />
        </div>

        <div className="col-span-4 md:col-span-8 lg:col-span-4">
          <AboutCard />
        </div>

        {/* Row 4: Location, Socials & Direct Contact (3 + 3 + 6 = 12 cols) */}
        <div className="col-span-4 md:col-span-4 lg:col-span-3">
          <LocationCard />
        </div>

        <div className="col-span-4 md:col-span-4 lg:col-span-3">
          <SocialCard />
        </div>

        <div className="col-span-4 md:col-span-8 lg:col-span-6">
          <ContactCard />
        </div>
      </div>
    </section>
  );
}
