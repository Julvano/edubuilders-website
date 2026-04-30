
import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { motion } from 'motion/react';
import { Award, Microscope, Linkedin, Link as LinkIcon, BookOpen, GraduationCap, Laptop, Shield, Lightbulb } from 'lucide-react';

const ExpertContribution: React.FC = () => {
  const { content } = useLanguage();
  const t = content.workingTogether.expert;

  const expertFields = content.actions.fields;

  return (
    <div className="py-5 lg:py-8 bg-gray-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mb-24 space-y-6">
           <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-black text-blue-950 uppercase tracking-tighter">
             {t.title}
           </h1>
           <p className="text-xl text-gray-600 font-medium leading-relaxed">
             {t.intro}
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32">
           <div className="lg:col-span-2 space-y-16">
              <section className="space-y-8">
                 <h2 className="text-3xl font-black text-blue-950 uppercase tracking-tight flex items-center gap-4">
                    <div className="w-2 h-8 bg-amber-500 rounded-full" />
                    Domaines d'Expertise Prioritaires
                 </h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {expertFields.map((field, i) => (
                      <div key={i} className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm transition-all hover:border-amber-500/30 group">
                         <div className="w-10 h-10 bg-gray-50 text-amber-600 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-amber-600 group-hover:text-white transition-all">
                            {i % 3 === 0 ? <GraduationCap size={20} /> : i % 3 === 1 ? <Laptop size={20} /> : <Microscope size={20} />}
                         </div>
                         <span className="text-sm font-bold text-gray-700">{field}</span>
                      </div>
                    ))}
                 </div>
              </section>

              <section className="bg-amber-50 p-12 rounded-[3.5rem] border border-amber-100/50 flex flex-col md:flex-row items-center gap-10">
                 <div className="w-24 h-24 bg-amber-600 text-white rounded-3xl flex items-center justify-center shrink-0 shadow-xl shadow-amber-600/20">
                    <Award size={48} />
                 </div>
                 <div className="space-y-4">
                    <h3 className="text-2xl font-black text-amber-900 uppercase tracking-tight">{t.statusTitle}</h3>
                    <p className="text-amber-900/70 font-medium leading-relaxed">
                      {t.statusText}
                    </p>
                 </div>
              </section>
           </div>

        </div>
      </div>
    </div>
  );
};

export default ExpertContribution;
