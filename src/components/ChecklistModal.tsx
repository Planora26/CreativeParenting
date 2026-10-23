import React, { useState } from 'react';

interface ChecklistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ChecklistCategory {
  title: string;
  items: { id: string; name: string; why: string; checked: boolean }[];
}

export const ChecklistModal: React.FC<ChecklistModalProps> = ({ isOpen, onClose }) => {
  const [downloaded, setDownloaded] = useState(false);
  const [categories, setCategories] = useState<ChecklistCategory[]>([
    {
      title: '1. Safe Sleep & Nursery (Weeks 0–12)',
      items: [
        { id: 'c1', name: 'Breathable GREENGUARD Gold crib mattress', why: 'Essential for rolling stages & zero VOC off-gassing', checked: true },
        { id: 'c2', name: 'Safe bedside bassinet or convertible mini-crib', why: 'Room-sharing for first 6 months reduces SIDS by 50%', checked: true },
        { id: 'c3', name: 'Consistent non-looping white noise machine', why: 'Calms infant acoustic startles without ear canal strain', checked: true },
        { id: 'c4', name: '3-Pack 100% organic cotton fitted crib sheets', why: 'Breathable, hypoallergenic, simple rotation', checked: true },
        { id: 'c5', name: '2 Breathable 0.5–1.0 TOG swaddle sleep sacks', why: 'Prevents moro reflex wakeups safely without loose blankets', checked: false }
      ]
    },
    {
      title: '2. Transportation & Carrying',
      items: [
        { id: 'c6', name: 'Crash-tested infant/convertible car seat', why: 'Installed by CPST technician before week 37', checked: true },
        { id: 'c7', name: 'Ergonomic newborn bamboo/modal wrap', why: 'Maintains hip M-position & skin-to-skin thermoregulation', checked: true },
        { id: 'c8', name: 'Compact, 1-hand fold all-terrain stroller', why: 'Easy navigation on uneven neighborhood sidewalks', checked: false }
      ]
    },
    {
      title: '3. Nourishment & Feeding',
      items: [
        { id: 'c9', name: 'Ergonomic high chair with 90° adjustable footrest', why: 'Ensures oral motor stability during solids at 6 months', checked: false },
        { id: 'c10', name: 'Pure food-grade silicone bib with catch pocket', why: 'Dishwasher safe, eliminates endless fabric stain washing', checked: true },
        { id: 'c11', name: 'Glass baby bottles with slow-flow peristaltic nipples', why: 'Avoids microplastics and heated milk chemical leaching', checked: true }
      ]
    },
    {
      title: '4. Diapering & Natural Care',
      items: [
        { id: 'c12', name: 'Wipeable non-porous silicone changing mat', why: 'Clean with warm soapy water; skip fabric covers', checked: true },
        { id: 'c13', name: 'Zinc oxide 40% barrier diaper paste', why: 'Pediatric dermatologist recommended for moisture barrier', checked: true },
        { id: 'c14', name: 'Non-contact digital infrared forehead thermometer', why: 'Accurate fever monitoring without disturbing sleeping baby', checked: true }
      ]
    }
  ]);

  if (!isOpen) return null;

  const toggleItem = (catIndex: number, itemId: string) => {
    setCategories(prev =>
      prev.map((cat, idx) => {
        if (idx !== catIndex) return cat;
        return {
          ...cat,
          items: cat.items.map(item =>
            item.id === itemId ? { ...item, checked: !item.checked } : item
          )
        };
      })
    );
  };

  const totalItems = categories.reduce((acc, cat) => acc + cat.items.length, 0);
  const checkedItems = categories.reduce(
    (acc, cat) => acc + cat.items.filter(i => i.checked).length,
    0
  );

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => {
      window.print();
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1e1b19]/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-[#fff8f5] rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-[#e9e1dd]">
        {/* Modal Header */}
        <div className="p-6 bg-gradient-to-r from-[#fbf2ee] via-[#fff8f5] to-[#f5ece9] border-b border-[#e9e1dd] flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#e88989]/30 text-[#672326] text-[11px] font-bold uppercase tracking-wider mb-1">
              <span className="material-symbols-outlined text-xs">checklist</span>
              <span>Evidence-Tested Blueprint</span>
            </div>
            <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#1e1b19]">
              The Minimalist Nursery Checklist
            </h3>
            <p className="text-xs text-[#544342]">
              Track your essential purchases &amp; skip redundant marketing traps
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full flex items-center justify-center text-[#544342] hover:bg-[#efe6e3] transition-colors"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        {/* Progress Tracker */}
        <div className="bg-[#f5ece9] px-6 py-3 border-b border-[#e9e1dd] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[#544342]">Preparation Progress:</span>
            <span className="text-xs font-bold text-[#954648]">
              {checkedItems} of {totalItems} essentials ready
            </span>
          </div>
          <div className="w-32 bg-[#e9e1dd] rounded-full h-2 overflow-hidden">
            <div
              className="bg-[#954648] h-full transition-all duration-300"
              style={{ width: `${(checkedItems / totalItems) * 100}%` }}
            />
          </div>
        </div>

        {/* Interactive Checklist Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-[#1e1b19]">
          {categories.map((cat, cIdx) => (
            <div key={cat.title} className="space-y-3">
              <h4 className="font-['Playfair_Display'] text-lg font-semibold text-[#1e1b19] border-b border-[#e9e1dd] pb-1">
                {cat.title}
              </h4>
              <div className="space-y-2">
                {cat.items.map(item => (
                  <label
                    key={item.id}
                    onClick={() => toggleItem(cIdx, item.id)}
                    className={`flex items-start gap-3 p-3 rounded-xl transition-all cursor-pointer border ${
                      item.checked
                        ? 'bg-[#d4e4ce]/30 border-[#536251]/20'
                        : 'bg-white border-[#e9e1dd] hover:border-[#954648]/40'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={() => {}}
                      className="mt-1 h-4 w-4 rounded accent-[#536251] cursor-pointer"
                    />
                    <div className="flex-1">
                      <p className={`text-sm font-semibold ${item.checked ? 'text-[#3c4b3a] line-through opacity-80' : 'text-[#1e1b19]'}`}>
                        {item.name}
                      </p>
                      <p className="text-xs text-[#544342] mt-0.5">{item.why}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Modal Actions Footer */}
        <div className="p-4 sm:p-6 bg-[#fbf2ee] border-t border-[#e9e1dd] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-[#536251]">
            <span className="material-symbols-outlined text-base">verified</span>
            <span>Reviewed by Pediatric Board</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleDownload}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#954648] text-white text-xs font-bold hover:bg-[#672326] transition-all shadow-sm"
            >
              <span className="material-symbols-outlined text-base">print</span>
              <span>{downloaded ? 'Opening Print / PDF...' : 'Print / Export PDF'}</span>
            </button>
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full bg-[#e9e1dd] text-[#1e1b19] text-xs font-semibold hover:bg-[#efe6e3] transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
