import React from 'react';
import { useAgenda } from '../../../agenda/hooks/useAgenda';
import LoadingStatus from '../../../../components/LoadingStatus';
import { Poppins } from '../../../../components/ui/Text';
import { Button } from '../../../../components/ui/Button';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';

const formatDate = (isoString) => {
  if (!isoString) return '';
  const date = new Date(isoString);
  return date.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
};

const LatestAgendaSection = () => {
  const { loading, upcomingEvents } = useAgenda();

  // Ambil 3 acara terdekat
  const latestEvents = upcomingEvents.slice(0, 3);
  const spotlightEvent = latestEvents[0];
  const otherEvents = latestEvents.slice(1);

  if (loading) {
    return <div className="py-20"><LoadingStatus message="Memuat Agenda..." /></div>;
  }

  if (!spotlightEvent) {
    // tidak menampilkan apa-apa jika tidak ada acara
    return null;
  }

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Kegiatan <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-800">Terdekat</span>
          </h2>
          <Poppins className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Ikuti terus jadwal webinar, workshop, dan acara menarik lainnya dari kami.
          </Poppins>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Spotlight Card */}
          <Link to="/agenda" className="group block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="relative h-full">
              <img src={spotlightEvent.image} alt={spotlightEvent.name} className="absolute inset-0 w-full h-full object-cover" loading="lazy"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <div className="flex items-center gap-2 text-sm bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full w-fit">
                  <Calendar size={14} />
                  <span>{formatDate(spotlightEvent.startTime)}</span>
                </div>
                <h3 className="mt-4 text-2xl font-bold">{spotlightEvent.name}</h3>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                  <span>Lihat Detail</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </Link>

          {/* Other Events */}
          <div className="space-y-8">
            {otherEvents.map(event => (
              <Link to="/agenda" key={event.id} className="group flex gap-4 items-center bg-white p-4 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
                <img src={event.image} alt={event.name} className="w-24 h-24 object-cover rounded-md" />
                <div className="flex-grow">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar size={14} />
                    <span>{formatDate(event.startTime)}</span>
                  </div>
                  <h4 className="mt-2 text-lg font-bold text-gray-900">{event.name}</h4>
                </div>
                <ArrowRight className="text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-12 flex justify-center text-center">
            <Link to="/agenda">
                <Button variant="secondary" rounded="full" size="lg">
                 <div className="flex items-center gap-2 px-4">
                    <span>Lihat Semua Agenda</span>
                    <ArrowRight size={18} />
                  </div>
                  </Button>
            </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestAgendaSection;