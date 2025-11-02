/* eslint-disable react/prop-types */
import { Poppins } from "../../../components/ui/Text";
import { Mail, Phone } from "lucide-react";

export const DosenCard = ({ item }) => {
  // Fungsi untuk membuat link WhatsApp 
  const createWhatsAppLink = (phone) => {
    if (!phone) return '#';
    const cleanedPhone = phone.replace(/[^0-9]/g, '');
    return `https://wa.me/${cleanedPhone}`;
  }

  return (
    <div className="rounded-2xl h-full w-full p-4 overflow-hidden bg-white border border-gray-200 group-hover:border-transparent relative z-20 transition-shadow duration-300">
      <div className="relative z-50">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover rounded-lg mb-4"
          loading="lazy"
        />
        <h4 className="text-gray-900 font-bold tracking-wide mt-2 text-lg">
          {item.name}
        </h4>
        <Poppins className="text-gray-500 text-sm">{item.title}</Poppins>
        <Poppins className="mt-2 text-xs text-gray-400">NIDN: {item.nidn}</Poppins>
        
        <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
          {item.email && (
            <a 
              href={`mailto:${item.email}`} 
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Mail size={14} />
              <span>{item.email}</span>
            </a>
          )}
          {item.phone && (
            <a 
              href={createWhatsAppLink(item.phone)} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
            >
              <Phone size={14} />
              <span>{item.phone}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};