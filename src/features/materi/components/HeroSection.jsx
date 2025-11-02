function HeroSection() {
  return (
    <section className="pt-24 animate-fade-in-up">
      <div className="px-12 mx-auto max-w-7xl">
        <div className="w-full mx-auto md:w-11/12 xl:w-9/12 text-center">
          <h1 className="mb-8 text-4xl md:text-5xl font-bold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
            <span>Upgrade Skill</span>{" "}
            <span className="py-2 text-transparent bg-clip-text leading-[2.5rem] sm:leading-[3rem] bg-gradient-to-r from-yellow-400 to-blue-800 text-center lg:inline">
              Bangun Relasi
            </span>{" "}
            <span>Raih Masa Depan</span>
          </h1>
          <p className="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
            Melalui pelatihan, diskusi, dan kolaborasi, HIMTI mendukung
            mahasiswa untuk siap bersaing di dunia akademik maupun industri.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
