
import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { motion } from 'motion/react';
import { Handshake, ShieldCheck, Globe, TrendingUp, Presentation, Laptop } from 'lucide-react';

const BecomePartner: React.FC = () => {
  const { content } = useLanguage();
  const t = content.workingTogether.partner;

  // Type-safe entries
  const types = t.types as Record<string, { title: string, text: string }>;

  return (
    <div className="py-5 lg:py-8 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20 space-y-4">
           <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-blue-950 uppercase tracking-tighter">
             {t.title}
           </h1>
           <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
               <p className="text-lg lg:text-xl text-emerald-600 font-bold italic">
                  "{t.intro}"
               </p>
        </div>
        

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
           {Object.entries(types).map(([key, value], i) => (
             <motion.div
               key={key}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               className="bg-gray-50 p-12 rounded-[3.5rem] border border-gray-100 flex flex-col items-center text-center space-y-6 group hover:bg-blue-950 hover:text-white transition-all duration-500"
             >
                <div className="w-20 h-20 bg-white shadow-lg rounded-3xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                   {key === 'technical' ? <Presentation size={36} /> : key === 'financial' ? <TrendingUp size={36} /> : <Handshake size={36} />}
                </div>
                <h3 className="text-md sm:text-2xl font-black uppercase tracking-tight">{value.title}</h3>
                <p className="opacity-70 font-medium leading-tighter break-words hyphens-auto">
                   {value.text}
                </p>
             </motion.div>
           ))}
        </div>

        <div className="bg-blue-950 p-16 lg:p-24 rounded-[5rem] text-white relative overflow-hidden">
           <div className="absolute bottom-0 right-0 w-1/2 h-full bg-emerald-600/10 skew-x-12 transform translate-x-1/4" />
           <div className="max-w-3xl relative z-10 space-y-12">
              <div className="space-y-6">
                 <div className="flex items-center gap-4 text-emerald-400 font-bold uppercase tracking-[0.3em] text-sm">
                    <ShieldCheck size={24} />
                    {t.guaranteesTitle}
                 </div>
                 <h2 className="text-sm lg:text-2xl font-black leading-tighter text-blue-100 uppercase tracking-tighter break-words hyphens-auto">
                    {t.collaborationTitle}
                 </h2>
                 <p className="text-sm lg:text-lg text-blue-100/70 font-medium leading-tighter ">
                    {t.guaranteesText}
                 </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
                 <div className="space-y-3">
                    <h4 className="text-xl font-bold">{t.guaranteesList.audit.title}</h4>
                    <p className="text-sm opacity-60">{t.guaranteesList.audit.text}</p>
                 </div>
                 <div className="space-y-3">
                    <h4 className="text-xl font-bold">{t.guaranteesList.accountability.title}</h4>
                    <p className="text-sm opacity-60">{t.guaranteesList.accountability.text}</p>
                 </div>
              </div>

              <button className="bg-emerald-500 hover:bg-emerald-400 text-blue-950 font-black px-12 py-5 rounded-3xl transition-all uppercase tracking-widest text-lg shadow-2xl shadow-emerald-500/20">
                 {t.cta}
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default BecomePartner;
