
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../components/LanguageContext';
import { motion } from 'motion/react';
import { 
  MapPin, 
  Briefcase, 
  Clock, 
  Calendar, 
  ArrowLeft, 
  Share2, 
  Mail, 
  FileCheck,
  ChevronRight
} from 'lucide-react';

// Mock Data
const JOBS_DATA: Record<string, any> = {
  '1': {
    title: { 
      fr: "Expert en Ingénierie Pédagogique", 
      en: "Instructional Design Expert" 
    },
    category: { fr: "Salarié", en: "Employee" },
    postedDate: "18 Avril 2026",
    deadline: "15 Mai 2026",
    location: { fr: "Abomey-Calavi / Hybride", en: "Abomey-Calavi / Hybrid" },
    contractType: { fr: "CDD (24 mois)", en: "Fixed-term (24 months)" },
    duration: { fr: "2 ans renouvelables", en: "2 years renewable" },
    responsibilitiesHtml: `
      <h2>Missions principales</h2>
      <p>Sous la supervision du Directeur Général, l'expert sera chargé de :</p>
      <ul>
        <li>Concevoir et réviser les <strong>curricula de formation</strong> pour les centres d'excellence régionaux.</li>
        <li>Développer des modules d'apprentissage hybrides (présentiel/numérique).</li>
        <li>Former les formateurs aux nouvelles approches pédagogiques innovantes.</li>
        <li>Évaluer l'impact des dispositifs de formation mis en œuvre.</li>
      </ul>
      <blockquote>L'innovation pédagogique est au cœur de notre stratégie de transformation des systèmes éducatifs.</blockquote>
    `,
    qualificationsHtml: `
      <h2>Profil recherché</h2>
      <ul>
        <li>Master en Sciences de l'Éducation, Ingénierie de formation ou équivalent.</li>
        <li>Au moins <strong>5 ans d'expérience</strong> dans la conception de programmes éducatifs en Afrique de l'Ouest.</li>
        <li>Excellente maîtrise des outils de <em>Digital Learning</em> (LMS, outils auteur).</li>
        <li>Capacité à travailler dans un environnement multiculturel et bilingue.</li>
      </ul>
    `
  },
  '2': {
    title: { 
      fr: "Volontaire de Soutien Éducatif", 
      en: "Educational Support Volunteer" 
    },
    category: { fr: "Volontaire", en: "Volunteer" },
    postedDate: "20 Avril 2026",
    deadline: "05 Mai 2026",
    location: { fr: "Parakou, Bénin", en: "Parakou, Benin" },
    contractType: { fr: "Bénévolat", en: "Volunteering" },
    duration: { fr: "6 mois", en: "6 months" },
    responsibilitiesHtml: `
      <h2>Activités du volontaire</h2>
      <p>Le volontaire appuiera l'équipe opérationnelle sur le terrain pour :</p>
      <ul>
        <li>Animer des ateliers de lecture et de calcul pour les jeunes vulnérables.</li>
        <li>Soutenir la gestion administrative des centres de ressources locaux.</li>
        <li>Contribuer à la collecte de données sur l'impact communautaire.</li>
      </ul>
    `,
    qualificationsHtml: `
      <h2>Critères d'éligibilité</h2>
      <ul>
        <li>Étudiant ou diplômé en sciences sociales ou éducation.</li>
        <li>Forte motivation pour l'impact social et l'engagement communautaire.</li>
        <li>Résidence souhaitée à Parakou ou environs.</li>
      </ul>
    `
  }
};

const JobDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { language, content: t, langPath } = useLanguage();
  
  const job = id ? JOBS_DATA[id] : null;

  if (!job) {
    return (
      <div className="py-32 text-center">
        <h2 className="text-3xl font-black text-blue-950">Offre non trouvée</h2>
        <Link to={langPath('/working-together/careers')} className="text-emerald-600 font-bold hover:underline mt-4 inline-block"> Retour aux carrières </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="bg-blue-950 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-600/5 -skew-x-12 translate-x-1/4" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link 
            to={langPath('/working-together/careers')}
            className="inline-flex items-center gap-2 text-blue-300 font-black text-xs uppercase tracking-widest mb-8 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            {language === 'fr' ? 'Toutes les offres' : 'All jobs'}
          </Link>

          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-4">
              <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
                job.category.en === 'Volunteer' ? 'bg-emerald-500 text-blue-950' : 'bg-blue-600 text-white'
              }`}>
                {job.category[language]}
              </span>
              <span className="text-blue-300 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                <Calendar size={12} />
                {language === 'fr' ? 'Publié le' : 'Posted on'} {job.postedDate}
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight uppercase tracking-tighter">
              {job.title[language]}
            </h1>

            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-emerald-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-blue-300 uppercase tracking-widest leading-none mb-1">{t.workingTogether.careers.location}</p>
                  <p className="text-sm font-bold text-white">{job.location[language]}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-emerald-400">
                  <Briefcase size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-blue-300 uppercase tracking-widest leading-none mb-1">{t.workingTogether.careers.contractType}</p>
                  <p className="text-sm font-bold text-white">{job.contractType[language]}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-emerald-400">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-blue-300 uppercase tracking-widest leading-none mb-1">{t.workingTogether.careers.duration}</p>
                  <p className="text-sm font-bold text-white">{job.duration[language]}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Content Left */}
            <div className="lg:col-span-2 space-y-16">
              <div className="prose prose-lg prose-blue max-w-none">
                <h2 className="text-3xl font-black text-blue-950 mb-8 uppercase tracking-tight flex items-center gap-4">
                   <div className="w-2 h-8 bg-emerald-500 rounded-full" />
                   {t.workingTogether.careers.responsibilities}
                </h2>
                <div dangerouslySetInnerHTML={{ __html: job.responsibilitiesHtml }} />
              </div>

              <div className="prose prose-lg prose-blue max-w-none pt-12 border-t border-gray-100">
                <h2 className="text-3xl font-black text-blue-950 mb-8 uppercase tracking-tight flex items-center gap-4">
                   <div className="w-2 h-8 bg-blue-600 rounded-full" />
                   {t.workingTogether.careers.qualifications}
                </h2>
                <div dangerouslySetInnerHTML={{ __html: job.qualificationsHtml }} />
              </div>

              <div className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 flex items-center justify-between">
                 <div>
                    <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">{t.workingTogether.careers.deadline}</p>
                    <p className="text-xl font-black text-rose-600">{job.deadline}</p>
                 </div>
                 <div className="flex gap-2">
                    <button className="p-4 bg-white rounded-2xl text-gray-400 hover:text-blue-900 transition-all border border-gray-100">
                       <Share2 size={20} />
                    </button>
                    <button className="p-4 bg-white rounded-2xl text-gray-400 hover:text-blue-900 transition-all border border-gray-100">
                       <Mail size={20} />
                    </button>
                 </div>
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-1">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="sticky top-32 p-10 bg-blue-950 rounded-[3.5rem] shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full -mr-16 -mt-16 blur-2xl" />
                
                <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tight leading-tight">
                  {language === 'fr' ? 'Intéressé par ce poste ?' : 'Interested in this position?'}
                </h3>
                
                <p className="text-blue-300 text-sm font-medium mb-10 leading-relaxed">
                  {language === 'fr' 
                    ? "Soumettez votre candidature dès aujourd'hui pour rejoindre une équipe dédiée à l'excellence éducative." 
                    : "Submit your application today to join a team dedicated to educational excellence."}
                </p>

                <div className="space-y-4">
                  <button className="w-full bg-emerald-500 hover:bg-emerald-400 text-blue-950 font-black py-5 rounded-2xl transition-all uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl shadow-emerald-500/20">
                    <FileCheck size={20} />
                    {t.workingTogether.careers.applyNow}
                  </button>
                  <p className="text-[10px] text-center text-blue-400 font-bold uppercase tracking-widest">
                    CV + Lettre de motivation requis
                  </p>
                </div>

                <div className="mt-12 pt-10 border-t border-white/10 space-y-6">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-emerald-400">
                         <Mail size={18} />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest leading-none mb-1">Email</p>
                        <p className="text-xs font-bold text-white">recrutement@edubuilders.org</p>
                      </div>
                   </div>
                </div>

              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobDetail;
