
import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { motion } from 'motion/react';
import { Layers, Lightbulb, Shield, Laptop, GraduationCap } from 'lucide-react';

const Actions: React.FC = () => {
  const { content } = useLanguage();

  return (
    <div className="py-5 lg:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20 space-y-6">
          <h1 className="text-5xl font-black text-blue-950 leading-tight">
            {content.actions.title}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed font-medium">
            Notre expertise pluridisciplinaire couvre l'ensemble des défis éducatifs contemporains en Afrique de l'Ouest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.actions.fields.map((field, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex items-center gap-6 group hover:border-emerald-500/30 transition-all cursor-default"
            >
               <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  {index % 4 === 0 ? <GraduationCap /> : 
                   index % 4 === 1 ? <Laptop /> : 
                   index % 4 === 2 ? <Shield /> : <Lightbulb />}
               </div>
               <span className="text-lg font-bold text-gray-800 leading-snug">
                 {field}
               </span>
            </motion.div>
          ))}
        </div>
        
        {/* Core Domains */}
        <div className="mt-32 grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="space-y-6 bg-blue-50 p-10 rounded-[3rem]">
                <h3 className="text-2xl font-black text-blue-900 uppercase tracking-tight">Curriculum Design</h3>
                <p className="text-gray-700 leading-relaxed">
                   Nous concevons des programmes scolaires ancrés dans les réalités locales tout en répondant aux standards internationaux de qualité.
                </p>
            </div>
            <div className="space-y-6 bg-emerald-50 p-10 rounded-[3rem]">
                <h3 className="text-2xl font-black text-emerald-900 uppercase tracking-tight">EdTech Support</h3>
                <p className="text-gray-700 leading-relaxed">
                   Accompagnement à la transition numérique des établissements et formation des cadres aux outils innovants.
                </p>
            </div>
            <div className="space-y-6 bg-amber-50 p-10 rounded-[3rem]">
                <h3 className="text-2xl font-black text-amber-900 uppercase tracking-tight">Policy Evaluation</h3>
                <p className="text-gray-700 leading-relaxed">
                   Audit et évaluation des politiques publiques d'éducation pour optimiser l'impact des investissements budgétaires.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Actions;
