import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react';
import { Download, Mail, Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { cn } from '../utils';

const SECTIONS = [
  { label: '实习', anchor: 'experience' },
  { label: '项目', anchor: 'projects' },
  { label: '研究', anchor: 'research' },
  { label: '国际视野', anchor: 'gallery' },
  { label: '教育与荣誉', anchor: 'education' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.25 });

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setIsMobileOpen(false), [location.pathname, location.hash]);

  const goToSection = (anchor: string) => {
    setIsMobileOpen(false);
    if (location.pathname === '/details') {
      document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', `/details#${anchor}`);
    } else {
      navigate(`/details#${anchor}`);
    }
  };

  return (
    <>
      <nav
        className={cn(
          'fixed inset-x-0 top-0 z-50 border-b transition-all duration-500',
          isScrolled ? 'border-navy/10 bg-[#f8f9fc]/85 py-3 shadow-[0_10px_40px_rgba(10,25,47,.06)] backdrop-blur-2xl' : 'border-transparent bg-transparent py-5'
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <button onClick={() => navigate('/')} className="group flex items-baseline gap-2" aria-label="返回首页">
            <span className="text-xl font-bold tracking-[-0.04em] text-navy transition-colors group-hover:text-accent md:text-2xl">唐美琪</span>
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-navy/35">Macie</span>
          </button>

          <div className="hidden items-center gap-7 md:flex">
            <button onClick={() => navigate('/#featured')} className="nav-link">代表项目</button>
            {SECTIONS.slice(0, 4).map(section => (
              <button key={section.anchor} onClick={() => goToSection(section.anchor)} className="nav-link">
                {section.label}
              </button>
            ))}
            <a href="mailto:Macie2024@163.com" className="button-nav">
              联系我
              <Mail className="h-4 w-4" />
            </a>
          </div>

          <button
            onClick={() => setIsMobileOpen(open => !open)}
            className="rounded-full p-2 text-navy md:hidden"
            aria-label={isMobileOpen ? '关闭导航菜单' : '打开导航菜单'}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <motion.div className="absolute inset-x-0 bottom-[-1px] h-px origin-left bg-accent" style={{ scaleX: progress }} />
      </nav>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#071326]/35 backdrop-blur-sm md:hidden"
            onClick={() => setIsMobileOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mx-3 mt-20 rounded-[1.75rem] border border-white/70 bg-[#f8f9fc]/95 p-4 shadow-2xl backdrop-blur-2xl"
              onClick={event => event.stopPropagation()}
            >
              <button onClick={() => navigate('/#featured')} className="mobile-nav-link">代表项目</button>
              {SECTIONS.map(section => (
                <button key={section.anchor} onClick={() => goToSection(section.anchor)} className="mobile-nav-link">
                  {section.label}
                </button>
              ))}
              <div className="mt-3 grid grid-cols-2 gap-2 border-t border-navy/10 pt-4">
                <a href="mailto:Macie2024@163.com" className="mobile-action">
                  <Mail className="h-4 w-4" /> 联系我
                </a>
                <a
                  href="/assets/documents/CV%20-%20CN%20-%202026.10.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="mobile-action"
                >
                  <Download className="h-4 w-4" /> 简历
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
