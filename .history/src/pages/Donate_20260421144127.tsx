
import React, { useState } from 'react';
import { useLanguage } from '../components/LanguageContext';
import { motion } from 'motion/react';
import { Heart, ShieldCheck, Zap } from 'lucide-react';

const Donate: React.FC = () => {
  const { content } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: '',
    message: '',
    anonymous: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Merci pour votre générosité ! (Simulation)');
  };

  return (
    <div className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <span className="flex items-center gap-2 text-rose-600 font-bold uppercase tracking-widest text-sm">
                <Heart size={18} fill="currentColor" />
                Impact Social
              </span>
              <h1 className="text-5xl lg:text-6xl font-black text-blue-950 leading-tight">
                {content.donate.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed font-medium">
                {content.donate.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-8 rounded-3xl space-y-3">
                <ShieldCheck className="text-emerald-600" size={32} />
                <h4 className="font-bold text-blue-950">Fonds sécurisés</h4>
                <p className="text-sm text-gray-500">
                  Transparence totale sur l'utilisation de vos contributions.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-3xl space-y-3">
                <Zap className="text-amber-600" size={32} />
                <h4 className="font-bold text-blue-950">Action rapide</h4>
                <p className="text-sm text-gray-500">
                  Déploiement immédiat de ressources pédagogiques critiques.
                </p>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-blue-950 p-10 lg:p-14 rounded-[3.5rem] shadow-2xl relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32" />
             
             <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-blue-200 uppercase tracking-widest">{content.donate.formLabelName}</label>
                  <input 
                    type="text" 
                    required={!formData.anonymous}
                    disabled={formData.anonymous}
                    className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-white/30 focus:bg-white/20 outline-none transition-all"
                    placeholder={formData.anonymous ? "---" : "Jean Dupont"}
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-blue-200 uppercase tracking-widest">{content.donate.formLabelEmail}</label>
                  <input 
                    type="email" 
                    className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-white/30 focus:bg-white/20 outline-none transition-all"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-blue-200 uppercase tracking-widest">{content.donate.formLabelAmount}</label>
                    <input 
                      type="number" 
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-white/30 focus:bg-white/20 outline-none transition-all"
                      placeholder="10 000"
                      value={formData.amount}
                      onChange={e => setFormData({...formData, amount: e.target.value})}
                    />
                  </div>
                  <div className="flex items-end pb-4">
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input 
                          type="checkbox" 
                          className="sr-only peer"
                          checked={formData.anonymous}
                          onChange={e => setFormData({...formData, anonymous: e.target.checked})}
                        />
                        <div className="w-6 h-6 border-2 border-white/30 rounded-md peer-checked:bg-emerald-500 peer-checked:border-emerald-500 transition-all flex items-center justify-center">
                           <ShieldCheck size={14} className="text-white opacity-0 peer-checked:opacity-100" />
                        </div>
                        <span className="text-xs font-bold text-white/70 group-hover:text-white transition-colors">{content.donate.anonymous}</span>
                      </label>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-blue-200 uppercase tracking-widest">{content.donate.formLabelMessage}</label>
                  <textarea 
                    className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-white/30 focus:bg-white/20 outline-none transition-all h-32 resize-none"
                    placeholder="..."
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-blue-950 font-black text-lg py-5 rounded-3xl shadow-xl shadow-emerald-500/20 transition-all uppercase tracking-widest"
                >
                  {content.donate.submit}
                </button>
             </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
