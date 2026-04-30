
import React, { useState } from 'react';
import { useLanguage } from '../components/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Briefcase, 
  Heart, 
  Lightbulb, 
  Search, 
  MapPin, 
  Calendar, 
  Clock, 
  ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Careers: React.FC = () => {
  const { language, content: tContent, langPath } = useLanguage();
  const t = tContent.workingTogether.careers;
  const [filter, setFilter] = useState<'All' | 'Volontaire' | 'Salarié'>('All');

  const jobs = [
    {
      id: 1,
      title: language === 'fr' ? "Expert en Ingénierie Pédagogique pour 2026" : "Instructional Design Expert for 2026",
      type: "Salarié",
      location: "Bénin",
      region: language === 'fr' ? "Afrique" : "Africa",
      date: "21 avril 2026",
      readingTime: "1",
      excerpt: language === 'fr' ? "EduBuilders lance un appel à candidatures pour recruter des experts en ingénierie pédagogique." : "EduBuilders is launching a call for applications to recruit instructional design experts.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
      urgent: true
    },
    {
      id: 2,
      title: language === 'fr' ? "Volontaire de Soutien Éducatif - Parakou" : "Educational Support Volunteer - Parakou",
      type: "Volontaire",
      location: "Bénin",
      region: "Bénin",
      date: "19 avril 2026",
      readingTime: "2",
      excerpt: language === 'fr' ? "Rejoignez notre équipe terrain pour soutenir les programmes d'alphabétisation à Parakou." : "Join our field team to support literacy programs in Parakou.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop",
      urgent: false
    },
    {
      id: 3,
      title: language === 'fr' ? "Analyste de Politiques Publiques Éducatives" : "Educational Public Policy Analyst",
      type: "Salarié",
      location: "Bénin",
      region: "Bénin",
      date: "15 avril 2026",
      readingTime: "5",
      excerpt: language === 'fr' ? "Nous recherchons un analyste pour évaluer l'impact des réformes curriculaires régionales." : "We are looking for an analyst to evaluate the impact of regional curricular reforms.",
      image: "https://images.unsplash.com/photo-1573161559521-4804bb6dd303?q=80&w=2069&auto=format&fit=crop",
      urgent: false
    }
  ];

  const filteredJobs = filter === 'All' ? jobs : jobs.filter(j => j.type === filter);

  return (
    <div className="py-20 lg:py-32 bg-gray-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mb-24 space-y-6">
           <h1 className="text-5xl lg:text-7xl font-black text-blue-950 uppercase tracking-tighter">
             {t.title}
           </h1>
           <p className="text-xl text-gray-600 font-medium leading-relaxed">
             {t.intro}
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
           <div className="space-y-12">
              <section className="space-y-6">
                 <h2 className="text-3xl font-black text-blue-950 uppercase tracking-tight flex items-center gap-4">
                    <div className="w-2 h-8 bg-blue-600 rounded-full" />
                    {t.valuesTitle}
                 </h2>
                 <p className="text-lg text-gray-600 font-medium leading-relaxed">
                    {t.valuesText}
                 </p>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="p-6 bg-white rounded-3xl border border-gray-100 flex flex-col gap-3 shadow-sm">
                       <Heart className="text-rose-500" size={24} />
                       <span className="font-black text-sm uppercase tracking-wider text-blue-950">Équité</span>
                    </div>
                    <div className="p-6 bg-white rounded-3xl border border-gray-100 flex flex-col gap-3 shadow-sm">
                       <Lightbulb className="text-amber-500" size={24} />
                       <span className="font-black text-sm uppercase tracking-wider text-blue-950">Innovation</span>
                    </div>
                 </div>
              </section>

              <section className="space-y-6">
                 <h2 className="text-3xl font-black text-blue-950 uppercase tracking-tight flex items-center gap-4">
                    <div className="w-2 h-8 bg-emerald-500 rounded-full" />
                    {t.processTitle}
                 </h2>
                 <p className="text-lg text-gray-600 font-medium leading-relaxed italic border-l-4 border-emerald-100 pl-6">
                    {t.processText}
                 </p>
              </section>
           </div>

           <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop" 
                alt="Working at EduBuilders" 
                className="rounded-[4rem] shadow-2xl grayscale-[30%] hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -left-10 bg-blue-900 text-white p-10 rounded-[3rem] shadow-2xl space-y-2">
                 <p className="text-4xl font-black">25+</p>
                 <p className="text-xs font-bold uppercase tracking-widest opacity-70 italic">Experts Internationaux</p>
              </div>
           </div>
        </div>

        {/* Dynamic Job List */}
        <section className="space-y-12">
           <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-gray-100 pb-12">
              <div className="space-y-4">
                 <h2 className="text-4xl font-black text-blue-950 uppercase tracking-tight">{t.listingTitle}</h2>
                 <div className="flex gap-3">
                    {['All', 'Salarié', 'Volontaire'].map((category) => (
                      <button 
                        key={category}
                        onClick={() => setFilter(category as any)}
                        className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                          filter === category ? 'bg-blue-950 text-white shadow-lg' : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                        }`}
                      >
                        {category === 'All' ? (language === 'fr' ? 'Tous' : 'All') : category}
                      </button>
                    ))}
                 </div>
              </div>
              <div className="relative w-full md:w-80">
                 <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                 <input type="text" placeholder="Rechercher..." className="w-full bg-white border-2 border-gray-100 rounded-2xl px-14 py-4 font-bold text-sm focus:border-blue-900 outline-none" />
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredJobs.map((job) => (
                  <motion.div
                    key={job.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="h-full"
                  >
                    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden h-full flex flex-col group hover:shadow-xl transition-all duration-300">
                      {/* Image Top */}
                      <div className="relative aspect-video overflow-hidden">
                        <img 
                          src={job.image} 
                          alt={job.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-4 left-4 flex gap-2">
                           <span className="px-3 py-1 bg-blue-600 text-white text-[10px] font-black uppercase rounded-lg shadow-lg">
                              {job.type === 'Salarié' ? 'Emplois' : 'Volontaire'}
                           </span>
                           <span className="px-3 py-1 bg-white text-gray-700 text-[10px] font-black uppercase rounded-lg flex items-center gap-1 shadow-lg">
                              <MapPin size={10} />
                              {job.region}
                           </span>
                        </div>
                      </div>

                      {/* Content Area */}
                      <div className="p-8 flex-grow flex flex-col space-y-4">
                        <div className="flex items-center gap-4 text-xs font-medium text-gray-400">
                           <div className="flex items-center gap-1.5">
                              <Calendar size={14} className="text-blue-500" />
                              <span>{job.date}</span>
                           </div>
                           <div className="flex items-center gap-1.5">
                              <Clock size={14} className="text-blue-500" />
                              <span>{job.readingTime} {language === 'fr' ? 'min' : 'min'}</span>
                           </div>
                        </div>

                        <h3 className="text-xl font-black text-blue-900 leading-tight group-hover:text-blue-700 transition-colors">
                           <Link to={langPath(`/working-together/careers/${job.id}`)}>{job.title}</Link>
                        </h3>

                        <p className="text-sm text-gray-500 leading-relaxed font-medium line-clamp-3">
                           {job.excerpt}
                        </p>

                        <div className="flex gap-2 pt-2">
                           <span className="px-3 py-1.5 bg-blue-50 text-blue-600 text-[10px] font-black uppercase rounded-full">
                              {job.type === 'Salarié' ? 'Emplois' : 'Volontaire'}
                           </span>
                           <span className="px-3 py-1.5 bg-gray-50 text-gray-600 text-[10px] font-black uppercase rounded-full flex items-center gap-1">
                              <MapPin size={10} />
                              {job.region}
                           </span>
                        </div>

                        <div className="pt-6 mt-auto border-t border-gray-50 flex items-center justify-between">
                           <Link 
                             to={langPath(`/working-together/careers/${job.id}`)}
                             className="inline-flex items-center gap-2 text-blue-600 font-black text-sm uppercase tracking-wider hover:text-blue-900 transition-colors"
                           >
                             {language === 'fr' ? "Lire l'article" : "Read more"}
                             <ArrowRight size={16} />
                           </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
           </div>
        </section>
      </div>
    </div>
  );
};


export default Careers;

