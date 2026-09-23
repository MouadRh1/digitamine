import HeroSection from "./components/home/HeroSection";
import DepartPoint from "./components/home/DepartPointSection";
import SystemeDigitamineSection from "./components/home/SystemeDigitamineSection";
import AgenceHumaineSection from "./components/home/AgenceHumaineSection";
import ExpertisesSection from "./components/home/ExpertisesSection";
import PrincipesSection from "./components/home/PrincipesSection";
import RealisationsSection from "./components/home/RealisationsSection";

import ServicesSection from "./components/home/ServicesSection";
import PortfolioSection from "./components/home/PortfolioSection";
import PrinciplesSection from "./components/home/PrinciplesSection";
import ProcessSection from "./components/home/ProcessSection";
import AboutPreviewSection from "./components/home/AboutPreviewSection";
import FinalCTASection from "./components/home/FinalCTASection";
import ClientsMarqueeSection from "./components/home/ClientsMarqueeSection";

export default function Home() {
  return (
    <div className="bg-[#050505]">
      <HeroSection />
      <DepartPoint/>
      <SystemeDigitamineSection/>
      <AgenceHumaineSection/>
      <ExpertisesSection/>
      <PrincipesSection/>
      <ClientsMarqueeSection/>
      <RealisationsSection/>
      {/* <ServicesSection />
      <PortfolioSection />
      <PrinciplesSection />
      <ProcessSection />
      <AboutPreviewSection />
      <FinalCTASection /> */}
    </div>
  );
}