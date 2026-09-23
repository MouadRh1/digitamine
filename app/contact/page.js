import ContactHeroSection from "../components/contact/ContactHeroSection";
import ContactProcessSection from "../components/contact/ContactProcessSection";
import ReassuranceSection from "../components/contact/ReassuranceSection";

export const metadata = {
  title: "Contact — DIGITAMINE",
  description: "Parlons de votre situation. Pas seulement du livrable.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#050505]">
      <ContactHeroSection />
      <ContactProcessSection/>
      <ReassuranceSection/>
      {/* <ContactFormSection /> */}
      {/* <ContactInfoSection /> */}
    </div>
  );
}