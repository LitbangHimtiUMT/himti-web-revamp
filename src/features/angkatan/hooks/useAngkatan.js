import { useState, useEffect } from 'react';
import { getAngkatanList, getAnggotaByYear } from '../api/angkatanService';
import avatarNetral from '../../../core/assets/images/avatar-netral.jpg';

/**
 * Hook baru: lazy fetch per tab + cache per tahun.
 * - Fetch 1: list angkatan (ringan) saat komponen mount.
 * - Fetch 2: fetch anggota per angkatan hanya saat tab dipilih.
 * - Cache: tab yang sudah pernah dibuka tidak akan re-fetch.
 */
export const useAngkatan = () => {
  const [angkatanTabs, setAngkatanTabs] = useState([]);
  const [activeTab, setActiveTab] = useState(null);
  const [anggotaCache, setAnggotaCache] = useState({}); // { [year]: formattedList }
  const [loading, setLoading] = useState(true); // loading tabs awal
  const [loadingAnggota, setLoadingAnggota] = useState(false); // loading anggota per tab
  const [error, setError] = useState(null);

  // Fetch 1: list angkatan (ringan)
  useEffect(() => {
    let cancelled = false;
    const fetchTabs = async () => {
      setLoading(true);
      try {
        const result = await getAngkatanList();
                const rawList = Array.isArray(result?.data) ? result.data : [];
        // Filter:
        // 1. Skip sentinel entries { id: 'all', year: 'all' } (dari endpoint lama).
        // 2. Skip angkatan non-aktif (isActive === false).
        //    Note: endpoint /anggota/generations sudah pre-filter di server,
        //    tapi kalau fallback ke endpoint lama (/angkatan) yang punya
        //    `isActive`, filter ini menjaga UI tetap benar.
        const tabs = rawList
          .filter(
            (g) =>
              g &&
              g.year &&
              String(g.year).toLowerCase() !== 'all' &&
              g.isActive !== false
          )
          .map((g) => ({ title: `Angkatan ${g.year}`, value: String(g.year) }))
          .sort((a, b) => a.value.localeCompare(b.value));

        if (cancelled) return;
        setAngkatanTabs(tabs);
        if (tabs.length > 0) setActiveTab(tabs[0]);
      } catch (err) {
        if (!cancelled) setError('Gagal memuat daftar angkatan.');
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    fetchTabs();
    return () => {
      cancelled = true;
    };
  }, []);

  // Fetch 2: anggota per tahun (dengan cache)
  useEffect(() => {
    if (!activeTab) return;
    const year = activeTab.value;

    // Sudah ada di cache → skip.
    if (anggotaCache[year]) return;

    let cancelled = false;
    const fetchAnggota = async () => {
      setLoadingAnggota(true);
      try {
        const result = await getAnggotaByYear(year);
        const list = Array.isArray(result?.data) ? result.data : [];
        const formatted = list
          .filter((item) => item.isActive === true)
          .map((item) => ({
            id: item.id,
            name: item.name,
            year: item.generation?.year || year,
            image:
              item.photo && item.photo.startsWith('http')
                ? item.photo
                : avatarNetral,
            role: `Anggota Angkatan ${item.generation?.year || year}`,
            socials: {
              linkedin: item.linkedin,
              instagram: item.instagram,
              github: item.github,
            },
          }));

        if (cancelled) return;
        setAnggotaCache((prev) => ({ ...prev, [year]: formatted }));
      } catch (err) {
        if (!cancelled) {
          // Simpan array kosong ke cache agar tidak retry terus-menerus.
          setAnggotaCache((prev) => ({ ...prev, [year]: [] }));
        }
      } finally {
        if (!cancelled) setLoadingAnggota(false);
      }
    };

    fetchAnggota();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  const anggota = activeTab ? anggotaCache[activeTab.value] || [] : [];

  return {
    loading,
    loadingAnggota,
    error,
    angkatanTabs,
    anggota,
    activeTab,
    setActiveTab,
  };
};