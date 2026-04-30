/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Twitter,
  ArrowRight, 
  Monitor, 
  BookOpen, 
  Zap, 
  Download,
  Image as ImageIcon,
  Code,
  FileText,
  DollarSign,
  PlayCircle,
  Check,
  MessageSquare
} from 'lucide-react';

// --- Components ---

const Home = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="flex-grow flex flex-col justify-center items-center text-center px-6 max-w-5xl mx-auto py-8"
  >
    <div className="max-w-4xl w-full">
      <h2 className="text-4xl md:text-6xl font-bold mb-6 text-custom-primary font-display tracking-tight leading-[1.1]">
        沉淀十载 SaaS 体验设计，<br/>于 AI 时代重塑成长
      </h2>
      <p className="text-lg md:text-xl text-custom-secondary mb-10 max-w-2xl mx-auto leading-relaxed font-light opacity-90">
        我是 Zing。在这里，我记录关于 LifeOS 的构建、个人增长的底层逻辑，以及如何利用 AI 探索“小而美”的产品可能。
      </p>
      
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-custom-secondary border border-custom text-custom-secondary hover:text-custom-primary transition-all shadow-sm hover:shadow-md">
          <MessageSquare size={18} className="text-accent" />
          <span className="font-medium tracking-wide text-sm opacity-80">微信：zing927</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {[
          { label: "《无限自然》", type: "Newsletter", icon: <Zap size={20} />, href: "https://quaily.com/zing927" },
          { label: "个人增长 X 因素", type: "知识库", icon: <BookOpen size={20} />, href: "https://flowus.cn/share/aa202f8a-14a7-4429-a5a8-2b459a4de181?code=U4N4HU" },
          { label: "AI 时代的设计师", type: "知识库", icon: <Monitor size={20} />, href: "https://flowus.cn/zing/share/614d3b88-98e4-476a-9282-44500b47ea9f?code=U4N4HU" }
        ].map((link, i) => (
          <a key={i} href={link.href} target="_blank" rel="noreferrer" className="flex flex-col items-center p-6 rounded-[2rem] bg-custom-secondary hover:bg-custom-primary hover:shadow-2xl transition-all border border-custom group overflow-hidden relative">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform bg-custom-primary text-custom-primary border border-custom shadow-sm">
              {link.icon}
            </div>
            <span className="font-bold text-base text-custom-primary mb-1 group-hover:text-accent transition-colors">{link.label}</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-custom-secondary font-bold opacity-40">{link.type}</span>
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
      title: "Newsletter《无限自然》",
      icon: <Zap size={22} />,
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
      title: "AI Coding：YoutuRead",
      icon: <Code size={22} />,
      desc: "探索“小而美”的产品开发。目前正全力投入 YoutuRead（YouTube 转图文阅读版插件）。",
      meta: "从 0 到 1 的实践中"
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
        <h2 className="text-3xl font-bold mb-4 text-custom-primary font-display tracking-tight leading-tight">我正在做的事</h2>
        <p className="text-custom-secondary text-base font-light opacity-80 leading-relaxed max-w-xl">
          我认为正确的事：阅读、写作、运动、创造、分享。<br/>聚焦于能产生复利增长的底层逻辑。
        </p>
      </header>
      <div className="grid grid-cols-1 gap-4">
        {items.map((item, index) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08, duration: 0.4 }}
            className={`flex flex-col md:flex-row gap-6 items-start p-6 rounded-2xl bg-custom-secondary border border-custom transition-all duration-300 hover:border-accent/30 hover:bg-custom-secondary/90 group overflow-hidden relative ${item.href ? 'cursor-pointer shadow-sm hover:shadow-md' : ''}`}
            onClick={() => item.href && window.open(item.href, '_blank')}
          >
            <div className="p-4 rounded-xl bg-custom-primary shadow-sm flex-shrink-0 border border-custom text-custom-secondary group-hover:text-accent transition-all">
              {item.icon}
            </div>
            <div className="flex-grow pt-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-custom-primary group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                {item.href && <ArrowRight size={18} className="text-accent opacity-0 group-hover:opacity-100 -translate-x-3 group-hover:translate-x-0 transition-all font-bold" />}
              </div>
              <p className="text-base text-custom-secondary mb-5 leading-relaxed opacity-90">{item.desc}</p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-custom-primary text-[10px] font-bold tracking-widest uppercase text-custom-secondary border border-custom">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                {item.meta}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const YoutuReadApp = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-5xl mx-auto px-6 py-20"
    >
      {/* Hero Section */}
      <section className="text-center mb-10 py-16 bg-custom-secondary/40 rounded-[3rem] px-8 border border-custom shadow-inner backdrop-blur-md">
        <motion.div
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 bg-custom-primary text-custom-primary border border-white/5 text-[10px] font-bold tracking-[0.3em] uppercase rounded-full mb-6 opacity-60">
            PROTOTYPE RELEASE
          </span>
          <div className="mb-4">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-custom-primary font-display mb-1">
              YoutoRead
            </h2>
            <p className="text-xs font-bold tracking-[0.4em] uppercase text-accent opacity-80">
              见字如面 · 视频阅读化
            </p>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-8 text-custom-primary font-display leading-[1] text-balance">
            YouTube 视频<br/><span className="text-accent">一键变图文笔记</span>
          </h1>
          <p className="text-lg md:text-2xl text-custom-secondary mb-12 max-w-xl mx-auto leading-relaxed font-light opacity-80 text-pretty">
            用 AI 将视频转为图文并茂的 Markdown 笔记。支持自定义提示词，让知识消化效率提升 10 倍。
          </p>
          <button 
            onClick={() => setShowContactModal(true)}
            className="px-10 py-4 bg-custom-primary text-custom-primary border border-custom rounded-2xl font-bold text-lg transition-all flex items-center gap-3 mx-auto shadow-2xl hover:bg-accent hover:text-white hover:border-accent active:scale-95 group ring-offset-4 ring-offset-black focus:ring-2 ring-accent/30"
          >
            <Download size={22} className="group-hover:-translate-y-1 transition-transform" />
            <span>立即获取下载链接</span>
          </button>
        </motion.div>
      </section>

      {/* Contact Modal */}
      <AnimatePresence>
        {showContactModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowContactModal(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-custom-secondary border border-custom p-8 rounded-3xl shadow-2xl text-center"
            >
              <div className="w-16 h-16 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageSquare size={32} />
              </div>
              <h3 className="text-2xl font-bold text-custom-primary mb-2">联系作者下载</h3>
              <p className="text-custom-secondary mb-8 leading-relaxed">
                目前插件处于内测阶段，请添加作者微信并备注「插件内测」以获取下载链接。
              </p>
              <div className="bg-custom-primary border border-custom p-4 rounded-2xl mb-8">
                <label className="text-[10px] uppercase tracking-widest text-custom-secondary block mb-1">WeChat ID</label>
                <span className="text-xl font-bold text-custom-primary font-mono">zing927</span>
              </div>
              <button 
                onClick={() => setShowContactModal(false)}
                className="w-full py-4 bg-custom-primary border border-custom text-custom-primary rounded-xl font-bold hover:bg-custom-secondary transition-colors"
              >
                我知道了
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    <section className="mb-24">
      <h3 className="text-2xl font-bold mb-12 text-center text-custom-primary font-display tracking-tight opacity-40 uppercase tracking-[0.3em]">Core Features</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { icon: <ImageIcon size={22} />, title: "视频转图文", desc: "自动抓取视频关键画面，配合 AI 总结，看图就能懂视频。" },
          { icon: <FileText size={22} />, title: "Markdown 导出", desc: "完美适配 Obsidian、Notion、Heptabase，文档整整齐齐。" },
          { icon: <Zap size={22} />, title: "支持自定义 Prompt", desc: "想写大纲、写摘要、还是写代码分析？你自己定。" },
          { icon: <PlayCircle size={22} />, title: "导出笔记长图", desc: "不方便看文档时，一张长图搞定所有重点。" },
          { icon: <DollarSign size={22} />, title: "使用成本极低", desc: "接入模型能力，价格低至分秒级，专注内容产出。" }
        ].map((feat, i) => (
          <div key={i} className="p-8 rounded-[2rem] bg-custom-primary border border-custom hover:shadow-soft transition-all duration-500 group hover:border-accent/20">
            <div className="w-12 h-12 rounded-xl bg-custom-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-accent shadow-sm border border-custom">
              {feat.icon}
            </div>
            <h4 className="text-lg font-bold mb-2 text-custom-primary">{feat.title}</h4>
            <p className="text-sm text-custom-secondary leading-relaxed opacity-70">{feat.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Comparison Table */}
    <section className="mb-24 overflow-x-auto px-4">
      <h3 className="text-2xl font-bold mb-10 text-center text-custom-primary font-display tracking-tight opacity-40 uppercase tracking-[0.3em]">Efficiency Comparison</h3>
      <div className="min-w-[600px] border border-custom rounded-[2rem] overflow-hidden bg-custom-secondary shadow-lg">
        <div className="grid grid-cols-3 bg-custom-secondary/50 border-b border-custom">
          <div className="p-6 text-[10px] font-bold uppercase tracking-[0.2em] text-custom-secondary opacity-50">需求类型</div>
          <div className="p-6 text-[10px] font-bold uppercase tracking-[0.2em] text-custom-secondary opacity-50">传统解决方案</div>
          <div className="p-6 text-[10px] font-bold uppercase tracking-[0.2em] text-accent">YoutuRead 方案</div>
        </div>
        {[
          { label: "记笔记效率", old: "手动截图 + 繁琐打字", neu: "AI 一键自动化生成" },
          { label: "内容组织", old: "格式混乱，难以检索", neu: "标准 MD，逻辑清晰" },
          { label: "灵感掌控", old: "固定模板，缺乏灵感", neu: "自定义 Prompt 深度驱动" },
          { label: "长期成本", old: "每月高额订阅费", neu: "轻量接入，近乎免费" }
        ].map((row, i) => (
          <div key={i} className="grid grid-cols-3 border-b last:border-0 border-custom bg-custom-primary/20 hover:bg-custom-primary/40 transition-colors">
            <div className="p-6 font-bold text-base text-custom-primary">{row.label}</div>
            <div className="p-6 text-sm text-custom-secondary italic opacity-60 leading-relaxed font-light">{row.old}</div>
            <div className="p-6 text-sm font-medium text-custom-primary flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Check size={12} className="text-accent" />
              </div>
              {row.neu}
            </div>
          </div>
        ))}
      </div>
    </section>

  </motion.div>
  );
};

// --- Main Layout ---

export default function App() {
  const [activeTab, setActiveTab ] = useState<'home' | 'now' | 'plugin'>('home');

  const navItems = [
    { id: 'home', label: '首页' },
    { id: 'now', label: '我正在做的事' },
    { id: 'plugin', label: 'Youtube插件' },
  ] as const;

  return (
    <div className="min-h-screen text-custom-primary selection:bg-accent/20 bg-custom-primary relative overflow-hidden flex flex-col">
      {/* Background Gradient Light */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-accent/5 blur-[120px] rounded-full pointer-events-none -z-10 opacity-60" />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-custom-primary/80 backdrop-blur-2xl">
        <div className="max-w-6xl mx-auto px-8 h-20 flex items-center justify-between">
          <div 
            className="text-2xl font-bold tracking-tight cursor-pointer font-display hover:text-accent transition-colors" 
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
                  className={`text-sm font-bold tracking-wide transition-all relative py-2 ${activeTab === item.id ? 'text-accent' : 'text-custom-secondary hover:text-custom-primary underline-offset-8'}`}
                >
                  {item.label}
                  {activeTab === item.id && (
                    <motion.div layoutId="nav-underline" className="absolute -bottom-1 left-0 right-0 h-1 bg-accent rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className={`flex-grow pt-20 flex flex-col ${activeTab === 'home' ? 'h-screen' : ''}`}>
        <AnimatePresence mode="wait">
          {activeTab === 'home' && <Home key="home" />}
          {activeTab === 'now' && <WhatImDoing key="now" />}
          {activeTab === 'plugin' && <YoutuReadApp key="plugin" />}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className={`${activeTab === 'home' ? 'py-10' : 'py-20'} text-center bg-custom-secondary/20 transition-all`}>
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-custom-secondary text-[10px] font-bold opacity-30 uppercase tracking-[0.4em]">
            © 2026 Zing • Build to Grow • LifeOS
          </p>
        </div>
      </footer>
    </div>
  );
}
