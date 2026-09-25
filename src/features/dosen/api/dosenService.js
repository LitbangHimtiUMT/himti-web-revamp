import apiClient from "../../../api/apiClient";

/**
 * Fetch daftar dosen dari endpoint publik (tanpa auth).
 * @param {string} search Optional query pencarian.
 * @param {number} page
 * @param {number} perPage
 */
export const getDosen = async (search = '', page = 1, perPage = 50) => {
  try {
    const params = new URLSearchParams({
      perPage: String(perPage),
      page: String(page),
    });
    if (search) params.set('search', search);

    const response = await apiClient.get(`/dosen/public?${params.toString()}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching dosen:", error);
    throw error;
  }
};