/* eslint-disable react/prop-types */
import { useState } from "react";
import { Poppins } from "../../../components/ui/Text";
import { Mail, Phone, GraduationCap, Copy, Check, ExternalLink } from "lucide-react";

const getGelarBadge = (name) => {
  if (!name) return null;
  if (name.startsWith("Prof.")) {
    return (
      <span className="shrink-0 text-[10px] bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-medium">
        Profesor
      </span>
    );
  }
  if (name.startsWith("Dr.")) {
    return (
      <span className="shrink-0 text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">
        Doktor
      </span>
    );
  }
  return null;
};

// Bersihkan gelar (Dr., Prof., ST., M.Kom., dst.) sebelum di-search di SINTA.
const cleanNameForSinta = (name) => {
  if (!name) return "";
  return name
    .replace(/\b(Dr|Prof|Ir|Drs|Dra|H|Hj)\.?\s?/gi, "")
    .replace(/,\s?(S\.?[A-Za-z]+|M\.?[A-Za-z]+|MMSI|MTI|MT|MM|M\.Pd|M\.Kom|Ph\.?D)\.?/gi, "")
    .replace(/\s+/g, " ")
    .trim();
};

// URL SINTA: pakai sintaId kalau ada, else fallback ke search by name.
const getSintaUrl = (item) => {
  if (item.sintaId) {
    return `https://sinta.kemdiktisaintek.go.id/authors/profile/${item.sintaId}`;
  }
  const q = encodeURIComponent(cleanNameForSinta(item.name));
  return `https://sinta.kemdiktisaintek.go.id/authors?q=${q}`;
};

export const DosenCard = ({ item }) => {
  const [copied, setCopied] = useState(false);

  const createWhatsAppLink = (phone) => {
    if (!phone) return "#";
    const cleanedPhone = phone.replace(/[^0-9]/g, "");
    return `https://wa.me/${cleanedPhone}`;
  };

  const handleCopyNidn = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!item.nidn) return;
    try {
      await navigator.clipboard.writeText(item.nidn);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy NIDN:", err);
    }
  };

  const badge = getGelarBadge(item.name);
  const sintaUrl = getSintaUrl(item);

  return (
    <div className="group rounded-2xl h-full w-full p-4 overflow-hidden bg-white border border-gray-200 hover:border-blue-400 hover:shadow-lg relative z-20 transition-all duration-300 flex flex-col">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-cover rounded-lg mb-4"
        loading="lazy"
      />
      <div className="flex items-start justify-between gap-2">
        <h4 className="text-gray-900 font-bold tracking-wide text-lg leading-tight">
          {item.name}
        </h4>
        {badge}
      </div>
      <Poppins className="text-gray-500 text-sm mt-1">{item.title}</Poppins>

            {item.nidn && item._hasRealNidn !== false && (
        <button
          type="button"
          onClick={handleCopyNidn}
          title="Klik untuk menyalin NIDN"
          className="mt-2 inline-flex items-center gap-1.5 self-start text-xs text-gray-400 hover:text-blue-600 transition-colors group/nidn"
        >
          <span>NIDN: {item.nidn}</span>
          {copied ? (
            <>
              <Check size={12} className="text-green-600" />
              <span className="text-green-600">Tersalin</span>
            </>
          ) : (
            <Copy size={12} className="opacity-0 group-hover/nidn:opacity-100 transition-opacity" />
          )}
        </button>
      )}

      <div className="mt-4 pt-4 border-t border-gray-100 space-y-2 flex-1">
        {item.email && (
          <a
            href={`mailto:${item.email}`}
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors truncate"
          >
            <Mail size={14} className="shrink-0" />
            <span className="truncate">{item.email}</span>
          </a>
        )}
        {item.phone && (
          <a
            href={createWhatsAppLink(item.phone)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
          >
            <Phone size={14} className="shrink-0" />
            <span>{item.phone}</span>
          </a>
        )}
      </div>

      {/* SINTA CTA */}
      <a
        href={sintaUrl}
        target="_blank"
        rel="noopener noreferrer"
        title={
          item.sintaId
            ? "Buka profil SINTA"
            : "Cari dosen di SINTA (Kemdiktisaintek)"
        }
        className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white text-sm font-medium py-2 px-3 transition-all shadow-sm hover:shadow-md"
      >
        <GraduationCap size={16} />
        <span>Lihat di SINTA</span>
        <ExternalLink size={12} className="opacity-80" />
      </a>
    </div>
  );
};