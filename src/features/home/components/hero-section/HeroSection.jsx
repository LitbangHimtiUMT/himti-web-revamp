import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./HeroHighlight";
import { Button } from "../../../global/components/Button";
import { ArrowRight, BookOpen } from "lucide-react";
import { Poppins } from "../../../global/components/Text/index";
import { Link } from "react-router";

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
          className="text-3xl md:text-5xl font-bold text-center text-gray-800 dark:text-white leading-snug"
        >
          Kuasai Teknologi, Asah Soft Skill, Perkuat Solidaritas <br /> Bersama{" "}
          <Highlight className="text-black dark:text-white">
            <span className="text-white font-bold">HIMTI UMT</span>
          </Highlight>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl text-center"
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
              <Button variant="primary" size="lg" rounded="full">
                <div className="flex items-center justify-center gap-2 px-4">
                  <Link to="/">Mulai Jelajahi</Link>
                  <ArrowRight size={18} />
                </div>
              </Button>
            </div>

            <div className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" rounded="full">
                <div className="flex items-center justify-center gap-2 px-4">
                  <BookOpen size={18} />
                  <Link to="/sharing">Lihat Kegiatan</Link>
                </div>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </HeroHighlight>
  );
}
