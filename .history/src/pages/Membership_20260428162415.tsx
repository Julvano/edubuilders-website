
import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { motion } from 'motion/react';
import { CheckCircle2, FileText, UserCheck, CreditCard } from 'lucide-react';

const Membership: React.FC = () => {
  const { content } = useLanguage();
  const t = content.workingTogether.membership;

  return (
    <div className="py-5 lg:py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24 space-y-4">
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-blue-950 uppercase tracking-tighter">
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
                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-blue-950 uppercase tracking-tight">
                  {t.statutesTitle}
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed font-medium">
                {t.statutesText}
              </p>
            </section>

            <section className="space-y-8">
              <h2 className="text-3xl font-black text-blue-950 uppercase tracking-tight flex items-center gap-4">
                <div className="w-2 h-8 bg-emerald-500 rounded-full" />
                {/* {t.benefitsTitle} */}
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

          <div className="space-y-12">
            <section className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center">
                  <FileText size={24} />
                </div>
                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-blue-950 uppercase tracking-tight">
                  {t.statutesTitle}
                </h2>
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

        </div>
        
      </div>
    </div>
  );
};

export default Membership;
