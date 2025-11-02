import apiClient from "../../../api/apiClient";

export const getAllAnggota = async () => {
  try {
    const response = await apiClient.get('/anggota?perPage=500');
    return response.data;
  } catch (error) {
    console.error("Error fetching all anggota:", error);
    throw error;
  }
};