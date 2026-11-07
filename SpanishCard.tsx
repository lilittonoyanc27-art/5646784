import React, { useState } from 'react';
import { Volume2, Eye, EyeOff } from 'lucide-react';

interface SpanishCardProps {
  es: string | string[];
  am: string | string[];
  title?: string;
  titleAm?: string;
  category?: string;
  note?: string;
  forceShowAm?: boolean;
  isPoem?: boolean;
  className?: string;
}

export const SpanishCard: React.FC<SpanishCardProps> = ({
  es,
  am,
  title,
  titleAm,
  category,
  note,
  forceShowAm = false,
  isPoem = false,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  const showArmenian = forceShowAm || isOpen;

  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!('speechSynthesis' in window)) return;
    
    window.speechSynthesis.cancel();
    const textToSpeak = Array.isArray(es) ? es.join('. ') : es;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = 'es-ES';
    utterance.rate = 0.9;
    
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setIsOpen(!isOpen);
        }
      }}
      className={`group relative text-left w-full rounded-2xl border-2 transition-all duration-200 cursor-pointer overflow-hidden ${
        showArmenian
          ? 'bg-white border-orange-400 shadow-md ring-2 ring-orange-500/10'
          : 'bg-white hover:bg-orange-50/40 border-orange-200/90 hover:border-orange-400 shadow-xs'
      } ${className}`}
    >
      <div className="p-5 sm:p-6">
        {/* Top Header metadata */}
        <div className="flex items-center justify-between gap-3 mb-3 text-xs sm:text-sm text-slate-600">
          <div className="flex items-center gap-2 flex-wrap">
            {category && (
              <span className="font-bold text-orange-800 bg-orange-100/80 px-2.5 py-0.5 rounded-md">
                {category}
              </span>
            )}
            {title && (
              <>
                {category && <span aria-hidden="true" className="text-slate-300">·</span>}
                <span className="font-semibold text-slate-800">{title}</span>
              </>
            )}
            {titleAm && showArmenian && (
              <>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span className="text-orange-900 font-semibold">{titleAm}</span>
              </>
            )}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handleSpeak}
              title="Լսել իսպաներեն արտասանությունը (Escuchar)"
              aria-label="Escuchar pronunciación"
              className={`p-2 rounded-xl text-slate-500 hover:text-orange-700 hover:bg-orange-100 transition-colors ${
                isSpeaking ? 'text-orange-700 bg-orange-100 animate-pulse' : ''
              }`}
            >
              <Volume2 className="w-5 h-5" />
            </button>

            <span className={`flex items-center gap-1.5 text-xs sm:text-sm font-semibold px-3 py-1 rounded-lg border transition-all ${
              showArmenian
                ? 'bg-orange-600 text-white border-orange-600 shadow-xs'
                : 'bg-orange-50 text-orange-900 border-orange-200 group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-600'
            }`}>
              {showArmenian ? (
                <>
                  <EyeOff className="w-4 h-4" />
                  <span>Թաքցնել</span>
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4" />
                  <span>Սեղմի՛ր թարգմանության համար</span>
                </>
              )}
            </span>
          </div>
        </div>

        {/* Spanish text (larger and high contrast) */}
        <div className="space-y-1.5">
          {Array.isArray(es) ? (
            <div className={`space-y-1.5 ${isPoem ? 'italic pl-3 border-l-4 border-orange-400 font-serif-literary text-lg sm:text-xl text-slate-950 font-medium' : 'text-slate-900 text-base sm:text-lg leading-relaxed font-semibold'}`}>
              {es.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          ) : (
            <p className={`text-slate-900 font-semibold leading-relaxed ${isPoem ? 'italic font-serif-literary text-lg sm:text-xl' : 'text-base sm:text-lg'}`}>
              {es}
            </p>
          )}
        </div>

        {/* Armenian translation revealed */}
        {showArmenian && (
          <div className="mt-4 pt-4 border-t-2 border-orange-200 bg-orange-50/70 -mx-5 -mb-5 sm:-mx-6 sm:-mb-6 p-5 sm:p-6 transition-all">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-orange-950 mb-2 tracking-wide uppercase">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500 inline-block"></span>
              <span>ՀԱՅԵՐԵՆ ԹԱՐԳՄԱՆՈՒԹՅՈՒՆ</span>
            </div>
            {Array.isArray(am) ? (
              <div className="space-y-1.5 text-slate-900 text-base sm:text-lg leading-relaxed font-normal">
                {am.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            ) : (
              <p className="text-slate-900 text-base sm:text-lg font-normal leading-relaxed">
                {am}
              </p>
            )}
            {note && (
              <div className="mt-3 text-xs sm:text-sm text-orange-950 bg-white/90 p-3 rounded-xl border border-orange-300 shadow-2xs">
                💡 <span className="font-semibold">{note}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
