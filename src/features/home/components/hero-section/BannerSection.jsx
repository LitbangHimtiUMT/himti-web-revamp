import logoHimti from "/images/himti-logo.png";
import { Poppins } from "../../../../components/ui/Text";
import { ScrollingBanner } from "./ScrollingBanner";
import {
  GraduationCap,
  Users,
  Laptop,
  Trophy,
  ArrowRight,
} from "lucide-react";
import { Button } from "../../../../components/ui/Button";
import { Link } from "react-router";

export default function BannerSection() {
  const bannerContent = (
    <div className="flex items-center gap-x-8 text-white whitespace-nowrap">
      {/* Logo & Heading */}
      <div className="flex items-center gap-3">
        <div className="bg-white rounded-full p-1 flex items-center justify-center">
          <img
            src={logoHimti}
            alt="himti-logo"
            className="h-9 w-9 object-contain"
            loading="lazy"
          />
        </div>

        <Poppins className="font-bold text-md">
          HIMTI UNIVERSITAS MUHAMMADIYAH TANGERANG
        </Poppins>

        <Poppins className="text-sm leading-6 opacity-80">
          Wadah pengembangan akademik, teknologi, inovasi, dan kolaborasi
          mahasiswa Teknik Informatika.
        </Poppins>
      </div>

      {/* Menu Banner */}
      <div className="flex items-center gap-x-6 text-sm">
        <span className="flex items-center gap-2">
          <GraduationCap size={16} />
          Akademik
        </span>

        <span className="flex items-center gap-2">
          <Laptop size={16} />
          Teknologi
        </span>

        <span className="flex items-center gap-2">
          <Users size={16} />
          Organisasi
        </span>

        <span className="flex items-center gap-2">
          <Trophy size={16} />
          Prestasi
        </span>

        <Button variant="secondary" size="sm" rounded="full">
          <div className="flex items-center gap-2 px-1">
            <Link to="/tentang-kami">Jelajahi HIMTI</Link>
            <ArrowRight size={18} />
          </div>
        </Button>
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-r from-[#f1c857] to-[#2b6394] rounded-full mx-auto max-w-6xl my-8 animate-fade-in-up">
      <div className="relative isolate overflow-hidden px-2 py-1">
        <ScrollingBanner
          items={[bannerContent, bannerContent]}
          direction="left"
          speed="normal"
        />
      </div>
    </div>
  );
}