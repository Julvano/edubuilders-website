/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useLanguage } from '../components/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, 
  Download, 
  Search, 
  Calendar, 
  Clock, 
  ArrowRight, 
  Tag, 
  MapPin, 
  BookOpen, 
  Newspaper 
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock Data

const DOCUMENTS = [

  {

    id: 'd1',

    label: { fr: "RAPPORT 2026", en: "REPORT 2026" },

    title: {

      fr: "Évaluation de l'impact du numérique dans les écoles rurales du Bénin.",

      en: "Evaluation of the impact of digital technology in rural schools in Benin."

    },

    date: { fr: "Avril 2026", en: "April 2026" }

  },

  {

    id: 'd2',

    label: { fr: "ÉTUDE TECHNIQUE", en: "TECHNICAL STUDY" },

    title: {

      fr: "Harmonisation des curricula de formation professionnelle dans l'espace CEDEAO.",

      en: "Harmonization of vocational training curricula in the ECOWAS region."

    },

    date: { fr: "Mars 2026", en: "March 2026" }

  },

  {

    id: 'd3',

    label: { fr: "POLITIQUE", en: "POLICY" },

    title: {

      fr: "Stratégie régionale pour l'éducation de qualité 2025-2030.",

      en: "Regional strategy for quality education 2025-2030."

    },

    date: { fr: "Janvier 2026", en: "January 2026" }

  }

];



const ARTICLES = [

  {

    id: '1',

    title: {

      fr: "10 bourses de formation professionnelle en audiovisuel et numérique",

      en: "10 vocational training scholarships in audiovisual and digital"

    },

    excerpt: {

      fr: "Le CFOMAN-DAABAARU lance un appel à candidatures pour 10 bourses de formation professionnelle en audiovisuel et numérique.",

      en: "CFOMAN-DAABAARU is launching a call for applications for 10 vocational training scholarships in audiovisual and digital media."

    },

    category: { fr: "Bourses", en: "Scholarships" },

    location: { fr: "Bénin", en: "Benin" },

    date: "17 avril 2026",

    readingTime: "5",

    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"

  },

  {

    id: '2',

    title: {

      fr: "National Endowment for Democracy (NED) lance son Programme de subventions",

      en: "National Endowment for Democracy (NED) launches its Grants Program"

    },

    excerpt: {

      fr: "Le National Endowment for Democracy offre plus de 2000 subventions pour soutenir des projets démocratiques dans plus de 100 pays.",

      en: "The National Endowment for Democracy offers more than 2,000 grants to support democratic projects in more than 100 countries."

    },

    category: { fr: "Subventions", en: "Grants" },

    location: { fr: "Afrique", en: "Africa" },

    date: "14 avril 2026",

    readingTime: "8",

    image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=2070&auto=format&fit=crop"

  },

  {

    id: '3',

    title: {

      fr: "Concours ESMT Dakar 2026 : Recrutement Licence, Master et...",

      en: "ESMT Dakar 2026 Competition: Recruitment License, Master and..."

    },

    excerpt: {

      fr: "Le gouvernement béninois lance le concours d'entrée à l'ESMT Dakar pour l'année 2026-2027.",

      en: "The Beninese government is launching the entry competition for ESMT Dakar for the year 2026-2027."

    },

    category: { fr: "Concours", en: "Competition" },

    location: { fr: "Bénin", en: "Benin" },

    date: "14 avril 2026",

    readingTime: "1",

    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1973&auto=format&fit=crop"

  }

];

const DocumentCard: React.FC<{ doc: typeof DOCUMENTS[0], lang: 'fr' | 'en' }> = ({ doc, lang }) => (
  <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 p-8 flex flex-col h-full hover:shadow-xl transition-all duration-300">
    <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-10">
      <FileText size={30} />
    </div>
    
    <div className="flex-grow space-y-4">
      <span className="text-xs font-black text-emerald-600 uppercase tracking-widest leading-none">
        {doc.label[lang]}
      </span>
      <h3 className="text-sm lg:text-xl font-black text-blue-950 leading-tight">
        {doc.title[lang]}
      </h3>
    </div>
    
    <div className="mt-12 flex items-center justify-between">
      <span className="text-sm font-medium text-gray-400 italic">
        {doc.date[lang]}
      </span>
      <button className="p-3 bg-gray-50 text-blue-900 rounded-full hover:bg-blue-900 hover:text-white transition-all shadow-sm">
        <Download size={22} />
      </button>
    </div>
  </div>
);

