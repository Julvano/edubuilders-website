import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { motion } from 'motion/react';
import { BarChart2, BookOpen, Handshake, Compass, HeartPulse, Laptop } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  BarChart2: <BarChart2 size={32} />,
  BookOpen: <BookOpen size={32} />,
  Handshake: <Handshake size={32} />,
  Compass: <Compass size={32} />,
  HeartPulse: <HeartPulse size={32} />,
  Laptop: <Laptop size={32} />,
};

const Expertise: React.FC = () => {
  const { content } = useLanguage();
  const t = content.expertise;

  return (
    <div className="py-5 lg:py-8 bg-white">
      {/* Hero Section */}
      <section className="relative h-[300px] lg:h-[400px] flex items-center justify-center overflow-hidden rounded-[2.5rem] lg:rounded-[4rem] mx-4 sm:mx-6 lg:mx-8 mb-12">
        <div className="absolute inset-0">
          <img 
            // src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
            src={`${import.meta.env.BASE_URL}assets/images/header/action-expertise.jpg`}
            alt="Expertise - EduBuilders Institute"
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
              {t.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Domains Grid */}
      <section className="pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {t.domains.map((domain, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-950/5 hover:-translate-y-2 transition-all flex flex-col items-start gap-8"
              >
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                  {iconMap[domain.icon]}
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-sm lg:text-xl font-black text-blue-950 leading-tight group-hover:text-blue-600 transition-colors">
                    {domain.title}
                  </h3>
                  <div className="w-12 h-1 bg-emerald-500 rounded-full" />
                  <div className="markdown-body">
                    <p className="text-gray-600 font-medium leading-relaxed">
                      {domain.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-12">
          <h2 className="text-4xl font-black text-blue-950 uppercase tracking-tight">{t.approach.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div className="space-y-4">
              <h4 className="text-lg font-black text-emerald-600 uppercase tracking-widest">{t.approach.data.title}</h4>
              <p className="text-gray-600 font-medium leading-relaxed">
                {t.approach.data.text}
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-black text-blue-600 uppercase tracking-widest">{t.approach.coop.title}</h4>
              <p className="text-gray-600 font-medium leading-relaxed">
                {t.approach.coop.text}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Expertise;
