
import React from 'react';
import { Language } from '../_types';
import { ChevronDown, GraduationCap } from 'lucide-react';
import { LMS_URL } from '../_constants';

interface HeroProps {
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="hero-container relative h-screen md:h-[95vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <picture>
          <source 
            media="(max-width: 640px)" 
            srcSet="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format,compress&fm=webp&fit=crop&q=45&w=600" 
          />
          <img 
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format,compress&fm=webp&fit=crop&q=70&w=1200"
            alt="Buddhist landscape background"
            className="w-full h-full object-cover transition-transform duration-[20s] ease-linear scale-110 animate-ken-burns"
            fetchPriority="high"
            loading="eager"
            decoding="sync"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black/95"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-6 max-w-6xl space-y-8 hero-text-container flex flex-col items-center justify-center pt-24 md:pt-32 pb-12">
        <div className="inline-flex items-center gap-3 px-5 py-2 border border-amber-500/30 rounded-full bg-black/40 backdrop-blur-md mb-2">
           <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
           <span className="uppercase tracking-[0.6em] text-[10px] md:text-xs text-amber-200 font-bold">
            {lang === 'en' ? 'Wisdom of the Present' : 'ပစ္စုပ္ပန်၏ အလင်းရောင်'}
          </span>
        </div>
        
        <div className="">
          <h1 className="heading-font text-5xl md:text-8xl leading-tight font-bold drop-shadow-2xl text-white">
            Dr. Soe Lwin
          </h1>
          <div className="flex flex-col items-center space-y-1 mt-2">
            <span className="text-xl md:text-3xl font-medium tracking-[0.2em] text-blue-200/90 heading-font uppercase">
              Dhamma Lann
            </span>
            <span className="text-xl md:text-3xl italic font-serif text-amber-500 drop-shadow-lg">
              (Mandalay)
            </span>
          </div>
        </div>

        <div className="pt-4">
          {lang === 'mm' ? (
            <div className="text-base md:text-xl text-white/95 font-medium max-w-2xl mx-auto leading-relaxed flex flex-col gap-1">
              <span className="block">ဝိသုဒ္ဓိမဂ်ဓမ္မလမ်းဝိပဿနာအဖွဲ့များ၏ ဦးဆောင်နာယက၊</span>
              <span className="block">မဟာသဒ္ဓမ္မဇောတိကဓဇ</span>
              <span className="block text-amber-400 font-bold">ဆရာကြီးဒေါက်တာစိုးလွင်(မန္တလေး)</span>
            </div>
          ) : (
            <div className="text-sm md:text-lg text-white/90 font-medium max-w-4xl mx-auto leading-relaxed flex flex-col gap-1">
              <span className="block">Patron of Visuddhimag Dhamma Lann Vipassana Organizations,</span>
              <span className="block">Mahasaddhamajawtikadaja</span>
              <span className="block text-amber-400 font-bold uppercase tracking-wide">Dr. Soe Lwin (Mandalay)</span>
            </div>
          )}
          
          <div className={`opacity-80 max-w-2xl mx-auto font-light leading-relaxed mt-6 border-t border-white/10 pt-4 ${lang === 'en' ? 'text-lg md:text-xl' : 'text-base md:text-lg'}`}>
            {lang === 'en' ? (
              <p>
                A bridge between modern science and <br className="md:hidden" /> the ancient path of liberation.
              </p>
            ) : (
              <p>ခေတ်မီသိပ္ပံပညာနှင့် ရှေးဟောင်းဓမ္မအသိအမြင်တို့ကို ပေါင်းစပ်ပေးသော တံတားတစ်စင်း။</p>
            )}
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-4 pt-6 md:pt-10">
          <a 
            href={LMS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full md:w-auto px-10 md:px-12 py-4 md:py-5 bg-slate-900 hover:bg-slate-800 text-white transition-all font-bold tracking-widest uppercase text-[10px] md:text-xs rounded-full shadow-2xl overflow-hidden text-center border border-white/10 flex items-center justify-center gap-2"
          >
            <GraduationCap size={16} className="text-amber-500" />
            <span className="relative z-10">{lang === 'en' ? 'LMS Academy' : 'အွန်လိုင်းသင်တန်း'}</span>
          </a>
          <button 
            onClick={(e) => scrollToSection(e, 'framework')}
            className="group relative w-full md:w-auto px-10 md:px-12 py-4 md:py-5 bg-amber-700 hover:bg-amber-600 text-white transition-all font-bold tracking-widest uppercase text-[10px] md:text-xs rounded-full shadow-[0_10px_40px_rgba(217,119,6,0.3)] overflow-hidden text-center"
          >
            <span className="relative z-10">{lang === 'en' ? 'Explore Teachings' : 'တရားတော်များလေ့လာရန်'}</span>
          </button>
          <button 
            onClick={(e) => scrollToSection(e, 'about')}
            className="w-full md:w-auto px-10 md:px-12 py-4 md:py-5 border border-white/30 hover:border-white/60 hover:bg-white/5 text-white backdrop-blur-sm transition-all font-bold tracking-widest uppercase text-[10px] md:text-xs rounded-full text-center"
          >
            {lang === 'en' ? 'Biography' : 'ကိုယ်ရေးရာဇဝင်'}
          </button>
        </div>
      </div>

      <button 
        onClick={(e) => scrollToSection(e, 'about')}
        aria-label="Scroll to biography section"
        className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 text-white/40 hover:text-amber-500 transition-colors"
      >
        <ChevronDown size={32} />
      </button>

      <style>{`
        @keyframes ken-burns {
          0% { transform: scale(1.1) translate(0, 0); }
          100% { transform: scale(1.2) translate(-2%, -2%); }
        }
        .animate-ken-burns {
          animation: ken-burns 30s infinite alternate linear;
        }
      `}</style>
    </section>
  );
};

export default Hero;
