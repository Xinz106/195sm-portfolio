import React from "react";

export default function Home() {
  return (
    <div className="background-container">
      <div className="glass-card">
        {/* 头像 */}
        <img src="/logo.png" alt="195sm Logo" className="logo mx-auto" />

        {/* 名字 */}
        <p className="brand-name">195sm</p>

        {/* 大标题 */}
        <h1 className="main-title">
          AI PROGRAMMER & <br /> 3D ARTIST
        </h1>

        {/* 副标题 */}
        <p className="highlight-text">SOCIAL PLATFORM</p>

        {/* 交互按钮组 */}
        <div className="button-group">
          
          {/* Instagram - 纯白极简线框版 */}
          <a
            href="https://www.instagram.com/xinz106"
            target="_blank"
            rel="noopener noreferrer"
            className="action-btn"
          >
            <svg
              width="20"
              height="20"
              style={{ marginRight: "10px" }}
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            Instagram
          </a>

          {/* Twitter - 替换为右图锐利、干净的标准 X 比例 */}
          <a
            href="https://x.com/195_sm"
            target="_blank"
            rel="noopener noreferrer"
            className="action-btn"
          >
            <svg
              width="18"
              height="18"
              style={{ marginRight: "10px" }}
              viewBox="0 0 24 24"
              fill="#fff"
            >
              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
            </svg>
            Twitter
          </a>
        </div>

        {/* 底部悬浮邮件 - 纯白线框版 */}
        <div className="email-icon">
          <a href="mailto:909158176a@gmail.com" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
            <svg
              width="22"
              height="22"
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
  );
}