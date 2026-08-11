// Theme constants — reads from CSS variables when available, falls back to hardcoded gold values.
// This lets the theme respond to bazino's dynamic color system (body[data-theme='ares-elite-gold']).

export const CLIP = 'polygon(12px 0%, calc(100% - 12px) 0%, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0% calc(100% - 12px), 0% 12px)';
export const CLIP_SM = 'polygon(8px 0%, calc(100% - 8px) 0%, 100% 8px, 100% calc(100% - 8px), 100% calc(100% - 8px) 100%, 8px 100%, 0% calc(100% - 8px), 0% 8px)';
export const CLIP_LG = 'polygon(16px 0%, calc(100% - 16px) 0%, 100% 16px, 100% calc(100% - 16px), calc(100% - 16px) 100%, 16px 100%, 0% calc(100% - 16px), 0% 16px)';

// These match the CSS variable defaults in index.css.
// Components use these for inline styles that can't read CSS vars directly.
export const COLORS = {
  bg: '#0a0a0f',
  panel: '#111118',
  panelLight: '#1a1a24',
  border: 'rgba(212,175,55,0.3)',
  borderBright: 'rgba(212,175,55,0.6)',
  gold: '#d4af37',
  goldBright: '#f0c75e',
  goldGlow: 'rgba(212,175,55,0.35)',
  amber: '#f59e0b',
  orange: '#e8730c',
  red: '#dc2626',
  green: '#22c55e',
  text: '#e8e8e8',
  textSecondary: '#a0a0b0',
  textMuted: '#5a5a6a',
};

// Background and logo images bundled with the theme
export const BG_IMAGE = '/images/bg.png';
export const HERO_IMAGE = '/images/hero.png';
export const LOGO_IMAGE = '/images/logo.png';

// Navigation items — mapped to bazino's tab system
export const navItems = [
  { id: 'home', label: { fa: 'خانه', en: 'HOME' }, svgPath: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { id: 'reservations', label: { fa: 'رزرو', en: 'RESERVE' }, svgPath: 'M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z M13 16V5a3 3 0 00-3-3H4m16 4h2M2 9h17m-5 0v8m-6-8v8' },
  { id: 'cafe', label: { fa: 'کافه', en: 'CAFE' }, svgPath: 'M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3' },
  { id: 'shop', label: { fa: 'فروشگاه', en: 'SHOP' }, svgPath: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z' },
  { id: 'tournaments', label: { fa: 'مسابقات', en: 'ARENA' }, svgPath: 'M8 21H16M12 3L12 17M5 7L12 3L19 7' },
  { id: 'loyalty', label: { fa: 'جوایز', en: 'LOYALTY' }, svgPath: 'M12 15a3 3 0 100-6 3 3 0 000 6z M12 3a9 9 0 100 18 9 9 0 000-18z M12 9v6M9 12h6' },
];

// Quick action shortcuts
export const quickActions = [
  { label: 'LOADOUT', svgPath: 'M6 2l12 0M12 2l0 4M8 6l8 0M10 6l-4 8l4 0l-2 6l8-10l-4 0l2-4z' },
  { label: 'MISSIONS', svgPath: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 8v4l3 3' },
  { label: 'INVENTORY', svgPath: 'M5 8h14M5 8a2 2 0 110-4 h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4' },
  { label: 'SKILLS', svgPath: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { label: 'SETTINGS', svgPath: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z' },
];
