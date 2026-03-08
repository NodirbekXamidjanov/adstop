import { HeroSection, ServiceSection } from "./components";
import { Navbar } from "./components/navbar";
import { HowItWorksSection } from "./components/work";
import { Footer } from "./components/footer";

export function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <ServiceSection />
      <Footer />
    </>
  );
}
