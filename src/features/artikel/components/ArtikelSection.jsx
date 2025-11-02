// import { useState } from "react";
// import { Poppins } from "../../../components/ui/Text";
// import { BentoGrid, BentoGridItem } from "../components/BentoGrid";
// import { Tabs } from "../../../components/Tabs";
// import { dataArtikel, tabsData } from "../data/useDataArtikel";

// export default function ArtikelSection() {
//   const [activeTab, setActiveTab] = useState(tabsData[0]);

//   const filteredArtikels =
//     activeTab.value === "semua"
//       ? dataArtikel
//       : dataArtikel.filter((artikel) => artikel.category === activeTab.value);

//   return (
//     <section className="py-20 bg-white relative animate-fade-in-up">
//       <div className="max-w-7xl mx-auto px-4 text-center mb-12">
//         <Poppins className="inline-block bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold tracking-wider uppercase">
//           Artikel Terbaru
//         </Poppins>
//         <h2 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900">
//           Jelajahi Artikel Kami
//         </h2>
//         <Poppins className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
//           Lihat Artikel & Berita Mulai dari Event Kampus hingga tren Teknologi.
//         </Poppins>
//       </div>

//       {/* Tabs Section */}
//       <div className="mt-12 w-full flex flex-col items-center">
//         <Tabs
//           tabs={tabsData}
//           activeTab={activeTab}
//           setActiveTab={setActiveTab}
//           containerClassName="w-full max-w-2xl"
//           activeTabClassName="bg-blue-100"
//         />
//       </div>

//       {/* Konten BentoGrid */}
//       <div className="px-4 mt-8">
//         <BentoGrid>
//           {filteredArtikels.map((item) => (
//             <BentoGridItem
//               key={item.id}
//               id={item.id}
//               title={item.title}
//               description={item.description}
//               header={item.header}
//               className={item.className}
//             />
//           ))}
//         </BentoGrid>
//       </div>
//     </section>
//   );
// }
