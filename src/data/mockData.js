// Mock/fallback data — used when the bazino backend API is not available
// (e.g. during theme preview, standalone dev, or offline install testing).
// Shapes match bazino-gamenet-portal types.

export const fallbackUser = {
  username: 'NovaX',
  email: 'novax@bazino.gg',
  phone: '0912000000',
  loyaltyPoints: 8420,
  role: 'member',
};

export const fallbackSystems = [
  { id: 'pc-01', name: 'PC Arena 01', type: 'PC', hourlyRate: 45000, isActive: true, isReserved: false },
  { id: 'pc-02', name: 'PC Arena 02', type: 'PC', hourlyRate: 45000, isActive: true, isReserved: true },
  { id: 'pc-03', name: 'PC Arena 03', type: 'PC', hourlyRate: 50000, isActive: true, isReserved: false },
  { id: 'ps5-01', name: 'VIP PS5 Booth', type: 'PS5', hourlyRate: 60000, isActive: true, isReserved: true },
  { id: 'ps5-02', name: 'PS5 Lounge', type: 'PS5', hourlyRate: 55000, isActive: true, isReserved: false },
  { id: 'xbox-01', name: 'Xbox Series X', type: 'Xbox', hourlyRate: 50000, isActive: false, isReserved: false },
];

export const fallbackCafeItems = [
  { id: 'c1', name: 'Espresso Pro', category: 'Drinks', price: 25000, imageUrl: '', inventory: 50, isAvailable: true },
  { id: 'c2', name: 'Energy Boost', category: 'Drinks', price: 35000, imageUrl: '', inventory: 30, isAvailable: true },
  { id: 'c3', name: 'Burger Deluxe', category: 'Foods', price: 120000, imageUrl: '', inventory: 15, isAvailable: true },
  { id: 'c4', name: 'Nachos Supreme', category: 'Snacks', price: 65000, imageUrl: '', inventory: 20, isAvailable: true },
];

export const fallbackAccessories = [
  { id: 'a1', name: 'Razer Huntsman V4', description: 'Pro mechanical keyboard', price: 3500000, imageUrl: '', stock: 5, category: 'Keyboard' },
  { id: 'a2', name: 'Logitech G Pro X', description: 'Superlight wireless mouse', price: 2800000, imageUrl: '', stock: 8, category: 'Mouse' },
  { id: 'a3', name: 'SteelSeries Arctis', description: '7.1 surround headset', price: 4200000, imageUrl: '', stock: 3, category: 'Headset' },
  { id: 'a4', name: 'DualSense Edge', description: 'PS5 pro controller', price: 3200000, imageUrl: '', stock: 6, category: 'Controller' },
];

export const fallbackTournaments = [
  {
    id: 't1',
    title: 'Ares Arena Championship',
    game: 'Counter-Strike 2',
    registrationFee: 100000,
    startDate: '2026-08-20',
    maxTeams: 16,
    status: 'Upcoming',
    registeredTeamsCount: 8,
    teams: [],
    bracket: { round1: [], semis: [], finals: [] },
  },
  {
    id: 't2',
    title: 'Cyber Warfare Cup',
    game: 'Valorant',
    registrationFee: 80000,
    startDate: '2026-09-05',
    maxTeams: 12,
    status: 'Upcoming',
    registeredTeamsCount: 5,
    teams: [],
    bracket: { round1: [], semis: [], finals: [] },
  },
  {
    id: 't3',
    title: 'Clan Showdown',
    game: 'Dota 2',
    registrationFee: 120000,
    startDate: '2026-09-18',
    maxTeams: 8,
    status: 'Active',
    registeredTeamsCount: 8,
    teams: [],
    bracket: { round1: [], semis: [], finals: [] },
  },
];

export const fallbackArticles = [
  { id: '1', title: 'فصل ۷: بتل پس جدید و اسکین‌های ویژه', content: 'محتوای کامل مقاله...', category: 'Update', imageUrl: '', author: 'Bazino Team', date: '2026-08-10', comments: [] },
  { id: '2', title: 'PhantomX رکورد ۱۰۰ هزار امتیاز را شکست', content: 'محتوای کامل مقاله...', category: 'Record', imageUrl: '', author: 'Bazino Team', date: '2026-08-09', comments: [] },
  { id: '3', title: 'مسابقه جدید با جایزه ۵۰ میلیون تومانی', content: 'محتوای کامل مقاله...', category: 'Event', imageUrl: '', author: 'Bazino Team', date: '2026-08-08', comments: [] },
];

export const fallbackSettings = {
  site_name: 'BAZINO',
  site_name_fa: 'بازینو',
  social_media_links: JSON.stringify([
    { id: '1', name: 'اینستاگرام کلوپ', platform: 'instagram', url: 'https://instagram.com/bazino' },
    { id: '2', name: 'کانال تلگرام', platform: 'telegram', url: 'https://t.me/bazino' },
    { id: '3', name: 'یوتیوب کلوپ', platform: 'youtube', url: 'https://youtube.com/bazino' },
  ]),
  hourly_rate_pc: '45000',
  hourly_rate_ps5: '60000',
  hourly_rate_xbox: '50000',
};

export const fallbackSliders = [
  { id: 's1', imageUrl: '/images/game-1.png', titleFa: 'مسابقات کانتر استرایک', titleEn: 'Counter-Strike Cup', target: 'reserve' },
  { id: 's2', imageUrl: '/images/game-2.png', titleFa: 'تورنمنت ولورانت', titleEn: 'Valorant Tournament', target: 'reserve' },
  { id: 's3', imageUrl: '/images/game-3.png', titleFa: 'گیمینگ VIP', titleEn: 'VIP Gaming', target: 'reserve' },
  { id: 's4', imageUrl: '/images/game-4.png', titleEn: 'Epic Battles', titleFa: 'نبردهای حماسی', target: 'reserve' },
];

// Theme-specific mock data for leaderboard and player stats
export const fallbackLeaderboard = [
  { rank: 1, name: 'PhantomX', game: 'ARES', score: 98620, rankColor: '#d4af37', isYou: false, avatar: '/images/avatar-2.png' },
  { rank: 2, name: 'CyberRogue', game: 'ARES', score: 87540, rankColor: '#c0c0c0', isYou: false, avatar: '/images/avatar-3.png' },
  { rank: 3, name: 'ShadowStrike', game: 'ARES', score: 76310, rankColor: '#cd7f32', isYou: false, avatar: '/images/avatar-4.png' },
  { rank: 4, name: 'NovaX', game: 'ARES', score: 65420, rankColor: '#d4af37', isYou: true, avatar: '/images/avatar-1.png' },
];

export const fallbackPlayerStats = {
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
