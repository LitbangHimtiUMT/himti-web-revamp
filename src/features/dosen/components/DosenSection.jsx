import { useState } from "react";
import { Poppins } from "../../../components/ui/Text";
import { PlaceholdersAndVanishInput } from "../../../components/Placeholder";
import { useDosen } from "../hooks/useDosen";
import LoadingStatus from "../../../components/LoadingStatus";
import ErrorStatus from "../../../components/ErrorStatus";
import { HoverEffect } from "../../../components/HoverEffect";
import { DosenCard } from "./DosenCard";

export default function DosenSection() {
  const { loading, error, dosen, fetchDosen } = useDosen();
  const [searchTerm, setSearchTerm] = useState("");
  
  const placeholders = [
    "Cari nama dosen...",
    "Siapa Kaprodi Teknik Informatika?",
    "Cari dosen pembina HIMTI...",
  ];

  const filteredDosen = dosen.filter((dosen) =>
    dosen.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (dosen.title && dosen.title.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  if (loading) {
    return <LoadingStatus message="Memuat data dosen..." />;
  }

  if (error) {
    return <ErrorStatus message={error} onRetry={fetchDosen} />;
  }

  return (
    <section className="py-20 animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-4">
        <div className="w-full mx-auto text-center mb-16">
          <h1 className="mb-6 text-4xl md:text-5xl font-bold leading-tight tracking-tight text-gray-900">
            Mengenal Para
            <span className="py-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-800 lg:inline">
              {" "}Staf Pengajar{" "}
            </span>
            Teknik Informatika
          </h1>
          <Poppins className="px-0 mb-8 text-lg text-gray-600 md:text-xl max-w-3xl mx-auto">
            Kenali lebih dekat para dosen ahli dan berdedikasi yang menjadi tulang punggung di program studi Teknik Informatika UMT.
          </Poppins>
        </div>

        <div className="w-full max-w-xl mx-auto mb-16">
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={(e) => setSearchTerm(e.target.value)}
            onSubmit={(e) => e.preventDefault()}
          />
        </div>

        {/* HoverEffect */}
        {filteredDosen.length > 0 ? (
          <HoverEffect items={filteredDosen}>
            {(item) => <DosenCard item={item} />}
          </HoverEffect>
        ) : (
          <div className="text-center col-span-full mt-8">
            <Poppins className="text-gray-500">Dosen tidak ditemukan.</Poppins>
          </div>
        )}
      </div>
    </section>
  );
}