import React, { useState } from 'react';
import { PRODUCTS, HOMEPAGE_ARTICLES } from '../data/mockData';
import { ScreenId, ProductItem, ArticleItem } from '../types';

interface HomeScreenProps {
  onNavigate: (screen: ScreenId) => void;
  onOpenChecklist: () => void;
  onSelectProduct: (product: ProductItem) => void;
  onSelectArticle: (article: ArticleItem) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigate,
  onOpenChecklist,
  onSelectProduct,
  onSelectArticle,
}) => {
  const [selectedStage, setSelectedStage] = useState<'expecting' | 'newborn' | 'baby' | 'toddler'>('newborn');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSuccess(true);
      setTimeout(() => {
        setNewsletterEmail('');
        setNewsletterSuccess(false);
      }, 5000);
    }
  };

  // Top 4 parent-tested gear for the homepage grid
  const homeProducts = PRODUCTS.slice(0, 4);

  // Stages for Explore Calm Family Rhythms
  const stages = [
    {
      stage: 'Stage 01',
      count: '18 articles',
      icon: 'pregnant_woman',
      title: 'Pregnancy & Trimesters',
      desc: 'Week-by-week wellness, hospital bag essentials & calm birth preparation rituals.',
      linkText: 'Explore stages & 6 care picks →',
      target: 'pregnancy-stages' as ScreenId,
    },
    {
      stage: 'Stage 02',
      count: '24 articles',
      icon: 'bedtime',
      title: 'Newborn Care & Sleep',
      desc: 'Gentle soothing rhythms, safe sleep setups & fourth trimester postpartum recovery.',
      linkText: 'Explore stage →',
      target: 'pregnancy-newborn' as ScreenId,
    },
    {
      stage: 'Stage 03',
      count: '32 guides',
      icon: 'stroller',
      title: 'Baby Gear & Registry',
      desc: 'Rigorous real-world stroller, car seat & nursery tests without commercial fluff.',
      linkText: 'Explore stage →',
      target: 'baby-gear' as ScreenId,
    },
    {
      stage: 'Stage 04',
      count: '20 guides',
      icon: 'smart_toy',
      title: 'Toddler Milestones & Play',
      desc: 'Montessori-inspired toy rotations, emotional co-regulation & expressive language.',
      linkText: 'Explore stage →',
      target: 'home' as ScreenId,
    },
    {
      stage: 'Stage 05',
      count: '15 articles',
      icon: 'self_improvement',
      title: 'Parent Wellbeing & Self-Care',
      desc: 'Postpartum mental wellbeing, partner communication & parent burnout prevention.',
      linkText: 'Explore stage →',
      target: 'pregnancy-newborn' as ScreenId,
    },
    {
      stage: 'Toolkit',
      count: '12 resources',
      icon: 'calendar_month',
      title: 'Printable Guides & Routines',
      desc: 'Free downloadable schedules, baby-led weaning meal planners & feeding logs.',
      linkText: 'Explore toolkit →',
      action: 'checklist',
    },
  ];

  const featuredSleepArticle = HOMEPAGE_ARTICLES[0];
  const sidebarArticle1 = HOMEPAGE_ARTICLES[1];
  const sidebarArticle2 = HOMEPAGE_ARTICLES[2];

  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#fbf2ee] via-[#fff8f5] to-[#fff8f5] pt-10 pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fbf2ee] border border-[#d9c1c0]/60 text-[#544342] text-[11px] font-bold tracking-wider uppercase w-fit shadow-xs">
              <span className="material-symbols-outlined text-sm text-[#536251]" style={{ fontVariationSettings: "'FILL' 1" }}>
                spa
              </span>
              <span>Gentle, Research-Backed Parenting</span>
            </div>

            <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-[56px] text-[#1e1b19] font-semibold leading-[1.12] tracking-tight">
              Nurturing Every First Step with <span className="italic font-normal text-[#954648]">Confidence &amp; Calm</span>
            </h1>

            <p className="font-['Plus_Jakarta_Sans'] text-base sm:text-lg text-[#544342] max-w-2xl leading-relaxed">
              Thoughtfully curated baby gear reviews, stage-by-stage newborn guides, and calm parenting wisdom crafted by pediatric experts and experienced mothers.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => {
                  onNavigate('baby-gear');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#954648] text-white font-semibold text-sm shadow-md hover:bg-[#672326] transition-all cursor-pointer group hover:shadow-lg"
              >
                <span>Explore Curated Gear Guides</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>

              <button
                onClick={onOpenChecklist}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#f5ece9] text-[#1e1b19] font-semibold text-sm hover:bg-[#efe6e3] transition-colors cursor-pointer border border-[#e9e1dd]"
              >
                <span className="material-symbols-outlined text-lg">download</span>
                <span>Download Free Nursery Checklist</span>
              </button>
            </div>

            {/* Trust and Social Proof Badges */}
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs text-[#544342]">
              <div className="flex items-center gap-1.5 text-amber-600 font-bold">
                <div className="flex text-amber-500">
                  {'★'.repeat(5)}
                </div>
                <span className="text-[#1e1b19] ml-1 font-bold">4.9 / 5</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-[#d9c1c0]" />
              <div className="space-y-0.5">
                <p className="font-semibold text-[#1e1b19]">Loved by 45,000+ mindful families worldwide</p>
                <p className="text-[11px] text-[#544342]">As featured in Motherhood Quarterly &amp; Gentle Living</p>
              </div>
            </div>
          </div>

          {/* Right Hero Feature Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#f5ece9] border border-[#e9e1dd] group">
                <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-md px-3.5 py-1 rounded-full text-[11px] font-bold text-[#536251] uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                  <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>
                    favorite
                  </span>
                  <span>Mother-Tested Favorite Gear</span>
                </div>

                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCD1f2dQDlSXRVzoNrDEKKYqfKNhr28moGmfbzxawLLQ1o3M_xIN45sL2oYZz_C_0lWjzUfNpUH2hZikFFNKuAB_EFfzT8qTADl47O24_t0imFrxihcsRZMTglpy-qemhpIgZBbsWKC2aReF7P0rb9RNUQT1NQyGzVxkc9r1wNYt419Icsabay-siDXGAemA9kaNRdGluPtCYoaPWHfcrJvOBRnZV9WS9rTfWUhrVImyi-wf22MUauOcA"
                  alt="A smiling mother holding a happy baby standing inside an organic wood crib in warm nursery morning light"
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Floating Bottom Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-lg flex items-center justify-between border border-[#e9e1dd]">
                  <div>
                    <span className="text-[10px] font-bold text-[#954648] uppercase tracking-wider block">
                      CURATED DISPATCH
                    </span>
                    <h3 className="font-['Playfair_Display'] text-lg sm:text-xl font-semibold text-[#1e1b19] leading-snug">
                      Must-Have Nursery Essentials 2025
                    </h3>
                    <p className="text-xs text-[#544342] mt-0.5">Read Guide • 6 min read</p>
                  </div>
                  <button
                    onClick={() => {
                      onNavigate('baby-gear');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    aria-label="Open Nursery Essentials Guide"
                    className="w-10 h-10 rounded-full bg-[#fbf2ee] hover:bg-[#e88989] hover:text-white text-[#954648] flex items-center justify-center transition-colors shadow-sm shrink-0 ml-3"
                  >
                    <span className="material-symbols-outlined text-xl">north_east</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Explore Calm Family Rhythms Section */}
      <section className="w-full bg-[#fff8f5] py-16 px-4 sm:px-6 lg:px-8 border-t border-[#e9e1dd]/40">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-[#954648] uppercase tracking-widest">
                Nurture By Stage
              </span>
              <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-semibold text-[#1e1b19]">
                Explore Calm Family Rhythms
              </h2>
              <p className="text-sm text-[#544342] max-w-xl">
                Carefully organized pathways supporting each milestone with evidence-based calmness.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#536251]">
              <span className="w-2 h-2 rounded-full bg-[#536251]" />
              <span>120+ Evidence-Tested Guides</span>
            </div>
          </div>

          {/* 6 Stage Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stages.map((st) => {
              const isStage01 = st.stage === 'Stage 01';
              return (
                <div
                  key={st.title}
                  onClick={() => {
                    if (st.action === 'checklist') {
                      onOpenChecklist();
                    } else if (st.target) {
                      onNavigate(st.target);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className={`rounded-3xl p-6 sm:p-7 transition-all duration-300 cursor-pointer flex flex-col justify-between group hover:-translate-y-1 ${
                    isStage01
                      ? 'bg-gradient-to-b from-white via-white to-[#fbf2ee] border-2 border-[#954648]/50 shadow-md ring-4 ring-[#e88989]/15 hover:shadow-xl'
                      : 'bg-white shadow-sm hover:shadow-xl border border-[#e9e1dd]'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                          isStage01 ? 'bg-[#954648] text-white' : 'bg-[#f5ece9] text-[#544342]'
                        }`}>
                          {st.stage}
                        </span>
                        {isStage01 && (
                          <span className="px-2 py-0.5 rounded-full bg-[#d4e4ce] text-[#3c4b3a] text-[10px] font-bold tracking-wide">
                            6 Care Picks
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-[#877272]">{st.count}</span>
                    </div>

                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                      isStage01
                        ? 'bg-[#e88989]/30 text-[#672326] ring-1 ring-[#954648]/30 shadow-xs group-hover:scale-110'
                        : 'bg-[#fbf2ee] text-[#954648] group-hover:bg-[#e88989]/30'
                    }`}>
                      <span className="material-symbols-outlined text-2xl">{st.icon}</span>
                    </div>

                    <div className="space-y-2">
                      <h3 className={`font-['Playfair_Display'] text-xl font-semibold transition-colors ${
                        isStage01 ? 'text-[#954648] group-hover:text-[#672326]' : 'text-[#1e1b19] group-hover:text-[#954648]'
                      }`}>
                        {st.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#544342] leading-relaxed">
                        {st.desc}
                      </p>
                    </div>
                  </div>

                  <div className={`pt-5 mt-4 border-t flex items-center justify-between text-xs font-bold transition-all ${
                    isStage01
                      ? 'border-[#e88989]/30 text-[#954648]'
                      : 'border-[#f5ece9] text-[#954648] group-hover:text-[#672326]'
                  }`}>
                    {isStage01 ? (
                      <span className="inline-flex items-center gap-2 bg-[#954648] text-white px-3.5 py-1.5 rounded-full shadow-xs group-hover:bg-[#672326] transition-colors">
                        <span>{st.linkText}</span>
                        <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                          arrow_forward
                        </span>
                      </span>
                    ) : (
                      <>
                        <span>{st.linkText}</span>
                        <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                          arrow_forward
                        </span>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Parent-Tested & Approved Gear Section */}
      <section className="w-full bg-[#fbf2ee] py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-y border-[#e9e1dd]">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#536251] uppercase tracking-widest">
                <span className="material-symbols-outlined text-xs">verified</span>
                <span>Unbiased Testing • Amazon Associate Eligible</span>
              </div>
              <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-semibold text-[#1e1b19]">
                Parent-Tested &amp; Approved Gear
              </h2>
              <p className="text-sm text-[#544342]">
                Every item is trialed in active family homes for a minimum of 60 days. We look for durability, safe non-toxic finishes, and lasting utility.
              </p>
            </div>

            <button
              onClick={() => {
                onNavigate('baby-gear');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#954648] hover:text-[#672326] transition-colors shrink-0 cursor-pointer"
            >
              <span>View Complete 2025 Registry Guide</span>
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </button>
          </div>

          {/* 4 Featured Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {homeProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#e9e1dd] flex flex-col justify-between group"
              >
                <div
                  className="relative cursor-pointer overflow-hidden"
                  onClick={() => onSelectProduct(product)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-[#954648] text-white text-[10px] font-bold shadow-xs">
                    {product.badge}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1.5 text-amber-600 text-xs">
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                      <span className="font-bold">{product.rating}</span>
                      <span className="text-[#877272] text-[10px]">({product.reviewCount})</span>
                    </div>

                    <h3
                      onClick={() => onSelectProduct(product)}
                      className="font-['Playfair_Display'] text-base font-semibold text-[#1e1b19] group-hover:text-[#954648] transition-colors cursor-pointer line-clamp-1"
                    >
                      {product.name}
                    </h3>

                    <p className="text-base font-bold text-[#954648]">{product.msrp}</p>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {product.tags.slice(0, 2).map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded-full bg-[#f5ece9] text-[#544342] text-[10px] font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#f5ece9]">
                    <a
                      href={product.amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2 rounded-full bg-[#e88989] text-[#672326] text-xs font-bold hover:bg-[#954648] hover:text-white transition-all shadow-xs"
                    >
                      <span>Check Price on Amazon</span>
                      <span className="material-symbols-outlined text-xs">open_in_new</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Affiliate Transparency Box */}
          <div className="bg-[#f5ece9] rounded-2xl p-4 flex items-start gap-3 text-xs text-[#544342] border border-[#e9e1dd]">
            <span className="material-symbols-outlined text-[#954648] text-base shrink-0 mt-0.5">
              info
            </span>
            <p className="leading-relaxed">
              <strong>Affiliate Transparency:</strong> As an Amazon Associate, Creative Parenting earns from qualifying purchases. We independently test and select products we truly adore. Product prices and availability are accurate as of the date/time indicated and are subject to change.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Thoughtful Editorial Dispatches (Clinical Voices) */}
      <section className="w-full bg-[#fff8f5] py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-[#954648] uppercase tracking-widest">
                Pediatric &amp; Clinical Voices
              </span>
              <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-semibold text-[#1e1b19]">
                Thoughtful Editorial Dispatches
              </h2>
              <p className="text-sm text-[#544342]">
                Deep-dive guides written with medical rigor and an unhurried, reassuring touch.
              </p>
            </div>
            <button
              onClick={() => {
                onNavigate('pregnancy-newborn');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1 text-xs font-bold text-[#954648] hover:text-[#672326] transition-colors cursor-pointer"
            >
              <span>Read All Guides</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Featured Clinical Guide (7 Columns) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all border border-[#e9e1dd] space-y-6">
              <div
                className="relative rounded-2xl overflow-hidden cursor-pointer group"
                onClick={() => onSelectArticle(featuredSleepArticle)}
              >
                <img
                  src={featuredSleepArticle.image}
                  alt={featuredSleepArticle.title}
                  className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 px-3.5 py-1 rounded-full bg-white/95 backdrop-blur text-[#672326] text-xs font-bold uppercase tracking-wider shadow-sm">
                  Featured Clinical Guide
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-[#877272]">
                  <span>{featuredSleepArticle.readTime}</span>
                  <span>•</span>
                  <span className="text-[#536251] font-semibold">{featuredSleepArticle.category}</span>
                </div>

                <h3
                  onClick={() => onSelectArticle(featuredSleepArticle)}
                  className="font-['Playfair_Display'] text-2xl sm:text-3xl font-semibold text-[#1e1b19] hover:text-[#954648] transition-colors cursor-pointer leading-tight"
                >
                  {featuredSleepArticle.title}
                </h3>

                <p className="text-sm text-[#544342] leading-relaxed">
                  {featuredSleepArticle.excerpt}
                </p>

                {/* Key Medical Takeaways Card */}
                <div className="bg-[#fbf2ee] rounded-2xl p-5 border-l-4 border-[#954648] space-y-2">
                  <p className="text-[11px] font-bold text-[#672326] uppercase tracking-wider">
                    Key Medical Takeaways:
                  </p>
                  <ul className="text-xs text-[#544342] space-y-1.5 list-disc pl-4">
                    {featuredSleepArticle.takeaways?.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>

                {/* Author and Read Guide Button */}
                <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#f5ece9]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#e88989] text-[#672326] flex items-center justify-center font-bold text-xs">
                      EV
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#1e1b19]">Dr. Elena Vance</p>
                      <p className="text-xs text-[#544342]">Pediatric Sleep Specialist</p>
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectArticle(featuredSleepArticle)}
                    className="inline-flex items-center justify-center gap-1.5 px-6 py-2.5 rounded-full bg-[#954648] text-white text-xs font-bold hover:bg-[#672326] transition-all shadow-sm cursor-pointer"
                  >
                    <span>Read Full Guide</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right 2 Editorial Cards (5 Columns) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Card 1: 12 Registry Essentials */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-[#e9e1dd] flex flex-col group">
                <div
                  className="relative h-48 overflow-hidden cursor-pointer"
                  onClick={() => onSelectArticle(sidebarArticle1)}
                >
                  <img
                    src={sidebarArticle1.image}
                    alt={sidebarArticle1.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 text-[#1e1b19] text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    Registry Essentials
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-[#877272]">
                    <span>{sidebarArticle1.readTime}</span>
                    <span>•</span>
                    <span className="text-[#536251] font-semibold">{sidebarArticle1.category}</span>
                  </div>

                  <h4
                    onClick={() => onSelectArticle(sidebarArticle1)}
                    className="font-['Playfair_Display'] text-xl font-semibold text-[#1e1b19] group-hover:text-[#954648] transition-colors cursor-pointer leading-snug"
                  >
                    {sidebarArticle1.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-[#544342] line-clamp-2">
                    {sidebarArticle1.excerpt}
                  </p>

                  <div className="pt-2 flex items-center justify-between text-xs border-t border-[#f5ece9]">
                    <span className="text-[#877272]">By {sidebarArticle1.author}</span>
                    <button
                      onClick={() => onSelectArticle(sidebarArticle1)}
                      className="font-bold text-[#954648] hover:text-[#672326] flex items-center gap-1 cursor-pointer"
                    >
                      <span>Read</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 2: Toddler Big Emotions */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-[#e9e1dd] flex flex-col group">
                <div
                  className="relative h-48 overflow-hidden cursor-pointer"
                  onClick={() => onSelectArticle(sidebarArticle2)}
                >
                  <img
                    src={sidebarArticle2.image}
                    alt={sidebarArticle2.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 text-[#1e1b19] text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    Toddler Emotional Growth
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-[#877272]">
                    <span>{sidebarArticle2.readTime}</span>
                    <span>•</span>
                    <span className="text-[#536251] font-semibold">{sidebarArticle2.category}</span>
                  </div>

                  <h4
                    onClick={() => onSelectArticle(sidebarArticle2)}
                    className="font-['Playfair_Display'] text-xl font-semibold text-[#1e1b19] group-hover:text-[#954648] transition-colors cursor-pointer leading-snug"
                  >
                    {sidebarArticle2.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-[#544342] line-clamp-2">
                    {sidebarArticle2.excerpt}
                  </p>

                  <div className="pt-2 flex items-center justify-between text-xs border-t border-[#f5ece9]">
                    <span className="text-[#877272]">By {sidebarArticle2.author}</span>
                    <button
                      onClick={() => onSelectArticle(sidebarArticle2)}
                      className="font-bold text-[#954648] hover:text-[#672326] flex items-center gap-1 cursor-pointer"
                    >
                      <span>Read</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Join The Mindful Nest Opt-In */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-[#fbf2ee] via-[#f5ece9] to-[#efe6e3] p-8 sm:p-12 text-center shadow-md border border-[#e9e1dd] relative overflow-hidden">
          <div className="space-y-4 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 text-[#954648] text-[11px] font-bold uppercase tracking-widest shadow-xs">
              <span className="material-symbols-outlined text-xs">auto_stories</span>
              <span>Sunday Morning Slow Read</span>
            </div>

            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1e1b19]">
              Join <span className="italic font-normal text-[#954648]">The Mindful Nest</span>
            </h2>

            <p className="text-sm sm:text-base text-[#544342] leading-relaxed">
              Delivered every Sunday morning: One evidence-based parenting ritual, one rigorously tested baby product recommendation, and one free printable resource.
            </p>

            {/* Stage Selector Pills */}
            <div className="pt-2">
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#544342] mb-2">
                Select Your Current Stage For Tailored Dispatches:
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {[
                  { id: 'expecting', label: 'Expecting' },
                  { id: 'newborn', label: 'Newborn (0–3m)' },
                  { id: 'baby', label: 'Baby (3–12m)' },
                  { id: 'toddler', label: 'Toddler (1–3y)' },
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSelectedStage(s.id as any)}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                      selectedStage === s.id
                        ? 'bg-[#954648] text-white shadow-sm'
                        : 'bg-white text-[#544342] hover:bg-[#efe6e3] border border-[#e9e1dd]'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Email Form */}
            {newsletterSuccess ? (
              <div className="p-4 bg-[#d4e4ce] text-[#3c4b3a] rounded-2xl text-sm font-semibold flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-lg">mark_email_read</span>
                <span>You're subscribed! Look out for your first Sunday slow read.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="pt-3 max-w-lg mx-auto flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <span className="material-symbols-outlined absolute left-4 top-3 text-[#877272] text-xl">
                    mail
                  </span>
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="w-full pl-12 pr-4 py-3 rounded-full bg-white text-sm text-[#1e1b19] placeholder:text-[#877272] focus:outline-none ring-1 ring-[#d9c1c0] focus:ring-2 focus:ring-[#954648] shadow-inner"
                  />
                </div>
                <button
                  type="submit"
                  className="px-8 py-3 rounded-full bg-[#954648] text-white text-xs font-bold hover:bg-[#672326] transition-all shadow-sm cursor-pointer whitespace-nowrap"
                >
                  Subscribe for Free
                </button>
              </form>
            )}

            <div className="flex items-center justify-center gap-2 text-[11px] text-[#544342]">
              <span className="material-symbols-outlined text-xs">lock</span>
              <span>No spam, ever. Unsubscribe with one click. Read by 45,000+ conscious parents.</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
