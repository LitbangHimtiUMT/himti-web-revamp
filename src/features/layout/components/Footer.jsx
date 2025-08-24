import { Poppins } from "../../global/components/Text";
import { Mail, Instagram, YoutubeIcon, LucideLinkedin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../../../public/images/himti-logo.png";

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
              <img src={logo} alt="HIMTI" className="h-10" />
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
                className="text-gray-100 hover:text-blue-600 transition-colors"
              >
                <Mail size={22} />
              </a>
              <a
                href="https://instagram.com/himtiumt/"
                target="_blank"
                aria-label="Instagram"
                className="text-gray-100 hover:text-pink-500 transition-colors"
              >
                <Instagram size={22} />
              </a>
              <a
                href="https://youtube.com/himtiumt"
                target="_blank"
                aria-label="YouTube"
                className="text-gray-100 hover:text-red-600 transition-colors"
              >
                <YoutubeIcon size={22} />
              </a>
              <a
                href="https://likedin.com/himtiumt"
                aria-label="LinkedIn"
                target="_blank"
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
              <Link to="/" className="block text-gray-100 hover:text-black">
                Home
              </Link>
              <Link
                to="/tentang"
                className="block text-gray-100 hover:text-black"
              >
                Tentang
              </Link>
              <Link
                to="/artikel"
                className="block text-gray-100 hover:text-black"
              >
                Artikel
              </Link>
            </nav>
          </div>

          <div className="md:col-span-2">
            <Poppins className="font-semibold text-white tracking-wider">
              Kegiatan
            </Poppins>
            <nav className="mt-4 space-y-3">
              <Link
                to="/sharing"
                className="block text-gray-100 hover:text-black"
              >
                Sharing
              </Link>
              <Link
                to="/tutorial"
                className="block text-gray-100 hover:text-black"
              >
                Tutorial
              </Link>
              <Link
                to="/agenda"
                className="block text-gray-100 hover:text-black"
              >
                Agenda
              </Link>
            </nav>
          </div>

          <div className="md:col-span-2">
            <Poppins className="font-semibold text-white tracking-wider">
              Layanan
            </Poppins>
            <nav className="mt-4 space-y-3">
              <Link
                to="/dosen"
                className="block text-gray-100 hover:text-black"
              >
                Dosen
              </Link>
              <Link
                to="/klinik"
                className="block text-gray-100 hover:text-black"
              >
                Klinik
              </Link>
              <Link
                to="/sertifikat"
                className="block text-gray-100 hover:text-black"
              >
                Sertifikat
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
                className="transition-transform hover:scale-105"
              >
                <img
                  src="/images/button-playstore.png"
                  alt="Get it on Google Play"
                  target="_blank"
                  className="h-14"
                />
              </a>
              <a
                href={APP_STORE_URL}
                className="transition-transform hover:scale-105"
              >
                <img
                  src="/images/button-appstore.png"
                  alt="Download on the App Store"
                  target="_blank"
                  className="h-14"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200"></div>
        <div className="mt-8 flex flex-col md:flex-row-reverse justify-between items-center text-sm">
          <div className="flex space-x-4">
            <Link href="/" className="text-gray-100 hover:text-black">
              Pengaturan Cookies
            </Link>
            <Link href="/tentang" className="text-gray-100 hover:text-black">
              Kebijakan Privasi
            </Link>
            <Link href="/" className="text-gray-100 hover:text-black">
              Syarat & Ketentuan
            </Link>
          </div>
          <Poppins className="text-gray-100 mt-4 md:mt-0">
            © {new Date().getFullYear()} HIMTI UMT. All Rights Reserved.
          </Poppins>
        </div>
      </div>
    </footer>
  );
}
