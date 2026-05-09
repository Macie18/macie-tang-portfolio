import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 md:order-1"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="h-px w-8 bg-navy/20" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-navy/60">Legal AI & Compliance</span>
          </motion.div>

          {/* 标题：纯汉字格式，分行排列 */}
          <h1 className="font-bold leading-[1.05] mb-12 text-navy tracking-tighter">
            <span className="block text-5xl md:text-6xl lg:text-7xl mb-2">跨越法理与代码</span>
            <span className="block text-5xl md:text-6xl lg:text-7xl mb-2">构筑真实世界的</span>
            <span className="relative inline-block">
              <span className="text-6xl md:text-7xl lg:text-9xl font-serif font-bold text-accent">合规</span>
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute -bottom-2 left-0 h-2 bg-accent/20 rounded-full"
              />
            </span>
          </h1>

          <div className="max-w-xl mb-12">
            <p className="text-lg md:text-xl text-secondary-grey leading-relaxed font-kai opacity-90 text-balance">
              "作为一名拥有计算机本科学历的复旦法学硕士，我不只停留在书面的法理研究。我对利用代码改变生活这件事充满激情，同时也把学习外语视为终身的浪漫与热爱。这种<span className="text-navy font-semibold">"法理 × 技术 × 语言"</span>的斜杠视角，让我能自由穿梭于底层逻辑与全球规则之间。基于对技术的信仰和对法律的敬畏，我热衷于探索AI技术并开发法律AI小产品，用理性思维去解决感性认识的需求。"
            </p>
          </div>

          {/* 直接跳转到详情页的按钮 */}
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => navigate('/details')}
              className="inline-flex items-center gap-3 px-8 py-4 bg-navy text-warm-white rounded-full font-medium hover:bg-navy/90 hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-navy/20"
            >
              了解经历
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 md:order-2 relative aspect-[3/4] md:aspect-square lg:aspect-[4/5] overflow-hidden rounded-3xl group"
        >
          <img 
            src="/assets/images/profile.jpg" 
            alt="Macie Tang" 
            className="w-full h-full object-cover grayscale brightness-[1.05] contrast-[1.1] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
            onError={(e) => {
              // fallback to original if local image not found
              (e.target as HTMLImageElement).src = '/input_file_0.png';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent opacity-60" />
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-6 left-6 right-6 p-6 bg-warm-white/10 backdrop-blur-md border border-warm-white/20 rounded-2xl text-warm-white"
          >
            <p className="text-xs uppercase tracking-widest font-semibold mb-1 opacity-80">Current Status</p>
            <p className="text-sm font-medium">Fudan University Law School • 2024–2027</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
