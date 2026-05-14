import { AboutHero } from "@/components/about/Hero";
import { About } from "@/components/about/About";
import { MissionVision } from "@/components/about/MissionVision";
import { CoreValues } from "@/components/about/CoreValues";
import OurTeam from "@/components/about/Team";


export default function Home() {
  return (
    <div>
      <main>
        <AboutHero />
        <About />
        <OurTeam />
        <MissionVision />
        <CoreValues />
      </main>
    </div>
  );
}
