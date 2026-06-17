import React, { useState } from 'react';
import { useLanguage } from '../components/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, ArrowRight, Calendar, Tag, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Project {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  theme: 'digital' | 'training' | 'inclusion' | 'cooperation' | 'orientation';
  status: 'ongoing' | 'completed';
  date: string;
}

const Projects: React.FC = () => {
  const { content, language } = useLanguage();
  const t = content.projects;
  const { langPath } = useLanguage();

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterTheme, setFilterTheme] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const allProjects: Project[] = [
    {
      id: 'p1',
      title: language === 'fr' ? 'Plateforme EduDigital Bénin' : 'EduDigital Benin Platform',
      excerpt: language === 'fr' ? 'Déploiement d\'une infrastructure numérique pour 50 écoles rurales.' : 'Deploying digital infrastructure for 50 rural schools.',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop',
      theme: 'digital',
      status: 'ongoing',
      date: '2024 - 2026'
    },
    {
      id: 'p2',
      title: language === 'fr' ? 'Programme Excellence Enseignante' : 'Teacher Excellence Program',
      excerpt: language === 'fr' ? 'Certification de 500 formateurs aux nouvelles méthodes pédagogiques.' : 'Certification of 500 trainers in new pedagogical methods.',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb28f74b671?q=80&w=2070&auto=format&fit=crop',
      theme: 'training',
      status: 'completed',
      date: '2022 - 2024'
    },
    {
      id: 'p3',
      title: language === 'fr' ? 'Inclusion Sans Frontières' : 'Inclusion Without Borders',
      excerpt: language === 'fr' ? 'Adaptation des curricula pour les enfants en situation de handicap.' : 'Adapting curricula for children with disabilities.',
      image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=2070&auto=format&fit=crop',
      theme: 'inclusion',
      status: 'ongoing',
      date: '2023 - 2025'
    },
    {
      id: 'p4',
      title: language === 'fr' ? 'Observatoire Ouest-Africain' : 'West African Observatory',
      excerpt: language === 'fr' ? 'Production de données probantes sur la coopération régionale.' : 'Producing evidence on regional cooperation.',
      image: 'https://images.unsplash.com/photo-1454165833767-027ffea9e778?q=80&w=2070&auto=format&fit=crop',
      theme: 'cooperation',
      status: 'completed',
      date: '2021 - 2023'
    }
  ];

  const filteredProjects = allProjects.filter(project => {
    const matchesTheme = filterTheme === 'all' || project.theme === filterTheme;
    const matchesStatus = filterStatus === 'all' || project.status === filterStatus;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTheme && matchesStatus && matchesSearch;
  });

  const themes = ['all', 'digital', 'training', 'inclusion', 'cooperation', 'orientation'];
  const statuses = ['all', 'ongoing', 'completed'];

  const getThemeLabel = (theme: string) => {
    if (theme === 'all') return t.filters.all;
    return (t.themes as any)[theme] || theme;
  };

  return (
    <div className="py-5 lg:py-8 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] lg:h-[400px] flex items-center justify-center overflow-hidden rounded-[2.5rem] lg:rounded-[4rem] mx-4 sm:mx-6 lg:mx-8 mb-12">
        <div className="absolute inset-0">
          <img 
            // src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070&auto=format&fit=crop" 
            src={`${import.meta.env.BASE_URL}assets/images/header/action-projects.jpg`}
            alt="Projects - EduBuilders Institute"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-emerald-950/70 backdrop-blur-[2px]" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-4"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter">
              {t.title}
            </h1>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
            <p className="text-sm sm:text-lg text-emerald-100 max-w-2xl mx-auto font-medium">
              {t.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Controls Bar */}
      <section className="pb-8 bg-white border-b border-gray-100 top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:max-w-md group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-600 transition-colors" size={20} />
              <input 
                type="text" 
                placeholder={content.publications.filterPlaceholder}
                className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-2xl border border-gray-100 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all font-medium text-blue-950 shadow-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Filter Toggle */}
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-lg ${
                isFilterOpen 
                ? 'bg-blue-950 text-white shadow-blue-950/20' 
                : 'bg-white text-blue-950 border border-gray-200 hover:border-emerald-500 shadow-gray-200/50'
              }`}
            >
              <Filter size={18} className={isFilterOpen ? 'animate-pulse' : ''} />
              {t.filterButton}
              {(filterTheme !== 'all' || filterStatus !== 'all') && (
                <span className="w-2 h-2 bg-emerald-500 rounded-full" />
              )}
            </button>
          </div>

          {/* Retractable Filter Panel */}
          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="overflow-hidden"
              >
                <div className="pt-8 pb-4 flex flex-wrap gap-6 items-end justify-center border-t border-gray-100 mt-8">
                  <div className="space-y-3 grow md:grow-0">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">{t.filters.theme}</label>
                    <div className="flex items-center gap-3 bg-gray-50 px-5 py-3 rounded-2xl border border-gray-100 shadow-inner">
                      <Tag size={16} className="text-emerald-600" />
                      <select 
                        className="bg-transparent outline-none font-bold text-sm text-blue-950 py-1 min-w-[150px] cursor-pointer"
                        value={filterTheme}
                        onChange={(e) => setFilterTheme(e.target.value)}
                      >
                        {themes.map(theme => (
                          <option key={theme} value={theme}>
                            {getThemeLabel(theme)}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-3 grow md:grow-0">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">{t.filters.status}</label>
                    <div className="flex items-center gap-3 bg-gray-50 px-5 py-3 rounded-2xl border border-gray-100 shadow-inner">
                      <Activity size={16} className="text-blue-600" />
                      <select 
                        className="bg-transparent outline-none font-bold text-sm text-blue-950 py-1 min-w-[150px] cursor-pointer"
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                      >
                        {statuses.map(status => (
                          <option key={status} value={status}>
                            {status === 'all' ? t.filters.all : (status === 'ongoing' ? t.filters.ongoing : t.filters.completed)}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <button 
                    onClick={() => {
                      setFilterTheme('all');
                      setFilterStatus('all');
                    }}
                    className="h-14 px-8 text-[10px] font-black uppercase tracking-widest text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    {t.clearButton}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group flex flex-col lg:flex-row bg-white rounded-[3rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-emerald-950/10 transition-all h-full"
                >
                  <div className="lg:w-2/5 relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-6 left-6 flex gap-2">
                      <span className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest backdrop-blur-md border border-white/20 shadow-lg ${
                        project.status === 'ongoing' ? 'bg-emerald-500/80 text-white' : 'bg-blue-600/80 text-white'
                      }`}>
                        {project.status === 'ongoing' ? t.filters.ongoing : t.filters.completed}
                      </span>
                    </div>
                  </div>

                  <div className="lg:w-3/5 p-10 flex flex-col gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-emerald-600">
                        <Tag size={14} />
                        <span className="text-[10px] font-black uppercase tracking-widest">{getThemeLabel(project.theme)}</span>
                      </div>
                      <h3 className="text-xl font-black text-blue-950 leading-tight group-hover:text-emerald-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 font-medium leading-relaxed line-clamp-3 ">
                        {project.excerpt}
                      </p>
                    </div>

                    <div className="mt-auto pt-8 border-t border-gray-100 flex items-center justify-between">
                      <div className="flex items-center gap-3 text-gray-400">
                        <Calendar size={16} />
                        <span className="text-xs font-bold">{project.date}</span>
                      </div>
                      <Link 
                        to={langPath(`/projects/${project.id}`)}
                        className="p-4 rounded-2xl bg-blue-50 text-blue-600 group-hover:bg-emerald-500 group-hover:text-white transition-all transform group-hover:translate-x-2"
                      >
                        <ArrowRight size={20} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-40">
              <Filter size={48} className="mx-auto text-gray-200 mb-6" />
              <p className="text-2xl font-bold text-gray-400">
                {t.noProjects}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;
