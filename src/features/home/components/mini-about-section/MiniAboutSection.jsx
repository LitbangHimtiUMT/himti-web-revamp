import RotatingText from "./RotatingText";
import ImageReveal from "./ImageReveal";
import { Poppins } from "../../../../components/ui/Text";
import { Button } from "../../../../components/ui/Button";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function MiniAboutTitle() {
  return (
    <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 overflow-hidden animate-fade-in-up">
      {/* Grid konten */}
      <div className="relative grid gap-5 row-gap-8 lg:grid-cols-2 z-10">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4 flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <Poppins className="text-gray-900">HIMTI</Poppins>
              <RotatingText
                texts={["Berkarya", "Berinovasi", "Bisa Bisa Jaya!"]}
                mainClassName="px-2 sm:px-2 md:px-3 bg-gradient-to-r from-[#4C76A3] to-yellow-500 text-black font-semibold overflow-hidden py-0.5 sm:py-1 md:py-2 rounded-lg shadow-md"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </h1>

            <Poppins className="text-base text-gray-600 md:text-lg text-center sm:text-left">
              Himpunan Mahasiswa Teknik Informatika Universitas Muhammadiyah
              Tangerang atau HIMTI - UMT adalah himpunan kampus yang tidak hanya
              berfokus pada organisasi saja tetapi terhadap akademik juga,
              bahkan tujuan utama HIMTI yaitu untuk meningkatkan nilai akademik
              Mahasiswa Teknik Informatika Universitas Muhammadiyah Tangerang.
            </Poppins>

            <div className="mt-8 flex justify-center sm:justify-start">
              <NavLink to="/tentang">
                <Button variant="secondary" size="lg" rounded="full">
                  <div className="flex items-center gap-2 px-4">
                    <span>Baca Selengkapnya</span>
                    <ArrowRight size={18} />
                  </div>
                </Button>
              </NavLink>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <ImageReveal />
        </div>
      </div>
    </div>
  );
}
