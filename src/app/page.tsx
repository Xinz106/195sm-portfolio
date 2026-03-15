import React from "react";

export default function Home() {
  return (
    // 使用 h-[100dvh] 锁定动态全屏高度，防止移动端滚动，解决比例坍塌问题
    <div className="relative h-[100dvh] w-screen background-container overflow-hidden bg-black flex items-center justify-center p-4">
      
      {/* 1. 响应式背景：完全按照图二/图三的逻辑硬编码背景路径 */}
      <div className="absolute inset-0 z-0">
        {/* 桌面端背景 */}
        <img
          src="/bg.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
        />
        {/* 手机端背景 */}
        <img
          src="/bg-mobile.jpg"
          alt="Mobile Background"
          className="absolute inset-0 w-full h-full object-cover md:hidden"
        />
        {/* 深邃的暗色遮罩 */}
        <div className="absolute inset-0 bg-black/50 z-10" />
      </div>

      {/* 2. 居中主舞台 */}
      <div className="relative z-10 min-h-screen w-full flex items-center justify-center p-4">
        
        {/* 3. 核心卡片：在图二的基础上稍微等比缩小一些，保留完美的磨砂质感和比例 */}
        <div className="relative w-full max-w-[480px] rounded-[28px] backdrop-blur-2xl bg-[#1e1e1e]/40 border border-white/10 shadow-2xl px-6 py-10 md:px-8 md:py-14 flex flex-col items-center z-20">
          
          {/* 头像：物理锁死精致比例：90x90，腾出空间 */}
          <div className="w-[90px] h-[90px] rounded-full overflow-hidden mb-5 md:mb-6 shadow-xl flex-shrink-0 border border-white/10">
            <img
              src="/logo.png"
              alt="195sm Logo"
              className="w-full h-full object-cover"
            />
          </div>

          {/* 名字 */}
          <p className="font-mono text-[14px] md:text-[15px] font-light tracking-[0.3em] text-white/90 mb-3 md:mb-4">
            195sm
          </p>

          {/* 4. 标题：物理强制单行显示 & 降低移动端字号 */}
          <h1 className="text-[16px] md:text-[22px] font-bold tracking-[0.1em] leading-[1.4] text-center text-white mb-5 md:mb-6 whitespace-nowrap">
            AI PROGRAMMER & 3D ARTIST
          </h1>

          {/* 副标题 */}
          <p className="text-[10px] md:text-[11px] font-semibold tracking-[0.25em] text-white/60 mb-8 md:mb-10">
            SOCIAL PLATFORM
          </p>

          {/* 交互按钮组 */}
          <div className="flex flex-col gap-3.5 md:gap-4 w-full max-w-[300px] md:max-w-[340px] items-center relative z-20">
            
            {/* Instagram - 纯白极简线框版 (复刻图一) */}
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

            {/* Twitter - 替换为右图锐利、干净的标准 X 比例 */}
            <a
              href="https://x.com/195_sm"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full py-3 md:py-[14px] rounded-full bg-black/40 border border-white/5 hover:bg-white/10 transition-colors"
            >
              <svg width="18" height="18" style={{ marginRight: "10px" }} viewBox="0 0 24 24" fill="#fff">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
              </svg>
              <span className="text-white text-[14px] md:text-[15px] font-medium tracking-wide">Twitter</span>
            </a>

          </div>

          {/* 底部悬浮邮件图标 */}
          <div className="absolute -bottom-5 md:-bottom-6 left-1/2 -translate-x-1/2 z-30">
            <a href="mailto:909158176a@gmail.com" className="flex items-center justify-center w-[44px] h-[44px] md:w-[52px] md:h-[52px] rounded-full bg-[#151515] border border-white/10 hover:bg-white/20 transition-all shadow-lg">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}