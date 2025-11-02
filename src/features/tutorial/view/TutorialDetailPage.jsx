import { useParams, Link } from "react-router-dom";
import { dataTutorial } from "../data/useDataTutorial";
import { Poppins } from "../../../components/ui/Text";
import Shimmer  from "../../../components/Shimmer";

export default function TutorialDetailPage() {
  const { id } = useParams();
  const tutorial = dataTutorial.find((item) => item.id === parseInt(id));

  if (!tutorial) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">Tutorial tidak ditemukan</h1>
          <Link to="/tutorial">
            <Shimmer className="mt-8">Kembali ke Semua Tutorial</Shimmer>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb sederhana */}
        <div className="mb-8 text-sm">
          <Link to="/tutorial" className="text-gray-500 hover:text-gray-800">
            Tutorial
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-800">{tutorial.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Kolom Kiri: Video Player */}
          <div className="lg:col-span-2">
            <div className="aspect-w-16 aspect-h-10 w-full overflow-hidden rounded-xl shadow-lg">
              <iframe
                src={`https://www.youtube.com/embed/${tutorial.youtubeId}`}
                title={tutorial.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-100"
              ></iframe>
            </div>
          </div>

          {/* Kolom Kanan: Deskripsi dan Materi */}
          <div className="lg:col-span-1">
            <h1 className="text-3xl font-bold text-gray-900 leading-tight">
              {tutorial.title}
            </h1>
            <Poppins className="mt-4 text-gray-600 leading-relaxed">
              {tutorial.longDescription}
            </Poppins>

            <div className="mt-8 pt-6 border-t">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Materi Tambahan
              </h3>
              <a href={tutorial.downloadUrl} download>
                <Shimmer>Download Materi (.ppt)</Shimmer>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}