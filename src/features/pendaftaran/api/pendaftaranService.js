import apiClient from "../../../api/apiClient";

// Mengambil daftar acara/tipe pendaftaran yang aktif
export const getRegistrationTypes = async () => {
  try {
    const response = await apiClient.get('/registration-type?isActive=true');
    return response.data;
  } catch (error) {
    console.error("Error fetching registration types:", error);
    throw error;
  }
};

// Mengirim data pendaftaran baru
export const createEventRegistration = async (data) => {
  try {
    const response = await apiClient.post('/event-registration', data);
    return response.data;
  } catch (error) {
    console.error("Error creating event registration:", error);
    throw error;
  }
};