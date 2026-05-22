import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Search, GraduationCap, Award, Eye } from 'lucide-react';
import { Honor } from '../types';
import { HONORS, EDUCATION } from '../constants';
import { cn } from '../utils';

export default function HonorsGrid() {
  const [selectedHonor, setSelectedHonor] = useState<Honor | null>(null);

  return (
    <section id="education" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-navy mb-6">教育背景与荣誉</h2>
            <p className="text-secondary-grey">
              跨学科的背景不仅是两个领域的叠加，更是思维模式的深度。在法学研究与技术实践中，我始终追求卓越。
            </p>
          </div>
          
          <div className="flex gap-4">
            <div className="flex flex-col items-end">
              <span className="text-3xl font-bold text-navy">Fudan</span>
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-accent">Master of Laws</span>
            </div>
            <div className="w-px h-12 bg-navy/10" />
            <div className="flex flex-col items-end">
              <span className="text-3xl font-bold text-navy">JNU</span>
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-accent">B.S. CS</span>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {EDUCATION.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-warm-white-soft rounded-3xl border border-navy/5 shadow-sm hover:shadow-md transition-all relative overflow-hidden group"
            >
              {/* 悬停背景图片 */}
              {edu.hoverImage && (
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-cover bg-center"
                  style={{ backgroundImage: `url(${edu.hoverImage})` }}
                />
              )}

              <div className="relative z-10">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <GraduationCap className="w-16 h-16 text-navy" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-1">{edu.school}</h3>
                <p className="text-sm font-medium text-accent mb-4">{edu.degree}</p>
                <p className="text-xs text-navy/40 mb-6 font-mono">{edu.period}</p>

                <div className="space-y-4">
                  {edu.awards?.map((award, i) => (
                    <div key={i} className="flex gap-2 text-xs text-secondary-grey">
                      <Award className="w-4 h-4 text-accent/40 flex-shrink-0" />
                      <span>{award}</span>
                    </div>
                  ))}
                </div>

                {/* 悬停时显示提示 */}
                {edu.hoverImage && (
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex items-center gap-1.5 text-[10px] text-accent/70 font-medium">
                      <Eye className="w-3 h-3" />
                      <span>查看 {edu.hoverLabel}</span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Honors Wall */}
        <h3 className="text-2xl font-bold text-navy mb-12 flex items-center gap-3">
          荣誉资质 <span className="h-px flex-1 bg-navy/10" />
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {HONORS.map((honor, idx) => (
            <motion.div
              key={honor.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => setSelectedHonor(honor)}
              className="group relative aspect-square cursor-zoom-in overflow-hidden rounded-2xl bg-warm-white-soft"
            >
              <img 
                src={honor.imageSrc} 
                alt={honor.title}
                className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-warm-white">
                <Search className="w-6 h-6 mb-2" />
                <p className="text-[10px] font-bold uppercase tracking-wider line-clamp-2">{honor.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedHonor && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-6 md:p-12"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedHonor(null)}
              className="absolute inset-0 bg-navy/95 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-warm-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              <div className="md:w-3/5 aspect-square md:aspect-auto">
                <img 
                  src={selectedHonor.imageSrc} 
                  alt={selectedHonor.title}
                  className="w-full h-full object-contain bg-neutral-900"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="md:w-2/5 p-8 md:p-12 flex flex-col justify-center">
                <button 
                  onClick={() => setSelectedHonor(null)}
                  className="absolute top-6 right-6 p-2 hover:bg-navy/5 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                <h3 className="text-2xl md:text-3xl font-bold text-navy mb-4 leading-tight">
                  {selectedHonor.title}
                </h3>
                
                {selectedHonor.issuer && (
                  <p className="text-sm font-medium text-accent mb-2">{selectedHonor.issuer}</p>
                )}
                
                <p className="text-xs text-navy/40 font-mono mb-8">{selectedHonor.date || 'Received'}</p>
                
                {selectedHonor.description && (
                  <p className="text-secondary-grey leading-relaxed italic text-sm border-l-2 border-navy/10 pl-6">
                    {selectedHonor.description}
                  </p>
                )}

                <div className="mt-12 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-navy/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-navy/40">Official Certification</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
