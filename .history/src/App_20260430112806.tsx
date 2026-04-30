/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */


import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useParams, Navigate } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './components/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Actions from './pages/Actions';
import Partners from './pages/Partners';
import VisionMission from './pages/VisionMission';
import Objectives from './pages/Objectives';
import Publications from './pages/Publications';
import Join from './pages/Join';
import Donate from './pages/Donate';
import Contact from './pages/Contact';
import ArticleDetail from './pages/ArticleDetail';
import Membership from './pages/Membership';
import ExpertContribution from './pages/ExpertContribution';
import BecomePartner from './pages/BecomePartner';
import Careers from './pages/Careers';
import JobDetail from './pages/JobDetail';
import { useEffect } from 'react';

import { Helmet, HelmetProvider } from 'react-helmet-async';

// SEO Hreflang Component
const SEO = () => {
  const { language } = useLanguage();
  const location = useLocation();

  // Basic management of hreflang tags
  const pathSegments = location.pathname.split('/').filter(Boolean);
  // Remove the language segment if it exists
  const routePath = (pathSegments.length > 0 && (pathSegments[0] === 'fr' || pathSegments[0] === 'en'))
    ? pathSegments.slice(1).join('/')
    : pathSegments.join('/');
  
  const baseUrl = window.location.origin;

  return (
    <Helmet>
      <html lang={language} />
      <link rel="alternate" hrefLang="fr" href={`${baseUrl}/fr/${routePath}`} />
      <link rel="alternate" hrefLang="en" href={`${baseUrl}/en/${routePath}`} />
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/fr/${routePath}`} />
    </Helmet>
  );
};

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const LanguageWrapper = () => {
  const { lang } = useParams<{ lang: string }>();

  // Redirect if language is invalid
  if (lang !== 'fr' && lang !== 'en') {
    return <Navigate to="/fr" replace />;
  }

  return (
    <LanguageProvider>
      <Router basename="/edubuilders-website">
        <div className="min-h-screen flex flex-col bg-white">
          <SEO />
          <ScrollToTop />
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<VisionMission />} />
              <Route path="/about/vision-mission" element={<VisionMission />} />
              <Route path="/about/objectives" element={<Objectives />} />
              <Route path="/actions" element={<Actions />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/join" element={<Join />} />
              <Route path="/working-together/membership" element={<Membership />} />
              <Route path="/working-together/expert" element={<ExpertContribution />} />
              <Route path="/working-together/partner" element={<BecomePartner />} />
              <Route path="/working-together/careers" element={<Careers />} />
              <Route path="/working-together/careers/:id" element={<JobDetail />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/publications/article/:id" element={<ArticleDetail />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/:lang/*" element={<LanguageWrapper />} />
          <Route path="*" element={<Navigate to="/fr" replace />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

