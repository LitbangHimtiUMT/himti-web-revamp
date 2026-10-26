import { useEffect, useState } from "react";
import { getPeriode } from "../api/periodeService";

export const useVisiMisi = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPeriode = async () => {
    setError(null);
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

  useEffect(() => {
    fetchPeriode();
  }, []);

  // Sebelumnya hook ini tidak punya refetch, jadi ErrorStatus visi-misi
  // tampil TANPA tombol "Coba Lagi" — pengguna cuma bisa reload halaman.
  // Sekarang pola-nya disamakan dengan useProdi.
  const refetch = fetchPeriode;

  return { data, loading, error, refetch };
};
