import { useKlinik } from '../hooks/useKlinik';
import LoadingStatus from '../../../components/LoadingStatus';
import ErrorStatus from '../../../components/ErrorStatus';
import HeroSection from '../components/HeroSection';
import FeaturedSection from '../components/FeaturedSection';
import MerchandiseSection from '../components/MerchandiseSection';
import ServiceSection from '../components/ServiceSection'; 
import FAQSection from '../components/FAQSection';
import ContactSection from '../../about/components/contact-section/ContactSection';

const KlinikPage = () => {
  const { loading, error, merchandise, fetchData } = useKlinik();

  if (loading) {
    return <LoadingStatus message="Memuat halaman Klinik..." />;
  }

  if (error) {
    return <ErrorStatus message={error} onRetry={fetchData} />;
  }

  return (
    <div>
      <HeroSection />
      <MerchandiseSection merchandise={merchandise} />
      <FeaturedSection />
      <ServiceSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
};

export default KlinikPage;