import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, FileCheck2, ScanSearch } from 'lucide-react';

const STAGES = [
  {
    year: '2024',
    label: '个人协助取证与维权',
    icon: ScanSearch,
    body: [
      '在一起涉及多名受害者的网络诈骗事件中，我整理近 2 万字材料和 150 余张有效图片，协助 70 余名受害者形成统一证据包。',
      '这段经历让我第一次面对“信息很多，但证据并不天然成立”的问题：事实需要排序，材料需要对应，结论需要可以复核。'
    ],
    metrics: [
      { value: '2万字', label: '材料梳理' },
      { value: '150+', label: '有效图片' },
      { value: '70+', label: '受害者' },
    ],
  },
  {
    year: '2026',
    label: '公益诉讼规范办案',
    icon: FileCheck2,
    body: [
      '在浦东新区人民检察院公益诉讼办公室，我参与 40 余件案件的材料整理，并完成 30 余册卷宗归档。',
      '我开始用规范办案的标准重新理解证据：来源、主体、时间、证明目的和材料之间的关联，都必须留下清晰路径。'
    ],
    metrics: [
      { value: '40+', label: '参与案件' },
      { value: '30+', label: '归档卷宗' },
      { value: '10+', label: '外出取证' },
    ],
  },
];

export default function CaseStudy() {
  return (
    <section id="case-study" className="relative scroll-mt-20 overflow-hidden bg-[#eef1f7] py-24 md:py-32">
      <div className="case-grid" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="section-kicker">Evidence case study</p>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-navy md:text-6xl">
            从个人取证到规范办案
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-secondary-grey md:text-lg">
            两段相隔两年的经历，让我重新理解同一件事：信息只有被整理成可追溯、可复核的链条，才会成为真正有用的证据。
          </p>
        </motion.div>

        <div className="relative mt-16 grid gap-8 lg:mt-24 lg:grid-cols-[1fr_auto_1fr] lg:gap-10">
          {STAGES.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <React.Fragment key={stage.year}>
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.65, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="case-card"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-5xl font-semibold text-accent/25">{stage.year}</span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold tracking-[-0.025em] text-navy">{stage.label}</h3>
                  <div className="mt-5 space-y-4 text-sm leading-7 text-secondary-grey">
                    {stage.body.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                  <div className="mt-8 grid grid-cols-3 gap-2 border-t border-navy/10 pt-6">
                    {stage.metrics.map(metric => (
                      <div key={metric.label}>
                        <p className="font-serif text-xl font-semibold text-navy">{metric.value}</p>
                        <p className="mt-1 text-[10px] leading-4 text-navy/40">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                </motion.article>
                {index === 0 && (
                  <div className="hidden items-center justify-center text-accent lg:flex" aria-hidden="true">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-accent/20 bg-white/80 shadow-sm">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
