import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface FeaturedItem {
  index: string;
  label: string;
  title: string;
  description: string;
  result: string;
  href: string;
  image?: string;
  liveUrl?: string;
}

const FEATURED: FeaturedItem[] = [
  {
    index: '01',
    label: 'LEGAL AUTOMATION',
    title: '107 份合同的结构化工作流',
    description: '把批量 OCR、11 字段提取和人工复核组合成可验证的尽调台账流程。',
    result: '0.5 天交付 · 95%+ 抽查准确率',
    image: '/assets/images/xinghan-office-life.jpg',
    href: '/details#experience',
  },
  {
    index: '02',
    label: 'LEGAL PRODUCT',
    title: 'Lawbor 劳动者权益平台',
    description: '从需求、架构到部署完成六个功能模块，并将数据隔离落到权限设计中。',
    result: '6 个模块 · 全栈开发',
    href: '/details#projects',
    liveUrl: 'https://lawbor.vercel.app',
  },
  {
    index: '03',
    label: 'KNOWLEDGE ENGINEERING',
    title: '法律大模型与知识图谱',
    description: '围绕测试案例、标签体系和知识工程，把研究问题拆解为可执行的数据工作。',
    result: '87 份案例 · 国家重点研发计划',
    image: '/assets/images/research-certificate.png',
    href: '/details#research',
  },
];

export default function FeaturedProjects() {
  const navigate = useNavigate();

  return (
    <section id="featured" className="relative overflow-hidden bg-[#071326] py-24 text-white md:py-32">
      <div className="featured-orb" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-col justify-between gap-8 md:mb-20 md:flex-row md:items-end">
          <div>
            <p className="section-kicker text-[#9ca7ff]">Selected work</p>
            <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.045em] text-white md:text-6xl">
              不只展示结果，也展示问题是怎样被拆开的
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-white/50 md:text-right">
            每个项目都按“问题、行动、结果、证据”组织。缺少的公开素材已预留同名文件，后续可直接替换。
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {FEATURED.map((item, index) => {
            const content = (
              <>
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                {item.liveUrl ? (
                  <div className="relative aspect-[16/10] bg-white">
                    <div className="absolute inset-x-0 top-0 z-10 flex h-7 items-center gap-1.5 border-b border-black/10 bg-[#f2f3f6] px-3">
                      <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                      <span className="h-2 w-2 rounded-full bg-[#ffbd2e]" />
                      <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                      <span className="ml-2 truncate text-[8px] text-black/35">lawbor.vercel.app</span>
                    </div>
                    <iframe
                      src={item.liveUrl}
                      title="Lawbor 产品互动网页"
                      className="h-full w-full border-0 pt-7"
                      loading="lazy"
                    />
                    <span className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-[#071326]/85 px-3 py-1.5 text-[9px] font-semibold text-white shadow-lg backdrop-blur-lg">可直接操作</span>
                  </div>
                ) : (
                  <img
                    src={item.image}
                    alt=""
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                    loading="lazy"
                  />
                )}
              </div>
              <div className="mt-7 flex items-center justify-between">
                <span className="text-[10px] font-bold tracking-[0.24em] text-[#9ca7ff]">{item.index} / {item.label}</span>
                <ArrowUpRight className="h-5 w-5 text-white/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
              </div>
              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.025em] text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/55">{item.description}</p>
              <p className="mt-6 border-t border-white/10 pt-5 text-xs font-medium text-white/80">{item.result}</p>
              {item.liveUrl && (
                <a href={item.liveUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#aeb6ff] transition-colors hover:text-white">
                  在新页面打开 <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
              </>
            );

            const motionProps = {
              initial: { opacity: 0, y: 28 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, amount: 0.2 },
              transition: { duration: 0.65, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] as const },
              className: 'featured-card group text-left',
            };

            return item.liveUrl ? (
              <motion.div key={item.index} {...motionProps}>
                {content}
              </motion.div>
            ) : (
              <motion.button key={item.index} {...motionProps} onClick={() => navigate(item.href)}>
                {content}
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
