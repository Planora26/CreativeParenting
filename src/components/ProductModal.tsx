import React from 'react';
import { ProductItem } from '../types';

interface ProductModalProps {
  product: ProductItem | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1e1b19]/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#fff8f5] rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-[#e9e1dd]">
        {/* Modal Header */}
        <div className="p-6 bg-[#fbf2ee] border-b border-[#e9e1dd] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#e88989] text-[#672326] text-xs font-bold uppercase tracking-wider">
              {product.badge}
            </span>
            <span className="text-xs text-[#544342]">•</span>
            <span className="text-xs text-[#536251] font-semibold">{product.certification}</span>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full flex items-center justify-center text-[#544342] hover:bg-[#efe6e3] transition-colors"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        {/* Modal Scroll Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-[#1e1b19]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-5 rounded-2xl overflow-hidden shadow-md">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="md:col-span-7 space-y-3">
              <p className="text-xs font-bold text-[#536251] uppercase tracking-wider">
                {product.brand}
              </p>
              <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-semibold text-[#1e1b19]">
                {product.name}
              </h2>

              <div className="flex items-center gap-3">
                <div className="flex items-center text-amber-600 text-sm">
                  <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="font-bold ml-1">{product.rating}</span>
                </div>
                <span className="text-xs text-[#544342]">({product.reviewCount} verified parent reviews)</span>
                <span className="text-lg font-bold text-[#954648] ml-auto">{product.msrp}</span>
              </div>

              <p className="text-sm text-[#544342] leading-relaxed">
                {product.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {product.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full bg-[#f5ece9] text-[#544342] text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Pediatric Evaluation Report */}
          {product.pediatricReview && (
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e9e1dd] space-y-4">
              <div className="flex items-center justify-between border-b border-[#e9e1dd] pb-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#954648] text-xl">medical_services</span>
                  <h3 className="font-['Playfair_Display'] text-lg font-semibold text-[#1e1b19]">
                    Pediatric Clinical Assessment
                  </h3>
                </div>
                <span className="text-[11px] text-[#536251] font-semibold bg-[#d4e4ce]/60 px-2.5 py-0.5 rounded-full">
                  {product.pediatricReview.testedPeriod}
                </span>
              </div>

              <p className="text-xs text-[#544342] italic">
                Evaluator: <strong className="text-[#1e1b19]">{product.pediatricReview.reviewer}</strong>
              </p>

              <div className="bg-[#fbf2ee] p-4 rounded-xl border-l-4 border-[#954648]">
                <p className="text-sm text-[#1e1b19] font-medium leading-relaxed">
                  "{product.pediatricReview.verdict}"
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-[#536251] uppercase tracking-wider flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">thumb_up</span>
                    <span>What We Loved</span>
                  </h4>
                  <ul className="text-xs text-[#544342] space-y-1.5">
                    {product.pediatricReview.pros.map((pro, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-[#536251] font-bold">✓</span>
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-[#ba1a1a] uppercase tracking-wider flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">info</span>
                    <span>Things To Keep In Mind</span>
                  </h4>
                  <ul className="text-xs text-[#544342] space-y-1.5">
                    {product.pediatricReview.cons.map((con, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-[#ba1a1a] font-bold">•</span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Third Party Safety Standards Note */}
          <div className="bg-[#f5ece9] p-4 rounded-xl flex items-center gap-3 text-xs text-[#544342]">
            <span className="material-symbols-outlined text-[#536251] text-2xl">safety_check</span>
            <div>
              <p className="font-bold text-[#1e1b19]">Verified Independent Lab Certified</p>
              <p>Checked for zero lead, zero flame retardants, and 100% compliant with CPSC &amp; JPMA infant nursery standards.</p>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="p-4 sm:p-6 bg-[#fbf2ee] border-t border-[#e9e1dd] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-[#544342]">
            Direct Amazon live pricing updated 4x daily with transparent affiliate commissions.
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={product.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#954648] text-white text-xs font-bold hover:bg-[#672326] transition-all shadow-sm"
            >
              <span>Check Price on Amazon</span>
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </a>
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full bg-[#e9e1dd] text-[#1e1b19] text-xs font-semibold hover:bg-[#efe6e3] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
