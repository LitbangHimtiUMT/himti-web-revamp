/* eslint-disable react/prop-types */
import { Poppins } from "../../../components/ui/Text";
import { motion } from "framer-motion";
import { Linkedin, Instagram, Github } from "lucide-react";

export const MemberCard = ({ data }) => {
  return (
    <div className="rounded-2xl h-full w-full p-4 overflow-hidden bg-white border border-gray-200 group-hover:border-transparent relative z-20 transition-shadow duration-300">
      <div className="relative z-50 text-center flex flex-col items-center">
        <img
          src={data.image}
          alt={data.name}
          className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-gray-100"
          loading="lazy"
        />
        <h3 className="text-lg font-bold text-gray-900">{data.name}</h3>
        <Poppins className="bg-gradient-to-r from-[#4C76A3] to-[#203D5D] bg-clip-text text-transparent text-sm font-semibold">
          {data.role}
        </Poppins>
        <div className="flex space-x-3 mt-4">
          
          {/* Logika untuk LinkedIn */}
          {data.socials?.linkedin ? (
            <a href={`https://www.linkedin.com/in/${data.socials.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-700">
              <Linkedin size={20} />
            </a>
          ) : (
            <span className="text-gray-400/50 cursor-not-allowed">
              <Linkedin size={20} />
            </span>
          )}

          {/* Logika untuk Instagram */}
          {data.socials?.instagram ? (
            <a href={`https://instagram.com/${data.socials.instagram}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-600">
              <Instagram size={20} />
            </a>
          ) : (
            <span className="text-gray-400/50 cursor-not-allowed">
              <Instagram size={20} />
            </span>
          )}

          {/* Logika untuk Github */}
          {data.socials?.github ? (
            <a href={`https://github.com/${data.socials.github}`}target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900">
              <Github size={20} />
            </a>
          ) : (
            <span className="text-gray-400/50 cursor-not-allowed">
              <Github size={20} />
            </span>
          )}

        </div>
      </div>
    </div>
  );
};