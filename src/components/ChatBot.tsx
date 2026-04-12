
import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { Language } from '../types';

interface ChatBotProps {
  lang: Language;
}

const ChatBot: React.FC<ChatBotProps> = ({ lang }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  
  // Updated Gemini Gem Custom Link
  const geminiLink = "https://gemini.google.com/gem/1nLG3E7X3UE9SOLq6ZraZiPZczaN2cg44?usp=sharing";

  useEffect(() => {
    // Automatically collapse the hint after 4 seconds on all devices
    const timer = setTimeout(() => {
      setIsExpanded(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const handleOpenGemini = () => {
    window.open(geminiLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <aside className="fixed bottom-6 right-6 z-[100] flex flex-col items-end pointer-events-none">
      {/* Floating Action Button */}
      <button
        onClick={handleOpenGemini}
        aria-label={lang === 'en' ? 'Ask Dr. Soe Lwin AI' : 'ဆရာကြီးဒေါက်တာစိုးလွင် AI ကို မေးမြန်းရန်'}
        className={`pointer-events-auto flex items-center bg-gradient-to-tr from-slate-900 to-slate-800 text-white rounded-full shadow-[0_10px_40px_rgba(15,23,42,0.6)] hover:scale-105 transition-all duration-700 ease-in-out active:scale-95 group relative border-2 border-amber-500/40 overflow-hidden ${
          isExpanded 
            ? 'px-6 h-14 md:h-16 md:px-8 w-auto' 
            : 'w-14 h-14 md:w-16 md:h-16 px-0 justify-center'
        }`}
      >
        <div className={`flex items-center justify-center shrink-0 ${isExpanded ? 'mr-3' : ''}`}>
          <Sparkles size={isExpanded ? 24 : 28} className="group-hover:rotate-12 transition-transform text-amber-400 md:w-8 md:h-8" />
        </div>
        
        {/* Animated Text Label (Shared for Mobile and PC Onboarding) */}
        <span 
          className={`text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold whitespace-nowrap transition-all duration-700 ease-in-out ${
            isExpanded ? 'opacity-100 max-w-[250px]' : 'opacity-0 max-w-0 pointer-events-none'
          }`}
        >
          {lang === 'en' ? 'Dr. Soe Lwin AI' : 'ဆရာကြီးဒေါက်တာစိုးလွင် AI'}
        </span>
        
        {/* Secondary Tooltip (Desktop Hover - Only effective after hint collapses) */}
        {!isExpanded && (
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 pointer-events-none hidden md:block">
             <div className="bg-slate-900 text-white text-[10px] px-4 py-2 rounded-xl whitespace-nowrap uppercase tracking-[0.2em] font-bold opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0 shadow-2xl flex items-center gap-2 border border-white/10">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></div>
              {lang === 'en' ? 'Dr. Soe Lwin AI' : 'ဆရာကြီးဒေါက်တာစိုးလွင် AI'}
             </div>
          </div>
        )}

        {/* Pulsing Ring */}
        <span className="absolute inset-0 rounded-full bg-amber-500/10 animate-pulse -z-10"></span>
      </button>

      {/* Subtle background glow */}
      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl -z-20 pointer-events-none"></div>
    </aside>
  );
};

export default ChatBot;
