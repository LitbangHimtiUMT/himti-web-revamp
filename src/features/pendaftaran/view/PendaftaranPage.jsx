import React from "react";
import { usePendaftaran } from "../hooks/usePendaftaran";
import ErrorStatus from "../../../components/ErrorStatus";
import PendaftaranSection from "../components/PendaftaranSection";

const PendaftaranPage = () => {
  const {
    loading,
    error,
    registrationTypes,
    selectedEvent,
    setSelectedEvent,
    formStatus,
    isSubmitting,
    submitRegistration,
    refetch,
    setFormStatus,
  } = usePendaftaran();

  if (error) return <ErrorStatus message={error} onRetry={refetch} />;

  return (
    <PendaftaranSection
      loading={loading}
      registrationTypes={registrationTypes}
      selectedEvent={selectedEvent}
      setSelectedEvent={setSelectedEvent}
      submitRegistration={submitRegistration}
      isSubmitting={isSubmitting}
      formStatus={formStatus}
      setFormStatus={setFormStatus}
    />
  );
};

export default PendaftaranPage;
