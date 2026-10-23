import React, { useState } from 'react';
import { ScreenId } from '../types';

interface HeaderProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
  onOpenSearch: () => void;
  onOpenChecklist: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  onNavigate,
  onOpenSearch,
  onOpenChecklist
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleVisitShopClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (currentScreen !== 'baby-gear') {
      onNavigate('baby-gear');
    }
    setTimeout(() => {
      const el = document.getElementById('gear-showcase');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 80);
    setMobileMenuOpen(false);
  };

  const navItems: { label: string; id: ScreenId | string; isScreen: boolean; badge?: string }[] = [
    { label: 'Home', id: 'home', isScreen: true },
    { label: 'Pregnancy Stages & Care', id: 'pregnancy-stages', isScreen: true, badge: 'New' },
    { label: 'Baby Gear & Registry', id: 'baby-gear', isScreen: true },
    { label: 'Pregnancy & Newborn Blog', id: 'pregnancy-newborn', isScreen: true },
    { label: 'Toddler Milestones', id: 'toddler', isScreen: false },
    { label: 'Guides & Freebies', id: 'freebies', isScreen: false },
  ];

  const handleNavClick = (item: { label: string; id: ScreenId | string; isScreen: boolean }) => {
    if (item.isScreen) {
      onNavigate(item.id as ScreenId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (item.id === 'freebies') {
      onOpenChecklist();
    } else if (item.id === 'toddler') {
      onNavigate('home');
      setTimeout(() => {
        const el = document.getElementById('explore-stages');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 80);
    } else {
      onNavigate('pregnancy-stages');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#fff8f5]/95 backdrop-blur-xl shadow-[0_1px_8px_rgba(46,42,40,0.04)] border-b border-[#e9e1dd]/60">
        {/* Top Announcement Bar */}
        <div className="w-full bg-[#f5ece9] py-1.5 px-4 sm:px-6 text-center text-[#544342] text-[11px] font-semibold tracking-wide">
          <span className="inline-flex items-center gap-1.5 flex-wrap justify-center">
            <span>Thoughtfully tested family gear &amp; pediatric care guides</span>
            <span className="opacity-50">•</span>
            <button
              onClick={onOpenChecklist}
              className="text-[#954648] hover:underline font-bold inline-flex items-center gap-1 cursor-pointer"
            >
              <span>Free Gentle Bedtime &amp; Registry Guide inside</span>
              <span>✨</span>
            </button>
          </span>
        </div>

        {/* Main Nav Container */}
        <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 lg:gap-4">
          {/* Logo & Brand */}
          <button
            onClick={() => {
              onNavigate('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none shrink-0"
          >
            <img
              alt="Creative Parenting Wordmark Logo"
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida/AEtjO1UVJJ0MjkrYlqdeXKWkoONgwQHEcUcCFLuSXNxoiLISzipRL-wDAGOOq5wQWP2-Vzt45R6c_Fsj9ppd4jABXyfT3hGIHmIp0KrZrjP0zEpSrcfqNJXDpX21M4qkjGBvroGxVGK7uD6GPwueL7bpgbGolt985V9tbZVFzY7sost5u7_1xoafo5KQzrvGCCFZOWgEIB22JVS37nonfPH3lqtyj2eAhyUGLbqxwreZqXdUR0GUk8diACrNG4ns"
            />
            <span className="font-['Playfair_Display'] text-xl sm:text-2xl font-semibold text-[#1e1b19] tracking-tight hidden sm:inline-block">
              Creative Parenting
            </span>
          </button>

          {/* Desktop Navigation Links (Responsive at lg:flex) */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-1 px-2 py-1 rounded-full bg-[#fbf2ee] border border-[#e9e1dd]/70 shadow-xs">
            {navItems.map((item) => {
              const isActive = item.isScreen && currentScreen === item.id;
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className={`inline-flex items-center gap-1.5 px-3 xl:px-3.5 py-1.5 rounded-full text-[12.5px] xl:text-[13px] font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#e88989] text-[#672326] shadow-sm font-bold ring-1 ring-[#954648]/25'
                      : 'text-[#544342] hover:text-[#1e1b19] hover:bg-[#f5ece9]'
                  }`}
                >
                  <span className="whitespace-nowrap">{item.label}</span>
                  {item.badge && (
                    <span className="text-[9px] font-bold px-1.5 py-0.2 rounded-full bg-[#954648] text-white">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              aria-label="Search articles and gear"
              className="w-10 h-10 rounded-full flex items-center justify-center text-[#544342] hover:text-[#1e1b19] hover:bg-[#f5ece9] transition-colors cursor-pointer"
              title="Search guides & gear"
            >
              <span className="material-symbols-outlined text-xl">search</span>
            </button>

            {/* Visit Shop CTA (Replaced Get Weekly Guides) */}
            <button
              onClick={handleVisitShopClick}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#e88989] text-[#672326] text-[13px] font-semibold shadow-xs hover:bg-[#df7c7c] hover:shadow-sm transition-all cursor-pointer"
              title="Visit Curated Shop & Gear"
            >
              <span className="material-symbols-outlined text-base">shopping_bag</span>
              <span className="font-bold">visit shop</span>
            </button>

            {/* Profile Avatar */}
            <div className="hidden sm:flex items-center pl-1">
              <img
                alt="Editorial Director Profile"
                className="w-8 h-8 rounded-full object-cover ring-2 ring-[#e88989]/30"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3zxSj536Dm6NnPYHUpuEujGTSnqidZf3PHLRhFVVE4kygwSNZcw9gcsBWLZH4IH1oLcT8nhc_Ir0UvsycZQLPZcTpU4aacaskHmViz2Dc4w8NRukDmnGoBXSVyTnpBTsbK0ujknTgeNQwrh6Js8HLT5CaYEiTe5GWl0m7wXkWDIsb3XRlLIlh-kJBS_Dazb4lRmELsPICMsWPnyx9LPjmhJoyvf3eTrg_Iq_Jx-l5ICFpap16mlVzww"
              />
            </div>

            {/* Mobile Menu Toggle Button (Visible below lg) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center text-[#544342] hover:bg-[#f5ece9] transition-colors"
              aria-label="Toggle navigation menu"
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu (Visible below lg) */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#fff8f5] border-t border-[#e9e1dd] px-6 py-4 shadow-lg flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {navItems.map((item) => {
              const isActive = item.isScreen && currentScreen === item.id;
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className={`text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-[#e88989] text-[#672326]'
                      : 'text-[#544342] hover:bg-[#f5ece9] hover:text-[#1e1b19]'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[9px] font-bold px-1.5 py-0.2 rounded-full bg-[#954648] text-white">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
            <div className="pt-2 border-t border-[#e9e1dd] flex flex-col gap-2">
              <button
                onClick={handleVisitShopClick}
                className="w-full py-2.5 rounded-full bg-[#e88989] text-[#672326] font-semibold text-sm flex items-center justify-center gap-2 shadow-xs hover:bg-[#df7c7c]"
              >
                <span className="material-symbols-outlined text-base">shopping_bag</span>
                <span className="font-bold">visit shop</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
