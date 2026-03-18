"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 数据字典：保持原样
const translations = {
  zh: {
    role: "3D Artist & AI Programmer",
    quote1: "“艺术的最高境界是意犹未尽。”",
    quote2: "“AI技术是人类的未来。”",
    p3d: "3D作品集",
    pCode: "程序作品集",
    comingSoon: "敬请期待",
    contact: "Contact me",
  },
  en: {
    role: "3D Artist & AI Programmer",
    quote1: "\"The highest realm of art is lingering charm.\"",
    quote2: "\"AI technology is the future of humanity.\"",
    p3d: "3D Portfolio",
    pCode: "Code Portfolio",
    comingSoon: "Coming Soon",
    contact: "Contact me",
  },
  ja: {
    role: "3D Artist & AI Programmer",
    quote1: "「芸術の最高到達点は、余韻にあり。」",
    quote2: "「AI技术は人类の未来である。」",
    p3d: "3Dポートフォリオ",
    pCode: "プログラムポートフォリオ",
    comingSoon: "乞うご期待",
    contact: "Contact me",
  },
};

export default function App() {
  const [lang, setLang] = useState<"zh" | "en" | "ja">("en");
  const t = translations[lang];

  const [isLangOpen, setIsLangOpen] = useState(false);
  const langMap = { en: "EN", zh: "中文", ja: "日本語" };

  const [animStage, setAnimStage] = useState(-2);

  useEffect(() => {
    // 💡 逻辑同步：挂载时从存储中读取语言
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("user-lang") as "zh" | "en" | "ja";
      if (savedLang && translations[savedLang]) {
        setLang(savedLang);
      }
    }

    const t_load = setTimeout(() => setAnimStage(-1), 600);
    const t0 = setTimeout(() => setAnimStage(0), 800);
    const t1 = setTimeout(() => setAnimStage(1), 1000);
    const t2 = setTimeout(() => setAnimStage(2), 2200);
    return () => { clearTimeout(t_load); clearTimeout(t0); clearTimeout(t1); clearTimeout(t2); };
  }, []);

  // 💡 封装切换函数：同步写入存储
  const handleLangChange = (newLang: "zh" | "en" | "ja") => {
    setLang(newLang);
    localStorage.setItem("user-lang", newLang);
    setIsLangOpen(false);
  };

  const socials = [
    { name: "Instagram", url: "https://www.instagram.com/xinz106", icon: <svg className="w-4 h-4 md:w-5 md:h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" strokeWidth="2"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeWidth="2"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" strokeLinecap="round"></line></svg> },
    { name: "Twitter", url: "https://x.com/195_sm", icon: <svg className="w-4 h-4 md:w-5 md:h-5 shrink-0 fill-current" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg> },
    { name: t.contact, url: "mailto:909158176a@gmail.com", icon: <svg className="w-4 h-4 md:w-5 md:h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> }
  ];

  const springTransition = { type: "spring", stiffness: 100, damping: 20, mass: 1 } as const;

  return (
    <main className="relative w-full min-h-screen bg-[#050505] overflow-x-hidden text-gray-200 font-sans selection:bg-gray-700 selection:text-white pb-20">
      <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[60%] bg-blue-900/40 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] right-[-5%] w-[40%] h-[50%] bg-purple-900/30 rounded-full blur-[130px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[40%] bg-indigo-900/20 rounded-full blur-[110px]" />
      </div>

      <div className="fixed inset-0 pointer-events-none z-[2] opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

      <motion.div className="absolute top-0 left-0 w-full h-[480px] md:h-[600px] z-[0] overflow-hidden bg-black" initial={{ opacity: 0 }} animate={{ opacity: animStage === 2 ? 1 : 0 }} transition={{ duration: 1.5 }}>
        <img src="/banner.jpg" alt="Banner" className="w-full h-full object-cover opacity-50" style={{ objectPosition: "center 80%" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
      </motion.div>

      <AnimatePresence>{animStage === -2 && (
        <motion.div className="fixed inset-0 bg-[#050505] z-[110] flex flex-col items-center justify-center gap-4" exit={{ opacity: 0 }}>
          <motion.div className="w-48 h-[1px] bg-white/20 relative overflow-hidden">
            <motion.div className="absolute inset-y-0 left-0 bg-white" initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 0.6, ease: "easeInOut" }} />
          </motion.div>
          <span className="text-[10px] tracking-[0.5em] text-white/40 uppercase font-light">Initialising Universe</span>
        </motion.div>
      )}</AnimatePresence>

      <AnimatePresence>{animStage === -1 && <motion.div className="fixed inset-0 bg-[#050505] z-[100]" exit={{ opacity: 0 }} transition={{ duration: 0.4 }} />}</AnimatePresence>

      {animStage === 1 && (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-[50]">
          <motion.h1 layoutId="brand-title" initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }} animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} transition={{ layout: springTransition, opacity: { duration: 0.6 } }} className="text-6xl md:text-8xl font-black text-white tracking-widest drop-shadow-[0_0_25px_rgba(255,255,255,0.5)]">195sm</motion.h1>
        </div>
      )}

      <div className="max-w-[1400px] mx-auto pt-24 px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-10">
          <motion.div className="hidden md:flex w-48 h-48 rounded-full border border-gray-800 bg-gray-900 shrink-0 shadow-[0_0_30px_rgba(0,0,0,0.8)] overflow-hidden items-center justify-center relative" initial={{ opacity: 0, x: -20 }} animate={{ opacity: animStage === 2 ? 1 : 0, x: animStage === 2 ? 0 : -20 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <img src="/avatar.jpg" alt="Avatar" className="w-full h-full object-cover" />
          </motion.div>
          <div className="flex-1 flex flex-col items-start w-full">
            <div className="h-16 md:h-20 flex items-center justify-start">
              {animStage === 2 && <motion.h1 layoutId="brand-title" className="text-4xl md:text-5xl font-black text-white tracking-wide" transition={springTransition}>195sm</motion.h1>}
            </div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: animStage === 2 ? 1 : 0, y: animStage === 2 ? 0 : 10 }} transition={{ duration: 0.8, delay: 0.3 }} className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold tracking-widest text-gray-400">{t.role}</h2>
              <div className="space-y-2 text-base md:text-lg text-gray-300 font-light mt-4 opacity-80">
                <p className="tracking-wide">{t.quote1}</p>
                <p className="tracking-wide">{t.quote2}</p>
              </div>
            </motion.div>
          </div>
          <motion.div className="hidden md:flex flex-col items-end w-auto pt-4 md:pt-1.5" initial={{ opacity: 0, x: 20 }} animate={{ opacity: animStage === 2 ? 1 : 0, x: animStage === 2 ? 0 : 20 }} transition={{ duration: 0.8, delay: 0.4 }}>
            <div className="flex flex-col gap-3">
              {socials.map((s, idx) => (
                <a key={idx} href={s.url} target="_blank" rel="noreferrer" className="flex items-center justify-start gap-4 px-8 bg-[#0a0a0a]/50 border border-gray-700 hover:border-gray-400 hover:bg-white/5 py-3 rounded-md transition-all duration-300 w-56 group backdrop-blur-sm">
                  <span className="text-gray-400 group-hover:text-white transition-colors">{s.icon}</span>
                  <span className="font-medium tracking-wide text-[15px]">{s.name}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div className="w-full h-px bg-gray-800 my-16 md:my-24 relative" initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: animStage === 2 ? 1 : 0, opacity: animStage === 2 ? 1 : 0 }} transition={{ duration: 1.2, delay: 0.6 }}>
          <div className="absolute inset-0 shadow-[0_12px_40px_rgba(0,0,0,1)]" />
        </motion.div>

        <motion.div className="w-full space-y-20 md:space-y-32 pb-32 relative z-[20] px-2" initial={{ opacity: 0, y: 40 }} animate={{ opacity: animStage === 2 ? 1 : 0, y: animStage === 2 ? 0 : 40 }} transition={{ duration: 1, delay: 0.8 }}>
          <div className="block group">
            <h3 className="text-xl md:text-2xl font-bold mb-10 md:mb-16 text-white text-center group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all tracking-[0.6em]">{t.p3d}</h3>
            <a href="/portfolio-3d" className="relative block w-full aspect-[4/3] md:aspect-[21/9] bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden shadow-2xl group-hover:border-white/20 transition-all duration-700">
              <img src="/portfolio-3d.jpg" alt="3D Portfolio" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-[1.04] transition-all duration-1000" style={{ objectPosition: "center 50%" }} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
            </a>
          </div>
          <div className="block">
            <h3 className="text-xl md:text-2xl font-bold mb-10 md:mb-16 text-gray-500 text-center tracking-[0.6em]">{t.pCode}</h3>
            <div className="w-full aspect-[4/3] md:aspect-[21/9] bg-[#070707] border border-white/10 rounded-2xl overflow-hidden relative shadow-2xl">
              <img src="/portfolio-code.jpg" alt="Code Portfolio" className="absolute inset-0 w-full h-full object-cover blur-lg scale-110 opacity-15" />
              <div className="absolute inset-0 flex items-center justify-center"><p className="text-lg md:text-3xl font-bold tracking-[1em] text-white/10">{t.comingSoon}</p></div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute top-10 right-12 z-[60]">
        <button onClick={() => setIsLangOpen(!isLangOpen)} className="flex items-center gap-2 px-4 py-2 bg-black/50 border border-white/10 backdrop-blur-md rounded-md transition-all text-sm font-medium tracking-wider text-white">
          {langMap[lang]} <svg className={`w-4 h-4 transition-transform duration-300 ${isLangOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </button>
        <AnimatePresence>{isLangOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="absolute top-full right-0 mt-2 w-full min-w-[100px] bg-[#0a0a0a]/90 border border-gray-700 rounded-md backdrop-blur-xl shadow-2xl flex flex-col overflow-hidden">
            {(Object.entries(langMap) as [keyof typeof langMap, string][]).map(([key, label]) => (
              <button key={key} onClick={() => handleLangChange(key)} className={`px-4 py-3 text-sm transition-colors hover:bg-white/10 ${lang === key ? "text-white font-bold bg-white/5" : "text-gray-400"}`}>{label}</button>
            ))}
          </motion.div>
        )}</AnimatePresence>
      </div>
    </main>
  );
}