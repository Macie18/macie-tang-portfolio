import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Award, BookOpen, ExternalLink, Eye, GraduationCap, X } from 'lucide-react';
import { EDUCATION, HONORS } from '../constants';
import { Honor } from '../types';

export default function HonorsGrid() {
  const [selectedHonor, setSelectedHonor] = useState<Honor | null>(null);
  const usesPdfPreview = Boolean(selectedHonor?.documentSrc && (selectedHonor.documentPage || 1) > 1);

  useEffect(() => {
    if (!selectedHonor) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedHonor(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedHonor]);

  return (
    <section id="education" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-col justify-between gap-8 md:mb-20 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="section-kicker">Education & selected honors</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-navy md:text-6xl">教育背景与精选荣誉</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-secondary-grey">
              计算机训练让我习惯拆解系统，法律训练让我持续追问规则、责任与证据。这里保留与当前方向最相关的教育和成果。
            </p>
          </div>
          <div className="flex items-center gap-4 text-right">
            <div><p className="text-2xl font-bold text-navy">Fudan</p><p className="text-[10px] font-bold uppercase tracking-[0.22em] text-accent">Master of Laws</p></div>
            <div className="h-10 w-px bg-navy/10" />
            <div><p className="text-2xl font-bold text-navy">JNU</p><p className="text-[10px] font-bold uppercase tracking-[0.22em] text-accent">B.S. Computer Science</p></div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {EDUCATION.map((edu, index) => (
            <motion.article
              key={edu.school}
              initial={{ opacity: 1, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="education-card group"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-navy">{edu.school}</h3>
                  <p className="mt-1 text-sm font-medium text-accent">{edu.degree}</p>
                </div>
                <GraduationCap className="h-8 w-8 text-navy/10 transition-colors group-hover:text-accent/25" />
              </div>
              <p className="mt-5 font-mono text-xs text-navy/40">{edu.period}</p>
              <div className="mt-7 space-y-3">
                {edu.awards.map(award => (
                  <p key={award} className="flex items-start gap-2 text-xs leading-5 text-secondary-grey">
                    <Award className="mt-0.5 h-3.5 w-3.5 flex-none text-accent/55" /> {award}
                  </p>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-2">
                {edu.courses.map(course => <span key={course} className="mini-pill">{course}</span>)}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-20 flex items-center gap-4 md:mt-28">
          <h3 className="text-2xl font-semibold text-navy">精选荣誉与发表</h3>
          <span className="h-px flex-1 bg-navy/10" />
        </div>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-secondary-grey">
          为保护隐私，已移除含身份证号、准考证号等敏感字段的原始证书墙，只展示与专业方向相关的精选项目。
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {HONORS.map((honor, index) => (
            <motion.button
              key={honor.id}
              initial={{ opacity: 1, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedHonor(honor)}
              className="honor-card group text-left"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#0d1830]">
                {honor.imageSrc ? (
                  <img
                    src={honor.imageSrc}
                    alt=""
                    className={`h-full w-full transition-all duration-700 group-hover:scale-[1.025] ${honor.imageFit === 'contain' ? 'bg-[#eef1f7] object-contain p-4' : 'object-cover'}`}
                  />
                ) : (
                  <div className="flex h-full items-center justify-center"><BookOpen className="h-10 w-10 text-white/25" /></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071326]/85 via-transparent to-transparent" />
                <span className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/25 text-white backdrop-blur-lg">
                  <Eye className="h-4 w-4" />
                </span>
                {honor.documentSrc && <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-[#071326]/75 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-lg">PDF 预览</span>}
                {honor.placeholder && <span className="absolute left-4 top-4 rounded-full bg-white/10 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-lg">待补素材</span>}
              </div>
              <div className="px-1 pb-2 pt-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent">{honor.date || 'Selected'}</p>
                <h4 className="mt-3 text-base font-semibold leading-6 text-navy">{honor.title}</h4>
                {honor.issuer && <p className="mt-2 text-xs leading-5 text-navy/45">{honor.issuer}</p>}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedHonor && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[80] flex items-center justify-center p-4 md:p-10" role="dialog" aria-modal="true" aria-label={selectedHonor.title}>
            <button className="absolute inset-0 bg-[#071326]/90 backdrop-blur-xl" onClick={() => setSelectedHonor(null)} aria-label="关闭荣誉预览" />
            <motion.div initial={{ opacity: 0, y: 20, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.97 }} className="relative z-10 grid max-h-[90vh] w-full max-w-5xl overflow-auto rounded-[2rem] bg-[#f8f9fc] shadow-2xl md:grid-cols-[1.2fr_.8fr]">
              <div className={usesPdfPreview ? 'min-h-[520px] bg-white md:min-h-[680px]' : 'flex min-h-80 items-center bg-[#071326] p-5 md:min-h-[600px] md:p-10'}>
                {selectedHonor.imageSrc && !usesPdfPreview ? (
                  <img src={selectedHonor.imageSrc} alt={selectedHonor.title} className="h-full max-h-[70vh] w-full object-contain" />
                ) : selectedHonor.documentSrc ? (
                  <iframe
                    src={`${selectedHonor.documentSrc}#page=${selectedHonor.documentPage || 1}&zoom=page-width`}
                    title={`${selectedHonor.title}原始文件`}
                    className="h-full min-h-[520px] w-full border-0 md:min-h-[680px]"
                  />
                ) : null}
              </div>
              <div className="relative flex flex-col justify-center p-8 md:p-12">
                <button onClick={() => setSelectedHonor(null)} className="absolute right-5 top-5 rounded-full p-2 text-navy transition-colors hover:bg-navy/5" aria-label="关闭荣誉预览"><X className="h-5 w-5" /></button>
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-accent">{selectedHonor.date || 'Selected honor'}</p>
                <h3 className="mt-5 text-2xl font-semibold leading-tight text-navy md:text-3xl">{selectedHonor.title}</h3>
                {selectedHonor.issuer && <p className="mt-4 text-sm font-medium text-navy/50">{selectedHonor.issuer}</p>}
                {selectedHonor.description && <p className="mt-8 border-l-2 border-accent/30 pl-5 text-sm leading-7 text-secondary-grey">{selectedHonor.description}</p>}
                {selectedHonor.documentSrc && (
                  <a
                    href={`${selectedHonor.documentSrc}#page=${selectedHonor.documentPage || 1}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-navy underline decoration-accent/40 underline-offset-4 transition-colors hover:text-accent"
                  >
                    在新窗口打开原始 PDF <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
