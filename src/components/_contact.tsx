
import React from 'react';
import { Language } from '../_types';
import { Phone, Mail, Globe, MapPin, Youtube, Facebook, Send } from 'lucide-react';

interface ContactProps {
  lang: Language;
}

const Contact: React.FC<ContactProps> = ({ lang }) => {
  return (
    <section id="contact" className="bg-slate-900 text-white pt-24 pb-12 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl heading-font mb-6 text-amber-500">
                {lang === 'en' ? 'Get in Touch' : 'ဆက်သွယ်မေးမြန်းရန်'}
              </h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed max-w-md">
                {lang === 'en' 
                  ? 'For retreat schedules, book requests, or donation inquiries, please reach out via the following channels.'
                  : 'တရားစခန်း အချိန်ဇယားများ၊ စာအုပ်များ မှာယူရန်နှင့် အလှူဒါနများအတွက် အောက်ပါလမ်းကြောင်းများမှ ဆက်သွယ်နိုင်ပါသည်။'}
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500 mb-1">{lang === 'en' ? 'Phone' : 'ဖုန်း'}</p>
                  <p className="text-xl font-medium">+95 95180604</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500 mb-1">{lang === 'en' ? 'Email' : 'အီးမေးလ်'}</p>
                  <p className="text-xl font-medium">doctor.soe.lwin@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-all">
                  <Globe size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500 mb-1">{lang === 'en' ? 'Website' : 'ဝဘ်ဆိုဒ်'}</p>
                  <a href="https://www.dhammalann.com" target="_blank" className="text-xl font-medium hover:text-amber-500 transition-colors">www.dhammalann.com</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/5 p-12 rounded-[2.5rem] border border-white/10 relative z-10 backdrop-blur-sm">
              <h3 className="text-amber-500 font-bold mb-10 uppercase tracking-[0.2em] text-sm">
                {lang === 'en' ? 'Principal Addresses' : 'ဌာနချုပ်လိပ်စာများ'}
              </h3>
              
              <div className="space-y-10">
                <div className="flex gap-6">
                  <MapPin className="text-amber-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white mb-2">{lang === 'en' ? 'Pyin Oo Lwin HQ' : 'ပြင်ဦးလွင် ဌာနချုပ်'}</h4>
                    <p className="text-slate-400 font-light text-sm leading-relaxed">
                      Pyinsar, MhayPone Village, Mandalay Region, Myanmar
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <MapPin className="text-amber-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white mb-2">{lang === 'en' ? 'Yangon Dhamma Lann' : 'ရန်ကုန်ဓမ္မလမ်းစင်တာ'}</h4>
                    <p className="text-slate-400 font-light text-sm leading-relaxed">
                      {lang === 'en' 
                        ? 'Dhamma Hall, Mahabodhi Bodhgaya Monastery compound, Bohmu Ba Htoo Road, Ward 42, North Dagon Township, Yangon, Myanmar'
                        : 'ဓမ္မလမ်းရန်ကုန်စင်တာ၊ ဓမ္မာရုံ၊ မဟာဗောဓိ ဗုဒ္ဓဂယာ စာသင်တိုက်၊ ဗိုလ်မှူးဗထူးလမ်း၊ (၄၂) ရပ်ကွက်၊ မြောက်ဒဂုံ၊ ရန်ကုန်မြို့။'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex gap-6">
                <a href="https://www.youtube.com/@Drsoelwinmandalayofficial" target="_blank" aria-label="YouTube" className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-red-600 transition-all">
                  <Youtube size={24} />
                </a>
                <a href="https://www.facebook.com/drsoelwin1" target="_blank" aria-label="Facebook" className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all">
                  <Facebook size={24} />
                </a>
                <a href="#" aria-label="Telegram" className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-sky-500 transition-all">
                  <Send size={24} />
                </a>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-amber-600/10 rounded-full blur-[120px] -z-0"></div>
          </div>
        </div>
        
        <div className="mt-32 pt-12 border-t border-white/5 text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-slate-500 mb-4">
            &copy; 2024 Dr. Soe Lwin (Mandalay) &bull; A Dedicated Dhamma Publication
          </p>
          <div className="flex justify-center gap-8 text-xs font-semibold tracking-widest text-slate-600 uppercase">
            <a href="#" className="hover:text-amber-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Terms</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Media Kit</a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
