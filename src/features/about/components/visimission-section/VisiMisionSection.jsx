import { Poppins } from "../../../../components/ui/Text";
import { ScrollTimeline } from "./ScrollTimeline";
import { Target, CheckCircle, Handshake, GitBranch, Lightbulb } from "lucide-react";
import { BackgroundBeams } from "./BackgroundBeams";
import { WaveSeparator } from "./WaveSeparator";
import { useVisiMisi } from "../../hooks/useVisiMisi";
import LoadingStatus from "../../../../components/LoadingStatus";
import ErrorStatus from "../../../../components/ErrorStatus";

const iconMap = [
  <Target key="target" className="text-blue-600" size={24} />,
  <Lightbulb key="lightbulb" className="text-blue-600" size={24} />,
  <CheckCircle key="check" className="text-blue-600" size={24} />,
  <Handshake key="handshake" className="text-blue-600" size={24} />,
  <GitBranch key="branch" className="text-blue-600" size={24} />,
];

export default function VisiMisiSection() {
  const { data, loading, error, refetch } = useVisiMisi();

  if (loading) {
    return <LoadingStatus message="Memuat data visi dan misi..." />;
  }

  if (error) {
    return <ErrorStatus message={error} onRetry={refetch} />;
  }

  const missionItems = (data?.mission ?? []).map((item, index) => ({
    icon: iconMap[index % iconMap.length],
    title: item.title,
    description: item.description,
  }));

  return (
    <section className="bg-slate-950 pt-20 relative overflow-hidden">
      <WaveSeparator />
      <BackgroundBeams />

      <div className="relative z-10">
        {/* Visi */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-gray-100">
            {data?.name ?? "Visi & Misi HIMTI UMT"}
          </h2>
          <div className="mt-4 text-sm text-blue-200">
            {data?.period ? `Periode ${data.period}` : ""}
          </div>
          <div className="mt-8 p-8 bg-gradient-to-r from-[#4C76A3] to-[#203D5D] text-white rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold">Visi</h3>
            <Poppins className="mt-2 text-lg text-blue-100">
              {data?.vision ?? "Visi belum tersedia."}
            </Poppins>
          </div>
        </div>

        {/* Misi Timeline */}
        <div className="mt-10">
          <h3 className="text-center text-3xl font-bold text-gray-100 mb-4">
            Misi Kami
          </h3>
          <ScrollTimeline events={missionItems} />
        </div>
      </div>

      <div className="transform scale-y-[-1]">
        <WaveSeparator />
      </div>
    </section>
  );
}
