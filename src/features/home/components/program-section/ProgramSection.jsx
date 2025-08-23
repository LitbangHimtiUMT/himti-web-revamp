import { StickyScroll } from "./StickyScrollReveal";
import { Poppins } from "../../../global/components/Text";
import { Button } from "../../../global/components/Button";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Data untuk section
const programContent = [
  {
    title: "Web Development",
    description: (
      <>
        <p>
          Belajar membangun website interaktif dari awal menggunakan teknologi
          modern seperti React.js dan TailwindCSS.
        </p>
        <div className="mt-4">
          <NavLink to="/sharing">
            <Button variant="secondary" size="md" rounded="full">
              <div className="flex items-center gap-2 px-2">
                <span className="whitespace-nowrap">Pelajari Lebih Lanjut</span>
                <ArrowRight size={16} />
              </div>
            </Button>
          </NavLink>
        </div>
      </>
    ),
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <img
          src="/images/program/web.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Web Development thumbnail"
        />
      </div>
    ),
  },
  {
    title: "Mobile Development",
    description: (
      <>
        <p>
          Kuasai pengembangan aplikasi mobile cross-platform dengan Flutter
          untuk Android dan iOS.
        </p>
        <div className="mt-4">
          <NavLink to="/sharing">
            <Button variant="secondary" size="md" rounded="full">
              <div className="flex items-center gap-2 px-2">
                <span className="whitespace-nowrap">Pelajari Lebih Lanjut</span>
                <ArrowRight size={16} />
              </div>
            </Button>
          </NavLink>
        </div>
      </>
    ),
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <img
          src="/images/program/mobile.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Mobile Development thumbnail"
        />
      </div>
    ),
  },
  {
    title: "UI/UX Design",
    description: (
      <>
        <p>
          Rancang antarmuka yang cantik dan fungsional. Belajar proses desain
          dari riset hingga prototipe dengan Figma.
        </p>
        <div className="mt-4">
          <NavLink to="/sharing">
            <Button variant="secondary" size="md" rounded="full">
              <div className="flex items-center gap-2 px-2">
                <span className="whitespace-nowrap">Pelajari Lebih Lanjut</span>
                <ArrowRight size={16} />
              </div>
            </Button>
          </NavLink>
        </div>
      </>
    ),
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <img
          src="/images/program/uiux.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="UI/UX Design thumbnail"
        />
      </div>
    ),
  },
  {
    title: "Cyber Security",
    description: (
      <>
        <p>
          Pelatihan mendalam seputar keamanan digital untuk meningkatkan
          pemahaman anggota HIMTI dalam menghadapi ancaman siber.
        </p>
        <div className="mt-4">
          <NavLink to="/sharing">
            <Button variant="secondary" size="md" rounded="full">
              <div className="flex items-center gap-2 px-2">
                <span className="whitespace-nowrap">Pelajari Lebih Lanjut</span>
                <ArrowRight size={16} />
              </div>
            </Button>
          </NavLink>
        </div>
      </>
    ),
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <img
          src="/images/program/cyber.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Cyber Security thumbnail"
        />
      </div>
    ),
  },
];

export default function ProgramSection() {
  return (
    <section className="py-1 bg-white animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-4 text-center mb-12 ">
        <Poppins className="text-white font-semibold bg-gradient-to-r from-[#4C76A3] to-[#203D5D] px-6 py-2 rounded-full px-4 py-1 tracking-wider uppercase text-sm mx-auto text-center w-fit">
          Program & Pembelajaran
        </Poppins>
        <h2 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900">
          Kuasai Skill Teknologi Terkini
        </h2>
        <Poppins className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
          Pilih jalur pembelajaran yang sesuai dengan minat dan bakatmu, dari
          pengembangan web hingga keamanan siber.
        </Poppins>
      </div>
      <div className="p-10">
        <StickyScroll content={programContent} />
      </div>
    </section>
  );
}
