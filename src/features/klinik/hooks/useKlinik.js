import { useState, useEffect, useCallback, useMemo } from 'react';
import { getBusinessData } from '../api/klinikService';

export const useKlinik = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await getBusinessData();
      setItems(result.data);
    } catch (err) {
      setError('Gagal memuat data Klinik & Merchandise.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Memisahkan data merchandise dan service menggunakan useMemo
  const { merchandise, services } = useMemo(() => {
    const merch = items.filter(item => item.type === 'MERCHANDISE');
    const srv = items.filter(item => item.type === 'SERVICE');
    return { merchandise: merch, services: srv };
  }, [items]);

  return { loading, error, merchandise, services, fetchData };
};