
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

           <div className="bg-white p-10 lg:p-14 rounded-[3.5rem] shadow-xl border border-gray-100 h-fit sticky top-32">
              <h2 className="text-2xl font-black text-blue-950 mb-8 uppercase tracking-tight">{t.formTitle}</h2>
              <form className="space-y-6">
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">Nom Complet</label>
                    <input type="text" className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-4 focus:border-amber-500 outline-none transition-all" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">Spécialité</label>
                    <select className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-4 focus:border-amber-500 outline-none transition-all font-bold text-gray-700">
                       <option>Curricula & Pédagogie</option>
                       <option>Digital Education</option>
                       <option>Recherche Éducative</option>
                       <option>Gouvernance</option>
                    </select>
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">Lien Portfolio / LinkedIn</label>
                    <div className="relative">
                       <Linkedin className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                       <input type="url" className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl pl-14 pr-6 py-4 focus:border-amber-500 outline-none transition-all" placeholder="https://linkedin.com/in/..." />
                    </div>
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">Note d'Expertise</label>
                    <textarea className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-4 focus:border-amber-500 outline-none transition-all h-32 resize-none" placeholder="Décrivez brièvement votre valeur ajoutée..." />
                 </div>
                 <button className="w-full bg-amber-600 hover:bg-amber-500 text-white font-black py-5 rounded-3xl transition-all uppercase tracking-widest shadow-xl shadow-amber-600/10 flex items-center justify-center gap-3">
                    <LinkIcon size={20} />
                    Soumettre le Profil
                 </button>
              </form>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertContribution;
