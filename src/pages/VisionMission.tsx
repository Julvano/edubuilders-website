
import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { motion } from 'motion/react';
import { Sparkles, Target, ShieldCheck } from 'lucide-react';

const VisionMission: React.FC = () => {
  const { content } = useLanguage();
  const t = content.about.visionMission;

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-blue-950 py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl -ml-48 -mb-48" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-6"
          >
            <h1 className="text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter">
              {t.title}
            </h1>
            <div className="w-24 h-1.5 bg-emerald-500 mx-auto rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Vision */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="inline-flex items-center gap-3 px-6 py-2 bg-blue-50 text-blue-900 rounded-full font-black text-xs uppercase tracking-widest border border-blue-100">
                <Sparkles size={16} />
                {t.visionTitle}
              </div>
              <div className="prose prose-xl prose-blue max-w-none prose-h2:text-4xl prose-h2:font-black prose-h2:text-blue-950 prose-h2:tracking-tight prose-p:text-gray-600 prose-p:font-medium prose-p:leading-relaxed prose-strong:text-emerald-700">
                <div dangerouslySetInnerHTML={{ __html: t.visionText }} />
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="inline-flex items-center gap-3 px-6 py-2 bg-emerald-50 text-emerald-900 rounded-full font-black text-xs uppercase tracking-widest border border-emerald-100">
                <Target size={16} />
                {t.missionTitle}
              </div>
              <div className="prose prose-xl prose-blue max-w-none prose-h2:text-4xl prose-h2:font-black prose-h2:text-blue-950 prose-h2:tracking-tight prose-p:text-gray-600 prose-p:font-medium prose-p:leading-relaxed prose-strong:text-blue-600">
                <div dangerouslySetInnerHTML={{ __html: t.missionText }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-black text-blue-950 uppercase tracking-tight">
              {t.valuesTitle}
            </h2>
            <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 flex flex-col items-center gap-6 group hover:shadow-xl hover:shadow-blue-950/5 transition-all"
              >
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <ShieldCheck size={32} />
                </div>
                <h3 className="text-xl font-black text-blue-950 uppercase tracking-tight">{value.title}</h3>
                <p className="text-gray-600 font-medium leading-relaxed underline decoration-emerald-200 decoration-2 underline-offset-4">
                  {value.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionMission;
