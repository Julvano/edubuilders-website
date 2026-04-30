
import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { motion } from 'motion/react';
import { Briefcase, UserPlus, Star, Handshake, ArrowRight, LucideIcon } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Join: React.FC = () => {
  const { content, langPath } = useLanguage();

  const sections: { title: string; text: string; icon: LucideIcon; color: string; path: string }[] = [
    {
      title: content.workingTogether.membership.title,
      text: content.workingTogether.membership.intro,
      icon: UserPlus,
      color: 'emerald',
      path: '/working-together/membership'
    },
    {
      title: content.workingTogether.expert.title,
      text: content.workingTogether.expert.intro,
      icon: Star,
      color: 'amber',
      path: '/working-together/expert'
    },
    {
      title: content.workingTogether.partner.title,
      text: content.workingTogether.partner.intro,
      icon: Handshake,
      color: 'indigo',
      path: '/working-together/partner'
    },
    {
      title: content.workingTogether.careers.title,
      text: content.workingTogether.careers.intro,
      icon: Briefcase,
      color: 'blue',
      path: '/working-together/careers'
    }
  ];

  return (
    <div className="py-5 lg:py-8 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-blue-950 uppercase tracking-tighter">
            {content.nav.join}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
             Participez à la transformation éducative de l'Afrique de l'Ouest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-12 rounded-[3.5rem] shadow-sm border border-gray-100 flex flex-col items-center text-center space-y-6 hover:shadow-xl hover:shadow-blue-950/5 transition-all group"
              >
                <div className={`w-20 h-20 rounded-3xl flex items-center justify-center text-white shadow-lg ${
                  section.color === 'blue' ? 'bg-blue-600 shadow-blue-600/20' : 
                  section.color === 'emerald' ? 'bg-emerald-600 shadow-emerald-600/20' : 
                  section.color === 'amber' ? 'bg-amber-600 shadow-amber-600/20' : 
                  'bg-indigo-600 shadow-indigo-600/20'
                }`}>
                  <Icon size={40} />
                </div>
                <h2 className="text-2xl font-black text-blue-950 uppercase tracking-tight">
                  {section.title}
                </h2>
                <p className="text-gray-600 leading-relaxed font-medium">
                  {section.text}
                </p>
                <NavLink 
                  to={langPath(section.path)}
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gray-50 border border-gray-100 text-sm font-black text-gray-700 hover:bg-blue-950 hover:text-white transition-all uppercase tracking-widest"
                >
                  Explorer
                  <ArrowRight size={16} />
                </NavLink>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Join;

