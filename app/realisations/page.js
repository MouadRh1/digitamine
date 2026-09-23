import RealisationsHeroSection from "../components/realisations/RealisationsHeroSection";
import RealisationsGridSection from "../components/realisations/RealisationsGridSection";
import SelectionNoteSection from "../components/realisations/SelectionNoteSection";
import FinalCTASection from "../components/realisations/FinalCTASection";

export const metadata = {
  title: "Réalisations — DIGITAMINE",
  description: "Voir le travail. Comprendre le système.",
};

export default function RealisationsPage() {
  return (
    <div className="bg-[#050505]">
      <RealisationsHeroSection />
      <RealisationsGridSection />
      <SelectionNoteSection />
      <FinalCTASection />
      {/* <RealisationsGridSection /> */}
      {/* <FinalCTASection /> */}
    </div>
  );
}