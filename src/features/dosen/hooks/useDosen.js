import { useState, useEffect, useCallback } from 'react';
import { getDosen } from '../api/dosenService';
import avatarNetral from '../../../core/assets/images/avatar-netral.jpg';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useDosen = () => {
  const [dosen, setDosen] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDosen = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await getDosen();
      
     const formattedData = result.data.map(item => {
        // avatar default
        const fallbackImage = avatarNetral;

        return {
          id: item.id,
          name: item.name,
          title: item.lesson || "Dosen Teknik Informatika",
          nidn: item.nidn,
          image: item.image ? `${API_BASE_URL}${item.image}` : fallbackImage,
          email: item.email,
          phone: item.numberPhone,
        };
      });

      setDosen(formattedData);
    } catch (err) {
      setError("Gagal memuat data dosen.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDosen();
  }, [fetchDosen]);

  return { loading, error, dosen, fetchDosen };
};