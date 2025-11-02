import { useState, useEffect, useCallback } from 'react';
import { dataTutorial } from '../data/useDataTutorial';

export const useTutorial = () => {
  const [tutorials, setTutorials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTutorials = useCallback(() => {
    setLoading(true);
    try {
      const formattedTutorials = dataTutorial.map(t => ({
        ...t,
        image: `https://img.youtube.com/vi/${t.videoId}/hqdefault.jpg`,
      }));
      setTutorials(formattedTutorials);
    } catch (err) {
      setError('Gagal memuat data tutorial.');
    } finally {

      setTimeout(() => setLoading(false), 500);
    }
  }, []);

  useEffect(() => {
    fetchTutorials();
  }, [fetchTutorials]);

  return { loading, error, tutorials, fetchTutorials };
};