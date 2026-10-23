import React, { useState, useMemo } from 'react';
import { PRODUCTS, PREGNANCY_PRODUCTS, BLOG_ARTICLES, HOMEPAGE_ARTICLES } from '../data/mockData';
import { ProductItem, ArticleItem, ScreenId } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: ProductItem) => void;
  onSelectArticle: (article: ArticleItem) => void;
  onNavigate: (screen: ScreenId) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
  onSelectArticle,
  onNavigate
}) => {
  const [query, setQuery] = useState('');

  const allArticles = useMemo(() => {
    const map = new Map<string, ArticleItem>();
    [...HOMEPAGE_ARTICLES, ...BLOG_ARTICLES].forEach(a => map.set(a.id, a));
    return Array.from(map.values());
  }, []);

  const allProducts = useMemo(() => {
    return [...PRODUCTS, ...PREGNANCY_PRODUCTS];
  }, []);

  const filteredProducts = useMemo(() => {
    if (!query.trim()) return allProducts.slice(0, 4);
    const q = query.toLowerCase();
    return allProducts.filter(
      p =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q))
    );
  }, [query, allProducts]);

  const filteredArticles = useMemo(() => {
    if (!query.trim()) return allArticles.slice(0, 3);
    const q = query.toLowerCase();
    return allArticles.filter(
      a =>
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q) ||
        a.author.toLowerCase().includes(q)
    );
  }, [query, allArticles]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-[#1e1b19]/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#fff8f5] rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-[#e9e1dd]">
        {/* Search Input Box */}
        <div className="p-4 sm:p-6 bg-white border-b border-[#e9e1dd] flex items-center gap-3">
          <span className="material-symbols-outlined text-2xl text-[#877272]">search</span>
          <input
            type="text"
            autoFocus
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search tested baby gear, sleep guides, recipes, milestones..."
            className="flex-1 bg-transparent text-base text-[#1e1b19] placeholder:text-[#877272] focus:outline-none font-['Plus_Jakarta_Sans']"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-[#544342] hover:text-[#1e1b19] px-2 py-1 bg-[#f5ece9] rounded-md"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#544342] hover:bg-[#f5ece9]"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Quick Quick Tags */}
        <div className="px-6 py-2.5 bg-[#fbf2ee] border-b border-[#e9e1dd] flex items-center gap-2 overflow-x-auto text-xs text-[#544342]">
          <span className="font-semibold text-[#1e1b19] shrink-0">Popular:</span>
          {['Crib Mattress', 'High Chair', '4-Month Sleep', 'Stage 1 Purees', 'Bamboo Wrap', 'Hospital Bag'].map(tag => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="px-2.5 py-1 rounded-full bg-white hover:bg-[#e88989]/20 transition-colors border border-[#e9e1dd] shrink-0"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-6 space-y-6">
          {/* Tested Gear Matches */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#954648] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm">verified</span>
                <span>Tested Gear ({filteredProducts.length})</span>
              </h4>
              <button
                onClick={() => {
                  onNavigate('baby-gear');
                  onClose();
                }}
                className="text-xs text-[#536251] hover:underline font-semibold"
              >
                View all gear guide →
              </button>
            </div>
            {filteredProducts.length === 0 ? (
              <p className="text-xs text-[#877272]">No matching products found.</p>
            ) : (
              <div className="space-y-2">
                {filteredProducts.map(product => (
                  <div
                    key={product.id}
                    onClick={() => {
                      onSelectProduct(product);
                      onClose();
                    }}
                    className="flex items-center gap-3 p-3 rounded-2xl bg-white hover:bg-[#f5ece9] border border-[#e9e1dd] cursor-pointer transition-colors"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-12 h-12 rounded-xl object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-[#536251] font-semibold">{product.brand}</p>
                      <h5 className="text-sm font-semibold text-[#1e1b19] truncate">{product.name}</h5>
                      <p className="text-[11px] text-[#544342] truncate">{product.badge} • {product.msrp}</p>
                    </div>
                    <span className="material-symbols-outlined text-[#877272] text-sm">chevron_right</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Editorial Articles Matches */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#536251] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm">article</span>
                <span>Editorial Guides &amp; Dispatches ({filteredArticles.length})</span>
              </h4>
              <button
                onClick={() => {
                  onNavigate('pregnancy-newborn');
                  onClose();
                }}
                className="text-xs text-[#536251] hover:underline font-semibold"
              >
                View blog archive →
              </button>
            </div>
            {filteredArticles.length === 0 ? (
              <p className="text-xs text-[#877272]">No matching articles found.</p>
            ) : (
              <div className="space-y-2">
                {filteredArticles.map(article => (
                  <div
                    key={article.id}
                    onClick={() => {
                      onSelectArticle(article);
                      onClose();
                    }}
                    className="flex items-center gap-3 p-3 rounded-2xl bg-white hover:bg-[#f5ece9] border border-[#e9e1dd] cursor-pointer transition-colors"
                  >
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-12 h-12 rounded-xl object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] uppercase font-bold text-[#954648]">{article.category}</span>
                        <span className="text-[10px] text-[#877272]">• {article.readTime}</span>
                      </div>
                      <h5 className="text-sm font-semibold text-[#1e1b19] truncate">{article.title}</h5>
                      <p className="text-[11px] text-[#544342] truncate">By {article.author}</p>
                    </div>
                    <span className="material-symbols-outlined text-[#877272] text-sm">chevron_right</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-[#fbf2ee] border-t border-[#e9e1dd] text-center text-[11px] text-[#544342]">
          Press any item to open the full pediatric breakdown
        </div>
      </div>
    </div>
  );
};
