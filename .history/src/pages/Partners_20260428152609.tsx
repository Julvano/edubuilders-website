
import React from 'react';
import { useLanguage } from '../components/LanguageContext';

const Partners: React.FC = () => {
  const { content } = useLanguage();

  return (
    <div className="py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-4">
           <h1 className="text-5xl font-black text-blue-950 uppercase tracking-tighter">
             {content.nav.partners}
           </h1>
           <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center opacity-40">
           {/* Logic for logos would go here */}
           <div className="h-20 bg-gray-200 rounded-xl flex items-center justify-center font-black text-gray-400">PARTNER 1</div>
           <div className="h-20 bg-gray-200 rounded-xl flex items-center justify-center font-black text-gray-400">PARTNER 2</div>
           <div className="h-20 bg-gray-200 rounded-xl flex items-center justify-center font-black text-gray-400">PARTNER 3</div>
           <div className="h-20 bg-gray-200 rounded-xl flex items-center justify-center font-black text-gray-400">PARTNER 4</div>
        </div>
        
        <div className="mt-32 p-16 bg-blue-50 rounded-[4rem] text-center space-y-8">
           <h2 className="text-3xl font-bold text-blue-900">Devenez partenaire stratégique</h2>
           <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
             Nous collaborons avec des institutions publiques et privées pour maximiser l'impact de nos recherches et interventions.
           </p>
           <button className="bg-blue-900 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all">
             Nous contacter
           </button>
        </div>
      </div>
    </div>
  );
};

export default Partners;
