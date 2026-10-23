import { ProductItem, ArticleItem, RegistryTierItem, PregnancyStageInfo } from '../types';

export const PRODUCTS: ProductItem[] = [
  {
    id: 'aura-crib-mattress',
    name: 'Aura Breathable Crib Mattress',
    brand: 'Aura SafeSleep',
    category: 'sleep',
    isMinimalist: true,
    badge: 'Best Overall Crib Mattress',
    badgeColor: 'primary',
    rating: 4.9,
    reviewCount: 1840,
    msrp: '$249.99',
    certification: 'GREENGUARD Gold',
    description: '100% washable core made from food-grade polymer. Allows infants to breathe straight through the mattress surface if they roll over in their sleep.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBByHhQ41dGEHi4K5-tMki5YJB3vnx59o9LM5ZMIEKEcIgLngUpz9DgY7pZ7UccOraKRFDVG9cc8AZo4LlJISJvUJbWHkz8Wn8--RpiMQ_-v31psnYWJgYbB_bs9XBiiae06oD5MMxyrx3DQNwi8aaoi4a6Ky4Oq5100ceEQcNimdMVgKHpgsHULkCJn_tu2MtMcQGxMybl_wR-iqfgtovUwbfL9hn2qy3XVWPl18QiOl9D8UIzTddZOg',
    tags: ['No Glue or VOCs', 'Dual Sided Firmness', 'Washable Core'],
    amazonUrl: 'https://amazon.com',
    pediatricReview: {
      reviewer: 'Dr. Elena Vance, MD (Board-Certified Pediatrician)',
      verdict: 'The gold standard for safe infant sleep. Zero hazardous chemical flame retardants and fully submersible for shower washing after midnight leaks.',
      pros: ['Submersible inner core washes clean in the bathtub', 'Firm newborn side flips to softer toddler support', 'Zero off-gassing smell out of the box'],
      cons: ['Slightly heavier than standard foam mattresses', 'Requires specialized breathable sheets'],
      testedPeriod: '90-day active home nursery trial'
    }
  },
  {
    id: 'nordic-haven-high-chair',
    name: 'Beech Convertible High Chair',
    brand: 'Nordic Haven',
    category: 'feeding',
    isMinimalist: true,
    badge: 'Best Ergonomic High Chair',
    badgeColor: 'secondary',
    rating: 4.8,
    reviewCount: 920,
    msrp: '$189.00',
    certification: 'FSC Certified Wood',
    description: 'Adjustable 90-degree footrest aligns with pediatric feeding therapist standards. Fully converts into an adult chair supporting up to 220 lbs.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_n2j7RyjaRyjrVxQ5epb4xg7r9Ziak1ZrF74QJuN4lJBFRJXm0DIxluDPkk4kNwrMdHOEqzYjcPlIL6BeoK2kXpgXokawPw-RSzGTRn7JU-T0lvdV8GEGm1GuMOkKHKLp4I0yx6Wo18zjAGMjsQJZ_MYOLUX6JKMcTZjhjYl55JXoH8bpL-N_uTUdWJpuea2Kvdap1QlXn_cqz_1k4V74JIedn_0T9eROJaXeTELDYf8o_vU0QYveQA',
    tags: ['Pediatric PT Approved', 'No Crevice Cleaning', 'Grows to Adult'],
    amazonUrl: 'https://amazon.com',
    pediatricReview: {
      reviewer: 'Marcus Thorne, Pediatric Physical Therapist',
      verdict: 'Essential for oral-motor stability. The flat foot support grounds the infant’s pelvis, preventing slouching and reducing choking risks during solid feeding.',
      pros: ['Tool-free footrest and seat height adjustments', 'Smooth sealed finish with zero seam cracks where food accumulates', 'Lifetime durability from infancy to adulthood'],
      cons: ['Wood frame has a wider footprint than folding plastic high chairs', 'Harness straps require hand washing'],
      testedPeriod: '75-day active trial across 3 feeding stages'
    }
  },
  {
    id: 'loom-linen-wrap',
    name: 'Organic Bamboo Newborn Wrap',
    brand: 'Loom & Linen',
    category: 'carrier',
    isMinimalist: true,
    badge: 'Top Newborn Carrier',
    badgeColor: 'tertiary',
    rating: 4.9,
    reviewCount: 3110,
    msrp: '$68.00',
    certification: 'OEKO-TEX Certified',
    description: 'Breathable, thermal-regulating stretch fabric that preserves natural "M" hip posture. Certified hip-healthy by the International Hip Dysplasia Institute.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOQmetE6IMYB-Wtmj7MOcCdY4NclFw4a-ci6ubTOiSdYMCIQr26z8g7MlShvtpKdhBSTQpNY8uM6Lc6sv6EizJhUPYAH0Ydi64yuGWOwWtKck-RZePogOZ4s1sgCvSDoH27LQATSYXVoKIg5NTCRLlUJ9I0jLrqm6Mk_lWPoFkIQJcmDB4H2XUGpvK8WGHuPfaT_NekPa7UiBSP5_WjW1_zR5R1vpiAATgmsnVANS_N15Ev_87gNncjg',
    tags: ['Hip Dysplasia Certified', 'No Sweat Bamboo', '7–35 lbs'],
    amazonUrl: 'https://amazon.com',
    pediatricReview: {
      reviewer: 'Sarah Lindqvist, IBCLC & Babywearing Educator',
      verdict: 'The ideal fourth-trimester cocoon. The natural modal-bamboo blend prevents maternal-infant overheating during skin-to-skin kangaroo care.',
      pros: ['Buttery soft texture with just enough two-way stretch', 'Even back weight distribution eases postpartum spine tension', 'Folds down compact into diaper clutch'],
      cons: ['Learning curve for tying the first few times (video guide recommended)', 'Not structured for toddler back-carrying'],
      testedPeriod: '60-day trial with 4 newborn families'
    }
  },
  {
    id: 'nomi-natural-bouncer',
    name: 'Ergonomic Natural Bouncer',
    brand: 'Nomi Kids',
    category: 'soothing',
    isMinimalist: false,
    badge: 'Gentlest Natural Motion',
    badgeColor: 'primary',
    rating: 4.8,
    reviewCount: 780,
    msrp: '$179.00',
    certification: 'Battery-Free',
    description: 'Bounces naturally with baby’s own micromovements rather than artificial motors. Distributes infant weight evenly for spinal cord alignment.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8B5sHOsgHaVDsJXYUYkZrtdGJtjzsv5S4M3GRihGfJ7IezskBTqXUAhff1y1d7aQcUjq-iohZrLQ_GlDXw4HvhNj2GjSo-ppdLO0PUbnmQS0QbOvd5z9Pzx1tduRvr8bK1DbvFG1Hvru-UTOBTCwa3eXKGf_Wu3Bz8oToC5L3oKJMuDhYhVoBhd-XCQNcRoxHaNgwvznZhRzM6h1vYvIWC0MXSP8FF-0DhjyvJB0G20xotKI0dViROA',
    tags: ['Folds Flat (2 Inches)', 'Machine Washable Cover', 'Zero Cords'],
    amazonUrl: 'https://amazon.com',
    pediatricReview: {
      reviewer: 'Dr. Elena Vance, MD',
      verdict: 'Infants learn cause-and-effect as their kicking gently sets the bouncer in motion. Perfect for keeping baby upright safely after feeds to prevent reflux.',
      pros: ['Zero motor noise or artificial mechanical swinging', 'Folds completely flat for storage under sofas or travel', 'Washable quilted cotton cover'],
      cons: ['Maximum weight capacity 29 lbs', 'Requires active strap buckling'],
      testedPeriod: '90-day nursery rotation'
    }
  },
  {
    id: 'soundsooth-white-noise',
    name: 'Smart White Noise & Amber Glow',
    brand: 'SoundSooth',
    category: 'sleep',
    isMinimalist: true,
    badge: 'Sleep Saver Pick',
    badgeColor: 'secondary',
    rating: 4.7,
    reviewCount: 4250,
    msrp: '$54.99',
    certification: 'Auto Cry Sensor',
    description: 'Non-looping brown, pink, and womb sounds. Real-time cry detection gently resumes sound therapy before an infant fully escalates into wakefulness.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArXVaM7dqeLNZhVxLllUQmmBtyWvdLWg49Z_xqqdwHZNFlVT374p_PW5bSuzxlb58htkOZiskcdUUiAnU57Gg3hnnBVh7OJNvmo_-ICUknkj2f4O0fpEcf8bub29t0IRyr3J45uZfzAbk_qYrV66aPy82gX9qK6NUnTGSgDbiudis7rXZWOP_0cUOD3tkmTalK1iQSZvMOB2LFnsLhFmjFhB_RpozK-OfQoXDpNLm5LSss1ybnhdB4Sw',
    tags: ['Red Light Therapy', 'Decibel-Capped (65dB)', 'Portable Battery'],
    amazonUrl: 'https://amazon.com',
    pediatricReview: {
      reviewer: 'Dr. Elena Vance, MD',
      verdict: 'The decibel limiter prevents parental volume overexposure which protects infant ear canal development. The gentle amber 650nm light preserves natural melatonin secretion.',
      pros: ['True non-looping audio engine with authentic pink noise', 'Internal rechargeable battery runs 14 hours unplugged', 'Smart sensor activates soothing tone automatically'],
      cons: ['App setup is optional but handy for custom schedules', 'Charging cable is USB-C (adapter not included)'],
      testedPeriod: '120-day sleep room evaluation'
    }
  },
  {
    id: 'beaba-neo-food-maker',
    name: 'Neo Glass 4-in-1 Food Maker',
    brand: 'Beaba Neo',
    category: 'feeding',
    isMinimalist: false,
    badge: 'Top Puree & Steam System',
    badgeColor: 'tertiary',
    rating: 4.9,
    reviewCount: 1430,
    msrp: '$229.95',
    certification: 'Zero Plastic Contact',
    description: 'Steams, blends, defrosts, and reheats in a heavy thermal glass bowl and stainless steel basket, avoiding chemical leaching from heated plastics.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjhty-FhqZy-pxg-OAiLflZbLp6YtiX76OYMo_U58a1wnWd1N6-k6rRSmCLov0no-eABr2dL6at8dm2mF1LV5UHxPizJUNHUY6wM-j5_CtseHnWLZnsvOoJAp8wv_aks4NnTzAHp4KbdNNd8dYMO-YI9LkIbUoIcSt8N0PGYRa5UzBKFrtRl8vDhJK19wt8IVDbiFoSYLY8jbkFDHD3APd-icgYEAk_anFTVWN2QKFqQjasaVtvXscqg',
    tags: ['Thermal Shock Glass', 'Sabatier Blade', '15-Min Fast Steam'],
    amazonUrl: 'https://amazon.com',
    pediatricReview: {
      reviewer: 'Dr. Hallie Vance, Pediatric Nutritionist',
      verdict: 'The single easiest way to prepare silky-smooth root vegetable purees in under 15 minutes with zero plastic leaching into warm foods.',
      pros: ['Thick French borosilicate glass bowl holds 5.2 cups', 'Sabatier stainless curved blade blends smoother than conventional blenders', 'One-touch pulse dial for exact texture stages'],
      cons: ['Glass reservoir is heavier than plastic counterparts', 'Premium price point'],
      testedPeriod: '6 months in test kitchens'
    }
  }
];

