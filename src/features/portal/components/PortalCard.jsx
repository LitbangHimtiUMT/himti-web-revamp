/* eslint-disable react/prop-types */
import { ArrowUpRight, Store, GraduationCap, Vote, LayoutDashboard } from "lucide-react";
import { Poppins } from "../../../components/ui/Text";
import { Badge } from "../../../components/ui/Badges";
import { Button } from "../../../components/ui/Button";

const icons = {
  danus: Store,
  lms: GraduationCap,
  election: Vote,
  cms: LayoutDashboard,
};

// Kartu portal dibuat seragam: semua kartu di satu baris punya tinggi yang
// sama (h-full di grid + flex-col di dalam kartu), tombol selalu nempel
// di bawah (mt-auto), jadi baris kartu terlihat rapi meski panjang
// deskripsinya beda-beda. Tidak ada lagi kartu featured selebar penuh
// yang menyisakan ruang kosong di kanan.
const PortalCard = ({ platform, featured = false, style }) => {
  const Icon = icons[platform.id] || LayoutDashboard;

  return (
    <article
      style={style}
      className={`bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow overflow-hidden flex flex-col h-full animate-fade-in-up ${
        featured ? "border-t-4 border-yellow-400" : "border-t-4 border-transparent"
      }`}
    >
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-start justify-between gap-3">
          <div className="p-3 bg-gray-100 rounded-full shrink-0">
            <Icon className="h-6 w-6 text-gray-800" />
          </div>
          <Badge variant={platform.badgeVariant} rounded="full" size="sm">
            {platform.audience}
          </Badge>
        </div>

        <h3 className="mt-4 text-lg font-bold text-gray-900">
          {platform.name}
        </h3>
        <Poppins className="mt-2 text-sm text-gray-600 flex-grow">
          {platform.description}
        </Poppins>

        <Poppins className="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-500">
          {platform.accessNote}
        </Poppins>

        <a
          href={platform.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 block"
        >
          <Button
            variant={featured ? "warning" : "primary"}
            size="md"
            rounded="full"
          >
            <span className="flex items-center justify-center gap-2 px-4 w-full">
              <span>Buka {platform.shortName}</span>
              <ArrowUpRight size={18} />
            </span>
          </Button>
        </a>
      </div>
    </article>
  );
};

export default PortalCard;
