import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Download, Mail, Phone, MessageSquare, Linkedin, ExternalLink } from 'lucide-react';
import { cn } from '../utils';

const NAV_SECTIONS = [
  { label: '实习经历', anchor: 'experience' },
  { label: '项目实践', anchor: 'projects' },
  { label: '学术研究', anchor: 'research' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isDetailsPage = location.pathname === '/details';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 关闭下拉菜单当点击外部
  useEffect(() => {
    const handleClickOutside = () => setIsContactOpen(false);
    if (isContactOpen) {
      document.addEventListener('click', handleClickOutside, { once: true });
    }
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isContactOpen]);

  const handleNavClick = (anchor: string) => {
    setIsMobileOpen(false);
    if (isDetailsPage) {
      // 已在详情页，直接滚动
      const el = document.getElementById(anchor);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      // 在首页，跳转到详情页对应锚点
      navigate(`/details#${anchor}`);
    }
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <nav 
      id="navbar"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled ? "bg-warm-white/80 backdrop-blur-md py-3 border-navy/10 shadow-sm" : "bg-transparent py-5 border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <button onClick={handleLogoClick} className="flex items-baseline gap-1 group">
          <span className="text-2xl font-bold text-navy tracking-tight group-hover:text-accent transition-colors">唐美琪</span>
          <span className="text-sm font-light opacity-40 group-hover:opacity-100 transition-opacity">Macie</span>
        </button>

        {/* 桌面导航 */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_SECTIONS.map(s => (
            <button
              key={s.anchor}
              onClick={() => handleNavClick(s.anchor)}
              className="text-sm font-medium text-navy/60 hover:text-navy transition-colors relative group py-2"
            >
              {s.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-navy transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
          
          <div className="relative" onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setIsContactOpen(!isContactOpen)}
              className="px-5 py-2 bg-navy text-warm-white rounded-full text-sm font-medium hover:bg-navy/90 transition-all flex items-center gap-2"
            >
              联系我
              <ChevronDown className={cn("w-4 h-4 transition-transform", isContactOpen && "rotate-180")} />
            </button>

            <AnimatePresence>
              {isContactOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute right-0 mt-3 w-72 bg-warm-white-soft border border-navy/10 rounded-2xl shadow-xl overflow-hidden p-2"
                >
                  <div className="px-3 pt-3 pb-2">
                    <p className="text-xs font-kai italic text-navy/50 text-center">
                      或许我的 Personality 比我的简历更吸引人，期待和您的见面！
                    </p>
                  </div>
                  
                  <div className="p-3 border-t border-navy/5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-navy/40 mb-3">简历与跳转</p>
                    <a 
                      href="/assets/documents/resume.pdf" 
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 p-2 hover:bg-navy/5 rounded-lg transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-full bg-navy/5 flex items-center justify-center">
                        <Download className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium">查看简历 (PDF)</span>
                        <span className="text-[10px] text-navy/40">最新更新 2026.04</span>
                      </div>
                    </a>
                  </div>

                  <div className="p-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-navy/40 mb-3">联系方式</p>
                    <ContactItem icon={<Mail className="w-4 h-4" />} label="Email" value="Macie2024@163.com" />
                    <ContactItem icon={<Phone className="w-4 h-4" />} label="Phone" value="+86 173-1550-3752" />
                    <ContactItem icon={<MessageSquare className="w-4 h-4" />} label="WeChat" value="17315503752" />
                    <a 
                      href="https://linkedin.com/in/macietang" 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center justify-between p-2 hover:bg-navy/5 rounded-lg transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-navy/5 flex items-center justify-center">
                          <Linkedin className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-medium">LinkedIn</span>
                      </div>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* 移动端汉堡菜单 */}
        <button 
          className="md:hidden p-2 text-navy"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* 移动端展开菜单 */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-warm-white/95 backdrop-blur-md border-t border-navy/5 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1">
              {NAV_SECTIONS.map(s => (
                <button
                  key={s.anchor}
                  onClick={() => handleNavClick(s.anchor)}
                  className="w-full text-left px-4 py-3 text-sm font-medium text-navy rounded-xl hover:bg-navy/5 transition-colors"
                >
                  {s.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function ContactItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center justify-between p-2 hover:bg-navy/5 rounded-lg transition-colors group">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-navy/5 flex items-center justify-center">
          {icon}
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] text-navy/40 font-medium uppercase">{label}</span>
          <span className="text-sm font-mono">{value}</span>
        </div>
      </div>
      <button 
        onClick={() => navigator.clipboard.writeText(value)}
        className="opacity-0 group-hover:opacity-100 p-1.5 hover:bg-navy/10 rounded-md transition-all text-[10px] font-medium"
      >
        复制
      </button>
    </div>
  );
}
