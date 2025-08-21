import HeroSection from "../components/hero-section/HeroSection";
import MiniAboutSection from "../components/mini-about-section/MiniAboutSection";
import PrestasiSection from "../components/prestasi-section/PrestasiSection";
import ProgramSection from "../components/program-section/ProgramSection";
import AlumniSection from "../components/alumni-section/AlumniSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MiniAboutSection />
      <PrestasiSection />
      <ProgramSection />
      <AlumniSection />
    </>
  );
}