export const HOMEPAGE_ARTICLES: ArticleItem[] = [
  {
    id: 'gentle-4-month-sleep',
    title: 'The Gentle 4-Month Sleep Transition: A Pediatric Sleep Consultant’s Compassionate Guide',
    excerpt: 'When infant biological sleep cycles mature at 16 weeks, frequent night wakings can feel overwhelming. Dr. Elena Vance outlines how to support circadian rhythm development without crying it out or losing your parental confidence.',
    author: 'Dr. Elena Vance',
    authorRole: 'Pediatric Sleep Specialist',
    authorAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhIxCru7NPDXWCRGnyy2RFAXMGrvq12ryiGHpP9mh1sQFGIfVZuqTCIdFGM6rIj0H8rHhnT3gzqYIEAlj2bqa--RRxd4mhUW7TTRwGGu7siAReRnRo71cVvB10Q2h-ee7EG3MqEmLukSLGwmfEOioL0N5BtLF-76ZrpiXRdPSv0x1L2Ou0bHrR9pDV-DJ54BwsV1Byrt7M4iHC3y8RZ3cvDg6Tr4-N4NRq4WT7HQ5tZPsF1noIU-QaEg',
    readTime: '8 min read',
    date: 'Oct 03, 2026',
    category: 'Pediatric Sleep Health',
    badgeBg: 'bg-primary-container/40',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHXG3pvQHMHASVBOOKbOX-gvdXRl5FxwETdy_a1Qfag5wYCoV-1dZS4vgzLNDDkkDLUchH1y2FpsXELEO3rMIoqzxOR473INkHBlXuk1JaPMS4UeARf4EwVexTRdLG9aeRmKDfGhBMlagywDxu43upjS_2xSIsi7JjcksIocm4M5wmSzh9XEoSu4S-Cr1rplTLlNOkUE-aAkrww01IIaLwWvMkW5dStzuDgDUpRGt7nolL9RiouyXQyQ',
    isFeatured: true,
    takeaways: [
      'Distinguishing between biological sleep cycle shifts and hunger cues',
      'The 90-minute wake window rule for preventing cortisol overproduction',
      'Gentle bedtime fading method that preserves parent-infant attachment'
    ]
  },
  {
    id: '12-baby-registry-essentials',
    title: 'The 12 Baby Registry Essentials You Actually Need (and 8 You Can Safely Skip)',
    excerpt: 'Cutting through marketing noise to save your budget and nursery space. What our mothers actually used past week four.',
    author: 'Sarah Jenkins',
    authorRole: 'Gear Editor & Mom of 3',
    readTime: '5 min read',
    date: 'Oct 14, 2026',
    category: 'Registry Essentials',
    badgeBg: 'bg-soft-blush/40',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2Lyhn3I183shVFinC8g2urDaX5u-Nis2uSk1RETLXar1oUoRyvLAKzNzyOvoSi46Y71gMk98Flcwpa1OAl3y_Hypsyu22kYgTCebRPOIvCRKuLYBCbZsiOkHcxKQ3kuYz1G6ZFuHgME4-gUI2HQ9xWOP0zcP3wgfc-sgwaW6LrUV18NEDWNj5mo5-cNOqtn095evhhSdvWWvpbPlBeSTpq3pkOGhcyGlLpAmtwjjWj1a96rTYATjE_g'
  },
  {
    id: 'toddler-big-emotions',
    title: 'Toddler Big Emotions: 5 Co-Regulation Scripts That Actually Work',
    excerpt: 'Practical words to say when tantrums flare up, grounding your toddler’s nervous system while preserving your own inner peace.',
    author: 'Maya Chen',
    authorRole: 'Family Therapist & Doula',
    readTime: '6 min read',
    date: 'Oct 18, 2026',
    category: 'Toddler Emotional Growth',
    badgeBg: 'bg-secondary-container',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCD1f2dQDlSXRVzoNrDEKKYqfKNhr28moGmfbzxawLLQ1o3M_xIN45sL2oYZz_C_0lWjzUfNpUH2hZikFFNKuAB_EFfzT8qTADl47O24_t0imFrxihcsRZMTglpy-qemhpIgZBbsWKC2aReF7P0rb9RNUQT1NQyGzVxkc9r1wNYt419Icsabay-siDXGAemA9kaNRdGluPtCYoaPWHfcrJvOBRnZV9WS9rTfWUhrVImyi-wf22MUauOcA'
  }
];

