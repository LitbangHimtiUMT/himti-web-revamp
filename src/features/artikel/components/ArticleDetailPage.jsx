// import { useParams } from "react-router-dom";
// import { dataArtikel } from "../data/useDataArtikel";
// import { Poppins } from "../../../components/ui/Text";

// export default function ArticleDetailPage() {
//   const { id } = useParams();
//   const article = dataArtikel.find((item) => item.id === parseInt(id));

//   if (!article) {
//     return (
//       <section className="py-20 bg-white">
//         <div className="max-w-4xl mx-auto px-4 text-center">
//           <h1 className="text-4xl font-bold">Artikel tidak ditemukan</h1>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-4xl mx-auto px-4">
//         <img
//           src={article.header}
//           alt={article.title}
//           className="w-full h-96 object-cover rounded-xl mb-8"
//         />
//         <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//           {article.title}
//         </h1>
//         <Poppins className="text-lg text-gray-600 leading-relaxed">
//           {article.longDescription}
//         </Poppins>
//       </div>
//     </section>
//   );
// }
