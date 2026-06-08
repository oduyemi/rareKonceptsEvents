import { ContactHero } from "@/components/contact/Hero";
import { ContactInfo } from "@/components/contact/Info";
import { ContactForm } from "@/components/contact/Form";


export default function Contact() {
  return (
    <div>
      <main>
        <ContactHero />
        <ContactInfo />
        <ContactForm />
      </main>
    </div>
  );
}
