import ServicesHeroSection from "../components/services/ServicesHeroSection";
import SystemeIntroSection from "../components/services/SystemeIntroSection";
import ServicesListSection from "../components/services/ServicesListSection";
import FormatsTravailSection from "../components/services/FormatsTravailSection";
import ProchainPasSection from "../components/services/ProchainPasSection";

export const metadata = {
  title: "Services — DIGITAMINE",
  description: "Des expertises précises. Un système cohérent.",
};

export default function ServicesPage() {
  return (
    <div className="bg-[#050505]">
      <ServicesHeroSection />
      <SystemeIntroSection/>
      <ServicesListSection/>
      <FormatsTravailSection/>
      <ProchainPasSection/>
      {/* <ServicesListSection /> */}
      {/* <ProcessSection /> */}
      {/* <FinalCTASection /> */}
    </div>
  );
}