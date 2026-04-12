
import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Language } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Framework from './components/Framework';
import FeaturedVideo from './components/FeaturedVideo';
import Practices from './components/Practices';
import ChatBot from './components/ChatBot';

// Lazy load non-critical components
const Centers = lazy(() => import('./components/Centers'));
const Outreach = lazy(() => import('./components/Outreach'));
const Contact = lazy(() => import('./components/Contact'));

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'mm' : 'en');
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="min-h-screen selection:bg-amber-100 selection:text-amber-900">
      <Navbar currentLang={lang} onToggleLang={toggleLang} />
      
      <main>
        <Hero lang={lang} />
        
        <About lang={lang} />

        <Framework lang={lang} />

        <FeaturedVideo lang={lang} />

        <Practices lang={lang} />

        <Suspense fallback={<div className="py-20 text-center text-slate-500">Loading...</div>}>
          <Centers lang={lang} />
          
          <Outreach lang={lang} />
          
          <Contact lang={lang} />
        </Suspense>
      </main>

      <ChatBot lang={lang} />
    </div>
  );
};

export default App;
