import React, { createContext, useContext, useState, useCallback } from 'react';

const translations = {
  'brand.name': { fa: 'بازینو', en: 'BAZINO' },
  'brand.subtitle': { fa: 'سالن گیمینگ', en: 'GAMING ARENA' },

  'nav.home': { fa: 'خانه', en: 'HOME' },
  'nav.games': { fa: 'بازی‌ها', en: 'GAMES' },
  'nav.rankings': { fa: 'رتبه‌بندی', en: 'RANKINGS' },
  'nav.events': { fa: 'مسابقات', en: 'EVENTS' },
  'nav.store': { fa: 'فروشگاه', en: 'STORE' },
  'nav.clans': { fa: 'کلن‌ها', en: 'CLANS' },

  'nav.reserve': { fa: 'رزرو', en: 'RESERVE' },
  'nav.cafe': { fa: 'کافه', en: 'CAFE' },
  'nav.shop': { fa: 'فروشگاه', en: 'SHOP' },
  'nav.tournaments': { fa: 'مسابقات', en: 'ARENA' },
  'nav.loyalty': { fa: 'جوایز', en: 'LOYALTY' },
  'nav.blog': { fa: 'مجله', en: 'BLOG' },

  'status.online': { fa: 'آنلاین', en: 'ONLINE' },
  'status.server': { fa: 'سرور', en: 'SERVER' },
  'status.ping': { fa: 'پینگ', en: 'PING' },

  'stats.level': { fa: 'سطح', en: 'Level' },
  'stats.matches': { fa: 'بازی‌ها', en: 'Matches' },
  'stats.wins': { fa: 'برد', en: 'Wins' },
  'stats.winRate': { fa: 'نرخ برد', en: 'Win Rate' },
  'stats.kd': { fa: 'کیل/دث', en: 'K/D' },
  'stats.balance': { fa: 'موجودی', en: 'Balance' },
  'stats.points': { fa: 'امتیاز', en: 'BZ Points' },

  'panel.featuredGames': { fa: 'بازی‌های ویژه', en: 'FEATURED GAMES' },
  'panel.playerStats': { fa: 'آمار بازیکن', en: 'PLAYER STATS' },
  'panel.upcomingEvents': { fa: 'مسابقات پیش‌رو', en: 'UPCOMING EVENTS' },
  'panel.leaderboard': { fa: 'رتبه‌بندی', en: 'LEADERBOARD' },
  'panel.welcome': { fa: 'خوش آمدید', en: 'WELCOME' },
  'panel.viewAll': { fa: 'همه', en: 'VIEW ALL' },

  'hero.tagline': { fa: 'به سالن VIP بازینو خوش آمدید', en: 'WELCOME TO BAZINO VIP ARENA' },
  'hero.cta': { fa: 'رزرو سریع', en: 'QUICK RESERVE' },
  'hero.tournament': { fa: 'مسابقات زنده', en: 'LIVE TOURNAMENT' },
  'hero.prize': { fa: 'جایزه', en: 'PRIZE' },

  'welcome.greeting': { fa: 'آماده‌ای برای نبرد؟', en: 'READY FOR BATTLE?' },
  'welcome.desc': { fa: 'سیستم‌های RTX 5080 در انتظار توست. همین حالا رزرو کن.', en: 'RTX 5080 rigs await. Book your station now.' },

  'leaderboard.rank': { fa: 'رتبه', en: 'RANK' },
  'leaderboard.name': { fa: 'نام', en: 'PLAYER' },
  'leaderboard.score': { fa: 'امتیاز', en: 'SCORE' },
  'leaderboard.you': { fa: 'شما', en: 'YOU' },
};

const LanguageContext = createContext({
  language: 'fa',
  setLanguage: () => {},
  t: (_key, fallback) => fallback || '',
  dir: 'rtl',
});

export function LanguageProvider({ children, initialLang = 'fa' }) {
  const [language, setLanguage] = useState(initialLang);

  const t = useCallback((key, fallback) => {
    const entry = translations[key];
    if (entry) return entry[language];
    return fallback || key;
  }, [language]);

  const dir = language === 'fa' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
