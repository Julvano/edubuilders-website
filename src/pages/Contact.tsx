
import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const { content } = useLanguage();

  return (
    <div className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24 space-y-4">
          <h1 className="text-5xl font-black text-blue-950 uppercase tracking-tighter">Contact</h1>
          <p className="text-xl text-gray-600 font-medium">Nous sommes à votre écoute pour toute collaboration.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info cards */}
          <div className="space-y-6">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col gap-6">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                <MapPin size={28} />
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-lg text-blue-950">Siège Social</h4>
                <p className="text-gray-500 font-medium leading-relaxed">{content.contact.address}</p>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col gap-6">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center">
                <Phone size={28} />
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-lg text-blue-950">Téléphone</h4>
                <p className="text-gray-500 font-medium leading-relaxed">+229 00 00 00 00</p>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col gap-6">
              <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center">
                <Mail size={28} />
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-lg text-blue-950">Email</h4>
                <p className="text-gray-500 font-medium leading-relaxed">contact@edubuilders.bj</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-gray-50 p-10 lg:p-16 rounded-[4rem] border border-gray-100">
             <h2 className="text-3xl font-black text-blue-950 mb-10">{content.contact.formTitle}</h2>
             
             <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Prénom & Nom</label>
                  <input type="text" className="w-full bg-white border-2 border-gray-200 rounded-2xl px-6 py-4 focus:border-blue-900 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email</label>
                  <input type="email" className="w-full bg-white border-2 border-gray-200 rounded-2xl px-6 py-4 focus:border-blue-900 outline-none transition-all" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Message</label>
                  <textarea className="w-full bg-white border-2 border-gray-200 rounded-2xl px-6 py-4 focus:border-blue-900 outline-none transition-all h-48 resize-none" />
                </div>
                <div className="md:col-span-2 pt-4">
                   <button className="bg-blue-950 hover:bg-blue-900 text-white font-bold px-12 py-5 rounded-3xl flex items-center gap-3 transition-all">
                      {content.contact.submit}
                      <Send size={18} />
                   </button>
                </div>
             </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
