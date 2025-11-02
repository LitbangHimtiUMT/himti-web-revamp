/* eslint-disable react/prop-types */
import { Poppins } from "../../../components/ui/Text";
import { TimelineItem } from "../../../components/Timeline";
import { motion } from "framer-motion";

// Helper function untuk mengubah data API menjadi format yang dibutuhkan TimelineItem
const formatEventForTimeline = (event) => {
  const startTime = new Date(event.startTime);

const descriptionText = event.description 
    ? event.description 
    : `Sebuah acara ${event.type === 'COMMON' ? 'Umum' : 'Lainnya'} yang diselenggarakan oleh HIMTI. ${event.isOpen ? 'Pendaftaran masih dibuka!' : ''}`; 
  
  return {
    id: event.id,
    title: event.name,
    date: startTime.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    time: startTime.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) + ' WIB',
    location: "Informasi Lokasi Menyusul", 
    description: descriptionText,
    tags: [event.type === 'COMMON' ? 'Umum' : 'Acara', event.isOpen ? 'Pendaftaran Dibuka' : 'Ditutup'],
    status: new Date(event.endTime) > new Date() ? 'upcoming' : 'finished',
    image: event.image, // Menambahkan properti image
  };
};

export default function AgendaSection({ upcomingEvents, finishedEvents }) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Kalender Kegiatan{" "}
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-800">
              HIMTI
            </span>
          </h2>
          <Poppins className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Jangan lewatkan setiap momen berharga! Ikuti terus jadwal webinar,
            workshop, dan acara menarik lainnya dari kami.
          </Poppins>
        </div>

        <div>
          {upcomingEvents.length > 0 && (
            <>
              <h3 className="text-2xl font-bold text-gray-800 mb-8 border-l-4 border-yellow-400 pl-4">
                Akan Datang
              </h3>
              <motion.div variants={containerVariants} initial="hidden" animate="visible">
                {upcomingEvents.map((event) => (
                  <TimelineItem key={event.id} item={formatEventForTimeline(event)} />
                ))}
              </motion.div>
            </>
          )}

          {finishedEvents.length > 0 && (
            <>
              <h3 className="text-2xl font-bold text-gray-800 my-16 border-l-4 border-gray-400 pl-4">
                Telah Selesai
              </h3>
              <motion.div variants={containerVariants} initial="hidden" animate="visible">
                {finishedEvents.map((event) => (
                  <TimelineItem key={event.id} item={formatEventForTimeline(event)} />
                ))}
              </motion.div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}