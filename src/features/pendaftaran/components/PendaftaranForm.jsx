/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Button } from '../../../components/ui/Button';
import { Input } from '../../../components/ui/Input';
import { X, CheckCircle, AlertTriangle } from 'lucide-react';

const PendaftaranForm = ({ event, onClose, onSubmit, isSubmitting, formStatus }) => {
  const [formData, setFormData] = useState({
    name: '',
    nim: '',
    class: '',
    generation: '',
    registrationTypeId: event.id, // Ambil ID dari event yang dipilih
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

 const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);

    // Reset form setelah submit
    setFormData({
      name: '',
      nim: '',
      class: '',
      generation: '',
      registrationTypeId: event.id,
    });
  };
    
  const isClassRequired = event.type === 'BOOTCAMP' || event.type === 'LEARNING_GROUP';

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center border-b pb-4">
            <h2 className="text-xl font-bold text-gray-900">Form Pendaftaran: {event.title}</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600"><X /></button>
          </div>
          <form onSubmit={handleFormSubmit} className="mt-6 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">Nama Lengkap</label>
              <Input name="name" onChange={handleChange} value={formData.name}  required />
            </div>
            <div>
              <label htmlFor="nim" className="block text-sm font-medium">NIM</label>
              <Input name="nim" onChange={handleChange} value={formData.nim} required/>
            </div>
            <div>
            <label htmlFor="generation" className="block text-sm font-medium">Angkatan</label>
            <Input 
              name="generation" 
              type="number" 
              placeholder="contoh: 2022" 
              onChange={handleChange} 
              value={formData.generation} 
            />
            <p className="text-xs text-gray-500 mt-1">Masukkan tahun angkatan Anda.</p>
          </div>

          {isClassRequired && (
            <div>
              <label htmlFor="class" className="block text-sm font-medium">Kelas</label>
              <Input 
                name="class" 
                placeholder="contoh: TI-3-A1" 
                onChange={handleChange} 
                value={formData.class} 
              />
              <p className="text-xs text-gray-500 mt-1">Wajib diisi untuk Bootcamp & Kelompok Belajar.</p>
            </div>
          )}

            {formStatus.message && (
              <div className={`flex items-center gap-2 p-3 rounded-md text-sm ${
                formStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {formStatus.type === 'success' ? <CheckCircle size={20} /> : <AlertTriangle size={20} />}
                {formStatus.message}
              </div>
            )}

            <div className="pt-4">
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Mengirim...' : 'Daftar Sekarang'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PendaftaranForm;