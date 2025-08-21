import React from "react";

function HeroSection() {
  return (
    <div>
      <section className="bg-gray-50 py-12 border-b">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Title */}
          <h1 className="text-3xl md:text-4xl font-bold leading-snug">
            HIMTI UMT
          </h1>

          {/* Right: Description */}
          <p className="text-gray-600 text-base leading-relaxed">
            Himpunan Mahasiswa Teknik Informatika Universitas Muhammadiyah
            Tangerang atau HIMTI - UMT adalah himpunan kampus yang tidak hanya
            berfokus pada organisasi saja tetapi terhadap akademik juga, bahkan
            tujuan utama HIMTI yaitu untuk meningkatkan nilai akademik Mahasiswa
            Teknik Informatika Universitas Muhammadiyah Tangerang
          </p>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
