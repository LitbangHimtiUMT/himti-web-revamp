import apiClient from "../../../api/apiClient";

export const getBusinessData = async () => {
  try {
    const response = await apiClient.get('/business/merchandise');
    return response.data;
  } catch (error) {
    console.error("Error fetching business data:", error);
    throw error;
  }
};
