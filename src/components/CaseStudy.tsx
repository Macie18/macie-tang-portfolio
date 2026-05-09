import React from 'react';
import { motion } from 'motion/react';

export default function CaseStudy() {
  return (
    <section id="case-study" className="py-32 bg-[#F3F4F6]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-base font-bold uppercase tracking-[0.3em] text-accent mb-8">案例研究 (Case Study)</h2>
            <p className="text-4xl md:text-5xl lg:text-7xl font-serif italic text-navy leading-[1.1] text-balance font-kai">
              "源于法学生的朴素正义感，从野蛮生长的私力救济，落地于国家司法机关的规范实务审查。"
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-baseline gap-4 border-b border-navy/10 pb-4">
                <span className="text-6xl font-serif font-black opacity-10 italic">2024</span>
                <h3 className="text-xl font-bold uppercase tracking-widest text-navy pt-2">朴素正义与野蛮生长</h3>
              </div>
              
              <div className="text-base text-secondary-grey leading-[1.8] font-kai opacity-90 text-justify space-y-4">
                <p>面对一起受害者分散、立案困难的网络诈骗案，出于法学生的朴素正义感与对群众期盼的回应，我结合 CS 背景的技术手段展开了私力救济。</p>
                <p>连续高负荷一周，我独自梳理了近 2 万字铁证、提取 150+ 张有效图片，并使用技术手段锁定骗子团伙最终成功为 70 余位受害者追回全部欠款。</p>
                <p>这次一线维权，不仅锤炼了我处理海量复杂数字证据的爆发力和执行力，更让我有种从人民中来到人民中去的成就感。</p>
              </div>
              
              <div className="p-8 bg-warm-white rounded-3xl border border-navy/5 shadow-sm relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center font-serif text-accent text-2xl rotate-12">“</div>
                <p className="text-sm font-kai italic text-navy/70 leading-relaxed">
                  "技术不应只是为了效率，更应是为了在无声处听惊雷，在细微处见正义。"
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-baseline gap-4 border-b border-navy/10 pb-4">
                <span className="text-6xl font-serif font-black opacity-10 italic">2026</span>
                <h3 className="text-xl font-bold uppercase tracking-widest text-navy pt-2">沉淀于检察院的规范实务</h3>
              </div>
              
              <div className="text-base text-secondary-grey leading-[1.8] font-kai opacity-90 text-justify space-y-4">
                <p>带着野蛮生长的一线实战经验与对规范工作的好奇心，我进入浦东新区检察院公益检察室实习。</p>
                <p>在协助整理近 40 起真实案件（含大量网络诈骗案）的过程中，我学会了如何规范固定证据、细致整理案宗材料。</p>
                <p>这种从草根维权到规范司法实务的沉淀，彻底重塑了我对待证据链条与实务操作的严谨态度。</p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-12">
                <div className="p-6 bg-navy/5 rounded-2xl border border-navy/5">
                  <p className="text-3xl font-bold text-navy font-serif italic">40+</p>
                  <p className="text-[10px] uppercase text-navy/40 font-bold tracking-widest mt-2">真实案件整理</p>
                </div>
                <div className="p-6 bg-navy/5 rounded-2xl border border-navy/5">
                  <p className="text-3xl font-bold text-navy font-serif italic">70+</p>
                  <p className="text-[10px] uppercase text-navy/40 font-bold tracking-widest mt-2">受害者追回欠款</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
