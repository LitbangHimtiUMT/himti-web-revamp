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
    title: "Mengembangkan Kemampuan Teknis",
    description:
      "Menyelenggarakan pelatihan, lomba, dan kolaborasi industri untuk meningkatkan kreativitas dan kemampuan teknis mahasiswa.",
  },
  {
    icon: <CheckCircle className="text-blue-600" size={24} />,
    title: "Meningkatkan Soft Skill & Kepemimpinan",
    description:
      "Mengadakan diskusi dan menjalin kerja sama untuk mengembangkan komunikasi, manajemen waktu, dan kepemimpinan.",
  },
  {
    icon: <Handshake className="text-blue-600" size={24} />,
    title: "Memperkuat Solidaritas",
    description:
      "Mendorong partisipasi aktif dalam kegiatan sosial dan himpunan yang inklusif untuk memperkuat kebersamaan.",
  },
  {
    icon: <GitBranch className="text-blue-600" size={24} />,
    title: "Meningkatkan Relevansi Industri",
    description:
      "Mengadakan studi banding dan kunjungan industri, serta menyediakan akses informasi akademik dan non-akademik.",
  },
  {
    icon: <Lightbulb className="text-blue-600" size={24} />,
    title: "Mendorong Inovasi & Kewirausahaan",
    description:
      "Menyediakan program inkubasi dan seminar bisnis untuk mahasiswa yang memiliki inovasi.",
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
              Menjadikan mahasiswa teknik informatika yang memiliki daya saing
              di bidang akademik dan non-akademik melalui pengembangan kemampuan
              teknis dan soft skill serta memperkuat solidaritas antar anggota.
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
