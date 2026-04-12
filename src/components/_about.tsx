
import React from 'react';
import { Language } from '../_types';
import { GraduationCap, BookOpen, Mic, HeartPulse, ExternalLink } from 'lucide-react';

interface AboutProps {
  lang: Language;
}

const About: React.FC<AboutProps> = ({ lang }) => {
  const libraryLink = "https://script.google.com/macros/s/AKfycbzM7nmlj6y6qv-emnHWl4aEkP5XGm8RrZObX_yqkEgzpfkEW1cSXT_mdJZeX352GbR0kg/exec";
  
  return (
    <section id="about" className="relative py-24 px-6 bg-white overflow-hidden">
      {/* Top transition gradient */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-500/5 rounded-full blur-3xl -z-10"></div>
          <div className="relative group overflow-hidden rounded-2xl shadow-2xl bg-slate-200">
            <img 
              src="https://lh3.googleusercontent.com/pw/AP1GczPkw7PcEA0s0Aa9nuCBreos2BnbtkLr7vG5DxVvgsm5X8U_6vMqRYzjemODZuQAuxZMRbdidMYeXngF-Q2_rRjnDjqhYnKCwVLoQcFI_fdhIK64hEI=w800" 
              alt="Portrait of Dr. Soe Lwin (Mandalay)" 
              className="w-full h-[600px] object-cover object-top transform group-hover:scale-105 transition-transform duration-1000"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-amber-950/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/20 backdrop-blur-md rounded-xl border border-white/20">
               <span className="text-white font-bold text-sm tracking-tight leading-relaxed block">
                 ဆရာကြီးဒေါက်တာစိုးလွင်(မန္တလေး)
               </span>
               <p className="text-amber-200 text-xs mt-1 font-medium">
                 {lang === 'en' ? 'Peace Beyond Thought' : 'အတွေးကိုကျော်လွန်သော ငြိမ်းချမ်းခြင်း'}
               </p>
            </div>
          </div>
          
          <div className="mt-12 border-l-4 border-amber-700 pl-8 py-4 bg-amber-50/50 rounded-r-xl">
            <p className="italic text-slate-800 leading-relaxed text-lg">
              {lang === 'en' 
                ? '"Honored with the title \'Mahasaddhamajawtikadaja\' in 2020 by the State for exceptional contributions to Dhamma."'
                : '"၂၀၂၀ ခုနှစ်တွင် နိုင်ငံတော်မှ ဆက်ကပ်သော \'မဟာသဒ္ဓမ္မဇောတိကဓဇ\' ဘွဲ့တံဆိပ်တော်ကို ရရှိခဲ့ပါသည်။"'}
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-3 text-amber-800 font-bold tracking-[0.2em] uppercase text-xs mb-3">
              <HeartPulse size={16} />
              <span>Physician & Preceptor</span>
            </div>
            <h2 className="text-4xl md:text-5xl heading-font mb-6 text-slate-900 leading-tight">
              {lang === 'en' ? 'A Lifetime of Service' : 'ဘဝတစ်လျှောက်လုံး အနစ်နာခံ ဆောင်ရွက်မှု'}
            </h2>
            <div className="space-y-6 text-slate-700 leading-loose text-lg font-light">
              <p>
                {lang === 'en' 
                  ? 'As a dedicated lay teacher and medical doctor, Dr. Soe Lwin uniquely translates ancient Buddhist principles into a language that resonates with the modern, scientific mind.'
                  : 'လူပုဂ္ဂိုလ် ဓမ္မကထိကတစ်ဦးအနေဖြင့်လည်းကောင်း၊ ဆေးဝန်ထမ်းတစ်ဦးအနေဖြင့်လည်းကောင်း၊ ဒေါက်တာစိုးလွင်သည် ဗုဒ္ဓဓမ္မ၏ အနှစ်ချုပ်များကို ခေတ်မီ သိပ္ပံနည်းကျ ဘာသာစကားများဖြင့် အရောက်ပို့ပေးနေပါသည်။'}
              </p>
              <p>
                {lang === 'en'
                  ? 'Born in Mandalay (1958) and educated at the University of Medicine, he spent decades serving at the Mandalay Ziwita Sangha Hospital before dedicating his life to spreading the "Path of Dhamma" (Dhammalann).'
                  : '၁၉၅၈ ခုနှစ် မန္တလေးမြို့တွင် မွေးဖွားခဲ့ပြီး ဆေးပညာဘွဲ့ ရရှိပြီးနောက် မန္တလေးဇီဝိတဒါနသံဃာ့ဆေးရုံကြီးတွင် ဆယ်စုနှစ်ပေါင်းများစွာ တာဝန်ထမ်းဆောင်ခဲ့ကာ၊ ယခုအခါ "ဓမ္မလမ်း" သာသနာပြုလုပ်ငန်းများကို အားသွန်ခွန်စိုက် ဆောင်ရွက်လျက်ရှိသည်။'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a 
              href={libraryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-50 p-6 rounded-xl border-l-4 border-amber-700 shadow-sm hover:shadow-xl hover:bg-amber-50 transition-all group block relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-4">
                  <BookOpen className="text-amber-800 group-hover:scale-110 transition-transform" size={24} />
                  <span className="text-3xl font-bold text-slate-900 tracking-tight">60+</span>
                </div>
                <ExternalLink size={16} className="text-amber-800 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-sm font-semibold text-slate-600 uppercase tracking-widest group-hover:text-amber-800 transition-colors">
                {lang === 'en' ? 'Books Published' : 'ဓမ္မစာအုပ်ပေါင်း'}
              </p>
              <p className="text-[10px] text-amber-700 font-bold mt-2 uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">
                {lang === 'en' ? 'Visit Digital Library' : 'ဒီဂျစ်တယ်စာကြည့်တိုက်သို့'}
              </p>
            </a>
            
            <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-amber-700 shadow-sm hover:shadow-md transition-shadow group">
              <div className="flex items-center gap-4 mb-3">
                <Mic className="text-amber-800 group-hover:scale-110 transition-transform" size={24} />
                <span className="text-3xl font-bold text-slate-900 tracking-tight">3,500+</span>
              </div>
              <p className="text-sm font-semibold text-slate-600 uppercase tracking-widest">
                {lang === 'en' ? 'Audio Discourses' : 'တရားတော်များ (အသံ)'}
              </p>
            </div>
          </div>
          
          <div className="pt-4 flex items-center justify-between border-t border-slate-100">
             <div className="flex items-center gap-4 text-slate-600">
               <GraduationCap className="text-amber-700" />
               <span className="font-medium text-sm italic">{lang === 'en' ? 'MBBS (Mandalay), Associate Professor' : 'ဆေးပညာဘွဲ့၊ တွဲဖက်ပါမောက္ခ'}</span>
             </div>
             <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest">
               <span className="w-2 h-2 rounded-full bg-green-600" aria-hidden="true"></span>
               {lang === 'en' ? 'Active Propagation' : 'သာသနာပြုဆဲ'}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
