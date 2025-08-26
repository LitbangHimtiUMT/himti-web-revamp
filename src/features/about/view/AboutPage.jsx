import AboutIntroSection from "../components/about-section/AboutIntroSection";
import SoHimtiSection from "../components/sohimti-section/SoHimti";
import SoProdiSection from "../components/sokaprodi-section/SoProdiSection";
import VisiMisiSection from "../components/visimission-section/VisiMisionSection";
import ContactSection from "../components/contact-section/ContactSection";
function AboutPage() {
  return (
    <>
      <AboutIntroSection />
      <SoProdiSection />
      <SoHimtiSection />
      <VisiMisiSection />
      <ContactSection />
    </>
  );
}

export default AboutPage;
