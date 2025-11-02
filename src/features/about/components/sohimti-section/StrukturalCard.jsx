/* eslint-disable react/prop-types */
import { useState } from "react";
import { Linkedin, Instagram } from "lucide-react";
import { cn } from "../../../../lib/utils";

export const StrukturalCard = ({ member, className }) => {
  const [showIcons, setShowIcons] = useState(false);

  // Toggle ikon sosial media 
  const handleToggle = () => {
    if (window.innerWidth < 768) {
      setShowIcons(!showIcons);
    }
  };

  return (
    <div
      className={cn(
        "group relative w-full h-full overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl bg-white",
        className
      )}
      onClick={handleToggle} 
    >
      {/* Foto anggota */}
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />

      {/* Overlay gradasi */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

      {/* Nama, jabatan, dan ikon sosial media */}
      <div className="absolute bottom-0 left-0 p-4 text-white">
        <h3 className="text-lg font-bold">{member.name}</h3>
        <p className="text-sm text-blue-400">{member.role}</p>

        {/* Ikon sosial media */}
        <div
          className={cn(
            "flex space-x-2 mt-2 transition-opacity duration-300",
            // Desktop: hover, Mobile: klik
            showIcons ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          )}
        >
          {/* Instagram */}
          {member.socials?.instagram ? (
            <a
              href={`https://instagram.com/${member.socials.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400"
              onClick={(e) => e.stopPropagation()}
            >
              <Instagram size={18} />
            </a>
          ) : (
            <span className="text-gray-500 cursor-not-allowed">
              <Instagram size={18} />
            </span>
          )}

          {/* LinkedIn */}
          {member.socials?.linkedin ? (
            <a
              href={`https://www.linkedin.com/in/${member.socials.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
              onClick={(e) => e.stopPropagation()}
            >
              <Linkedin size={18} />
            </a>
          ) : (
            <span className="text-gray-500 cursor-not-allowed">
              <Linkedin size={18} />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
