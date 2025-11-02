/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "../../../../lib/utils";
import { Linkedin, Instagram, Github } from "lucide-react";

export const TestimonialsCarousel = ({
  items,
  direction = "right",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "90s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-200  px-8 py-6 md:w-[450px]"
            style={{
              background:
                "linear-gradient(180deg, var(--slate-50), var(--slate-1900))",

              // background: "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
            }}
            key={item.name}
          >
            <blockquote>
              <div className="relative z-20 flex flex-row items-center">
                <div className="flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="ml-4">
                  <div className="text-lg font-bold text-gray-900">
                    {item.name}
                  </div>
                  <div className="text-sm text-gray-600">{item.degree}</div>
                </div>
              </div>
              <div className="relative z-20 mt-4">
                <p className="text-md leading-snug text-gray-800 font-medium">
                  {item.title}
                </p>
                <div className="flex flex-col mt-2">
                  <span className="text-sm leading-none text-gray-600">
                    {item.company}
                  </span>
                  <span className="text-xs leading-none text-gray-500 mt-1">
                    {item.period}
                  </span>
                </div>
              </div>
              <div className="flex justify-end mt-4 space-x-4">
                {item.socials.instagram && (
                  <a
                    href={item.socials.instagram}
                    aria-label="Instagram"
                    className="text-gray-400 hover:text-pink-500 transition-colors"
                  >
                    <Instagram size={20} />
                  </a>
                )}
                {item.socials.linkedin && (
                  <a
                    href={item.socials.linkedin}
                    aria-label="LinkedIn"
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                )}
                {item.socials.github && (
                  <a
                    href={item.socials.github}
                    aria-label="GitHub"
                    className="text-gray-400 hover:text-gray-800 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                )}
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
