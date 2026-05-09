import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Calendar } from 'lucide-react';
import { Experience } from '../types';
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

function TimelineItem({ item, imageRight }: { item: Experience; imageRight: boolean; key?: string }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
      
      {/* 图片区域 — imageRight=true 时在右(order-2)，否则在左(order-1) */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        className={cn(
          "relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-warm-white-soft shadow-2xl border border-navy/5",
          imageRight ? "lg:order-2" : "lg:order-1"
        )}
      >
        {item.liveDemoUrl ? (
          <div className="w-full h-full flex flex-col bg-[#F5F5F7]">
            {/* Mac Browser Header */}
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

      {/* 文字区域 — 始终左对齐，imageRight=true 时在左(order-1)，否则在右(order-2) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        className={cn(
          "flex flex-col justify-center",
          imageRight ? "lg:order-1" : "lg:order-2"
        )}
      >
        {/* 日期标签 */}
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

        {/* 描述列表：始终左对齐，bullet 在左侧 */}
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
      </motion.div>
    </div>
  );
}
