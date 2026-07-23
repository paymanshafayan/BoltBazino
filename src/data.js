// Clip paths for angular panels
export const CLIP = 'polygon(12px 0%, calc(100% - 12px) 0%, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0% calc(100% - 12px), 0% 12px)';
export const CLIP_SM = 'polygon(8px 0%, calc(100% - 8px) 0%, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0% calc(100% - 8px), 0% 8px)';
export const CLIP_LG = 'polygon(16px 0%, calc(100% - 16px) 0%, 100% 16px, 100% calc(100% - 16px), calc(100% - 16px) 100%, 16px 100%, 0% calc(100% - 16px), 0% 16px)';

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

export const player = {
  name: 'NovaX',
  level: 42,
  rank: 'Elite Member',
  xp: 12850,
  xpMax: 25000,
  matches: 230,
  wins: 152,
  winRate: 66,
  kdRatio: 2.35,
  balance: 14750,
  bzPoints: 8420,
  avatar: '/images/avatar-1.png',
};

export const games = [
  {
    id: 1,
    name: 'CALL OF DUTY',
    tier: 'LEGENDARY',
    tierColor: '#d4af37',
    players: '12.4K',
    image: '/images/game-1.png',
  },
  {
    id: 2,
    name: 'VALORANT',
    tier: 'EPIC',
    tierColor: '#f59e0b',
    players: '8.7K',
    image: '/images/game-2.png',
  },
  {
    id: 3,
    name: 'CYBERPUNK',
    tier: 'LEGENDARY',
    tierColor: '#d4af37',
    players: '15.2K',
    image: '/images/game-3.png',
  },
  {
    id: 4,
    name: 'FORTNITE',
    tier: 'RARE',
    tierColor: '#e8730c',
    players: '6.3K',
    image: '/images/game-4.png',
  },
];

export const events = [
  {
    id: 1,
    name: 'ARENA CHAMPIONSHIP',
    date: 'MAY 24 - MAY 30',
    reward: 25000,
    iconBg: 'rgba(212,175,55,0.15)',
    iconBorder: 'rgba(212,175,55,0.5)',
    iconColor: '#d4af37',
    dotColor: '#d4af37',
  },
  {
    id: 2,
    name: 'CYBER WARFARE',
    date: 'JUN 05 - JUN 12',
    reward: 15000,
    iconBg: 'rgba(232,115,12,0.15)',
    iconBorder: 'rgba(232,115,12,0.5)',
    iconColor: '#e8730c',
    dotColor: '#e8730c',
  },
  {
    id: 3,
    name: 'CLAN SHOWDOWN',
    date: 'JUN 18 - JUN 25',
    reward: 20000,
    iconBg: 'rgba(245,158,11,0.15)',
    iconBorder: 'rgba(245,158,11,0.5)',
    iconColor: '#f59e0b',
    dotColor: '#f59e0b',
  },
];

export const leaderboard = [
  { rank: 1, name: 'PhantomX', game: 'ARES', score: 98620, rankColor: '#d4af37', isYou: false, avatar: '/images/avatar-2.png' },
  { rank: 2, name: 'CyberRogue', game: 'ARES', score: 87540, rankColor: '#c0c0c0', isYou: false, avatar: '/images/avatar-3.png' },
  { rank: 3, name: 'ShadowStrike', game: 'ARES', score: 76310, rankColor: '#cd7f32', isYou: false, avatar: '/images/avatar-4.png' },
  { rank: 4, name: 'NovaX', game: 'ARES', score: 65420, rankColor: '#d4af37', isYou: true, avatar: '/images/avatar-1.png' },
];

export const news = [
  {
    id: 1,
    title: 'Season 7 Update: New Battle Pass & Skins',
    time: '2H AGO',
    tag: 'UPDATE',
    tagColor: '#d4af37',
  },
  {
    id: 2,
    title: 'PhantomX Breaks 100K Score Record',
    time: '5H AGO',
    tag: 'RECORD',
    tagColor: '#e8730c',
  },
  {
    id: 3,
    title: 'New Tournament: Grand Prize $50,000',
    time: '1D AGO',
    tag: 'EVENT',
    tagColor: '#f59e0b',
  },
];

export const quickActions = [
  { label: 'LOADOUT', svgPath: 'M6 2l12 0M12 2l0 4M8 6l8 0M10 6l-4 8l4 0l-2 6l8-10l-4 0l2-4z' },
  { label: 'MISSIONS', svgPath: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 8v4l3 3' },
  { label: 'INVENTORY', svgPath: 'M5 8h14M5 8a2 2 0 110-4 h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4' },
  { label: 'SKILLS', svgPath: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { label: 'SETTINGS', svgPath: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z' },
];

export const navItems = [
  { label: 'HOME', active: true, svgPath: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { label: 'GAMES', active: false, svgPath: 'M11 4H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z M9 12h.01M13 8h.01' },
  { label: 'RANKINGS', active: false, svgPath: 'M8 21H16M12 3L12 17M5 7L12 3L19 7' },
  { label: 'EVENTS', active: false, svgPath: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
  { label: 'STORE', active: false, svgPath: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z' },
  { label: 'CLANS', active: false, svgPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
];

// User-provided background image (cyberpunk/gold warrior scene)
export const BG_IMAGE = '/images/bg.png';

// Hero character image - futuristic warrior
export const HERO_IMAGE = '/images/hero.png';

// Logo image
export const LOGO_IMAGE = '/images/logo.png';
