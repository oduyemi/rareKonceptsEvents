import { ConnectHero } from "@/components/connect/Hero";
import { SocialPlatformsSection } from "@/components/connect/ShowcaseCards";
import { SocialContactSection } from "@/components/connect/Contact";


export default function Socials() {
  return (
    <div>
      <main>
        <ConnectHero />
        <SocialPlatformsSection />
        <SocialContactSection />
      </main>
    </div>
  );
}
