
import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { motion } from 'motion/react';
import { 
  CheckCircle, 
  Users, 
  Lightbulb, 
  TrendingUp, 
  ShieldCheck, 
  LayoutGrid,
  Zap,
  Globe,
  Database
} from 'lucide-react';

const Objectives: React.FC = () => {
  const { content } = useLanguage();
  const t = content.about.objectives;

  return (
    <div className="py-5 lg:py-8 bg-white">
      {/* Hero Section */}
      <section className="relative h-[300px] lg:h-[400px] flex items-center justify-center overflow-hidden rounded-[2.5rem] lg:rounded-[4rem] mx-4 sm:mx-6 lg:mx-8 mb-12">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
            alt="Objectives"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/70 backdrop-blur-[2px]" />
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 lg:mb-24">
        {/* General Objective */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto bg-blue-900 p-8 lg:p-12 rounded-[2.5rem] shadow-xl text-center"
        >
          <h2 className="text-emerald-400 text-xs font-black uppercase tracking-widest mb-4">
            {t.generalObjective.title}
          </h2>
          <p className="text-xl lg:text-2xl font-bold text-white leading-tight">
            {t.generalObjective.text}
          </p>
        </motion.div>
      </div>

      {/* Specific Objectives Grid */}
      <section className="pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h3 className="text-3xl font-black text-blue-950 uppercase tracking-tight">
              {t.specificObjectives.title}
            </h3>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.specificObjectives.list.map((obj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50/50 p-8 rounded-[2.5rem] border border-gray-100 flex flex-col gap-6 hover:bg-white hover:shadow-xl hover:shadow-blue-950/5 transition-all group"
              >
                <div className="w-12 h-12 bg-white text-blue-600 rounded-xl flex items-center justify-center shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <CheckCircle size={24} />
                </div>
                <p className="text-lg font-bold text-blue-950 leading-snug">
                  {obj}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Audiences & Activities */}
      <section className="py-24 bg-blue-950 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="space-y-10"
            >
              <div className="space-y-4">
                <h3 className="text-emerald-400 text-sm font-black uppercase tracking-widest">
                  {t.audiencesActivities.title}
                </h3>
                <p className="text-3xl font-black leading-tight">
                   {t.audiencesActivities.audiences}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                 <div className="p-6 bg-white/5 rounded-3xl border border-white/10 flex flex-col gap-4">
                    <Users className="text-blue-400" size={32} />
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-200">Impact Direct</span>
                 </div>
                 <div className="p-6 bg-white/5 rounded-3xl border border-white/10 flex flex-col gap-4">
                    <LayoutGrid className="text-emerald-400" size={32} />
                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-200">Multi-niveaux</span>
                 </div>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="bg-white/5 p-10 lg:p-14 rounded-[4rem] border border-white/10"
            >
              <h3 className="text-2xl font-black mb-10 text-emerald-400 uppercase tracking-tight">
                {t.audiencesActivities.activitiesTitle}
              </h3>
              <div className="space-y-6">
                {t.audiencesActivities.activities.map((activity, i) => (
                  <div key={i} className="flex items-center gap-6 group">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                      <Zap size={18} />
                    </div>
                    <span className="text-lg font-medium text-blue-100">{activity}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expected Results */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-20 space-y-4">
            <h3 className="text-4xl font-black text-blue-950 uppercase tracking-tight">
              {t.expectedResults.title}
            </h3>
            <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
             {t.expectedResults.list.map((result, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, scale: 0.98 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.05 }}
                 className="p-8 bg-gray-50 rounded-3xl border border-gray-100 flex items-center gap-8 group hover:bg-white hover:shadow-2xl hover:shadow-emerald-500/5 hover:-translate-y-1 transition-all"
               >
                 <div className="text-5xl font-black text-emerald-500/10 group-hover:text-emerald-500/20 transition-colors">
                    {String(i + 1).padStart(2, '0')}
                 </div>
                 <p className="text-xl font-bold text-blue-950 leading-tight">
                   {result}
                 </p>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 lg:py-32 bg-emerald-50/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-2 bg-white text-emerald-900 rounded-full font-black text-xs uppercase tracking-widest border border-emerald-100 shadow-sm"
          >
            <Database size={16} className="text-emerald-500" />
            {t.resources.title}
          </motion.div>
          
          <p className="text-3xl lg:text-5xl font-black text-emerald-900 tracking-tight leading-tight">
             {t.resources.text}
          </p>
          
          <div className="pt-10 flex flex-wrap justify-center gap-10 opacity-40 grayscale">
             <Globe size={48} />
             <TrendingUp size={48} />
             <ShieldCheck size={48} />
             <Lightbulb size={48} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Objectives;
