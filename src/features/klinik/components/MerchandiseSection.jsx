/* eslint-disable react/prop-types */
import ProductCard from "./ProductCard";
import { Poppins } from "../../../components/ui/Text"; 

const MerchandiseSection = ({ merchandise }) => {
  return (
    <section id="merchandise" className="bg-gray-10 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Poppins className="inline-block bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold tracking-wider uppercase">
            HIMTI Official Merch
          </Poppins>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900">
            Koleksi Eksklusif HIMTI
          </h2>
          <Poppins className="mt-4 max-w-3xl mx-auto text-lg text-gray-500">
            Tunjukkan identitasmu sebagai bagian dari keluarga besar Teknik Informatika dengan merchandise resmi dan berkualitas dari kami.
          </Poppins>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {merchandise.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MerchandiseSection;