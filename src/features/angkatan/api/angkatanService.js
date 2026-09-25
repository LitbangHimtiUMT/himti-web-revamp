import apiClient from "../../../api/apiClient";

/**
 * Fetch list angkatan (ringan) untuk render tab.
 * Hanya mengambil id + year dari generation yang aktif.
 */
export const getAngkatanList = async () => {
  try {
    const response = await apiClient.get('/anggota/generations');
    return response.data;
  } catch (error) {
    console.error("Error fetching angkatan list:", error);
    throw error;
  }
};

/**
 * Fetch anggota per angkatan (lazy per tab).
 * @param {string|number} year Tahun angkatan (mis. '2022')
 * @param {number} page
 * @param {number} perPage
 */
export const getAnggotaByYear = async (year, page = 1, perPage = 100) => {
  try {
    const params = new URLSearchParams({
      year: String(year),
      isActive: 'true',
      page: String(page),
      perPage: String(perPage),
    });
    const response = await apiClient.get(`/anggota/public?${params.toString()}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching anggota year ${year}:`, error);
    throw error;
  }
};

// Backwards compatibility (jangan dipakai untuk halaman publik — beban berat).
export const getAllAnggota = async () => {
  try {
    const response = await apiClient.get('/anggota/public?perPage=500');
    return response.data;
  } catch (error) {
    console.error("Error fetching all anggota:", error);
    throw error;
  }
};