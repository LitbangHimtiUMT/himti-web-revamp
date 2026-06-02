/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '../../../components/ui/Button';
import { 
  X, AlertTriangle, LoaderCircle, UploadCloud, 
  User, CreditCard, GraduationCap, Phone, BookOpen 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion'; 
import { SuccessModal } from './SuccesModal'; 

const PendaftaranForm = ({
  event,
  onClose,
  onSubmit,
  isSubmitting,
  formStatus,
  setFormStatus,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    class: '',
    nim: '',
    generation: '',
    phoneNumber: '',
    image: null,
    registrationTypeId: event.id,
    eventId: event.eventId,
    programBidang: '',
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    return () => {
      if (imagePreview) URL.revokeObjectURL(imagePreview);
    };
  }, [imagePreview]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const files = e.target.files || e.dataTransfer.files;
    if (files && files.length > 0) {
      const file = files[0];
      setFormData((prev) => ({ ...prev, image: file }));
      if (imagePreview) URL.revokeObjectURL(imagePreview);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = (e) => {
    e.preventDefault();
    setImagePreview(null);
    setFormData((prev) => ({ ...prev, image: null }));
    if (fileInputRef.current) fileInputRef.current.value = null;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); 
    if (isBootcamp && !formData.image) {
      setFormStatus({
        type: 'error',
        message: 'Foto bukti pembayaran wajib diunggah!',
        link: '',
      });
      return; 
    }
    onSubmit(formData);
  };

  const handleCloseForm = () => {
    setFormData({
      name: '', class: '', nim: '', generation: '', phoneNumber: '', 
      image: null, registrationTypeId: event.id, eventId: event.eventId,
      programBidang: '',
    });
    setImagePreview(null);
    setFormStatus({ type: '', message: '', link: '' });
    onClose();
  };

  const isClassRequired = event.type === 'BOOTCAMP' || event.type === 'LEARNING_GROUP';
  const isBootcamp = event.type === 'BOOTCAMP';
  const isLearningGroup = event.type === 'LEARNING_GROUP';

  const textVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: 20, opacity: 0 },
  };

  return (
    <>
     <SuccessModal
        show={formStatus.type === "success"}
        message={formStatus.message}
        link={formStatus.link}
        onClose={() => {
          setFormStatus({ type: "", message: "", link: "" });
          onClose(); 
        }}
      />

      <AnimatePresence>
        {formStatus.type !== 'success' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="w-full max-w-2xl max-h-[90vh] overflow-hidden bg-white rounded-3xl shadow-2xl flex flex-col relative"
            >
              {/* Header Gradient Aksen */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-amber-500 to-blue-600" />

              {/* Header */}
              <div className="px-8 py-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <div>
                  <h2 className="text-xl font-extrabold text-slate-800 tracking-tight">
                    Pendaftaran Event
                  </h2>
                  <p className="text-sm text-slate-500 font-medium mt-1">{event.title}</p>
                </div>
                <button
                  onClick={handleCloseForm}
                  className="p-2 bg-white rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors shadow-sm border border-slate-200"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Body Form */}
              <div className="p-8 overflow-y-auto custom-scrollbar">
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  
                  {/* Grid Layout untuk memadatkan form */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Nama Lengkap - Full Width */}
                    <div className="col-span-1 md:col-span-2">
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Nama Lengkap</label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                        </div>
                        <input
                          name="name"
                          type="text"
                          className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none transition-all duration-300 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 text-slate-800"
                          placeholder="Masukkan nama lengkap"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    {/* NIM - Half Width */}
                    <div className="col-span-1">
                      <label className="block text-sm font-semibold text-slate-700 mb-2">NIM</label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <CreditCard className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                        </div>
                        <input
                          name="nim"
                          type="text"
                          inputMode="numeric"
                          className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none transition-all duration-300 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 text-slate-800"
                          placeholder="Contoh: 20210001"
                          onKeyDown={(e) => {
                            if (!/[0-9]/.test(e.key) && !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight'].includes(e.key)) e.preventDefault();
                          }}
                          value={formData.nim}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    {/* Angkatan - Half Width */}
                    <div className="col-span-1">
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Angkatan</label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <GraduationCap className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                        </div>
                        <input
                          name="generation"
                          type="number"
                          className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none transition-all duration-300 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 text-slate-800"
                          placeholder="Contoh: 2024"
                          value={formData.generation}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    {/* Kelas (Conditional) */}
                    {isClassRequired && (
                      <div className="col-span-1 md:col-span-2">
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Kelas</label>
                        <div className="relative group">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <BookOpen className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                          </div>
                          <input
                            name="class"
                            type="text"
                            className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none transition-all duration-300 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 text-slate-800"
                            placeholder="Contoh: TI-01-A1"
                            value={formData.class}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                    )}

                    {/* Program Bidang (Conditional for LEARNING_GROUP) */}
                    {isLearningGroup && (
                      <div className="col-span-1 md:col-span-2">
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Program Bidang <span className="text-red-500">*</span></label>
                        <div className="relative group">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                            <BookOpen className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                          </div>
                          <select
                            name="programBidang"
                            className="w-full pl-11 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none transition-all duration-300 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 text-slate-800 appearance-none relative cursor-pointer"
                            value={formData.programBidang}
                            onChange={handleChange}
                            required
                          >
                            <option value="" disabled>Pilih Program Bidang</option>
                            <option value="Web Development">Web Development</option>
                            <option value="Mobile Development">Mobile Development</option>
                            <option value="UI/UX Design">UI/UX Design</option>
                            <option value="Cyber Security">Cyber Security</option>
                            <option value="Networking">Networking</option>
                          </select>
                          <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Nomor WhatsApp - Full Width */}
                    <div className="col-span-1 md:col-span-2">
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Nomor WhatsApp</label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Phone className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                        </div>
                        <input
                          name="phoneNumber"
                          type="tel"
                          inputMode="numeric"
                          className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none transition-all duration-300 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 text-slate-800"
                          placeholder="Mulai dengan 08..."
                          onKeyDown={(e) => {
                            if (!/[0-9]/.test(e.key) && !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight'].includes(e.key)) e.preventDefault();
                          }}
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    {/* Upload Bukti Pembayaran (Conditional) */}
                    {isBootcamp && (
                      <div className="col-span-1 md:col-span-2 pt-2">
                        <label className="block text-sm font-semibold text-slate-700 mb-3">Bukti Pembayaran</label>
                        
                        {imagePreview ? (
                          <div className="relative w-full p-2 border-2 border-slate-200 rounded-2xl bg-slate-50">
                            <img src={imagePreview} alt="Preview Bukti Pembayaran" className="w-full h-48 object-contain rounded-xl bg-white" />
                            <button
                              onClick={handleRemoveImage}
                              className="absolute -top-3 -right-3 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors shadow-lg hover:scale-110"
                              title="Hapus gambar"
                            >
                              <X size={16} strokeWidth={3} />
                            </button>
                          </div>
                        ) : (
                          <label
                            className={`relative flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-2xl cursor-pointer transition-all duration-300
                              ${dragActive ? 'border-blue-500 bg-blue-50/50' : 'border-slate-300 bg-slate-50 hover:bg-slate-100 hover:border-slate-400'}`}
                            onDragEnter={() => setDragActive(true)}
                            onDragLeave={() => setDragActive(false)}
                            onDragOver={(e) => e.preventDefault()}
                            onDrop={(e) => {
                              e.preventDefault();
                              setDragActive(false);
                              handleFileChange(e);
                            }}
                          >
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                              <div className={`p-3 rounded-full mb-3 transition-colors ${dragActive ? 'bg-blue-100 text-blue-600' : 'bg-slate-200 text-slate-500'}`}>
                                <UploadCloud size={28} />
                              </div>
                              <p className="mb-1 text-sm text-slate-600">
                                <span className="font-semibold text-blue-600">Klik untuk unggah</span> atau seret file ke sini
                              </p>
                              <p className="text-xs text-slate-400 font-medium">PNG, JPG (Maks. 5MB)</p>
                            </div>
                            <input
                              id="image-upload"
                              name="image"
                              type="file"
                              className="hidden"
                              onChange={handleFileChange}
                              accept="image/png, image/jpeg, image/jpg"
                              ref={fileInputRef}
                            />
                          </label>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Error State */}
                  <AnimatePresence>
                    {formStatus.type === 'error' && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex items-center gap-3 p-4 text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl"
                      >
                        <AlertTriangle size={18} className="text-red-500 flex-shrink-0" />
                        <span className="font-medium">{formStatus.message}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Submit Button */}
                  <div className="pt-6 border-t border-slate-100 mt-8">
                    <Button
                      type="submit"
                      className="w-full py-4 text-base font-bold bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white rounded-xl shadow-lg shadow-blue-600/20 active:scale-[0.98] transition-all flex items-center justify-center overflow-hidden"
                      disabled={isSubmitting}
                    >
                      <AnimatePresence mode="wait">
                        {isSubmitting ? (
                          <motion.span
                            key="loading"
                            variants={textVariants}
                            initial="hidden" animate="visible" exit="exit"
                            className="flex items-center justify-center"
                          >
                            <LoaderCircle className="mr-3 h-5 w-5 animate-spin" />
                            Memproses Pendaftaran...
                          </motion.span>
                        ) : (
                          <motion.span
                            key="default"
                            variants={textVariants}
                            initial="hidden" animate="visible" exit="exit"
                          >
                            Kirim Formulir Pendaftaran
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </Button>
                  </div>

                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PendaftaranForm;