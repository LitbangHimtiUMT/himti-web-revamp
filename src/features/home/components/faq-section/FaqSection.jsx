import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../../../components/ui/Accordion";
import { Poppins } from "../../../../components/ui/Text";

const FaqSection = () => {
  // Konten FAQ yang sudah diperbarui
  const faqs = [
    {
      q: "Apa itu HIMTI UMT?",
      a: "HIMTI UMT adalah Himpunan Mahasiswa Teknik Informatika di Universitas Muhammadiyah Tangerang, sebuah organisasi yang menjadi wadah bagi mahasiswa untuk berkembang di bidang akademik, dan non-akademik"
    },
    {
      q: "Siapa saja yang bisa bergabung dengan HIMTI?",
      a: "Seluruh mahasiswa aktif Semester 1 dan 3, program studi Teknik Informatika Universitas Muhammadiyah Tangerang dapat bergabung menjadi anggota HIMTI melalui proses Bootcamp yang diadakan setiap tahun."
    },
    {
      q: "Apa manfaat bergabung dengan HIMTI UMT?",
      a: "Bergabung dengan HIMTI memiliki banyak manfaat. HIMTI mewadahi para anggotanya untuk meningkatkan soft skill dan juga hard skill melalui berbagai kegiatan seperti seminar, bootcamp, dan kelompok belajar."
    },
    {
      q: "Bagaimana cara bergabung dengan HIMTI?",
      a: "Hubungi kontak kami yang tertera di bagian bawah halaman ini, dan jangan lupa ikuti akun Instagram kami @himtiumt untuk mendapatkan informasi ter-update seputar pendaftaran dan Bootcamp."
    },
    {
      q: "Di mana lokasi sekretariat HIMTI?",
      a: "Sekretariat kami berlokasi di Gedung A, area basement, Kampus Universitas Muhammadiyah Tangerang."
    },
  ];

  return (
    <section className="py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Poppins className="text-white font-semibold bg-gradient-to-r from-[#4C76A3] to-[#203D5D] px-6 py-2 rounded-full tracking-wider uppercase text-sm mx-auto w-fit">
            Semua yang Perlu Kamu Tahu
          </Poppins>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900">
            HIMTI 101
          </h2>
          <Poppins className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            Punya pertanyaan tentang HIMTI? Mungkin jawabanmu ada di sini.
          </Poppins>
        </div>

        {/* Wadah Accordion dengan Desain Baru */}
        <div className="w-full p-4 md:p-8 rounded-2xl bg-white shadow-lg">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem value={`item-${i}`} key={i} className="border-b border-gray-200">
                  <AccordionTrigger className="text-lg text-gray-800 text-left hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-gray-600">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;