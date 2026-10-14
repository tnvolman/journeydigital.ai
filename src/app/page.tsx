import { About } from "@/components/About";
import { ContactForm } from "@/components/ContactForm";
import { Deliverables } from "@/components/Deliverables";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Journal } from "@/components/Journal";
import { LaunchWeek } from "@/components/LaunchWeek";
import { Nav } from "@/components/Nav";
import { Pricing } from "@/components/Pricing";
import { Services } from "@/components/Services";
import { ValueStrip } from "@/components/ValueStrip";
import { Work } from "@/components/Work";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ValueStrip />
        <Services />
        <Deliverables />
        <LaunchWeek />
        <Work />
        <Pricing />
        <About />
        <Journal />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