export const BLOG_ARTICLES: ArticleItem[] = [
  {
    id: 'stage-1-baby-purees',
    title: 'Stage 1 Baby Purees: 25 Gentle First Foods & 6-Month Feeding Guide',
    excerpt: 'Starting solids should be gentle and celebratory. Discover pediatrician-approved allergen introduction schedules, smooth single-ingredient recipes, and signs your baby is biologically ready to explore textures safely.',
    author: 'Dr. Hallie Vance',
    authorRole: 'Pediatric Nutritionist',
    authorAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfQAhaI52t-JO_wluCvdQKZFx94OdO1vTlM0e1apQXoVjOzZzNkP3l8aGLUyscYUYYZpj_CnKIbZ4PeEmaAkNJUytwO-fM-9Aca9rAZbXowVxt6lQTxjyiQAcr2JFhJc2xgvnb_vzw7bnZiSZwJRdGPRymiIIEeH5Ks0n4z23P1KGOTH8VYrZG4txPPgPLRQxRn5Bm33eeN3ygNh5ec7NrPsGYDwPxqyKhOsz5LWYGeQALRcV1VEOUdQ',
    readTime: '7 min read',
    date: 'Oct 24, 2026',
    category: 'Featured • Baby First Foods',
    badgeBg: 'bg-primary text-on-primary',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDm7ierR4dmoUVZXfg77PGC5aRaVwYYruMuh1cii4P6hKdIFWOxUNWtzmcWfRSdfRfuY-XtQRGlavCxEuiNMAeSUxWuwSHILU7j8k7YthajUo1FS6i6nUzuYOSGfgqrQjbMTZO8wmhPw4wBQ30VuVHYC75mz3YW5UC61RZvnTVrFb2OVjrGheUHqiC_VQeSEpawt_XcJZhOUikM3cYAJPdlaz3LpYpGmtat4jkn4qKePlsYzjC9ZPqOjA',
    isFeatured: true
  },
  {
    id: 'mango-puree-recipe',
    title: 'Mango Puree for Baby: Easy No-Cook Recipe & Gentle Combos (6 Months+)',
    excerpt: 'A luscious first food bursting with Vitamin C and digestive enzymes. Simple pairings with banana, avocado, and whole milk Greek yogurt for easy swallowing.',
    author: 'Dr. Elena Vance, MD',
    authorRole: 'Pediatrician & Medical Reviewer',
    readTime: '4 min read',
    date: 'Oct 21, 2026',
    category: 'Baby First Foods',
    badgeBg: 'bg-soft-blush/90 text-on-surface',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmfEJsmHd5BVXPkSHZ_tYq5NbtAw4DRmkaqV90pPJ6ziVQYJ_xEN5cFFWiTVhDMfYtEarkaC_e_kIVAY-TVX8pljExdrsy_5gzWDv1wFGUSTCwpdstX96MdUfvi1V5W1aUS8zS0aOkbMZI9t0jWDbeFW43FYFFzRNY92PoqdRnRavK6J89MWXk08gacQMu9z_jarTWCvpu0fR1KBVe-HtLi95Wlf_wmsmuvzqrDoqdg7St7nJPUTDXmA'
  },
  {
    id: 'first-14-days-home',
    title: 'The First 14 Days at Home: Deciphering Your Newborn’s Biological Cues',
    excerpt: 'From rooting reflexes and startle jumps to cluster feeding rhythms, here is your reassuring clinical guide to understanding what your baby is communicating.',
    author: 'Sarah Lindqvist, IBCLC',
    authorRole: 'Lactation Consultant',
    readTime: '6 min read',
    date: 'Oct 19, 2026',
    category: 'Newborn Care',
    badgeBg: 'bg-secondary-container text-on-secondary-container',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCD1f2dQDlSXRVzoNrDEKKYqfKNhr28moGmfbzxawLLQ1o3M_xIN45sL2oYZz_C_0lWjzUfNpUH2hZikFFNKuAB_EFfzT8qTADl47O24_t0imFrxihcsRZMTglpy-qemhpIgZBbsWKC2aReF7P0rb9RNUQT1NQyGzVxkc9r1wNYt419Icsabay-siDXGAemA9kaNRdGluPtCYoaPWHfcrJvOBRnZV9WS9rTfWUhrVImyi-wf22MUauOcA'
  },
  {
    id: 'banana-avocado-puree',
    title: 'Banana & Avocado Puree: 5 Nutrient-Dense Combinations for Tiny Tummies',
    excerpt: 'Packed with brain-boosting healthy fats and potassium. Learn the zero-cook, 3-minute method and safe freezing practices for batch preparation.',
    author: 'Dr. Hallie Vance',
    authorRole: 'Pediatric Nutritionist',
    readTime: '5 min read',
    date: 'Oct 16, 2026',
    category: 'Puree Recipes',
    badgeBg: 'bg-tertiary-fixed text-on-tertiary-fixed',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvCBBZPGlxN6b24wArTchxlWTH5lNBQnwkMYeY7ppMwoZNS_JKUXffZE7uXJ_fwdOA-oqAWfvXKKiAe9A9Tl5IhAxMMpbNgl4xOlyPbrRsrG7DxM7gk2UUkcu6odC4p5TOy8-wpu0bKzffo-S6c25GUjSdsKMvd4SWxs2dsXedHXY1oJoIFNlT9rXpw_dPWDamvHhOwpw_iCAivZRJ2aricCYC7ZJ3oy9CTnZAOb29TA_AMsEcTlNXAQ'
  },
  {
    id: 'third-trimester-hospital-bag',
    title: 'Third Trimester Hospital Bag Checklist: What You Actually Need in Labor',
    excerpt: 'Skip the unnecessary clutter. A seasoned birth doula reveals the 12 indispensable items for birth comfort, partner support, and calm golden hours.',
    author: 'Maya Chen, Doula',
    authorRole: 'Birth Doula & Family Specialist',
    readTime: '8 min read',
    date: 'Oct 12, 2026',
    category: 'Pregnancy Wellness',
    badgeBg: 'bg-soft-blush/90 text-on-surface',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB89F6cZ4hWEScU7by8dTs4dVkid9qym35NO25kOylcQXQlztEUAcUPDSVp2ODeQlzy4TXHqrgEGY-7UyNeBIjGB4Uc-ciG_iUH5sAE7FnL9TtgeoPzEHu9d_xdyrBwUrHVIyrE3A6UabKpAIffoLqwuWPc9fy8c2igBGgWS05xfYGn8nfbIav4zeDv0_gjWSsq3Pv19Y806hZLeY-KUGNtzc2otbg2StkMcIPMApCz3n1zcHHEwe_LmA'
  },
  {
    id: 'oatmeal-for-babies',
    title: 'Oatmeal for Babies: Gentle Iron-Rich Breakfasts + 8 Flavor Pairings',
    excerpt: 'Why iron fortification is essential after 6 months. Step-by-step instructions on blending rolled oats into smooth porridge mixed with breast milk or formula.',
    author: 'Dr. Hallie Vance',
    authorRole: 'Pediatric Nutritionist',
    readTime: '6 min read',
    date: 'Oct 08, 2026',
    category: 'Baby First Foods',
    badgeBg: 'bg-soft-blush/90 text-on-surface',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0cY7uVh6T1wOCrPVEjd39rX-reFFoAcD2jyiHbhkBYOb7vCAFc2QZxiBTf1NsM2QnXr2fnrm4gAvSViwxvQp8kl5C0h0NWgXjtVr3ckdqLN-JgazwZPdsvfN4n7HCJ_60R3Ow9PipMGaBkijeiWTpN5LH7zzY0c4SAvKxdHPDEaV_yy-K1DgIkjEItQ3FoMgbimAnbvV4RZNpzHkc6sNEI8Xk6yG-HOOnl-z0jZCVzi4VnN1Q_KKGBA'
  },
  {
    id: 'sleep-regression-4m',
    title: 'The 4-Month Sleep Regression: Surviving Biological Sleep Transitions Calmly',
    excerpt: 'It’s not a step backward—it’s a permanent cognitive leap in circadian rhythm formation. Mindful bedtime rituals to protect parental sanity and infant comfort.',
    author: 'Dr. Elena Vance, MD',
    authorRole: 'Pediatric Sleep Specialist',
    readTime: '9 min read',
    date: 'Oct 03, 2026',
    category: 'Newborn Sleep',
    badgeBg: 'bg-secondary-container text-on-secondary-container',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHXG3pvQHMHASVBOOKbOX-gvdXRl5FxwETdy_a1Qfag5wYCoV-1dZS4vgzLNDDkkDLUchH1y2FpsXELEO3rMIoqzxOR473INkHBlXuk1JaPMS4UeARf4EwVexTRdLG9aeRmKDfGhBMlagywDxu43upjS_2xSIsi7JjcksIocm4M5wmSzh9XEoSu4S-Cr1rplTLlNOkUE-aAkrww01IIaLwWvMkW5dStzuDgDUpRGt7nolL9RiouyXQyQ'
  },
  {
    id: 'tummy-time-positions',
    title: 'Gentle Tummy Time: 5 Low-Stress Positions for Weeks 2 Through 12',
    excerpt: 'If your infant fusses on the floor, try chest-to-chest resting, lap lounging, and football carries to strengthen neck stability without tears.',
    author: 'Marcus Thorne, Pediatric PT',
    authorRole: 'Pediatric Physical Therapist',
    readTime: '5 min read',
    date: 'Sep 28, 2026',
    category: 'Milestones & Play',
    badgeBg: 'bg-tertiary-fixed text-on-tertiary-fixed',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGsNvUNwaKq013_yoN40cPZzaCgrc6RkkhI6J1y80kW3xmM0ouQeWYv2wyIfNYIIgLlCOLYiUIHjZQQoFVHvnEGL8kNiKGB9R1TVZ-1WqZT0T6xUjrJUQ7bKjMnt6IShkhPWgsodtdj6zkcVvIWCP8Mm-HrjynhXoFJNAfppi2u_k-XvXug1UKKU72ZkE0iaIE0Sqva6cRQtgnAAl12DY2y3KaCjroCthf8Mi1YIX3zQyfO3h36AovUA'
  },
  {
    id: 'fourth-trimester-care',
    title: 'Fourth Trimester Postpartum Care: Restoring Your Pelvic Floor & Nervous System',
    excerpt: 'A physiological map for the first 40 days: diaphragmatic breathing, lymphatic support, nourishing broths, and boundary setting for mother-centric recovery.',
    author: 'Dr. Aris Thorne',
    authorRole: 'Obstetrics & Women’s Health',
    readTime: '7 min read',
    date: 'Sep 23, 2026',
    category: 'Postpartum Health',
    badgeBg: 'bg-soft-blush/90 text-on-surface',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLl5ITbnwwjVNfnCXbLZjlGyrXJTw22blzynDJ5KbdGmkhm6Fpa2VLbKmI5Vb-4mx3z3H2kSilq4MKZN7aVEuGEJejq2U9bWI1Ykq0t5Zwo4bV5mqslJ_w5WrsI-hTOGWWE6cqHNY0THTXgWOogFHEbe6Rvo3kYz7sVyv4Clv0NPXw2bIHAtx6o-YH3zQSjkgMFYT4fCuzQQkNKSvMoLx_5Ik69hf2BhTYtoC8OIicvdaMzU3LU7lZ9Q'
  }
];

