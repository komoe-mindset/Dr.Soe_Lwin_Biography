import React, { useState } from 'react';
import { Language } from '../types';
import { Coffee, Move, Sun, CheckCircle2, ChevronRight, X } from 'lucide-react';

interface PracticesProps {
  lang: Language;
}

const Practices: React.FC<PracticesProps> = ({ lang }) => {
  const [activePractice, setActivePractice] = useState<number | null>(null);

  const practiceData = [
    {
      title: { en: "Coffee Meditation", mm: "ကော်ဖီသောက်ရင်း တရားရှုမှတ်ခြင်း" },
      subtitle: { en: "Teacher's Summary", mm: "ဆရာကြီးရဲ့ လမ်းညွှန်ချက် အနှစ်ချုပ်" },
      icon: <Coffee size={32} />,
      color: "amber",
      summary: {
        en: "Focus on the teacher's essential summary for mindfulness while drinking coffee.",
        mm: "ကော်ဖီသောက်ရင်း တရားမှတ်ရန် ဆရာကြီး၏ အနှစ်ချုပ်လမ်းညွှန်ချက်များကို အာရုံစိုက်ပါ။"
      },
      content: {
        steps: [
          { 
            en: "Contemplate 'Not-Self': Drinking coffee is not 'I', but a process of mind and matter arising from causes.", 
            mm: "\"ငါ\" မဟုတ်ကြောင်း ဆင်ခြင်ပါ: ကော်ဖီသောက်နေတာဟာ \"ငါ\" မဟုတ်ဘဲ အကြောင်းတိုက်ဆိုင်လို့ ပေါ်လာတဲ့ ရုပ်နာမ် ဖြစ်စဉ်မျှသာ ဖြစ်ပါတယ် ။" 
          },
          { 
            en: "Know Sensation as Sensation: Realize it's not the coffee that is good, but the sensation it provides.", 
            mm: "ဝေဒနာကို ဝေဒနာဟုသိပါ: ကော်ဖီက ကောင်းတာမဟုတ်ဘဲ ကော်ဖီကပေးတဲ့ ဝေဒနာ ကသာ ကောင်းတာဖြစ်ကြောင်း သတိပြုပါ ။" 
          },
          { 
            en: "Discard Clinging with Mindfulness: When the urge for more arises, noting it as 'clinging' extinguishes the defilement.", 
            mm: "ဥပါဒါန်ကို သတိနဲ့ပယ်ပါ: \"ထပ်သောက်ချင်သေးတယ်\" ဆိုတဲ့ စွဲလမ်းမှု ဥပါဒါန် (Clinging) ပေါ်လာရင် \"စွဲနေပြီ\" လို့ သတိပြုလိုက်တာနဲ့ အဲဒီကိလေသာဟာ ချုပ်ငြိမ်းသွားမှာ ဖြစ်ပါတယ် ။" 
          }
        ],
        wisdom: { 
          en: "By drinking with mindfulness, wisdom is added to action, leading towards Nibbana. Can you observe the 'bitterness' without labeling it as 'coffee'?", 
          mm: "ဒီလို သတိနဲ့သောက်ခြင်းအားဖြင့် ကံကုသိုလ် (ကော်ဖီသောက်ခြင်း) အပေါ်မှာ ဉာဏ်ကုသိုလ် (ရုပ်နာမ်ခွဲခြားသိခြင်း) ဆင့်ပြီး နိဗ္ဗာန်ဆီကို ဦးတည်နိုင်ပါတယ် ။ ဓမ္မမိတ်ဆွေအနေနဲ့ ကော်ဖီသောက်တဲ့အခါ လျှာပေါ်မှာ ပေါ်လာတဲ့ \"ခါးတဲ့သဘော\" ကို \"ကော်ဖီ\" လို့ အမည်မတပ်ဘဲ သိမှု (Awareness) သက်သက်နဲ့ ရှုမှတ်ကြည့်နိုင်မလား?" 
        }
      }
    },
    {
      title: { en: "Walking Meditation", mm: "စင်္ကြံလျှောက်ရင်း တရားရှုမှတ်ခြင်း" },
      subtitle: { en: "Anatta & The Third Phenomenon", mm: "🌟 အနတ္တအမြင်နှင့် The Third Phenomenon အနှစ်ချုပ်" },
      icon: <Move size={32} />,
      color: "emerald",
      summary: {
        en: "Understand the three stages of walking meditation: Concept, Reality, and the Third Phenomenon (Anatta).",
        mm: "ဆရာကြီးရဲ့ သင်ပြချက်အရ စင်္ကြံလျှောက်တဲ့အခါ ကျော်ဖြတ်ရမယ့် အဆင့် (၃) ဆင့် ရှိပါတယ်"
      },
      content: {
        steps: [
          { 
            en: "1. Concept (Pannatti): Seeing 'leg' or 'I am walking' is a worldly concept. 🦶", 
            mm: "၁။ ပထမဖြစ်စဉ် (ပညတ်): \"ခြေထောက်\" လို့ မြင်နေတာ၊ \"ငါ\" လျှောက်နေတယ်လို့ ထင်နေတာဟာ လောကသမုတိ (Concept) ဖြစ်ပါတယ်။ 🦶" 
          },
          { 
            en: "2. Reality (Paramattha): Removing the form reveals tension, support, and movement (Matter) and the knowing (Mind). 🔥", 
            mm: "၂။ ဒုတိယဖြစ်စဉ် (ပရမတ်): ခြေထောက်ဆိုတဲ့ ပုံသဏ္ဌာန်ကို ဖယ်လိုက်ရင် တကယ်ရှိနေတာက တင်းမှု၊ ထောက်မှု၊ လှုပ်ရှားမှု ဆိုတဲ့ ရုပ်ဓာတ်တွေနဲ့ အဲဒါကို သိနေတဲ့ နာမ်ဓာတ်တွေပဲ ဖြစ်ပါတယ်။ 🔥" 
          },
          { 
            en: "3. The Third Phenomenon: Realizing that Mind and Matter arise due to causes, not by 'my' will. This is true Anatta. ✨", 
            mm: "၃။ တတိယဖြစ်စဉ် (The Third Phenomenon): အဲဒီ ရုပ်နဲ့ နာမ်ဟာလည်း \"ငါ\" ရဲ့ အလိုအတိုင်း ဖြစ်နေတာမဟုတ်ဘဲ အကြောင်းတိုက်ဆိုင်လို့ ဖြစ်ပေါ်လာတဲ့ သဘာဝဖြစ်စဉ် သက်သက်သာ ဖြစ်တယ်ဆိုတာကို သိမြင်တာဖြစ်ပါတယ်။ ဒါဟာ အစစ်အမှန် အနတ္တ အမြင်ပါပဲ။ ✨" 
          }
        ],
        wisdom: { 
          en: "Before moving, do you notice the 'intention to move'? If that intention is the cause, what is the actual movement? (Cause or Effect?)", 
          mm: "ခြေထောက် မလှမ်းခင်မှာ \"လှမ်းချင်တဲ့စိတ်\" လေး အရင်ပေါ်လာတာကို သတိထားမိပါသလား? အဲဒီ \"လှမ်းချင်တဲ့စိတ်\" က အကြောင်းတရားဆိုရင်၊ တကယ်လှမ်းလိုက်တဲ့ \"ခြေထောက်လှုပ်ရှားမှု\" က ဘာဖြစ်နိုင်မလဲ? (အကြောင်း လား၊ အကျိုး လား?)" 
        }
      }
    },
    {
      title: { en: "Anchoring in the Present", mm: "ပစ္စုပ္ပန်မှာ ကျောက်ချခြင်း" },
      subtitle: { en: "Guided Practice", mm: "🧘‍♂️ Guided Practice" },
      icon: <Sun size={32} />,
      color: "blue",
      summary: {
        en: "Anchor your mind in the 'Now' to stop the fire of overthinking and return to reality.",
        mm: "ပစ္စုပ္ပန်တည့်တည့်တွင် စိတ်ကို ကျောက်ချထားခြင်းဖြင့် အတွေးနယ်ချဲ့မှုများကို ရပ်တန့်ပါ။"
      },
      content: {
        steps: [
          { 
            en: "1. Contact (Object): Focus on the most prominent physical contact (e.g., sitting). Feel the raw hardness or heat without labeling it as 'my body'.", 
            mm: "အဆင့် (၁) - \"ထိ\" (The Physical Contact - Object): ခန္ဓာကိုယ်မှာ အထင်ရှားဆုံးဖြစ်နေတဲ့ ထိတွေ့မှု (ဥပမာ-မာခြင်း၊ ပူခြင်း) ကို ရှာကြည့်ပါ။ \"ငါ့တင်ပါး\" လို့ မမှတ်ဘဲ သဘောလေးကိုပဲ အာရုံပြုပါ။" 
          },
          { 
            en: "2. Knowing (Mind): Be aware of the sensation without mental recitation. Realize it as bare awareness (Vinnana) arising from contact.", 
            mm: "အဆင့် (၂) - \"သိ\" (The Bare Awareness - Mind): ထိတွေ့မှုကို သိလိုက်ပါ။ \"မာတယ်၊ ပူတယ်\" လို့ ရွတ်စရာမလိုဘဲ \"ငါသိတယ်\" ဆိုတဲ့ အစွဲမပါတဲ့ သိမှုသဘောလေးသက်သက်ကို ဆင်ခြင်ပါ။" 
          },
          { 
            en: "3. Mindfulness (Anchor): Stay anchored on that 'knowing'. If the mind wanders to thoughts, recognize it as 'concept' and return to the 'contact' immediately.", 
            mm: "အဆင့် (၃) - \"သတိ\" (The Anchor - Mindfulness): အဲဒီ \"သိမှု\" လေးပေါ်မှာပဲ စိတ်ကို ကျောက်ချထားပါ။ စိတ်လွင့်သွားရင် \"တွေးတယ်\" လို့ သိလိုက်ပြီး လက်ရှိ \"ထိတွေ့မှု\" ဆီ ချက်ချင်းပြန်လာပါ။" 
          }
        ],
        wisdom: { 
          en: "If you see color, just know it as color. Labeling it 'apple' takes you from the present into past memory (Sanna).", 
          mm: "\"အရောင်ကို မြင်ရင် အရောင်လို့ပဲ သိပါ။ 'ပန်းသီး' လို့ အမည်တပ်လိုက်တာနဲ့ မင်းဟာ ပစ္စုပ္ပန်ကနေ လွတ်ပြီး အတိတ်က မှတ်သားမှု (သညာ) ထဲ ရောက်သွားပြီ။\"" 
        }
      }
    }
  ];

  return (
    <section id="practices" className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-amber-600 font-bold tracking-[0.3em] uppercase text-xs">Practical Wisdom</span>
          <h2 className="text-4xl md:text-5xl heading-font text-slate-900 leading-tight">
            {lang === 'en' ? 'Guided Practices' : 'လက်တွေ့ကျင့်စဉ်များ'}
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-light text-lg">
            {lang === 'en' 
              ? 'Integrating Dhamma into every breath, step, and moment of your daily life.'
              : 'နေ့စဉ်ဘဝ၏ ထွက်သက်ဝင်သက်တိုင်း၊ ခြေလှမ်းတိုင်းတွင် တရားဓမ္မကို ပေါင်းစပ်ကျင့်ကြံခြင်း။'}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {practiceData.map((p, i) => (
            <div 
              key={i}
              className={`group bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:shadow-xl transition-all duration-500 flex flex-col h-full`}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110
                ${p.color === 'amber' ? 'bg-amber-100 text-amber-600' : ''}
                ${p.color === 'emerald' ? 'bg-emerald-100 text-emerald-600' : ''}
                ${p.color === 'blue' ? 'bg-blue-100 text-blue-600' : ''}
              `}>
                {p.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{p.title[lang]}</h3>
              <p className="text-amber-600 font-bold text-xs uppercase tracking-widest mb-4">{p.subtitle[lang]}</p>
              <p className="text-slate-600 font-light mb-8 flex-grow">{p.summary[lang]}</p>
              
              <button 
                onClick={() => setActivePractice(i)}
                className="w-full py-4 rounded-xl border border-slate-200 text-slate-800 font-bold text-sm uppercase tracking-widest hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all flex items-center justify-center gap-2 group/btn"
              >
                {lang === 'en' ? 'Start Practice' : 'ကျင့်စဉ်စတင်ရန်'}
                <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      {activePractice !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
          <div 
            className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm"
            onClick={() => setActivePractice(null)}
          ></div>
          
            <div className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden animate-in slide-in-from-bottom-10 duration-500 max-h-[90vh] flex flex-col">
              {/* Header - Fixed */}
              <div className="p-8 md:p-12 pb-4 flex items-center justify-between border-b border-slate-50">
                <div className="flex items-center gap-4">
                  <div className={`p-3 md:p-4 rounded-xl bg-slate-100 flex-shrink-0`}>
                    {practiceData[activePractice].icon}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-3xl font-bold heading-font leading-tight">{practiceData[activePractice].title[lang]}</h3>
                    <p className="text-amber-600 text-[10px] md:text-sm font-bold tracking-widest uppercase mt-0.5">{practiceData[activePractice].subtitle[lang]}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setActivePractice(null)}
                  className="p-2 rounded-full hover:bg-slate-100 transition-colors text-slate-400 hover:text-slate-900"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Content - Scrollable */}
              <div className="px-8 md:px-12 py-6 overflow-y-auto custom-scrollbar flex-grow">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 border-b border-slate-100 pb-2">The Guided Path</h4>
                    <ul className="space-y-6">
                      {practiceData[activePractice].content.steps.map((step, idx) => (
                        <li key={idx} className="flex gap-4 group">
                          <CheckCircle2 size={24} className="text-amber-500 flex-shrink-0 mt-1" />
                          <span className="text-base md:text-lg text-slate-700 font-light leading-relaxed">{step[lang]}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-amber-50 p-6 md:p-8 rounded-2xl border border-amber-100 italic text-amber-900 text-center font-serif text-base md:text-lg leading-relaxed mb-4">
                    "{practiceData[activePractice].content.wisdom[lang]}"
                  </div>
                </div>
              </div>

              {/* Footer - Fixed */}
              <div className="p-6 md:p-8 bg-slate-50/50 border-t border-slate-100">
                <button 
                  onClick={() => setActivePractice(null)}
                  className="w-full bg-slate-900 text-white py-4 md:py-5 rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-amber-700 transition-all shadow-lg hover:shadow-amber-900/20 active:scale-[0.98]"
                >
                  {lang === 'en' ? 'Close & Contemplate' : 'ပိတ်ပြီး ဆင်ခြင်ရန်'}
                </button>
              </div>
            </div>
        </div>
      )}
    </section>
  );
};

export default Practices;