import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Poppins } from "../../../../components/ui/Text";
import "swiper/css";

export default function TeamCarousel({ members }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Mobile: Swiper horizontal */}
      <div className="block md:hidden">
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          loopedSlides={members.length}
          speed={1500}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          modules={[Autoplay]}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {members.map((member, index) => (
            <SwiperSlide key={index}>
              <div
                className={`rounded-2xl shadow-lg overflow-hidden transition-all duration-500
                  ${
                    index === activeIndex
                      ? "bg-white opacity-100 scale-100"
                      : "bg-gray-200 opacity-50 scale-95"
                  }`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-100 object-cover"
                  loading="lazy"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-gray-900">
                    {member.name}
                  </h3>
                  <Poppins className="text-yellow-500 font-semibold mt-1">
                    {member.role}
                  </Poppins>
                  <Poppins className="text-gray-500 text-sm mt-2">
                    {member.bio}
                  </Poppins>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop: Grid */}
      <div className="hidden md:grid grid-cols-3 gap-6">
        {members.map((member, index) => (
          <div
            key={index}
            className={`rounded-2xl shadow-lg overflow-hidden transition-all duration-500
              ${
                index === activeIndex
                  ? "bg-white opacity-100 scale-100"
                  : "bg-gray-100 opacity-50 scale-95"
              }`}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-90 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
              <Poppins className="text-yellow-500 font-semibold mt-1">
                {member.role}
              </Poppins>
              <Poppins className="text-gray-500 text-sm mt-2">
                {member.bio}
              </Poppins>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
