import { Poppins } from "../../../../components/ui/Text";
import { ScrollTimeline } from "./ScrollTimeline";
import {
  Target,
  CheckCircle,
  Handshake,
  GitBranch,
  Lightbulb,
} from "lucide-react";
import { BackgroundBeams } from "./BackgroundBeams";
import { WaveSeparator } from "./WaveSeparator";

const misiData = [
  {
    icon: <Target className="text-blue-600" size={24} />,
    title: "Menguatkan Kualitas Akademik",
    description:
      "Mengembangkan kualitas akademik anggota melalui pembelajaran, diskusi ilmiah, pendampingan akademik, serta penguatan bidang SESAC sebagai wadah peningkatan kompetensi dan prestasi yang berdaya saing.",
  },
  {
    icon: <Lightbulb className="text-blue-600" size={24} />,
    title: "Mendorong Riset & Inovasi Teknologi",
    description:
      "Mendorong riset, inovasi, dan karya teknologi informatika yang aplikatif melalui pelatihan, workshop, kompetisi, serta kegiatan akademik yang relevan dengan kebutuhan industri dan masyarakat.",
  },
  {
    icon: <CheckCircle className="text-blue-600" size={24} />,
    title: "Mengembangkan SDM HIMTI",
    description:
      "Mengembangkan sumber daya manusia HIMTI melalui penguatan soft skill, kepemimpinan, profesionalisme, dan budaya organisasi guna menciptakan anggota yang berkarakter dan siap berkontribusi.",
  },
  {
    icon: <Handshake className="text-blue-600" size={24} />,
    title: "Mewujudkan Organisasi Kolaboratif",
    description:
      "Mewujudkan organisasi HIMTI yang aktif, transparan, dan kolaboratif melalui forum diskusi organisasi, kajian isu, serta kerja sama internal dan eksternal termasuk kunjungan studi ke instansi dan perusahaan teknologi.",
  },
  {
    icon: <GitBranch className="text-blue-600" size={24} />,
    title: "Mengembangkan Kewirausahaan",
    description:
      "Mengembangkan kewirausahaan dan kemandirian organisasi melalui program pengembangan usaha anggota serta pengelolaan keuangan yang transparan dan berkelanjutan.",
  },
];

export default function VisiMisiSection() {
  return (
    <section className="bg-slate-950 pt-20 relative overflow-hidden">
      <WaveSeparator />
      <BackgroundBeams />

      <div className="relative z-10">
        {/* Visi */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-gray-100">
            Visi & Misi HIMTI UMT
          </h2>
          <div className="mt-8 p-8 bg-gradient-to-r from-[#4C76A3] to-[#203D5D] text-white rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold">Visi</h3>
            <Poppins className="mt-2 text-lg text-blue-100">
              Mewujudkan HIMTI sebagai himpunan yang unggul dalam penguatan akademik, pengembangan inovasi, dan profesionalisme, serta didukung oleh organisasi yang aktif, kolaboratif, dan berintegritas dalam mendorong prestasi serta kontribusi nyata bagi anggota, kampus, dan masyarakat.
            </Poppins>
          </div>
        </div>

        {/* Misi Timeline */}
        <div className="mt-10">
          <h3 className="text-center text-3xl font-bold text-gray-100 mb-4">
            Misi Kami
          </h3>
          <ScrollTimeline events={misiData} />
        </div>
      </div>

      <div className="transform scale-y-[-1]">
        <WaveSeparator />
      </div>
    </section>
  );
}
