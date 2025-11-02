import { Poppins } from "../../../components/ui/Text";
import { Mail, Instagram, YoutubeIcon, LucideLinkedin } from "lucide-react";
import { Link } from "react-router-dom";
import logoHimti from "../../../core/assets/images/himti-logo.png";
import buttonPlaystore from "../../../core/assets/images/button-playstore.png";
import buttonAppstore from "../../../core/assets/images/button-appstore.png";

export default function ModernFooter() {
  // Url HIMTI Apps
  const APP_STORE_URL = "https://apps.apple.com/us/app/example/id1234567890";
  const GOOGLE_PLAY_URL =
    "https://play.google.com/store/apps/details?id=or.id.himtiumt.himtiapp";

  return (
    <footer className="bg-gradient-to-r from-[#4C76A3] to-[#203D5D] shadow-[#466c8e] text-gray-800">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8">
          <div className="md:col-span-4 lg:col-span-3 space-y-4">
            <div className="flex items-center gap-2">
              <img src={logoHimti} alt="HIMTI" className="h-10" />
              <Poppins className="text-xl font-bold text-white">
                HIMTI UMT
              </Poppins>
            </div>
            <Poppins className="text-gray-100 text-sm leading-relaxed">
              Berkolaborasi, berbagi ilmu, dan mengembangkan potensi teknologi.
            </Poppins>
            <div className="flex space-x-4 pt-2">
              <a
                href="mailto:himti.umt11@gmail.com"
                aria-label="gmail"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 hover:text-blue-600 transition-colors"
              >
                <Mail size={22} />
              </a>
              <a
                href="https://instagram.com/himtiumt/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-100 hover:text-pink-500 transition-colors"
              >
                <Instagram size={22} />
              </a>
              <a
                href="https://youtube.com/himtiumt"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-gray-100 hover:text-red-600 transition-colors"
              >
                <YoutubeIcon size={22} />
              </a>
              <a
                href="https://linkedin.com/company/himtiumt"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 hover:text-blue-700 transition-colors"
              >
                <LucideLinkedin size={22} />
              </a>
            </div>
          </div>

          {/* Space Jarak */}
          <div className="hidden md:block md:col-span-1"></div>

          <div className="md:col-span-2">
            <Poppins className="font-semibold text-white tracking-wider">
              Navigasi
            </Poppins>
            <nav className="mt-4 space-y-3">
              <Link to="/" className="block text-gray-100 hover:text-white">
                Home
              </Link>
              <Link
                to="/tentang"
                className="block text-gray-100 hover:text-white"
              >
                Tentang
              </Link>
              <Link
                to="/dosen"
                className="block text-gray-100 hover:text-white"
              >
                Dosen
              </Link>
            </nav>
          </div>

          <div className="md:col-span-2">
            <Poppins className="font-semibold text-white tracking-wider">
              Kegiatan
            </Poppins>
            <nav className="mt-4 space-y-3">
               <Link
                to="/agenda"
                className="block text-gray-100 hover:text-white"
              >
                Agenda
              </Link>
              <Link
                to="/materi"
                className="block text-gray-100 hover:text-white"
              >
                Materi
              </Link>
              <Link
                to="/tutorial"
                className="block text-gray-100 hover:text-white"
              >
                Tutorial
              </Link>
            </nav>
          </div>

           <div className="md:col-span-2">
            <Poppins className="font-semibold text-white tracking-wider">
              Layanan
            </Poppins>
            <nav className="mt-4 space-y-3">
              <Link
                to="/klinik"
                className="block text-gray-100 hover:text-white"
              >
                Klinik
              </Link>
              <Link
                to="/sertifikat"
                className="block text-gray-100 hover:text-white"
              >
                Sertifikat
              </Link>
                 <Link
                to="/pendaftaran"
                className="block text-gray-100 hover:text-white"
              >
                Pendaftaran
              </Link>
            </nav>
          </div>
          
          <div className="md:col-span-2">
            <Poppins className="font-semibold text-white tracking-wider">
              Download App
            </Poppins>
            <div className="mt-4 flex flex-col items-start gap-2">
              <a
                href={GOOGLE_PLAY_URL}
                className="transition-transform hover:scale-105 flex items-center justify-center"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img
                  src={buttonPlaystore}
                  alt="Get it on Google Play"
                  className="h-14"
                />
              </a>
              <a
                href={APP_STORE_URL}
                className="transition-transform hover:scale-105 flex items-center justify-center"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img
                  src={buttonAppstore}
                  alt="Download on the App Store"
                  className="h-14"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bagian Copyright yang Direvisi */}
        <div className="mt-12 border-t border-gray-200/20"></div>
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <Poppins className="text-gray-300 mt-4 md:mt-0">
            © {new Date().getFullYear()} HIMTI UMT. All Rights Reserved.
          </Poppins>
          <Poppins className="text-gray-300 mt-4 md:mt-0">
           Made with ❤️ and passion — Litbang HIMTI UMT
          </Poppins>
        </div>
      </div>
    </footer>
  );
}