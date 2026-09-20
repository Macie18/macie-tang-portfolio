import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowDownRight, ArrowUpRight, Download } from 'lucide-react';

const SNAPSHOTS = [
  { value: '107', label: '份合同结构化处理' },
  { value: '87', label: '份法律 AI 测试案例' },
  { value: '40+', label: '件公益诉讼案件' },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.72, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-28 md:pt-36">
      <div className="hero-aurora" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 lg:grid-cols-[1.08fr_.92fr] lg:gap-20 lg:pb-28">
        <div>
          <motion.div {...reveal(0.06)} className="mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-accent" />
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent">
              Legal AI · Compliance · Product
            </span>
          </motion.div>

          <motion.h1 {...reveal(0.12)} className="max-w-4xl text-[clamp(3.35rem,7vw,6.9rem)] font-semibold leading-[.94] tracking-[-0.065em] text-navy">
            把法律问题
            <span className="mt-2 block">做成可验证的</span>
            <span className="text-gradient mt-2 block">系统</span>
          </motion.h1>

          <motion.p {...reveal(0.2)} className="mt-9 max-w-2xl text-base leading-8 text-secondary-grey md:text-lg md:leading-9">
            我本科就读计算机科学与技术，现于复旦大学攻读法律硕士。我的实践集中在法律 AI、数据合规和知识工程：做过法律大模型测试、合同信息抽取、知识图谱标注，也独立开发过劳动者权益产品。我关心的不只是技术能做什么，更关心它如何进入真实的法律工作流程。
          </motion.p>

          <motion.div {...reveal(0.28)} className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#featured" className="button-primary group">
              查看代表项目
              <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <a
              href="/assets/documents/CV%20-%20CN%20-%202026.10.pdf"
              target="_blank"
              rel="noreferrer"
              className="button-secondary group"
            >
              <Download className="h-4 w-4" />
              查看最新简历
              <ArrowUpRight className="h-4 w-4 opacity-50 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          <motion.div {...reveal(0.36)} className="mt-12 grid max-w-2xl grid-cols-3 gap-3 border-t border-navy/10 pt-7">
            {SNAPSHOTS.map(item => (
              <div key={item.label}>
                <p className="font-serif text-2xl font-semibold text-navy md:text-3xl">{item.value}</p>
                <p className="mt-1 text-[10px] leading-4 text-navy/45 md:text-xs">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.94, rotate: 1.5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.95, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-2xl"
        >
          <div className="absolute -inset-8 rounded-[3rem] bg-accent/10 blur-3xl" aria-hidden="true" />
          <div className="group relative aspect-[3/2] overflow-hidden rounded-[2rem] border border-white/70 bg-navy shadow-[0_35px_100px_rgba(10,25,47,.2)]">
            <img
              src="/assets/images/profile.jpg?v=20260920-2"
              alt="唐美琪 Macie Tang"
              className="photo-cinema-bw h-full w-full object-cover object-center transition-transform duration-1000 group-hover:scale-[1.035]"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071326]/80 via-transparent to-transparent" />
            <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/15 bg-[#071326]/55 p-5 text-white backdrop-blur-xl md:inset-x-7 md:bottom-7 md:p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/50">Current focus</p>
                  <p className="mt-2 text-sm font-medium md:text-base">法律科技产品 · 数据合规 · 知识工程</p>
                </div>
                <span className="pulse-dot" aria-label="当前在读" />
              </div>
            </div>
          </div>
          <div className="absolute -right-3 top-12 rounded-full border border-white/70 bg-white/70 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-navy shadow-lg backdrop-blur-xl md:-right-8">
            Fudan · 2024—2027
          </div>
        </motion.div>
      </div>
    </section>
  );
}
