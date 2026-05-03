
import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { NavLink } from 'react-router-dom';
import { motion } from 'motion/react';

const Partners: React.FC = () => {
  const { content, langPath } = useLanguage();

  return (
    <div className="py-5 lg:py-8 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] lg:h-[400px] flex items-center justify-center overflow-hidden rounded-[2.5rem] lg:rounded-[4rem] mx-4 sm:mx-6 lg:mx-8 mb-12">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop" 
            alt="Partners"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-950/70 backdrop-blur-[2px]" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-4"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter">
              {content.nav.partners}
            </h1>
            <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full" />
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center opacity-40">
           {/* Logic for logos would go here */}
           <div className="h-20 bg-gray-200 rounded-xl flex items-center justify-center font-black text-gray-400 uppercase tracking-widest text-xs">Partner 1</div>
           <div className="h-20 bg-gray-200 rounded-xl flex items-center justify-center font-black text-gray-400 uppercase tracking-widest text-xs">Partner 2</div>
           <div className="h-20 bg-gray-200 rounded-xl flex items-center justify-center font-black text-gray-400 uppercase tracking-widest text-xs">Partner 3</div>
           <div className="h-20 bg-gray-200 rounded-xl flex items-center justify-center font-black text-gray-400 uppercase tracking-widest text-xs">Partner 4</div>
        </div>
        
        <div className="mt-32 p-16 bg-blue-50 rounded-[4rem] text-center space-y-8 border border-blue-100 shadow-xl shadow-blue-900/5">
           <h2 className="text-3xl lg:text-4xl font-black text-blue-950 uppercase tracking-tight">
             {content.workingTogether.partner.title}
           </h2>
           <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
             {content.workingTogether.partner.intro}
           </p>
           <NavLink 
             to={langPath('/contact')}
             className="inline-block bg-blue-900 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all uppercase tracking-widest"
           >
             {content.nav.contact}
           </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Partners;
