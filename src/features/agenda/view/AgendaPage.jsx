import React from 'react';
import { useAgenda } from '../hooks/useAgenda'; 
import AgendaSection from '../components/AgendaSection';
import LoadingStatus from '../../../components/LoadingStatus'; 
import ErrorStatus from '../../../components/ErrorStatus';
import { StatusError } from '../../../components/StatusDisplay';

const AgendaPage = () => {
  // Panggil state dan fungsi
  const {
    loading,
    error,
    upcomingEvents,
    finishedEvents,
    fetchAcara,
  } = useAgenda();

  //  UI berdasarkan state dari hook
  if (loading) {
    return <LoadingStatus />; 
  }

  if (error) {
    return <ErrorStatus message={error} onRetry={fetchAcara} />;
  }

  if (upcomingEvents.length === 0 && finishedEvents.length === 0) {
    return <StatusError message="Saat ini belum ada data kegiatan." />
  }

  return (
    <AgendaSection
      upcomingEvents={upcomingEvents}
      finishedEvents={finishedEvents}
    />
  );
};

export default AgendaPage;