
import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { motion } from 'motion/react';
import { 
  Handshake, 
  Users, 
  Heart, 
  Compass, 
  Lightbulb, 
  Globe, 
  TrendingUp,
  ArrowRight,
  Target
} from 'lucide-react';

const iconMap: Record<string, any> = {
  Handshake,
  Users,
  Heart,
  Compass,
  Lightbulb,
  Globe,
  TrendingUp
};

const Objectives: React.FC = () => {
  const { content } = useLanguage();
  const t = content.about.objectives;

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-gray-50 py-8 lg:py-16 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
           <motion.h1 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-blue-950 uppercase tracking-tighter"
           >
             {t.title}
           </motion.h1>
           <p className="text-xl lg:text-2xl text-gray-500 font-medium leading-relaxed max-w-3xl mx-auto italic">
             {t.intro}
           </p>
        </div>
      </section>

      {/* Interactive List / Cards */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.list.map((obj, i) => {
              const IconComponent = iconMap[obj.icon] || Target;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group bg-white p-12 rounded-[3.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-950/5 hover:-translate-y-2 transition-all duration-500 flex flex-col h-full"
                >
                  <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-lg shadow-blue-900/5">
                    <IconComponent size={28} />
                  </div>
                  
                  <div className="flex-grow space-y-4">
                    <h3 className="text-2xl font-black text-blue-950 leading-tight uppercase tracking-tight">
                      {obj.title}
                    </h3>
                    <p className="text-gray-600 font-medium leading-relaxed">
                      {obj.text}
                    </p>
                  </div>

                  <div className="mt-10 pt-6 border-t border-gray-50 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.3em]">Statut: Art. 2</span>
                    <ArrowRight size={20} className="text-blue-900" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="bg-blue-950 py-20 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
           <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -mr-48 -mt-48" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8 relative z-10">
           <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight uppercase tracking-tighter">
             Engagés pour l'équité des chances au Bénin et dans la sous-région.
           </h2>
           <button className="bg-emerald-500 hover:bg-emerald-400 text-blue-950 font-black px-12 py-5 rounded-3xl transition-all uppercase tracking-widest text-lg shadow-xl shadow-emerald-500/10">
              Soutenir nos actions
           </button>
        </div>
      </section>
    </div>
  );
};

export default Objectives;
