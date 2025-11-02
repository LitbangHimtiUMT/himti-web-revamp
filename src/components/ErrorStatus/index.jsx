/* eslint-disable react/prop-types */
import { AlertTriangle } from 'lucide-react';
import { Poppins } from '../ui/Text';
import { Button } from '../ui/Button';

const ErrorStatus = ({ message, onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-4">
      <div className="p-4 bg-red-100 rounded-full">
        <AlertTriangle size={40} className="text-red-600" />
      </div>
      <h2 className="mt-6 text-2xl font-bold text-gray-800">
        Oops! Terjadi Masalah
      </h2>
      <Poppins className="mt-2 max-w-md mx-auto text-gray-600">
        {message || "Kami tidak dapat memuat data yang Anda minta. Silakan coba lagi beberapa saat."}
      </Poppins>
      {onRetry && (
        <Button 
          onClick={onRetry} 
          className="mt-6 bg-red-600 hover:bg-red-700 text-white"
        >
          Coba Lagi
        </Button>
      )}
    </div>
  );
};

export default ErrorStatus;