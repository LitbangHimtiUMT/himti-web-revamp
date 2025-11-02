import { Poppins } from '../../../components/ui/Text';
import { Input } from '../../../components/ui/Input';
import { Button } from '../../../components/ui/Button';
import { Search, XCircle, CheckCircle } from 'lucide-react';
import { useSertifikat } from '../hooks/useSertifikat';

const SertifikatSection = () => {
  const { 
    sertifikatId, 
    setSertifikatId, 
    result, 
    isLoading, 
    handleValidation 
  } = useSertifikat();

  return (
    <section className="py-10 min-h-screen flex items-center bg-white">
      <div className="max-w-2xl w-full mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Validasi eSertifikat
        </h1>
        <Poppins className="mt-4 max-w-5xl mx-auto text-lg text-gray-600">
          Kamu dapat cek validitas e-Sertifikat dengan memasukan nomor e-sertifikat.
        </Poppins>

        {/* --- FORM  --- */}
        <form onSubmit={handleValidation} className="mt-10 max-w-lg mx-auto flex flex-col items-center gap-4">
          <Input 
            value={sertifikatId}
            onChange={(e) => setSertifikatId(e.target.value)}
            placeholder="Masukan nomor sertifikat Anda..."
            // Menambahkan style agar cocok dengan referensi
            className="text-center border-red-300 focus:border-red-500 focus:ring-red-500/50"
            rounded="full"
            inputSize="lg"
            inputStyle = "icon"
          />
          <div className="flex justify-center ">
            <Button 
              type="submit" 
              disabled={isLoading || !sertifikatId} 
              size="xl" 
              rounded="full"
              className="w-full bg-blue-800 hover:bg-blue-900" // Custom color
            >
              <div className="flex items-center justify-center gap-2">
                {isLoading ? 'Memeriksa...' : 'Validasi'}
                <Search size={18} />
              </div>
            </Button>
          </div>
        </form>

        <div className="mt-12 text-left">
          {result && !isLoading && (
            result.valid ? (
              <div className="p-6 bg-green-50 border-2 border-green-200 rounded-lg animate-fade-in-up">
                <div className="flex items-center gap-4">
                  <CheckCircle className="text-green-500" size={40} />
                  <div>
                    <h2 className="font-bold text-xl text-green-800">Sertifikat Valid & Terverifikasi</h2>
                    <p className="text-gray-600">Sertifikat ini diakui secara resmi oleh HIMTI UMT.</p>
                  </div>
                </div>
                <div className="mt-4 border-t border-green-200 pt-4 space-y-2">
                  <p><strong>Nomor:</strong> {result.data.id}</p>
                  <p><strong>Atas Nama:</strong> {result.data.name}</p>
                  <p><strong>Acara:</strong> {result.data.event}</p>
                  <p><strong>Tanggal:</strong> {result.data.date}</p>
                </div>
              </div>
            ) : (
              <div className="p-6 bg-red-50 border-2 border-red-200 rounded-lg animate-fade-in-up">
                <div className="flex items-center gap-4">
                  <XCircle className="text-red-500" size={40} />
                  <div>
                    <h2 className="font-bold text-xl text-red-800">Sertifikat Tidak Ditemukan</h2>
                    <p className="text-gray-600">Nomor sertifikat yang Anda masukkan tidak terdaftar di sistem kami.</p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default SertifikatSection;