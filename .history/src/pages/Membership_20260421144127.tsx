
import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { motion } from 'motion/react';
import { CheckCircle2, FileText, UserCheck, CreditCard } from 'lucide-react';

const Membership: React.FC = () => {
  const { content } = useLanguage();
  const t = content.workingTogether.membership;

  return (
    <div className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24 space-y-4">
          <h1 className="text-5xl lg:text-7xl font-black text-blue-950 uppercase tracking-tighter">
            {t.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            {t.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <section className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center">
                  <FileText size={24} />
                </div>
                <h2 className="text-2xl font-black text-blue-950 uppercase tracking-tight">{t.statutesTitle}</h2>
              </div>
              <p className="text-gray-600 leading-relaxed font-medium">
                {t.statutesText}
              </p>
            </section>

            <section className="space-y-8">
              <h2 className="text-3xl font-black text-blue-950 uppercase tracking-tight flex items-center gap-4">
                <div className="w-2 h-8 bg-emerald-500 rounded-full" />
                {t.benefitsTitle}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {t.benefits.map((benefit, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-white border border-gray-100 rounded-2xl shadow-sm"
                  >
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={20} />
                    <span className="text-sm font-bold text-gray-700 leading-tight">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-blue-950 p-12 rounded-[4rem] shadow-2xl relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-32 -mt-32" />
             
             <h2 className="text-3xl font-black text-white mb-10 relative z-10">{t.formTitle}</h2>
             
             <form className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-[10px] font-black text-blue-300 uppercase tracking-[0.2em] ml-2">Prénom</label>
                     <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:bg-white/10 outline-none transition-all" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-[10px] font-black text-blue-300 uppercase tracking-[0.2em] ml-2">Nom</label>
                     <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:bg-white/10 outline-none transition-all" />
                   </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-blue-300 uppercase tracking-[0.2em] ml-2">Email Professionnel</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:bg-white/10 outline-none transition-all" />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-blue-300 uppercase tracking-[0.2em] ml-2">Motivation</label>
                  <textarea className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:bg-white/10 outline-none transition-all h-32 resize-none" placeholder="Pourquoi souhaitez-vous nous rejoindre ?" />
                </div>

                <div className="flex items-center gap-4 p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl">
                   <CreditCard className="text-emerald-400 shrink-0" size={24} />
                   <p className="text-[10px] text-emerald-200 leading-tight">
                     Une fois le formulaire validé, les instructions de paiement du droit d'adhésion vous seront envoyées par email.
                   </p>
                </div>

                <button className="w-full bg-emerald-500 hover:bg-emerald-400 text-blue-950 font-black py-5 rounded-3xl transition-all uppercase tracking-widest shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-3">
                  <UserCheck size={20} />
                  Soumettre ma demande
                </button>
             </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
