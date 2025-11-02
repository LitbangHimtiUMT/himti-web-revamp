import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./HeroHighlight";
import { Button } from "../../../../components/ui/Button";
import { ArrowRight, BookOpen } from "lucide-react";
import { Poppins } from "../../../../components/ui/Text";
import { NavLink } from "react-router";

export default function HeroSection() {
  return (
    <HeroHighlight>
      <div
        className="relative z-10 flex flex-col items-center justify-center px-3 pt-24 pb-10 sm:pt-20 sm:pb-8
"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold text-center text-gray-800 leading-snug"
        >
          Kuasai Teknologi, Asah Soft Skill, Perkuat Solidaritas <br /> Bersama{" "}
          <Highlight className="text-black">
            <span className="text-white font-bold">HIMTI UMT</span>
          </Highlight>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-gray-600 max-w-4xl text-center"
        >
          <Poppins>
            Dukung perjalananmu menuju profesional teknologi dengan solidaritas,
            kreativitas, melalui pelatihan, kolaborasi, serta pengalaman yang
            membentuk generasi informatika unggul.
          </Poppins>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-xs sm:max-w-none mx-auto">
            <div className="w-full sm:w-auto">
              <NavLink to="/#mini-about">
              <Button variant="primary" size="lg" rounded="full">
                <div className="flex items-center justify-center gap-2 px-4">
                  <span>Mulai Jelajahi</span>
                  <ArrowRight size={18} />
                </div>
              </Button>
              </NavLink>
            </div>

            <div className="w-full sm:w-auto">
              <NavLink to="/agenda" >
              <Button variant="secondary" size="lg" rounded="full">
                <div className="flex items-center justify-center gap-2 px-4">
                  <BookOpen size={18} />
                  <span to="/agenda">Lihat Kegiatan</span>
                </div>
              </Button>
              </NavLink>
            </div>
          </div>
        </motion.div>
      </div>
    </HeroHighlight>
  );
}
