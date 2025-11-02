import { useState } from 'react';
import { mockCertificate } from '../data/mockSertifikat';

export const useSertifikat = () => {
  const [sertifikatId, setSertifikatId] = useState('');
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleValidation = async (e) => {
    e.preventDefault();
    if (!sertifikatId) return;

    setIsLoading(true);
    setResult(null);

    // Simulasi pemanggilan API
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Logika statis untuk saat ini
    if (sertifikatId.toUpperCase() === mockCertificate.id) {
      setResult({ valid: true, data: mockCertificate });
    } else {
      setResult({ valid: false, data: null });
    }
    setIsLoading(false);
  };

  return { 
    sertifikatId, 
    setSertifikatId, 
    result, 
    isLoading, 
    handleValidation 
  };
};