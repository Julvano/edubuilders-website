
import React from 'react';
import { useLanguage } from './LanguageContext';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const { content, langPath } = useLanguage();

  return (
    <footer className="bg-gray-950 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
              <img 
                src={`${import.meta.env.BASE_URL}assets/images/logo.png`} 
                alt="Logo EduBuilders"
                className="h-12 w-auto sm:h-16 md:h-15 lg:h-17 object-contain"
              />            <p className="text-sm leading-relaxed opacity-70">
              {content.hero.subtitle}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-emerald-500 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-emerald-500 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-emerald-500 transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-white text-sm font-bold uppercase tracking-widest">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="text-emerald-500 shrink-0" size={18} />
                <span>Godomey, Abomey-Calavi, Bénin</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-emerald-500 shrink-0" size={18} />
                <span>+229 00 00 00 00</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-emerald-500 shrink-0" size={18} />
                <span>contact@edubuilders.org</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white text-sm font-bold uppercase tracking-widest">{content.nav.about}</h4>
            <nav className="flex flex-col space-y-3 text-sm">
              <Link to={langPath('/about/vision-mission')} className="hover:text-white transition-colors">{content.nav.about}</Link>
              <Link to={langPath('/actions')} className="hover:text-white transition-colors">{content.nav.actions}</Link>
              <Link to={langPath('/publications')} className="hover:text-white transition-colors">{content.nav.publications}</Link>
              <Link to={langPath('/join')} className="hover:text-white transition-colors">{content.nav.join}</Link>
            </nav>
          </div>

          <div className="space-y-6">
            <h4 className="text-white text-sm font-bold uppercase tracking-widest">Newsletter</h4>
            <p className="text-sm opacity-70">Restez informé de nos dernières innovations pédagogiques.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-gray-900 border-none rounded-l-lg px-4 py-2 w-full focus:ring-1 focus:ring-emerald-500 outline-none"
              />
              <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-r-lg transition-colors">
                OK
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-900 text-xs flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="opacity-50">
            &copy; {new Date().getFullYear()} {content.footer.rights}
          </p>
          <p className="text-center md:text-right opacity-70">
            {content.footer.legal}
          </p>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
