import { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { Poppins } from "../../../global/components/Text";
import { cn } from "../../../../lib/utils";

export default function TeamCarousel({ members }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2500,
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-6xl mx-auto team-carousel">
      <Slider ref={sliderRef} {...settings}>
        {members.map((member, index) => (
          <div
            key={member.id}
            className="px-2 sm:px-4"
            onMouseEnter={() => {
              if (window.innerWidth > 1024) {
                sliderRef.current.slickGoTo(index);
              }
            }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 ease-in-out"
              animate={{
                scale: index === currentSlide ? 1 : 0.85,
                opacity: index === currentSlide ? 1 : 0.7,
              }}
            >
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className={cn(
                    "w-full h-95 object-cover transition-all duration-500 ease-in-out",
                    index !== currentSlide && "grayscale",
                  )}
                />
              </div>
              <div className="p-6 text-center">
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
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
