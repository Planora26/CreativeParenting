---
name: Warm Editorial Parenting
colors:
  surface: '#fff8f5'
  surface-dim: '#e1d8d5'
  surface-bright: '#fff8f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fbf2ee'
  surface-container: '#f5ece9'
  surface-container-high: '#efe6e3'
  surface-container-highest: '#e9e1dd'
  on-surface: '#1e1b19'
  on-surface-variant: '#544342'
  inverse-surface: '#34302d'
  inverse-on-surface: '#f8efeb'
  outline: '#877272'
  outline-variant: '#d9c1c0'
  surface-tint: '#954648'
  primary: '#954648'
  on-primary: '#ffffff'
  primary-container: '#e88989'
  on-primary-container: '#672326'
  inverse-primary: '#ffb3b2'
  secondary: '#536251'
  on-secondary: '#ffffff'
  secondary-container: '#d4e4ce'
  on-secondary-container: '#586755'
  tertiary: '#6d5b4a'
  on-tertiary: '#ffffff'
  tertiary-container: '#b6a08c'
  on-tertiary-container: '#463728'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad9'
  primary-fixed-dim: '#ffb3b2'
  on-primary-fixed: '#3e040a'
  on-primary-fixed-variant: '#772f32'
  secondary-fixed: '#d7e7d1'
  secondary-fixed-dim: '#bbcbb6'
  on-secondary-fixed: '#111f11'
  on-secondary-fixed-variant: '#3c4b3a'
  tertiary-fixed: '#f7dec9'
  tertiary-fixed-dim: '#dac2ae'
  on-tertiary-fixed: '#26190c'
  on-tertiary-fixed-variant: '#544434'
  background: '#fff8f5'
  on-background: '#1e1b19'
  surface-variant: '#e9e1dd'
  ivory-canvas: '#FFF7F3'
  soft-blush: '#F3C7CD'
  pure-white: '#FFFFFF'
  sage-muted: '#D6DDD4'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '600'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 30px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 30px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.03em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.06em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
---

## Brand & Style

This design system embodies a mindful, nurturing, and high-end editorial lifestyle aesthetic. It speaks to intentional parents seeking thoughtful guidance, calm reassurance, and curated discovery. 

The aesthetic fuses **Editorial Elegance** with **Tactile Warmth**:
- Generous breathing room and airy whitespace that instill a sense of calm and unhurried reading.
- Curated boutique publication styling marked by literary serif display typography paired with humanist, welcoming sans-serifs.
- Soft, organic transitions, pill badges, and layered warm neutral backdrops that reject clinical harshness in favor of home-like comfort.

## Colors

The color palette centers on earthy warmth, gentle botanicals, and high-contrast literary readability:
- **Primary (`#E88989`)**: Terracotta rose / warm blush accent for active states, key interactive badges, and brand moments.
- **Secondary (`#8A9A86`)**: Soothing sage green providing botanical balance, reassurance, and mindfulness.
- **Tertiary (`#A48F7C`)**: Earthy warm taupe for supporting structures, dividing lines, and secondary elements.
- **Neutral (`#2E2A28`)**: Deep charcoal slate, ensuring rich, legible editorial typography without the cold severity of pure black.
- **Canvas / Named Tokens**:
  - `ivory-canvas` (`#FFF7F3`): The overarching warm foundational background.
  - `soft-blush` (`#F3C7CD`): Gentle tint for highlight cards, badges, and soft hover fills.
  - `pure-white` (`#FFFFFF`): Elevated card surfaces resting above the ivory backdrop.
  - `sage-muted` (`#D6DDD4`): Soft secondary chip fill and quiet container backgrounds.

## Typography

Typography establishes an editorial magazine rhythm.

- **Headlines & Titles**: Rendered in `Playfair Display`. It brings literary elegance, artisanal care, and warm editorial distinction to all article titles, feature heroes, and section headings.
- **Body & Captions**: Set in `Plus Jakarta Sans`. Its open apertures and soft curves complement the serif titles while maintaining legibility over long-form lifestyle reading.
- **Labels & Micro-copy**: Employs uppercase or tracked-out small caps in `Plus Jakarta Sans` for category badges, metadata, and timestamps to contrast gracefully against the serif titles.

