import logoHifest from "../../../../core/assets/images/hifest-logo.png";
import { Poppins } from "../../../../components/ui/Text";
import { ScrollingBanner } from "./ScrollingBanner";
import { Tv, Palette, Trophy, Gamepad2, ArrowRight } from "lucide-react";
import { Button } from "../../../../components/ui/Button";
import { Link } from "react-router";

export default function BannerSection() {
  const bannerContent = (
    <div className="flex items-center gap-x-8 text-white whitespace-nowrap">
      <div className="flex items-center gap-2">
        <div className="bg-white rounded-full p-1 flex items-center justify-center">
          <img
            src={ logoHifest} 
            alt="hifest-logo"
            className="h-9 w-9 object-contain"
            loading="lazy"
          />
        </div>
        <Poppins className="font-bold text-md">HIFEST 2025</Poppins>

        <Poppins className="text-sm leading-6 opacity-80">
          Segera hadir di Universitas Muhammadiyah Tangerang. Jangan sampai
          ketinggalan!
        </Poppins>
      </div>

      <div className="flex items-center gap-x-6 text-sm">
        <span className="flex items-center gap-2">
          <Tv size={16} /> Seminar
        </span>
        <span className="flex items-center gap-2">
          <Palette size={16} /> Lomba UI/UX
        </span>
        <span className="flex items-center gap-2">
          <Trophy size={16} />
          Lomba Futsal
        </span>
        <span className="flex items-center gap-2">
          <Gamepad2 size={16} />
          Lomba Mobile Legends
        </span>
        <Button variant="secondary" size="sm" rounded="full">
          <div className="flex items-center gap-2 px-1">
            <Link to="/pendaftaran">Daftar Sekarang</Link>
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
