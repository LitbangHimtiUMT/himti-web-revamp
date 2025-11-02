/* eslint-disable react/prop-types */
import { Poppins } from "../../../components/ui/Text";
import { Button } from "../../../components/ui/Button";
import { ArrowRight } from "lucide-react";

const EventCard = ({ event, onDaftarClick }) => {
  const getStatusClass = () => {
    switch (event.status) {
      case "Dibuka":
        return "bg-green-100 text-green-800";
      case "Segera Hadir":
        return "bg-blue-100 text-blue-800";
      case "Ditutup":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

    const readableType = {
        SEMINAR: "Seminar",
        BOOTCAMP: "Bootcamp",
        LEARNING_GROUP: "Kelompok Belajar"
    };

  return (
    <div className="group flex flex-col h-full bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="aspect-video overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-center">
          <span className="text-sm font-semibold text-blue-600">
            {readableType[event.category] || event.category}
        </span>
          <span className={`px-3 py-1 text-xs font-bold rounded-full ${getStatusClass()}`}>{event.status}</span>
        </div>
        <h3 className="mt-4 text-xl font-bold text-gray-900">{event.title}</h3>
        <Poppins className="mt-2 text-gray-600 text-sm flex-grow">
          {event.description}
        </Poppins>
        <div className="mt-6">
          <Button 
            className="w-full" 
            disabled={event.status !== 'Dibuka'}
            onClick={onDaftarClick} // Gunakan fungsi dari props untuk membuka modal
          >
            <div className="flex items-center">
            {event.status === 'Dibuka' ? 'Daftar Sekarang' : 'Informasi Lebih Lanjut'}
            <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;