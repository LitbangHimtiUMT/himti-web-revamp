import { useState, useEffect, useCallback } from 'react';
import {
  getRegistrationTypes,
  createEventRegistration,
} from '../api/pendaftaranService';
import { WHATSAPP_GROUPS } from '../constants/whatsappGroups';
import { getAcara } from '../../agenda/api/acaraService';

export const usePendaftaran = () => {
  const [registrationTypes, setRegistrationTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchEvents = useCallback(async () => {
    setLoading(true);
    try {
      const [regTypesResult, acaraResult] = await Promise.all([
        getRegistrationTypes(),
        getAcara().catch(() => ({ data: [] })),
      ]);

      const eventsList = acaraResult.data || [];
      const eventImageMap = new Map();
      eventsList.forEach(event => {
        if (event.id && event.image) {
          eventImageMap.set(event.id, event.image);
        }
      });

      const formattedData = regTypesResult.data.map((item) => {
        const mappedImage = item.eventId ? eventImageMap.get(item.eventId) : null;
        return {
          id: item.id,
          title: item.name,
          category: item.type,
          image: item.image || mappedImage || `/images/himti-logo.png`,
          link: item.link,
          description:
            item.description ||
            `Pendaftaran untuk ${item.name} periode ${item.year}.`,
          status: item.isActive ? 'Dibuka' : 'Ditutup',
          type: item.type,
          eventId: item.eventId,
        };
      });
      setRegistrationTypes(formattedData);
    } catch (err) {
      setError('Gagal memuat daftar pendaftaran.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  const submitRegistration = async (formData) => {
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    const payload = new FormData();

    // data Field yang dibutuhin API
    payload.append('name', formData.name);
    payload.append('class', formData.class);
    payload.append('registrationTypeId', formData.registrationTypeId);

    if (formData.phoneNumber) {
      payload.append('phoneNumber', formData.phoneNumber);
    }

    if (formData.nim) {
      payload.append('nim', formData.nim);
    }

    if (formData.prodi) {
      payload.append('prodi', formData.prodi);
    }

    if (formData.institution) {
      payload.append('institution', formData.institution);
    }

    if (formData.generation && !isNaN(Number(formData.generation))) {
      payload.append('generation', Number(formData.generation));
    }

    if (formData.image) {
      payload.append('image', formData.image);
    }

    if (formData.eventId) {
      payload.append('eventId', formData.eventId);
    } else {
      setFormStatus({
        type: 'error',
        message: 'Gagal memuat eventId. Coba refresh halaman.',
      });
      setIsSubmitting(false);
      return;
    }

    console.log('Payload API KELAR');
    for (let [key, value] of payload.entries()) {
      console.log(`  ${key}:`, value);
    }

    try {
      const response = await createEventRegistration(payload); 
      let successLink = response.data?.link;

      if (formData.programBidang && WHATSAPP_GROUPS[formData.programBidang]) {
        successLink = WHATSAPP_GROUPS[formData.programBidang];
      }

      setFormStatus({
        type: 'success',
        message: 'Anda berhasil terdaftar!',
        link: successLink || '',
      });
    } catch (err) {
      console.error('Error response:', err.response?.data);
      const errorMessage =
        err.response?.data?.message || 'Gagal mendaftar. Silakan coba lagi.';
      setFormStatus({ type: 'error', message: errorMessage, link: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    loading,
    error,
    registrationTypes,
    selectedEvent,
    setSelectedEvent,
    formStatus,
    isSubmitting,
    submitRegistration,
    refetch: fetchEvents,
    setFormStatus,
  };
};
