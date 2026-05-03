
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
    <div className="py-5 lg:py-8 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] lg:h-[400px] flex items-center justify-center overflow-hidden rounded-[2.5rem] lg:rounded-[4rem] mx-4 sm:mx-6 lg:mx-8 mb-12">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" 
            alt="Join"
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
              {content.nav.join}
            </h1>
            <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full" />
            <p className="text-sm sm:text-lg text-blue-100 max-w-2xl mx-auto font-medium">
               {content.join.intro}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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
                  {content.join.explorer}
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

