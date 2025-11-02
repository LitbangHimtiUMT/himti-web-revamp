import { useState, useEffect, useMemo } from "react";
import { getStruktural } from "../api/strukturalService";

export const useStruktural = () => {
  const [allMembers, setAllMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Urutan prioritas role
  const rolePriority = [
    "KETUA HIMPUNAN",
    "WAKIL KETUA HIMPUNAN",
    "SEKRETARIS",
    "BENDAHARA HIMTI",
    "DEPARTMENT" // fallback untuk semua ketua departemen
  ];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await getStruktural();
        const formattedData = result.data.map((item) => ({
          id: item.id,
          name: item.Member.name,
          role: item.jabatan, 
          image: item.image,
          socials: {
            instagram: item.Member.instagram,
            linkedin: item.Member.linkedin,
          },
        }));
        setAllMembers(formattedData);
      } catch (err) {
        setError("Gagal memuat data struktural.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const { topTwo, middleFour, bottomFour } = useMemo(() => {
    // Normalisasi role agar sesuai rolePriority
    const normalizeRole = (role) => {
      const upper = role.toUpperCase();
      if (upper.includes("SEKRETARIS")) return "SEKRETARIS";
      if (upper.includes("BENDAHARA")) return "BENDAHARA HIMTI";
      if (upper.includes("KETUA DEPARTMENT")) return "DEPARTMENT";
      return upper;
    };

    const sortedMembers = [...allMembers].sort((a, b) => {
      const aRole = normalizeRole(a.role);
      const bRole = normalizeRole(b.role);

      const aIndex = rolePriority.indexOf(aRole);
      const bIndex = rolePriority.indexOf(bRole);

      const safeA = aIndex === -1 ? 999 : aIndex;
      const safeB = bIndex === -1 ? 999 : bIndex;

      return safeA - safeB;
    });

    // formasi 2-4-4
    const top = sortedMembers.slice(0, 2); 
    const middle = sortedMembers.slice(2, 6); 
    const bottom = sortedMembers.slice(6); 

    return { topTwo: top, middleFour: middle, bottomFour: bottom };
  }, [allMembers]);

  return { loading, error, topTwo, middleFour, bottomFour };
};
