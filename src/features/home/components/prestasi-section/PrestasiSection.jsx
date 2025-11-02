import { useState, useEffect } from 'react';
import { getPrestasi } from '../../api/prestasiService';
import { ParallaxScroll } from "./ParallaxScroll";
import { Poppins } from "../../../../components/ui/Text";
import Shimmer from '../../../../components/Shimmer';
import { StatusError } from '../../../../components/StatusDisplay';

export default function PrestasiSection() {
  const [prestasiItems, setPrestasiItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAndFormatPrestasi = async () => {
      try {
        const result = await getPrestasi();
        // Transformasi data dari API ke format yang dibutuhkan ParallaxScroll
        const formattedData = result.data.map(item => ({
          title: item.title,
          description: item.description,
          badge: item.badge,
          src: item.image, 
        }));
        setPrestasiItems(formattedData);
      } catch (err) {
        setError("Gagal memuat jejak prestasi kami.");
      } finally {
        setLoading(false);
      }
    };

    fetchAndFormatPrestasi();
  }, []);

  if (loading) {
    // Menampilkan shimmer effect saat data sedang dimuat
    return (
        <section className="bg-white py-10">
            <div className="max-w-7xl mx-auto">
                <Shimmer type="parallax" />
            </div>
        </section>
    );
  }

  if (error) {
    // Menampilkan pesan error jika API gagal
    return <StatusError message={error} />;
  }

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-10 text-center animate-fade-in-up">
        <Poppins className="inline-block bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold tracking-wider uppercase">
          Pencapaian Kami
        </Poppins>
        <h2 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900">
          Jejak Prestasi HIMTI UMT
        </h2>
        <Poppins className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
          Beberapa dari sekian banyak pencapaian yang telah diraih oleh anggota
          dan tim HIMTI dalam berbagai kompetisi nasional.
        </Poppins>
      </div>

      {/* Komponen ParallaxScroll sekarang menerima data dari API */}
      <ParallaxScroll items={prestasiItems} />

      <div className="text-center pb-20" />
    </section>
  );
}