export const MUST_HAVE_ITEMS: RegistryTierItem[] = [
  { id: 'm1', text: 'Breathable GREENGUARD Gold crib mattress', estimatedCost: 250, checked: true },
  { id: 'm2', text: 'Crash-tested infant/convertible car seat', estimatedCost: 280, checked: true },
  { id: 'm3', text: 'Ergonomic supportive newborn carrier/wrap', estimatedCost: 68, checked: true },
  { id: 'm4', text: 'Consistent non-looping white noise machine', estimatedCost: 55, checked: true },
  { id: 'm5', text: 'Safe bedside bassinet or convertible mini-crib', estimatedCost: 220, checked: true },
  { id: 'm6', text: '4–6 pure cotton zippered footies & 3 swaddles', estimatedCost: 75, checked: true }
];

export const NICE_TO_HAVE_ITEMS: RegistryTierItem[] = [
  { id: 'n1', text: 'Ergonomic natural infant bouncer (no batteries)', estimatedCost: 179, checked: true },
  { id: 'n2', text: 'Compact all-terrain travel stroller', estimatedCost: 260, checked: false },
  { id: 'n3', text: 'Steam-sterilizer & clean glass baby food steamer', estimatedCost: 180, checked: false },
  { id: 'n4', text: 'Wipeable silicone changing pad', estimatedCost: 45, checked: true },
  { id: 'n5', text: 'Non-contact digital fever thermometer', estimatedCost: 35, checked: true }
];

