/* eslint-disable react/prop-types */
import React from "react";
import { Poppins } from "../../../components/ui/Text";
import { Button } from "../../../components/ui/Button";
import { ArrowRight, Calendar, Users, MonitorPlay, Sparkles } from "lucide-react";

const EventCard = ({ event, onDaftarClick }) => {
  const getCategoryIcon = (category) => {
    switch(category) {
      case 'SEMINAR': return <Users size={14} className="text-blue-600" />;
      case 'BOOTCAMP': return <MonitorPlay size={14} className="text-amber-500" />;
      case 'LEARNING_GROUP': return <Calendar size={14} className="text-emerald-500" />;
      default: return null;
    }
  };

  const readableType = {
    SEMINAR: "Seminar",
    BOOTCAMP: "Bootcamp",
    LEARNING_GROUP: "Kelompok Belajar"
  };

  const isOpen = event.status === "Dibuka";

  const getStatusStyles = () => {
    switch (event.status) {
      case "Dibuka":
        return "bg-emerald-50 text-emerald-700 border-emerald-200/60";
      case "Segera Hadir":
        return "bg-blue-50 text-blue-700 border-blue-200/60";
      case "Ditutup":
        return "bg-rose-50 text-rose-700 border-rose-200/60";
      default:
        return "bg-slate-50 text-slate-600 border-slate-200/60";
    }
  };

  return (
    <div className="group relative flex flex-col bg-white border border-slate-100 rounded-[2.2rem] p-4 transition-all duration-500 hover:border-blue-200 hover:shadow-[0_30px_60px_-15px_rgba(30,58,138,0.08)] hover:-translate-y-2">
      
      {/* BACKGROUND INTERACTIVE GLOW EFFECTS */}
      <div className="absolute inset-0 rounded-[2.2rem] bg-gradient-to-br from-blue-600/0 via-transparent to-amber-500/0 group-hover:from-blue-500/[0.02] group-hover:to-amber-500/[0.03] transition-all duration-500 pointer-events-none" />

      {/* 1. IMAGE CONTAINER (SQUARE - INSTAGRAM SIZE) */}
      <div className="relative aspect-square w-full overflow-hidden rounded-[1.6rem] bg-slate-50 border border-slate-100">
        {/* Modern Minimalist Glass Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 z-10" />
        
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Floating Category Pill Inside Image */}
        <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm border border-white/40">
          {getCategoryIcon(event.category)}
          <span className="text-xs font-bold text-slate-800 tracking-wide uppercase">
            {readableType[event.category] || event.category}
          </span>
        </div>
      </div>

      {/* 2. CONTENT AREA */}
      <div className="flex flex-col flex-grow pt-5 px-2">
        
        {/* Status Line + Dynamic Dot & Conditional Sparkles */}
        <div className="flex items-center justify-between mb-3">
          <span className={`inline-flex items-center px-2.5 py-1 text-[11px] font-bold tracking-wider uppercase rounded-md border ${getStatusStyles()}`}>
            {isOpen && (
              <span className="relative flex h-1.5 w-1.5 mr-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
            )}
            {event.status}
          </span>
          
          {/* Label Terpopuler khusus untuk kategori LEARNING_GROUP saat pendaftaran dibuka */}
          {isOpen && event.category === 'LEARNING_GROUP' && (
            <span className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center text-xs font-semibold gap-1">
              <Sparkles size={12} className="animate-pulse" /> Terpopuler
            </span>
          )}
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-black text-slate-900 leading-snug tracking-tight group-hover:text-blue-700 transition-colors duration-300 line-clamp-2">
          {event.title}
        </h3>
        
        {/* Description */}
        <Poppins className="mt-2.5 text-slate-500 text-sm leading-relaxed line-clamp-2 font-medium">
          {event.description}
        </Poppins>
        
        {/* Subtle Decorative Rail */}
        <div className="w-full h-[1px] bg-slate-100/80 my-5" />

        <div className="mt-auto">
          <Button 
            className={`w-full group/btn relative overflow-hidden rounded-2xl py-3.5 transition-all duration-300 ${
              isOpen 
                ? 'bg-slate-900 text-white hover:bg-blue-600 shadow-md active:scale-[0.98]' 
                : 'bg-slate-100 text-slate-400 hover:bg-slate-100 cursor-not-allowed'
            }`}
            disabled={!isOpen}
            onClick={onDaftarClick} 
          >
            {/* Glossy Reflection Effect on Hover Button */}
            {isOpen && (
              <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover/btn:animate-shine" />
            )}
            
            <div className="relative z-10 flex items-center justify-center font-bold text-sm tracking-wider uppercase gap-2">
              <span>{isOpen ? 'Daftar Sekarang' : 'Informasi Lebih Lanjut'}</span>
              <ArrowRight 
                className={`h-4 w-4 transition-transform duration-300 ${
                  isOpen ? 'group-hover/btn:translate-x-2' : ''
                }`} 
              />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;