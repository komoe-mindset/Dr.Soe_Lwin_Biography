
import React, { useState, useEffect } from 'react';
import { Language } from './_types';
import Navbar from './components/_navbar';
import Hero from './components/_hero';
import About from './components/_about';
import Framework from './components/_framework';
import FeaturedVideo from './components/_featuredvideo';
import Practices from './components/_practices';
import Centers from './components/_centers';
import Outreach from './components/_outreach';
import Contact from './components/_contact';
import ChatBot from './components/_chatbot';

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
    </div>
  );
};

export default App;
