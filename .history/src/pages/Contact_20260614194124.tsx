
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../components/LanguageContext';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const { content } = useLanguage();
  const [searchParams] = useSearchParams();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

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
    // Simulate API call
    console.log('Form data:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
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
            // src="https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?q=80&w=2070&auto=format&fit=crop" 
            src={`${import.meta.env.BASE_URL}assets/images/header/contact.jpg`}
            alt="Contact - EduBuilders Institute"
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
             <div className="bg-gray-50 p-10 lg:p-16 rounded-[4rem] border border-gray-100 h-full">
                <h2 className="text-xl sm:text-3xl font-black text-blue-950 mb-8">{content.contact.formTitle}</h2>
                
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">{content.contact.labelIdentity}</label>
                      <input 
                        required
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-white border-2 border-gray-200 rounded-2xl px-6 py-4 focus:border-blue-900 outline-none transition-all" 
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
                        className="w-full bg-white border-2 border-gray-200 rounded-2xl px-6 py-4 focus:border-blue-900 outline-none transition-all" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">{content.contact.labelPhone}</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-white border-2 border-gray-200 rounded-2xl px-6 py-4 focus:border-blue-900 outline-none transition-all" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">{content.contact.labelSubject}</label>
                      <select 
                        required
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-white border-2 border-gray-200 rounded-2xl px-6 py-4 focus:border-blue-900 outline-none transition-all appearance-none cursor-pointer"
                      >
                        <option value="">-- {content.projects.filters.all} --</option>
                        <option value="partnership">{content.contact.subjects.partnership}</option>
                        <option value="membership">{content.contact.subjects.membership}</option>
                        <option value="expertise">{content.contact.subjects.expertise}</option>
                        <option value="other">{content.contact.subjects.other}</option>
                      </select>
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">{content.contact.labelMessage}</label>
                      <textarea 
                        required
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-white border-2 border-gray-200 rounded-2xl px-6 py-4 focus:border-blue-900 outline-none transition-all h-48 resize-none" 
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
                        className="bg-blue-950 hover:bg-blue-900 text-white font-bold px-12 py-5 rounded-3xl flex items-center gap-3 transition-all transform hover:-translate-y-1 active:scale-95 shadow-xl shadow-blue-950/20"
                       >
                          {content.contact.submit}
                          <Send size={18} />
                       </button>
                    </div>
                </form>

                <AnimatePresence>
                  {isSubmitted && (
                    <motion.div 
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 50 }}
                      className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-emerald-600 text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-3 z-50 whitespace-nowrap"
                    >
                      <CheckCircle2 size={24} />
                      <span className="font-bold">{content.contact.success}</span>
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
