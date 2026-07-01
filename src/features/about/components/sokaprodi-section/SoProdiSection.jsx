import TeamCarousel from "./TeamCarousel";
import { Poppins } from "../../../../components/ui/Text";
import { useProdi } from "../../hooks/useProdi";
import LoadingStatus from "../../../../components/LoadingStatus";
import ErrorStatus from "../../../../components/ErrorStatus";

export default function SoProdiSection() {
  const { members, loading, error, refetch } = useProdi();

  if (loading) {
    return <LoadingStatus message="Memuat data struktural prodi..." />;
  }

  if (error) {
    return <ErrorStatus message={error} onRetry={refetch} />;
  }

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <Poppins className="inline-block bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold tracking-wider uppercase">
          Dukungan Akademik
        </Poppins>
        <h2 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900">
          Struktural Program Studi
        </h2>
        <Poppins className="mt-4 max-w-3xl mx-auto text-lg text-gray-500">
          Di bawah bimbingan para ahli di bidangnya, HIMTI UMT terus didukung
          untuk mencapai keunggulan akademik dan organisasi.
        </Poppins>
      </div>
      <div className="mt-12">
        <TeamCarousel members={members} />
      </div>
    </section>
  );
}
