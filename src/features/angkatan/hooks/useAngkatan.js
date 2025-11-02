import { useState, useEffect, useMemo } from 'react';
import { getAllAnggota } from '../api/angkatanService';
import avatarNetral from '../../../core/assets/images/avatar-netral.jpg';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useAngkatan = () => {
  const [allAnggota, setAllAnggota] = useState([]);
  const [angkatanTabs, setAngkatanTabs] = useState([]);
  const [activeTab, setActiveTab] = useState(null);
  const [filteredAnggota, setFilteredAnggota] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await getAllAnggota();
        const formattedData = result.data
          .filter(item => item.isActive === true)
          .map(item => ({
            id: item.id,
            name: item.name,
            year: item.generation.year,
            image: item.photo && item.photo.startsWith('http') ? item.photo : avatarNetral,
            role: `Anggota Angkatan ${item.generation.year}`,
            socials: {
              linkedin: item.linkedin,
              instagram: item.instagram,
              github: item.github,
            }
          }));
        setAllAnggota(formattedData);
      } catch (err) {
        setError("Gagal memuat data anggota.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (allAnggota.length > 0) {
      const years = [...new Set(allAnggota.map(item => item.year))];
      const sortedYears = years.sort();

      const tabs = sortedYears.map(year => ({
        title: `Angkatan ${year}`,
        value: year,
      }));
      
      setAngkatanTabs(tabs);
      if (tabs.length > 0) {
        setActiveTab(tabs[0]);
      }
    }
  }, [allAnggota]);

  useEffect(() => {
    if (activeTab) {
      const filtered = allAnggota.filter(member => member.year === activeTab.value);
      setFilteredAnggota(filtered);
    }
  }, [activeTab, allAnggota]);

  return { loading, error, angkatanTabs, anggota: filteredAnggota, activeTab, setActiveTab };
};