
import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Users, Zap, Globe2 } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Home: React.FC = () => {
  const { content, langPath } = useLanguage();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
           <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl opacity-50" />
           <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-emerald-50/30 rounded-full blur-3xl opacity-50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-32">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-8 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-sm font-bold tracking-wide uppercase mb-6">
                  {content.hero.motto}
                </span>
                <h1 className="text-5xl lg:text-7xl font-extrabold text-blue-950 leading-[1.1] tracking-tight">
                  {content.hero.title}
                </h1>
                <p className="mt-6 text-xl text-gray-600 max-w-2xl font-medium leading-relaxed">
                  {content.hero.subtitle}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <NavLink
                  to={langPath('/join')}
                  className="w-full sm:w-auto px-8 py-4 bg-blue-900 text-white rounded-2xl font-bold text-lg hover:bg-blue-800 transition-all flex items-center justify-center gap-2 group"
                >
                  {content.hero.ctaJoin}
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </NavLink>
                <NavLink
                  to={langPath('/donate')}
                  className="w-full sm:w-auto px-8 py-4 bg-white text-blue-900 border-2 border-blue-900/10 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all flex items-center justify-center"
                >
                  {content.hero.ctaDonate}
                </NavLink>
              </motion.div>
            </div>

            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8 }}
               className="flex-1 relative"
            >
               <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative">
                  <img 
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop" 
                    alt="African Education Innovation" 
                    className="object-cover w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
               </div>
               {/* Floating badges */}
               <div className="absolute -top-6 -right-6 bg-white p-6 rounded-3xl shadow-xl flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <Zap />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-gray-500 tracking-wider">Innovation</p>
                    <p className="text-xl font-bold text-blue-900">Education 4.0</p>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Quick Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 space-y-4">
              <div className="w-14 h-14 bg-blue-50 text-blue-700 rounded-2xl flex items-center justify-center">
                <BookOpen />
              </div>
              <h3 className="text-2xl font-bold text-blue-950">Expertise</h3>
              <p className="text-gray-600 leading-relaxed">
                Appui technique aux ministères et développement de curricula innovants.
              </p>
            </div>
            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 space-y-4">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-700 rounded-2xl flex items-center justify-center">
                <Users />
              </div>
              <h3 className="text-2xl font-bold text-blue-950">Communauté</h3>
              <p className="text-gray-600 leading-relaxed">
                Renforcement de capacités des enseignants et soutien à la jeunesse.
              </p>
            </div>
            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 space-y-4">
              <div className="w-14 h-14 bg-amber-50 text-amber-700 rounded-2xl flex items-center justify-center">
                <Globe2 />
              </div>
              <h3 className="text-2xl font-bold text-blue-950">Rayonnement</h3>
              <p className="text-gray-600 leading-relaxed">
                Coopération régionale en Afrique de l'Ouest pour un impact durable.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
