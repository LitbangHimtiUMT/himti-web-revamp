import MainLayout from "../../layout/view/MainLayout"
import HeroSection from "../components/HeroSection";
import FeatureList from "../components/FeatureList";
import useHomeData from "../hooks/useHomeData";
import SharingSection from "../../sharing/views/SharingPage"

export default function HomePage() {
  const features = useHomeData();

  return (
    <MainLayout>
      <HeroSection />
      {features.length === 0 ? (
        <p className="text-center py-10 text-gray-500">Loading features...</p>
      ) : (
        <FeatureList features={features} />
      )}
      <SharingSection></SharingSection>
    </MainLayout>
  );
}
