import { useState, useEffect } from "react";
import { getProdiStructural } from "../api/prodiService";

export const useProdi = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await getProdiStructural();
        // Format data dari API sesuai struktur
        const formattedData = result.data.map((item) => ({
          id: item.id,
          name: item.name,
          role: item.role,
          image: item.image,
          bio: item.bio,
          sequence: item.sequence,
          isActive: item.isActive,
        }));
        // Sort berdasarkan sequence
        formattedData.sort((a, b) => a.sequence - b.sequence);
        setMembers(formattedData);
      } catch (err) {
        setError("Gagal memuat data struktural prodi.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const refetch = async () => {
    try {
      setLoading(true);
      const result = await getProdiStructural();
      const formattedData = result.data.map((item) => ({
        id: item.id,
        name: item.name,
        role: item.role,
        image: item.image,
        bio: item.bio,
        sequence: item.sequence,
        isActive: item.isActive,
      }));
      formattedData.sort((a, b) => a.sequence - b.sequence);
      setMembers(formattedData);
    } catch (err) {
      setError("Gagal memuat data struktural prodi.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { members, loading, error, refetch };
};
