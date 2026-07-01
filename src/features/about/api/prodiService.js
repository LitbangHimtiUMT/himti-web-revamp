import apiClient from "../../../api/apiClient";

export const getProdiStructural = async () => {
  try {
    const response = await apiClient.get('/prodi-structural');
    return response.data;
  } catch (error) {
    console.error("Error fetching prodi structural data:", error);
    throw error;
  }
};
