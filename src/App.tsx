import React, { useLayoutEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { ArrowUpRight, Braces, DatabaseZap, Scale } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProjects from './components/FeaturedProjects';
import Timeline from './components/Timeline';
import CaseStudy from './components/CaseStudy';
import HonorsGrid from './components/HonorsGrid';
import GlobalGallery from './components/GlobalGallery';
import PointerGlow from './components/PointerGlow';
import { EXPERIENCES, PROJECTS, RESEARCH } from './constants';

function ScrollHandler() {
  const location = useLocation();

  useLayoutEffect(() => {
    const scrollToLocation = () => {
      if (!location.hash) {
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
        return;
      }

      const target = document.querySelector<HTMLElement>(location.hash);
      if (!target) return;
      const top = target.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: Math.max(0, top), behavior: 'instant' as ScrollBehavior });
    };

    const frame = window.requestAnimationFrame(scrollToLocation);
    const retry = window.setTimeout(scrollToLocation, 180);
    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(retry);
    };
  }, [location.pathname, location.hash]);

  return null;
}

const CAPABILITIES = [
  { icon: Scale, title: '法律问题拆解', text: '把规则、事实与证据转化为清晰的问题清单。' },
  { icon: DatabaseZap, title: '数据与知识工程', text: '设计标签、评测案例和可追溯的数据流程。' },
  { icon: Braces, title: '产品与技术实现', text: '用代码、自动化和产品设计把方案放进真实流程。' },
];

function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturedProjects />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
            <div>
              <p className="section-kicker">How I work</p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-navy md:text-5xl">跨越学科，不等于堆叠标签</h2>
              <p className="mt-6 text-base leading-8 text-secondary-grey">我更关心三种能力如何在同一个任务里发生关系。</p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {CAPABILITIES.map(item => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="capability-card">
                    <Icon className="h-5 w-5 text-accent" />
                    <h3 className="mt-8 text-lg font-semibold text-navy">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-secondary-grey">{item.text}</p>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-[2rem] border border-navy/8 bg-white/70 p-7 shadow-sm backdrop-blur-xl md:flex-row md:items-center md:p-10">
            <div>
              <p className="text-2xl font-semibold tracking-[-0.025em] text-navy">查看完整经历、项目与研究</p>
              <p className="mt-2 text-sm text-secondary-grey">按时间与工作方法展开，而不是简单复制一份简历。</p>
            </div>
            <a href="/details" className="button-primary group">
              进入完整档案
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function DetailsPage() {
  return (
    <main>
      <Navbar />
      <header className="details-hero relative overflow-hidden pb-20 pt-36 md:pb-28 md:pt-44">
        <div className="hero-grid" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <p className="section-kicker text-[#9ca7ff]">Experience archive · 2024—2026</p>
          <h1 className="mt-6 max-w-5xl text-5xl font-semibold tracking-[-0.055em] text-white md:text-7xl">把经历放回问题、行动与结果之中</h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/55 md:text-lg">
            这里记录我在律所、司法机关、法律科技公司、研究团队与产品实践中的具体工作。尚未提供的公开素材已使用可替换占位文件标记。
          </p>
          <div className="mt-10 flex flex-wrap gap-2">
            {['法律自动化', '数据合规', '产品开发', '知识工程', '证据整理'].map(tag => <span key={tag} className="dark-pill">{tag}</span>)}
          </div>
        </div>
      </header>

      <Timeline id="experience" title="实习经历" items={EXPERIENCES} />
      <div className="border-y border-navy/6 bg-white/45"><Timeline id="projects" title="项目实践" items={PROJECTS} /></div>
      <Timeline id="research" title="学术研究" items={RESEARCH} />
      <GlobalGallery />
      <CaseStudy />
      <HonorsGrid />
      <Footer />
    </main>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#071326] py-16 text-white md:py-20">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-12 px-6 md:flex-row md:items-end">
        <div>
          <p className="text-2xl font-semibold tracking-[-0.025em]">唐美琪 Macie Tang</p>
          <p className="mt-3 max-w-md text-sm leading-7 text-white/45">法律 AI、数据合规与知识工程。让技术进入真实的法律工作流程。</p>
        </div>
        <div className="flex flex-col items-start gap-3 text-sm md:items-end">
          <a href="mailto:Macie2024@163.com" className="text-white/70 transition-colors hover:text-white">Macie2024@163.com</a>
          <a href="/assets/documents/CV%20-%20CN%20-%202026.10.pdf" target="_blank" rel="noreferrer" className="text-white/70 transition-colors hover:text-white">查看 2026.10 简历</a>
          <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-white/25">© 2026 Macie Tang</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <PointerGlow />
      <BrowserRouter>
        <ScrollHandler />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details" element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
