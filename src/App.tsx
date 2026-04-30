/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail,
  Twitter,
  ArrowRight, 
  Monitor, 
  BookOpen, 
  Zap, 
  Download,
  ImageIcon,
  Code,
  FileText,
  DollarSign,
  PlayCircle,
  Check,
  MessageCircle
} from 'lucide-react';

const WaveUnderline = () => (
  <motion.svg
    width="100%"
    height="6"
    viewBox="0 0 100 20"
    preserveAspectRatio="none"
    initial={{ pathLength: 0, opacity: 0 }}
    animate={{ pathLength: 1, opacity: 1 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    className="absolute bottom-0 left-0 right-0 overflow-visible"
  >
    <motion.path
      d="M 0 10 Q 12.5 5 25 10 T 50 10 T 75 10 T 100 10"
      fill="transparent"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </motion.svg>
);

// --- Components ---

const Home = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="flex-grow flex flex-col justify-center items-center text-center px-6 max-w-5xl mx-auto py-8"
  >
    <div className="max-w-4xl w-full">
      <h2 className="text-4xl md:text-6xl font-medium mb-6 text-custom-primary tracking-widest leading-[1.1]">
        在AI时代<br/>持续探索个人增长的X因素
      </h2>
      <p className="text-lg md:text-xl text-custom-secondary mb-10 max-w-2xl mx-auto leading-relaxed font-light opacity-90">
        我是Zing，10年Aiot产品体验设计师，现居杭州。在这里，记录关于产品体验、个人增长、LifeOS构建的底层逻辑，实践感受。
      </p>
      
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 backdrop-blur-xl text-custom-secondary hover:text-custom-primary transition-all shadow-sm hover:shadow-md cursor-default">
          <MessageCircle size={18} className="text-accent" />
          <span className="font-medium tracking-wide text-sm opacity-80">微信：zing927</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {[
          { label: "无限自然周刊", type: "Newsletter", icon: <Mail size={20} />, href: "https://quaily.com/zing927" },
          { label: "个人增长 X 因素", type: "知识库", icon: <BookOpen size={20} />, href: "https://flowus.cn/share/aa202f8a-14a7-4429-a5a8-2b459a4de181?code=U4N4HU" },
          { label: "AI 时代的设计师", type: "知识库", icon: <Monitor size={20} />, href: "https://flowus.cn/zing/share/614d3b88-98e4-476a-9282-44500b47ea9f?code=U4N4HU" }
        ].map((link, i) => (
          <a key={i} href={link.href} target="_blank" rel="noreferrer" className="flex flex-col items-center p-6 rounded-2xl bg-white/[0.03] backdrop-blur-xl hover:bg-white/[0.08] hover:shadow-2xl transition-all group overflow-hidden relative">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform bg-white/5 text-custom-primary shadow-sm">
              {link.icon}
            </div>
            <span className="font-medium text-base text-custom-primary mb-1 group-hover:text-accent transition-colors">{link.label}</span>
            <span className="text-[10px] tracking-[0.2em] text-custom-secondary font-medium opacity-40">{link.type}</span>
          </a>
        ))}
      </div>
    </div>
  </motion.div>
);

const WhatImDoing = () => {
  const items = [
    {
      id: 1,
      title: "无限自然周刊",
      icon: <Mail size={22} />,
      desc: "分享最近 7 天值得分享的内容，关注个人成长、产品设计、AI 提效、商业。",
      meta: "目前 61 期，阅读量 50 万+",
      href: "https://quaily.com/zing927"
    },
    {
      id: 2,
      title: "知识库《AI 时代的 Designer》",
      icon: <Monitor size={22} />,
      desc: "AI 时代 product、设计、开发岗位能力压缩，设计师该如何成为 'product owner'，分享实践经验。",
      meta: "公开分享我的转变与经验",
      href: "https://flowus.cn/zing/share/614d3b88-98e4-476a-9282-44500b47ea9f?code=U4N4HU"
    },
    {
      id: 3,
      title: "知识库《探索个人增长的 X 因素》",
      icon: <BookOpen size={22} />,
      desc: "分享优质信息源、精读内容、学习资源、工具。专注个人能力的复利增长。",
      meta: "目前已有 40+ 付费订阅",
      href: "https://flowus.cn/share/aa202f8a-14a7-4429-a5a8-2b459a4de181?code=U4N4HU"
    },
    {
      id: 4,
      title: "AI Coding：YoutuRead插件",
      icon: <Code size={22} />,
      desc: "探索“小而美”的产品开发。目前正全力投入 YoutuRead（YouTube 转图文阅读版插件）。",
      meta: "从 0 到 1 的实践中",
      href: "https://youturead.vercel.app/"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto px-6 py-10"
    >
      <header className="mb-10">
        <h2 className="text-3xl font-medium mb-4 text-custom-primary tracking-tight leading-tight">我正在做的事</h2>
        <p className="text-custom-secondary text-base font-light opacity-80 leading-relaxed max-w-xl">
          我认为正确的事：阅读、写作、运动、创造、分享。
        </p>
      </header>
      <div className="grid grid-cols-1 gap-4">
        {items.map((item, index) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08, duration: 0.4 }}
            className={`flex flex-col md:flex-row gap-6 items-start p-6 rounded-xl bg-white/[0.03] backdrop-blur-2xl transition-all duration-300 hover:bg-white/[0.08] group overflow-hidden relative ${item.href ? 'cursor-pointer shadow-xl hover:shadow-accent/5' : ''}`}
            onClick={() => item.href && window.open(item.href, '_blank')}
          >
            <div className="p-4 rounded-lg bg-white/5 shadow-sm flex-shrink-0 text-custom-secondary group-hover:text-accent transition-all">
              {item.icon}
            </div>
            <div className="flex-grow pt-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-medium text-custom-primary group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                {item.href && <ArrowRight size={18} className="text-accent opacity-0 group-hover:opacity-100 -translate-x-3 group-hover:translate-x-0 transition-all font-bold" />}
              </div>
              <p className="text-base text-custom-secondary leading-relaxed opacity-90">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};


// --- Main Layout ---

export default function App() {
  const [activeTab, setActiveTab ] = useState<'home' | 'now'>('home');

  const navItems = [
    { id: 'home', label: '首页' },
    { id: 'now', label: '我正在做的事' },
  ] as const;

  return (
    <div className="min-h-screen text-custom-primary selection:bg-accent/20 bg-custom-primary relative overflow-hidden flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-custom-primary/80 backdrop-blur-2xl">
        <div className="max-w-6xl mx-auto px-8 h-20 flex items-center justify-between relative z-10">
          <div 
            className="text-3xl font-handwriting tracking-wide cursor-pointer hover:text-accent transition-colors" 
            onClick={() => setActiveTab('home')}
          >
            Zing's Openlife
          </div>
          
          <div className="flex items-center gap-6 md:gap-10">
            <div className="flex gap-6 md:gap-10 transition-all">
              {navItems.map((item) => (
                <button 
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`text-sm font-medium tracking-wide transition-all relative py-2 ${activeTab === item.id ? 'text-accent' : 'text-custom-secondary hover:text-custom-primary'}`}
                >
                  {item.label}
                  {activeTab === item.id && (
                    <motion.div layoutId="nav-underline" className="absolute -bottom-1 left-0 right-0 flex justify-center">
                      <WaveUnderline />
                    </motion.div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className={`flex-grow pt-20 pb-20 flex flex-col relative z-10 ${activeTab === 'home' ? 'h-screen' : ''}`}>
        <AnimatePresence mode="wait">
          {activeTab === 'home' && <Home key="home" />}
          {activeTab === 'now' && <WhatImDoing key="now" />}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 py-8 text-center z-40 pointer-events-none">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-custom-secondary text-[10px] font-medium opacity-30 uppercase tracking-[0.4em]">
            © 2026 Zing • Build to Grow • LifeOS
          </p>
        </div>
      </footer>
    </div>
  );
}
