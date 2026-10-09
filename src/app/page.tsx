import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import ServicesPreview from "@/components/home/ServicesPreview";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import WhyInvest from "@/components/home/WhyInvest";
import HowWeWork from "@/components/home/HowWeWork";
import BuyersGuide from "@/components/home/BuyersGuide";
import Testimonials from "@/components/home/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Stats />
        <ServicesPreview />
        <ProjectsPreview />
        <WhyInvest />
        <HowWeWork />
        <BuyersGuide />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}