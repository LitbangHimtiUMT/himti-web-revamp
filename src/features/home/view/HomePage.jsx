import HeroSection from "../components/hero-section/HeroSection";
import BannerSection from "../components/hero-section/BannerSection";
import MiniAboutSection from "../components/mini-about-section/MiniAboutSection";
import LatestAgendaSection from "../components/latest-agenda-section/LatestAgendaSection";
import LatestTutorialSection from "../components/latest-tutorials-section/LatestTutorialsSection";
import PrestasiSection from "../components/prestasi-section/PrestasiSection";
import ProgramSection from "../components/program-section/ProgramSection";
import AlumniSection from "../components/alumni-section/AlumniSection";
import FaqSection from "../components/faq-section/FaqSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BannerSection />
      <div id="mini-about">
      <MiniAboutSection />
      </div>
      <LatestAgendaSection />
      <LatestTutorialSection />
      <PrestasiSection />
      <ProgramSection />
      <AlumniSection />
      <FaqSection />
    </>
  );
}
