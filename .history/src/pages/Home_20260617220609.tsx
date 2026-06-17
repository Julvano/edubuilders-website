
import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Users, Zap, Globe2, Calendar, Tag, Briefcase, FileText, MapPin } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
// import {/assets/images/header/home.jpg} from '/assets/images/header/home.jpg';
const Home: React.FC = () => {
  const { content, langPath, language } = useLanguage();
  const t = content.home;

  // Mock data for homepage sections using translations
  const latestProjects = [
    {
      id: 'p1',
      title: t.projects.p1.title,
      theme: t.projects.p1.theme,
      status: 'ongoing',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 'p2',
      title: t.projects.p2.title,
      theme: t.projects.p2.theme,
      status: 'completed',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb28f74b671?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 'p3',
      title: t.projects.p3.title,
      theme: t.projects.p3.theme,
      status: 'ongoing',
      image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=2070&auto=format&fit=crop',
    }
  ];

  const latestCareers = [
    {
      id: 1,
      title: t.careers.c1.title,
      type: t.careers.c1.type,
      location: t.careers.c1.location,
    },
    {
      id: 3,
      title: t.careers.c2.title,
      type: t.careers.c2.type,
      location: t.careers.c2.location,
    }
  ];

  const latestPublications = [
    {
      id: 1,
      title: t.publications.pb1.title,
      date: t.publications.pb1.date,
      category: t.publications.pb1.category,
    },
    {
      id: 2,
      title: t.publications.pb2.title,
      date: t.publications.pb2.date,
      category: t.publications.pb2.category,
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
           <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl opacity-50" />
           <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-emerald-50/30 rounded-full blur-3xl opacity-50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-5 lg:py-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-8 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-blue-950 leading-[1.1] tracking-tighter">
                  {content.hero.title}
                </h1>
                <p className="mt-6 text-xl text-gray-600 max-w-2xl font-medium leading-relaxed">
                  {content.hero.subtitle}
                </p>
                <span className="inline-block px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[12px] font-bold tracking-tight mb-4">
                  {content.hero.motto}
                </span>
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
                    // src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop" 
                    src={`${import.meta.env.BASE_URL}assets/images/header/home.jpg`}
                    alt="African Education Innovation - EduBuilders Institute" 
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

      {/* Presentation Section */}
      <section className="py-24 bg-white overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="bg-blue-50/50 p-10 lg:p-20 rounded-[4rem] text-center max-w-5xl mx-auto relative group overflow-hidden"
           >
              <div className="absolute top-0 left-0 w-32 h-32 bg-blue-100/50 rounded-full blur-3xl -ml-16 -mt-16 group-hover:scale-150 transition-transform duration-1000" />
              <p className="text-xl lg:text-2xl font-bold text-blue-950 leading-tighter break-words hyphens-auto relative z-10 text-justify">
  {content.home.presentation}
</p>
           </motion.div>
        </div>
      </section>

      {/* Dynamic Sections Grid */}
      <div className="bg-gray-50/50 py-24 space-y-32">
        {/* Latest Projects Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-5xl font-black text-blue-950 uppercase tracking-tight">
                {content.home.latestProjects}
              </h2>
              <div className="w-20 h-1.5 bg-emerald-500 rounded-full" />
            </div>
            <Link 
              to={langPath('/projects')} 
              className="group flex items-center gap-3 text-sm font-black text-blue-900 uppercase tracking-widest hover:text-emerald-600 transition-colors"
            >
              {content.home.allProjects}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all h-full flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-[10px] font-black uppercase tracking-widest text-emerald-600 rounded-lg shadow-sm">
                      {project.theme}
                    </span>
                  </div>
                </div>
                <div className="p-8 space-y-4 grow">
                   <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${project.status === 'ongoing' ? 'bg-emerald-500' : 'bg-blue-500'}`} />
                      <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                        {project.status === 'ongoing' ? content.projects.filters.ongoing : content.projects.filters.completed}
                      </span>
                   </div>
                   <h3 className="text-xl font-bold text-blue-950 leading-tight group-hover:text-emerald-600 transition-colors">
                     {project.title}
                   </h3>
                </div>
                <div className="px-8 pb-8">
                   <Link 
                    to={langPath(`/projects/${project.id}`)}
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-blue-900 hover:text-emerald-600"
                   >
                     {content.home.viewMore}
                     <ArrowRight size={14} />
                   </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Careers & Publications Row */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
            {/* Careers Section */}
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-xl lg:text-3xl font-black text-blue-950 uppercase tracking-tight">
                  {content.home.latestCareers}
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded-full" />
              </div>

              <div className="space-y-6">
                {latestCareers.map((job) => (
                  <Link 
                    key={job.id} 
                    to={langPath('/join')}
                    className="flex items-center justify-between p-6 bg-white rounded-3xl border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all group"
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Briefcase size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-blue-950 group-hover:text-blue-600 transition-colors">{job.title}</h4>
                        <div className="flex items-center gap-4 mt-1">
                           <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600">{job.type}</span>
                           <span className="flex items-center gap-1 text-[10px] font-bold text-gray-400">
                             <MapPin size={10} />
                             {job.location}
                           </span>
                        </div>
                      </div>
                    </div>
                    <ArrowRight size={20} className="text-gray-300 group-hover:text-blue-600 group-hover:translate-x-2 transition-all" />
                  </Link>
                ))}
              </div>

              <div className="flex pt-4">
                <Link 
                  to={langPath('/contact')}
                  className="px-8 py-4 bg-blue-950 text-white rounded-[2rem] font-bold text-sm hover:bg-emerald-600 transition-all flex items-center gap-3 shadow-xl shadow-blue-950/20"
                >
                  {t.contactCTA}
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Publications Section */}
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-xl lg:text-3xl font-black text-blue-950 uppercase tracking-tight">
                  {content.home.latestPublications}
                </h2>
                <div className="w-16 h-1 bg-amber-500 rounded-full" />
              </div>

              <div className="grid grid-cols-1 gap-6">
                {latestPublications.map((pub) => (
                  <div key={pub.id} className="p-8 bg-blue-950 rounded-[2.5rem] text-white relative overflow-hidden group">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                     <div className="relative z-10 space-y-6">
                        <div className="flex items-center justify-between">
                           <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                              <FileText size={18} className="text-amber-400" />
                           </div>
                           <span className="text-[10px] font-black uppercase tracking-widest text-white/50">{pub.category}</span>
                        </div>
                        <h4 className="text-xl font-bold leading-tight line-clamp-2">{pub.title}</h4>
                        <div className="flex items-center justify-between pt-4 border-t border-white/10">
                           <div className="flex items-center gap-2 text-[10px] font-bold text-white/60">
                              <Calendar size={12} />
                              {pub.date}
                           </div>
                           <Link to={langPath('/publications')} className="text-[10px] font-black uppercase tracking-widest hover:text-amber-400 transition-colors">
                              {content.home.viewMore}
                           </Link>
                        </div>
                     </div>
                  </div>
                ))}
              </div>

              <div className="flex pt-4">
                <Link to={langPath('/publications')} className="group flex items-center gap-3 text-sm font-black text-blue-900 uppercase tracking-widest hover:text-amber-500 transition-colors">
                  {content.home.allPublications}
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Mission Quick Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-10 rounded-[2rem] shadow-sm border border-gray-100 space-y-4">
              <div className="w-14 h-14 bg-blue-50 text-blue-700 rounded-2xl flex items-center justify-center">
                <BookOpen />
              </div>
              <h3 className="text-2xl font-bold text-blue-950">{t.features.expertise.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t.features.expertise.text}
              </p>
            </div>
            <div className="bg-gray-50 p-10 rounded-[2rem] shadow-sm border border-gray-100 space-y-4">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-700 rounded-2xl flex items-center justify-center">
                <Users />
              </div>
              <h3 className="text-2xl font-bold text-blue-950">{t.features.community.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t.features.community.text}
              </p>
            </div>
            <div className="bg-gray-50 p-10 rounded-[2rem] shadow-sm border border-gray-100 space-y-4">
              <div className="w-14 h-14 bg-amber-50 text-amber-700 rounded-2xl flex items-center justify-center">
                <Globe2 />
              </div>
              <h3 className="text-2xl font-bold text-blue-950">{t.features.influence.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t.features.influence.text}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
