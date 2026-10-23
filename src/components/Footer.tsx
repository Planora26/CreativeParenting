import React, { useState } from 'react';
import { ScreenId } from '../types';

interface FooterProps {
  onNavigate: (screen: ScreenId) => void;
  onOpenChecklist: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenChecklist }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 5000);
    }
  };

  return (
    <footer className="w-full bg-[#fbf2ee] text-[#544342] pt-16 pb-12 mt-16 border-t border-[#e9e1dd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16">
          {/* Brand & Purpose Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-['Playfair_Display'] text-2xl font-bold text-[#1e1b19]">
                Creative Parenting
              </span>
            </div>
            <p className="font-['Plus_Jakarta_Sans'] text-base text-[#544342] pr-6 leading-relaxed">
              An intentional lifestyle and parenting publication offering gentle routines, pediatric-tested nursery essentials, and evidence-backed guidance for calm family living.
            </p>
            <div className="pt-2">
              <p className="text-[11px] font-bold text-[#536251] uppercase tracking-widest">
                Curated with care &amp; warmth
              </p>
            </div>
          </div>

          {/* Explore Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-semibold text-[15px] text-[#1e1b19]">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => {
                    onNavigate('pregnancy-stages');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#954648] transition-colors text-left"
                >
                  Pregnancy Stages &amp; Care
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('pregnancy-newborn');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#954648] transition-colors text-left"
                >
                  Newborn Essentials
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('baby-gear');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#954648] transition-colors text-left"
                >
                  Gear Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#954648] transition-colors text-left"
                >
                  Toddler Rhythms
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#954648] transition-colors text-left"
                >
                  Calm Bedtimes
                </button>
              </li>
            </ul>
          </div>

          {/* Popular Guides */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-semibold text-[15px] text-[#1e1b19]">Popular Guides</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#954648] transition-colors text-left"
                >
                  Gentle Sleep Toolkit
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('baby-gear');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#954648] transition-colors text-left"
                >
                  Minimalist Registry
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('baby-gear');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#954648] transition-colors text-left"
                >
                  Non-Toxic Nurseries
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#954648] transition-colors text-left"
                >
                  Sensory Play at 12M
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenChecklist}
                  className="hover:text-[#954648] transition-colors text-left"
                >
                  Postpartum Healing
                </button>
              </li>
            </ul>
          </div>

          {/* Mindful Letters Box */}
          <div className="lg:col-span-4 space-y-3 bg-[#f5ece9] rounded-2xl p-6 border border-[#e9e1dd]">
            <h4 className="font-['Playfair_Display'] text-xl font-medium text-[#1e1b19]">
              Mindful Letters
            </h4>
            <p className="text-sm text-[#544342] leading-relaxed">
              Receive Sunday reflections, research-backed developmental guides, and curated gear dispatches directly to your inbox.
            </p>
            {subscribed ? (
              <div className="p-3 bg-[#d4e4ce] text-[#3c4b3a] rounded-xl text-xs font-semibold flex items-center gap-2">
                <span className="material-symbols-outlined text-base">check_circle</span>
                <span>Warmly welcome! Your first calm dispatch arrives this Sunday.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 pt-1">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your calm email address"
                  className="flex-1 px-4 py-2.5 rounded-full bg-white text-[#1e1b19] text-sm placeholder:text-[#877272] focus:outline-none ring-1 ring-[#d9c1c0]/60 focus:ring-2 focus:ring-[#954648]"
                />
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-[#954648] text-white text-[13px] font-semibold hover:bg-[#672326] transition-colors cursor-pointer shadow-sm"
                >
                  Subscribe
                </button>
              </form>
            )}
            <p className="text-[11px] text-[#544342]/80">
              No clutter. Unsubscribe anytime with one tap.
            </p>
          </div>
        </div>

        {/* Affiliate Disclosure & Legal */}
        <div className="space-y-4 pt-6 border-t border-[#e9e1dd]">
          <div className="bg-[#efe6e3]/70 rounded-xl p-4 text-xs text-[#544342] leading-relaxed">
            <p>
              <strong>Affiliate Disclosure:</strong> Creative Parenting participates in the Amazon Services LLC Associates Program and affiliate platforms. We may earn a commission from qualifying purchases at no added cost to you.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 text-[11px] text-[#544342]">
            <p>© 2026 Creative Parenting Inc. Crafted for conscious family homes.</p>
            <div className="flex items-center gap-6">
              <span className="hover:text-[#1e1b19] cursor-pointer">Privacy Policy</span>
              <span className="hover:text-[#1e1b19] cursor-pointer">Terms of Service</span>
              <span className="hover:text-[#1e1b19] cursor-pointer">Editorial Standards</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
