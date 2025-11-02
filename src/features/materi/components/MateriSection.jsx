import { Button } from "../../../components/ui/Button";
import { BookOpen } from "lucide-react";
import { NavLink } from "react-router-dom";

function SharingSection() {
  const courses = [
    {
      title: "Fondasi Kuat untuk Jadi Web Developer",
      desc: "Belajar dasar-dasar desain web, mulai dari HTML, CSS, hingga responsive design principles. Kuasai keterampilan penting untuk membuat website yang menarik, rapi, dan user-friendly.",
      duration: "4 Minggu",
      level: "Beginner",
      images: [
        "/images/program/web.jpg",
        "/images/program/web2.jpg",
        "/images/program/web3.jpg",
      ],
      curriculum: [
        {
          id: "01",
          title: "Introduction to HTML",
          desc: "Pahami struktur dasar web dengan HTML.",
        },
        {
          id: "02",
          title: "Styling with CSS",
          desc: "Percantik tampilan website dengan CSS.",
        },
        {
          id: "03",
          title: "Responsive Design",
          desc: "Buat website yang nyaman di semua ukuran layar.",
        },
        {
          id: "04",
          title: "Design Principles",
          desc: "Pelajari prinsip desain agar website lebih profesional.",
        },
        {
          id: "05",
          title: "Building a Website",
          desc: "Terapkan semua ilmu untuk membuat website pertamamu.",
        },
      ],
    },
    {
      title: "Mobile Development",
      desc: "Kuasai pengembangan aplikasi mobile cross-platform dengan Flutter untuk Android dan iOS. Belajar membangun aplikasi sekali tulis, bisa dijalankan di mana saja.",
      duration: "6 Minggu",
      level: "Intermediate",
      images: [
        "/images/program/mobile.jpg",
        "/images/program/mobile2.jpg",
        "/images/program/mobile3.jpg",
      ],
      curriculum: [
        {
          id: "01",
          title: "Intro to Flutter",
          desc: "Kenalan dengan framework Flutter dan cara kerjanya.",
        },
        {
          id: "02",
          title: "UI Basics",
          desc: "Membuat tampilan aplikasi dengan widget Flutter.",
        },
        {
          id: "03",
          title: "State Management",
          desc: "Atur data aplikasi dengan state management sederhana.",
        },
        {
          id: "04",
          title: "API Integration",
          desc: "Hubungkan aplikasi dengan data dari internet.",
        },
        {
          id: "05",
          title: "Publish App",
          desc: "Deploy aplikasi ke Android & iOS Store.",
        },
      ],
    },
    {
      title: "UI/UX Design",
      desc: "Rancang antarmuka yang cantik dan fungsional. Belajar proses desain dari riset hingga prototipe dengan Figma.",
      duration: "3 Minggu",
      level: "Beginner",
      images: [
        "/images/program/uiux.jpg",
        "/images/program/uiux2.jpg",
        "/images/program/uiux3.jpg",
      ],
      curriculum: [
        {
          id: "01",
          title: "Design Thinking",
          desc: "Pahami proses berpikir desain yang berfokus pada user.",
        },
        {
          id: "02",
          title: "Wireframing",
          desc: "Buat kerangka dasar aplikasi/website dengan wireframe.",
        },
        {
          id: "03",
          title: "Prototyping",
          desc: "Ubah wireframe menjadi prototipe interaktif di Figma.",
        },
        {
          id: "04",
          title: "User Testing",
          desc: "Pelajari cara menguji desain dengan user feedback.",
        },
        {
          id: "05",
          title: "Final Design",
          desc: "Hasilkan desain akhir yang siap diimplementasikan.",
        },
      ],
    },
    {
      title: "Cyber Security",
      desc: "Pelatihan mendalam seputar keamanan digital untuk meningkatkan pemahaman anggota HIMTI dalam menghadapi ancaman siber.",
      duration: "5 Minggu",
      level: "Intermediate",
      images: [
        "/images/program/cyber.jpg",
        "/images/program/cyber2.jpg",
        "/images/program/cyber3.jpg",
      ],
      curriculum: [
        {
          id: "01",
          title: "Intro to Cyber Security",
          desc: "Kenali dasar-dasar keamanan digital.",
        },
        {
          id: "02",
          title: "Network Security",
          desc: "Pelajari cara mengamankan jaringan komputer.",
        },
        {
          id: "03",
          title: "Cryptography",
          desc: "Mengenal enkripsi dan teknik melindungi data.",
        },
        {
          id: "04",
          title: "Ethical Hacking",
          desc: "Praktik dasar penetration testing secara etis.",
        },
        {
          id: "05",
          title: "Incident Response",
          desc: "Cara menangani dan merespons serangan siber.",
        },
      ],
    },
  ];

  return (
    <div className="space-y-12 py-20 px-4 animate-fade-in-up">
      {courses.map((course, idx) => (
        <div
          key={idx}
          className="max-w-5xl mx-auto bg-white shadow rounded-2xl p-6"
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                {course.title}
              </h2>
              <p className="text-gray-600 mt-2 text-sm max-w-2xl">
                {course.desc}
              </p>
            </div>
            <div className="mt-8 flex justify-center sm:justify-start">
              <NavLink to="/tutorial">
                <Button variant="secondary" size="lg" rounded="full">
                  <div className="flex items-center gap-2 px-4">
                    <span>Pelajari Materi</span>
                    <BookOpen size={18} />
                  </div>
                </Button>
              </NavLink>
            </div>
          </div>

          {/* Images */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            {course.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={course.title}
                className="rounded-lg object-cover w-full h-40 sm:h-48"
                loading="lazy"
              />
            ))}
          </div>

          {/* Tags */}
          <div className="flex justify-between items-center mt-4">
            <div className="flex gap-2">
              <span className="px-3 py-1 text-xs bg-gray-100 rounded-lg">
                {course.duration}
              </span>
              <span className="px-3 py-1 text-xs bg-gray-100 rounded-lg">
                {course.level}
              </span>
            </div>
          </div>

          {/* Curriculum */}
          <div className="mt-6">
            <h3 className="font-semibold mb-3">Kurikulum</h3>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 text-center">
              {course.curriculum.map((item) => (
                <div
                  key={item.id}
                  className="p-4 bg-gray-50 rounded-xl hover:bg-gradient-to-r hover:from-[#f1c857] hover:to-[#2b6394] hover:text-white transition duration-300"
                >
                  <p className="text-lg font-bold">{item.id}</p>
                  <p className="text-sm mt-1 font-semibold">{item.title}</p>
                  <p className="text-xs mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SharingSection;
