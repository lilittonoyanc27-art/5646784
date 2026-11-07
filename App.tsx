import React, { useState } from 'react';
import { LITERARY_DATA } from './data';
import { SpanishCard } from './SpanishCard';
import { ExerciseSection } from './ExerciseSection';
import { FlashcardsSection } from './FlashcardsSection';
import {
  Volume2,
  Copy,
  Check,
  Search,
  Eye,
  EyeOff,
  Award,
  ArrowRight
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<
    'all' | 'lirica' | 'narrativa' | 'teatro' | 'comparacion' | 'examen' | 'ejercicios' | 'flashcards'
  >('all');

  const [forceShowAllAm, setForceShowAllAm] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedTextId, setCopiedTextId] = useState<string | null>(null);

  // Helper for sound
  const speakText = (text: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = 'es-ES';
    utt.rate = 0.9;
    window.speechSynthesis.speak(utt);
  };

  // Helper for copy
  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTextId(id);
    setTimeout(() => setCopiedTextId(null), 2000);
  };

  const isSearchActive = searchQuery.trim().length > 1;
  const normalizedQuery = searchQuery.toLowerCase().trim();

  return (
    <div className="min-h-screen bg-[#fffaf5] text-slate-900 flex flex-col font-sans">
      {/* ============================================================== */}
      {/* 1. TOP BAR (Strict 3-zone contract: Brand — Links — CTA) */}
      {/* ============================================================== */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-2 border-orange-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <button
            onClick={() => {
              setActiveTab('all');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-left whitespace-nowrap shrink-0 group flex items-center gap-3 cursor-pointer"
          >
            <div className="w-11 h-11 rounded-xl bg-orange-600 text-white flex items-center justify-center font-serif-literary font-black text-xl shadow-md group-hover:bg-orange-700 transition-colors">
              GL
            </div>
            <div>
              <span className="text-lg sm:text-xl font-black tracking-tight text-slate-900 block leading-tight font-serif-literary">
                Géneros Literarios
              </span>
              <span className="text-xs sm:text-sm text-orange-800 font-bold block leading-tight">
                Գրական ժանրեր · 1.º ESO
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links (single line, whitespace-nowrap, larger font) */}
          <nav className="hidden lg:flex items-center gap-6 text-sm sm:text-base font-bold text-slate-700">
            <button
              onClick={() => setActiveTab('all')}
              className={`hover:text-orange-700 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'all' ? 'text-orange-700 border-b-2 border-orange-600 pb-1 font-extrabold' : ''
              }`}
            >
              Բոլորը (Todo)
            </button>
            <button
              onClick={() => setActiveTab('lirica')}
              className={`hover:text-orange-700 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'lirica' ? 'text-orange-700 border-b-2 border-orange-600 pb-1 font-extrabold' : ''
              }`}
            >
              1. Lírica (Քնարերգություն)
            </button>
            <button
              onClick={() => setActiveTab('narrativa')}
              className={`hover:text-orange-700 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'narrativa' ? 'text-orange-700 border-b-2 border-orange-600 pb-1 font-extrabold' : ''
              }`}
            >
              2. Narrativa (Պատմողական)
            </button>
            <button
              onClick={() => setActiveTab('teatro')}
              className={`hover:text-orange-700 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'teatro' ? 'text-orange-700 border-b-2 border-orange-600 pb-1 font-extrabold' : ''
              }`}
            >
              3. Teatro (Թատերգություն)
            </button>
            <button
              onClick={() => setActiveTab('comparacion')}
              className={`hover:text-orange-700 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'comparacion' ? 'text-orange-700 border-b-2 border-orange-600 pb-1 font-extrabold' : ''
              }`}
            >
              4. Համեմատություն
            </button>
            <button
              onClick={() => setActiveTab('examen')}
              className={`hover:text-orange-700 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'examen' ? 'text-orange-700 border-b-2 border-orange-600 pb-1 font-extrabold' : ''
              }`}
            >
              5. Քննություն
            </button>
            <button
              onClick={() => setActiveTab('flashcards')}
              className={`hover:text-orange-700 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'flashcards' ? 'text-orange-700 border-b-2 border-orange-600 pb-1 font-extrabold' : ''
              }`}
            >
              7. Ամփոփում & Քարտեր
            </button>
          </nav>

          {/* Zone 3: 1 Primary CTA Button */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setActiveTab('ejercicios')}
              className={`px-4 sm:px-5 py-2.5 text-sm sm:text-base font-bold rounded-xl transition-all whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer ${
                activeTab === 'ejercicios'
                  ? 'bg-orange-700 text-white shadow-md'
                  : 'bg-orange-600 text-white hover:bg-orange-700 shadow-sm'
              }`}
            >
              <Award className="w-5 h-5 text-orange-200" />
              <span>Վարժություններ & Թեստ</span>
            </button>
          </div>
        </div>
      </header>

      {/* ============================================================== */}
      {/* 2. SUB-BAR: TRANSLATION MODE & SEARCH */}
      {/* ============================================================== */}
      <div className="bg-orange-100/60 border-b-2 border-orange-200 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3.5">
          {/* Mobile Tab Scroll Strip */}
          <div className="flex lg:hidden items-center gap-2 overflow-x-auto pb-1 text-xs sm:text-sm font-bold">
            {[
              { id: 'all', label: 'Բոլորը' },
              { id: 'lirica', label: '1. Lírica' },
              { id: 'narrativa', label: '2. Narrativa' },
              { id: 'teatro', label: '3. Teatro' },
              { id: 'comparacion', label: '4. Համեմատություն' },
              { id: 'examen', label: '5. Քննություն' },
              { id: 'ejercicios', label: '6. Վարժություններ' },
              { id: 'flashcards', label: '7. Քարտեր' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3.5 py-2 rounded-xl whitespace-nowrap font-bold transition-colors shrink-0 cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-orange-600 text-white shadow-xs'
                    : 'bg-white text-slate-800 border border-orange-200 hover:bg-orange-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Interactive Translation Master Switch and Search */}
          <div className="flex items-center justify-between md:justify-end gap-3.5 w-full">
            {/* Search Input */}
            <div className="relative w-full max-w-sm">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-orange-600" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Որոնել (metáfora, acotación, nudo...)"
                className="w-full pl-10 pr-4 py-2 text-sm sm:text-base font-medium bg-white rounded-xl border-2 border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all placeholder:text-slate-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400 hover:text-slate-700"
                >
                  ×
                </button>
              )}
            </div>

            {/* Translation Mode Toggle */}
            <button
              type="button"
              onClick={() => setForceShowAllAm(!forceShowAllAm)}
              className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold rounded-xl border-2 transition-all shrink-0 cursor-pointer ${
                forceShowAllAm
                  ? 'bg-orange-600 text-white border-orange-600 shadow-sm'
                  : 'bg-white text-orange-950 border-orange-300 hover:bg-orange-50'
              }`}
            >
              {forceShowAllAm ? (
                <>
                  <EyeOff className="w-4 h-4" />
                  <span>Բոլոր թարգմանությունները բացված են</span>
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4 text-orange-600" />
                  <span>Սեղմումով բացման ռեժիմ</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 3. MAIN CONTENT CONTAINER */}
      {/* ============================================================== */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 space-y-14">
        {/* LIVE SEARCH RESULTS */}
        {isSearchActive && (
          <div className="bg-white rounded-3xl border-2 border-orange-400 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-orange-100">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-serif-literary">
                  Որոնման արդյունքներ՝ «{searchQuery}»
                </h3>
                <p className="text-sm text-slate-600 font-medium mt-0.5">
                  Գտնված եզրույթներ, սահմանումներ և օրինակներ
                </p>
              </div>
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs sm:text-sm font-bold text-slate-700 hover:text-slate-900 bg-orange-100 px-3.5 py-1.5 rounded-xl cursor-pointer"
              >
                Փակել որոնումը
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Check Theater Elements */}
              {LITERARY_DATA.teatro.caracteristicas[3].elementos
                ?.filter(
                  el =>
                    el.es.toLowerCase().includes(normalizedQuery) ||
                    el.am.toLowerCase().includes(normalizedQuery) ||
                    el.descripcionAm.toLowerCase().includes(normalizedQuery)
                )
                .map((el, idx) => (
                  <div key={`el-${idx}`} className="p-5 rounded-2xl border-2 border-orange-200 bg-orange-50/50 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-orange-900 uppercase tracking-wide bg-orange-100 px-2 py-0.5 rounded">
                        Թատրոնի տարր (Elemento de teatro)
                      </span>
                      <button
                        onClick={() => speakText(el.es)}
                        className="p-1.5 hover:text-orange-700 rounded-lg text-slate-500"
                        title="Լսել"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="text-lg font-black text-slate-950 font-serif-literary">
                      {el.es} — <span className="text-orange-900 font-bold">{el.am}</span>
                    </div>
                    <p className="text-sm sm:text-base text-slate-800 font-medium">{el.descripcionAm}</p>
                    <button
                      onClick={() => { setActiveTab('teatro'); setSearchQuery(''); }}
                      className="text-xs sm:text-sm font-bold text-orange-700 hover:underline pt-2 inline-block cursor-pointer"
                    >
                      Գնալ «Թատերգություն» բաժին →
                    </button>
                  </div>
                ))}

              {/* Check Literary Devices */}
              {LITERARY_DATA.lirica.caracteristicas[3].recursosTable
                ?.filter(
                  r =>
                    r.recursoEs.toLowerCase().includes(normalizedQuery) ||
                    r.recursoAm.toLowerCase().includes(normalizedQuery) ||
                    r.explicacion.toLowerCase().includes(normalizedQuery)
                )
                .map((r, idx) => (
                  <div key={`rec-${idx}`} className="p-5 rounded-2xl border-2 border-orange-200 bg-orange-50/50 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-orange-900 uppercase tracking-wide bg-orange-100 px-2 py-0.5 rounded">
                        Գեղարվեստական միջոց (Recurso literario)
                      </span>
                      <button
                        onClick={() => speakText(r.recursoEs)}
                        className="p-1.5 hover:text-orange-700 rounded-lg text-slate-500"
                        title="Լսել"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="text-lg font-black text-slate-950 font-serif-literary">
                      {r.recursoEs} — <span className="text-orange-900 font-bold">{r.recursoAm}</span>
                    </div>
                    <p className="text-sm sm:text-base text-slate-900 font-bold">Օրինակ՝ «{r.ejemplo}» ({r.ejemploAm})</p>
                    <p className="text-sm text-slate-700 font-medium">{r.explicacion}</p>
                    <button
                      onClick={() => { setActiveTab('lirica'); setSearchQuery(''); }}
                      className="text-xs sm:text-sm font-bold text-orange-700 hover:underline pt-2 inline-block cursor-pointer"
                    >
                      Գնալ «Քնարերգություն» բաժին →
                    </button>
                  </div>
                ))}

              {/* Check Flashcards */}
              {LITERARY_DATA.resumenMemorizar.flashcards
                ?.filter(
                  fc =>
                    fc.titleEs.toLowerCase().includes(normalizedQuery) ||
                    fc.titleAm.toLowerCase().includes(normalizedQuery) ||
                    fc.frontEs.toLowerCase().includes(normalizedQuery) ||
                    fc.backAm.toLowerCase().includes(normalizedQuery)
                )
                .map((fc, idx) => (
                  <div key={`fc-${idx}`} className="p-5 rounded-2xl border-2 border-orange-200 bg-white space-y-2">
                    <span className="text-xs font-black text-orange-900 uppercase tracking-wide bg-orange-100 px-2.5 py-0.5 rounded">
                      {fc.titleEs} · {fc.titleAm}
                    </span>
                    <div className="text-base sm:text-lg font-black text-slate-950">{fc.frontEs}</div>
                    <p className="text-sm text-slate-700 font-medium">{fc.frontAm}</p>
                    <p className="text-sm sm:text-base text-slate-950 font-bold pt-2 border-t border-orange-100">{fc.backEs}</p>
                    <p className="text-sm text-orange-950 font-semibold">{fc.backAm}</p>
                    <button
                      onClick={() => { setActiveTab('flashcards'); setSearchQuery(''); }}
                      className="text-xs sm:text-sm font-bold text-orange-700 hover:underline pt-2 inline-block cursor-pointer"
                    >
                      Գնալ «Ամփոփում & Քարտեր» բաժին →
                    </button>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* HERO SECTION */}
        {(activeTab === 'all' || activeTab === 'lirica') && !isSearchActive && (
          <div className="bg-gradient-to-br from-white via-orange-50/50 to-orange-100/40 rounded-3xl border-2 border-orange-300 p-7 sm:p-12 shadow-sm">
            <div className="max-w-4xl">
              <div className="text-xs sm:text-sm font-black text-orange-900 tracking-wider uppercase bg-orange-200/80 px-3.5 py-1 rounded-md inline-block mb-3">
                {LITERARY_DATA.header.course}
              </div>
              <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight font-serif-literary leading-tight">
                {LITERARY_DATA.header.titleEs}
              </h1>
              <h2 className="text-xl sm:text-3xl font-black text-orange-900 mt-2 leading-snug">
                {LITERARY_DATA.header.titleAm}
              </h2>

              {/* Crucial exam notice */}
              <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-orange-100/90 border-2 border-orange-300 text-orange-950 text-sm sm:text-base leading-relaxed font-medium shadow-2xs">
                <span className="font-extrabold text-orange-900 text-base sm:text-lg">⚠️ Ուշադրություն քննության համար. </span>
                {LITERARY_DATA.header.importanceNotice}
              </div>

              {/* Instruction banner */}
              <div className="mt-4 text-xs sm:text-sm text-slate-600 font-semibold flex items-center gap-2">
                <span>💡 Կտտացրեք յուրաքանչյուր իսպաներեն արտահայտության վրա՝ հայերեն թարգմանությունն ու բացատրությունը տեսնելու համար։</span>
              </div>
            </div>

            {/* 3 Quick Genre Gateway Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 pt-8 border-t-2 border-orange-200">
              {LITERARY_DATA.header.mainGenres.map(g => (
                <button
                  key={g.id}
                  onClick={() => setActiveTab(g.id as any)}
                  className="p-6 text-left rounded-2xl bg-white border-2 border-orange-200 hover:border-orange-500 hover:shadow-md transition-all group flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-2">
                      <span className="text-orange-800 font-black uppercase tracking-wider">Ժանր #{g.num}</span>
                      <span className="text-orange-600 group-hover:translate-x-1 transition-transform">
                        <ArrowRight className="w-5 h-5" />
                      </span>
                    </div>
                    <div className="text-xl sm:text-2xl font-black text-slate-950 font-serif-literary">
                      {g.es}
                    </div>
                    <div className="text-sm sm:text-base font-bold text-orange-900 mt-0.5">
                      {g.am}
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mt-4 pt-3 border-t border-orange-100 font-medium">
                    {g.desc}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* SECTION 1: LÍRICA — ՔՆԱՐԵՐԳՈՒԹՅՈՒՆ */}
        {/* ============================================================== */}
        {(activeTab === 'all' || activeTab === 'lirica') && (
          <section id="lirica-section" className="space-y-7">
            <div className="flex items-center justify-between pb-4 border-b-3 border-orange-400">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-orange-600 text-white flex items-center justify-center font-black text-lg shadow-xs">
                  1
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-950 font-serif-literary">
                    {LITERARY_DATA.lirica.titleEs} — {LITERARY_DATA.lirica.titleAm}
                  </h2>
                  <p className="text-sm text-slate-600 font-medium mt-0.5">
                    Զգացմունքների, հույզերի և ներքին ապրումների արտահայտում
                  </p>
                </div>
              </div>
            </div>

            {/* Definition */}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-black text-slate-900">
                {LITERARY_DATA.lirica.definition.questionEs} — {LITERARY_DATA.lirica.definition.questionAm}
              </h3>

              <SpanishCard
                es={LITERARY_DATA.lirica.definition.es}
                am={LITERARY_DATA.lirica.definition.am}
                category="Սահմանում (Definición)"
                forceShowAm={forceShowAllAm}
              />

              <div className="p-5 rounded-2xl bg-white border-2 border-orange-200 text-sm sm:text-base space-y-3 shadow-xs">
                <p className="text-slate-800 font-medium">
                  <strong className="text-slate-950 font-bold">Հիմնական նպատակը՝ </strong>
                  {LITERARY_DATA.lirica.definition.corePurposeAm}
                </p>
                <div className="pt-3 border-t border-orange-100 flex flex-wrap items-center gap-2.5">
                  <span className="font-bold text-slate-700">
                    Օրինակներ՝
                  </span>
                  {LITERARY_DATA.lirica.definition.emotionsExamples.map((em, idx) => (
                    <span
                      key={idx}
                      onClick={() => speakText(em.es)}
                      className="cursor-pointer bg-orange-100 hover:bg-orange-200 text-orange-950 px-3 py-1.5 rounded-xl border border-orange-300 font-bold transition-colors text-xs sm:text-sm"
                      title="Լսել իսպաներեն"
                    >
                      {em.es} ({em.am})
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Characteristics */}
            <div className="space-y-6 pt-4">
              <h3 className="text-lg sm:text-xl font-black text-slate-900">
                Características de la lírica — Քնարերգության առանձնահատկությունները
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* 1. Subjetividad */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-full bg-orange-600 text-white text-xs font-black flex items-center justify-center">
                      1
                    </span>
                    <h4 className="text-base sm:text-lg font-black text-slate-950">
                      Subjetividad — Սուբյեկտիվություն
                    </h4>
                  </div>
                  <SpanishCard
                    es={LITERARY_DATA.lirica.caracteristicas[0].es}
                    am={LITERARY_DATA.lirica.caracteristicas[0].am}
                    category="Հատկանիշ"
                    forceShowAm={forceShowAllAm}
                  />
                  <SpanishCard
                    es={LITERARY_DATA.lirica.caracteristicas[0].ejemplo!.es!}
                    am={LITERARY_DATA.lirica.caracteristicas[0].ejemplo!.am!}
                    note={LITERARY_DATA.lirica.caracteristicas[0].ejemplo!.explicacion}
                    category="Օրինակ"
                    forceShowAm={forceShowAllAm}
                  />
                </div>

                {/* 2. Preferencia por el verso */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-full bg-orange-600 text-white text-xs font-black flex items-center justify-center">
                      2
                    </span>
                    <h4 className="text-base sm:text-lg font-black text-slate-950">
                      Preferencia por el verso — Չափածո խոսքի նախընտրություն
                    </h4>
                  </div>
                  <SpanishCard
                    es={LITERARY_DATA.lirica.caracteristicas[1].es}
                    am={LITERARY_DATA.lirica.caracteristicas[1].am}
                    category="Հատկանիշ"
                    forceShowAm={forceShowAllAm}
                  />
                  <SpanishCard
                    es={LITERARY_DATA.lirica.caracteristicas[1].ejemplo!.linesEs!}
                    am={LITERARY_DATA.lirica.caracteristicas[1].ejemplo!.linesAm!}
                    note={LITERARY_DATA.lirica.caracteristicas[1].ejemplo!.explicacion}
                    isPoem={true}
                    category="Չափածո օրինակ"
                    forceShowAm={forceShowAllAm}
                  />
                </div>
              </div>

              {/* 3. Ritmo y musicalidad */}
              <div className="pt-4">
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-7 h-7 rounded-full bg-orange-600 text-white text-xs font-black flex items-center justify-center">
                    3
                  </span>
                  <h4 className="text-base sm:text-lg font-black text-slate-950">
                    Ritmo y musicalidad — Ռիթմ և երաժշտականություն
                  </h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <SpanishCard
                    es={LITERARY_DATA.lirica.caracteristicas[2].es}
                    am={LITERARY_DATA.lirica.caracteristicas[2].am}
                    category="Հատկանիշ"
                    forceShowAm={forceShowAllAm}
                  />
                  <SpanishCard
                    es={LITERARY_DATA.lirica.caracteristicas[2].ejemplo!.linesEs!}
                    am={LITERARY_DATA.lirica.caracteristicas[2].ejemplo!.linesAm!}
                    note={LITERARY_DATA.lirica.caracteristicas[2].ejemplo!.explicacion}
                    isPoem={true}
                    category="Երաժշտականության օրինակ"
                    forceShowAm={forceShowAllAm}
                  />
                </div>
              </div>

              {/* 4. Recursos literarios Table */}
              <div className="pt-5 space-y-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-orange-600 text-white text-xs font-black flex items-center justify-center">
                    4
                  </span>
                  <h4 className="text-base sm:text-lg font-black text-slate-950">
                    Recursos literarios — Գեղարվեստական արտահայտչամիջոցներ
                  </h4>
                </div>

                <p className="text-sm sm:text-base text-slate-700 font-medium">
                  {LITERARY_DATA.lirica.caracteristicas[3].am}
                </p>

                <div className="overflow-x-auto bg-white rounded-2xl border-2 border-orange-200 shadow-xs">
                  <table className="w-full text-left text-sm sm:text-base">
                    <thead>
                      <tr className="bg-orange-100/70 text-orange-950 font-bold border-b-2 border-orange-200">
                        <th className="py-3.5 px-5">Recurso literario (Միջոց)</th>
                        <th className="py-3.5 px-5">Ejemplo (Օրինակ)</th>
                        <th className="py-3.5 px-5">Հայերեն բացատրություն</th>
                        <th className="py-3.5 px-3 text-right">Լսել</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-orange-100">
                      {LITERARY_DATA.lirica.caracteristicas[3].recursosTable!.map(r => (
                        <tr key={r.id} className="hover:bg-orange-50/50 transition-colors">
                          <td className="py-4 px-5 font-bold text-slate-950">
                            <div>{r.recursoEs}</div>
                            <div className="text-xs sm:text-sm text-orange-900 font-semibold">{r.recursoAm}</div>
                          </td>
                          <td className="py-4 px-5">
                            <span className="font-serif-literary italic text-slate-950 font-bold text-base sm:text-lg">
                              «{r.ejemplo}»
                            </span>
                            <div className="text-xs sm:text-sm text-slate-600 mt-0.5 font-medium">
                              {r.ejemploAm}
                            </div>
                          </td>
                          <td className="py-4 px-5 text-slate-800 text-sm sm:text-base font-medium leading-relaxed">
                            {r.explicacion}
                          </td>
                          <td className="py-4 px-3 text-right">
                            <button
                              type="button"
                              onClick={() => speakText(r.ejemplo)}
                              className="p-2 rounded-xl text-orange-600 hover:text-orange-900 hover:bg-orange-100 transition-colors cursor-pointer"
                              title="Լսել արտասանությունը"
                            >
                              <Volume2 className="w-5 h-5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Complete Lyric Poem Example */}
              <div className="pt-6">
                <div className="bg-white rounded-2xl border-2 border-orange-300 p-6 sm:p-8 shadow-xs space-y-5">
                  <div className="flex items-center justify-between pb-4 border-b border-orange-100">
                    <div>
                      <h4 className="text-lg sm:text-xl font-black text-slate-950 font-serif-literary">
                        {LITERARY_DATA.lirica.ejemploCompleto.tituloEs} — {LITERARY_DATA.lirica.ejemploCompleto.tituloAm}
                      </h4>
                      <p className="text-sm text-slate-600 font-medium">
                        Բանաստեղծական քառատող՝ անձնական զգացմունքներով
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => speakText(LITERARY_DATA.lirica.ejemploCompleto.versosEs.join('. '))}
                      className="flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold text-white bg-orange-600 hover:bg-orange-700 rounded-xl transition-colors shadow-xs cursor-pointer"
                    >
                      <Volume2 className="w-4 h-4" />
                      <span>Լսել ամբողջը</span>
                    </button>
                  </div>

                  {/* Verses Bilingual Card */}
                  <SpanishCard
                    es={LITERARY_DATA.lirica.ejemploCompleto.versosEs}
                    am={LITERARY_DATA.lirica.ejemploCompleto.versosAm}
                    isPoem={true}
                    category="Բանաստեղծություն"
                    forceShowAm={forceShowAllAm}
                  />

                  {/* Why is it lírica? */}
                  <div className="p-5 rounded-2xl bg-orange-50/60 border border-orange-200 space-y-3">
                    <h5 className="text-sm sm:text-base font-bold text-slate-900">
                      {LITERARY_DATA.lirica.ejemploCompleto.analisisPreguntaEs} — {LITERARY_DATA.lirica.ejemploCompleto.analisisPreguntaAm}
                    </h5>
                    <SpanishCard
                      es={LITERARY_DATA.lirica.ejemploCompleto.respuestaEs}
                      am={LITERARY_DATA.lirica.ejemploCompleto.respuestaAm}
                      category="Պատասխան"
                      forceShowAm={forceShowAllAm}
                    />
                    <p className="text-xs sm:text-sm text-orange-950 bg-orange-100/80 p-3 rounded-xl border border-orange-300 font-medium">
                      💡 {LITERARY_DATA.lirica.ejemploCompleto.notaExamenAm}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ============================================================== */}
        {/* SECTION 2: NARRATIVA — ՊԱՏՄՈՂԱԿԱՆ ԳՐԱԿԱՆՈՒԹՅՈՒՆ */}
        {/* ============================================================== */}
        {(activeTab === 'all' || activeTab === 'narrativa') && (
          <section id="narrativa-section" className="space-y-7 pt-8 border-t-2 border-orange-200">
            <div className="flex items-center justify-between pb-4 border-b-3 border-orange-400">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-orange-600 text-white flex items-center justify-center font-black text-lg shadow-xs">
                  2
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-950 font-serif-literary">
                    {LITERARY_DATA.narrativa.titleEs} — {LITERARY_DATA.narrativa.titleAm}
                  </h2>
                  <p className="text-sm text-slate-600 font-medium mt-0.5">
                    Պատմող, կերպարներ, գործողություն, ժամանակ և վայր
                  </p>
                </div>
              </div>
            </div>

            {/* Definition */}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-black text-slate-900">
                {LITERARY_DATA.narrativa.definition.questionEs} — {LITERARY_DATA.narrativa.definition.questionAm}
              </h3>

              <SpanishCard
                es={LITERARY_DATA.narrativa.definition.es}
                am={LITERARY_DATA.narrativa.definition.am}
                category="Սահմանում"
                forceShowAm={forceShowAllAm}
              />

              <div className="p-4 sm:p-5 rounded-2xl bg-orange-100/70 border-2 border-orange-300 text-sm sm:text-base text-orange-950 font-bold">
                🎯 {LITERARY_DATA.narrativa.definition.distincionAm}
              </div>
            </div>

            {/* Characteristics */}
            <div className="space-y-7 pt-4">
              <h3 className="text-lg sm:text-xl font-black text-slate-900">
                Características de la narrativa — Առանձնահատկությունները
              </h3>

              {/* 1. Presencia de un narrador */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white border-2 border-orange-200 shadow-xs space-y-5">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-orange-600 text-white text-xs font-black flex items-center justify-center">
                    1
                  </span>
                  <h4 className="text-lg sm:text-xl font-black text-slate-950">
                    {LITERARY_DATA.narrativa.caracteristicas[0].titleEs} — {LITERARY_DATA.narrativa.caracteristicas[0].titleAm}
                  </h4>
                </div>

                <SpanishCard
                  es={LITERARY_DATA.narrativa.caracteristicas[0].es}
                  am={LITERARY_DATA.narrativa.caracteristicas[0].am}
                  forceShowAm={forceShowAllAm}
                />

                {/* Autor vs Narrador distinction */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {LITERARY_DATA.narrativa.caracteristicas[0].distincionAutorNarrador!.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-orange-50/60 border border-orange-200 text-sm sm:text-base space-y-1">
                      <div className="font-black text-slate-950 text-base sm:text-lg">
                        {item.terminoEs} — <span className="text-orange-900 font-bold">{item.terminoAm}</span>
                      </div>
                      <p className="text-slate-700 font-medium">{item.defAm}</p>
                    </div>
                  ))}
                </div>

                {/* Types of Narrator */}
                <div className="pt-4 border-t-2 border-orange-100 space-y-4">
                  <h5 className="text-sm sm:text-base font-extrabold text-slate-900 uppercase tracking-wider">
                    Tipos de narrador — Պատմողի տեսակները
                  </h5>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {LITERARY_DATA.narrativa.caracteristicas[0].tiposNarrador!.map(tipo => (
                      <div key={tipo.letra} className="p-5 rounded-2xl bg-orange-50/40 border-2 border-orange-200 flex flex-col justify-between space-y-4">
                        <div>
                          <div className="text-xs font-black text-orange-900 uppercase tracking-wider mb-1">
                            {tipo.letra}. {tipo.nombreEs}
                          </div>
                          <div className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                            {tipo.nombreAm}
                          </div>
                          <p className="text-sm text-slate-700 leading-relaxed font-medium mb-3">
                            {tipo.am}
                          </p>

                          <div className="p-3 rounded-xl bg-white border border-orange-200 text-sm space-y-1">
                            <span className="text-xs uppercase font-extrabold text-orange-800 block">Ejemplo:</span>
                            <p className="font-bold text-slate-950 italic">«{tipo.ejemploEs}»</p>
                            <p className="text-slate-600 text-xs sm:text-sm font-medium">{tipo.ejemploAm}</p>
                          </div>
                        </div>

                        <div className="text-xs sm:text-sm text-orange-950 bg-orange-100/90 p-3 rounded-xl border border-orange-300 font-bold">
                          {tipo.comoReconocer}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 2. Personajes, 3. Espacio, 4. Tiempo, 5. Acción */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* 2. Personajes */}
                <div className="p-6 rounded-2xl bg-white border-2 border-orange-200 shadow-xs space-y-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-full bg-orange-600 text-white text-xs font-black flex items-center justify-center">
                      2
                    </span>
                    <h4 className="text-base sm:text-lg font-black text-slate-950">
                      Personajes — Կերպարներ
                    </h4>
                  </div>
                  <SpanishCard
                    es={LITERARY_DATA.narrativa.caracteristicas[1].es}
                    am={LITERARY_DATA.narrativa.caracteristicas[1].am}
                    forceShowAm={forceShowAllAm}
                  />
                  <div className="space-y-2.5 pt-2 text-sm sm:text-base">
                    {LITERARY_DATA.narrativa.caracteristicas[1].roles!.map((role, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-orange-50/50 border border-orange-200">
                        <span className="font-bold text-slate-950">{role.tipoEs} ({role.tipoAm}): </span>
                        <span className="text-slate-700 font-medium">{role.descAm}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3 & 4. Espacio y Tiempo */}
                <div className="space-y-5">
                  {/* Espacio */}
                  <div className="p-6 rounded-2xl bg-white border-2 border-orange-200 shadow-xs space-y-3">
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-full bg-orange-600 text-white text-xs font-black flex items-center justify-center">
                        3
                      </span>
                      <h4 className="text-base sm:text-lg font-black text-slate-950">
                        Espacio — Գործողության վայր
                      </h4>
                    </div>
                    <SpanishCard
                      es={LITERARY_DATA.narrativa.caracteristicas[2].es}
                      am={LITERARY_DATA.narrativa.caracteristicas[2].am}
                      note={`Օրինակներ՝ ${LITERARY_DATA.narrativa.caracteristicas[2].ejemplosEs} (${LITERARY_DATA.narrativa.caracteristicas[2].ejemplosAm})`}
                      forceShowAm={forceShowAllAm}
                    />
                  </div>

                  {/* Tiempo */}
                  <div className="p-6 rounded-2xl bg-white border-2 border-orange-200 shadow-xs space-y-3">
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-full bg-orange-600 text-white text-xs font-black flex items-center justify-center">
                        4
                      </span>
                      <h4 className="text-base sm:text-lg font-black text-slate-950">
                        Tiempo — Ժամանակ
                      </h4>
                    </div>
                    <SpanishCard
                      es={LITERARY_DATA.narrativa.caracteristicas[3].es}
                      am={LITERARY_DATA.narrativa.caracteristicas[3].am}
                      note={`Օրինակներ՝ ${LITERARY_DATA.narrativa.caracteristicas[3].ejemplosEs} (${LITERARY_DATA.narrativa.caracteristicas[3].ejemplosAm})`}
                      forceShowAm={forceShowAllAm}
                    />
                  </div>
                </div>
              </div>

              {/* 5. Acción o trama & Estructura */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white border-2 border-orange-200 shadow-xs space-y-5">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-orange-600 text-white text-xs font-black flex items-center justify-center">
                    5
                  </span>
                  <h4 className="text-lg sm:text-xl font-black text-slate-950">
                    Acción o trama — Գործողություն կամ սյուժե & Պատմության կառուցվածքը
                  </h4>
                </div>
                <SpanishCard
                  es={LITERARY_DATA.narrativa.caracteristicas[4].es}
                  am={LITERARY_DATA.narrativa.caracteristicas[4].am}
                  forceShowAm={forceShowAllAm}
                />

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  {LITERARY_DATA.narrativa.caracteristicas[4].estructura!.map((etapa, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-orange-50 border-2 border-orange-200 space-y-1.5">
                      <div className="text-sm font-black text-orange-950">
                        {etapa.etapaEs}
                      </div>
                      <div className="text-sm font-bold text-slate-900">
                        {etapa.etapaAm}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 pt-1 font-medium">
                        {etapa.descAm}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Complete Narrative Story Example */}
              <div className="bg-white rounded-2xl border-2 border-orange-300 p-6 sm:p-8 shadow-xs space-y-5">
                <div className="flex items-center justify-between pb-4 border-b border-orange-100">
                  <div>
                    <h4 className="text-lg sm:text-xl font-black text-slate-950 font-serif-literary">
                      {LITERARY_DATA.narrativa.ejemploCompleto.tituloEs} — {LITERARY_DATA.narrativa.ejemploCompleto.tituloAm}
                    </h4>
                    <p className="text-sm text-slate-600 font-medium">
                      Կարդացեք պատմվածքը և դիտեք նրա տարրերի վերլուծությունը
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => speakText(LITERARY_DATA.narrativa.ejemploCompleto.parrafosEs.join(' '))}
                    className="flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold text-white bg-orange-600 hover:bg-orange-700 rounded-xl transition-colors shadow-xs cursor-pointer"
                  >
                    <Volume2 className="w-4 h-4" />
                    <span>Լսել պատմվածքը</span>
                  </button>
                </div>

                <SpanishCard
                  es={LITERARY_DATA.narrativa.ejemploCompleto.parrafosEs}
                  am={LITERARY_DATA.narrativa.ejemploCompleto.parrafosAm}
                  category="Պատմվածք"
                  forceShowAm={forceShowAllAm}
                />

                {/* Analysis Table */}
                <div className="pt-3">
                  <h5 className="text-xs sm:text-sm font-black text-orange-950 uppercase tracking-wider mb-3">
                    Análisis — Վերլուծություն
                  </h5>
                  <div className="overflow-x-auto bg-orange-50/40 rounded-2xl border-2 border-orange-200">
                    <table className="w-full text-sm sm:text-base text-left">
                      <thead>
                        <tr className="border-b-2 border-orange-200 text-orange-950 bg-orange-100/70 font-bold">
                          <th className="py-3 px-5">Elemento (Տարր)</th>
                          <th className="py-3 px-5">Respuesta (Պատասխան)</th>
                          <th className="py-3 px-5">Հայերեն մեկնաբանություն</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-orange-100">
                        {LITERARY_DATA.narrativa.ejemploCompleto.analisisTable.map((row, idx) => (
                          <tr key={idx} className="hover:bg-white transition-colors">
                            <td className="py-3.5 px-5 font-bold text-slate-950">
                              {row.elementoEs} ({row.elementoAm})
                            </td>
                            <td className="py-3.5 px-5 font-extrabold text-orange-900">
                              {row.respuestaEs}
                            </td>
                            <td className="py-3.5 px-5 text-slate-700 font-medium">
                              {row.respuestaAm}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Prosa o Verso */}
              <div className="p-6 rounded-2xl bg-white border-2 border-orange-200 shadow-xs space-y-4">
                <h4 className="text-base sm:text-lg font-black text-slate-950">
                  {LITERARY_DATA.narrativa.prosaVerso.preguntaEs} — {LITERARY_DATA.narrativa.prosaVerso.preguntaAm}
                </h4>
                <SpanishCard
                  es={LITERARY_DATA.narrativa.prosaVerso.es}
                  am={LITERARY_DATA.narrativa.prosaVerso.am}
                  forceShowAm={forceShowAllAm}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-sm sm:text-base">
                  <div className="p-4 rounded-xl bg-orange-50/60 border border-orange-200">
                    <span className="font-bold text-slate-950 block mb-1">Prosa (Արձակ)</span>
                    <span className="text-slate-700 font-medium">{LITERARY_DATA.narrativa.prosaVerso.prosaDefAm}</span>
                  </div>
                  <div className="p-4 rounded-xl bg-orange-50/60 border border-orange-200">
                    <span className="font-bold text-slate-950 block mb-1">Verso (Չափածո)</span>
                    <span className="text-slate-700 font-medium">{LITERARY_DATA.narrativa.prosaVerso.versoDefAm}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ============================================================== */}
        {/* SECTION 3: TEATRO — ԹԱՏԵՐԳՈՒԹՅՈՒՆ */}
        {/* ============================================================== */}
        {(activeTab === 'all' || activeTab === 'teatro') && (
          <section id="teatro-section" className="space-y-7 pt-8 border-t-2 border-orange-200">
            <div className="flex items-center justify-between pb-4 border-b-3 border-orange-400">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-orange-600 text-white flex items-center justify-center font-black text-lg shadow-xs">
                  3
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-950 font-serif-literary">
                    {LITERARY_DATA.teatro.titleEs} — {LITERARY_DATA.teatro.titleAm}
                  </h2>
                  <p className="text-sm text-slate-600 font-medium mt-0.5">
                    Բեմականացում, երկխոսություն, բեմական նշումներ (acotaciones)
                  </p>
                </div>
              </div>
            </div>

            {/* Definition */}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-black text-slate-900">
                {LITERARY_DATA.teatro.definition.questionEs} — {LITERARY_DATA.teatro.definition.questionAm}
              </h3>

              <SpanishCard
                es={LITERARY_DATA.teatro.definition.es}
                am={LITERARY_DATA.teatro.definition.am}
                category="Սահմանում"
                forceShowAm={forceShowAllAm}
              />

              <div className="p-4 sm:p-5 rounded-2xl bg-orange-100/70 border-2 border-orange-300 text-sm sm:text-base text-orange-950 font-bold">
                🎭 {LITERARY_DATA.teatro.definition.dinamicaAm}
              </div>
            </div>

            {/* Characteristics */}
            <div className="space-y-7 pt-4">
              <h3 className="text-lg sm:text-xl font-black text-slate-900">
                Características del teatro — Առանձնահատկությունները
              </h3>

              {/* 1. Diálogo */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white border-2 border-orange-200 shadow-xs space-y-5">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-orange-600 text-white text-xs font-black flex items-center justify-center">
                    1
                  </span>
                  <h4 className="text-lg sm:text-xl font-black text-slate-950">
                    Diálogo — Երկխոսություն
                  </h4>
                </div>

                <SpanishCard
                  es={LITERARY_DATA.teatro.caracteristicas[0].es}
                  am={LITERARY_DATA.teatro.caracteristicas[0].am}
                  forceShowAm={forceShowAllAm}
                />

                {/* Example dialogue */}
                <div className="bg-orange-50/50 p-5 rounded-2xl border border-orange-200 space-y-3">
                  <span className="text-xs font-black text-orange-900 uppercase tracking-wide">
                    Օրինակ՝
                  </span>
                  {LITERARY_DATA.teatro.caracteristicas[0].ejemplo!.dialogo!.map((line, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-4 text-sm sm:text-base">
                      <span className="font-black text-slate-950 min-w-[80px] uppercase">
                        {line.personaje}:
                      </span>
                      <span className="text-slate-900 font-bold">
                        {line.es}
                      </span>
                      <span className="text-orange-900 font-semibold text-xs sm:text-sm">
                        ({line.am})
                      </span>
                    </div>
                  ))}
                  <p className="text-xs sm:text-sm text-slate-600 pt-3 border-t border-orange-200 font-medium">
                    💡 {LITERARY_DATA.teatro.caracteristicas[0].ejemplo!.explicacion}
                  </p>
                </div>
              </div>

              {/* 2. Ausencia habitual de narrador */}
              <div className="p-6 rounded-2xl bg-white border-2 border-orange-200 shadow-xs space-y-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-orange-600 text-white text-xs font-black flex items-center justify-center">
                    2
                  </span>
                  <h4 className="text-lg sm:text-xl font-black text-slate-950">
                    Ausencia habitual de narrador — Պատմողի սովորական բացակայություն
                  </h4>
                </div>
                <SpanishCard
                  es={LITERARY_DATA.teatro.caracteristicas[1].es}
                  am={LITERARY_DATA.teatro.caracteristicas[1].am}
                  forceShowAm={forceShowAllAm}
                />
              </div>

              {/* 3. Acotaciones */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white border-2 border-orange-200 shadow-xs space-y-5">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-orange-600 text-white text-xs font-black flex items-center justify-center">
                    3
                  </span>
                  <h4 className="text-lg sm:text-xl font-black text-slate-950">
                    Acotaciones — Բեմական նշումներ
                  </h4>
                </div>

                <SpanishCard
                  es={LITERARY_DATA.teatro.caracteristicas[2].es}
                  am={LITERARY_DATA.teatro.caracteristicas[2].am}
                  forceShowAm={forceShowAllAm}
                />

                <div className="bg-orange-50/60 p-5 sm:p-6 rounded-2xl border-2 border-orange-200 space-y-4">
                  <span className="text-xs font-black text-orange-950 uppercase tracking-wider">
                    Օրինակ բեմական նշումներով՝
                  </span>

                  {LITERARY_DATA.teatro.caracteristicas[2].ejemplo!.dialogo!.map((line, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-3 text-sm sm:text-base">
                      <span className="font-black text-slate-950 min-w-[80px]">
                        {line.personaje}:
                      </span>
                      {'acotacionEs' in line && line.acotacionEs ? (
                        <span className="italic text-orange-900 font-extrabold">
                          {line.acotacionEs}{' '}
                        </span>
                      ) : null}
                      <span className="text-slate-900 font-bold">
                        {line.es}
                      </span>
                      <span className="text-slate-600 text-xs sm:text-sm font-medium">
                        {'acotacionAm' in line && line.acotacionAm ? `(${line.acotacionAm} ${line.am})` : `(${line.am})`}
                      </span>
                    </div>
                  ))}

                  <div className="pt-3 border-t border-orange-200 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-orange-950">
                    {LITERARY_DATA.teatro.caracteristicas[2].ejemplo!.glosa!.map((g, gIdx) => (
                      <div key={gIdx} className="bg-white p-3 rounded-xl border border-orange-300 font-medium">
                        <strong className="text-orange-900">{g.es}</strong> — {g.am}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 4. Elementos del teatro (10 items table) */}
              <div className="space-y-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-orange-600 text-white text-xs font-black flex items-center justify-center">
                    4
                  </span>
                  <h4 className="text-lg sm:text-xl font-black text-slate-950">
                    Elementos del teatro — Թատրոնի տարրերը (10 բաղադրիչ)
                  </h4>
                </div>

                <p className="text-sm sm:text-base text-slate-700 font-medium">
                  {LITERARY_DATA.teatro.caracteristicas[3].am}
                </p>

                <div className="overflow-x-auto bg-white rounded-2xl border-2 border-orange-200 shadow-xs">
                  <table className="w-full text-left text-sm sm:text-base">
                    <thead>
                      <tr className="bg-orange-100/70 text-orange-950 font-bold border-b-2 border-orange-200">
                        <th className="py-3.5 px-5">Español</th>
                        <th className="py-3.5 px-5">Հայերեն</th>
                        <th className="py-3.5 px-5">Բնութագիր</th>
                        <th className="py-3.5 px-3 text-right">Լսել</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-orange-100">
                      {LITERARY_DATA.teatro.caracteristicas[3].elementos!.map((el, idx) => (
                        <tr key={idx} className="hover:bg-orange-50/50 transition-colors">
                          <td className="py-3.5 px-5 font-black text-slate-950 font-serif-literary text-base sm:text-lg">
                            {el.es}
                          </td>
                          <td className="py-3.5 px-5 font-bold text-orange-900">
                            {el.am}
                          </td>
                          <td className="py-3.5 px-5 text-slate-700 text-xs sm:text-sm font-medium">
                            {el.descripcionAm}
                          </td>
                          <td className="py-3.5 px-3 text-right">
                            <button
                              type="button"
                              onClick={() => speakText(el.es)}
                              className="p-2 rounded-xl text-orange-600 hover:text-orange-900 hover:bg-orange-100 cursor-pointer"
                              title="Լսել իսպաներեն"
                            >
                              <Volume2 className="w-5 h-5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 5. Estructura del teatro */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white border-2 border-orange-200 shadow-xs space-y-5">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-orange-600 text-white text-xs font-black flex items-center justify-center">
                    5
                  </span>
                  <h4 className="text-lg sm:text-xl font-black text-slate-950">
                    Estructura del teatro — Թատերգության կառուցվածքը
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {LITERARY_DATA.teatro.caracteristicas[4].divisiones!.map((div, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-orange-50/50 border border-orange-200 space-y-2">
                      <div className="font-black text-slate-950 text-base sm:text-lg">
                        {div.terminoEs} — <span className="text-orange-900 font-bold">{div.terminoAm}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                        {div.am}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Complete Theatre Example */}
              <div className="bg-white rounded-2xl border-2 border-orange-300 p-6 sm:p-8 shadow-xs space-y-5">
                <div className="flex items-center justify-between pb-4 border-b border-orange-100">
                  <div>
                    <h4 className="text-lg sm:text-xl font-black text-slate-950 font-serif-literary">
                      {LITERARY_DATA.teatro.ejemploCompleto.tituloEs} — {LITERARY_DATA.teatro.ejemploCompleto.tituloAm}
                    </h4>
                    <p className="text-sm text-slate-600 font-medium">
                      Կերպարների ուղիղ երկխոսություն բեմական նշումներով
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      const allSpeech = LITERARY_DATA.teatro.ejemploCompleto.dialogos
                        .map(d => `${d.personaje}: ${d.es}`)
                        .join('. ');
                      speakText(allSpeech);
                    }}
                    className="flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold text-white bg-orange-600 hover:bg-orange-700 rounded-xl transition-colors shadow-xs cursor-pointer"
                  >
                    <Volume2 className="w-4 h-4" />
                    <span>Լսել ամբողջը</span>
                  </button>
                </div>

                <div className="p-6 rounded-2xl bg-orange-50/50 border-2 border-orange-200 space-y-4 font-serif-literary">
                  <div className="italic text-sm sm:text-base text-slate-700 pb-3 border-b border-orange-200 font-bold">
                    {LITERARY_DATA.teatro.ejemploCompleto.acotacionInicialEs}
                    <div className="text-xs sm:text-sm text-slate-600 font-sans not-italic mt-1 font-medium">
                      {LITERARY_DATA.teatro.ejemploCompleto.acotacionInicialAm}
                    </div>
                  </div>

                  {LITERARY_DATA.teatro.ejemploCompleto.dialogos.map((d, dIdx) => (
                    <div key={dIdx} className="space-y-1 text-sm sm:text-base">
                      <div className="text-slate-950 font-bold">
                        <strong className="tracking-wide text-orange-950">{d.personaje}:</strong>{' '}
                        {d.acotacionEs && <span className="italic text-orange-800 font-extrabold">{d.acotacionEs} </span>}
                        <span>{d.es}</span>
                      </div>
                      <div className="text-xs sm:text-sm text-slate-600 font-sans not-italic pl-3 font-medium">
                        {d.acotacionAm && <span className="text-orange-800 font-bold">{d.acotacionAm} </span>}
                        {d.am}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Why is it teatro? */}
                <div className="p-5 rounded-2xl bg-orange-50/60 border border-orange-200 space-y-3">
                  <h5 className="text-sm sm:text-base font-bold text-slate-900">
                    {LITERARY_DATA.teatro.ejemploCompleto.analisisPreguntaEs} — {LITERARY_DATA.teatro.ejemploCompleto.analisisPreguntaAm}
                  </h5>
                  <SpanishCard
                    es={LITERARY_DATA.teatro.ejemploCompleto.respuestaEs}
                    am={LITERARY_DATA.teatro.ejemploCompleto.respuestaAm}
                    category="Պատասխան"
                    forceShowAm={forceShowAllAm}
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ============================================================== */}
        {/* SECTION 4: COMPARACIÓN — ԵՐԵՔ ԺԱՆՐԵՐԻ ՀԱՄԵՄԱՏՈՒԹՅՈՒՆԸ */}
        {/* ============================================================== */}
        {(activeTab === 'all' || activeTab === 'comparacion') && (
          <section id="comparacion-section" className="space-y-7 pt-8 border-t-2 border-orange-200">
            <div className="flex items-center justify-between pb-4 border-b-3 border-orange-400">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-orange-600 text-white flex items-center justify-center font-black text-lg shadow-xs">
                  4
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-950 font-serif-literary">
                    {LITERARY_DATA.comparacion.titleEs} — {LITERARY_DATA.comparacion.titleAm}
                  </h2>
                  <p className="text-sm text-slate-600 font-medium mt-0.5">
                    {LITERARY_DATA.comparacion.noticeAm}
                  </p>
                </div>
              </div>
            </div>

            {/* Comparative Matrix */}
            <div className="overflow-x-auto bg-white rounded-2xl border-2 border-orange-200 shadow-xs">
              <table className="w-full text-left text-sm sm:text-base">
                <thead>
                  <tr className="bg-orange-100/80 border-b-2 border-orange-200 text-orange-950 font-black">
                    <th className="py-4 px-5">Característica (Հատկանիշ)</th>
                    <th className="py-4 px-5 bg-orange-50/90 text-orange-950">Lírica (Քնարերգություն)</th>
                    <th className="py-4 px-5 bg-orange-100/50 text-orange-950">Narrativa (Պատմողական)</th>
                    <th className="py-4 px-5 bg-orange-200/50 text-orange-950">Teatro (Թատերգություն)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-orange-100">
                  {LITERARY_DATA.comparacion.matriz.map((row, idx) => (
                    <tr key={idx} className="hover:bg-orange-50/40 transition-colors">
                      <td className="py-4 px-5 font-black text-slate-950">
                        <div>{row.caracteristicaEs}</div>
                        <div className="text-xs sm:text-sm text-slate-600 font-medium">{row.caracteristicaAm}</div>
                      </td>
                      <td className="py-4 px-5">
                        <div className="font-bold text-orange-900">{row.liricaEs}</div>
                        <div className="text-xs sm:text-sm text-slate-700 font-medium">{row.liricaAm}</div>
                      </td>
                      <td className="py-4 px-5">
                        <div className="font-bold text-orange-900">{row.narrativaEs}</div>
                        <div className="text-xs sm:text-sm text-slate-700 font-medium">{row.narrativaAm}</div>
                      </td>
                      <td className="py-4 px-5">
                        <div className="font-bold text-orange-900">{row.teatroEs}</div>
                        <div className="text-xs sm:text-sm text-slate-700 font-medium">{row.teatroAm}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 3 Parallel Examples on the Same Theme */}
            <div className="bg-white rounded-2xl border-2 border-orange-200 p-6 sm:p-8 shadow-xs space-y-6">
              <div>
                <h3 className="text-lg sm:text-xl font-black text-slate-950">
                  {LITERARY_DATA.comparacion.mismoTema.tituloEs}
                </h3>
                <h4 className="text-sm sm:text-base font-bold text-orange-900 mt-0.5">
                  {LITERARY_DATA.comparacion.mismoTema.tituloAm}
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {LITERARY_DATA.comparacion.mismoTema.ejemplos.map(ej => (
                  <div
                    key={ej.letra}
                    className="p-6 rounded-2xl border-2 border-orange-200 bg-orange-50/40 flex flex-col justify-between space-y-4"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-black text-orange-800 uppercase tracking-wide bg-orange-100 px-2 py-0.5 rounded">
                          Տարբերակ {ej.letra}
                        </span>
                        <span className="text-sm font-extrabold text-orange-950">
                          {ej.generoEs} ({ej.generoAm})
                        </span>
                      </div>

                      <div className="p-4 bg-white rounded-xl border border-orange-200 font-serif-literary text-base sm:text-lg text-slate-950 italic space-y-1 font-bold">
                        {ej.lineasEs.map((l, lIdx) => (
                          <p key={lIdx}>{l}</p>
                        ))}
                      </div>

                      <div className="mt-3 text-sm text-slate-700 space-y-1 font-medium">
                        {ej.lineasAm.map((l, lIdx) => (
                          <p key={lIdx}>{l}</p>
                        ))}
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-orange-100 border border-orange-300 text-xs sm:text-sm text-orange-950 font-bold">
                      {ej.porQueAm}
                    </div>
                  </div>
                ))}
              </div>

              {/* Crucial golden rule */}
              <div className="p-5 rounded-2xl bg-orange-100/90 border-2 border-orange-300 text-sm sm:text-base text-orange-950 font-bold leading-relaxed">
                {LITERARY_DATA.comparacion.mismoTema.reglaOroAm}
              </div>
            </div>
          </section>
        )}

        {/* ============================================================== */}
        {/* SECTION 5: CÓMO RECONOCER EL GÉNERO EN UN EXAMEN */}
        {/* ============================================================== */}
        {(activeTab === 'all' || activeTab === 'examen') && (
          <section id="examen-section" className="space-y-7 pt-8 border-t-2 border-orange-200">
            <div className="flex items-center justify-between pb-4 border-b-3 border-orange-400">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-orange-600 text-white flex items-center justify-center font-black text-lg shadow-xs">
                  5
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-950 font-serif-literary">
                    {LITERARY_DATA.comoReconocer.titleEs}
                  </h2>
                  <p className="text-sm text-slate-600 font-medium mt-0.5">
                    {LITERARY_DATA.comoReconocer.titleAm}
                  </p>
                </div>
              </div>
            </div>

            {/* 3 Diagnostic Questions Flow */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {LITERARY_DATA.comoReconocer.preguntasDiagnosticas.map(pd => (
                <div
                  key={pd.num}
                  className="p-6 rounded-2xl bg-white border-2 border-orange-200 shadow-xs flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2">
                    <span className="text-xs font-black text-orange-800 uppercase tracking-wide bg-orange-100 px-2 py-0.5 rounded">
                      Հարց #{pd.num} (Pregunta {pd.num})
                    </span>
                    <h4 className="text-base sm:text-lg font-black text-slate-950 leading-snug">
                      {pd.preguntaEs}
                    </h4>
                    <p className="text-sm text-slate-700 font-medium">
                      {pd.preguntaAm}
                    </p>
                  </div>

                  <div className="p-4 bg-orange-100/80 rounded-xl border-2 border-orange-300 flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-bold text-orange-950">
                      Եթե այո (Sí) →
                    </span>
                    <span className="text-base font-extrabold text-orange-900">
                      {pd.resultado} ({pd.badge})
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Ready Exam Sentences */}
            <div className="bg-white rounded-2xl border-2 border-orange-200 p-6 sm:p-8 shadow-xs space-y-5">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-950 font-serif-literary">
                  Frases útiles para el examen — Քննության համար պատրաստի նախադասություններ
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mt-1 font-medium">
                  Այս նախադասությունները կարող եք ուղղակիորեն օգտագործել քննության գրավոր պատասխաններում։
                </p>
              </div>

              <div className="space-y-5">
                {LITERARY_DATA.comoReconocer.frasesUtiles.map((fu, idx) => (
                  <div
                    key={idx}
                    className="p-5 sm:p-6 rounded-2xl bg-orange-50/40 border-2 border-orange-200 space-y-3"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs sm:text-sm font-black text-orange-950 uppercase tracking-wide bg-orange-200 px-3 py-1 rounded-lg">
                        {fu.genero}
                      </span>
                      <div className="flex items-center gap-2.5">
                        <button
                          type="button"
                          onClick={() => speakText(fu.es)}
                          className="p-2 rounded-xl text-orange-700 hover:text-orange-950 hover:bg-white transition-colors cursor-pointer"
                          title="Լսել իսպաներեն"
                        >
                          <Volume2 className="w-5 h-5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleCopy(fu.es, `fu-${idx}`)}
                          className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-bold text-slate-800 hover:text-orange-950 bg-white hover:bg-orange-50 rounded-xl border-2 border-orange-200 transition-colors cursor-pointer"
                        >
                          {copiedTextId === `fu-${idx}` ? (
                            <>
                              <Check className="w-4 h-4 text-emerald-600" />
                              <span className="text-emerald-700 font-bold">Պատճենված է</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4 text-orange-600" />
                              <span>Պատճենել</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    <p className="text-base sm:text-lg font-bold text-slate-950 leading-relaxed bg-white p-4 rounded-xl border border-orange-200">
                      «{fu.es}»
                    </p>

                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                      {fu.am}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ============================================================== */}
        {/* SECTION 6: EJERCICIOS TIPO EXAMEN */}
        {/* ============================================================== */}
        {(activeTab === 'all' || activeTab === 'ejercicios') && (
          <section id="ejercicios-section" className="space-y-7 pt-8 border-t-2 border-orange-200">
            <div className="flex items-center justify-between pb-4 border-b-3 border-orange-400">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-orange-600 text-white flex items-center justify-center font-black text-lg shadow-xs">
                  6
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-950 font-serif-literary">
                    6. EJERCICIOS TIPO EXAMEN — Քննության նման վարժություններ
                  </h2>
                  <p className="text-sm text-slate-600 font-medium mt-0.5">
                    Ինտերակտիվ թեստեր և վարժություններ անմիջական ստուգմամբ
                  </p>
                </div>
              </div>
            </div>

            <ExerciseSection forceShowAllAm={forceShowAllAm} />
          </section>
        )}

        {/* ============================================================== */}
        {/* SECTION 7: RESUMEN PARA MEMORIZAR & FLASHCARDS */}
        {/* ============================================================== */}
        {(activeTab === 'all' || activeTab === 'flashcards') && (
          <section id="flashcards-section" className="space-y-7 pt-8 border-t-2 border-orange-200">
            <div className="flex items-center justify-between pb-4 border-b-3 border-orange-400">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-orange-600 text-white flex items-center justify-center font-black text-lg shadow-xs">
                  7
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-950 font-serif-literary">
                    {LITERARY_DATA.resumenMemorizar.titleEs} — {LITERARY_DATA.resumenMemorizar.titleAm}
                  </h2>
                  <p className="text-sm text-slate-600 font-medium mt-0.5">
                    Արագ անգիր սովորելու բանալիներ և ֆլեշ-քարտեր
                  </p>
                </div>
              </div>
            </div>

            <FlashcardsSection />
          </section>
        )}
      </main>

      {/* ============================================================== */}
      {/* 4. FOOTER */}
      {/* ============================================================== */}
      <footer className="mt-20 bg-white border-t-2 border-orange-200 py-8 px-4 sm:px-6 lg:px-8 text-sm text-slate-600">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="font-extrabold text-orange-950">Lengua Castellana y Literatura (1.º ESO)</span>
            <span aria-hidden="true">·</span>
            <span className="font-medium">Իսպաներենից հայերեն ինտերակտիվ ուսումնական ուղեցույց</span>
          </div>

          <div className="flex items-center gap-5">
            <button
              onClick={() => {
                setActiveTab('ejercicios');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-orange-700 hover:text-orange-900 font-bold hover:underline cursor-pointer"
            >
              Անցնել թեստերին
            </button>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-orange-900 transition-colors font-bold cursor-pointer"
            >
              Դեպի վերև ↑
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
