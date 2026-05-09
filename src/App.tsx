import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import CaseStudy from './components/CaseStudy';
import HonorsGrid from './components/HonorsGrid';
import { EXPERIENCES } from './constants';

// 页面切换时滚动到顶部 or 锚点
function ScrollHandler() {
  const location = useLocation();
  useEffect(() => {
    console.log('[DEBUG App] location changed:', location.pathname, location.hash);
    const hash = location.hash;
    if (hash) {
      // 稍微延迟以确保页面渲染完成
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);
  return null;
}

// 第一页：首页 Hero
function HomePage() {
  return (
    <main className="selection:bg-navy/10">
      <Navbar />
      <Hero />
    </main>
  );
}

// 第二页：详情内容
function DetailsPage() {
  const experiences = EXPERIENCES.filter(exp => exp.id !== 'fudan-research' && exp.id !== 'lawbor');
  const research = EXPERIENCES.filter(exp => exp.id === 'fudan-research');
  const project = EXPERIENCES.filter(exp => exp.id === 'lawbor');

  return (
    <main className="selection:bg-navy/10">
      <Navbar />

      <Timeline 
        id="experience" 
        title="实习经历" 
        items={experiences} 
      />

      <Timeline 
        id="research" 
        title="学术研究" 
        items={research} 
      />

      <Timeline 
        id="projects" 
        title="项目实践" 
        items={project} 
      />

      <CaseStudy />

      <HonorsGrid />

      {/* Footer */}
      <footer className="py-20 border-t border-navy/5 bg-warm-white-soft">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-navy mb-2 tracking-tight">唐美琪 Macie</h3>
            <p className="text-sm text-navy/40 italic font-serif">Legal Logic & Technical Implementation.</p>
          </div>

          <div className="flex gap-12">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase font-bold tracking-widest text-navy/40">Navigation</span>
              <ul className="space-y-1 text-sm font-medium">
                <li><a href="/" className="hover:text-accent transition-colors">首页</a></li>
                <li><a href="/details#experience" className="hover:text-accent transition-colors">实习经历</a></li>
                <li><a href="/details#projects" className="hover:text-accent transition-colors">项目实践</a></li>
                <li><a href="/details#research" className="hover:text-accent transition-colors">学术研究</a></li>
              </ul>
            </div>
            
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase font-bold tracking-widest text-navy/40">Contact</span>
              <ul className="space-y-1 text-sm font-medium">
                <li><a href="mailto:Macie2024@163.com" className="hover:text-accent transition-colors">Email</a></li>
                <li><a href="https://linkedin.com/in/macietang" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>

          <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-navy/20 text-center md:text-right">
            Built with React & Motion<br />
            © 2026 MACIE TANG. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollHandler />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
