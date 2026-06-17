
import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { motion } from 'motion/react';
import { Linkedin, Mail, BadgeCheck } from 'lucide-react';

const Team: React.FC = () => {
  const { content } = useLanguage();
  const t = content.about.team;

  const teamImages = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop"
  ];

  return (
    <div className="py-5 lg:py-8 bg-white">
      {/* Hero Section */}
      <section className="relative h-[300px] lg:h-[400px] flex items-center justify-center overflow-hidden rounded-[2.5rem] lg:rounded-[4rem] mx-4 sm:mx-6 lg:mx-8 mb-12">
        <div className="absolute inset-0">
          <img 
            // src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
            src={`${import.meta.env.BASE_URL}assets/images/header/apropos-equipe.jpg`}
            alt="Team - EduBuilders Institute"
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
            <p className="text-sm sm:text-lg text-blue-100 max-w-2xl mx-auto font-medium">
               {t.intro}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="pb-16 lg:pb-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {t.members.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-[3rem] overflow-hidden shadow-sm border border-gray-100 group hover:shadow-2xl hover:shadow-blue-950/10 transition-all flex flex-col h-full"
              >
                <div className="aspect-[4/5] relative overflow-hidden">
                   <img 
                     src={teamImages[index]} 
                     alt={member.name}
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                     referrerPolicy="no-referrer"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                      <div className="flex gap-4">
                         <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-emerald-500 transition-all">
                            <Linkedin size={20} />
                         </button>
                         <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-emerald-500 transition-all">
                            <Mail size={20} />
                         </button>
                      </div>
                   </div>
                </div>
                
                <div className="p-10 space-y-6 flex-grow flex flex-col">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-[10px] font-black uppercase tracking-widest border border-blue-100">
                      <BadgeCheck size={12} />
                      {member.role}
                    </div>
                    <h3 className="text-2xl font-black text-blue-950 tracking-tight leading-tight">
                       {member.name}
                    </h3>
                  </div>

                  <p className="text-gray-600 font-medium leading-relaxed">
                     {member.description}
                  </p>

                  <div className="mt-auto pt-8 flex items-center gap-4">
                     <div className="w-10 h-0.5 bg-emerald-500 rounded-full" />
                     <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{t.directionLabel}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values/Commitment Banner */}
      <section className="py-20 bg-blue-950 text-center">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h4 className="text-emerald-400 text-sm font-black uppercase tracking-widest">{t.governanceTitle}</h4>
            <p className="text-2xl font-bold text-white leading-tighter break-words hyphens-auto text-justify">
               "{t.governanceText}"
            </p>
         </div>
      </section>
    </div>
  );
};

export default Team;
