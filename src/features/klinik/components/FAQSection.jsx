/* eslint-disable react/prop-types */
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../../components/ui/Accordion";
import { Poppins } from "../../../components/ui/Text";

const FAQSection = () => {
  const faqs = [
    { 
      q: "Di mana lokasi Klinik Teknologi HIMTI?", 
      a: "Sekretariat kami berada di Gedung A, area basement, Kampus Universitas Muhammadiyah Tangerang. Silakan hubungi admin untuk membuat janji temu." 
    },
    { 
      q: "Layanan apa saja yang tersedia?", 
      a: "Kami melayani berbagai kebutuhan teknis seperti instalasi software, perbaikan hardware ringan, jasa desain UI/UX, proyek aplikasi, hingga jasa fotografer." 
    },
    { 
      q: "Bagaimana cara memesan merchandise?", 
      a: "Anda bisa langsung klik tombol 'Pesan via Google Form' pada produk yang diinginkan. Tim kami akan segera menghubungi Anda untuk konfirmasi lebih lanjut." 
    },
    { 
      q: "Berapa lama proses pengerjaan layanan?", 
      a: "Waktu pengerjaan bervariasi tergantung tingkat kesulitan. Untuk instalasi software biasanya bisa selesai dalam 1-2 hari kerja. Untuk proyek, estimasi akan diberikan setelah diskusi." 
    },
    { 
      q: "Apakah ada garansi untuk layanan servis?", 
      a: "Ya, kami memberikan garansi untuk layanan servis tertentu. Syarat dan ketentuan garansi akan diinformasikan oleh admin sebelum pengerjaan dimulai." 
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Poppins className="text-white font-semibold bg-gradient-to-r from-[#4C76A3] to-[#203D5D] px-6 py-2 rounded-full tracking-wider uppercase text-sm mx-auto w-fit">
            Butuh Bantuan?
          </Poppins>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900">
            HIMTI 101
          </h2>
          <Poppins className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            Temukan jawaban cepat untuk pertanyaan yang paling sering diajukan seputar layanan dan produk kami.
          </Poppins>
        </div>

        {/* Wadah Accordion dengan Desain Baru */}
        <div className="w-full p-4 md:p-8 rounded-2xl bg-gradient-to-br from-gray-100 to-white shadow-lg">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem value={`item-${i}`} key={i} className="border-b border-gray-200">
                  <AccordionTrigger className="text-lg text-gray-800  text-left hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-gray-600 ">
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

export default FAQSection;