
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../components/LanguageContext';
import { Mail, Phone, MapPin, Send, CheckCircle2, RefreshCw, Sparkles, FileText } from 'lucide-react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const { content, langPath } = useLanguage();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [receiptData, setReceiptData] = useState<typeof formData | null>(null);

  useEffect(() => {
    const subjectParam = searchParams.get('subject');
    if (subjectParam === 'expertise') {
      setFormData(prev => ({ ...prev, subject: 'expertise' }));
    } else if (subjectParam === 'adhesion') {
      setFormData(prev => ({ ...prev, subject: 'membership' }));
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', formData);
    setReceiptData({ ...formData });
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setReceiptData(null);
    setIsSubmitted(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="py-5 lg:py-8 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] lg:h-[400px] flex items-center justify-center overflow-hidden rounded-[2.5rem] lg:rounded-[4rem] mx-4 sm:mx-6 lg:mx-8 mb-12">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?q=80&w=2070&auto=format&fit=crop" 
            alt="Contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-950/70 backdrop-blur-[2px]" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter">
              {content.contact.title}
            </h1>
            <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full" />
            <p className="text-sm sm:text-lg text-blue-100 max-w-2xl mx-auto font-medium">
               {content.contact.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block mb-16"></div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info cards */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col gap-6"
            >
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                <MapPin size={28} />
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-lg text-blue-950">{content.contact.addressTitle}</h4>
                <p className="text-gray-500 font-medium leading-relaxed">{content.contact.address}</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col gap-6"
            >
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center">
                <Phone size={28} />
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-lg text-blue-950">{content.contact.phoneTitle}</h4>
                <p className="text-gray-500 font-medium leading-relaxed">{content.contact.phone}</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col gap-6"
            >
              <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center">
                <Mail size={28} />
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-lg text-blue-950">{content.contact.emailTitle}</h4>
                <p className="text-gray-500 font-medium leading-relaxed">{content.contact.email}</p>
              </div>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="h-64 bg-gray-100 rounded-[2.5rem] flex items-center justify-center border-2 border-dashed border-gray-200 overflow-hidden group"
            >
              <div className="text-center p-6 transition-transform group-hover:scale-110 duration-500">
                <MapPin size={32} className="mx-auto text-gray-300 mb-2" />
                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">{content.contact.mapPlaceholder}</span>
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 relative">
             <div className="bg-gray-50 p-10 lg:p-16 rounded-[4rem] border border-gray-100 h-full flex flex-col justify-center min-h-[550px]">
                <AnimatePresence mode="wait">
                  {!isSubmitted || !receiptData ? (
                    <motion.div
                      key="form-view"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-8"
                    >
                      <h2 className="text-3xl font-black text-blue-950">{content.contact.formTitle}</h2>
                      
                      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">{content.contact.labelIdentity}</label>
                            <input 
                              required
                              type="text" 
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              className="w-full bg-white border-2 border-gray-200 rounded-2xl px-6 py-4 focus:border-blue-900 outline-none transition-all font-medium text-blue-950" 
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">{content.contact.labelEmail}</label>
                            <input 
                              required
                              type="email" 
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full bg-white border-2 border-gray-200 rounded-2xl px-6 py-4 focus:border-blue-900 outline-none transition-all font-medium text-blue-950" 
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">{content.contact.labelPhone}</label>
                            <input 
                              type="tel" 
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full bg-white border-2 border-gray-200 rounded-2xl px-6 py-4 focus:border-blue-900 outline-none transition-all font-medium text-blue-950" 
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">{content.contact.labelSubject}</label>
                            <div className="relative">
                              <select 
                                required
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full bg-white border-2 border-gray-200 rounded-2xl px-6 py-4 focus:border-blue-900 outline-none transition-all appearance-none cursor-pointer font-medium text-blue-950"
                              >
                                <option value="">-- {content.projects.filters.all} --</option>
                                <option value="partnership">{content.contact.subjects.partnership}</option>
                                <option value="membership">{content.contact.subjects.membership}</option>
                                <option value="expertise">{content.contact.subjects.expertise}</option>
                                <option value="other">{content.contact.subjects.other}</option>
                              </select>
                              <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-gray-400">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="md:col-span-2 space-y-2">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">{content.contact.labelMessage}</label>
                            <textarea 
                              required
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              className="w-full bg-white border-2 border-gray-200 rounded-2xl px-6 py-4 focus:border-blue-900 outline-none transition-all h-48 resize-none font-medium text-blue-950" 
                            />
                          </div>
                          
                          <div className="md:col-span-2 pt-2 pb-6">
                            <p className="text-sm text-gray-500 italic flex items-start gap-2 bg-blue-50/50 p-4 rounded-2xl border border-blue-100">
                              <span className="text-blue-600 font-black">Note:</span>
                              {content.contact.expertNote}
                            </p>
                          </div>

                          <div className="md:col-span-2">
                             <button 
                              type="submit"
                              className="bg-blue-950 hover:bg-blue-900 text-white font-bold px-12 py-5 rounded-3xl flex items-center gap-3 transition-all transform hover:-translate-y-1 active:scale-95 shadow-xl shadow-blue-950/20 cursor-pointer"
                             >
                                {content.contact.submit}
                                <Send size={18} />
                             </button>
                          </div>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="thank-you-view"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="space-y-8 text-center"
                    >
                      {/* Check Animation Header */}
                      <div className="flex flex-col items-center gap-4">
                        <div className="relative">
                          <motion.div 
                            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl"
                          />
                          <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg relative z-10 shadow-emerald-500/30">
                            <CheckCircle2 size={44} className="text-white" />
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 text-emerald-600 font-bold tracking-widest text-xs uppercase bg-emerald-500/10 px-4 py-1.5 rounded-full">
                          <Sparkles size={12} />
                          {content.contact.success}
                        </div>
                      </div>

                      {/* Message Body */}
                      <div className="space-y-3 max-w-xl mx-auto">
                        <h2 className="text-3xl font-black text-blue-950 uppercase tracking-tighter leading-tight">
                          {content.contact.thankYouTitle}
                        </h2>
                        <p className="text-gray-600 text-base leading-relaxed">
                          {content.contact.thankYouMessage}
                        </p>
                      </div>

                      {/* Receipt Summary Card */}
                      <div className="bg-white border border-gray-200/80 rounded-[2.5rem] p-6 lg:p-10 text-left space-y-6 max-w-xl mx-auto w-full shadow-md">
                        <div className="font-bold text-xs text-blue-950 uppercase tracking-wider border-b border-gray-100 pb-3 flex justify-between items-center">
                          <span className="flex items-center gap-2">
                            <FileText size={16} className="text-blue-900" />
                            {content.contact.recapTitle}
                          </span>
                          <span className="text-emerald-600 text-xs font-bold font-mono">ID: #{Math.floor(100000 + Math.random() * 900000)}</span>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-medium">
                          <div className="space-y-1">
                            <span className="text-gray-400 text-xs uppercase tracking-widest block">{content.contact.labelIdentity.replace('*', '').trim()}</span>
                            <span className="text-blue-950 font-bold block">{receiptData.name}</span>
                          </div>

                          <div className="space-y-1">
                            <span className="text-gray-400 text-xs uppercase tracking-widest block">{content.contact.labelEmail.replace('*', '').trim()}</span>
                            <span className="text-blue-950 font-bold block">{receiptData.email}</span>
                          </div>

                          {receiptData.phone && (
                            <div className="space-y-1">
                              <span className="text-gray-400 text-xs uppercase tracking-widest block">{content.contact.labelPhone.replace('(Optionnel)', '').replace('(Optional)', '').trim()}</span>
                              <span className="text-blue-950 font-bold block">{receiptData.phone}</span>
                            </div>
                          )}

                          <div className="space-y-1">
                            <span className="text-gray-400 text-xs uppercase tracking-widest block">{content.contact.recapSubject}</span>
                            <span className="text-blue-950 font-bold block">
                              {receiptData.subject === 'partnership' && content.contact.subjects.partnership}
                              {receiptData.subject === 'membership' && content.contact.subjects.membership}
                              {receiptData.subject === 'expertise' && content.contact.subjects.expertise}
                              {receiptData.subject === 'other' && content.contact.subjects.other}
                              {!receiptData.subject && '--'}
                            </span>
                          </div>
                        </div>

                        <div className="space-y-2 border-t border-gray-100 pt-4">
                          <span className="text-gray-400 text-xs uppercase tracking-widest block">{content.contact.labelMessage.replace('*', '').trim()}</span>
                          <p className="text-gray-600 bg-gray-50 p-4 rounded-xl text-sm italic leading-tighter break-words hyphens-auto text-justify border border-gray-100/60 max-h-32 overflow-y-auto whitespace-pre-wrap">
                            "{receiptData.message}"
                          </p>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto w-full pt-4">
                        <button 
                          onClick={handleReset}
                          className="flex-1 bg-blue-950 hover:bg-blue-900 text-white font-bold py-4 px-6 rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                        >
                          <RefreshCw size={16} />
                          {content.contact.newContact}
                        </button>

                        <button
                          onClick={() => navigate(langPath('/'))}
                          className="flex-1 bg-gray-100 hover:bg-gray-200 text-blue-950 font-bold py-4 px-6 rounded-2xl transition-all cursor-pointer border border-gray-200"
                        >
                          {content.donate.backHome}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
