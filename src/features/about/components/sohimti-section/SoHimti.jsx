/* eslint-disable react/prop-types */
import { Poppins } from "../../../../components/ui/Text";
import { useStruktural } from "../../../struktural/hooks/useStruktural";
import LoadingStatus from "../../../../components/LoadingStatus";
import ErrorStatus from "../../../../components/ErrorStatus";
import { StrukturalCard } from "./StrukturalCard";

export default function SoHimtiSection() {
  const { loading, error, topTwo, middleFour, bottomFour } = useStruktural();

  if (loading) return <LoadingStatus message="Memuat data struktural..." />;
  if (error) return <ErrorStatus message={error} />;

  return (
    <section className="py-20 bg-gray-50">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 text-center">
        <Poppins className="text-white font-semibold bg-gradient-to-r from-[#4C76A3] to-[#203D5D] px-6 py-2 rounded-full tracking-wider uppercase text-sm mx-auto w-fit">
          HIMTI Leadership
        </Poppins>
        <h2 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900">
          Struktural HIMTI Periode 2024-2025
        </h2>
        <Poppins className="mt-4 max-w-3xl mx-auto text-lg text-gray-500">
          Kami hadir untuk membentuk mahasiswa Teknik Informatika yang unggul
          di kelas dan berdaya di luar kelas. Mengasah kemampuan teknis, soft
          skill, sekaligus mempererat solidaritas antar anggota HIMTI UMT.
        </Poppins>
      </div>

      {/* Top Row (Ketua & Wakil) */}
      <div className="mt-16 max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {topTwo.map((member, idx) => (
          <div
            key={member.id}
            className={`w-full ${
              idx === 0 ? "sm:order-1" : "sm:order-2"
            }`}
          >
            <StrukturalCard member={member} className="h-full" />
          </div>
        ))}
      </div>

      {/* Middle Row (4 orang: Sekretaris, Bendahara) */}
      <div className="mt-10 max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {middleFour.map((member) => (
          <StrukturalCard
            key={member.id}
            member={member}
            className="w-full h-auto min-h-[20rem]"
          />
        ))}
      </div>

      {/* Bottom Row (4 orang: Departemen) */}
      {bottomFour.length > 0 && (
        <div className="mt-10 max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {bottomFour.map((member) => (
            <StrukturalCard
              key={member.id}
              member={member}
              className="w-full h-auto min-h-[20rem]"
            />
          ))}
        </div>
      )}
    </section>
  );
}
