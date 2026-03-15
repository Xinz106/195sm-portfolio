import React from "react";

export default function Home() {
  return (
    // 使用 h-[100dvh] 确保在移动端浏览器导航栏伸缩时依然完美全屏
    <div className="relative h-[100dvh] w-screen background-container overflow-hidden bg-black flex items-center justify-center p-4">
      
      {/* 1. 响应式背景 */}
      <div className="absolute inset-0 z-0">
        <img
          src="/bg.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
        />
        <img
          src="/bg-mobile.jpg"
          alt="Mobile Background"
          className="absolute inset-0 w-full h-full object-cover md:hidden"
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
      </div>

      {/* 2. 核心卡片：针对移动端大幅压缩垂直空间 */}
      <div className="relative w-full max-w-[520px] rounded-[32px] backdrop-blur-2xl bg-[#1e1e1e]/40 border border-white/10 shadow-2xl px-6 py-8 md:px-8 md:py-14 flex flex-col items-center z-20">
        
        {/* 头像：移动端减小到 85px，腾出空间 */}
        <div className="w-[85px] h-[85px] md:w-[110px] md:h-[110px] rounded-full overflow-hidden mb-4 md:mb-6 shadow-xl flex-shrink-0 border border-white/10">
          <img
            src="/logo.png"
            alt="195sm Logo"
            className="w-full h-full object-cover"
          />
        </div>

        {/* 名字 */}
        <p className="font-mono text-[13px] md:text-[15px] font-light tracking-[0.3em] text-white/90 mb-3 md:mb-4">
          195sm
        </p>

        {/* 标题：移动端降低到 18px 确保 "AI PROGRAMMER" 不换行 */}
        <h1 className="text-[18px] md:text-[26px] font-bold tracking-[0.1em] leading-[1.4] text-center text-white mb-4 md:mb-6 whitespace-nowrap md:whitespace-normal">
          AI PROGRAMMER & <br className="hidden md:block" /> 3D ARTIST
        </h1>

        {/* 副标题：压缩间距 */}
        <p className="text-[10px] md:text-[11px] font-semibold tracking-[0.25em] text-white/60 mb-6 md:mb-10">
          SOCIAL PLATFORM
        </p>

        {/* 交互按钮组 */}
        <div className="flex flex-col gap-3 md:gap-4 w-full max-w-[300px] md:max-w-[340px] items-center">
          
          <a
            href="https://www.instagram.com/xinz106"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full py-3 md:py-[14px] rounded-full bg-black/40 border border-white/5 hover:bg-white/10 transition-colors"
          >
            <svg width="18" height="18" style={{ marginRight: "10px" }} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <span className="text-white text-[14px] md:text-[15px] font-medium tracking-wide">Instagram</span>
          </a>

          <a
            href="https://x.com/195_sm"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full py-3 md:py-[14px] rounded-full bg-black/40 border border-white/5 hover:bg-white/10 transition-colors"
          >
            <svg width="16" height="16" style={{ marginRight: "10px" }} viewBox="0 0 24 24" fill="#fff">
              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
            </svg>
            <span className="text-white text-[14px] md:text-[15px] font-medium tracking-wide">Twitter</span>
          </a>

        </div>

        {/* 底部悬浮邮件图标：向上提升位置，确保可见 */}
        <div className="absolute -bottom-5 md:-bottom-6 left-1/2 -translate-x-1/2">
          <a href="mailto:909158176a@gmail.com" className="flex items-center justify-center w-[44px] h-[44px] md:w-[52px] md:h-[52px] rounded-full bg-[#151515] border border-white/10 hover:bg-white/20 transition-all shadow-lg">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
        </div>

      </div>
    </div>
  );
}