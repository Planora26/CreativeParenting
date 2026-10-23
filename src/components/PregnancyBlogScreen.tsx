import React, { useState, useMemo } from 'react';
import { BLOG_ARTICLES } from '../data/mockData';
import { ScreenId, ArticleItem } from '../types';

interface PregnancyBlogScreenProps {
  onNavigate: (screen: ScreenId) => void;
  onOpenChecklist: () => void;
  onSelectArticle: (article: ArticleItem) => void;
}

export const PregnancyBlogScreen: React.FC<PregnancyBlogScreenProps> = ({
  onNavigate,
  onOpenChecklist,
  onSelectArticle,
}) => {
  const [selectedSort, setSelectedSort] = useState<'newest' | 'popular' | 'curated'>('newest');
  const [selectedFilterCategory, setSelectedFilterCategory] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [plannerEmail, setPlannerEmail] = useState('');
  const [plannerSuccess, setPlannerSuccess] = useState(false);
  const [digestEmail, setDigestEmail] = useState('');
  const [digestSuccess, setDigestSuccess] = useState(false);

  // Featured Lead Story
  const featuredArticle = BLOG_ARTICLES[0];
  // Recent articles list
  const recentArticles = BLOG_ARTICLES.slice(1);

  const filteredArticles = useMemo(() => {
    if (selectedFilterCategory === 'all') return recentArticles;
    return recentArticles.filter(a => a.category.toLowerCase().includes(selectedFilterCategory.toLowerCase()));
  }, [selectedFilterCategory, recentArticles]);

  const handlePlannerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (plannerEmail.trim()) {
      setPlannerSuccess(true);
      setTimeout(() => setPlannerSuccess(false), 5000);
    }
  };

  const handleDigestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (digestEmail.trim()) {
      setDigestSuccess(true);
      setTimeout(() => setDigestSuccess(false), 5000);
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Subtle Ambient Glow */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[#544342] text-[13px] py-2">
          <button
            onClick={() => onNavigate('home')}
            className="hover:text-[#954648] transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span className="material-symbols-outlined text-base">home</span>
            <span>Home</span>
          </button>
          <span className="text-[#877272]/50">/</span>
          <span className="hover:text-[#954648] transition-colors cursor-pointer">Blog</span>
          <span className="text-[#877272]/50">/</span>
          <span className="text-[#1e1b19] font-semibold">Pregnancy &amp; Newborn</span>
        </nav>

        {/* Page Header / Hero Banner */}
        <header className="pt-4 pb-10 text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F3C7CD]/30 text-[#672326] text-[11px] font-bold tracking-wider uppercase">
            <span className="material-symbols-outlined text-xs">auto_stories</span>
            <span>Editorial Dispatches &amp; Parenting Wisdom</span>
          </div>

          <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-[52px] text-[#1e1b19] font-semibold leading-tight tracking-tight">
            Pregnancy &amp; Newborn Blog
          </h1>

          <p className="font-['Plus_Jakarta_Sans'] text-base sm:text-lg text-[#544342] max-w-2xl mx-auto leading-relaxed">
            Gentle guidance, evidence-based newborn care, trimester milestones, nourishing first foods, and pediatric-backed advice for conscious first-time parents.
          </p>
        </header>

        {/* Featured Lead Story (Hero Blog Post) */}
        <section className="mb-12">
          <article className="bg-white rounded-3xl p-6 lg:p-10 shadow-md hover:shadow-xl transition-all duration-300 border border-[#e9e1dd]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Hero Post Image */}
              <div
                className="lg:col-span-7 relative group overflow-hidden rounded-2xl cursor-pointer"
                onClick={() => onSelectArticle(featuredArticle)}
              >
                <div
                  className="w-full h-80 lg:h-96 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${featuredArticle.image}')` }}
                />
                <div className="absolute top-4 left-4 bg-[#954648] text-white px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span>Featured • Baby First Foods</span>
                </div>
              </div>

              {/* Hero Post Content */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-[#536251] text-[11px] font-bold uppercase tracking-wider">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#536251]" />
                    <span>Pediatric Nutritionist Reviewed</span>
                  </div>

                  <h2
                    onClick={() => onSelectArticle(featuredArticle)}
                    className="font-['Playfair_Display'] text-2xl sm:text-3xl font-semibold text-[#1e1b19] hover:text-[#954648] transition-colors leading-tight cursor-pointer"
                  >
                    {featuredArticle.title}
                  </h2>

                  <p className="text-sm text-[#544342] line-clamp-3 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                </div>

                {/* Author & Action */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#fbf2ee] p-4 rounded-2xl border border-[#e9e1dd]">
                  <div className="flex items-center gap-3">
                    <img
                      className="w-12 h-12 rounded-full object-cover shadow-xs ring-2 ring-[#e88989]/30"
                      src={featuredArticle.authorAvatar}
                      alt={featuredArticle.author}
                    />
                    <div>
                      <h4 className="text-xs font-bold text-[#1e1b19]">{featuredArticle.author}</h4>
                      <p className="text-[11px] text-[#544342]">Pediatric Nutritionist • {featuredArticle.date} • {featuredArticle.readTime}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectArticle(featuredArticle)}
                    className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-[#954648] text-white text-xs font-bold hover:bg-[#672326] shadow-sm transition-all cursor-pointer group"
                  >
                    <span>Read Full Article</span>
                    <span className="material-symbols-outlined text-xs group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </article>
        </section>

        {/* Main Blog Feed & Sticky Sidebar Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Column: Main Feed Grid (8 Columns) */}
          <section className="lg:col-span-8 flex flex-col space-y-6">
            {/* Section Filter Header Status */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-[#fbf2ee] p-4 rounded-2xl border border-[#e9e1dd] gap-3">
              <div className="flex items-center gap-2">
                <span className="font-['Playfair_Display'] text-xl font-semibold text-[#1e1b19]">
                  Recent Articles
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#e9e1dd] text-[#544342] text-xs font-bold">
                  {filteredArticles.length + 1} Guides
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#544342]">
                <span>Sort by:</span>
                <select
                  value={selectedSort}
                  onChange={(e) => setSelectedSort(e.target.value as any)}
                  className="bg-white text-[#1e1b19] py-1 px-3 rounded-full text-xs font-semibold focus:outline-none cursor-pointer border border-[#e9e1dd]"
                >
                  <option value="newest">Newest First</option>
                  <option value="popular">Most Read</option>
                  <option value="curated">Pediatrician Curated</option>
                </select>
              </div>
            </div>

            {/* 2-Column Responsive Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group border border-[#e9e1dd]"
                >
                  <div
                    className="relative overflow-hidden h-52 cursor-pointer"
                    onClick={() => onSelectArticle(article)}
                  >
                    <div
                      className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                      style={{ backgroundImage: `url('${article.image}')` }}
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 text-[#1e1b19] text-[10px] font-bold uppercase tracking-wider backdrop-blur-xs shadow-xs">
                      {article.category}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-[#877272] text-[11px]">
                        <span>{article.author}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>

                      <h3
                        onClick={() => onSelectArticle(article)}
                        className="font-['Playfair_Display'] text-xl font-semibold text-[#1e1b19] group-hover:text-[#954648] transition-colors leading-snug cursor-pointer line-clamp-2"
                      >
                        {article.title}
                      </h3>

                      <p className="text-xs text-[#544342] line-clamp-3 leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>

                    <div className="pt-3 flex items-center justify-between border-t border-[#f5ece9]">
                      <span className="text-[11px] text-[#877272]">{article.date}</span>
                      <button
                        onClick={() => onSelectArticle(article)}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#954648] hover:text-[#672326] cursor-pointer"
                      >
                        <span>Read Guide</span>
                        <span className="material-symbols-outlined text-xs">arrow_forward</span>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Editorial Pagination Bar */}
            <nav aria-label="Blog pages" className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-[#e9e1dd] shadow-xs">
              <div className="text-[#544342] text-xs">
                Showing <span className="font-semibold text-[#1e1b19]">1–8</span> of <span className="font-semibold text-[#1e1b19]">148</span> articles
              </div>

              <div className="flex items-center gap-1.5">
                {[1, 2, 3].map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-9 h-9 rounded-full text-xs font-bold flex items-center justify-center transition-colors cursor-pointer ${
                      currentPage === page
                        ? 'bg-[#954648] text-white shadow-xs'
                        : 'bg-[#f5ece9] hover:bg-[#efe6e3] text-[#1e1b19]'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <span className="px-1 text-[#877272] text-xs">…</span>
                <button
                  onClick={() => setCurrentPage(6)}
                  className="w-9 h-9 rounded-full bg-[#f5ece9] hover:bg-[#efe6e3] text-[#1e1b19] text-xs font-bold flex items-center justify-center transition-colors cursor-pointer"
                >
                  6
                </button>
                <button
                  onClick={() => setCurrentPage(prev => Math.min(6, prev + 1))}
                  className="flex items-center gap-1 px-3.5 h-9 rounded-full bg-[#efe6e3] hover:bg-[#e9e1dd] text-[#1e1b19] text-xs font-semibold transition-colors ml-1 cursor-pointer"
                >
                  <span>Next Page</span>
                  <span className="material-symbols-outlined text-sm">chevron_right</span>
                </button>
              </div>
            </nav>
          </section>

          {/* Right Column: Editorial Sticky Sidebar (4 Columns) */}
          <aside className="lg:col-span-4 space-y-6 sticky top-28">
            {/* Widget 1: Meet Our Clinical Editors */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#e9e1dd] space-y-4">
              <div className="flex items-center gap-1.5 text-[#954648] text-[11px] uppercase tracking-wider font-bold">
                <span className="material-symbols-outlined text-sm">verified</span>
                <span>Clinical Integrity</span>
              </div>

              <div className="flex items-center gap-3">
                <img
                  className="w-14 h-14 rounded-full object-cover shadow-sm ring-2 ring-[#e88989]/30"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuANugDTaWmFhBfQ_7WFLQ8Rt_8oaI2nsGI2VEpI7niVZzifLB32P6qofF13OwDaCRBeVcQDy0eiiDHJW5d0QQIm92T6A07K6YQ5byunWquYJFVKF0a8HU10ETpNruD0dTdJHIt0hwadlMyR8-i0XxOkfylWU4Y85p5LvqFnXk5W0hl8_1eD04Vp-ydZAO7PBv7wl_H6gh3clv2uSWvbc-jZ5tJn2Ccu7sAgX7jn2euzlvHBMU-nWNZFqA"
                  alt="Dr. Elena Vance"
                />
                <div>
                  <h3 className="font-['Playfair_Display'] text-lg font-semibold text-[#1e1b19]">
                    Dr. Elena Vance
                  </h3>
                  <p className="text-xs text-[#536251]">Pediatrician &amp; Lead Medical Reviewer</p>
                </div>
              </div>

              <p className="text-xs text-[#544342] leading-relaxed">
                Every piece of advice in our Pregnancy &amp; Newborn archive is peer-reviewed by board-certified pediatricians, certified nurse-midwives, and pediatric PTs to ensure serene, safe parenting decisions.
              </p>

              <div className="flex items-center gap-2 pt-1">
                <div className="flex -space-x-1.5">
                  <span className="w-6 h-6 rounded-full bg-[#e88989] text-[#672326] text-[10px] flex items-center justify-center font-bold">MD</span>
                  <span className="w-6 h-6 rounded-full bg-[#d4e4ce] text-[#3c4b3a] text-[10px] flex items-center justify-center font-bold">IBCLC</span>
                  <span className="w-6 h-6 rounded-full bg-[#b6a08c] text-white text-[10px] flex items-center justify-center font-bold">PT</span>
                </div>
                <span className="text-[11px] text-[#877272]">6-member Medical Board</span>
              </div>
            </div>

            {/* Widget 2: Topic Categories with Counts */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#e9e1dd] space-y-3">
              <h3 className="font-['Playfair_Display'] text-lg font-semibold text-[#1e1b19] flex items-center gap-2">
                <span className="material-symbols-outlined text-[#954648] text-xl">folder_open</span>
                <span>Topic Categories</span>
              </h3>

              <ul className="space-y-1.5">
                {[
                  { label: 'Baby First Foods & Purees', key: 'puree', count: 28 },
                  { label: 'Newborn Care & Sleep Cues', key: 'newborn', count: 34 },
                  { label: 'Pregnancy Trimester Guides', key: 'pregnancy', count: 19 },
                  { label: 'Baby Essentials & Gear Reviews', key: 'gear', count: 22 },
                  { label: 'Postpartum Recovery & Self-Care', key: 'postpartum', count: 15 },
                ].map((cat) => (
                  <li key={cat.label}>
                    <button
                      onClick={() => setSelectedFilterCategory(selectedFilterCategory === cat.key ? 'all' : cat.key)}
                      className={`w-full flex items-center justify-between p-2 rounded-xl transition-colors text-left cursor-pointer ${
                        selectedFilterCategory === cat.key
                          ? 'bg-[#e88989]/30 text-[#672326] font-bold'
                          : 'hover:bg-[#fbf2ee] text-[#1e1b19]'
                      }`}
                    >
                      <span className="text-xs">{cat.label}</span>
                      <span className="px-2 py-0.5 rounded-full bg-[#f5ece9] text-[#544342] text-[10px] font-bold">
                        {cat.count}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Widget 3: Free Printable First-Time Mom Toolkit */}
            <div className="bg-gradient-to-br from-[#F3C7CD]/20 via-[#fbf2ee] to-[#D6DDD4]/20 rounded-3xl p-6 shadow-sm border border-[#e9e1dd] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#954648] shadow-xs">
                <span className="material-symbols-outlined text-xl">download</span>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-bold text-[#954648] uppercase tracking-wider">
                  Free Printable Resource
                </span>
                <h3 className="font-['Playfair_Display'] text-lg font-semibold text-[#1e1b19]">
                  6–12 Month Baby Food Chart &amp; Weekly Planner
                </h3>
              </div>

              <p className="text-xs text-[#544342] leading-relaxed">
                A downloadable, fridge-ready color-coded guide tracking allergen introduction days, portion sizes, and choking hazard awareness.
              </p>

              {plannerSuccess ? (
                <div className="p-3 bg-[#d4e4ce] text-[#3c4b3a] rounded-xl text-xs font-semibold text-center">
                  Planner PDF dispatched to your inbox!
                </div>
              ) : (
                <form onSubmit={handlePlannerSubmit} className="space-y-2 pt-1">
                  <input
                    value={plannerEmail}
                    onChange={(e) => setPlannerEmail(e.target.value)}
                    required
                    className="w-full px-4 py-2 rounded-full bg-white text-xs text-[#1e1b19] placeholder:text-[#877272] focus:outline-none ring-1 ring-[#d9c1c0] focus:ring-2 focus:ring-[#954648]"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <button
                    className="w-full py-2.5 rounded-full bg-[#954648] text-white text-xs font-bold hover:bg-[#672326] transition-colors shadow-xs cursor-pointer"
                    type="submit"
                  >
                    Download Instant PDF
                  </button>
                </form>
              )}
              <p className="text-center text-[10px] text-[#877272]">Loved by 42,000+ new parents</p>
            </div>

            {/* Widget 4: Curated Newborn Essentials (Amazon Associate Pick) */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#e9e1dd] space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[10px] font-bold text-[#536251] uppercase tracking-wider">
                  Editor's Nursery Pick
                </span>
                <span className="text-[10px] text-[#877272]">Affiliate Recommendation</span>
              </div>

              <div className="relative overflow-hidden rounded-2xl h-40">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6NFQYATa3BcAvMaQFQRO5VpfeJwMwHcjxFIMdGOiNhleyc7C9IPYa-hoYv7c5kcXtkG014n7gwYbUOfQHFP34GMh9_qMJc-i9ZUQG-gerDIiYvjSxDz_6onmjv3osRV1rJzOuW-59iGwZVtliVrDSd2kgZq0xWziJKLeiU2DunumLxgHUHSmkWpbMj-qesbxGBXEyHIM1PvjOcV1Ro5v1pvfxRYBYdGMytBfke7wqaXrs6dYNKw-qsQ"
                  alt="Beaba Babycook Glass 4-in-1 Food Maker"
                />
                <span className="absolute bottom-2 right-2 px-2.5 py-0.5 rounded-full bg-[#1e1b19]/80 text-white text-[10px] font-bold">
                  Tested for 6 Mos
                </span>
              </div>

              <div className="space-y-1">
                <h4 className="font-['Playfair_Display'] text-base font-semibold text-[#1e1b19]">
                  Beaba Babycook Glass 4-in-1 Food Maker
                </h4>
                <div className="flex items-center text-amber-600 text-xs">
                  {'★'.repeat(5)}
                  <span className="text-[#544342] text-[10px] ml-1">4.9 (1.4k reviews)</span>
                </div>
                <p className="text-xs text-[#544342] leading-relaxed pt-1">
                  "The single easiest way to prepare silky-smooth root vegetable purees in under 15 minutes with zero plastic leaching."
                </p>
              </div>

              <a
                className="flex items-center justify-between px-4 py-2.5 rounded-full bg-[#f5ece9] hover:bg-[#efe6e3] text-[#1e1b19] text-xs font-bold transition-colors cursor-pointer"
                href="https://amazon.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>Check Price on Amazon</span>
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </a>
            </div>

            {/* Widget 5: Follow Along */}
            <div className="bg-[#fbf2ee] rounded-3xl p-6 shadow-xs border border-[#e9e1dd] space-y-3">
              <h3 className="font-['Playfair_Display'] text-lg font-semibold text-[#1e1b19]">
                Follow Our Calm Journey
              </h3>
              <p className="text-xs text-[#544342] leading-relaxed">
                Daily meal ideas, sensory milestones, and mindful nursery inspiration shared daily.
              </p>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { name: 'Instagram', icon: 'photo_camera', color: 'text-[#954648]' },
                  { name: 'Pinterest', icon: 'push_pin', color: 'text-[#536251]' },
                  { name: 'YouTube', icon: 'smart_display', color: 'text-[#954648]' },
                ].map((s) => (
                  <button
                    key={s.name}
                    className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-white hover:bg-[#F3C7CD]/20 text-[#1e1b19] transition-colors shadow-xs cursor-pointer border border-[#e9e1dd]"
                  >
                    <span className={`material-symbols-outlined text-lg ${s.color}`}>{s.icon}</span>
                    <span className="text-[10px] font-semibold mt-1">{s.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* Bottom Newsletter Opt-in: The Mindful Mom Weekly Digest */}
        <section className="mb-12">
          <div className="relative overflow-hidden rounded-3xl bg-[#f5ece9] p-8 lg:p-12 shadow-sm border border-[#e9e1dd]">
            <div className="relative max-w-2xl mx-auto text-center space-y-4">
              <span className="px-3.5 py-1 rounded-full bg-white text-[#954648] text-[10px] font-bold uppercase tracking-widest shadow-xs">
                A Breath of Calm for Your Sunday
              </span>

              <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-semibold text-[#1e1b19]">
                The Mindful Mom Weekly Digest
              </h2>

              <p className="text-sm text-[#544342] leading-relaxed">
                Weekly pediatrician-written advice for your exact baby week, quiet reflection prompts for tired parents, and seasonal baby puree recipe cards.
              </p>

              {digestSuccess ? (
                <div className="p-4 bg-[#d4e4ce] text-[#3c4b3a] rounded-2xl text-xs font-semibold">
                  You're signed up! Check your inbox this Sunday morning.
                </div>
              ) : (
                <form onSubmit={handleDigestSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto pt-2">
                  <input
                    value={digestEmail}
                    onChange={(e) => setDigestEmail(e.target.value)}
                    required
                    className="flex-1 px-4 py-3 rounded-full bg-white text-xs text-[#1e1b19] placeholder:text-[#877272] focus:outline-none ring-1 ring-[#d9c1c0] focus:ring-2 focus:ring-[#954648] shadow-xs"
                    placeholder="Your preferred email address"
                    type="email"
                  />
                  <button
                    className="px-6 py-3 rounded-full bg-[#954648] text-white text-xs font-bold hover:bg-[#672326] shadow-sm transition-all whitespace-nowrap cursor-pointer"
                    type="submit"
                  >
                    Join 58,000+ Parents
                  </button>
                </form>
              )}

              <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-[11px] text-[#544342]">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs text-[#536251]">check_circle</span>
                  <span>100% Free &amp; Ad-Free</span>
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs text-[#536251]">check_circle</span>
                  <span>Unsubscribe anytime</span>
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs text-[#536251]">check_circle</span>
                  <span>No spam, just nourishment</span>
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
