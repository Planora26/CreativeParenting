import React, { useState } from 'react';
import { PREGNANCY_STAGES, PREGNANCY_PRODUCTS } from '../data/mockData';
import { ScreenId, ProductItem } from '../types';

interface PregnancyStagesScreenProps {
  onNavigate: (screen: ScreenId) => void;
  onOpenChecklist: () => void;
  onSelectProduct: (product: ProductItem) => void;
}

export const PregnancyStagesScreen: React.FC<PregnancyStagesScreenProps> = ({
  onNavigate,
  onOpenChecklist,
  onSelectProduct,
}) => {
  const [activeStageId, setActiveStageId] = useState<string>('trimester-1');
  const [guideEmail, setGuideEmail] = useState('');
  const [guideSubmitted, setGuideSubmitted] = useState(false);

  const activeStage = PREGNANCY_STAGES.find(s => s.id === activeStageId) || PREGNANCY_STAGES[0];

  const handleGuideSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (guideEmail.trim()) {
      setGuideSubmitted(true);
      setTimeout(() => {
        setGuideEmail('');
        setGuideSubmitted(false);
      }, 5000);
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* 1. Top Breadcrumb Bar */}
      <div className="w-full bg-[#fbf2ee] py-2.5 px-4 sm:px-6 lg:px-8 border-b border-[#e9e1dd]/40">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-[#544342] text-[13px] overflow-x-auto whitespace-nowrap">
          <button
            onClick={() => onNavigate('home')}
            className="hover:text-[#954648] transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span className="material-symbols-outlined text-base">home</span>
            <span>Home</span>
          </button>
          <span className="text-[#877272]/50">/</span>
          <button
            onClick={() => onNavigate('pregnancy-newborn')}
            className="hover:text-[#954648] transition-colors cursor-pointer"
          >
            Pregnancy &amp; Newborn
          </button>
          <span className="text-[#877272]/50">/</span>
          <span className="text-[#1e1b19] font-semibold">Pregnancy Stages &amp; Care Guide</span>
        </div>
      </div>

      {/* 2. Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#fbf2ee] via-[#fff8f5] to-[#fff8f5] pt-10 pb-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F3C7CD]/35 text-[#672326] text-[11px] font-bold tracking-wider uppercase shadow-xs">
            <span className="material-symbols-outlined text-sm text-[#954648]">vital_signs</span>
            <span>Evidence-Based Obstetric &amp; Mindful Care</span>
          </div>

          <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-[54px] text-[#1e1b19] font-semibold leading-[1.12] tracking-tight">
            The Conscious Journey: <span className="italic font-normal text-[#954648]">Pregnancy Stages &amp; Care</span>
          </h1>

          <p className="font-['Plus_Jakarta_Sans'] text-base sm:text-lg text-[#544342] max-w-3xl mx-auto leading-relaxed">
            A week-by-week physiological roadmap, hormonal expectations, mindful somatic practices, and six pediatric-approved pregnancy care products curated to nurture you through every sacred milestone.
          </p>

          {/* Quick Trimester Navigation Pills */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-2">
            {PREGNANCY_STAGES.map((stage) => {
              const isActive = stage.id === activeStageId;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageId(stage.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer shadow-xs ${
                    isActive
                      ? 'bg-[#954648] text-white ring-2 ring-[#954648]/30 font-bold scale-105'
                      : 'bg-white text-[#544342] hover:bg-[#f5ece9] border border-[#e9e1dd]'
                  }`}
                >
                  <span className="font-medium mr-1.5 opacity-80">{stage.trimester}:</span>
                  <span>{stage.weeks}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Deep-Dive Stages & Expectations Interactive Explorer */}
      <section className="w-full bg-[#fff8f5] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Active Stage Overview Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-[#e9e1dd] relative overflow-hidden transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#e9e1dd] pb-6">
              <div>
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${activeStage.badgeColor}`}>
                    {activeStage.trimester}
                  </span>
                  <span className="text-sm font-semibold text-[#536251]">
                    {activeStage.weeks}
                  </span>
                </div>
                <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-semibold text-[#1e1b19] pt-2">
                  {activeStage.theme}
                </h2>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#544342] bg-[#fbf2ee] px-4 py-2 rounded-2xl border border-[#e9e1dd]">
                <span className="material-symbols-outlined text-[#954648] text-lg">medical_information</span>
                <span>Reviewed by Board-Certified Midwives &amp; OB/GYNs</span>
              </div>
            </div>

            {/* Overview paragraph */}
            <p className="font-['Plus_Jakarta_Sans'] text-base text-[#544342] leading-relaxed py-6 border-b border-[#f5ece9]">
              {activeStage.overview}
            </p>

            {/* 4 Multi-Column Information Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
              {/* Column 1: Baby's Development */}
              <div className="bg-[#fbf2ee] rounded-2xl p-6 border border-[#e9e1dd] space-y-4">
                <div className="flex items-center gap-2.5 text-[#954648]">
                  <span className="material-symbols-outlined text-2xl">child_care</span>
                  <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#1e1b19]">
                    Baby’s Developmental Milestones
                  </h3>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#544342]">
                  {activeStage.babyDevelopment.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                      <span className="material-symbols-outlined text-[#954648] text-base shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2: What Mom Experiences */}
              <div className="bg-[#fbf2ee] rounded-2xl p-6 border border-[#e9e1dd] space-y-4">
                <div className="flex items-center gap-2.5 text-[#536251]">
                  <span className="material-symbols-outlined text-2xl">pregnant_woman</span>
                  <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#1e1b19]">
                    Mom’s Body &amp; Emotional Expectations
                  </h3>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#544342]">
                  {activeStage.maternalExpectations.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                      <span className="material-symbols-outlined text-[#536251] text-base shrink-0 mt-0.5">
                        favorite
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3: Mindful Practices & Somatic Rituals */}
              <div className="bg-[#fff8f5] rounded-2xl p-6 border border-[#e9e1dd] space-y-4">
                <div className="flex items-center gap-2.5 text-[#6d5b4a]">
                  <span className="material-symbols-outlined text-2xl">self_improvement</span>
                  <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#1e1b19]">
                    Mindful Practices &amp; Calm Rituals
                  </h3>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#544342]">
                  {activeStage.mindfulPractices.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                      <span className="material-symbols-outlined text-[#6d5b4a] text-base shrink-0 mt-0.5">
                        spa
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 4: Clinical Milestones & Screenings */}
              <div className="bg-[#fff8f5] rounded-2xl p-6 border border-[#e9e1dd] space-y-4">
                <div className="flex items-center gap-2.5 text-[#954648]">
                  <span className="material-symbols-outlined text-2xl">clinical_notes</span>
                  <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#1e1b19]">
                    Clinical Care &amp; Tests Checklist
                  </h3>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#544342]">
                  {activeStage.clinicalMilestones.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                      <span className="material-symbols-outlined text-[#954648] text-base shrink-0 mt-0.5">
                        calendar_today
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Nutrition Highlight Banner */}
            <div className="mt-8 bg-[#d4e4ce]/35 rounded-2xl p-5 border border-[#536251]/20 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#536251] text-white flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-xl">nutrition</span>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-bold uppercase tracking-wider text-[#3c4b3a]">
                  Nutrition Focus for {activeStage.trimester}:
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#544342]">
                  {activeStage.nutritionTips.map((tip, idx) => (
                    <span key={idx} className="inline-flex items-center gap-1">
                      <span className="text-[#536251] font-bold">•</span>
                      <span>{tip}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Curated 6 Products Recommendations for Pregnancy Care */}
      <section className="w-full bg-[#fbf2ee] py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-y border-[#e9e1dd]" id="pregnancy-gear">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1 max-w-2xl">
              <span className="text-[11px] font-bold text-[#954648] uppercase tracking-widest">
                Curated &amp; Clinical Backed Care
              </span>
              <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-semibold text-[#1e1b19]">
                6 Essential Pregnancy Care Recommendations
              </h2>
              <p className="text-sm text-[#544342] leading-relaxed">
                Tested across all trimesters to alleviate morning sickness, preserve healthy sleep alignment, nurture rapidly stretching skin, and prepare the pelvis for a peaceful birth.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[#536251] font-semibold bg-white px-4 py-2 rounded-full border border-[#e9e1dd] shrink-0">
              <span className="material-symbols-outlined text-base">shopping_bag</span>
              <span>Direct 1-Click Amazon Availability</span>
            </div>
          </div>

          {/* 6 Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PREGNANCY_PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-3xl overflow-hidden shadow-md flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-[#e9e1dd] group"
              >
                {/* Product Image & Badges */}
                <div
                  className="relative cursor-pointer overflow-hidden"
                  onClick={() => onSelectProduct(product)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
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

                {/* Content & Evaluation */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold text-[#536251] uppercase tracking-wider">
                        {product.brand}
                      </span>
                      <span className="text-[#877272]/40">•</span>
                      <span className="text-[11px] text-[#544342] font-medium">{product.certification}</span>
                    </div>

                    <h3
                      onClick={() => onSelectProduct(product)}
                      className="font-['Playfair_Display'] text-xl font-semibold text-[#1e1b19] group-hover:text-[#954648] transition-colors cursor-pointer leading-snug line-clamp-2"
                    >
                      {product.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#544342] leading-relaxed line-clamp-3">
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

                  {/* Price & Amazon Link Button */}
                  <div className="pt-4 border-t border-[#f5ece9] flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-[#877272] block">Tested MSRP</span>
                      <span className="font-['Playfair_Display'] text-xl font-bold text-[#1e1b19]">
                        {product.msrp}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onSelectProduct(product)}
                        className="px-3 py-2 rounded-full bg-[#f5ece9] hover:bg-[#efe6e3] text-[#544342] text-xs font-semibold transition-colors cursor-pointer"
                        title="View clinical evaluation"
                      >
                        Review
                      </button>

                      {/* Explicit Amazon Link Button */}
                      <a
                        href={product.amazonUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#e88989] text-[#672326] text-xs font-bold hover:bg-[#954648] hover:text-white transition-all shadow-sm cursor-pointer"
                      >
                        <span>Check on Amazon</span>
                        <span className="material-symbols-outlined text-sm">open_in_new</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Amazon Affiliate Transparency Notice */}
          <div className="bg-[#f5ece9] rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[#544342] border border-[#e9e1dd]">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#954648] text-xl">verified</span>
              <p className="text-xs leading-relaxed">
                <strong>Transparent Recommendation:</strong> As an Amazon Associate, Creative Parenting earns from qualifying purchases. We prioritize non-toxic materials, organic certifications, and real mother trials.
              </p>
            </div>
            <button
              onClick={onOpenChecklist}
              className="text-xs font-bold text-[#954648] hover:underline shrink-0 cursor-pointer"
            >
              Get Full Registry Checklist
            </button>
          </div>
        </div>
      </section>

      {/* 5. Free Trimester Checklist Download Opt-In */}
      <section className="w-full bg-[#fff8f5] py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-[#fbf2ee] via-white to-[#f5ece9] p-8 sm:p-12 border border-[#e9e1dd] shadow-md flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-lg">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#954648] bg-[#F3C7CD]/40 px-3 py-1 rounded-full">
              Free Printable PDF
            </span>
            <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-semibold text-[#1e1b19]">
              Download the Trimester Milestones &amp; Care Checklist
            </h3>
            <p className="text-xs sm:text-sm text-[#544342] leading-relaxed">
              Week-by-week blood tests, doctor questions, prenatal appointment preparation, and what to pack in your hospital bag.
            </p>
          </div>

          <div className="w-full sm:w-auto shrink-0">
            {guideSubmitted ? (
              <div className="p-4 bg-[#d4e4ce] text-[#3c4b3a] rounded-2xl text-xs font-bold text-center">
                Checklist dispatched! Check your email.
              </div>
            ) : (
              <form onSubmit={handleGuideSubmit} className="flex flex-col gap-2 w-full sm:w-80">
                <input
                  type="email"
                  required
                  value={guideEmail}
                  onChange={(e) => setGuideEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="px-4 py-2.5 rounded-full bg-white text-xs text-[#1e1b19] placeholder:text-[#877272] focus:outline-none ring-1 ring-[#d9c1c0] focus:ring-2 focus:ring-[#954648]"
                />
                <button
                  type="submit"
                  className="py-2.5 rounded-full bg-[#954648] text-white text-xs font-bold hover:bg-[#672326] transition-all shadow-sm cursor-pointer"
                >
                  Send Me The Free Guide
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
