import React, { useState } from 'react';
import { LITERARY_DATA } from './data';
import { CheckCircle2, XCircle, RotateCcw, ChevronDown, ChevronUp, Volume2 } from 'lucide-react';

export const ExerciseSection: React.FC<{ forceShowAllAm?: boolean }> = () => {
  const [activeTab, setActiveTab] = useState<'ej1' | 'ej2' | 'ej3'>('ej1');

  // Exercise 1 State
  const [e1Answers, setE1Answers] = useState<Record<number, 'Lírica' | 'Narrativa' | 'Teatro' | null>>({});
  const [e1Submitted, setE1Submitted] = useState<boolean>(false);

  // Exercise 2 State
  const [e2Answers, setE2Answers] = useState<Record<number, boolean | null>>({});
  const [e2Submitted, setE2Submitted] = useState<boolean>(false);

  // Exercise 3 State (Open questions)
  const [e3StudentNotes, setE3StudentNotes] = useState<Record<number, string>>({});
  const [e3Revealed, setE3Revealed] = useState<Record<number, boolean>>({});

  // Helpers for Exercise 1
  const handleSelectE1 = (questionId: number, genre: 'Lírica' | 'Narrativa' | 'Teatro') => {
    setE1Answers(prev => ({ ...prev, [questionId]: genre }));
  };

  const getE1Score = () => {
    let score = 0;
    LITERARY_DATA.ejercicio1.forEach(q => {
      if (e1Answers[q.id] === q.correctGenre) {
        score++;
      }
    });
    return score;
  };

  const resetE1 = () => {
    setE1Answers({});
    setE1Submitted(false);
  };

  // Helpers for Exercise 2
  const handleSelectE2 = (questionId: number, value: boolean) => {
    setE2Answers(prev => ({ ...prev, [questionId]: value }));
  };

  const getE2Score = () => {
    let score = 0;
    LITERARY_DATA.ejercicio2.forEach(q => {
      if (e2Answers[q.id] === q.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  const resetE2 = () => {
    setE2Answers({});
    setE2Submitted(false);
  };

  const toggleRevealE3 = (id: number) => {
    setE3Revealed(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const speakText = (text: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = 'es-ES';
    utt.rate = 0.9;
    window.speechSynthesis.speak(utt);
  };

  return (
    <div className="space-y-8">
      {/* Exercise Navigation Tabs (Orange Theme, Larger Font) */}
      <div className="bg-white p-2.5 rounded-2xl border-2 border-orange-200 shadow-xs flex flex-wrap gap-2.5">
        <button
          onClick={() => setActiveTab('ej1')}
          className={`flex-1 min-w-[220px] py-3 px-5 text-sm sm:text-base font-bold rounded-xl transition-all ${
            activeTab === 'ej1'
              ? 'bg-orange-600 text-white shadow-sm'
              : 'text-slate-700 hover:text-orange-900 hover:bg-orange-50'
          }`}
        >
          Վարժություն 1 · Identifica el género (6 հարց)
        </button>
        <button
          onClick={() => setActiveTab('ej2')}
          className={`flex-1 min-w-[220px] py-3 px-5 text-sm sm:text-base font-bold rounded-xl transition-all ${
            activeTab === 'ej2'
              ? 'bg-orange-600 text-white shadow-sm'
              : 'text-slate-700 hover:text-orange-900 hover:bg-orange-50'
          }`}
        >
          Վարժություն 2 · Verdadero o falso (8 հարց)
        </button>
        <button
          onClick={() => setActiveTab('ej3')}
          className={`flex-1 min-w-[220px] py-3 px-5 text-sm sm:text-base font-bold rounded-xl transition-all ${
            activeTab === 'ej3'
              ? 'bg-orange-600 text-white shadow-sm'
              : 'text-slate-700 hover:text-orange-900 hover:bg-orange-50'
          }`}
        >
          Վարժություն 3 · Preguntas abiertas (8 հարց)
        </button>
      </div>

      {/* ============================================================== */}
      {/* EJERCICIO 1: IDENTIFICA EL GÉNERO */}
      {/* ============================================================== */}
      {activeTab === 'ej1' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border-2 border-orange-200 p-6 sm:p-8 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-orange-100">
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-serif-literary">
                  Ejercicio 1. Identifica el género literario — Որոշի՛ր գրական ժանրը
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mt-1 font-medium">
                  Կարդացեք տեքստերը և ընտրեք համապատասխան գրական ժանրը (Lírica, Narrativa, Teatro):
                </p>
              </div>

              <div className="flex items-center gap-4 bg-orange-50 px-4 py-2 rounded-xl border border-orange-200">
                <div className="text-right">
                  <span className="text-xs text-orange-800 font-bold uppercase tracking-wider block">Միավորներ</span>
                  <span className="text-2xl font-mono font-bold text-orange-900 tabular-nums">
                    {e1Submitted ? `${getE1Score()} / ${LITERARY_DATA.ejercicio1.length}` : `${Object.values(e1Answers).filter(Boolean).length} / ${LITERARY_DATA.ejercicio1.length}`}
                  </span>
                </div>
                <button
                  onClick={resetE1}
                  className="p-2.5 text-orange-700 hover:text-orange-900 hover:bg-orange-200/60 rounded-xl transition-colors"
                  title="Վերագործարկել թեստը"
                >
                  <RotateCcw className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Questions list */}
            <div className="mt-8 space-y-8">
              {LITERARY_DATA.ejercicio1.map((q, idx) => {
                const selected = e1Answers[q.id];
                const isCorrect = selected === q.correctGenre;

                return (
                  <div
                    key={q.id}
                    className={`p-6 sm:p-7 rounded-2xl border-2 transition-all ${
                      e1Submitted
                        ? isCorrect
                          ? 'bg-emerald-50/60 border-emerald-400'
                          : 'bg-rose-50/60 border-rose-400'
                        : 'bg-orange-50/30 border-orange-200 hover:border-orange-300'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3 mb-4 text-sm font-bold text-slate-700">
                      <span className="bg-orange-100 text-orange-900 px-3 py-1 rounded-lg">
                        Հարց {idx + 1} / 6 · Lee el texto — Կարդա՛ տեքստը
                      </span>
                      {e1Submitted && (
                        <span
                          className={`font-bold text-base flex items-center gap-1.5 ${
                            isCorrect ? 'text-emerald-700' : 'text-rose-700'
                          }`}
                        >
                          {isCorrect ? (
                            <>
                              <CheckCircle2 className="w-5 h-5" /> Ճիշտ է (Correcto)
                            </>
                          ) : (
                            <>
                              <XCircle className="w-5 h-5" /> Սխալ է (Incorrecto)
                            </>
                          )}
                        </span>
                      )}
                    </div>

                    {/* Excerpt with Click-to-Listen */}
                    <div className="bg-white p-5 sm:p-6 rounded-xl border border-orange-200 shadow-xs mb-5">
                      <div className="flex items-start justify-between gap-4">
                        <div className="font-serif-literary text-lg sm:text-2xl text-slate-950 italic leading-relaxed font-semibold">
                          {q.textEs.map((line, lIdx) => (
                            <p key={lIdx}>{line}</p>
                          ))}
                        </div>
                        <button
                          type="button"
                          onClick={() => speakText(q.textEs.join(' '))}
                          title="Լսել արտասանությունը"
                          className="p-2 rounded-xl text-orange-600 hover:text-orange-900 hover:bg-orange-50 transition-colors shrink-0"
                        >
                          <Volume2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    {/* Choice Buttons */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                      {(['Lírica', 'Narrativa', 'Teatro'] as const).map(genre => {
                        const isThisSelected = selected === genre;
                        let btnStyle = 'bg-white border-orange-200 text-slate-800 hover:border-orange-500 hover:bg-orange-50';

                        if (e1Submitted) {
                          if (genre === q.correctGenre) {
                            btnStyle = 'bg-emerald-600 text-white border-emerald-600 font-bold shadow-md';
                          } else if (isThisSelected && !isCorrect) {
                            btnStyle = 'bg-rose-600 text-white border-rose-600 font-bold';
                          } else {
                            btnStyle = 'bg-white text-slate-400 border-slate-200 opacity-60';
                          }
                        } else if (isThisSelected) {
                          btnStyle = 'bg-orange-600 text-white border-orange-600 font-bold shadow-md';
                        }

                        return (
                          <button
                            key={genre}
                            type="button"
                            disabled={e1Submitted}
                            onClick={() => handleSelectE1(q.id, genre)}
                            className={`py-3 px-4 text-base rounded-xl border-2 transition-all text-center flex flex-col items-center justify-center gap-0.5 cursor-pointer ${btnStyle}`}
                          >
                            <span className="font-bold">{genre}</span>
                            <span className="text-xs opacity-90">
                              {genre === 'Lírica' ? '(Քնարերգություն)' : genre === 'Narrativa' ? '(Պատմողական)' : '(Թատերգություն)'}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Feedback and explanation */}
                    {e1Submitted && (
                      <div className="mt-5 pt-4 border-t-2 border-slate-200 text-sm sm:text-base space-y-1.5 bg-white p-4 rounded-xl">
                        <p className="font-bold text-slate-900">
                          {q.explanationEs}
                        </p>
                        <p className="text-slate-700 font-medium">
                          {q.explanationAm}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Actions */}
            <div className="mt-10 pt-6 border-t-2 border-orange-200 flex flex-wrap items-center justify-between gap-4">
              {!e1Submitted ? (
                <button
                  type="button"
                  onClick={() => setE1Submitted(true)}
                  disabled={Object.values(e1Answers).filter(Boolean).length === 0}
                  className="px-8 py-3.5 bg-orange-600 text-white font-bold text-base rounded-xl hover:bg-orange-700 transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  Comprobar — Ստուգել պատասխանները
                </button>
              ) : (
                <div className="flex items-center gap-5">
                  <div className="text-base sm:text-lg font-bold text-slate-900">
                    Արդյունք՝ <span className="text-orange-700 font-black">{getE1Score()}</span> 6-ից ({Math.round((getE1Score() / 6) * 100)}%)
                  </div>
                  <button
                    type="button"
                    onClick={resetE1}
                    className="px-5 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-slate-800 transition-colors shadow-xs cursor-pointer"
                  >
                    Կրկին փորձել
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* EJERCICIO 2: VERDADERO O FALSO */}
      {/* ============================================================== */}
      {activeTab === 'ej2' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border-2 border-orange-200 p-6 sm:p-8 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-orange-100">
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-serif-literary">
                  Ejercicio 2. Verdadero o falso — Ճիշտ է, թե սխալ
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mt-1 font-medium">
                  Որոշեք՝ պնդումը ճիշտ է (Verdadero), թե սխալ (Falso): Լսեք արտասանությունը և ընտրեք պատասխանը։
                </p>
              </div>

              <div className="flex items-center gap-4 bg-orange-50 px-4 py-2 rounded-xl border border-orange-200">
                <div className="text-right">
                  <span className="text-xs text-orange-800 font-bold uppercase tracking-wider block">Միավորներ</span>
                  <span className="text-2xl font-mono font-bold text-orange-900 tabular-nums">
                    {e2Submitted ? `${getE2Score()} / ${LITERARY_DATA.ejercicio2.length}` : `${Object.values(e2Answers).filter(v => v !== null && v !== undefined).length} / ${LITERARY_DATA.ejercicio2.length}`}
                  </span>
                </div>
                <button
                  onClick={resetE2}
                  className="p-2.5 text-orange-700 hover:text-orange-900 hover:bg-orange-200/60 rounded-xl transition-colors"
                  title="Վերագործարկել թեստը"
                >
                  <RotateCcw className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="mt-8 space-y-5">
              {LITERARY_DATA.ejercicio2.map((q, idx) => {
                const userChoice = e2Answers[q.id];
                const isCorrect = userChoice === q.correctAnswer;

                return (
                  <div
                    key={q.id}
                    className={`p-5 sm:p-6 rounded-2xl border-2 transition-all ${
                      e2Submitted
                        ? isCorrect
                          ? 'bg-emerald-50/60 border-emerald-400'
                          : 'bg-rose-50/60 border-rose-400'
                        : 'bg-white border-orange-200 hover:border-orange-300'
                    }`}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-5">
                      <div className="flex-1 space-y-1.5">
                        <div className="flex items-center gap-2 text-xs font-bold text-orange-800 uppercase tracking-wide">
                          <span>Պնդում {idx + 1}</span>
                          <button
                            type="button"
                            onClick={() => speakText(q.statementEs)}
                            className="p-1 hover:text-orange-700 rounded-lg text-slate-400"
                            title="Լսել իսպաներեն"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-base sm:text-lg font-bold text-slate-950">
                          {q.statementEs}
                        </p>
                        <p className="text-sm sm:text-base text-slate-700 font-medium">
                          {q.statementAm}
                        </p>
                      </div>

                      {/* True / False Buttons */}
                      <div className="flex items-center gap-2.5 shrink-0">
                        <button
                          type="button"
                          disabled={e2Submitted}
                          onClick={() => handleSelectE2(q.id, true)}
                          className={`px-4 py-2.5 text-sm sm:text-base font-bold rounded-xl border-2 transition-all cursor-pointer ${
                            e2Submitted
                              ? q.correctAnswer === true
                                ? 'bg-emerald-600 text-white border-emerald-600 shadow-md'
                                : userChoice === true
                                ? 'bg-rose-600 text-white border-rose-600'
                                : 'bg-slate-100 text-slate-400 border-slate-200 opacity-60'
                              : userChoice === true
                              ? 'bg-orange-600 text-white border-orange-600 shadow-md'
                              : 'bg-white text-slate-800 border-orange-200 hover:bg-orange-50'
                          }`}
                        >
                          Verdadero (Ճիշտ)
                        </button>
                        <button
                          type="button"
                          disabled={e2Submitted}
                          onClick={() => handleSelectE2(q.id, false)}
                          className={`px-4 py-2.5 text-sm sm:text-base font-bold rounded-xl border-2 transition-all cursor-pointer ${
                            e2Submitted
                              ? q.correctAnswer === false
                                ? 'bg-emerald-600 text-white border-emerald-600 shadow-md'
                                : userChoice === false
                                ? 'bg-rose-600 text-white border-rose-600'
                                : 'bg-slate-100 text-slate-400 border-slate-200 opacity-60'
                              : userChoice === false
                              ? 'bg-orange-600 text-white border-orange-600 shadow-md'
                              : 'bg-white text-slate-800 border-orange-200 hover:bg-orange-50'
                          }`}
                        >
                          Falso (Սխալ)
                        </button>
                      </div>
                    </div>

                    {e2Submitted && (
                      <div className="mt-4 pt-4 border-t-2 border-slate-200 text-sm sm:text-base space-y-1 bg-white p-3.5 rounded-xl">
                        <p className="font-bold text-slate-900">{q.explanationEs}</p>
                        <p className="text-slate-700 font-medium">{q.explanationAm}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-10 pt-6 border-t-2 border-orange-200 flex flex-wrap items-center justify-between gap-4">
              {!e2Submitted ? (
                <button
                  type="button"
                  onClick={() => setE2Submitted(true)}
                  disabled={Object.values(e2Answers).filter(v => v !== null && v !== undefined).length === 0}
                  className="px-8 py-3.5 bg-orange-600 text-white font-bold text-base rounded-xl hover:bg-orange-700 transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  Comprobar respuestas — Ստուգել պատասխանները
                </button>
              ) : (
                <div className="flex items-center gap-5">
                  <div className="text-base sm:text-lg font-bold text-slate-900">
                    Արդյունք՝ <span className="text-orange-700 font-black">{getE2Score()}</span> 8-ից ({Math.round((getE2Score() / 8) * 100)}%)
                  </div>
                  <button
                    type="button"
                    onClick={resetE2}
                    className="px-5 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-slate-800 transition-colors shadow-xs cursor-pointer"
                  >
                    Կրկին փորձել
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* EJERCICIO 3: PREGUNTAS ABIERTAS */}
      {/* ============================================================== */}
      {activeTab === 'ej3' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border-2 border-orange-200 p-6 sm:p-8 shadow-xs">
            <div className="pb-5 border-b border-orange-100">
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-serif-literary">
                Ejercicio 3. Preguntas abiertas — Բաց հարցեր
              </h3>
              <p className="text-sm sm:text-base text-slate-600 mt-1 font-medium">
                Աշակերտը պետք է փորձի պատասխանել իսպաներեն՝ առանց պատասխանները նախապես կարդալու։ Գրեք ձեր նշումը և սեղմեք «Տեսնել մոդելային պատասխանը»։
              </p>
            </div>

            <div className="mt-8 space-y-7">
              {LITERARY_DATA.ejercicio3.map((q, idx) => {
                const isRevealed = e3Revealed[q.id] || false;

                return (
                  <div
                    key={q.id}
                    className="p-6 sm:p-7 rounded-2xl border-2 border-orange-200 bg-orange-50/20 space-y-4"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-xs font-bold text-orange-800 uppercase tracking-wider mb-1">
                          Հարց {idx + 1}
                        </div>
                        <h4 className="text-lg sm:text-xl font-bold text-slate-950">
                          {q.questionEs}
                        </h4>
                        <p className="text-sm sm:text-base text-slate-700 mt-1 font-medium">
                          {q.questionAm}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => speakText(q.questionEs)}
                        className="p-2 rounded-xl text-orange-600 hover:text-orange-900 hover:bg-white transition-colors shrink-0"
                        title="Լսել հարցը"
                      >
                        <Volume2 className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Student note practice area */}
                    <div>
                      <textarea
                        value={e3StudentNotes[q.id] || ''}
                        onChange={(e) =>
                          setE3StudentNotes(prev => ({ ...prev, [q.id]: e.target.value }))
                        }
                        placeholder="Փորձեք գրել ձեր պատասխանը իսպաներեն այստեղ... (Escribe aquí tu respuesta en español)"
                        rows={2}
                        className="w-full text-sm sm:text-base p-4 rounded-xl border-2 border-orange-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all placeholder:text-slate-400"
                      />
                    </div>

                    {/* Reveal Button */}
                    <div>
                      <button
                        type="button"
                        onClick={() => toggleRevealE3(q.id)}
                        className="flex items-center gap-2 text-sm sm:text-base font-bold text-orange-950 bg-orange-100 hover:bg-orange-200 border border-orange-300 px-4 py-2 rounded-xl transition-colors cursor-pointer"
                      >
                        {isRevealed ? (
                          <>
                            <ChevronUp className="w-4 h-4" /> Թաքցնել պատասխանը
                          </>
                        ) : (
                          <>
                            <ChevronDown className="w-4 h-4" /> Տեսնել մոդելային պատասխանը (Respuesta modelo)
                          </>
                        )}
                      </button>
                    </div>

                    {/* Revealed Answer Box */}
                    {isRevealed && (
                      <div className="bg-white p-5 sm:p-6 rounded-xl border-2 border-orange-300 shadow-xs space-y-4">
                        <div>
                          <div className="flex items-center justify-between text-xs font-bold text-orange-900 uppercase tracking-wider mb-1.5">
                            <span>Respuesta modelo en español:</span>
                            <button
                              type="button"
                              onClick={() => speakText(q.answerEs)}
                              className="text-orange-700 hover:underline flex items-center gap-1 text-xs font-bold"
                            >
                              <Volume2 className="w-4 h-4" /> Լսել
                            </button>
                          </div>
                          <p className="text-base sm:text-lg text-slate-950 font-bold leading-relaxed bg-orange-50/70 p-4 rounded-xl border border-orange-200">
                            {q.answerEs}
                          </p>
                        </div>

                        <div>
                          <span className="text-xs font-bold text-slate-700 uppercase tracking-wide block mb-1">
                            Հայերեն բացատրություն և թարգմանություն՝
                          </span>
                          <p className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed">
                            {q.answerAm}
                          </p>
                        </div>

                        {/* Key Points tags */}
                        <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2">
                          <span className="text-xs font-bold text-slate-600">
                            Գլխավոր հիմնաբառեր (Քննության համար)՝
                          </span>
                          <div className="flex flex-wrap items-center gap-2 text-sm text-orange-950">
                            {q.keyPoints.map((point, pIdx) => (
                              <React.Fragment key={pIdx}>
                                <span className="font-bold bg-orange-100 px-3 py-1 rounded-lg border border-orange-200">
                                  {point}
                                </span>
                                {pIdx < q.keyPoints.length - 1 && (
                                  <span aria-hidden="true" className="text-slate-300">·</span>
                                )}
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
