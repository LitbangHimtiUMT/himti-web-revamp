import { useState } from 'react';

export const useServiceForm = () => {
  const [formData, setFormData] = useState({ title: '', description: '', image: null });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData(prev => ({ ...prev, image: files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const phoneNumber = '6285210493501';

      const message = `
Halo, saya ingin mengajukan permintaan layanan dari Klinik Teknologi HIMTI.

*Judul Permintaan:*
${formData.title}

*Deskripsi Masalah:*
${formData.description}

Terima kasih.
      `.trim(); 

      // Encode pesan agar sesuai format URL
      const encodedMessage = encodeURIComponent(message);

      // URL lengkap untuk WhatsApp
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      window.open(whatsappURL, '_blank');

      //  pesan sukses di halaman 
      setStatus({ type: 'success', message: 'Anda telah dialihkan ke WhatsApp! Silakan kirim pesan Anda.' });

      setFormData({ title: '', description: '', image: null });
      // Reset input file secara manual jika diperlukan
      const fileInput = document.getElementById('image');
      if (fileInput) fileInput.value = '';

    } catch (error) {
      // handle error
      console.error("Gagal membuat link WhatsApp:", error);
      setStatus({ type: 'error', message: 'Gagal mengalihkan ke WhatsApp. Silakan coba lagi.' });
    } finally {
      setIsLoading(false);
    }
  };

  return { formData, status, isLoading, handleChange, handleSubmit };
};