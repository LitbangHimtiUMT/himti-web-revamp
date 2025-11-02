import { Button } from '../../../components/ui/Button';
import { Input } from '../../../components/ui/Input';
import { Poppins } from '../../../components/ui/Text';
import { useServiceForm } from '../hooks/useServiceForm';
import { AlertTriangle, CheckCircle } from 'lucide-react'; 
import servicePhoto from '../../../core/assets/images/service.jpg'

export default function ServiceSection() {
  const { formData, status, isLoading, handleChange, handleSubmit } = useServiceForm();

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* judul */}
        <div className="text-center mb-12">
          <Poppins className="text-white font-semibold bg-yellow-400 px-6 py-2 rounded-full tracking-wider uppercase text-sm mx-auto w-fit">
            Klinik Teknologi
          </Poppins>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900">
            Butuh Bantuan? Sampaikan di Sini
          </h2>
          <Poppins className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            Punya masalah dengan tugas, laptop, atau butuh jasa instalasi? Isi form di bawah dan tim kami akan segera membantu Anda.
          </Poppins>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Kolom Kiri: Ilustrasi */}
          <div className="hidden md:block">
            <img 
              src={servicePhoto}
              alt="Klinik Teknologi"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
              loading="lazy"
            />
          </div>

          {/* Kolom Kanan: Form */}
          <div className="max-w-lg mx-auto w-full">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Judul Permintaan</label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="cth: Install Ulang Windows 11"
                  required
                />
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Deskripsi Masalah</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={5}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm "
                  placeholder="Jelaskan masalah atau kebutuhan Anda secara detail..."
                  required
                />
              </div>
              
              <p className="text-xs text-center text-gray-500">
                Jika ada gambar/screenshot, Anda dapat mengirimkannya langsung di WhatsApp.
              </p>

              {status.message && (
                <div className={`flex items-center gap-2 p-3 rounded-md text-sm ${
                  status.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {status.type === 'success' ? <CheckCircle size={20} /> : <AlertTriangle size={20} />}
                  {status.message}
                </div>
              )}
              <div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? 'Mengarahkan...' : 'Kirim via WhatsApp'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}