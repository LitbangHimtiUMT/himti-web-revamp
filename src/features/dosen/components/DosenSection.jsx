import { useMemo, useState } from "react";
import { Users, GraduationCap, BookOpen, Briefcase } from "lucide-react";
import { Poppins } from "../../../components/ui/Text";
import { PlaceholdersAndVanishInput } from "../../../components/Placeholder";
import { useDosen } from "../hooks/useDosen";
import ErrorStatus from "../../../components/ErrorStatus";
import { DosenCard } from "./DosenCard";

const FILTER_OPTIONS = [
  { value: "all", label: "Semua", icon: Users },
  { value: "pengajaran", label: "Pengajaran", icon: BookOpen },
  { value: "manajemen", label: "Manajemen", icon: Briefcase },
  { value: "doktor", label: "Doktor", icon: GraduationCap },
];

const StatCard = ({ icon: Icon, label, value, color }) => (
  <div className="flex items-center gap-3 rounded-xl bg-white border border-gray-100 shadow-sm px-4 py-3">
    <div className={`p-2 rounded-lg ${color}`}>
      <Icon size={20} className="text-white" />
    </div>
    <div>
      <div className="text-xl font-bold text-gray-900 leading-none">{value}</div>
      <div className="text-xs text-gray-500 mt-1">{label}</div>
    </div>
  </div>
);

const DosenCardSkeleton = () => (
  <div className="animate-pulse rounded-2xl bg-white border border-gray-100 p-4">
    <div className="h-48 bg-gray-200 rounded-lg mb-4" />
    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
    <div className="h-3 bg-gray-200 rounded w-1/2 mb-4" />
    <div className="h-3 bg-gray-200 rounded w-1/3" />
  </div>
);

export default function DosenSection() {
  const { loading, error, dosen, fetchDosen } = useDosen();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const placeholders = [
    "Cari nama dosen...",
    "Siapa Kaprodi Teknik Informatika?",
    "Cari dosen pembina HIMTI...",
  ];

  // Stats
  const stats = useMemo(() => {
    const total = dosen.length;
    const doktor = dosen.filter(
      (d) => d.name?.startsWith("Dr.") || d.name?.startsWith("Prof.")
    ).length;
    const pengajaran = dosen.filter(
      (d) => (d.title || "").toLowerCase().includes("pengajaran")
    ).length;
    const manajemen = dosen.filter(
      (d) => (d.title || "").toLowerCase().includes("manajemen")
    ).length;
    return { total, doktor, pengajaran, manajemen };
  }, [dosen]);

  const filteredDosen = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return dosen.filter((d) => {
      // Filter kategori
      if (activeFilter === "pengajaran") {
        if (!(d.title || "").toLowerCase().includes("pengajaran")) return false;
      } else if (activeFilter === "manajemen") {
        if (!(d.title || "").toLowerCase().includes("manajemen")) return false;
      } else if (activeFilter === "doktor") {
        if (!(d.name?.startsWith("Dr.") || d.name?.startsWith("Prof."))) return false;
      }
      // Filter search
      if (!term) return true;
      return (
        d.name.toLowerCase().includes(term) ||
        (d.title && d.title.toLowerCase().includes(term))
      );
    });
  }, [dosen, searchTerm, activeFilter]);

  if (error) {
    return <ErrorStatus message={error} onRetry={fetchDosen} />;
  }

  if (loading) {
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
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <DosenCardSkeleton key={`dosen-skeleton-${i}`} />
            ))}
          </div>
        </div>
      </section>
    );
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

                {/* Stats banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-10">
          <StatCard icon={Users} label="Total Dosen" value={stats.total} color="bg-blue-500" />
          <StatCard icon={GraduationCap} label="Doktor / Profesor" value={stats.doktor} color="bg-purple-500" />
          <StatCard icon={BookOpen} label="Pengajaran" value={stats.pengajaran} color="bg-emerald-500" />
          <StatCard icon={Briefcase} label="Manajemen" value={stats.manajemen} color="bg-amber-500" />
        </div>

        <div className="w-full max-w-xl mx-auto mb-6">
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={(e) => setSearchTerm(e.target.value)}
            onSubmit={(e) => e.preventDefault()}
          />
        </div>

        {/* Filter chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {FILTER_OPTIONS.map((opt) => {
            const Icon = opt.icon;
            const isActive = activeFilter === opt.value;
            return (
              <button
                key={opt.value}
                onClick={() => setActiveFilter(opt.value)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-blue-800 text-white border-transparent shadow-md"
                    : "bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-600"
                }`}
              >
                <Icon size={14} />
                {opt.label}
              </button>
            );
          })}
        </div>

        <p className="text-sm text-gray-400 mb-6 text-center">
          Menampilkan {filteredDosen.length} dari {dosen.length} dosen
        </p>

        {filteredDosen.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredDosen.map((item) => (
              <DosenCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center col-span-full mt-8">
            <Poppins className="text-gray-500">Dosen tidak ditemukan.</Poppins>
          </div>
        )}
      </div>
    </section>
  );
}