import { Poppins } from "../../../../components/ui/Text";
import { Cover } from "./Cover";
import { FramedPhoto } from "./FramedPhoto";
import himtiBootcamp from "../../../../core/assets/images/himti-bootcamp.png";

export default function AboutIntroSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* --- Kolom Kiri Teks --- */}
        <div className="flex flex-col space-y-6 text-center lg:text-left items-center lg:items-start animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold">
            Our Story <Cover>About HIMTI</Cover>
          </h1>

          <Poppins className="text-lg text-gray-700 max-w-xl">
            Himpunan Mahasiswa Teknik Informatika Universitas Muhammadiyah
            Tangerang (HIMTI-UMT) adalah wadah pengembangan diri mahasiswa, yang
            tidak hanya berfokus pada organisasi, tetapi juga mendorong prestasi
            akademik.
          </Poppins>

          <div className="text-gray-600 space-y-4 max-w-xl border-l-4 border-yellow-400 pl-4">
            <Poppins>
              Sejak berdiri pada 09 Oktober 2011, HIMTI UMT hadir untuk
              mendukung mahasiswa Teknik Informatika agar lebih berkembang baik
              dalam ranah akademik maupun non-akademik.
            </Poppins>
            <Poppins>
              Didirikan oleh Muhammad Jonni, S.Kom., M.Kom., HIMTI UMT
              berkomitmen menjadi ruang belajar, berkolaborasi, dan
              berkontribusi dalam menghadapi tantangan teknologi masa kini.
            </Poppins>
          </div>
        </div>

        {/* --- Kolom Kanan Foto dengan Bingkai --- */}
        <div className="w-full flex items-center justify-center animate-fade-in-up">
          <FramedPhoto 
            imageUrl={himtiBootcamp}
            altText="Foto Kegiatan HIMTI" 
          />
        </div>
      </div>
    </section>
  );
}