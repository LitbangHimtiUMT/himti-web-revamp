/* eslint-disable react/prop-types */
import { Poppins } from "../../../global/components/Text";
import { motion } from "framer-motion";
import { Linkedin, Instagram, Github } from "lucide-react";

export const MemberCard = ({ data }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={cardVariants}
      className="bg-white rounded-2xl shadow-md p-6 text-center flex flex-col items-center"
    >
      <img
        src={data.image}
        alt={data.name}
        className="w-34 h-34 rounded-full object-cover mb-4 border-4 border-gray-100"
      />
      <h3 className="text-lg font-bold text-gray-900">{data.name}</h3>
      <Poppins className="bg-gradient-to-r from-[#4C76A3] to-[#203D5D] bg-clip-text text-transparent text-sm font-semibold">
        {data.role}
      </Poppins>
      <div className="flex space-x-3 mt-4">
        {data.socials?.linkedin && (
          <a
            href={data.socials.linkedin}
            className="text-gray-400 hover:text-blue-700"
          >
            <Linkedin size={20} />
          </a>
        )}
        {data.socials?.instagram && (
          <a
            href={data.socials.instagram}
            className="text-gray-400 hover:text-pink-600"
          >
            <Instagram size={20} />
          </a>
        )}
        {data.socials?.github && (
          <a
            href={data.socials.github}
            className="text-gray-400 hover:text-gray-900"
          >
            <Github size={20} />
          </a>
        )}
      </div>
    </motion.div>
  );
};
