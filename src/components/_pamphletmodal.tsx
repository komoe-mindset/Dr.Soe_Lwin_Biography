
import React from 'react';
import { X, Printer, FileText } from 'lucide-react';
import { PAMPHLET_HTML_CONTENT } from '../_constants';

interface PamphletModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'mm';
}

const PamphletModal: React.FC<PamphletModalProps> = ({ isOpen, onClose, lang }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    const frame = document.getElementById('pamphlet-frame') as HTMLIFrameElement;
    if (frame && frame.contentWindow) {
      frame.contentWindow.focus();
      frame.contentWindow.print();
    }
  };

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-0 md:p-6 lg:p-12 animate-in fade-in duration-300">
      <div 
        className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
        onClick={onClose}
      ></div>
      
      <div className="relative w-full h-full max-w-5xl bg-white md:rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-300 border border-white/10">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-white z-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-600 text-white rounded-xl flex items-center justify-center shadow-lg shadow-amber-600/20">
              <FileText size={20} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 leading-none">
                {lang === 'en' ? 'Organization Pamphlet' : 'အဖွဲ့၏ လက်ကမ်းစာစောင်'}
              </h3>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">
                {lang === 'en' ? 'Internal Document Viewer' : 'စာရွက်စာတမ်း ကြည့်ရှုနည်း'}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={handlePrint}
              className="p-2.5 rounded-xl text-slate-500 hover:bg-slate-100 transition-colors"
              title="Print Document"
            >
              <Printer size={20} />
            </button>
            <button 
              onClick={onClose}
              className="ml-2 p-2.5 bg-slate-100 rounded-xl text-slate-900 hover:bg-red-50 hover:text-red-600 transition-all active:scale-95"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Content Container */}
        <div className="flex-1 bg-slate-100 overflow-hidden flex flex-col">
          <iframe
            id="pamphlet-frame"
            srcDoc={PAMPHLET_HTML_CONTENT}
            className="flex-1 w-full h-full border-0"
            title="Dhammalann Pamphlet Content"
          />
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-white border-t border-slate-100 flex justify-center">
           <p className="text-[9px] text-slate-400 font-bold uppercase tracking-[0.4em]">
             Visuddhimag Dhammalann Archive • Interactive Reader
           </p>
        </div>
      </div>
    </div>
  );
};

export default PamphletModal;
