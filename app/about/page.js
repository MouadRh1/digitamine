import AboutFinalCTASection from "../components/about/AboutFinalCTASection";
import AboutHeroSection from "../components/about/AboutHeroSection";
import ConvictionSection from "../components/about/ConvictionSection";
import EquipeSection from "../components/about/EquipeSection";
import ManiereTravaillerSection from "../components/about/ManiereTravaillerSection";
import PrincipesDecisionsSection from "../components/about/PrincipesDecisionsSection";

export const metadata = {
  title: "À propos — DIGITAMINE",
  description: "Une agence de systèmes. Une équipe profondément humaine.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#050505]">
      <AboutHeroSection />
      <ConvictionSection/>
      <EquipeSection/>
      <ManiereTravaillerSection/>
      <PrincipesDecisionsSection/>
      <AboutFinalCTASection/>
      {/* <ApprocheSection /> */}
      {/* <TeamSection /> */}
      {/* <FinalCTASection /> */}
    </div>
  );
}