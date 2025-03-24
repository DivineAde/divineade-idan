import Navigation from "@/components/Navigation"
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/About"
import PortfolioSection from "@/components/Portfolio";
import ContactSection from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
