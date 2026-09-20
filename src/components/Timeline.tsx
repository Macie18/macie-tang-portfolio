import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Calendar, ChevronLeft, ChevronRight, Maximize2, ExternalLink } from 'lucide-react';
import { Experience, DiagramImage } from '../types';
import { cn } from '../utils';

interface TimelineProps {
  items: Experience[];
  id: string;
  title: string;
}

export default function Timeline({ items, id, title }: TimelineProps) {
  return (
    <section id={id} className="scroll-mt-20 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 1, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center md:mb-20 md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-navy mb-4">{title}</h2>
          <div className="h-1 w-20 bg-navy/10 rounded-full md:mx-0 mx-auto" />
        </motion.div>

        <div className="space-y-24 md:space-y-32">
          {items.map((item, index) => (
            <TimelineItem 
              key={item.id} 
              item={item} 
              imageRight={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 图表区画廊 ─────────────────────────────── */
function DiagramGallery({ images }: { images: DiagramImage[] }) {
  const [lightbox, setLightbox] = useState<DiagramImage | null>(null);

  return (
    <>
      <div className="mt-6 grid grid-cols-2 gap-3">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setLightbox(img)}
            className="group relative rounded-xl overflow-hidden aspect-[4/3] bg-navy/5 border border-navy/10 hover:border-accent/30 transition-all"
          >
            <img
              src={img.src}
              alt={img.label}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/75 via-transparent to-transparent transition-opacity" />
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p className="text-[10px] font-bold text-white uppercase tracking-wider leading-tight">{img.label}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-navy/95 backdrop-blur-md"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.88, y: 24 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.88, y: 24 }}
              className="relative max-w-2xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={lightbox.src}
                alt={lightbox.label}
                className="w-full rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="mt-4 text-center">
                <p className="text-lg font-bold text-white">{lightbox.label}</p>
                {lightbox.caption && (
                  <p className="text-sm text-white/60 mt-1">{lightbox.caption}</p>
                )}
              </div>
              <button
                onClick={() => setLightbox(null)}
              className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white backdrop-blur-sm transition-colors"
              aria-label="关闭图片预览"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function CompactLivePreview({ url, title }: { url: string; title: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="group mt-7 block overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-[0_18px_45px_rgba(10,25,47,.08)] transition-all duration-500 hover:-translate-y-1 hover:border-accent/25"
      aria-label={`打开 ${title} 在线网页`}
    >
      <div className="flex h-9 items-center gap-1.5 border-b border-neutral-200 bg-[#f2f3f6] px-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 min-w-0 flex-1 truncate rounded-md bg-white px-3 py-1 font-mono text-[9px] text-black/35">{url}</span>
        <ExternalLink className="h-3.5 w-3.5 text-navy/35 transition-colors group-hover:text-accent" />
      </div>
      <div className="relative h-56 bg-white md:h-64">
        <iframe src={url} title={`${title} 网页预览`} className="pointer-events-none h-full w-full border-0" loading="lazy" tabIndex={-1} />
        <span className="absolute bottom-3 right-3 rounded-full bg-[#071326]/85 px-3 py-1.5 text-[9px] font-semibold text-white shadow-lg backdrop-blur-lg">实时网页预览</span>
      </div>
    </a>
  );
}

/* ─── 幻灯片查看器 ─────────────────────────────── */
function SlideViewer({ slides }: { slides: string[] }) {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const prev = useCallback(() => setCurrent(c => Math.max(0, c - 1)), []);
  const next = useCallback(() => setCurrent(c => Math.min(slides.length - 1, c + 1)), [slides.length]);

  return (
    <>
      <div className="w-full h-full flex flex-col bg-[#1a1a2e] select-none">
        {/* 顶部标题栏 */}
        <div className="h-9 flex items-center justify-between px-4 bg-[#16213e] border-b border-white/10 flex-shrink-0">
          <span className="text-[11px] font-semibold text-white/50 tracking-wider uppercase">美团不美 · 小城杯答辩 PPT</span>
            <button
              onClick={() => setLightbox(true)}
            className="p-1 hover:bg-white/10 rounded transition-colors text-white/40 hover:text-white/80"
              title="全屏查看"
              aria-label="全屏查看幻灯片"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 幻灯片主区域 */}
        <div className="flex-1 relative overflow-hidden">
          <img
            key={current}
            src={slides[current]}
            alt={`幻灯片 ${current + 1}`}
            className="w-full h-full object-contain"
            draggable={false}
          />

          {/* 左右箭头 */}
          {current > 0 && (
            <button
              onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-all backdrop-blur-sm"
                aria-label="上一张幻灯片"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
          {current < slides.length - 1 && (
            <button
              onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-all backdrop-blur-sm"
                aria-label="下一张幻灯片"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* 底部缩略图导航条 */}
        <div className="h-16 flex-shrink-0 bg-[#16213e] border-t border-white/10 flex items-center gap-1.5 px-3 overflow-x-auto">
          {slides.map((src, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={cn(
                "flex-shrink-0 h-10 rounded overflow-hidden border-2 transition-all",
                i === current ? "border-accent scale-110" : "border-transparent opacity-50 hover:opacity-100"
              )}
              style={{ width: '64px' }}
              aria-label={`查看第 ${i + 1} 张幻灯片`}
            >
              <img src={src} alt="" className="w-full h-full object-cover" draggable={false} loading="lazy" />
            </button>
          ))}
        </div>

        {/* 页码 */}
        <div className="h-7 flex-shrink-0 bg-[#16213e] flex items-center justify-center">
          <span className="text-[11px] text-white/40 font-mono">{current + 1} / {slides.length}</span>
        </div>
      </div>

      {/* Lightbox 全屏模式 */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[200] bg-black/95 flex flex-col items-center justify-center"
          onClick={() => setLightbox(false)}
        >
          <div className="relative w-full max-w-6xl px-4" onClick={e => e.stopPropagation()}>
            <img
              src={slides[current]}
              alt={`幻灯片 ${current + 1}`}
              className="w-full rounded-lg shadow-2xl"
            />
            {current > 0 && (
              <button onClick={prev} className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all" aria-label="上一张幻灯片">
                <ChevronLeft className="w-7 h-7" />
              </button>
            )}
            {current < slides.length - 1 && (
              <button onClick={next} className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all" aria-label="下一张幻灯片">
                <ChevronRight className="w-7 h-7" />
              </button>
            )}
          </div>
          <p className="mt-4 text-white/40 text-sm font-mono">{current + 1} / {slides.length} · 点击空白处关闭</p>
        </div>
      )}
    </>
  );
}

function TimelineItem({ item, imageRight }: { item: Experience; imageRight: boolean; key?: string }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
      
      {/* 图片/幻灯片区域 */}
      <motion.div 
        initial={{ opacity: 1, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.16 }}
        transition={{ duration: 0.68, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "relative w-full rounded-3xl overflow-hidden bg-warm-white-soft shadow-2xl border border-navy/5",
          imageRight ? "lg:order-2" : "lg:order-1",
          item.slideImages ? "aspect-video" : "aspect-[16/10]"
        )}
      >
        {item.slideImages ? (
          <SlideViewer slides={item.slideImages} />
        ) : item.imageSrc ? (
          <div className="group relative h-full w-full">
            <img
              src={item.imageSrc}
              alt={item.imageLabel || item.title}
              className={cn(
                'h-full w-full transition-transform duration-700 group-hover:scale-[1.025]',
                item.imageFit === 'contain' ? 'bg-[#eef1f7] object-contain p-5' : 'object-cover'
              )}
            />
            {(item.imageLabel || item.imageNote) && (
              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/15 bg-[#071326]/65 p-4 text-white backdrop-blur-xl">
                {item.imageLabel && <p className="text-sm font-semibold">{item.imageLabel}</p>}
                {item.imageNote && <p className="mt-1 text-[10px] tracking-wide text-white/55">{item.imageNote}</p>}
              </div>
            )}
          </div>
        ) : item.liveDemoUrl ? (
          <a
            href={item.liveDemoUrl}
            target="_blank"
            rel="noreferrer"
            className="group relative flex h-full w-full flex-col bg-[#F5F5F7]"
            aria-label={`打开 ${item.title} 在线产品`}
          >
            <div className="h-10 bg-neutral-100 flex items-center px-4 gap-2 border-b border-neutral-200">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57] shadow-inner" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-inner" />
                <div className="w-3 h-3 rounded-full bg-[#28C840] shadow-inner" />
              </div>
              <div className="ml-4 h-6 px-4 bg-white rounded-md text-[11px] text-neutral-400 flex items-center overflow-hidden flex-1 border border-neutral-200 truncate font-mono">
                {item.liveDemoUrl}
              </div>
            </div>
            <div className="relative w-full flex-1 overflow-hidden bg-white">
              <iframe 
                src={item.liveDemoUrl} 
                className="pointer-events-none h-full w-full border-none"
                title={`${item.title} 网页预览`}
                loading="lazy"
                tabIndex={-1}
              />
            </div>
            <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#071326]/85 px-4 py-2 text-xs font-semibold text-white shadow-xl backdrop-blur-xl transition-transform duration-300 group-hover:-translate-y-1">
              打开 Lawbor <ExternalLink className="h-3.5 w-3.5" />
            </span>
          </a>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-navy/5">
            <span className="text-navy/20 font-serif italic text-4xl">Visual Representation</span>
          </div>
        )}
      </motion.div>

      {/* 文字区域 */}
      <motion.div 
        initial={{ opacity: 1, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.16 }}
        transition={{ duration: 0.68, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "flex flex-col justify-center",
          imageRight ? "lg:order-1" : "lg:order-2"
        )}
      >
        <div className="mb-8">
          {item.eyebrow && <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-accent">{item.eyebrow}</p>}
          <span className="px-5 py-2 bg-pill-bg text-accent rounded-full text-xs font-bold uppercase tracking-[0.2em]">
            {item.period}
          </span>
        </div>

        <h3 className="text-3xl md:text-5xl font-bold text-navy mb-2 tracking-[-0.035em] leading-tight">{item.title}</h3>
        <p className="text-xl font-medium text-navy/60 mb-8">{item.subtitle}</p>

        <div className="flex flex-wrap gap-x-6 gap-y-2 mb-10 text-sm text-secondary-grey">
          <div className="flex items-center gap-1.5 font-medium">
            <MapPin className="w-4 h-4 text-accent/60" />
            {item.location}
          </div>
          <div className="flex items-center gap-1.5 font-medium">
            <Calendar className="w-4 h-4 text-accent/60" />
            {item.period}
          </div>
        </div>

        <ul className="space-y-4 mb-9 max-w-xl">
          {item.description.map((point, i) => (
            <li key={i} className="flex gap-4 text-base leading-relaxed text-secondary-grey">
              <div className="w-1.5 h-1.5 rounded-full bg-accent/40 mt-2.5 flex-shrink-0" />
              <span className="opacity-90">{point}</span>
            </li>
          ))}
        </ul>

        {item.metrics && item.metrics.length > 0 && (
          <div className="mb-8 grid grid-cols-3 gap-3">
            {item.metrics.map(metric => (
              <div key={metric.label} className="rounded-2xl border border-navy/8 bg-white/70 p-4">
                <p className="font-serif text-2xl font-semibold text-navy">{metric.value}</p>
                <p className="mt-1 text-[10px] leading-4 text-navy/45">{metric.label}</p>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-3">
          {item.tags.map(tag => (
            <span key={tag} className="px-4 py-1.5 bg-warm-white-soft border border-navy/10 rounded-full text-xs text-navy/60 font-semibold uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>

        {item.liveDemoUrl && (
          <a
            href={item.liveDemoUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-semibold text-navy underline decoration-accent/40 underline-offset-4 transition-colors hover:text-accent"
          >
            体验在线产品 <ExternalLink className="h-4 w-4" />
          </a>
        )}

        {item.documentUrl && (
          <a
            href={item.documentUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex w-fit items-center gap-2 text-sm font-semibold text-navy underline decoration-accent/40 underline-offset-4 transition-colors hover:text-accent"
          >
            {item.documentLabel || '查看证明 PDF'} <ExternalLink className="h-4 w-4" />
          </a>
        )}

        {item.diagramZone && item.diagramZone.length > 0 && (
          <DiagramGallery images={item.diagramZone} />
        )}

        {item.liveDemoUrl && (item.imageSrc || item.slideImages) && (
          <CompactLivePreview url={item.liveDemoUrl} title={item.title} />
        )}
      </motion.div>
    </div>
  );
}
