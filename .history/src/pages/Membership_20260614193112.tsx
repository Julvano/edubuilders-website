
import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { motion } from 'motion/react';
import { CheckCircle2, FileText, UserCheck, CreditCard } from 'lucide-react';

const Membership: React.FC = () => {
  const { content, language, langPath } = useLanguage();
  const t = content.workingTogether.membership;

  return (
    <div className="py-5 lg:py-8 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20 space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-blue-950 uppercase tracking-tighter">
            {t.title}
          </h1>
          <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full" />
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto font-medium">
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
                <h2 className="text-sm lg:text-2xl font-black text-blue-950 uppercase tracking-tight">{t.statutesTitle}</h2>
              </div>
              <p className="text-gray-600 leading-relaxed font-medium">
                {t.statutesText}
              </p>
            </section>

            <section className="space-y-8">
              <h2 className="text-xl lg:text-3xl font-black text-blue-950 uppercase tracking-tight flex items-center gap-4">
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
            className="bg-blue-950 p-12 rounded-[4rem] shadow-2xl relative overflow-hidden flex flex-col justify-center items-center text-center"
          >
             <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-32 -mt-32" />
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -ml-32 -mb-32" />
             
             <div className="relative z-10 space-y-8 max-w-md">
                <div className="w-24 h-24 bg-white/10 rounded-3xl flex items-center justify-center mx-auto mb-8 backdrop-blur-md border border-white/10">
                  <UserCheck size={48} className="text-emerald-400" />
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight uppercase tracking-tight">
                  {t.readyTitle}
                </h2>
                
                <p className="text-blue-200 text-lg font-medium leading-relaxed">
                  {content.join.membershipText}
                </p>

                <div className="flex items-center justify-center gap-4 p-5 bg-emerald-500/10 border border-emerald-500/20 rounded-3xl">
                   <CreditCard className="text-emerald-400 shrink-0" size={28} />
                   <p className="text-xs text-emerald-100 font-medium text-left leading-snug">
                     {t.feesInfo}
                   </p>
                </div>

                <a 
                  href={`/edubuilders-website/${language}/contact?subject=adhesion`}
                  className="inline-flex w-full bg-emerald-500 hover:bg-emerald-400 text-blue-950 font-black py-6 rounded-3xl transition-all uppercase tracking-widest shadow-2xl shadow-emerald-500/30 items-center justify-center gap-3 group px-8"
                >
                  <span className="text-sm">{content.join.membershipCTA}</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <UserCheck size={24} />
                  </motion.div>
                </a>
             </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