## Layout & Spacing

The layout philosophy follows a relaxed 12-column fluid grid system on desktop that gracefully consolidates down to 6 columns on tablet and a single column on mobile.

- **Generous Vertical Rhythm**: Sections breathe through extensive use of `space-2xl` and `space-xl` gaps, avoiding cluttered information density.
- **Breakpoints**:
  - **Desktop (1024px+)**: Max content container of 1280px with centered gutters of `1.5rem` and outer margins of `3rem`.
  - **Tablet (768px - 1023px)**: 6 columns, `1.5rem` gutters, and `2rem` margins.
  - **Mobile (< 768px)**: Single column reflow, `1rem` gutters, and `1.25rem` outer canvas padding.

## Elevation & Depth

This design system avoids sharp, synthetic drop shadows or stark flat outlines. Depth is expressed through **ambient warmth and layered surfaces**:

- **Layered Canvas Depth**: The base canvas rests on `ivory-canvas` (`#FFF7F3`). Resting cards use `pure-white` (`#FFFFFF`), immediately separating content from canvas without relying heavily on borders.
- **Warm Ambient Diffusion**: Elevated elements (modals, floating menus, feature cards) cast an ultra-soft, diffused shadow tinted with warm charcoal and terracotta: `0 8px 32px -4px rgba(46, 42, 40, 0.06), 0 2px 8px -2px rgba(232, 137, 137, 0.08)`.
- **Delicate Boundaries**: Where structure is required, borders are faint hairline accents tinted with tertiary taupe at low opacity: `1px solid rgba(164, 143, 124, 0.16)`.

## Shapes

The shape system prioritizes soft, organic hospitality and gentle child-safe contours:
- Standard interactive elements and cards use fluid rounded corners (`roundedness: 2`, where base components use `0.5rem`, large content cards adopt `1rem` to `1.5rem`, and hero article frames feature up to `rounded-2xl` / `1rem - 1.5rem`).
- Micro-elements such as tags, metadata badges, and pill buttons utilize full continuous circular curves (`rounded-full` / `9999px`) to maintain a friendly, touchable boutique finish.

## Components

### Buttons
- **Primary Button**: Solid warm blush (`#E88989`) background with crisp white typography. Shaped as a soft rounded rectangle (`0.5rem`) or elongated pill (`9999px`). Hover state darkens gently toward terracotta with an ambient warm shadow.
- **Secondary Button**: Outlined in tertiary taupe (`rgba(164, 143, 124, 0.3)`) over a subtle ivory fill, text in deep charcoal slate (`#2E2A28`).
- **Text / Editorial Action**: Text in deep slate or sage green with an animated subtle underline that responds to hover.

### Chips & Badges
- Pill-shaped (`rounded-full`) badges.
- Category indicators use tinted background surfaces (`#F3C7CD` at 30% opacity or `#D6DDD4` at 40% opacity) with high-contrast text (`#2E2A28`) in `label-sm` tracking.

### Cards & Story Tiles
- Built with `pure-white` (`#FFFFFF`) surface backgrounds atop the `#FFF7F3` ivory ground.
- Styled with `rounded-2xl` (1.25rem - 1.5rem) corner radii, hairline borders (`rgba(164, 143, 124, 0.15)`), and soft ambient shadows.
- Generous internal padding (`space-lg` to `space-xl`) ensuring headers, photography, and excerpts feel light and editorial.

### Input Fields
- Generously padded input fields with pill or gentle rounded (`rounded-lg`) borders.
- Light ivory-tinted background (`#FFFFFF`) framed by a soft taupe border (`rgba(164, 143, 124, 0.25)`). Focus rings transition gracefully into soft blush (`#E88989`) with an offset blur glow.

### Checkboxes & Radio Buttons
- Rounded check squares and circular radios with soft sage green (`#8A9A86`) selected fills and ivory indicators, eschewing cold digital blues.

### Content Pull-Quotes & Feature Banners
- Editorial pull-quotes set in `Playfair Display` italic with a gentle vertical accent bar in soft sage (`#8A9A86`) or an inset card with blush wash (`#F3C7CD` at 20% opacity).