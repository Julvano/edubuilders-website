
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

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <NavLink to={langPath('/')} className="w-[95px] flex flex-col">
            <img 
              src={`${import.meta.env.BASE_URL}assets/images/logo.png`} 
              alt="Logo eduBuilders institute"
              className="w-[95px] h-17 sm:h-20 md:h-25 lg:h-17 object-cover"
            />
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* 1. Home */}
            <NavLink
              to={langPath('/')}
              className={`text-sm font-medium transition-colors hover:text-emerald-700 ${
                isPathActive('/') ? 'text-emerald-700 font-bold' : 'text-gray-600'
              }`}
            >
              {content.nav.home}
            </NavLink>

            {/* 2. About Dropdown */}
            <div className="relative group/about">
              <button 
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors group-hover/about:text-emerald-700 ${
                  isDropdownActive(aboutItems) ? 'text-emerald-700 font-bold' : 'text-gray-600'
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
                        isActive ? 'bg-blue-50 text-blue-900' : 'text-gray-500 hover:bg-gray-50 hover:text-emerald-700'
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
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors group-hover/expertise:text-emerald-700 ${
                  isDropdownActive(expertiseItems) ? 'text-emerald-700 font-bold' : 'text-gray-600'
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
                        isActive ? 'bg-blue-50 text-blue-900' : 'text-gray-500 hover:bg-gray-50 hover:text-emerald-700'
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
              className={`text-sm font-medium transition-colors hover:text-emerald-700 ${
                isPathActive('/publications') ? 'text-emerald-700 font-bold' : 'text-gray-600'
              }`}
            >
              {content.nav.publications}
            </NavLink>

            {/* 5. Partners */}
            <NavLink
              to={langPath('/partners')}
              className={`text-sm font-medium transition-colors hover:text-emerald-700 ${
                isPathActive('/partners') ? 'text-emerald-700 font-bold' : 'text-gray-600'
              }`}
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
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-emerald-700 ${
                  isDropdownActive([...workingTogetherItems, { path: '/join' }]) || isDropdownOpen ? 'text-emerald-700 font-bold' : 'text-gray-600'
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
                            isActive ? 'bg-blue-50 text-blue-900' : 'text-gray-500 hover:bg-gray-50 hover:text-emerald-700'
                          }`
                        }
                      >
                        {item.name}
                      </NavLink>
                    ))}
                    <div className="border-t border-gray-50 mt-2 pt-2">
                       <NavLink to={langPath('/join')} className="block px-4 py-3 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] hover:text-blue-900">
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
              className={`text-sm font-medium transition-colors hover:text-emerald-700 ${
                isPathActive('/contact') ? 'text-emerald-700 font-bold' : 'text-gray-600'
              }`}
            >
              {content.nav.contact}
            </NavLink>
            
            <div className="flex items-center space-x-4 ml-4">
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
            className="lg:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {/* 1. Home */}
              <NavLink
                to={langPath('/')}
                onClick={() => setIsMenuOpen(false)}
                className="block text-lg font-medium text-gray-700 py-2 border-b border-gray-50"
              >
                {content.nav.home}
              </NavLink>

              {/* 2. About */}
              <div className="space-y-2 pt-2 border-t border-gray-50">
                 <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest px-1">{content.nav.about}</p>
                 {aboutItems.map((item) => (
                    <NavLink
                      key={item.path}
                      to={langPath(item.path)}
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-sm font-bold text-gray-600 py-2 pl-4 border-l-2 border-gray-100 hover:border-emerald-600 transition-all"
                    >
                      {item.name}
                    </NavLink>
                 ))}
              </div>

              {/* 3. Actions & Expertise */}
              <div className="space-y-2 pt-2 border-t border-gray-50">
                 <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest px-1">{content.nav.actions}</p>
                 {expertiseItems.map((item) => (
                    <NavLink
                      key={item.path}
                      to={langPath(item.path)}
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-sm font-bold text-gray-600 py-2 pl-4 border-l-2 border-gray-100 hover:border-emerald-600 transition-all"
                    >
                      {item.name}
                    </NavLink>
                 ))}
              </div>

              {/* 4. Publications */}
              <NavLink
                to={langPath('/publications')}
                onClick={() => setIsMenuOpen(false)}
                className="block text-lg font-medium text-gray-700 py-2 border-b border-gray-50"
              >
                {content.nav.publications}
              </NavLink>

              {/* 5. Partners */}
              <NavLink
                to={langPath('/partners')}
                onClick={() => setIsMenuOpen(false)}
                className="block text-lg font-medium text-gray-700 py-2 border-b border-gray-50"
              >
                {content.nav.partners}
              </NavLink>

              {/* 6. Join Us */}
              <div className="space-y-2 pt-2 border-t border-gray-50">
                 <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest px-1">{content.nav.join}</p>
                 {workingTogetherItems.map((item) => (
                    <NavLink
                      key={item.path}
                      to={langPath(item.path)}
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-sm font-bold text-gray-600 py-2 pl-4 border-l-2 border-gray-100 hover:border-blue-900 transition-all"
                    >
                      {item.name}
                    </NavLink>
                 ))}
                 <NavLink 
                    to={langPath('/join')} 
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] pt-2 pl-4"
                  >
                    {content.nav.overview}
                  </NavLink>
              </div>

              {/* 7. Contact */}
              <NavLink
                to={langPath('/contact')}
                onClick={() => setIsMenuOpen(false)}
                className="block text-lg font-medium text-gray-700 py-2 border-b border-gray-50"
              >
                {content.nav.contact}
              </NavLink>

              <NavLink
                to={langPath('/donate')}
                onClick={() => setIsMenuOpen(false)}
                className="block text-center bg-blue-900 text-white py-4 rounded-2xl font-bold mt-4"
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