export const SKIP_ITEMS = [
  { id: 's1', text: 'Electric Wipe Warmers (dries wipes, grows mold)', saved: 40 },
  { id: 's2', text: 'Infant Shoe Wardrobes (restrict natural toe splay)', saved: 65 },
  { id: 's3', text: 'Dedicated Single-Use Diaper Pails ($$ refill rings)', saved: 85 },
  { id: 's4', text: 'Fabric-covered changing toppers (stains immediately)', saved: 50 },
  { id: 's5', text: 'Bulky motorized baby swings (positional asphyxia hazard)', saved: 240 }
];

export const PREGNANCY_PRODUCTS: ProductItem[] = [
  {
    id: 'luma-pregnancy-pillow',
    name: 'Organic Cotton Full-Body Contoured Pregnancy Pillow',
    brand: 'Luma Rest',
    category: 'pregnancy',
    isMinimalist: true,
    badge: 'Top Sleep & Spine Alignment Pick',
    badgeColor: 'primary',
    rating: 4.9,
    reviewCount: 2410,
    msrp: '$68.99',
    certification: 'GOTS Certified Organic Cotton',
    description: 'Ergonomic U-shaped contour cradles belly, lower back, and knees simultaneously to relieve pelvic girdle pain and prevent inferior vena cava compression during side sleeping.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLl5ITbnwwjVNfnCXbLZjlGyrXJTw22blzynDJ5KbdGmkhm6Fpa2VLbKmI5Vb-4mx3z3H2kSilq4MKZN7aVEuGEJejq2U9bWI1Ykq0t5Zwo4bV5mqslJ_w5WrsI-hTOGWWE6cqHNY0THTXgWOogFHEbe6Rvo3kYz7sVyv4Clv0NPXw2bIHAtx6o-YH3zQSjkgMFYT4fCuzQQkNKSvMoLx_5Ik69hf2BhTYtoC8OIicvdaMzU3LU7lZ9Q',
    tags: ['Zero Foam Odor', 'Washable Linen Cover', 'Pelvic PT Approved'],
    amazonUrl: 'https://amazon.com',
    pediatricReview: {
      reviewer: 'Dr. Aris Thorne (Obstetrics & Pelvic Health)',
      verdict: 'The essential sleep accessory for second and third trimesters. Keeps the pelvis parallel and maintains gentle left-lateral tilt to maximize placental perfusion.',
      pros: ['Breathable organic cotton eliminates sweaty sleep', 'Dense natural fiber core does not flatten by month 8', 'Dual-sided contour fits any sleeping orientation'],
      cons: ['Takes up roughly one half of a queen mattress', 'Cover takes 20 minutes to unzip and replace after washing'],
      testedPeriod: '90-day clinical sleep study with 18 expectant mothers'
    }
  },
  {
    id: 'nectar-botanicals-belly-oil',
    name: 'Certified Organic Botanical Belly & Body Stretch Oil',
    brand: 'Nectar Botanicals',
    category: 'pregnancy',
    isMinimalist: true,
    badge: 'Top Non-Toxic Skin Elasticity Pick',
    badgeColor: 'secondary',
    rating: 4.8,
    reviewCount: 1850,
    msrp: '$36.00',
    certification: 'USDA Organic & EWG Verified',
    description: 'Cold-pressed virgin rosehip seed, golden jojoba, and calendula extract. Nourishes deep dermal elasticity without endocrine-disrupting phthalates or synthetic fragrances.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDm7ierR4dmoUVZXfg77PGC5aRaVwYYruMuh1cii4P6hKdIFWOxUNWtzmcWfRSdfRfuY-XtQRGlavCxEuiNMAeSUxWuwSHILU7j8k7YthajUo1FS6i6nUzuYOSGfgqrQjbMTZO8wmhPw4wBQ30VuVHYC75mz3YW5UC61RZvnTVrFb2OVjrGheUHqiC_VQeSEpawt_XcJZhOUikM3cYAJPdlaz3LpYpGmtat4jkn4qKePlsYzjC9ZPqOjA',
    tags: ['Fragrance-Free', 'Zero Greasy Residue', 'Dermatologist Tested'],
    amazonUrl: 'https://amazon.com',
    pediatricReview: {
      reviewer: 'Maya Chen (Doula & Maternal Skincare Specialist)',
      verdict: 'The cleanest formulation we tested. Fast absorbing, soothes rapid stretching itchiness within 60 seconds, and leaves zero yellow residue on fine white linens.',
      pros: ['Zero essential oils that can irritate sensitive pregnancy skin', 'Glass amber dropper bottle prevents plastic leaching', 'Rich in natural omegas 3, 6, and 9'],
      cons: ['Dropper dispenser requires two hands', 'Unscented earthy botanicals might take getting used to'],
      testedPeriod: 'Tested across all trimesters through 6 weeks postpartum'
    }
  },
  {
    id: 'auraflex-maternity-band',
    name: 'Breathable Ergonomic Maternity & Pelvic Support Band',
    brand: 'AuraFlex',
    category: 'pregnancy',
    isMinimalist: true,
    badge: 'Best Sacroiliac & Bladder Relief',
    badgeColor: 'primary',
    rating: 4.8,
    reviewCount: 1120,
    msrp: '$42.50',
    certification: 'Medical Grade Class 1 Support Device',
    description: 'Multi-point micro-mesh support redistributes growing bump weight across the pelvic girdle and lumbar spine, immediately relieving pubic symphysis (SPD) and lower back strain.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB89F6cZ4hWEScU7by8dTs4dVkid9qym35NO25kOylcQXQlztEUAcUPDSVp2ODeQlzy4TXHqrgEGY-7UyNeBIjGB4Uc-ciG_iUH5sAE7FnL9TtgeoPzEHu9d_xdyrBwUrHVIyrE3A6UabKpAIffoLqwuWPc9fy8c2igBGgWS05xfYGn8nfbIav4zeDv0_gjWSsq3Pv19Y806hZLeY-KUGNtzc2otbg2StkMcIPMApCz3n1zcHHEwe_LmA',
    tags: ['Pelvic PT Approved', 'Dual Adjustable Tension', 'Low Profile Under Knits'],
    amazonUrl: 'https://amazon.com',
    pediatricReview: {
      reviewer: 'Marcus Thorne (Pediatric & Perinatal PT)',
      verdict: 'Lifts rather than squeezes. Perfect for active mothers experiencing round ligament twinges or pelvic girdle pain during walking and standing tasks.',
      pros: ['Breathable perforated elastic prevents heat rash in summer', 'Double side straps permit tailored tension adjustment', 'Discreet seam lines remain hidden under maternity dresses'],
      cons: ['Must be removed when sitting for extended work periods', 'Velcro needs to be fastened before washing to prevent snagging'],
      testedPeriod: 'Evaluated with 25 pregnant patients over 12 weeks'
    }
  },
  {
    id: 'purenourish-prenatal',
    name: 'Gentle Prenatal Multivitamin with Methylfolate & Chelated Iron',
    brand: 'PureNourish',
    category: 'pregnancy',
    isMinimalist: true,
    badge: 'Pediatrician Formulated & Non-Constipating',
    badgeColor: 'secondary',
    rating: 4.9,
    reviewCount: 3200,
    msrp: '$34.99',
    certification: 'NSF Certified & Third-Party Tested',
    description: 'Designed specifically for sensitive first-trimester tummies. Contains 800mcg bioactive L-methylfolate (bypassing MTHFR gene hurdles), 27mg gentle iron bisglycinate, and 300mg choline.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvCBBZPGlxN6b24wArTchxlWTH5lNBQnwkMYeY7ppMwoZNS_JKUXffZE7uXJ_fwdOA-oqAWfvXKKiAe9A9Tl5IhAxMMpbNgl4xOlyPbrRsrG7DxM7gk2UUkcu6odC4p5TOy8-wpu0bKzffo-S6c25GUjSdsKMvd4SWxs2dsXedHXY1oJoIFNlT9rXpw_dPWDamvHhOwpw_iCAivZRJ2aricCYC7ZJ3oy9CTnZAOb29TA_AMsEcTlNXAQ',
    tags: ['Zero Nausea Capsule', 'Bioactive L-Methylfolate', 'Heavy Metal Screened'],
    amazonUrl: 'https://amazon.com',
    pediatricReview: {
      reviewer: 'Dr. Hallie Vance (Pediatric Nutritionist)',
      verdict: 'The ideal nutritional baseline. Chelated iron does not cause constipation or gastric burning, while active choline supports critical fetal neurodevelopment.',
      pros: ['Citrus-scented tab inside bottle masks vitamin odor', 'Easy to swallow vegetarian capsules', 'Third-party verified free of heavy metals and microbes'],
      cons: ['Requires taking two capsules daily', 'Contains no artificial dyes or sugary gummies'],
      testedPeriod: 'Tested across 100+ clinical nutrition consultations'
    }
  },
  {
    id: 'calmwrist-nausea-bands',
    name: 'Natural Acupressure Morning Sickness Bands & Organic Ginger Drops',
    brand: 'CalmWrist',
    category: 'pregnancy',
    isMinimalist: false,
    badge: 'Best First Trimester Nausea Relief',
    badgeColor: 'tertiary',
    rating: 4.7,
    reviewCount: 2890,
    msrp: '$19.50',
    certification: 'Drug-Free Clinical Acupressure',
    description: 'Applies gentle, continuous pressure on the P6 (Nei-Kuan) acupressure point on the inner wrist. Proven in clinical obstetrics to suppress morning sickness nausea without drug drowsiness.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmfEJsmHd5BVXPkSHZ_tYq5NbtAw4DRmkaqV90pPJ6ziVQYJ_xEN5cFFWiTVhDMfYtEarkaC_e_kIVAY-TVX8pljExdrsy_5gzWDv1wFGUSTCwpdstX96MdUfvi1V5W1aUS8zS0aOkbMZI9t0jWDbeFW43FYFFzRNY92PoqdRnRavK6J89MWXk08gacQMu9z_jarTWCvpu0fR1KBVe-HtLi95Wlf_wmsmuvzqrDoqdg7St7nJPUTDXmA',
    tags: ['Drug-Free & Non-Drowsy', 'Soft Organic Bamboo', 'Includes 30 Ginger Drops'],
    amazonUrl: 'https://amazon.com',
    pediatricReview: {
      reviewer: 'Dr. Elena Vance, MD',
      verdict: 'A lifesaver during weeks 6 to 14. We recommend pairing the acupressure bands with morning ginger drops before getting out of bed to prevent empty-stomach nausea.',
      pros: ['Instant non-pharmacological relief within 5 minutes', 'Reusable, machine washable soft bamboo knit band', 'Safe to wear 24 hours a day'],
      cons: ['Correct placement over P6 point is crucial for effectiveness', 'Snug wrist fit might leave faint indentations'],
      testedPeriod: 'Clinical evaluation with 40 first-trimester expectant mothers'
    }
  },
  {
    id: 'bloompelvis-birthing-ball',
    name: 'Anti-Burst Birthing Ball with Stability Ring & Pelvic Guide',
    brand: 'BloomPelvis',
    category: 'pregnancy',
    isMinimalist: false,
    badge: 'Top Labor Prep & Pelvic Alignment Tool',
    badgeColor: 'secondary',
    rating: 4.9,
    reviewCount: 1670,
    msrp: '$49.00',
    certification: '2,000 lb Anti-Burst Certified Non-Toxic PVC',
    description: 'Heavy-duty 65cm birthing exercise ball with anti-slip matte texture, stability floor ring, and a removable washable neutral linen cover. Facilitates optimal fetal positioning (LOA) and eases pelvic floor stiffness.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8B5sHOsgHaVDsJXYUYkZrtdGJtjzsv5S4M3GRihGfJ7IezskBTqXUAhff1y1d7aQcUjq-iohZrLQ_GlDXw4HvhNj2GjSo-ppdLO0PUbnmQS0QbOvd5z9Pzx1tduRvr8bK1DbvFG1Hvru-UTOBTCwa3eXKGf_Wu3Bz8oToC5L3oKJMuDhYhVoBhd-XCQNcRoxHaNgwvznZhRzM6h1vYvIWC0MXSP8FF-0DhjyvJB0G20xotKI0dViROA',
    tags: ['Doula Recommended', 'Stability Base Included', 'Printed Trimester Exercise Guide'],
    amazonUrl: 'https://amazon.com',
    pediatricReview: {
      reviewer: 'Sarah Jenkins (Senior Gear Editor & Birth Doula)',
      verdict: 'The most versatile piece of pregnancy gear. Replaces your office desk chair in the third trimester to open the pelvic inlet and serves as a soothing bouncer with baby postpartum.',
      pros: ['The stability ring keeps it from rolling away in living rooms', 'Removable warm oat linen cover blends into home decor', 'Comes with quick foot pump and illustrated labor position guide'],
      cons: ['Takes up floor space when fully inflated', 'Requires checking air pressure once every few weeks'],
      testedPeriod: 'Used through third trimester labor prep and hospital delivery rooms'
    }
  }
];

