import { useState, useEffect, useCallback, useMemo } from 'react';
import { getAcara } from '../api/acaraService';

export const useAgenda = () => {
  const [acara, setAcara] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAcara = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await getAcara();
      setAcara(result.data);
    } catch (err) {
      setError('Gagal memuat agenda kegiatan.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAcara();
  }, [fetchAcara]);

  const { upcomingEvents, finishedEvents } = useMemo(() => {
    const now = new Date();
    // Urutkan acara dari yang paling dekat tanggalnya
    const sortedAcara = [...acara].sort((a, b) => new Date(a.startTime) - new Date(b.startTime));

    const upcoming = [];
    const finished = [];

    sortedAcara.forEach(event => {
      const endTime = new Date(event.endTime);
      if (endTime > now) {
        upcoming.push(event);
      } else {
        finished.push(event);
      }
    });

    return { upcomingEvents: upcoming, finishedEvents: finished };
  }, [acara]);

  return { loading, error, upcomingEvents, finishedEvents, fetchAcara };
};