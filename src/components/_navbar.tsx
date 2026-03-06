
import React, { useState, useEffect } from 'react';
import { Language } from '../_types';
import { NAV_LINKS } from '../_constants';
import { Menu, X, Languages } from 'lucide-react';

interface NavbarProps {
  currentLang: Language;
  onToggleLang: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentLang, onToggleLang }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('http')) {
      // Allow standard navigation for external links
      return;
    }
    
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full top-0 z-[100] transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-black/30 md:bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <div 
          className="flex flex-col cursor-pointer"
          role="button"
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className={`text-xl md:text-2xl font-bold tracking-tighter heading-font uppercase transition-colors ${scrolled ? 'text-slate-900' : 'text-white'}`}>
            {currentLang === 'en' ? 'Dr. Soe Lwin' : 'ဒေါက်တာစိုးလွင်'}
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-amber-500 font-bold">
            {currentLang === 'en' ? 'Mandalay' : 'မန္တလေး'}
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith('http') ? "_blank" : "_self"}
              rel={link.href.startsWith('http') ? "noopener noreferrer" : ""}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-xs font-bold tracking-widest uppercase transition-colors relative group ${scrolled ? 'text-slate-600' : 'text-white/80'} hover:text-amber-500`}
            >
              {link.label[currentLang]}
              {link.label.en === 'Academy' && (
                <span className="absolute -top-3 -right-4 bg-amber-600 text-white text-[8px] px-1.5 py-0.5 rounded-full">
                  New
                </span>
              )}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
          <button
            onClick={onToggleLang}
            aria-label={currentLang === 'en' ? 'Switch to Myanmar language' : 'Switch to English language'}
            className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-full text-xs font-bold shadow-lg hover:bg-amber-600 transition-all active:scale-95 border border-white/10"
          >
            <Languages size={14} />
            {currentLang === 'en' ? 'မြန်မာ' : 'ENGLISH'}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={onToggleLang}
            aria-label={currentLang === 'en' ? 'Switch to Myanmar language' : 'Switch to English language'}
            className={`p-2 rounded-full border transition-colors ${scrolled ? 'text-amber-600 border-amber-100' : 'text-white border-white/40'}`}
          >
            <Languages size={18} />
          </button>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className={`transition-colors ${scrolled ? 'text-slate-900' : 'text-white'}`}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[100%] bg-white border-b border-gray-100 py-8 px-6 flex flex-col space-y-6 shadow-2xl">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith('http') ? "_blank" : "_self"}
              rel={link.href.startsWith('http') ? "noopener noreferrer" : ""}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xl font-bold text-slate-800 border-b border-slate-50 pb-4 flex justify-between items-center"
            >
              {link.label[currentLang]}
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            </a>
          ))}
          <div className="pt-4 flex items-center gap-4 text-slate-400">
             <span className="text-xs uppercase tracking-widest font-bold">Follow the Path</span>
             <div className="flex-1 h-px bg-slate-100"></div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
