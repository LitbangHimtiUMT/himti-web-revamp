import apiClient from "../../../api/apiClient";

export const getPrestasi = async () => {
  try {
    const response = await apiClient.get('/prestasi');
    return response.data;
  } catch (error) {
    console.error("Error fetching prestasi:", error);
    throw error;
  }
};