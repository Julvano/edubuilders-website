import React, { useState } from 'react';
import { useLanguage } from '../components/LanguageContext';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, ShieldCheck, Zap, CheckCircle2, ArrowLeft, Sparkles, RefreshCw } from 'lucide-react';

const Donate: React.FC = () => {
  const { content, langPath } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: '',
    currency: 'XOF',
    message: '',
    anonymous: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      amount: '',
      currency: 'XOF',
      message: '',
      anonymous: false
    });
    setSubmitted(false);
  };

  return (
    <div className="py-5 lg:py-8 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <span className="flex items-center gap-2 text-rose-600 font-bold uppercase tracking-widest text-sm">
                <Heart size={18} fill="currentColor" />
                {content.donate.impactLabel}
              </span>
              <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-4xl font-black text-blue-950 uppercase tracking-tighter leading-none">
                {content.donate.title}
              </h1>
              <div className="w-20 h-1 bg-emerald-500 rounded-full" />
              <p className="text-lg lg:text-xl text-gray-600 leading-tighter break-words hyphens-auto text-justify font-medium">
                {content.donate.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-8 rounded-3xl space-y-3">
                <ShieldCheck className="text-emerald-600" size={32} />
                <h4 className="font-bold text-blue-950">{content.donate.secureTitle}</h4>
                <p className="text-sm text-gray-500">
                  {content.donate.secureText}
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-3xl space-y-3">
                <Zap className="text-amber-600" size={32} />
                <h4 className="font-bold text-blue-950">{content.donate.quickTitle}</h4>
                <p className="text-sm text-gray-500">
                  {content.donate.quickText}
                </p>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-blue-950 p-6 sm:p-10 lg:p-14 rounded-[3.5rem] shadow-2xl relative overflow-hidden min-h-[580px] flex flex-col justify-center"
          >
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
             
             <AnimatePresence mode="wait">
               {!submitted ? (
                 <motion.form 
                   key="donation-form"
                   initial={{ opacity: 0, y: 15 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -15 }}
                   transition={{ duration: 0.3 }}
                   onSubmit={handleSubmit} 
                   className="space-y-6 relative z-10"
                 >
                    {/* Full Name input */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-blue-200 uppercase tracking-widest flex justify-between">
                        <span>{content.donate.formLabelName}</span>
                        {!formData.anonymous && <span className="text-emerald-400">*</span>}
                      </label>
                      <input 
                        type="text" 
                        required={!formData.anonymous}
                        disabled={formData.anonymous}
                        className={`w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-white/30 focus:bg-white/20 focus:border-white/40 outline-none transition-all ${
                          formData.anonymous ? 'opacity-40 cursor-not-allowed select-none bg-white/5 border-white/10' : ''
                        }`}
                        placeholder={formData.anonymous ? "---" : "Jean Dupont"}
                        value={formData.anonymous ? '' : formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    
                    {/* Email input */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-blue-200 uppercase tracking-widest flex justify-between">
                        <span>{content.donate.formLabelEmail}</span>
                        {!formData.anonymous && <span className="text-emerald-400">*</span>}
                      </label>
                      <input 
                        type="email" 
                        required={!formData.anonymous}
                        disabled={formData.anonymous}
                        className={`w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-white/30 focus:bg-white/20 focus:border-white/40 outline-none transition-all ${
                          formData.anonymous ? 'opacity-40 cursor-not-allowed select-none bg-white/5 border-white/10' : ''
                        }`}
                        placeholder={formData.anonymous ? "---" : "email@example.com"}
                        value={formData.anonymous ? '' : formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                      />
                    </div>

                    {/* Amount & Currency Selection Grid */}
                    <div className="flex gap-4">
                      {/* Amount */}
                      <div className="space-y-1.5 flex-1">
                        <label className="text-xs font-bold text-blue-200 uppercase tracking-widest flex justify-between">
                          <span>{content.donate.formLabelAmount}</span>
                          <span className="text-emerald-400">*</span>
                        </label>
                        <input 
                          type="number" 
                          required
                          min="1"
                          className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-white/30 focus:bg-white/20 focus:border-white/40 outline-none transition-all"
                          placeholder="10 000"
                          value={formData.amount}
                          onChange={e => setFormData({...formData, amount: e.target.value})}
                        />
                      </div>

                      {/* Currency */}
                      <div className="space-y-1.5 w-32 sm:w-36">
                        <label className="text-xs font-bold text-blue-200 uppercase tracking-widest flex justify-between">
                          <span>{content.donate.formLabelCurrency}</span>
                          <span className="text-emerald-400">*</span>
                        </label>
                        <div className="relative">
                          <select 
                            value={formData.currency}
                            required
                            onChange={e => setFormData({...formData, currency: e.target.value})}
                            className="w-full bg-blue-900 border border-white/20 rounded-2xl px-4 py-4 text-white focus:bg-blue-950 focus:border-white/40 outline-none transition-all cursor-pointer font-bold appearance-none"
                            style={{
                              backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='M7 9l3 3 3-3' stroke='%2334d399' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                              backgroundPosition: 'right 1rem center',
                              backgroundSize: '1.25em 1.25em',
                              backgroundRepeat: 'no-repeat',
                              paddingRight: '2.5rem'
                            }}
                          >
                            <option value="XOF" className="bg-blue-950 text-white font-bold">XOF</option>
                            <option value="USD" className="bg-blue-950 text-white font-bold">USD</option>
                            <option value="EUR" className="bg-blue-950 text-white font-bold">EUR</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Anonymous toggle */}
                    <div className="flex items-center pt-1">
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

                    {/* Optional Message */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-blue-200 uppercase tracking-widest">{content.donate.formLabelMessage}</label>
                      <textarea 
                        className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-white/30 focus:bg-white/20 focus:border-white/40 outline-none transition-all h-28 resize-none"
                        placeholder="..."
                        value={formData.message}
                        onChange={e => setFormData({...formData, message: e.target.value})}
                      />
                    </div>

                    {/* Submit Button */}
                    <button 
                      type="submit"
                      className="w-full bg-emerald-500 hover:bg-emerald-400 text-blue-950 font-black text-lg py-5 rounded-3xl shadow-xl shadow-emerald-500/20 transition-all uppercase tracking-widest mt-2"
                    >
                      {content.donate.submit}
                    </button>
                 </motion.form>
               ) : (
                 <motion.div
                   key="thank-you-view"
                   initial={{ opacity: 0, scale: 0.95 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 0.95 }}
                   transition={{ duration: 0.4, ease: "easeOut" }}
                   className="space-y-8 text-center text-white relative z-10 py-4 flex flex-col justify-between"
                 >
                    {/* Check Animation Header */}
                    <div className="flex flex-col items-center gap-4">
                      <div className="relative">
                        <motion.div 
                          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl"
                        />
                        <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg relative z-10 shadow-emerald-500/30">
                          <CheckCircle2 size={44} className="text-blue-950" />
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 text-emerald-400 font-bold tracking-widest text-xs uppercase bg-emerald-500/10 px-4 py-1.5 rounded-full">
                        <Sparkles size={12} />
                        {content.donate.submit}
                      </div>
                    </div>

                    {/* Core Thank You message */}
                    <div className="space-y-3">
                      <h2 className="text-3xl lg:text-4xl font-black text-white uppercase tracking-tighter leading-tight">
                        {content.donate.thankYouTitle}
                      </h2>
                      <p className="text-blue-100 text-sm md:text-base leading-tighter break-words hyphens-auto text-justify max-w-md mx-auto px-2">
                        {content.donate.thankYouMessage
                          .replace('{amount}', Number(formData.amount).toLocaleString())
                          .replace('{currency}', formData.currency)}
                      </p>
                    </div>

                    {/* Recap receipt panel */}
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-left space-y-4 max-w-sm mx-auto w-full">
                      <div className="font-bold text-xs text-blue-200 uppercase tracking-wider border-b border-white/10 pb-2 flex justify-between items-center">
                        <span>{content.donate.recapSubtitle}</span>
                        <span className="text-emerald-400">{content.donate.recapPaiement}</span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-y-2 text-sm">
                        <span className="text-white/60">{content.donate.recapAmount} :</span>
                        <span className="text-right font-black text-white">{Number(formData.amount).toLocaleString()} {formData.currency}</span>
                        
                        <span className="text-white/60">{content.donate.recapAnonymous} :</span>
                        <span className="text-right font-bold text-white">{formData.anonymous ? 'Oui / Yes' : 'Non / No'}</span>

                        {!formData.anonymous && (
                          <>
                            <span className="text-white/60">Donateur :</span>
                            <span className="text-right font-bold text-white truncate max-w-[150px]" title={formData.name}>{formData.name}</span>
                          </>
                        )}
                      </div>

                      <p className="text-xs text-white/70 italic leading-relaxed pt-2 border-t border-white/5">
                        {formData.anonymous 
                          ? content.donate.thankYouSubAnonymous 
                          : content.donate.thankYouSub.replace('{email}', formData.email)}
                      </p>
                    </div>

                    {/* Action buttons */}
                    <div className="space-y-3 pt-2 max-w-sm mx-auto w-full">
                      <button 
                        onClick={handleReset}
                        className="w-full bg-emerald-500 hover:bg-emerald-400 text-blue-950 font-black text-md py-4 rounded-2xl shadow-xl shadow-emerald-500/20 transition-all uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <RefreshCw size={16} />
                        {content.donate.newDonate}
                      </button>

                      <NavLink
                        to={langPath('/')}
                        className="w-full inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-bold text-md py-4 rounded-2xl transition-all cursor-pointer"
                      >
                        <ArrowLeft size={16} />
                        {content.donate.backHome}
                      </NavLink>
                    </div>
                 </motion.div>
               )}
             </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
