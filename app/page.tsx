import { Gallery } from "@/components/home/Gallery";
import {Hero} from "@/components/home/Hero";
import {OurPackages} from "@/components/home/OurPackages";
import { OurServices } from "@/components/home/OurServices";
import {TrustedExperience} from "@/components/home/TrustedExperience";
import { Testimonials } from "@/components/testimonials/index";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <TrustedExperience />
        <OurServices />
        <OurPackages />
        <Gallery />
        <Testimonials />
      </main>
    </div>
  );
}
