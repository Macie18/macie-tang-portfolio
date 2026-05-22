import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Calendar, ChevronLeft, ChevronRight, Maximize2, ImageIcon } from 'lucide-react';
import { Experience, DiagramImage } from '../types';
import { cn } from '../utils';

interface TimelineProps {
  items: Experience[];
  id: string;
  title: string;
}

export default function Timeline({ items, id, title }: TimelineProps) {
  return (
    <section id={id} className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-navy mb-4">{title}</h2>
          <div className="h-1 w-20 bg-navy/10 rounded-full md:mx-0 mx-auto" />
        </motion.div>

        <div className="space-y-32">
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
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 left-0 right-0 p-2 translate-y-full group-hover:translate-y-0 transition-transform">
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
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
          {current < slides.length - 1 && (
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-all backdrop-blur-sm"
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
              style={{ width: `${10 * (16/9)}px` }}
            >
              <img src={src} alt={`缩略图 ${i + 1}`} className="w-full h-full object-cover" draggable={false} />
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
              <button onClick={prev} className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all">
                <ChevronLeft className="w-7 h-7" />
              </button>
            )}
            {current < slides.length - 1 && (
              <button onClick={next} className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all">
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
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        className={cn(
          "relative w-full rounded-3xl overflow-hidden bg-warm-white-soft shadow-2xl border border-navy/5",
          imageRight ? "lg:order-2" : "lg:order-1",
          item.slideImages ? "aspect-video" : "aspect-[4/3]"
        )}
      >
        {item.slideImages ? (
          <SlideViewer slides={item.slideImages} />
        ) : item.liveDemoUrl ? (
          <div className="w-full h-full flex flex-col bg-[#F5F5F7]">
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
            <div className="flex-1 w-full bg-white relative overflow-hidden">
              <iframe 
                src={item.liveDemoUrl} 
                className="w-full h-full border-none"
                title={item.title}
                loading="lazy"
              />
            </div>
          </div>
        ) : item.imageSrc ? (
          <img 
            src={item.imageSrc} 
            alt={item.title} 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            referrerPolicy="no-referrer"
            onError={(e) => {
              if (item.fallbackImageSrc) {
                (e.target as HTMLImageElement).src = item.fallbackImageSrc;
              }
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-navy/5">
            <span className="text-navy/20 font-serif italic text-4xl">Visual Representation</span>
          </div>
        )}
      </motion.div>

      {/* 文字区域 */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        className={cn(
          "flex flex-col justify-center",
          imageRight ? "lg:order-1" : "lg:order-2"
        )}
      >
        <div className="mb-8">
          <span className="px-5 py-2 bg-pill-bg text-accent rounded-full text-xs font-bold uppercase tracking-[0.2em]">
            {item.period}
          </span>
        </div>

        <h3 className="text-4xl md:text-5xl font-bold text-navy mb-2 tracking-tight leading-tight">{item.title}</h3>
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

        <ul className="space-y-5 mb-12 max-w-xl">
          {item.description.map((point, i) => (
            <li key={i} className="flex gap-4 text-base leading-relaxed text-secondary-grey">
              <div className="w-1.5 h-1.5 rounded-full bg-accent/40 mt-2.5 flex-shrink-0" />
              <span className="opacity-90">{point}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-3">
          {item.tags.map(tag => (
            <span key={tag} className="px-4 py-1.5 bg-warm-white-soft border border-navy/10 rounded-full text-xs text-navy/60 font-semibold uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>

        {item.diagramZone && item.diagramZone.length > 0 && (
          <DiagramGallery images={item.diagramZone} />
        )}
      </motion.div>
    </div>
  );
}
