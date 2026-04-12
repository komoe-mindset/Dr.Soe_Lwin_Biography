
import React, { useState } from 'react';
import { Language, Center } from '../types';
import { CENTERS, PAMPHLET_URL } from '../constants';
import { Flower2, Landmark, Building2, ArrowRight, X, Calendar, BookOpen, Info, ChevronRight, FileText, ExternalLink, Phone } from 'lucide-react';

interface CentersProps {
  lang: Language;
}

const iconMap: Record<string, React.ReactNode> = {
  Lotus: <Flower2 size={32} />,
  Temple: <Landmark size={32} />,
  City: <Building2 size={32} />,
};

const Centers: React.FC<CentersProps> = ({ lang }) => {
  const [selectedCenter, setSelectedCenter] = useState<Center | null>(null);

  return (
    <section id="centers" className="py-24 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16 space-y-6">
          <div className="space-y-4">
            <span className="text-amber-600 font-bold tracking-[0.3em] uppercase text-xs">Pathways to Peace</span>
            <h2 className="text-4xl md:text-5xl heading-font text-slate-900">
              {lang === 'en' ? 'Dhammalann Centers' : 'ဓမ္မလမ်း ဝိပဿနာစင်တာများ'}
            </h2>
            <div className="h-1.5 w-24 bg-amber-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="pt-4">
            <a 
              href={PAMPHLET_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={lang === 'en' ? 'Open organization pamphlet PDF in new tab' : 'အဖွဲ့၏ လက်ကမ်းစာစောင် PDF ကို တက်ဘ်အသစ်တွင် ဖွင့်ရန်'}
              className="inline-flex items-center gap-3 px-8 py-3 bg-white border border-amber-200 text-amber-800 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] shadow-sm hover:bg-amber-50 hover:border-amber-400 hover:shadow-md transition-all group"
            >
              <FileText size={16} className="text-amber-600 group-hover:scale-110 transition-transform" />
              {lang === 'en' ? 'Organization Pamphlet (PDF)' : 'အဖွဲ့၏ လက်ကမ်းစာစောင် (PDF)'}
              <ExternalLink size={12} className="opacity-50" />
            </a>
          </div>
        </header>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {CENTERS.map((center) => (
            <div 
              key={center.id} 
              className="group bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-full -z-0 translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative z-10 flex-grow">
                <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-500">
                  {iconMap[center.icon]}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-slate-900 leading-tight">
                  {center.title[lang]}
                </h3>
                
                <p className="text-slate-600 leading-relaxed mb-6 text-base font-light">
                  {center.description[lang]}
                </p>

                {center.phone && (
                  <div className="mb-8 p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-4 group/phone hover:bg-amber-50 hover:border-amber-100 transition-colors">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-amber-600 shadow-sm">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{lang === 'en' ? 'Contact' : 'ဆက်သွယ်ရန်'}</p>
                      <a 
                        href={`tel:${center.phone.replace(/\s/g, '')}`}
                        className="text-lg font-bold text-slate-900 hover:text-amber-700 transition-colors"
                      >
                        {center.phone}
                      </a>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="relative z-10 pt-4 border-t border-slate-50">
                {center.discourses ? (
                  <button 
                    onClick={() => setSelectedCenter(center)}
                    className="inline-flex items-center gap-2 text-amber-700 font-bold uppercase tracking-widest text-xs hover:gap-4 transition-all"
                  >
                    {lang === 'en' ? 'Learn More' : 'အသေးစိတ်ကြည့်ရန်'}
                    <ArrowRight size={16} />
                  </button>
                ) : center.detailLink ? (
                  <a 
                    href={center.detailLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-amber-700 font-bold uppercase tracking-widest text-xs hover:gap-4 transition-all"
                  >
                    {lang === 'en' ? 'Learn More' : 'အသေးစိတ်ကြည့်ရန်'}
                    <ArrowRight size={16} />
                  </a>
                ) : (
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">
                    {lang === 'en' ? 'Direct Contact Available' : 'တိုက်ရိုက်ဆက်သွယ်နိုင်သည်'}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedCenter && (
        <div 
          className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300"
          role="dialog"
          aria-modal="true"
          aria-labelledby="center-modal-title"
        >
          <div 
            className="absolute inset-0 bg-slate-900/95 backdrop-blur-md"
            onClick={() => setSelectedCenter(null)}
          ></div>
          
          <div className="relative w-full max-w-4xl bg-white rounded-[2rem] shadow-2xl overflow-hidden animate-in slide-in-from-bottom-10 duration-500 max-h-[90vh] flex flex-col">
            <header className="p-6 md:p-8 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white z-20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center">
                  {iconMap[selectedCenter.icon]}
                </div>
                <div>
                  <h3 id="center-modal-title" className="text-2xl font-bold heading-font">{selectedCenter.title[lang]}</h3>
                  <p className="text-amber-600 text-[10px] font-bold tracking-widest uppercase">{lang === 'en' ? 'Center Archive & Details' : 'စင်တာ၏ သာသနာပြုမှတ်တမ်း'}</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedCenter(null)}
                aria-label="Close modal"
                className="p-2 rounded-full hover:bg-slate-100 transition-colors"
              >
                <X size={24} />
              </button>
            </header>

            <div className="p-6 md:p-10 overflow-y-auto custom-scrollbar">
              <div className="space-y-12">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="bg-amber-50 p-6 rounded-2xl md:w-1/3 border border-amber-100">
                    <h4 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                      <BookOpen size={18} />
                      {lang === 'en' ? 'About this Center' : 'စင်တာအကြောင်း'}
                    </h4>
                    <p className="text-slate-700 text-sm leading-relaxed mb-6">
                      {selectedCenter.description[lang]}
                    </p>

                    {selectedCenter.phone && (
                      <div className="mb-6 p-4 bg-white rounded-xl border border-amber-100">
                        <p className="text-[9px] font-bold text-amber-600 uppercase tracking-widest mb-1">{lang === 'en' ? 'Phone' : 'ဖုန်း'}</p>
                        <p className="text-base font-bold text-slate-900">{selectedCenter.phone}</p>
                      </div>
                    )}
                    
                    {selectedCenter.detailLink && (
                      <a 
                        href={selectedCenter.detailLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-amber-600 text-white rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-amber-700 transition-all shadow-sm group"
                      >
                        <FileText size={14} className="group-hover:scale-110 transition-transform" />
                        {lang === 'en' ? 'Full Explanation (Doc)' : 'အသေးစိတ်ရှင်းလင်းချက် (Doc)'}
                        <ExternalLink size={12} className="opacity-70" />
                      </a>
                    )}
                  </div>
                  
                  <div className="flex-1 space-y-8">
                    {!selectedCenter.discourses ? (
                      <div className="text-center py-20 space-y-4">
                        <Info className="mx-auto text-slate-300" size={48} />
                        <p className="text-slate-500 font-light italic">
                          {lang === 'en' ? 'Detailed archive for this center is currently being compiled.' : 'ဤစင်တာအတွက် အသေးစိတ်အချက်အလက်များကို မကြာမီ ဖြည့်စွက်ပေးပါမည်။'}
                        </p>
                      </div>
                    ) : (
                      <>
                        <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                          <Calendar size={20} className="text-amber-600" />
                          <h4 className="text-xl font-bold text-slate-900">
                            {selectedCenter.id === 'pyin-oo-lwin' 
                              ? (lang === 'en' ? 'Original Basic Books Archive' : 'အခြေခံမူလစာအုပ်များ မှတ်တမ်း')
                              : (lang === 'en' ? '2025 Discourse Archive' : '၂၀၂၅ တရားတော်များမှ ကောက်နုတ်ချက်များ')
                            }
                          </h4>
                        </div>

                        <div className="space-y-6">
                          {selectedCenter.discourses.map((disc, idx) => (
                            <div key={idx} className="group p-6 rounded-2xl bg-slate-50 hover:bg-white border border-transparent hover:border-amber-100 hover:shadow-lg transition-all">
                              <div className="flex justify-between items-start mb-4">
                                <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest">{disc.date}</span>
                              </div>
                              <h5 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-amber-700 transition-colors">
                                {disc.title[lang]}
                              </h5>
                              <p className="text-slate-600 text-sm font-light mb-6">
                                {disc.summary[lang]}
                              </p>

                              {disc.keyTerms && (
                                <div className="mb-6 space-y-3">
                                  <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">{lang === 'en' ? 'Key Concepts' : 'အဓိက ဝေါဟာရများ'}</p>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {disc.keyTerms.map((term, tIdx) => (
                                      <div key={tIdx} className="bg-white p-3 rounded-lg border border-slate-100">
                                        <p className="font-bold text-amber-700 text-xs mb-1">{term.term}</p>
                                        <p className="text-[10px] text-slate-500">{term.explanation[lang]}</p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {disc.roadmap && (
                                <div className="space-y-3">
                                  <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">{lang === 'en' ? 'Practical Roadmap' : 'လက်တွေ့အသုံးချရန် လမ်းပြမြေပုံ'}</p>
                                  <ul className="space-y-2">
                                    {disc.roadmap.map((step, sIdx) => (
                                      <li key={sIdx} className="flex gap-3 text-xs text-slate-700 font-medium">
                                        <ChevronRight size={14} className="text-amber-500 flex-shrink-0" />
                                        {step[lang]}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <footer className="p-6 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
              <button 
                onClick={() => setSelectedCenter(null)}
                className="px-8 py-3 bg-slate-900 text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-amber-600 transition-colors"
              >
                {lang === 'en' ? 'Close' : 'ပိတ်ရန်'}
              </button>
              <div className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">
                © {new Date().getFullYear()} Dhammalann Archive
              </div>
            </footer>
          </div>
        </div>
      )}
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #cbd5e1;
        }
      `}</style>
    </section>
  );
};

export default Centers;
