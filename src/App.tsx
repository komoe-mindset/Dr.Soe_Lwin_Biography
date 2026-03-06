import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Coffee, Wind, Zap, Heart, Info, ChevronRight, ChevronLeft, RefreshCw } from 'lucide-react';

type Step = {
  title: string;
  paramattha: string;
  pannatti: string;
  icon: React.ReactNode;
  color: string;
};

const steps: Step[] = [
  {
    title: "အနံ့ခံခြင်း (Smelling)",
    paramattha: "နှာခေါင်းမှာ အနံ့ဓာတ်နဲ့ ထိတွေ့မှု ပေါ်လာတာဟာ ရုပ်၊ သိတာက နာမ် ပါ ။",
    pannatti: "\"ကော်ဖီနံ့လေးက မွှေးလိုက်တာ\" လို့ အမည်တပ်တာဟာ သညာ (Sanna) ပါ ။",
    icon: <Wind className="w-8 h-8" />,
    color: "bg-amber-100 text-amber-900"
  },
  {
    title: "ကျိုက်ခြင်း (Sipping)",
    paramattha: "လျှာပေါ်မှာ ပူတဲ့သဘော (တေဇော) နဲ့ ခါးတဲ့သဘော (ရသာရုံ) ပေါ်လာတာဟာ ရှေ့စိတ် ပါ ။",
    pannatti: "\"ကော်ဖီက ပူတယ်၊ ခါးတယ်\" လို့ သိတာက နောက်စိတ် ပါ ။",
    icon: <Zap className="w-8 h-8" />,
    color: "bg-orange-100 text-orange-900"
  },
  {
    title: "ခံစားခြင်း (Feeling)",
    paramattha: "ကောင်းတဲ့အရသာကြောင့် ပေါ်လာတဲ့ ခံစားမှုဟာ သုခဝေဒနာ မျှသာဖြစ်ပါတယ် ။",
    pannatti: "\"ဒီကော်ဖီလေး သောက်ရတာ ငါ အရမ်းကျေနပ်တယ်\" လို့ သိမ်းပိုက်တာဟာ လောဘ (Loba) ပါ ။",
    icon: <Heart className="w-8 h-8" />,
    color: "bg-rose-100 text-rose-900"
  }
];

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(-1); // -1 is intro

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(steps.length); // Summary
    }
  };

  const prevStep = () => {
    if (currentStep > -1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const reset = () => setCurrentStep(-1);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 selection:bg-amber-200">
      <div className="max-w-2xl w-full">
        <AnimatePresence mode="wait">
          {currentStep === -1 && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center space-y-8"
            >
              <div className="inline-block p-4 bg-amber-50 rounded-full mb-4">
                <Coffee className="w-12 h-12 text-amber-700" />
              </div>
              <h1 className="serif text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                ကော်ဖီသောက်ခြင်း <br /> ဝိပဿနာကျင့်စဉ်
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-lg mx-auto">
                မင်္ဂလာပါ ဓမ္မမိတ်ဆွေ။ ကော်ဖီသောက်ရင်း တရားမှတ်တယ်ဆိုတာ လောက (Loka) ရဲ့ အရသာကို ခံစားရုံတင် မဟုတ်ဘဲ ဓမ္မ (Dhamma) ရဲ့ အရှိတရားကို ရှာဖွေတဲ့ လက်တွေ့ကျင့်စဉ်တစ်ခုပါ ။
              </p>
              <button
                onClick={nextStep}
                className="group flex items-center gap-2 mx-auto px-8 py-4 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl"
              >
                ကျင့်စဉ်စတင်ရန်
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          )}

          {currentStep >= 0 && currentStep < steps.length && (
            <motion.div
              key={`step-${currentStep}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="space-y-8"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-2xl ${steps[currentStep].color}`}>
                    {steps[currentStep].icon}
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Step {currentStep + 1} of 3</span>
                    <h2 className="text-2xl font-bold text-slate-900">{steps[currentStep].title}</h2>
                  </div>
                </div>
              </div>

              <div className="grid gap-6">
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-3 text-emerald-600">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-sm font-bold uppercase tracking-wider">ရှေ့စိတ် (Paramattha - Reality)</span>
                  </div>
                  <p className="text-xl text-slate-800 leading-relaxed">
                    {steps[currentStep].paramattha}
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 opacity-80">
                  <div className="flex items-center gap-2 mb-3 text-slate-500">
                    <div className="w-2 h-2 rounded-full bg-slate-400" />
                    <span className="text-sm font-bold uppercase tracking-wider">နောက်စိတ် (Paññatti - Identity)</span>
                  </div>
                  <p className="text-lg text-slate-600 italic">
                    {steps[currentStep].pannatti}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-8">
                <button
                  onClick={prevStep}
                  className="flex items-center gap-2 px-6 py-3 text-slate-500 hover:text-slate-900 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                  နောက်သို့
                </button>
                <button
                  onClick={nextStep}
                  className="flex items-center gap-2 px-8 py-3 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all shadow-lg"
                >
                  {currentStep === steps.length - 1 ? "အနှစ်ချုပ်ကြည့်ရန်" : "ရှေ့သို့"}
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}

          {currentStep === steps.length && (
            <motion.div
              key="summary"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="space-y-8"
            >
              <div className="text-center mb-12">
                <div className="inline-block p-4 bg-emerald-50 rounded-full mb-4">
                  <Info className="w-10 h-10 text-emerald-600" />
                </div>
                <h2 className="serif text-3xl font-bold text-slate-900">ဆရာကြီးရဲ့ လမ်းညွှန်ချက် အနှစ်ချုပ်</h2>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: "\"ငါ\" မဟုတ်ကြောင်း ဆင်ခြင်ပါ",
                    desc: "ကော်ဖီသောက်နေတာဟာ \"ငါ\" မဟုတ်ဘဲ အကြောင်းတိုက်ဆိုင်လို့ ပေါ်လာတဲ့ ရုပ်နာမ် ဖြစ်စဉ်မျှသာ ဖြစ်ပါတယ် ။"
                  },
                  {
                    title: "ဝေဒနာကို ဝေဒနာဟုသိပါ",
                    desc: "ကော်ဖီက ကောင်းတာမဟုတ်ဘဲ ကော်ဖီကပေးတဲ့ ဝေဒနာ ကသာ ကောင်းတာဖြစ်ကြောင်း သတိပြုပါ ။"
                  },
                  {
                    title: "ဥပါဒါန်ကို သတိနဲ့ပယ်ပါ",
                    desc: "\"ထပ်သောက်ချင်သေးတယ်\" ဆိုတဲ့ စွဲလမ်းမှု ဥပါဒါန် (Clinging) ပေါ်လာရင် \"စွဲနေပြီ\" လို့ သတိပြုလိုက်တာနဲ့ အဲဒီကိလေသာဟာ ချုပ်ငြိမ်းသွားမှာ ဖြစ်ပါတယ် ။"
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"
                  >
                    <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-900 text-white text-xs">{i + 1}</span>
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              <div className="bg-amber-50 p-8 rounded-3xl border border-amber-100 mt-8 text-center">
                <p className="text-amber-900 font-medium italic leading-relaxed">
                  "ဒီလို သတိနဲ့သောက်ခြင်းအားဖြင့် ကံကုသိုလ် (ကော်ဖီသောက်ခြင်း) အပေါ်မှာ ဉာဏ်ကုသိုလ် (ရုပ်နာမ်ခွဲခြားသိခြင်း) ဆင့်ပြီး နိဗ္ဗာန်ဆီကို ဦးတည်နိုင်ပါတယ် ။"
                </p>
                <div className="mt-6 pt-6 border-t border-amber-200">
                  <p className="text-slate-700">
                    ဓမ္မမိတ်ဆွေအနေနဲ့ ကော်ဖီသောက်တဲ့အခါ လျှာပေါ်မှာ ပေါ်လာတဲ့ "ခါးတဲ့သဘော" ကို "ကော်ဖီ" လို့ အမည်မတပ်ဘဲ သိမှု (Awareness) သက်သက်နဲ့ ရှုမှတ်ကြည့်နိုင်မလား?
                  </p>
                </div>
              </div>

              <div className="flex justify-center pt-8">
                <button
                  onClick={reset}
                  className="flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all shadow-xl"
                >
                  <RefreshCw className="w-5 h-5" />
                  ပြန်လည်စတင်ရန်
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <footer className="fixed bottom-8 text-slate-400 text-sm font-medium tracking-widest uppercase">
        Dr. Soe Lwin (Mandalay) • Dhamma Path
      </footer>
    </div>
  );
};

export default App;
