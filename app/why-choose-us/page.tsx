import { WhyChooseExperience } from "@/components/why/Experience";
import { WhyChooseFeatures } from "@/components/why/Features";
import { WhyHero } from "@/components/why/Hero";
import { WhyChooseCTA } from "@/components/why/CTA";


export default function Why() {
  return (
    <div>
      <main>
        <WhyHero />
        <WhyChooseExperience />
        <WhyChooseFeatures />
        <WhyChooseCTA />
      </main>
    </div>
  );
}
