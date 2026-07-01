import apiClient from "../../../api/apiClient";

export const getPeriode = async () => {
  try {
    const response = await apiClient.get('/periode');
    return response.data;
  } catch (error) {
    console.error("Error fetching periode:", error);
    throw error;
  }
};
