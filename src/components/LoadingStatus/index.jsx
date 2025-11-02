import { LoaderCircle } from 'lucide-react';
import { Poppins } from '../ui/Text';

const LoadingStatus = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-4">
      <LoaderCircle size={40} className="text-yellow-500 animate-spin" />
      <Poppins className="mt-4 text-lg text-gray-600">
        {message || "Sedang memuat data..."}
      </Poppins>
    </div>
  );
};

export default LoadingStatus;