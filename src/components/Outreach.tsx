
import React from 'react';
import { Language } from '../types';
import { Globe, Video, Youtube, Facebook, GraduationCap } from 'lucide-react';
import { LMS_URL } from '../constants';

interface OutreachProps {
  lang: Language;
}

const Outreach: React.FC<OutreachProps> = ({ lang }) => {
  return (
    <section id="outreach" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1 space-y-10">
          <div className="space-y-4">
            <span className="text-amber-700 font-bold tracking-[0.2em] uppercase text-xs block">International Propagation</span>
            <h2 className="text-4xl md:text-5xl heading-font text-slate-900 leading-tight">
              {lang === 'en' ? 'Wisdom Without Borders' : 'နယ်စပ်မဲ့ တရားဓမ္မ အသိပညာ'}
            </h2>
          </div>
          
          <div className="space-y-12">
            <div className="flex gap-6 group">
              <a 
                href={LMS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-14 h-14 bg-amber-600 text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all"
              >
                <GraduationCap size={24} aria-hidden="true" />
              </a>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold text-slate-900">
                    {lang === 'en' ? 'LMS Learning Academy' : 'အွန်လိုင်းသင်ကြားရေးစနစ်'}
                  </h3>
                  <span className="bg-amber-100 text-amber-700 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest">New</span>
                </div>
                <p className="text-slate-600 leading-loose text-lg font-light">
                  {lang === 'en' 
                    ? "Our dedicated Learning Management System offers structured Dhamma courses, interactive materials, and progress tracking for serious practitioners worldwide."
                    : "ကမ္ဘာအရပ်ရပ်ရှိ ယောဂီများအတွက် စနစ်တကျ ပြုစုထားသော သင်ခန်းစာများ၊ လေ့ကျင့်ခန်းများနှင့် တိုးတက်မှုမှတ်တမ်းများကို ဓမ္မလမ်း LMS တွင် လေ့လာနိုင်ပါသည်။"}
                </p>
                <a href={LMS_URL} target="_blank" className="text-amber-700 text-sm font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all mt-2">
                  {lang === 'en' ? 'Access LMS Portal' : 'LMS သို့ ဝင်ရောက်ရန်'} →
                </a>
              </div>
            </div>

            <div className="flex gap-6 group">
              <div className="flex-shrink-0 w-14 h-14 bg-slate-900 text-amber-400 rounded-full flex items-center justify-center shadow-lg group-hover:bg-amber-600 group-hover:text-white transition-all">
                <Video size={24} aria-hidden="true" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900">
                  {lang === 'en' ? 'Technological Presence' : 'နည်းပညာဖြင့် သာသနာပြုခြင်း'}
                </h3>
                <p className="text-slate-600 leading-loose text-lg font-light">
                  {lang === 'en' 
                    ? 'Active daily presence via Zoom morning discussions, YouTube (1,400+ videos), and Facebook platforms.'
                    : 'Zoom၊ YouTube နှင့် Facebook တို့မှတစ်ဆင့် နေ့စဉ် ဓမ္မဆွေးနွေးပွဲများကို အွန်လိုင်းမှတစ်ဆင့် ထုတ်လွှင့်ပြသလျက်ရှိသည်။'}
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-6 pt-6">
            <a href="https://www.youtube.com/@Drsoelwinmandalayofficial" target="_blank" aria-label="Visit our YouTube channel" rel="noopener noreferrer" className="flex items-center gap-2 bg-red-50 text-red-600 px-6 py-3 rounded-full font-bold text-sm hover:bg-red-600 hover:text-white transition-all shadow-sm">
              <Youtube size={20} />
              YouTube
            </a>
            <a href="https://www.facebook.com/drsoelwin1" target="_blank" aria-label="Visit our Facebook page" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-50 text-blue-600 px-6 py-3 rounded-full font-bold text-sm hover:bg-blue-600 hover:text-white transition-all shadow-sm">
              <Facebook size={20} />
              Facebook
            </a>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative">
          <div className="absolute -inset-4 bg-amber-600/10 rounded-[3rem] blur-2xl -z-10 rotate-3"></div>
          <div className="relative overflow-hidden rounded-[3rem] shadow-2xl group">
             <img 
              src="https://images.unsplash.com/photo-1528154291023-a6525fabe5b4?q=80&w=800&auto=format&fit=crop" 
              alt="Bagan Buddhist temples at sunrise in Myanmar" 
              className="w-full h-[500px] object-cover transform group-hover:scale-110 transition-transform duration-1000"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex items-end p-12">
              <div className="text-white">
                <Globe className="text-amber-400 mb-4 animate-pulse" size={40} aria-hidden="true" />
                <h3 className="text-2xl font-bold">{lang === 'en' ? 'Global Community' : 'ကမ္ဘာလုံးဆိုင်ရာ ဓမ္မအသိုင်းအဝန်း'}</h3>
                <p className="opacity-80 font-light">{lang === 'en' ? 'Reaching hearts across 10+ countries' : 'နိုင်ငံပေါင်း ၁၀ ကျော်သို့ ပြန့်နှံ့လျက်ရှိ'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Outreach;
