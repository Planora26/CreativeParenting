import React, { useState, useMemo } from 'react';
import { PRODUCTS, MUST_HAVE_ITEMS, NICE_TO_HAVE_ITEMS, SKIP_ITEMS } from '../data/mockData';
import { ScreenId, ProductItem } from '../types';

interface BabyGearScreenProps {
  onNavigate: (screen: ScreenId) => void;
  onOpenChecklist: () => void;
  onSelectProduct: (product: ProductItem) => void;
}

export const BabyGearScreen: React.FC<BabyGearScreenProps> = ({
  onNavigate,
  onOpenChecklist,
  onSelectProduct,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [mustHaves, setMustHaves] = useState(MUST_HAVE_ITEMS);
  const [niceToHaves, setNiceToHaves] = useState(NICE_TO_HAVE_ITEMS);

  // Opt-in form state
  const [optinName, setOptinName] = useState('');
  const [optinEmail, setOptinEmail] = useState('');
  const [optinSuccess, setOptinSuccess] = useState(false);

  const handleOptinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (optinEmail.trim()) {
      setOptinSuccess(true);
    }
  };

  const toggleMustHave = (id: string) => {
    setMustHaves(prev =>
      prev.map(item => (item.id === id ? { ...item, checked: !item.checked } : item))
    );
  };

  const toggleNiceToHave = (id: string) => {
    setNiceToHaves(prev =>
      prev.map(item => (item.id === id ? { ...item, checked: !item.checked } : item))
    );
  };

  // Filter products by selected category
  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') return PRODUCTS;
    if (selectedCategory === 'minimalist') return PRODUCTS.filter(p => p.isMinimalist);
    return PRODUCTS.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="flex flex-col w-full">
      {/* 1. Top Breadcrumbs Bar */}
      <div className="w-full bg-[#fbf2ee] py-2.5 px-4 sm:px-6 lg:px-8 border-b border-[#e9e1dd]/40">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-[#544342] text-[13px] overflow-x-auto whitespace-nowrap">
          <button
            onClick={() => onNavigate('home')}
            className="hover:text-[#954648] transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span className="material-symbols-outlined text-base">home</span>
            <span>Home</span>
          </button>
          <span className="text-[#877272]/60 text-xs">/</span>
          <span className="hover:text-[#954648] transition-colors cursor-pointer">Guides &amp; Gear</span>
          <span className="text-[#877272]/60 text-xs">/</span>
          <span className="text-[#1e1b19] font-semibold">Baby Gear &amp; Registry Guide (2025–2026)</span>
        </div>
      </div>

      {/* 2. Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#fbf2ee] via-[#fff8f5] to-[#fff8f5] pt-10 pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Text Column */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F3C7CD]/40 text-[#672326] text-[11px] font-bold tracking-wider uppercase w-fit">
              <span className="material-symbols-outlined text-sm text-[#954648]" style={{ fontVariationSettings: "'FILL' 1" }}>
                verified
              </span>
              <span>Rigorous In-Home Testing • Zero Commercial Fluff</span>
            </div>

            <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-[52px] text-[#1e1b19] font-semibold leading-[1.15] tracking-tight">
              Curated Baby Gear &amp; <span className="italic font-normal text-[#954648]">Minimalist</span> Registry Guide
            </h1>

            <p className="font-['Plus_Jakarta_Sans'] text-base sm:text-lg text-[#544342] max-w-2xl leading-relaxed">
              Evidence-tested strollers, non-toxic crib mattresses, safe car seats, and postpartum essentials trialed for 60+ days in real family nurseries. We strip away the overwhelming baby industry noise.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#download-checklist"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#954648] text-white text-xs sm:text-sm font-semibold shadow-md hover:bg-[#672326] transition-all cursor-pointer hover:shadow-lg"
              >
                <span className="material-symbols-outlined text-lg">download</span>
                <span>Download Minimalist Registry Checklist (PDF)</span>
              </a>

              <a
                href="#gear-showcase"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#f5ece9] text-[#1e1b19] text-xs sm:text-sm font-semibold hover:bg-[#efe6e3] transition-colors border border-[#e9e1dd]"
              >
                <span>Explore Top Gear Picks</span>
                <span className="material-symbols-outlined text-base">arrow_downward</span>
              </a>
            </div>

            {/* Trust Badges Row */}
            <div className="pt-4 flex flex-wrap items-center gap-3 text-xs text-[#544342]">
              <div className="flex items-center gap-1.5 bg-[#f5ece9]/70 px-3 py-1.5 rounded-full border border-[#e9e1dd]">
                <span className="material-symbols-outlined text-[#536251] text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
                  eco
                </span>
                <span>GREENGUARD Gold Screened</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#f5ece9]/70 px-3 py-1.5 rounded-full border border-[#e9e1dd]">
                <span className="material-symbols-outlined text-[#536251] text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
                  safety_check
                </span>
                <span>JPMA Safety Standards</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#f5ece9]/70 px-3 py-1.5 rounded-full border border-[#e9e1dd]">
                <span className="material-symbols-outlined text-[#954648] text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
                <span>100% Parent Funded &amp; Tested</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Mosaic */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#f5ece9] border border-[#e9e1dd] group">
                <img
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="A serene Scandinavian nursery with soft natural light streaming in, featuring an organic wooden crib with neutral linen, a textured muslin blanket draped gently, and minimal potted foliage"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2Lyhn3I183shVFinC8g2urDaX5u-Nis2uSk1RETLXar1oUoRyvLAKzNzyOvoSi46Y71gMk98Flcwpa1OAl3y_Hypsyu22kYgTCebRPOIvCRKuLYBCbZsiOkHcxKQ3kuYz1G6ZFuHgME4-gUI2HQ9xWOP0zcP3wgfc-sgwaW6LrUV18NEDWNj5mo5-cNOqtn095evhhSdvWWvpbPlBeSTpq3pkOGhcyGlLpAmtwjjWj1a96rTYATjE_g"
                />

                {/* Floating Metric Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-lg flex items-center justify-between border border-[#e9e1dd]">
                  <div>
                    <p className="text-[10px] font-bold text-[#536251] uppercase tracking-widest">
                      Registry Audit
                    </p>
                    <p className="font-['Playfair_Display'] text-xl sm:text-2xl font-bold text-[#1e1b19]">
                      Avg. $1,420 Saved
                    </p>
                    <p className="text-xs text-[#544342]">by skipping redundant nursery clutter</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-[#d4e4ce] text-[#3c4b3a] flex items-center justify-center font-['Playfair_Display'] text-lg font-bold shadow-xs">
                    84%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Category Stage Bar */}
      <section className="w-full bg-[#fbf2ee] sticky top-20 z-30 shadow-[0_4px_12px_rgba(46,42,40,0.03)] py-3 px-4 sm:px-6 lg:px-8 border-y border-[#e9e1dd]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {[
              { id: 'all', label: 'All Tested Gear (28)' },
              { id: 'sleep', label: 'Nursery & Sleep' },
              { id: 'travel', label: 'Strollers & Travel' },
              { id: 'feeding', label: 'Feeding & High Chairs' },
              { id: 'carrier', label: 'Carriers & Swaddles' },
              { id: 'soothing', label: 'Bouncers & Soothing' },
              { id: 'minimalist', label: '🌱 Minimalist Blueprint Only' },
            ].map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  type="button"
                  className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#e88989] text-[#672326] shadow-xs'
                      : 'bg-[#f5ece9] text-[#544342] hover:bg-[#efe6e3] hover:text-[#1e1b19]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-1.5 text-[#544342] text-[11px] font-semibold shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#536251]" />
            <span>Spring 2026 Updates Applied</span>
          </div>
        </div>
      </section>

      {/* 4. The 2025 Minimalist Registry Blueprint Feature Section */}
      <section className="w-full bg-[#fff8f5] py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-1 max-w-2xl">
              <span className="text-[11px] font-bold text-[#954648] uppercase tracking-widest">
                Practical Anti-Clutter Framework
              </span>
              <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-semibold text-[#1e1b19]">
                The 2025 Minimalist Registry Blueprint
              </h2>
              <p className="text-sm text-[#544342] leading-relaxed">
                Modern registries average 82 items worth over $4,200. After tracking 400+ infant transitions, our pediatric panel boiled the registry down to three essential tiers so you don't waste funds on unused gear.
              </p>
            </div>

            {/* Blueprint Stats Card */}
            <div className="bg-[#f5ece9] p-4 rounded-2xl flex items-center gap-6 shadow-sm border border-[#e9e1dd] shrink-0">
              <div>
                <p className="text-[11px] text-[#544342]">Estimated Savings</p>
                <p className="font-['Playfair_Display'] text-2xl font-bold text-[#954648]">$1,450+</p>
              </div>
              <div className="w-px h-10 bg-[#e9e1dd]" />
              <div>
                <p className="text-[11px] text-[#544342]">Floor Space Saved</p>
                <p className="font-['Playfair_Display'] text-2xl font-bold text-[#536251]">~42 Sq. Ft</p>
              </div>
            </div>
          </div>

          {/* Interactive 3-Tier Blueprint Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Tier 1: Must Haves */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-md flex flex-col justify-between relative overflow-hidden border border-[#e9e1dd]">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#954648]" />
              <div>
                <div className="flex items-center justify-between pb-4">
                  <div>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#e88989]/30 text-[#672326] text-[10px] font-bold uppercase tracking-wider">
                      Tier 01
                    </span>
                    <h3 className="font-['Playfair_Display'] text-2xl font-semibold text-[#1e1b19] pt-1">
                      Must-Haves
                    </h3>
                  </div>
                  <span className="font-['Playfair_Display'] text-lg font-bold text-[#954648]">
                    12 Items
                  </span>
                </div>

                <p className="text-xs text-[#544342] pb-4">
                  Non-negotiable essentials essential for child safety, proper infant sleep, and reliable nourishment from Day 1.
                </p>

                <ul className="space-y-2.5 text-xs text-[#1e1b19]">
                  {mustHaves.map(item => (
                    <li
                      key={item.id}
                      onClick={() => toggleMustHave(item.id)}
                      className="flex items-start gap-2.5 cursor-pointer hover:text-[#954648] transition-colors"
                    >
                      <span className="material-symbols-outlined text-[#954648] text-base shrink-0 select-none">
                        {item.checked ? 'check_box' : 'check_box_outline_blank'}
                      </span>
                      <span className={item.checked ? 'text-[#1e1b19]' : 'text-[#877272] line-through'}>
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 mt-6 bg-[#fbf2ee] -mx-6 -mb-6 p-4 rounded-b-3xl border-t border-[#e9e1dd]">
                <span className="text-xs text-[#544342] block">
                  Typical Total: <strong className="text-[#1e1b19]">$720 – $1,150</strong>
                </span>
              </div>
            </div>

            {/* Tier 2: Nice to Haves */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-md flex flex-col justify-between relative overflow-hidden border border-[#e9e1dd]">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#536251]" />
              <div>
                <div className="flex items-center justify-between pb-4">
                  <div>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#d4e4ce] text-[#3c4b3a] text-[10px] font-bold uppercase tracking-wider">
                      Tier 02
                    </span>
                    <h3 className="font-['Playfair_Display'] text-2xl font-semibold text-[#1e1b19] pt-1">
                      Nice-to-Haves
                    </h3>
                  </div>
                  <span className="font-['Playfair_Display'] text-lg font-bold text-[#536251]">
                    6 Items
                  </span>
                </div>

                <p className="text-xs text-[#544342] pb-4">
                  Comfort accelerators that genuinely streamline postpartum sanity, but aren't mandatory before birth.
                </p>

                <ul className="space-y-2.5 text-xs text-[#1e1b19]">
                  {niceToHaves.map(item => (
                    <li
                      key={item.id}
                      onClick={() => toggleNiceToHave(item.id)}
                      className="flex items-start gap-2.5 cursor-pointer hover:text-[#536251] transition-colors"
                    >
                      <span className="material-symbols-outlined text-[#536251] text-base shrink-0 select-none">
                        {item.checked ? 'add_task' : 'check_box_outline_blank'}
                      </span>
                      <span className={item.checked ? 'text-[#1e1b19]' : 'text-[#877272] line-through'}>
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 mt-6 bg-[#fbf2ee] -mx-6 -mb-6 p-4 rounded-b-3xl border-t border-[#e9e1dd]">
                <span className="text-xs text-[#544342] block">
                  Typical Total: <strong className="text-[#1e1b19]">$380 – $640</strong>
                </span>
              </div>
            </div>

            {/* Tier 3: Skip Without Regret */}
            <div className="bg-[#efe6e3] rounded-3xl p-6 sm:p-7 shadow-sm flex flex-col justify-between relative overflow-hidden border border-[#e9e1dd]">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#877272]/40" />
              <div>
                <div className="flex items-center justify-between pb-4">
                  <div>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#f5ece9] text-[#544342] text-[10px] font-bold uppercase tracking-wider">
                      Tier 03
                    </span>
                    <h3 className="font-['Playfair_Display'] text-2xl font-semibold text-[#1e1b19] pt-1">
                      Skip With Zero Regret
                    </h3>
                  </div>
                  <span className="font-['Playfair_Display'] text-lg font-bold text-[#544342]">
                    8 Items
                  </span>
                </div>

                <p className="text-xs text-[#544342] pb-4">
                  Marketing traps that clutter nurseries, harbor bacteria, or become outgrown before week 8.
                </p>

                <ul className="space-y-2.5 text-xs text-[#544342] line-through opacity-85">
                  {SKIP_ITEMS.map((skip) => (
                    <li key={skip.id} className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-[#ba1a1a] text-base shrink-0 no-underline select-none">
                        do_not_disturb_on
                      </span>
                      <span>{skip.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 mt-6 bg-[#f5ece9] -mx-6 -mb-6 p-4 rounded-b-3xl border-t border-[#e9e1dd]">
                <span className="text-xs text-[#954648] font-bold block">
                  Money Preserved: <strong>~$480 Saved</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Curated Gear Showcases (Affiliate Product Cards) */}
      <section className="w-full bg-[#fbf2ee] py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-y border-[#e9e1dd]" id="gear-showcase">
        <div className="max-w-7xl mx-auto space-y-10">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-[11px] font-bold text-[#536251] uppercase tracking-widest">
                Tested in Real Homes
              </span>
              <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-semibold text-[#1e1b19]">
                Pediatric-Reviewed Gear Essentials
              </h2>
              <p className="text-sm text-[#544342] max-w-2xl pt-1">
                Every product below has undergone at least 60 days of real-world trials, non-toxic chemical audits, and ergonomic assessment.
              </p>
            </div>
            <p className="text-xs text-[#544342] max-w-xs">
              Direct Amazon live pricing updated 4x daily with transparent affiliate commissions.
            </p>
          </div>

          {/* Product Cards Grid (6 Main Items) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="productGrid">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-3xl overflow-hidden shadow-md flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-[#e9e1dd] group"
              >
                <div
                  className="relative cursor-pointer overflow-hidden"
                  onClick={() => onSelectProduct(product)}
                >
                  <img
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={product.name}
                    src={product.image}
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#954648] text-white text-[11px] font-bold shadow-sm">
                    {product.badge}
                  </span>
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur text-[#1e1b19] text-xs font-bold flex items-center gap-1 shadow-sm">
                    <span className="material-symbols-outlined text-sm text-amber-600" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                    <span>{product.rating}</span>
                    <span className="text-[#877272] text-[10px]">({product.reviewCount})</span>
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold text-[#536251] uppercase tracking-wider">
                        {product.brand}
                      </span>
                      <span className="text-[#877272]/40">•</span>
                      <span className="text-[11px] text-[#544342]">{product.certification}</span>
                    </div>

                    <h3
                      onClick={() => onSelectProduct(product)}
                      className="font-['Playfair_Display'] text-xl font-semibold text-[#1e1b19] group-hover:text-[#954648] transition-colors cursor-pointer"
                    >
                      {product.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#544342] leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {product.tags.map(t => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded-full bg-[#f5ece9] text-[#544342] text-[11px] font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-[#f5ece9] flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-[#877272] block">Tested MSRP</span>
                      <span className="font-['Playfair_Display'] text-xl font-bold text-[#1e1b19]">
                        {product.msrp}
                      </span>
                    </div>

                    <a
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#e88989] text-[#672326] text-xs font-bold hover:bg-[#954648] hover:text-white transition-all shadow-sm"
                      href={product.amazonUrl}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span>Check on Amazon</span>
                      <span className="material-symbols-outlined text-sm">open_in_new</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Affiliate Notification Notice */}
          <div className="bg-[#f5ece9] rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[#544342] border border-[#e9e1dd]">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#954648] text-xl">info</span>
              <p className="text-xs leading-relaxed">
                <strong>Disclosure:</strong> As an Amazon Associate, Creative Parenting earns from qualifying purchases. We purchase 90%+ of tested items ourselves with zero sponsored placement deals.
              </p>
            </div>
            <button
              onClick={() => onNavigate('home')}
              className="text-xs text-[#954648] font-bold hover:underline shrink-0 cursor-pointer"
            >
              Read Testing Ethics
            </button>
          </div>
        </div>
      </section>

      {/* 6. How We Test & Trial Gear (Editorial Trust & Clinical Review) */}
      <section className="w-full bg-[#fff8f5] py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] font-bold text-[#536251] uppercase tracking-widest">
              Clinical &amp; Practical Rigor
            </span>
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-semibold text-[#1e1b19]">
              How We Trial &amp; Vet Every Item
            </h2>
            <p className="text-sm text-[#544342]">
              We don’t review specs from press kits. Every piece of equipment passes through three strict filters before earning a spot on our editorial registry.
            </p>
          </div>

          {/* 3 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#fbf2ee] rounded-3xl p-6 sm:p-8 shadow-sm space-y-4 border border-[#e9e1dd]">
              <div className="w-12 h-12 rounded-2xl bg-[#e88989]/30 text-[#672326] flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">calendar_month</span>
              </div>
              <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#1e1b19]">
                1. 60-Day Active Nursery Trial
              </h3>
              <p className="text-xs sm:text-sm text-[#544342] leading-relaxed">
                Products must survive active rotation across at least two independent family testers with newborns, infants, or toddlers under authentic fatigue conditions.
              </p>
              <ul className="text-[#544342] text-xs space-y-1.5 pt-2">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-xs text-[#536251]">check</span>
                  <span>Daily wipe &amp; wash tolerance</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-xs text-[#536251]">check</span>
                  <span>Structural fatigue checks</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#fbf2ee] rounded-3xl p-6 sm:p-8 shadow-sm space-y-4 border border-[#e9e1dd]">
              <div className="w-12 h-12 rounded-2xl bg-[#d4e4ce] text-[#3c4b3a] flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">science</span>
              </div>
              <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#1e1b19]">
                2. VOC &amp; Off-Gassing Review
              </h3>
              <p className="text-xs sm:text-sm text-[#544342] leading-relaxed">
                Third-party lab checks verify strict non-toxic compliance: zero flame retardants, phthalates, lead, PVC, or noxious formaldehyde glue off-gassing.
              </p>
              <ul className="text-[#544342] text-xs space-y-1.5 pt-2">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-xs text-[#536251]">check</span>
                  <span>OEKO-TEX Standard 100</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-xs text-[#536251]">check</span>
                  <span>GREENGUARD Gold certifications</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#fbf2ee] rounded-3xl p-6 sm:p-8 shadow-sm space-y-4 border border-[#e9e1dd]">
              <div className="w-12 h-12 rounded-2xl bg-[#b6a08c]/40 text-[#463728] flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">pan_tool</span>
              </div>
              <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#1e1b19]">
                3. One-Handed Operation Check
              </h3>
              <p className="text-xs sm:text-sm text-[#544342] leading-relaxed">
                Because parents rarely have two hands free. If a stroller fold, high chair tray, or harness requires multi-step finger contortions, it fails our trial.
              </p>
              <ul className="text-[#544342] text-xs space-y-1.5 pt-2">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-xs text-[#536251]">check</span>
                  <span>Single hand release mechanisms</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-xs text-[#536251]">check</span>
                  <span>Sleep-deprived ease of assembly</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Expert Reviewers Signature Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 border border-[#e9e1dd]">
            <div className="flex -space-x-4 shrink-0">
              <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-[#fff8f5] shadow-md">
                <img
                  className="w-full h-full object-cover"
                  alt="Headshot of Dr Elena Vance, smiling pediatric physician with warm neutral linen blazer"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhIxCru7NPDXWCRGnyy2RFAXMGrvq12ryiGHpP9mh1sQFGIfVZuqTCIdFGM6rIj0H8rHhnT3gzqYIEAlj2bqa--RRxd4mhUW7TTRwGGu7siAReRnRo71cVvB10Q2h-ee7EG3MqEmLukSLGwmfEOioL0N5BtLF-76ZrpiXRdPSv0x1L2Ou0bHrR9pDV-DJ54BwsV1Byrt7M4iHC3y8RZ3cvDg6Tr4-N4NRq4WT7HQ5tZPsF1noIU-QaEg"
                />
              </div>
              <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-[#fff8f5] shadow-md">
                <img
                  className="w-full h-full object-cover"
                  alt="Headshot of Sarah Jenkins, Senior Gear Editor, smiling warmly in outdoor natural light"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0rqZthaxQaj-PhcDqRPVKGXFm54-fvUqkzxlMnnDr6TYqqLftflcOp7v2EiP9fbiCVW8ZAT7LIdWI6t7M4BTk7uuYUTiQYUaetCvUsEOpu_u9U9KpIhNhX1OmlG_Fu3iU-1FozfvC_ZWofc5ztki13ociPMLipbyQ0mb0mLYx6OSpr-FQwQw5USXSEHhlrpJNB1gyBaBu2ToqcGShrZghqT8SmwBgFAagLf4uA0f-sx5v-QJW4PWajw"
                />
              </div>
            </div>

            <div className="space-y-1 text-center md:text-left">
              <p className="font-['Playfair_Display'] text-lg sm:text-xl text-[#1e1b19] italic leading-relaxed">
                “A peaceful home is built on intentional simplicity, not towering boxes of plastic gear that expire in three months.”
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-1 text-xs text-[#544342]">
                <span><strong>Dr. Elena Vance, MD</strong> (Board-Certified Pediatrician)</span>
                <span className="hidden sm:inline">•</span>
                <span><strong>Sarah Jenkins</strong> (Senior Gear Editor &amp; Mom of 3)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Downloadable Minimalist Checklist Freebie Opt-In */}
      <section className="w-full bg-[#f5ece9] py-16 lg:py-20 px-4 sm:px-6 lg:px-8" id="download-checklist">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden border border-[#e9e1dd]">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#F3C7CD]/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-3">
              <span className="px-3 py-1 rounded-full bg-[#e88989]/30 text-[#672326] text-[11px] font-bold uppercase tracking-wider">
                Free Printable Guide (PDF)
              </span>

              <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-semibold text-[#1e1b19]">
                Get The Minimalist Nursery &amp; Registry Checklist
              </h2>

              <p className="text-xs sm:text-sm text-[#544342] leading-relaxed">
                A printable, item-by-item shopping breakdown detailing exact quantities, timeline-by-week deadlines, and what to politely decline from family registries.
              </p>

              <ul className="text-xs text-[#544342] space-y-1.5 pt-2">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#536251] text-base">check_circle</span>
                  <span>Categorized by trimester &amp; baby age milestones</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#536251] text-base">check_circle</span>
                  <span>Direct Babylist &amp; Amazon 1-click import templates</span>
                </li>
              </ul>
            </div>

            <div className="md:col-span-5 flex flex-col justify-center">
              {optinSuccess ? (
                <div className="p-6 bg-[#d4e4ce]/60 text-[#3c4b3a] rounded-2xl text-center space-y-2 border border-[#536251]/20">
                  <span className="material-symbols-outlined text-4xl text-[#536251]">mark_email_read</span>
                  <p className="font-['Playfair_Display'] text-xl font-bold">Blueprint is on its way!</p>
                  <p className="text-xs">
                    We sent the instant PDF link &amp; import template to <strong>{optinEmail}</strong>.
                  </p>
                  <button
                    onClick={onOpenChecklist}
                    className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#536251] text-white text-xs font-bold hover:bg-[#3c4b3a] transition-all cursor-pointer shadow-xs"
                  >
                    <span>View Interactive Checklist Now</span>
                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleOptinSubmit} className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-[#544342] mb-1" htmlFor="first-name">
                      Your Name
                    </label>
                    <input
                      className="w-full px-4 py-2.5 rounded-xl bg-[#fff8f5] text-xs text-[#1e1b19] placeholder:text-[#877272] focus:outline-none ring-1 ring-[#d9c1c0] focus:ring-2 focus:ring-[#954648] shadow-inner"
                      id="first-name"
                      placeholder="e.g. Maya"
                      required
                      value={optinName}
                      onChange={(e) => setOptinName(e.target.value)}
                      type="text"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#544342] mb-1" htmlFor="email-optin">
                      Your Best Email
                    </label>
                    <input
                      className="w-full px-4 py-2.5 rounded-xl bg-[#fff8f5] text-xs text-[#1e1b19] placeholder:text-[#877272] focus:outline-none ring-1 ring-[#d9c1c0] focus:ring-2 focus:ring-[#954648] shadow-inner"
                      id="email-optin"
                      placeholder="maya@family.com"
                      required
                      value={optinEmail}
                      onChange={(e) => setOptinEmail(e.target.value)}
                      type="email"
                    />
                  </div>

                  <button
                    className="w-full py-3 rounded-full bg-[#954648] text-white text-xs font-bold hover:bg-[#672326] transition-all shadow-md cursor-pointer"
                    type="submit"
                  >
                    Send Me The Free Blueprint PDF
                  </button>

                  <p className="text-[10px] text-center text-[#544342]/80">
                    No spam ever. 1-tap unsubscribe anytime.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
