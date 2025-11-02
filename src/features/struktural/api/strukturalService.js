import apiClient from "../../../api/apiClient";

export const getStruktural = async () => {
  try {
    const response = await apiClient.get('/struktural');
    return response.data;
  } catch (error) {
    console.error("Error fetching struktural data:", error);
    throw error;
  }
};