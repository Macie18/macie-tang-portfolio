import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Pause, Play } from 'lucide-react';
import { GLOBAL_GALLERY } from '../constants';

const AUTOPLAY_MS = 5200;

export default function GlobalGallery() {
  const [active, setActive] = useState(0);
  const [manuallyPaused, setManuallyPaused] = useState(false);
  const [hovering, setHovering] = useState(false);
  const paused = manuallyPaused || hovering;
  const current = GLOBAL_GALLERY[active];

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setTimeout(() => setActive(index => (index + 1) % GLOBAL_GALLERY.length), AUTOPLAY_MS);
    return () => window.clearTimeout(timer);
  }, [active, paused]);

  const showPrevious = () => setActive(index => (index - 1 + GLOBAL_GALLERY.length) % GLOBAL_GALLERY.length);
  const showNext = () => setActive(index => (index + 1) % GLOBAL_GALLERY.length);

  return (
    <section id="gallery" className="relative scroll-mt-20 overflow-hidden bg-[#071326] py-24 text-white md:py-32">
      <div className="gallery-aurora gallery-aurora-one" aria-hidden="true" />
      <div className="gallery-aurora gallery-aurora-two" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col justify-between gap-8 md:mb-16 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="section-kicker text-[#9ca7ff]">Beyond the desk</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] md:text-6xl">课堂之外，我也在这些地方</h2>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55 md:text-base">
              这里放的是我在汉堡交换、参加语言活动和认识新朋友时留下的照片。它们不全是正式项目，但都是我很珍惜的经历。
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button onClick={showPrevious} className="gallery-control" aria-label="上一张照片"><ArrowLeft className="h-4 w-4" /></button>
            <button onClick={() => setManuallyPaused(value => !value)} className="gallery-control-wide" aria-label={manuallyPaused ? '继续自动播放' : '暂停自动播放'}>
              {manuallyPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
              {manuallyPaused ? '继续播放' : '自动播放'}
            </button>
            <button onClick={showNext} className="gallery-control" aria-label="下一张照片"><ArrowRight className="h-4 w-4" /></button>
          </div>
        </div>

        <div className="gallery-stage" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
          <div className="absolute inset-0 overflow-hidden">
            <AnimatePresence mode="popLayout">
              <motion.img
                key={`backdrop-${current.src}`}
                src={current.src}
                alt=""
                initial={{ opacity: 0, scale: 1.12 }}
                animate={{ opacity: 0.36, scale: 1.04 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="h-full w-full object-cover blur-3xl saturate-150"
                style={{ objectPosition: current.objectPosition }}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-r from-[#071326]/70 via-[#071326]/20 to-[#071326]/65" />
          </div>

          <AnimatePresence mode="wait">
            <motion.figure
              key={current.src}
              initial={{ opacity: 0, x: 30, scale: 0.985 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -24, scale: 0.99 }}
              transition={{ duration: 0.68, ease: [0.16, 1, 0.3, 1] }}
              className="relative grid h-full w-full md:grid-cols-[1.45fr_.55fr]"
            >
              <div className="relative flex min-h-[360px] items-center justify-center p-4 md:min-h-[610px] md:p-8">
                <img
                  src={current.src}
                  alt={current.title}
                  className="max-h-[570px] w-full rounded-[1.6rem] object-contain shadow-[0_35px_90px_rgba(0,0,0,.38)]"
                  style={{ objectPosition: current.objectPosition }}
                />
              </div>
              <figcaption className="relative flex flex-col justify-end border-t border-white/10 bg-[#071326]/55 p-7 backdrop-blur-2xl md:border-l md:border-t-0 md:p-10">
                <span className="font-mono text-xs text-white/35">{String(active + 1).padStart(2, '0')} / {String(GLOBAL_GALLERY.length).padStart(2, '0')}</span>
                <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.24em] text-[#9ca7ff]">{current.kicker}</p>
                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.035em] md:text-4xl">{current.title}</h3>
                <p className="mt-5 text-sm leading-7 text-white/58">{current.caption}</p>
                <div className="mt-10 h-px overflow-hidden bg-white/10">
                  {!paused && (
                    <motion.span
                      key={`progress-${active}`}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: AUTOPLAY_MS / 1000, ease: 'linear' }}
                      className="block h-full origin-left bg-gradient-to-r from-[#9ca7ff] to-[#57d5f5]"
                    />
                  )}
                </div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="gallery-thumbnails mt-5 flex gap-3 overflow-x-auto pb-3">
          {GLOBAL_GALLERY.map((photo, index) => (
            <button
              key={photo.src}
              onClick={() => setActive(index)}
              className={`gallery-thumbnail ${active === index ? 'is-active' : ''}`}
              aria-label={`查看：${photo.title}`}
              aria-current={active === index ? 'true' : undefined}
            >
              <img src={photo.src} alt="" className="h-full w-full object-cover" style={{ objectPosition: photo.objectPosition }} loading="lazy" />
              <span>{String(index + 1).padStart(2, '0')}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
