/* eslint-disable react/prop-types */
import { useState } from "react"; 
import { Poppins } from "../../../components/ui/Text";
import { Tabs } from "../../../components/Tabs";
import { useAngkatan } from "../hooks/useAngkatan";
import LoadingStatus from "../../../components/LoadingStatus";
import ErrorStatus from "../../../components/ErrorStatus";
import { HoverEffect } from "../../../components/HoverEffect";
import { MemberCard } from "./MemberCard";
import { Button } from "../../../components/ui/Button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PlaceholdersAndVanishInput } from "../../../components/Placeholder";

export default function AngkatanSection({ isFullPage = false }) {
  const { loading, loadingAnggota, error, angkatanTabs, anggota, activeTab, setActiveTab } = useAngkatan();
  const [searchTerm, setSearchTerm] = useState(""); // state untuk search

  const placeholders = [
    "Cari nama anggota...",
    "Siapa nama teman seangkatanmu?",
    "Cari anggota angkatan terbaru",
  ];

  // Filter anggota berdasarkan searchTerm
  const filteredAnggota = anggota.filter((member) =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayedAnggota = isFullPage ? filteredAnggota : filteredAnggota.slice(0, 10);

  if (loading) return <LoadingStatus message="Memuat daftar angkatan..." />;
  if (error) return <ErrorStatus message={error} />;
  
  return (
    <section id="angkatan-gallery" className="py-20 bg-white animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Galeri <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-800">Angkatan</span>
        </h2>
        <Poppins className="mt-4 max-w-3xl mx-auto text-lg text-gray-500">
          Kenali wajah-wajah inspiratif dari setiap generasi yang telah menjadi bagian dari keluarga besar HIMTI UMT.
        </Poppins>
      </div>

      <div className="mt-12 w-full flex flex-col items-center">
        <Tabs
          tabs={angkatanTabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          containerClassName="w-full max-w-2xl"
          activeTabClassName="bg-blue-100"
        />
      </div>
      
      {/* komponen search input  */}
      <div className="w-full max-w-xl mx-auto mt-12 mb-8">
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={(e) => setSearchTerm(e.target.value)}
          onSubmit={(e) => e.preventDefault()}
        />
      </div>

      <div className="mt-12 max-w-7xl mx-auto px-4">
        {loadingAnggota ? (
          <LoadingStatus message="Memuat data anggota..." />
        ) : (
          <>
            {displayedAnggota.length > 0 ? (
              <HoverEffect items={displayedAnggota} className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {(member) => <MemberCard data={member} />}
              </HoverEffect>
            ) : (
              <div className="col-span-full text-center py-10">
                <Poppins className="text-gray-500">
                  {/* Pesan dinamis: bedakan antara data kosong dan tidak ada hasil search */}
                  {anggota.length > 0 ? "Anggota tidak ditemukan." : "Belum ada data anggota untuk angkatan ini."}
                </Poppins>
              </div>
            )}
            
            {/* Button Menu logic anggota */}
            {!isFullPage && anggota.length > 5 && (
              <div className="flex mt-10 text-center justify-center ">
                <Link to="/angkatan">
                  <Button variant="secondary" size="lg" rounded="full">
                  <div className="flex items-center gap-2 px-4">
                    <span>Lihat Semua Anggota</span>
                    <ArrowRight size={18} />
                  </div>
                </Button>
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}