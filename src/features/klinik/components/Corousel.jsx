import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function MerchandiseCarousel() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
          MERCHANDISE
        </h2>

        {/* Carousel */}
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="max-w-5xl mx-auto"
        >
          <SwiperSlide>
            <img
              src="/images/klinik/produk1.jpg"
              alt="Tote Bag"
              className="w-64 h-64 object-contain bg-white rounded-xl shadow-lg mx-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/klinik/produk2.jpg"
              alt="Kaos"
              className="w-64 h-64 object-contain bg-white rounded-xl shadow-lg mx-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/klinik/produk3.jpg"
              alt="Kaos Belakang"
              className="w-64 h-64 object-contain bg-white rounded-xl shadow-lg mx-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/klinik/produk4.jpg"
              alt="Kaos Belakang"
              className="w-64 h-64 object-contain bg-white rounded-xl shadow-lg mx-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/klinik/produk5.jpg"
              alt="Kaos Belakang"
              className="w-64 h-64 object-contain bg-white rounded-xl shadow-lg mx-auto"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