export const PREGNANCY_STAGES: PregnancyStageInfo[] = [
  {
    id: 'trimester-1',
    trimester: 'First Trimester',
    weeks: 'Weeks 1 – 12',
    theme: 'The Foundation & Hormonal Surge',
    badgeColor: 'bg-[#F3C7CD]/40 text-[#672326]',
    overview: 'The earliest, most tender weeks where major organs, neural pathways, and the placenta form. Progesterone and hCG levels peak, calling for deep somatic rest, unhurried pacing, and non-judgmental acceptance of fatigue.',
    babyDevelopment: [
      'Day 21: Tiny heart begins to beat with its own rhythmic contraction.',
      'Week 6: Neural tube closes completely; facial features and limb buds appear.',
      'Week 10: Vital organs (kidneys, liver, brain, intestines) are fully functioning.',
      'Week 12: Baby reaches 2.5 inches (size of a plum) with fully formed fingernails and reflex kicks.'
    ],
    maternalExpectations: [
      'Profound physical fatigue as blood volume surges by up to 50% to build the placenta.',
      'Morning nausea and heightened smell sensitivity (hyperosmia) caused by rapid hCG rise.',
      'Frequent urination due to expanding uterus pressing gently against the bladder.',
      'Heightened emotional vulnerability, vivid dreams, and shifting nervous system balance.'
    ],
    mindfulPractices: [
      'Daily 15-minute somatic restorative rest: lie on your back or side with eyes closed and zero screens.',
      'Befriending the fatigue: treat exhaustion not as a weakness, but as sacred cellular work.',
      'Gentle vagus nerve humming and slow extended exhalations to calm morning nausea waves.'
    ],
    clinicalMilestones: [
      '8-Week Confirmation & Dating Ultrasound: confirms gestational sac and fetal heartbeat.',
      'First Trimester Bloodwork: complete blood count, blood typing, Rh factor, and thyroid screening.',
      'Week 10+ NIPT Screening: optional cell-free DNA blood draw checking chromosomal health and sex.',
      'Week 11–13 Nuchal Translucency (NT) Scan: ultrasound measuring fluid behind baby’s neck.'
    ],
    nutritionTips: [
      'Keep dry crackers or raw almonds on your bedside table to eat 10 minutes before rising.',
      'Hydrate with room-temperature electrolyte lemon water rather than ice water to soothe stomach lining.',
      'Prioritize bioactive methylfolate and vitamin B6 to reduce nausea and support neural tube health.'
    ]
  },
  {
    id: 'trimester-2',
    trimester: 'Second Trimester',
    weeks: 'Weeks 13 – 27',
    theme: 'The Golden Glow & Awakening Movement',
    badgeColor: 'bg-[#d4e4ce] text-[#3c4b3a]',
    overview: 'Often welcomed as the most vibrant trimester. Nausea recedes, maternal energy rebounds, the bump blossoms, and you feel the breathtaking first flutter of infant movements ("quickening").',
    babyDevelopment: [
      'Week 16: Baby can hear maternal heartbeat, digestive rhythms, and external voices.',
      'Week 18–20: Flutters evolve into unmistakable kicks, somersaults, and thumb sucking.',
      'Week 22: Developing protective vernix caseosa and soft lanugo hair to shield delicate skin.',
      'Week 26: Baby responds to external music with movement and begins regular sleep/wake cycles.'
    ],
    maternalExpectations: [
      'Energy rebound and restored appetite for nutrient-dense whole foods.',
      'Round ligament pain: brief sharp twinges in the lower abdomen when changing positions.',
      'Mild postural shifts as center of gravity moves forward, accentuating lumbar curve.',
      'Softening of joints and ligaments triggered by the hormone relaxin.'
    ],
    mindfulPractices: [
      'Daily "Connection Meditation": resting hands on your belly for 5 minutes of mindful breath sharing.',
      'Gentle pelvic tilts and cat-cow stretches on a birthing ball to release lower back tension.',
      'Evening soothing belly oil massage to nurture expanding skin and create calm bedtime rituals.'
    ],
    clinicalMilestones: [
      'Week 20 Anatomy Scan (Level II Ultrasound): in-depth evaluation of heart chambers, spine, brain, and growth.',
      'Fundal Height Tracking: measuring uterine growth in centimeters at every prenatal checkup.',
      'Week 24–28 Gestational Diabetes Glucose Challenge: screening maternal insulin response.'
    ],
    nutritionTips: [
      'Increase iron intake (lentils, spinach, pasture-raised beef) paired with vitamin C for absorption.',
      'Incorporate DHA Omega-3s (wild salmon, algae oil) to fuel the infant brain’s rapid growth spurt.',
      'Add 300–400mg magnesium glycinate in the evening to prevent nocturnal calf cramps.'
    ]
  },
  {
    id: 'trimester-3',
    trimester: 'Third Trimester',
    weeks: 'Weeks 28 – 40+',
    theme: 'Nesting, Maturation & Gentle Surrender',
    badgeColor: 'bg-[#b6a08c]/40 text-[#463728]',
    overview: 'The home stretch. Baby gains substantive subcutaneous fat, lung surfactant matures, and the maternal body prepares for the primal initiation of labor. An inward, intuitive season of nesting and surrender.',
    babyDevelopment: [
      'Week 30: Brain undergoes dramatic folding into complex neural gyri and sulci.',
      'Week 34: Lungs produce mature surfactant, preparing baby for independent breathing.',
      'Week 36: Baby descends into the maternal pelvis, settling head-down (vertex position).',
      'Weeks 37–40: Full term maturation; gains ~0.5 lb each week and practices breathing motions.'
    ],
    maternalExpectations: [
      'Braxton Hicks practice contractions: irregular, painless abdominal tightening.',
      'Shortness of breath as the uterus presses against the diaphragm until baby "drops".',
      'Pelvic pressure and lightening sensations as baby engages deeply into the birth canal.',
      'Nesting surge: an instinctive urge to tidy, curate, and prepare the nursery sanctuary.'
    ],
    mindfulPractices: [
      'Perineal massage from week 34 onwards using organic sweet almond or jojoba oil.',
      'Golden Exhalations: practicing deep horse-lip exhalations to condition the pelvic floor to release.',
      'Writing an intention-based birth preferences sheet centered on calm, consent, and bodily peace.'
    ],
    clinicalMilestones: [
      'Week 28 Tdap Vaccine & Rhogam injection (for Rh-negative mothers).',
      'Week 36 Group B Strep (GBS) Vaginal/Rectal Swab.',
      'Weekly or bi-weekly checkups monitoring blood pressure, urine protein, and fetal heart rate.',
      'Non-stress tests (NST) or biophysical profile if indicated past 40 weeks.'
    ],
    nutritionTips: [
      '6 Medjool dates daily starting at week 36: clinically shown to improve cervical dilation and ease labor.',
      'Red raspberry leaf tea to gently tone the uterine myometrium for efficient labor contractions.',
      'Warm broths, stewed fruits, and easily digestible meals to avoid late-pregnancy heartburn.'
    ]
  },
  {
    id: 'fourth-trimester',
    trimester: 'Fourth Trimester',
    weeks: 'Weeks 1 – 12 Postpartum',
    theme: 'The Sacred First 40 Days',
    badgeColor: 'bg-[#954648]/20 text-[#672326]',
    overview: 'Often forgotten in standard care, the fourth trimester is a profound physiological and spiritual transition. The mother’s nervous system, hormonal balance, and organs require gentle warmth and continuous community support.',
    babyDevelopment: [
      'Transitioning from sterile warm womb to sensory-rich external world.',
      'Developing day/night circadian rhythm through morning natural light exposure.',
      'Rooting, suckling, and stepping reflexes guiding attachment and feeding.',
      'Week 6–8: The arrival of the first authentic social smiles and joyful eye contact.'
    ],
    maternalExpectations: [
      'Massive hormonal drop: estrogen and progesterone plummet within 48 hours of delivery.',
      'Lochia bleeding and uterine involution cramps (especially during breastfeeding).',
      'Engorgement and let-down sensations as mature milk replaces colostrum around day 3–4.',
      'Maternal brain remodeling (neuroplasticity) enhancing empathy and infant responsiveness.'
    ],
    mindfulPractices: [
      'The "5-5-5 Postpartum Rule": 5 days IN bed, 5 days ON the bed, 5 days AROUND the bed.',
      'Skin-to-skin kangaroo care: stimulates oxytocin, stabilizes infant heart rate, and lowers maternal stress.',
      'Unapologetic boundary setting: decline visitors who do not come to hold a chore rather than the baby.'
    ],
    clinicalMilestones: [
      'Week 1–2 Lactation Consultation & Pediatric Weight Check.',
      'Week 3 Maternal Wound / Incision Check (if cesarean or tear repair).',
      'Week 6 Comprehensive Postpartum & Pelvic Floor Exam.',
      'Edinburgh Postnatal Depression Scale (EPDS) screening for maternal emotional health.'
    ],
    nutritionTips: [
      'Warm nourishing bone broths rich in collagen and amino acids to rebuild tissue elasticity.',
      'Warming spices (ginger, cinnamon, cumin, turmeric) to rekindle digestive fire and ease bloating.',
      'Hydrate with minimum 3 liters of warm filtered water and electrolytes daily for rich milk production.'
    ]
  }
];

