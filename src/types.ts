export type ScreenId = 'home' | 'baby-gear' | 'pregnancy-newborn' | 'pregnancy-stages';

export interface ProductItem {
  id: string;
  name: string;
  brand: string;
  category: 'sleep' | 'feeding' | 'carrier' | 'soothing' | 'travel' | 'pregnancy';
  isMinimalist: boolean;
  badge: string;
  badgeColor?: 'primary' | 'secondary' | 'tertiary';
  rating: number;
  reviewCount: number;
  msrp: string;
  certification: string;
  description: string;
  image: string;
  tags: string[];
  amazonUrl: string;
  pediatricReview?: {
    reviewer: string;
    verdict: string;
    pros: string[];
    cons: string[];
    testedPeriod: string;
  };
}

export interface ArticleItem {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  authorRole: string;
  authorAvatar?: string;
  readTime: string;
  date: string;
  category: string;
  badgeBg?: string;
  image: string;
  isFeatured?: boolean;
  takeaways?: string[];
  fullContent?: string;
}

export interface RegistryTierItem {
  id: string;
  text: string;
  estimatedCost: number;
  checked?: boolean;
}

export interface PregnancyStageInfo {
  id: string;
  trimester: string;
  weeks: string;
  theme: string;
  badgeColor: string;
  overview: string;
  babyDevelopment: string[];
  maternalExpectations: string[];
  mindfulPractices: string[];
  clinicalMilestones: string[];
  nutritionTips: string[];
}
