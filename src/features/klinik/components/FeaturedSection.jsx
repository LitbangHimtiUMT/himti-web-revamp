/* eslint-disable react/prop-types */
import React from 'react';
import { Poppins } from "../../../components/ui/Text";
import { Laptop, Code, Palette, Smartphone, Camera, Network, Wrench, Home } from "lucide-react";
import { GlowingCards, GlowingCard } from "../../../components/ui/GlowingEffect";

const FeaturedSection = () => {
  const services = [
    { title: "Service HP/Laptop/PC dan Elektronik", description: "Perbaikan cepat dan terpercaya untuk semua perangkat Anda.", icon: <Smartphone />, glowColor: "#3b82f6" },
    { title: "Upgrade Hardware/Software", description: "Tingkatkan performa perangkat Anda dengan komponen terbaru.", icon: <Laptop />, glowColor: "#ef4444" },
    { title: "Project & Maintenance Web & Mobile", description: "Wujudkan ide aplikasi Anda bersama tim developer kami.", icon: <Code />, glowColor: "#22c55e" },
    { title: "Jasa Pembuatan Desain UI/UX", description: "Desain antarmuka yang modern dan ramah pengguna.", icon: <Palette />, glowColor: "#a855f7" },
    { title: "Service Elektronik Lainnya", description: "Perbaikan perangkat elektronik umum, dari kipas hingga printer.", icon: <Wrench />, glowColor: "#f97316" },
    { title: "Jasa Fotografer Profesional", description: "Abadikan momen spesial Anda dengan kualitas profesional.", icon: <Camera />, glowColor: "#ec4899" },
    { title: "Instalasi & Maintenance Jaringan", description: "Setup jaringan internet untuk rumah atau kosan Anda.", icon: <Network />, glowColor: "#06b6d4" },
    { title: "Pemasangan Smart Home", description: "Jadikan rumah Anda lebih pintar dengan instalasi CCTV & IoT.", icon: <Home />, glowColor: "#84cc16" },
  ];

  return (
   <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Judul Section */}
        <div className="text-center mb-16">
          <Poppins className="text-white font-semibold bg-gradient-to-r from-[#4C76A3] to-[#203D5D] px-6 py-2 rounded-full tracking-wider uppercase text-sm mx-auto w-fit">
            Layanan Unggulan
          </Poppins>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900">
            Solusi Kebutuhan Teknologi Anda
          </h2>
          <Poppins className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            Dari perbaikan perangkat hingga pengembangan aplikasi, tim ahli kami siap membantu setiap tantangan teknis dan kreatif Anda.
          </Poppins>
        </div>
        
        <GlowingCards className="flex justify-center">
          {services.map(service => (
            <GlowingCard key={service.title} glowColor={service.glowColor}>
              <div className="flex flex-col items-start h-full">
                <div className="p-3 bg-gray-100 rounded-full mb-4">
                  {React.cloneElement(service.icon, { className: "h-6 w-6 text-gray-800" })}
                </div>
                <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                <p className="mt-2 text-sm text-gray-600 flex-grow">
                  {service.description}
                </p>
              </div>
            </GlowingCard>
          ))}
        </GlowingCards>
      </div>
    </section>
  );
};

export default FeaturedSection;