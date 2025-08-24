import { TestimonialsCarousel } from "./AnimatedTestimonials";
import { Poppins } from "../../../global/components/Text";

export default function AlumniSection() {
  return (
    <section className="py-20 bg-white dark:bg-black dark:bg-dot-white/[0.2] relative">
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        <Poppins className="inline-block bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold tracking-wider uppercase">
          Jejak Alumni
        </Poppins>
        <h2 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Kisah Sukses dari Keluarga HIMTI
        </h2>
        <Poppins className="mt-4 max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-300">
          Lihat bagaimana alumni kami berkarya dan berinovasi di berbagai
          perusahaan teknologi terkemuka di Indonesia.
        </Poppins>
      </div>
      <div className="flex flex-col antialiased items-center justify-center relative">
        <TestimonialsCarousel
          items={alumniData}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
}

// Data Alumni
const alumniData = [
  {
    name: "Nadila Pilar S.Kom",
    title: "Web Developer",
    company: "PT. Griya Fortuna Internasional",
    period: "Desember 2021 - Present",
    image: "/images/avatar-woman.jpg",
    socials: { linkedin: "#", instagram: "#", github: "#" },
  },
  {
    name: "Adi Winarno S.Kom",
    title: "Android Developer",
    company: "PT. Healstation Indonesia",
    period: "Juni 2022 - Now",
    image: "/images/avatar-man.jpg",
    socials: { linkedin: "#", instagram: "#", github: "#" },
  },
  {
    name: "Okie Liani Syahputra S.Kom",
    title: "IT Security Operation Center Analyst",
    company: "PT. Mitra Integrasi Informatika",
    period: "",
    image: "/images/avatar-man.jpg",
    socials: { linkedin: "#", instagram: "#" },
  },
  {
    name: "Rajif Mahendra S.Kom",
    title: "Founder",
    company: "PT. Kelas Tambahan Nusantara",
    period: "",
    image: "/images/avatar-man.jpg",
    socials: { linkedin: "#", instagram: "#", github: "#" },
  },
  {
    name: "Rangga Cikal Senopati S.Kom",
    title: "New Branch Delivery System Apps",
    company: "PT. Bank Mandiri Indonesia",
    period: "Oktober 2021 - Sekarang",
    image: "/images/avatar-man.jpg",
    socials: { linkedin: "#", instagram: "#", github: "#" },
  },
];
