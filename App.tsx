
import React, { useState, useEffect } from 'react';
import { Language } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Framework from './components/Framework';
import FeaturedVideo from './components/FeaturedVideo';
import Practices from './components/Practices';
import Centers from './components/Centers';
import Outreach from './components/Outreach';
import Contact from './components/Contact';
import ChatBot from './components/ChatBot';

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
        
        <div className="relative">
          {/* Transition Element */}
          <div className="h-24 bg-gradient-to-b from-slate-900 to-white"></div>
          
          <About lang={lang} />
        </div>

        <Framework lang={lang} />

        <FeaturedVideo lang={lang} />

        <Practices lang={lang} />

        <Centers lang={lang} />
        
        <Outreach lang={lang} />
        
        <Contact lang={lang} />
      </main>

      <ChatBot lang={lang} />

      {/* Floating Call Action */}
      <div className="md:hidden fixed bottom-6 left-6 z-[60]">
        <a 
          href="tel:+9595180604"
          aria-label="Call Dr. Soe Lwin office"
          className="w-14 h-14 bg-slate-900 text-white rounded-full flex items-center justify-center shadow-2xl border-2 border-amber-500"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default App;