const ArticleCard: React.FC<{ article: typeof ARTICLES[0], lang: 'fr' | 'en', t: any, langPath: (p: string) => string }> = ({ article, lang, t, langPath }) => (
  <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300 h-full flex flex-col">
    <div className="relative aspect-video overflow-hidden">
      <img 
        src={article.image} 
        alt={article.title[lang]} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      <div className="absolute top-4 left-4 flex gap-2">
         <span className="px-3 py-1.5 bg-blue-600 text-white text-[10px] font-black uppercase rounded-lg shadow-lg shadow-blue-900/20">
            {article.category[lang]}
         </span>
         <span className="px-3 py-1.5 bg-white text-gray-700 text-[10px] font-black uppercase rounded-lg flex items-center gap-1 shadow-lg">
            <MapPin size={10} />
            {article.location[lang]}
         </span>
      </div>
    </div>
    
    <div className="p-8 space-y-6 flex-grow flex flex-col">
      <div className="flex items-center gap-4 text-xs font-medium text-gray-400">
        <div className="flex items-center gap-1.5">
           <Calendar size={14} className="text-emerald-500" />
           <span>{article.date}</span>
        </div>
        <div className="flex items-center gap-1.5">
           <Clock size={14} className="text-emerald-500" />
           <span>{article.readingTime} {t.publications.readingTime}</span>
        </div>
      </div>

      <h3 className="text-sm lg:text-xl font-black text-blue-900 leading-tight group-hover:text-emerald-700 transition-colors">
        {article.title[lang]}
      </h3>

      <p className="text-sm lg:text-xl text-gray-600 leading-relaxed font-medium line-clamp-3">
        {article.excerpt[lang]}
      </p>

      <div className="pt-4 mt-auto border-t border-gray-50">
        <Link 
          to={langPath(`/publications/article/${article.id}`)}
          className="inline-flex items-center gap-2 text-blue-600 font-black text-sm uppercase tracking-wider hover:text-emerald-700 transition-colors group/link"
        >
          {t.publications.readMore}
          <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  </div>
);

const Publications: React.FC = () => {
  const { language, content: t, langPath } = useLanguage();
  // Changement ici : 'articles' est maintenant l'état initial
  const [activeTab, setActiveTab] = useState<'articles' | 'documents'>('articles');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="py-5 lg:py-8 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] lg:h-[400px] flex items-center justify-center overflow-hidden rounded-[2.5rem] lg:rounded-[4rem] mx-4 sm:mx-6 lg:mx-8 mb-12">
        <div className="absolute inset-0">
          <img 
            // src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop" 
            src={`${import.meta.env.BASE_URL}assets/images/header/publication.jpg`}
            alt="Publications - EduBuilders Institute"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/70 backdrop-blur-[2px]" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter">
              {t.publications.title}
            </h1>
            <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full" />
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Search & Tabs */}
        <div className="space-y-12 mb-16">
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <div className="relative flex-grow sm:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder={t.publications.filterPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-4 bg-white border-2 border-gray-100 rounded-2xl focus:border-blue-900 outline-none transition-all shadow-sm font-medium text-sm"
              />
            </div>
            <button className="flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-gray-100 text-gray-700 font-bold rounded-2xl hover:border-emerald-500 transition-all shadow-sm text-sm">
              <Tag size={18} className="text-emerald-500" />
              {t.publications.allCategories}
            </button>
          </div>

          <div className="flex border-b border-gray-100 gap-8">
            {/* L'onglet Articles est maintenant en premier visuellement */}
            <button 
              onClick={() => setActiveTab('articles')}
              className={`pb-4 text-sm font-black uppercase tracking-widest flex items-center gap-2 transition-all relative ${
                activeTab === 'articles' ? 'text-blue-900' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <Newspaper size={18} />
              {t.publications.articlesLabel}
              {activeTab === 'articles' && (
                <motion.div layoutId="tab" className="absolute bottom-0 left-0 right-0 h-1 bg-blue-900 rounded-t-full" />
              )}
            </button>

            <button 
              onClick={() => setActiveTab('documents')}
              className={`pb-4 text-sm font-black uppercase tracking-widest flex items-center gap-2 transition-all relative ${
                activeTab === 'documents' ? 'text-blue-900' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <BookOpen size={18} />
              {t.publications.documentsLabel}
              {activeTab === 'documents' && (
                <motion.div layoutId="tab" className="absolute bottom-0 left-0 right-0 h-1 bg-blue-900 rounded-t-full" />
              )}
            </button>
          </div>
        </div>

        {/* Grid Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Logique inversée ici également pour correspondre à l'état par défaut */}
            {activeTab === 'articles' ? (
              ARTICLES.map(article => (
                <ArticleCard key={article.id} article={article} lang={language} t={t} langPath={langPath} />
              ))
            ) : (
              DOCUMENTS.map(doc => (
                <DocumentCard key={doc.id} doc={doc} lang={language} />
              ))
            )}
          </motion.div>
        </AnimatePresence>

        {/* Counter */}
        <div className="mt-16 pt-8 border-t border-gray-100">
           <p className="text-blue-900 font-bold">
             <span className="text-3xl tracking-tighter">
               {activeTab === 'articles' ? ARTICLES.length : DOCUMENTS.length}
             </span>
             <span className="ml-2 uppercase text-xs tracking-widest text-gray-400">
               {activeTab === 'articles' ? t.publications.identifiedOpp : t.publications.availableDocs}
             </span>
           </p>
        </div>
      </div>
    </div>
  );
};

export default Publications;