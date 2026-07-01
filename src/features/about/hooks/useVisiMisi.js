import { useEffect, useState } from "react";
import { getPeriode } from "../api/periodeService";

export const useVisiMisi = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await getPeriode();
        const periodeData = Array.isArray(result?.data) ? result.data : [];
        const activeItem = periodeData.find((item) => item.isActive) ?? periodeData[0] ?? null;
        setData(activeItem);
      } catch (err) {
        setError("Gagal memuat data visi dan misi.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};
