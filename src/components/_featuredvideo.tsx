
import React from 'react';
import { Language } from '../_types';
import { FileText, Play, BookOpen } from 'lucide-react';

interface FeaturedVideoProps {
  lang: Language;
}

const FeaturedVideo: React.FC<FeaturedVideoProps> = ({ lang }) => {
  const videoId = "1vDUaXCxT2QGumA7_WApDt1IaXN27dYEx";
  const embedUrl = `https://drive.google.com/file/d/${videoId}/preview`;
  const thumbnailUrl = `https://drive.google.com/thumbnail?id=${videoId}&sz=w1280`;
  const pdfBiographyUrl = "https://drive.google.com/file/d/1xzl9knsyhtWub1xyMzTdm5CIpomhgDGY/view?usp=sharing";

  return (
    <section id="featured-video" className="py-24 bg-[#0B1120] overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent opacity-50 pointer-events-none"></div>
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-amber-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 space-y-4">
          <div className="flex items-center justify-center gap-3 text-amber-500 mb-2">
            <BookOpen size={20} className="animate-pulse" />
            <span className="uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold">Biography Film</span>
          </div>
          <h2 className="text-3xl md:text-5xl heading-font text-white leading-tight">
            {lang === 'en' ? 'A Life Dedicated to Dhamma' : 'ကိုယ်ရေးရာဇဝင် ဗီဒီယို'}
          </h2>
          <div className="text-slate-400 max-w-3xl mx-auto font-light text-base md:text-lg leading-relaxed">
            {lang === 'en' ? (
              <p>
                Watch the inspiring journey and lifelong dedication of <br className="hidden md:block" /> 
                Dr. Soe Lwin in his service to the path of liberation.
              </p>
            ) : (
              <p>
                ဆရာကြီးဒေါက်တာစိုးလွင်၏ သာသနာပြုလုပ်ငန်းများနှင့် ဘဝခရီးလမ်းအား <br className="hidden md:block" /> 
                ထုပ်ဖော်ပြသထားသော ကိုယ်ရေးရာဇဝင်ဗီဒီယို။
              </p>
            )}
          </div>
        </div>

        <div className="relative group max-w-5xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-600/20 to-amber-400/20 rounded-2xl blur-lg opacity-25 pointer-events-none"></div>
          
          <div 
            className="relative bg-black rounded-2xl shadow-2xl overflow-hidden aspect-video border border-white/10 ring-1 ring-white/5 bg-cover bg-center"
            style={{ backgroundImage: `url(${thumbnailUrl})` }}
          >
            <iframe
              src={embedUrl}
              className="absolute inset-0 w-full h-full border-0 z-10"
              allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              allowFullScreen
              title="Dr. Soe Lwin Biography Video"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            ></iframe>

            <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
                <div className="w-16 h-16 bg-amber-500/80 rounded-full flex items-center justify-center">
                    <Play className="text-white ml-1" fill="white" />
                </div>
            </div>
          </div>
          
          <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-slate-500 text-[10px] md:text-xs italic uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                {lang === 'en' ? 'Biography of Dr. Soe Lwin (Mandalay)' : 'ဆရာကြီးဒေါက်တာစိုးလွင်(မန္တလေး)၏ ကိုယ်ရေးရာဇဝင်'}
              </div>
              <div className="text-slate-500 text-[9px] uppercase tracking-tighter ml-3.5">
                © {new Date().getFullYear()} Dr. Soe Lwin Official
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href={pdfBiographyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 bg-amber-700 hover:bg-amber-600 text-white rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest flex items-center gap-3 shadow-xl shadow-amber-600/20 transition-all hover:-translate-y-1 active:translate-y-0"
              >
                {lang === 'en' ? 'Read Biography (PDF)' : 'ကိုယ်ရေးရာဇဝင် (PDF) ဖတ်ရန်'}
                <FileText size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVideo;
