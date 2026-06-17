import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { motion, AnimatePresence } from 'motion/react';

const Navbar: React.FC = () => {
  const { language, toggleLanguage, content, langPath } = useLanguage();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const isPathActive = (path: string) => {
    if (path === '/') {
      return location.pathname === langPath('/') || location.pathname === `/${language}`;
    }
    return location.pathname.startsWith(langPath(path));
  };

  const isDropdownActive = (items: { path: string }[]) => items.some(item => location.pathname.startsWith(langPath(item.path)));

  const workingTogetherItems = [
    { name: content.workingTogether.careers.title, path: '/working-together/careers' },
    { name: content.workingTogether.membership.title, path: '/working-together/membership' },
    { name: content.workingTogether.expert.title, path: '/working-together/expert' },
    { name: content.workingTogether.partner.title, path: '/working-together/partner' },
  ];

  const aboutItems = [
    { name: content.about.vision.title, path: '/about/vision' },
    { name: content.about.mission.title, path: '/about/mission' },
    { name: content.about.objectives.title, path: '/about/objectives' },
    { name: content.about.team.title, path: '/about/team' },
  ];

  const expertiseItems = [
    { name: content.expertise.title, path: '/expertise' },
    { name: content.projects.title, path: '/projects' },
  ];

  // Classes de base communes pour une meilleure maintenance du style actif (Desktop)
  const baseDesktopLink = "text-sm font-semibold px-3 py-2 rounded-lg transition-all duration-200 hover:text-emerald-700 hover:bg-gray-50";
  const activeDesktopLink = "text-emerald-700 bg-emerald-50/60 font-bold shadow-sm shadow-emerald-700/5";

  // Classes de base communes (Mobile)
  const baseMobileLink = "block text-base font-medium text-gray-700 py-2.5 px-3 rounded-xl transition-all duration-200";
  const activeMobileLink = "bg-emerald-50 text-emerald-800 font-bold border-l-4 border-emerald-700 pl-2";

  const baseMobileSubLink = "block text-sm font-bold text-gray-600 py-2.5 pl-4 border-l-2 border-gray-100 hover:border-emerald-600 transition-all";
  const activeMobileSubLink = "text-blue-900 bg-blue-50/80 font-extrabold border-l-4 border-blue-800 pl-3.5";

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <NavLink to={langPath('/')} className="flex flex-col">
            <span className="text-xl font-bold text-blue-900 tracking-tight leading-tight">
              eduBuilders
              <span className="text-emerald-700 ml-1">Institute</span>
            </span>
            <span className="text-[10px] uppercase font-semibold text-gray-500 tracking-wider hidden sm:block">
              West Africa
            </span>
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* 1. Home */}
            <NavLink
              to={langPath('/')}
              className={`${baseDesktopLink} ${isPathActive('/') ? activeDesktopLink : 'text-gray-600'}`}
            >
              {content.nav.home}
            </NavLink>

            {/* 2. About Dropdown */}
            <div className="relative group/about">
              <button 
                className={`flex items-center gap-1.5 text-sm font-semibold px-3 py-2 rounded-lg transition-colors group-hover/about:text-emerald-700 group-hover/about:bg-gray-50 ${
                  isDropdownActive(aboutItems) ? 'text-emerald-700 font-bold bg-emerald-50/40' : 'text-gray-600'
                }`}
              >
                {content.nav.about}
                <ChevronDown size={14} className="transition-transform duration-300 group-hover/about:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-100 rounded-2xl shadow-xl p-2 opacity-0 invisible group-hover/about:opacity-100 group-hover/about:visible transition-all z-50">
                {aboutItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={langPath(item.path)}
                    className={({ isActive }) =>
                      `block px-4 py-3 text-xs font-bold uppercase tracking-widest rounded-xl transition-all ${
                        isActive ? 'bg-blue-50 text-blue-900 font-black shadow-inner' : 'text-gray-500 hover:bg-gray-50 hover:text-emerald-700'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* 3. Actions & Expertise Dropdown */}
            <div className="relative group/expertise">
              <button 
                className={`flex items-center gap-1.5 text-sm font-semibold px-3 py-2 rounded-lg transition-colors group-hover/expertise:text-emerald-700 group-hover/expertise:bg-gray-50 ${
                  isDropdownActive(expertiseItems) ? 'text-emerald-700 font-bold bg-emerald-50/40' : 'text-gray-600'
                }`}
              >
                {content.nav.actions}
                <ChevronDown size={14} className="transition-transform duration-300 group-hover/expertise:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-72 bg-white border border-gray-100 rounded-2xl shadow-xl p-2 opacity-0 invisible group-hover/expertise:opacity-100 group-hover/expertise:visible transition-all z-50">
                {expertiseItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={langPath(item.path)}
                    className={({ isActive }) =>
                      `block px-4 py-3 text-xs font-bold uppercase tracking-widest rounded-xl transition-all ${
                        isActive ? 'bg-blue-50 text-blue-900 font-black shadow-inner' : 'text-gray-500 hover:bg-gray-50 hover:text-emerald-700'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* 4. Publications */}
            <NavLink
              to={langPath('/publications')}
              className={({ isActive }) => `${baseDesktopLink} ${isActive ? activeDesktopLink : 'text-gray-600'}`}
            >
              {content.nav.publications}
            </NavLink>

            {/* 5. Partners */}
            <NavLink
              to={langPath('/partners')}
              className={({ isActive }) => `${baseDesktopLink} ${isActive ? activeDesktopLink : 'text-gray-600'}`}
            >
              {content.nav.partners}
            </NavLink>

            {/* 6. Join Us Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button 
                className={`flex items-center gap-1.5 text-sm font-semibold px-3 py-2 rounded-lg transition-colors hover:text-emerald-700 hover:bg-gray-50 ${
                  isDropdownActive([...workingTogetherItems, { path: '/join' }]) || isDropdownOpen ? 'text-emerald-700 font-bold bg-emerald-50/40' : 'text-gray-600'
                }`}
              >
                {content.nav.join}
                <ChevronDown size={14} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 mt-2 w-64 bg-white border border-gray-100 rounded-2xl shadow-xl p-2 z-50"
                  >
                    {workingTogetherItems.map((item) => (
                      <NavLink
                        key={item.path}
                        to={langPath(item.path)}
                        className={({ isActive }) =>
                          `block px-4 py-3 text-xs font-bold uppercase tracking-widest rounded-xl transition-all ${
                            isActive ? 'bg-blue-50 text-blue-900 font-black shadow-inner' : 'text-gray-500 hover:bg-gray-50 hover:text-emerald-700'
                          }`
                        }
                      >
                        {item.name}
                      </NavLink>
                    ))}
                    <div className="border-t border-gray-50 mt-2 pt-2">
                       <NavLink 
                        to={langPath('/join')} 
                        className={({ isActive }) => 
                          `block px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] rounded-xl transition-all ${
                            isActive ? 'bg-blue-50 text-blue-950 font-black' : 'text-gray-400 hover:text-blue-900 hover:bg-gray-50'
                          }`
                        }
                       >
                          {content.nav.overview}
                       </NavLink>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 7. Contact */}
            <NavLink
              to={langPath('/contact')}
              className={({ isActive }) => `${baseDesktopLink} ${isActive ? activeDesktopLink : 'text-gray-600'}`}
            >
              {content.nav.contact}
            </NavLink>
            
            <div className="flex items-center space-x-4 ml-2">
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 px-3 py-1.5 rounded-full border border-gray-200 text-sm font-medium hover:bg-gray-50 transition-all"
              >
                <Globe className="w-4 h-4" />
                <span>{language.toUpperCase()}</span>
              </button>

              <NavLink
                to={langPath('/donate')}
                className="bg-blue-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-800 transition-all shadow-md shadow-blue-900/10"
              >
                {content.nav.donate}
              </NavLink>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-4">
             <button
              onClick={toggleLanguage}
              className="p-2 text-gray-600"
            >
              <Globe className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 p-2"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            // max-h calcule l'espace restant sous l'en-tête (h-20 -> 5rem) et overflow-y-auto isole le scroll
            className="lg:hidden bg-white border-b border-gray-100 max-h-[calc(100vh-5rem)] overflow-y-auto scrollbar-thin"
          >
            <div className="px-4 pt-2 pb-8 space-y-4">
              {/* 1. Home */}
              <NavLink
                to={langPath('/')}
                onClick={() => setIsMenuOpen(false)}
                className={() => `${baseMobileLink} ${isPathActive('/') ? activeMobileLink : 'hover:bg-gray-50'}`}
              >
                {content.nav.home}
              </NavLink>

              {/* 2. About */}
              <div className="space-y-1.5 pt-2 border-t border-gray-50">
                 <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest px-1 mb-1">{content.nav.about}</p>
                 {aboutItems.map((item) => (
                    <NavLink
                      key={item.path}
                      to={langPath(item.path)}
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) => `${baseMobileSubLink} ${isActive ? activeMobileSubLink : ''}`}
                    >
                      {item.name}
                    </NavLink>
                 ))}
              </div>

              {/* 3. Actions & Expertise */}
              <div className="space-y-1.5 pt-2 border-t border-gray-50">
                 <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest px-1 mb-1">{content.nav.actions}</p>
                 {expertiseItems.map((item) => (
                    <NavLink
                      key={item.path}
                      to={langPath(item.path)}
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) => `${baseMobileSubLink} ${isActive ? activeMobileSubLink : ''}`}
                    >
                      {item.name}
                    </NavLink>
                 ))}
              </div>

              {/* 4. Publications */}
              <NavLink
                to={langPath('/publications')}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => `${baseMobileLink} ${isActive ? activeMobileLink : 'hover:bg-gray-50'}`}
              >
                {content.nav.publications}
              </NavLink>

              {/* 5. Partners */}
              <NavLink
                to={langPath('/partners')}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => `${baseMobileLink} ${isActive ? activeMobileLink : 'hover:bg-gray-50'}`}
              >
                {content.nav.partners}
              </NavLink>

              {/* 6. Join Us */}
              <div className="space-y-1.5 pt-2 border-t border-gray-50">
                 <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest px-1 mb-1">{content.nav.join}</p>
                 {workingTogetherItems.map((item) => (
                    <NavLink
                      key={item.path}
                      to={langPath(item.path)}
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) => `${baseMobileSubLink} ${isActive ? activeMobileSubLink : ''}`}
                    >
                      {item.name}
                    </NavLink>
                 ))}
                 <NavLink 
                    to={langPath('/join')} 
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) => 
                      `block text-[10px] font-black uppercase tracking-[0.2em] pt-2 pl-4 transition-all ${
                        isActive ? 'text-blue-900 font-extrabold bg-blue-50/50 py-1.5 rounded-lg' : 'text-gray-400'
                      }`
                    }
                  >
                    {content.nav.overview}
                  </NavLink>
              </div>

              {/* 7. Contact */}
              <NavLink
                to={langPath('/contact')}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => `${baseMobileLink} ${isActive ? activeMobileLink : 'hover:bg-gray-50'}`}
              >
                {content.nav.contact}
              </NavLink>

              <NavLink
                to={langPath('/donate')}
                onClick={() => setIsMenuOpen(false)}
                className="block text-center bg-blue-900 text-white py-4 rounded-2xl font-bold mt-6 shadow-md shadow-blue-900/10 active:scale-[0.98] transition-transform"
              >
                {content.nav.donate}
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;