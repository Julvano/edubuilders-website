
import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { motion } from 'motion/react';
import { Target, CheckCircle2 } from 'lucide-react';

const Mission: React.FC = () => {
  const { content } = useLanguage();
  const t = content.about.mission;

  return (
    <div className="py-5 lg:py-8 bg-white">
      {/* Hero Section */}
      <section className="relative h-[300px] lg:h-[400px] flex items-center justify-center overflow-hidden rounded-[2.5rem] lg:rounded-[4rem] mx-4 sm:mx-6 lg:mx-8 mb-12">
        <div className="absolute inset-0">
          <img 
            // src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
            src={`${import.meta.env.BASE_URL}assets/images/header/apropos-mission.jpg`}
            alt="Mission - EduBuilders Institute"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-emerald-950/70 backdrop-blur-[2px]" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter">
              {t.title}
            </h1>
            <div className="w-20 h-1 bg-blue-400 mx-auto rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-3 px-6 py-2 bg-emerald-50 text-emerald-900 rounded-full font-black text-xs uppercase tracking-widest border border-emerald-100">
                <Target size={16} />
                Action & Impact
              </div>
              <h2 className="text-2xl lg:text-4xl font-black text-blue-950 leading-tighter break-words hyphens-auto text-justify">
                {t.text}
              </h2>
              <div className="w-16 h-1 bg-emerald-500 rounded-full" />
            </motion.div>

            <div className="space-y-6">
              {t.points.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 group hover:shadow-md transition-all"
                >
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 size={24} className="text-emerald-500" />
                  </div>
                  <p className="text-lg font-medium text-gray-700 leading-relaxed group-hover:text-blue-900 transition-colors">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;
