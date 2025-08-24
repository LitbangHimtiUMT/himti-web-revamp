import { useState } from "react";
import { Poppins } from "../../../global/components/Text";
import { HimtiTabs } from "./Tabs";
import { MemberCard } from "./MemberCard";
import { motion, AnimatePresence } from "framer-motion";
import { himtiStructure } from "../../data/members.js";

export default function SoHimtiSection() {
  const [activeTab, setActiveTab] = useState(himtiStructure[0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <Poppins className="text-white font-semibold bg-gradient-to-r from-[#4C76A3] to-[#203D5D] px-6 py-2 rounded-full px-4 py-1 tracking-wider uppercase text-sm mx-auto text-center w-fit">
          HIMTI Leadership
        </Poppins>
        <h2 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900">
          Struktural HIMTI Periode 2024-2025
        </h2>
        <Poppins className="mt-4 max-w-3xl mx-auto text-lg text-gray-500">
          Kami hadir untuk membentuk mahasiswa Teknik Informatika yang unggul di
          kelas dan berdaya di luar kelas. Mengasah kemampuan teknis, soft
          skill, sekaligus mempererat solidaritas antar anggota HIMTI UMT.
        </Poppins>
      </div>

      <div className="mt-12 w-full flex flex-col items-center">
        <HimtiTabs
          tabs={himtiStructure}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          containerClassName="w-full max-w-2xl"
          activeTabClassName="bg-blue-100"
        />
      </div>

      <div className="mt-12 max-w-7xl mx-auto px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.value}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {activeTab.members.map((member, index) => (
              <MemberCard key={index} data={member} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
