
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../components/LanguageContext';
import { motion } from 'motion/react';
import { Calendar, Clock, ArrowLeft, Share2, Tag } from 'lucide-react';

// Mock data integration
const ARTICLES = [
  {
    id: '1',
    title: {
      fr: "10 bourses de formation professionnelle en audiovisuel et numérique",
      en: "10 vocational training scholarships in audiovisual and digital"
    },
    category: { fr: "Bourses", en: "Scholarships" },
    location: { fr: "Bénin", en: "Benin" },
    date: "17 avril 2026",
    readingTime: "5",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
    content: `
      <p>Le CFOMAN-DAABAARU lance un appel à candidatures pour 10 bourses de formation professionnelle en audiovisuel et numérique. Cette initiative vise à renforcer les compétences techniques des jeunes Béninois dans des secteurs en pleine croissance.</p>
      <h2>Critères d'éligibilité</h2>
      <ul>
        <li>Avoir entre 18 et 30 ans</li>
        <li>Résider au Bénin</li>
        <li>Avoir un projet professionnel dans le domaine du numérique</li>
      </ul>
      <p>Les candidatures sont ouvertes jusqu'au 30 avril 2026. Les dossiers doivent comprendre un CV et une lettre de motivation.</p>
      <blockquote>L'éducation de qualité commence par la coopération et l'accès aux opportunités technologiques.</blockquote>
      <p>Pour plus d'informations, veuillez contacter le secrétariat technique de l'EduBuilders Institute.</p>
    `
  },
  {
    id: '2',
    title: {
      fr: "National Endowment for Democracy (NED) lance son Programme de subventions",
      en: "National Endowment for Democracy (NED) launches its Grants Program"
    },
    category: { fr: "Subventions", en: "Grants" },
    location: { fr: "Afrique", en: "Africa" },
    date: "14 avril 2026",
    readingTime: "8",
    image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=2070&auto=format&fit=crop",
    content: `
      <p>Le National Endowment for Democracy offre plus de 2000 subventions pour soutenir des projets démocratiques dans plus de 100 pays. En Afrique de l'Ouest, l'accent est mis sur l'innovation éducative et la citoyenneté durable.</p>
      <h3>Objectifs prioritaires</h3>
      <p>Le programme finance des projets qui favorisent :</p>
      <ul>
        <li>La transparence et la redevabilité</li>
        <li>L'éducation civique des jeunes</li>
        <li>La liberté de la presse et l'accès à l'information</li>
      </ul>
      <p>Les organisations de la société civile sont encouragées à postuler via le portail en ligne de la NED.</p>
    `
  }
];

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { language, content: t, langPath } = useLanguage();
  
  const article = ARTICLES.find(a => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">Article non trouvé</h2>
          <Link to={langPath('/publications')} className="text-emerald-600 font-bold hover:underline">
            Retour aux publications
          </Link>
        </div>
      </div>
    );
  }

  const title = language === 'fr' ? article.title.fr : article.title.en;
  const category = language === 'fr' ? article.category.fr : article.category.en;
  const location = language === 'fr' ? article.location.fr : article.location.en;

  return (
    <div className="bg-white min-h-screen pt-12 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Navigation */}
        <Link 
          to={langPath('/publications')} 
          className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-900 font-bold mb-8 transition-colors"
        >
          <ArrowLeft size={18} />
          {language === 'fr' ? 'Retour aux publications' : 'Back to publications'}
        </Link>

        {/* Header */}
        <div className="space-y-6 mb-12">
          <div className="flex flex-wrap gap-3">
             <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-md uppercase tracking-wider">
                {category}
             </span>
             <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-md uppercase tracking-wider flex items-center gap-1">
                <Tag size={12} />
                {location}
             </span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-black text-blue-950 leading-tight tracking-tight">
            {title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm font-medium pt-2">
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-emerald-500" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-emerald-500" />
              <span>{article.readingTime} {t.publications.readingTime}</span>
            </div>
            <button className="flex items-center gap-2 hover:text-blue-900 transition-colors ml-auto">
              <Share2 size={16} />
              <span className="hidden sm:inline">Partager</span>
            </button>
          </div>
        </div>

        {/* Featured Image */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-[3rem] overflow-hidden shadow-2xl mb-16 aspect-video"
        >
          <img 
            src={article.image} 
            alt={title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Article Body - Pro-Typography / Quill Support */}
        <div 
          className="prose prose-lg prose-blue max-w-none prose-headings:text-blue-950 prose-headings:font-black prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 prose-strong:text-blue-900 prose-blockquote:border-emerald-500 prose-blockquote:bg-emerald-50 prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:rounded-lg prose-blockquote:not-italic prose-img:rounded-3xl prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Author Bio (Placeholder) */}
        <div className="mt-20 p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 flex items-center gap-6">
           <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-900 font-black text-xl">
              EB
           </div>
           <div>
              <h4 className="font-bold text-blue-950">EduBuilders Editorial</h4>
              <p className="text-sm text-gray-500">Expertise en innovation et coopération éducative en Afrique de l'Ouest.</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
