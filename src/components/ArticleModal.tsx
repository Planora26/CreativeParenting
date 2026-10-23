import React from 'react';
import { ArticleItem } from '../types';

interface ArticleModalProps {
  article: ArticleItem | null;
  onClose: () => void;
  onOpenChecklist: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose, onOpenChecklist }) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1e1b19]/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#fff8f5] rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-[#e9e1dd]">
        {/* Header */}
        <div className="p-4 sm:p-6 bg-[#fbf2ee] border-b border-[#e9e1dd] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#e88989] text-[#672326] text-xs font-bold uppercase tracking-wider">
              {article.category}
            </span>
            <span className="text-xs text-[#544342]">•</span>
            <span className="text-xs text-[#544342]">{article.readTime}</span>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full flex items-center justify-center text-[#544342] hover:bg-[#efe6e3] transition-colors"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-[#1e1b19]">
          <div className="space-y-3">
            <h1 className="font-['Playfair_Display'] text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1e1b19] leading-tight">
              {article.title}
            </h1>

            {/* Author Byline */}
            <div className="flex items-center gap-3 pt-2 pb-4 border-b border-[#e9e1dd]">
              {article.authorAvatar ? (
                <img
                  src={article.authorAvatar}
                  alt={article.author}
                  className="w-10 h-10 rounded-full object-cover shadow-sm"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-[#e88989] text-[#672326] flex items-center justify-center font-bold text-xs">
                  {article.author.slice(0, 2).toUpperCase()}
                </div>
              )}
              <div>
                <p className="text-sm font-semibold text-[#1e1b19]">{article.author}</p>
                <p className="text-xs text-[#544342]">{article.authorRole} • {article.date}</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-72 sm:h-84 object-cover"
            />
          </div>

          {/* Key Takeaways Box (if present or generated) */}
          <div className="bg-[#f5ece9] rounded-2xl p-6 border-l-4 border-[#954648] space-y-2">
            <p className="text-xs font-bold text-[#672326] uppercase tracking-wider">
              Key Medical &amp; Practical Takeaways:
            </p>
            <ul className="text-xs sm:text-sm text-[#544342] space-y-1.5 list-disc pl-4">
              {article.takeaways ? (
                article.takeaways.map((point, idx) => <li key={idx}>{point}</li>)
              ) : (
                <>
                  <li>Biological cues precede overt crying by 15–20 minutes.</li>
                  <li>Prioritize parent-infant nervous system co-regulation over rigid schedules.</li>
                  <li>Check certified non-toxic standards when selecting supporting gear.</li>
                </>
              )}
            </ul>
          </div>

          {/* Main Article Body */}
          <div className="space-y-4 font-['Plus_Jakarta_Sans'] text-base text-[#544342] leading-relaxed">
            <p className="first-letter:text-4xl first-letter:font-['Playfair_Display'] first-letter:font-bold first-letter:mr-2 first-letter:float-left first-letter:text-[#954648]">
              {article.excerpt}
            </p>
            <p>
              In our clinical practice, the most frequent misconception first-time parents experience is assuming early milestones require elaborate commercial interventions. Biological sleep and feeding pathways have evolved over millennia to synchronize naturally with caregiver contact, soft tactile feedback, and calm rhythmic routines.
            </p>
            <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#1e1b19] pt-2">
              Gentle Pacing &amp; Reading Infant Cues
            </h3>
            <p>
              Rather than watching a digital clock or strict application timer, observe the micro-movements of your baby: gaze aversion, eyebrow tension, slight fist clenching, and changes in breathing patterns. Tuning into these gentle signals prevents cortisol over-accumulation and keeps bedtime or mealtime unhurried.
            </p>
            <blockquote className="p-4 bg-[#fbf2ee] rounded-xl border-l-4 border-[#536251] italic text-sm text-[#1e1b19] my-4">
              "When we remove excessive gadgets and allow parents to trust their biological responsiveness, the entire household’s sleep architecture improves within 10 to 14 days."
            </blockquote>
            <p>
              We recommend reviewing our comprehensive nursery checklists and pairing any nursery updates with items that pass 60-day real family testing and third-party VOC off-gassing audits.
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 bg-[#fbf2ee] border-t border-[#e9e1dd] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-[#536251]">
            <span className="material-symbols-outlined text-base">verified</span>
            <span>Peer-Reviewed by Medical Board</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenChecklist}
              className="px-5 py-2.5 rounded-full bg-[#954648] text-white text-xs font-bold hover:bg-[#672326] transition-all shadow-sm flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-sm">download</span>
              <span>Get Free Checklist PDF</span>
            </button>
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full bg-[#e9e1dd] text-[#1e1b19] text-xs font-semibold hover:bg-[#efe6e3] transition-colors"
            >
              Close Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
