import { OurServices } from "@/components/home/OurServices";
import { ServicesHero } from "@/components/services/Hero";
import { Testimonials } from "@/components/testimonials/index";



export default function ServicesWa() {
  return (
    <div>
      <main>
        <ServicesHero />
        <OurServices />
        <Testimonials />
      </main>
    </div>
  );
}
