/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeScreen } from './components/HomeScreen';
import { BabyGearScreen } from './components/BabyGearScreen';
import { PregnancyBlogScreen } from './components/PregnancyBlogScreen';
import { PregnancyStagesScreen } from './components/PregnancyStagesScreen';
import { ChecklistModal } from './components/ChecklistModal';
import { ProductModal } from './components/ProductModal';
import { ArticleModal } from './components/ArticleModal';
import { SearchModal } from './components/SearchModal';
import { ScreenId, ProductItem, ArticleItem } from './types';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>('home');
  const [isChecklistOpen, setIsChecklistOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Sync window scroll when switching screens
  const handleNavigate = (screen: ScreenId) => {
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Keyboard shortcut (Escape to close modals, Cmd+K / Ctrl+K for search)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
      if (e.key === 'Escape') {
        setIsChecklistOpen(false);
        setSelectedProduct(null);
        setSelectedArticle(null);
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#fff8f5] text-[#1e1b19] flex flex-col font-['Plus_Jakarta_Sans'] selection:bg-[#F3C7CD] selection:text-[#672326]">
      {/* Sticky Global Editorial Header */}
      <Header
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenChecklist={() => setIsChecklistOpen(true)}
      />

      {/* Main Screen Outlet (Offset for fixed header) */}
      <main className="w-full pt-20 flex-1">
        {currentScreen === 'home' && (
          <HomeScreen
            onNavigate={handleNavigate}
            onOpenChecklist={() => setIsChecklistOpen(true)}
            onSelectProduct={(p) => setSelectedProduct(p)}
            onSelectArticle={(a) => setSelectedArticle(a)}
          />
        )}

        {currentScreen === 'baby-gear' && (
          <BabyGearScreen
            onNavigate={handleNavigate}
            onOpenChecklist={() => setIsChecklistOpen(true)}
            onSelectProduct={(p) => setSelectedProduct(p)}
          />
        )}

        {currentScreen === 'pregnancy-stages' && (
          <PregnancyStagesScreen
            onNavigate={handleNavigate}
            onOpenChecklist={() => setIsChecklistOpen(true)}
            onSelectProduct={(p) => setSelectedProduct(p)}
          />
        )}

        {currentScreen === 'pregnancy-newborn' && (
          <PregnancyBlogScreen
            onNavigate={handleNavigate}
            onOpenChecklist={() => setIsChecklistOpen(true)}
            onSelectArticle={(a) => setSelectedArticle(a)}
          />
        )}
      </main>

      {/* Global Editorial Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenChecklist={() => setIsChecklistOpen(true)}
      />

      {/* Modals & Overlays */}
      <ChecklistModal
        isOpen={isChecklistOpen}
        onClose={() => setIsChecklistOpen(false)}
      />

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onOpenChecklist={() => {
          setSelectedArticle(null);
          setIsChecklistOpen(true);
        }}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(p) => setSelectedProduct(p)}
        onSelectArticle={(a) => setSelectedArticle(a)}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
