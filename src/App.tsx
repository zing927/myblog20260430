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
    className="h-[calc(100vh-80px)] flex flex-col justify-center items-center text-center px-6 max-w-4xl mx-auto"
  >
    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-custom-primary font-display tracking-tight">
      沉淀十载 SaaS 体验设计，<br/>于 AI 时代重塑成长。
    </h2>
    <p className="text-lg md:text-xl text-custom-secondary mb-10 max-w-2xl leading-relaxed font-light">
      我是 Zing。在这里，我记录关于 LifeOS 的构建、个人增长的底层逻辑，以及如何利用 AI 探索“小而美”的产品可能。
    </p>
    
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-custom-secondary border border-custom text-custom-secondary hover:text-custom-primary transition-all">
        <MessageSquare size={20} />
        <span className="font-medium tracking-wide">微信：zing927</span>
      </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
      {[
        { label: "《无限自然》", type: "Newsletter", icon: <Zap size={24} />, href: "https://quaily.com/zing927" },
        { label: "个人增长 X 因素", type: "知识库", icon: <BookOpen size={24} />, href: "https://flowus.cn/share/aa202f8a-14a7-4429-a5a8-2b459a4de181?code=U4N4HU" },
        { label: "AI 时代的设计师", type: "知识库", icon: <Monitor size={24} />, href: "https://flowus.cn/zing/share/614d3b88-98e4-476a-9282-44500b47ea9f?code=U4N4HU" }
      ].map((link, i) => (
        <a key={i} href={link.href} target="_blank" rel="noreferrer" className="flex flex-col items-center p-6 rounded-2xl bg-custom-secondary hover:bg-custom-primary hover:shadow-2xl transition-all border border-custom group">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform bg-custom-primary text-custom-primary border border-custom shadow-sm">
            {link.icon}
          </div>
          <span className="font-semibold text-custom-primary mb-1">{link.label}</span>
          <span className="text-xs text-custom-secondary">{link.type}</span>
        </a>
      ))}
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
      className="max-w-4xl mx-auto px-6 py-20"
    >
      <h2 className="text-3xl font-bold mb-10 text-custom-primary font-display">我正在做的事</h2>
      <div className="space-y-8">
        {items.map((item, index) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`flex gap-6 items-start p-8 rounded-3xl bg-custom-secondary border border-custom transition-all duration-300 hover:shadow-soft group ${item.href ? 'cursor-pointer hover:border-accent/40' : ''}`}
            onClick={() => item.href && window.open(item.href, '_blank')}
          >
            <div className="p-4 rounded-2xl bg-custom-primary shadow-sm flex-shrink-0 border border-custom text-custom-secondary group-hover:text-custom-primary transition-colors">
              {item.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2 text-custom-primary">
                {item.title}
                <ArrowRight size={18} className="text-custom-secondary opacity-30" />
              </h3>
              <p className="text-custom-secondary mb-4 leading-relaxed">{item.desc}</p>
              <div className="inline-block px-3 py-1 rounded-full bg-custom-primary text-xs font-medium text-custom-secondary border border-custom">
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
      <section className="text-center mb-24 py-16 bg-custom-secondary rounded-[40px] px-8 border border-custom shadow-inner">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 bg-custom-primary text-custom-primary border border-custom text-xs font-bold tracking-widest uppercase rounded-full mb-6">
            Beta 现已发布
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-custom-primary font-display">
            YouTube 视频<br/><span className="text-accent">一键变图文笔记</span>
          </h1>
          <p className="text-xl md:text-2xl text-custom-secondary mb-10 max-w-2xl mx-auto leading-relaxed">
            别再盯着进度条了。用 DeepSeek 把视频转成带图的 Markdown 笔记，支持自定义 Prompt。
          </p>
          <button 
            onClick={() => setShowContactModal(true)}
            className="px-8 py-4 bg-custom-primary text-custom-primary border border-custom rounded-full font-semibold transition-all flex items-center gap-2 mx-auto shadow-lg hover:bg-accent hover:text-white hover:border-accent active:scale-95 group"
          >
            <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
            立即下载插件
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

    {/* Features */}
    <section className="mb-32">
      <h3 className="text-3xl font-bold mb-16 text-center text-custom-primary font-display">核心功能</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { icon: <ImageIcon/>, title: "视频转图文", desc: "自动抓取视频关键画面，配合 AI 总结，看图就能懂视频。" },
          { icon: <FileText/>, title: "Markdown 导出", desc: "完美适配 Obsidian、Notion、Heptabase，文档整整齐齐。" },
          { icon: <Zap/>, title: "支持自定义 Prompt", desc: "想写大纲、写摘要、还是写代码分析？你自己定。" },
          { icon: <PlayCircle/>, title: "导出笔记长图", desc: "不方便看文档时，一张长图搞定所有重点。" },
          { icon: <DollarSign/>, title: "使用成本极低", desc: "接入 DeepSeek 模型，价格几乎可以忽略不计。" }
        ].map((feat, i) => (
          <div key={i} className="p-8 rounded-3xl bg-custom-primary border border-custom hover:shadow-soft transition-all group">
            <div className="w-12 h-12 rounded-xl bg-custom-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-custom-primary">
              {feat.icon}
            </div>
            <h4 className="text-xl font-bold mb-2 text-custom-primary">{feat.title}</h4>
            <p className="text-custom-secondary leading-relaxed">{feat.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Comparison Table */}
    <section className="mb-32 overflow-x-auto">
      <h3 className="text-3xl font-bold mb-12 text-center text-custom-primary font-display">为什么用它？</h3>
      <div className="min-w-[600px] border border-custom rounded-3xl overflow-hidden bg-custom-secondary">
        <div className="grid grid-cols-3 bg-custom-secondary border-b border-custom">
          <div className="p-6 text-xs font-bold uppercase tracking-widest text-custom-secondary opacity-50">需求</div>
          <div className="p-6 text-xs font-bold uppercase tracking-widest text-custom-secondary opacity-50">传统方式</div>
          <div className="p-6 text-xs font-bold uppercase tracking-widest text-accent">YoutuRead</div>
        </div>
        {[
          { label: "记笔记", old: "手动截图 + 打字", neu: "一键自动生成" },
          { label: "整理格式", old: "乱七八糟", neu: "标准 Markdown，带图带标题" },
          { label: "个性化", old: "AI 给什么看什么", neu: "想让 AI 怎么写，你自己定" },
          { label: "成本", old: "每月订阅贵", neu: "DeepSeek 驱动，极低成本" }
        ].map((row, i) => (
          <div key={i} className="grid grid-cols-3 border-b last:border-0 border-custom bg-custom-primary">
            <div className="p-6 font-bold text-custom-primary">{row.label}</div>
            <div className="p-6 text-custom-secondary italic opacity-60">{row.old}</div>
            <div className="p-6 font-medium text-custom-primary flex items-center gap-2">
              <Check size={16} className="text-green-500" />
              {row.neu}
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Social Media Section */}
    <section className={`p-12 rounded-[40px] relative overflow-hidden bg-custom-secondary border border-custom`}>
      <div className="relative z-10 max-w-3xl">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 text-custom-primary">
          <Twitter size={24} className="text-blue-400" />
          社交媒体分享
        </h3>
        <div className="p-8 rounded-2xl bg-custom-primary border border-custom">
          <p className="font-bold mb-4 text-xl text-custom-primary">安利一个 GitHub 上的自制神器：YoutuRead</p>
          <p className="mb-6 text-custom-secondary leading-loose italic">如果你也跟我一样嫌视频太长废时间，试试看这个新工具...</p>
          <div className="space-y-4 text-custom-primary">
             <p>✅ <b>真·图文并茂：</b>不再是干巴巴的文字总结。</p>
             <p>✅ <b>笔记党福音：</b>直接导 Markdown，完美匹配 Obsidian。</p>
             <p>✅ <b>Prompt 自由：</b>让 AI 按你的习惯去写摘要。</p>
             <p>✅ <b>价格屠夫：</b>接入 DeepSeek 真的不用心疼钱！</p>
          </div>
        </div>
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
    <div className="min-h-screen text-custom-primary selection:bg-accent/20 bg-custom-primary">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-custom-primary/70 backdrop-blur-xl border-b border-custom">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div 
            className="text-xl font-bold tracking-tight cursor-pointer font-display" 
            onClick={() => setActiveTab('home')}
          >
            Zing's Openlife
          </div>
          
          <div className="flex items-center gap-4 md:gap-8">
            <div className="flex gap-4 md:gap-8 mr-4 md:mr-8 transition-all">
              {navItems.map((item) => (
                <button 
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`text-sm font-medium transition-all relative py-2 ${activeTab === item.id ? 'text-accent' : 'text-custom-secondary hover:text-custom-primary'}`}
                >
                  {item.label}
                  {activeTab === item.id && (
                    <motion.div layoutId="nav-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="min-h-screen overflow-x-hidden">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && <Home key="home" />}
          {activeTab === 'now' && <WhatImDoing key="now" />}
          {activeTab === 'plugin' && <YoutuReadApp key="plugin" />}
        </AnimatePresence>
      </main>

      {/* Footer */}
      {activeTab !== 'home' && (
        <footer className="py-12 border-t border-custom text-center bg-custom-secondary/20">
          <p className="text-custom-secondary text-sm font-medium opacity-50">
            © 2026 Zing. Crafted with Logic.
          </p>
        </footer>
      )}
    </div>
  );
}
