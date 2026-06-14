
import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

const Vision: React.FC = () => {
  const { content } = useLanguage();
  const t = content.about.vision;

  return (
    <div className="py-5 lg:py-8 bg-white">
      {/* Hero Section */}
      <section className="relative h-[300px] lg:h-[400px] flex items-center justify-center overflow-hidden rounded-[2.5rem] lg:rounded-[4rem] mx-4 sm:mx-6 lg:mx-8 mb-12">
        <div className="absolute inset-0">
          <img 
            // src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop" 
            src={`${import.meta.env.BASE_URL}assets/images/header/apropos-vision.jpg`}
            alt="Vision"
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
              {t.title}
            </h1>
            <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-16 lg:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-blue-50 text-blue-900 rounded-full font-black text-xs uppercase tracking-widest border border-blue-100">
              <Sparkles size={16} />
              EduBuilders 2050
            </div>
            
            <p className="text-2xl lg:text-3xl font-medium text-blue-950 leading-relaxed italic">
              "{t.text}"
            </p>

            <div className="pt-12 border-t border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="space-y-2">
                  <span className="text-4xl font-black text-emerald-500">2050</span>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Horizon Stratégique</p>
               </div>
               <div className="space-y-2">
                  <span className="text-4xl font-black text-blue-600">6+</span>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Pays d'intervention</p>
               </div>
               <div className="space-y-2">
                  <span className="text-4xl font-black text-amber-500">100%</span>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Inclusion Éducative</p>
               </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Vision;
