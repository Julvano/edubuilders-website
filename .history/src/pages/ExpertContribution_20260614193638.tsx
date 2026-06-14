
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../components/LanguageContext';
import { motion } from 'motion/react';
import { Award, Microscope, Linkedin, Link as LinkIcon, BookOpen, GraduationCap, Laptop, Shield, Lightbulb, Send } from 'lucide-react';

const ExpertContribution: React.FC = () => {
  const { content, language, langPath } = useLanguage();
  const t = content.workingTogether.expert;

  const expertFields = content.expertise.domains.map(d => d.title);

  return (
    <div className="py-5 lg:py-8 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mb-16 lg:mb-20 space-y-4">
           <h1 className="text-xl sm:text-3xl md:text-3xl lg:text-4xl font-black text-blue-950 uppercase tracking-tighter">
             {t.title}
           </h1>
           <div className="w-20 h-1 bg-amber-500 rounded-full" />
           <p className="text-lg lg:text-xl text-gray-600 font-medium leading-relaxed">
             {t.intro}
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32">
           <div className="lg:col-span-2 space-y-16">
              <section className="space-y-8">
                 <h2 className="text-xl sm:text-3xl font-black text-blue-950 uppercase tracking-tight flex items-center gap-4">
                    <div className="w-2 h-8 bg-amber-500 rounded-full" />
                    {t.fieldsTitle}
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
                    <h3 className="text-xs sm:text-2xl font-black text-amber-900 uppercase tracking-tight">{t.statusTitle}</h3>
                    <p className="text-amber-900/70 font-medium leading-relaxed">
                      {t.statusText}
                    </p>
                 </div>
              </section>
           </div>

           <div className="lg:col-span-1">
              <div className="bg-white p-10 lg:p-14 rounded-[3.5rem] shadow-xl border border-gray-100 h-fit sticky top-32 overflow-hidden relative group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700" />
                
                <div className="relative z-10 space-y-8">
                  <div className="w-16 h-16 bg-blue-50 text-blue-900 rounded-2xl flex items-center justify-center shadow-inner">
                    <Lightbulb size={32} />
                  </div>
                  
                  <div className="space-y-4">
                    <h2 className="text-xl sm:text-3xl font-black text-blue-950 uppercase tracking-tight">
                      {t.readyTitle}
                    </h2>
                    <p className="text-gray-500 font-medium leading-relaxed">
                      {t.readyText}
                    </p>
                  </div>

                  <Link 
                    to={langPath('/contact?subject=expertise')}
                    className="w-full bg-blue-950 hover:bg-blue-900 text-white font-black py-5 rounded-[2rem] transition-all uppercase tracking-widest shadow-xl shadow-blue-950/20 flex items-center justify-center gap-3 group/btn"
                  >
                    <span>{t.contactCTA}</span>
                    <Send size={20} className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </Link>
                  
                  <div className="pt-4 flex items-center gap-4 text-gray-400">
                    <Shield size={16} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">
                       {t.secureData}
                    </span>
                  </div>
                </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertContribution;
