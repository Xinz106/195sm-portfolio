"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 💡 建立作品集多语言字典：严格对应主页的三种语言标识
const portfolioTranslations = {
  zh: {
    back: "返回",
    title: "3D 作品集",
    more: "其它 更多",
    works: [
      { id: "h1", src: "/3d-works/h1.jpg", title: "无主之夜", desc: "“在钢铁与水泥的折痕里，每一道车灯都是城市未曾言说的秘密。”" },
      { id: "h2", src: "/3d-works/h2.jpg", title: "寻星启事", desc: "“我们在霓虹的缝隙中寻找走失的猫，却偶然瞥见了整个宇宙的倒影。”" },
      { id: "h3", src: "/3d-works/h3.jpg", title: "不归之阶", desc: "“跨过这级台阶，你将彻底告别人类的旧梦，坠入赛博空间的深渊。”" },
      { id: "h4", src: "/3d-works/h4.jpg", title: "暮色微凉", desc: "“白昼与黑夜交替的缝隙里，我站在这里，目睹又一个时代的无声更迭。”" },
      { id: "h5", src: "/3d-works/h5.jpg", title: "第七回廊", desc: "“被积水吞噬的第七层，只有自动贩卖机的微光，还在执着地等待永远不会出现的旅人。”" },
    ]
  },
  en: {
    back: "BACK",
    title: "3D Portfolio",
    more: "OTHER WORKS",
    works: [
      { id: "h1", src: "/3d-works/h1.jpg", title: "Ownerless Night", desc: "\"In the creases of steel and concrete, every headlight is a secret the city has never told.\"" },
      { id: "h2", src: "/3d-works/h2.jpg", title: "Star-seeking Notice", desc: "\"Searching for a lost cat in the cracks of neon, we accidentally glimpsed the reflection of the entire universe.\"" },
      { id: "h3", src: "/3d-works/h3.jpg", title: "Stairway of No Return", desc: "\"Step over this stair, and you will bid farewell to old human dreams, falling into the abyss of cyberspace.\"" },
      { id: "h4", src: "/3d-works/h4.jpg", title: "Twilight Chill", desc: "\"In the gap between day and night, I stand here, witnessing the silent change of another era.\"" },
      { id: "h5", src: "/3d-works/h5.jpg", title: "The Seventh Corridor", desc: "\"Engulfed by water on the seventh floor, only the vending machine's faint light still waits for travelers who will never appear.\"" },
    ]
  },
  ja: {
    back: "戻る",
    title: "3Dポートフォリオ",
    more: "その他",
    works: [
      { id: "h1", src: "/3d-works/h1.jpg", title: "持ち主のない夜", desc: "「鉄とコンクリートの折り目の中で、ヘッドライトの一筋一筋が、街の語られざる秘密である。」" },
      { id: "h2", src: "/3d-works/h2.jpg", title: "星探しのお知らせ", desc: "「ネオンの隙間で迷子の子猫を探していたら、偶然にも宇宙全体の倒影を目にした。」" },
      { id: "h3", src: "/3d-works/h3.jpg", title: "不帰の階段", desc: "「この段を越えれば、人類の古い夢に別れを告げ、サイバー空間の深境へと堕ちていくことになる。」" },
      { id: "h4", src: "/3d-works/h4.jpg", title: "暮れ方の涼しさ", desc: "「昼と夜が交差する狭間で、私はここに立ち、新たな時代の静かな移ろいを見届ける。」" },
      { id: "h5", src: "/3d-works/h5.jpg", title: "第七回廊", desc: "「浸水した七階、自販機の微光だけが、決して現れることのない旅人を執拗に待ち続けている。」" },
    ]
  }
};

const verticalWorks = Array.from({ length: 15 }, (_, i) => ({
  id: `v${i + 1}`,
  src: `/3d-works/v${i + 1}.jpg`
}));

export default function Portfolio3D() {
  const [lang, setLang] = useState<"zh" | "en" | "ja">("en");
  const t = portfolioTranslations[lang];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => { 
    // 💡 物理同步：初始化时读取主页存下的语言偏好
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("user-lang") as "zh" | "en" | "ja";
      if (savedLang && portfolioTranslations[savedLang]) {
        setLang(savedLang);
      }
    }
    setIsLoaded(true); 
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="relative w-full min-h-screen bg-gradient-to-br from-[#111111] to-[#050505] overflow-x-hidden text-gray-200 font-sans selection:bg-gray-700 selection:text-white pb-32">
      
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.04] mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      <motion.nav 
        className="relative z-10 w-full max-w-[1400px] mx-auto pt-8 px-6 md:px-12 flex justify-between items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -20 }}
        transition={{ duration: 0.8 }}
      >
        <a href="/" className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300">
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          <span className="font-medium tracking-widest text-sm uppercase">{t.back}</span>
        </a>
        <h1 className="text-xl md:text-2xl font-black text-white tracking-widest drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
          {t.title}
        </h1>
      </motion.nav>

      <div className="max-w-[1400px] mx-auto mt-16 px-6 md:px-12 relative z-10">
        
        <div className="space-y-20 md:space-y-32">
          {t.works.map((work, index) => (
            <motion.div 
              key={work.id}
              className="flex flex-col md:flex-row gap-6 md:gap-12 items-center md:items-start group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div 
                className="w-full md:w-[70%] aspect-video bg-gray-900 border border-white/5 rounded-lg overflow-hidden relative shadow-2xl cursor-zoom-in"
                onClick={() => setSelectedImage(work.src)}
              >
                <img src={work.src} alt={work.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                  <svg className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg>
                </div>
              </div>

              <div className="w-full md:w-[30%] flex flex-col justify-center space-y-4 pt-4 md:pt-10">
                <div className="w-12 h-px bg-white/30" />
                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-widest">{work.title}</h2>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed tracking-wide drop-shadow-[0_0_8px_rgba(200,200,200,0.1)]">
                  {work.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
           className="w-full flex flex-col items-center justify-center my-32 space-y-4"
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
        >
           <h3 className="text-xl md:text-2xl font-bold text-gray-500 tracking-[0.5em] uppercase">{t.more}</h3>
           <div className="w-px h-16 bg-gradient-to-b from-gray-500 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {verticalWorks.map((work, index) => (
            <motion.div
              key={work.id}
              className="w-full aspect-[3/4] bg-gray-900 border border-white/5 rounded-md overflow-hidden relative shadow-xl cursor-zoom-in group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (index % 5) * 0.1 }}
              onClick={() => setSelectedImage(work.src)}
            >
              <img src={work.src} alt={`3D Work ${work.id}`} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
            </motion.div>
          ))}
        </div>

      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <div className="absolute top-6 right-6 md:top-10 md:right-10 text-white/50 tracking-widest text-sm pointer-events-none">
              {lang === "zh" ? "点击空白或按 ESC 关闭" : lang === "ja" ? "空白をクリックするか ESC を押して閉じる" : "Click background or press ESC to close"}
            </div>
            <motion.img
              src={selectedImage}
              alt="Enlarged Work"
              className="max-w-full max-h-full object-contain shadow-[0_0_50px_rgba(255,255,255,0.1)] rounded-sm"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}