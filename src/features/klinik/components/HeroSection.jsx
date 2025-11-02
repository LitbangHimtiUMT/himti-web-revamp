import { Poppins } from "../../../components/ui/Text";
import { Button } from "../../../components/ui/Button";
import { CheckCircle } from "lucide-react";
import { TextGenerateEffect } from "../../../components/TextGenerateEffect";

const HeroSection = () => {
  const problemWords = "Mau service laptop? Bingung design? Atau ga bisa ngoding dan bingung ngerjain tugas?";
  const benefits = ["Biaya Terjangkau", "Bergaransi", "Efisien"];

  return (
    <section className="py-20 md:py-20 animate-fade-in-up">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        
        {/* Efek Dinamis */}
        <TextGenerateEffect 
          words={problemWords}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        />

        {/* Bagian Solusi */}
        <div className="mt-5">
          <Poppins className="text-lg text-gray-500">Tenang...</Poppins>
          <h1 className="text-4xl text-gray-900 md:text-6xl font-bold tracking-tight mt-2">
            Klinik Teknologi <span className="py-2 text-transparent bg-clip-text leading-[2.5rem] sm:leading-[3rem] bg-gradient-to-r from-yellow-400 to-blue-800 text-center lg:inline">HIMTI</span> solusinya!
          </h1>
          <Poppins className="mt-6 max-w-3xl mx-auto text-lg text-gray-500">
            Di Klinik Teknologi Himti UMT, kami punya berbagai macam solusi, mulai dari service laptop/PC, service elektronik, instalasi jaringan, hingga menerima berbagai project. Selain itu, kami juga menyediakan jasa fotografer.
          </Poppins>
        </div>

        {/* Bagian Keunggulan */}
        <div className="mt-10 flex flex-wrap justify-center text-gray-500 gap-x-6 gap-y-4">
          {benefits.map((benefit) => (
            <div key={benefit} className="flex items-center gap-2 text-lg">
              <CheckCircle className="text-green-400" size={22} />
              <span>{benefit}</span>
            </div>
          ))}
        </div>

        {/* CTA*/}
        <div className="mt-12 flex gap-4 justify-center">
          <a href="#services">
            <Button rounded="full" size="lg">Lihat Layanan Kami</Button></a>
          <a href="#merchandise">
            <Button rounded="full" size="lg" variant="secondary">Belanja Merchandise</Button></a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;