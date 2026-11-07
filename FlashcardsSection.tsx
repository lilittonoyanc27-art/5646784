import React, { useState } from 'react';
import { LITERARY_DATA } from './data';
import { RotateCw, Volume2, ChevronLeft, ChevronRight, CheckCircle2, Shuffle } from 'lucide-react';

export const FlashcardsSection: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [masteredCards, setMasteredCards] = useState<Record<string, boolean>>({});

  const cards = LITERARY_DATA.resumenMemorizar.flashcards;
  const currentCard = cards[currentIdx];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIdx((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIdx((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    const randomIdx = Math.floor(Math.random() * cards.length);
    setCurrentIdx(randomIdx);
  };

  const toggleMastered = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setMasteredCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const speakText = (text: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = 'es-ES';
    utt.rate = 0.9;
    window.speechSynthesis.speak(utt);
  };

  const masteredCount = Object.values(masteredCards).filter(Boolean).length;

  return (
    <div className="space-y-8">
      {/* 3 Core Rules Banner */}
      <div className="bg-white rounded-2xl border-2 border-orange-200 p-6 sm:p-8 shadow-xs">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs sm:text-sm font-extrabold text-orange-800 tracking-wider uppercase bg-orange-100 px-3 py-1 rounded-full inline-block">
            Ոսկե կանոն քննության համար
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2 font-serif-literary">
            Քննության համար ամենահեշտ հիշելու կանոնը
          </h3>
          <p className="text-sm sm:text-base text-slate-600 mt-1 font-medium">
            Երեք բառ, որոնք արտացոլում են յուրաքանչյուր ժանրի բուն էությունը
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {LITERARY_DATA.resumenMemorizar.reglaFacil.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border-2 border-orange-300 bg-gradient-to-br from-orange-50 via-white to-orange-100/40 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-black text-orange-900 uppercase tracking-wider">
                    {item.generoEs}
                  </span>
                  <span className="text-xs font-bold text-slate-600">
                    {item.generoAm}
                  </span>
                </div>
                <div className="flex items-baseline gap-2.5 my-3">
                  <span className="text-3xl sm:text-4xl font-extrabold text-orange-950 font-serif-literary">
                    {item.verboEs}
                  </span>
                  <span className="text-xl sm:text-2xl font-bold text-orange-800">
                    → {item.verboAm}
                  </span>
                </div>
              </div>
              <p className="text-sm text-slate-700 mt-3 pt-3 border-t border-orange-200 font-medium">
                {item.detalleEs}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 p-5 bg-orange-100/70 rounded-2xl border-2 border-orange-300 text-sm sm:text-base text-orange-950 font-medium leading-relaxed">
          💡 <span className="font-bold">{LITERARY_DATA.resumenMemorizar.consejoFinalAm}</span>
        </div>
      </div>

      {/* Interactive 3D Flashcards Box */}
      <div className="bg-white rounded-2xl border-2 border-orange-200 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-orange-100">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-serif-literary">
              Ինտերակտիվ ուսումնական քարտեր (Tarjetas de Memoria)
            </h3>
            <p className="text-sm sm:text-base text-slate-600 mt-1 font-medium">
              Սեղմեք քարտի վրա՝ շրջելու և պատասխանը ստուգելու համար։
            </p>
          </div>

          <div className="flex items-center gap-4 text-sm font-bold">
            <span className="text-slate-700 bg-orange-50 px-3 py-1.5 rounded-xl border border-orange-200">
              Սովորած՝ <strong className="text-emerald-700 tabular-nums">{masteredCount}</strong> / {cards.length}
            </span>
            <button
              onClick={handleShuffle}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-orange-950 hover:text-white hover:bg-orange-600 bg-orange-100 rounded-xl border border-orange-300 transition-colors cursor-pointer"
              title="Խառնել քարտերը"
            >
              <Shuffle className="w-4 h-4" />
              <span>Խառնել</span>
            </button>
          </div>
        </div>

        {/* The Card */}
        <div className="mt-8 max-w-2xl mx-auto">
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                setIsFlipped(!isFlipped);
              }
            }}
            className={`min-h-[300px] p-7 sm:p-9 rounded-3xl border-3 transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-md ${
              isFlipped
                ? 'bg-orange-50 border-orange-500 ring-4 ring-orange-500/15'
                : 'bg-white border-orange-200 hover:border-orange-400'
            }`}
          >
            {/* Top row */}
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs sm:text-sm font-extrabold text-orange-900 tracking-wider uppercase bg-orange-200/70 px-3 py-1 rounded-lg">
                {currentCard.titleEs} · {currentCard.titleAm}
              </span>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={(e) => speakText(isFlipped ? currentCard.backEs : currentCard.frontEs, e)}
                  title="Լսել իսպաներեն"
                  className="p-2 rounded-xl text-orange-700 hover:text-orange-950 hover:bg-white transition-colors"
                >
                  <Volume2 className="w-5 h-5" />
                </button>

                <button
                  type="button"
                  onClick={(e) => toggleMastered(currentCard.id, e)}
                  title="Նշել որպես սովորած"
                  className={`p-2 rounded-xl transition-colors ${
                    masteredCards[currentCard.id]
                      ? 'text-emerald-700 bg-emerald-100'
                      : 'text-slate-300 hover:text-emerald-600 hover:bg-slate-100'
                  }`}
                >
                  <CheckCircle2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content: Front or Back */}
            <div className="my-8 text-center space-y-4">
              {!isFlipped ? (
                <>
                  <div className="text-xs font-bold text-orange-800 uppercase tracking-widest">
                    Հարց (Español)
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-slate-950 leading-snug">
                    {currentCard.frontEs}
                  </h4>
                  <p className="text-base sm:text-lg text-slate-700 font-medium">
                    {currentCard.frontAm}
                  </p>
                </>
              ) : (
                <>
                  <div className="text-xs font-bold text-orange-900 uppercase tracking-widest">
                    Պատասխան & Բացատրություն
                  </div>
                  <p className="text-base sm:text-xl font-bold text-slate-950 leading-relaxed">
                    {currentCard.backEs}
                  </p>
                  <p className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed pt-3 border-t border-orange-200">
                    {currentCard.backAm}
                  </p>
                  <div className="pt-3">
                    <span className="inline-block text-sm sm:text-base font-black text-orange-950 bg-orange-200 px-4 py-1.5 rounded-xl border border-orange-300">
                      {currentCard.keyFormula}
                    </span>
                  </div>
                </>
              )}
            </div>

            {/* Bottom prompt to flip */}
            <div className="flex items-center justify-between text-xs sm:text-sm text-slate-500 pt-4 border-t border-orange-200 font-semibold">
              <span className="font-mono tabular-nums text-slate-700">
                {currentIdx + 1} / {cards.length}
              </span>
              <span className="flex items-center gap-1.5 font-bold text-orange-900">
                <RotateCw className="w-4 h-4" />
                {isFlipped ? 'Սեղմի՛ր հարցին վերադառնալու համար' : 'Սեղմի՛ր պատասխանը տեսնելու համար'}
              </span>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={handlePrev}
              className="flex items-center gap-2 px-5 py-3 text-sm sm:text-base font-bold text-slate-800 bg-white hover:bg-orange-50 border-2 border-orange-200 rounded-xl transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 text-orange-700" /> Նախորդ
            </button>

            <span className="text-xs sm:text-sm text-slate-500 font-medium">
              Տարածք/Enter՝ շրջելու համար
            </span>

            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-6 py-3 text-sm sm:text-base font-bold text-white bg-orange-600 hover:bg-orange-700 rounded-xl transition-colors shadow-md cursor-pointer"
            >
              Հաջորդ <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
