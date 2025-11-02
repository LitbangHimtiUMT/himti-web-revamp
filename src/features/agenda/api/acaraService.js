import apiClient from "../../../api/apiClient";

export const getAcara = async () => {
  try {
    const response = await apiClient.get('/acara');
    return response.data;
  } catch (error) {
    console.error("Error fetching acara:", error);
    throw error; 
  }
};