import React from 'react';
import { COLORS } from '../data/theme';
import { useLanguage } from '../context/LanguageContext';
import { Panel } from './ui';

export default function PlayerStats({ user }) {
  const { t, language } = useLanguage();

  const player = {
    name: user?.username || 'NovaX',
    level: 42,
    rank: language === 'fa' ? 'عضو ویژه' : 'Elite Member',
    xp: 12850,
    xpMax: 25000,
    matches: 230,
    wins: 152,
    winRate: 66,
    kdRatio: 2.35,
  };

  const STATS = [
    { label: t('stats.matches', 'MATCHES'), value: player.matches, icon: 'M3 3h18v18H3z M9 3v18 M15 3v18 M3 9h18 M3 15h18' },
    { label: t('stats.wins', 'WINS'), value: player.wins, icon: 'M5 13l4 4L19 7' },
    { label: t('stats.winRate', 'WIN RATE'), value: `${player.winRate}%`, icon: 'M9 19V6l12-3v13M9 19c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm12-3c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z' },
    { label: t('stats.kd', 'K/D'), value: player.kdRatio, icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' },
  ];

  const xpPercent = (player.xp / player.xpMax) * 100;
  const circumference = 2 * Math.PI * 26;
  const dashOffset = circumference * (1 - xpPercent / 100);

  return (
    <Panel style={{ flexShrink: 0, height: '110px' }}>
      <div style={{ padding: '12px 14px', display: 'flex', alignItems: 'center', gap: '16px', height: '100%' }}>
        <div style={{ position: 'relative', width: '64px', height: '64px', flexShrink: 0 }}>
          <svg viewBox="0 0 64 64" width="64" height="64" style={{ transform: 'rotate(-90deg)' }}>
            <circle cx="32" cy="32" r="26" fill="none" stroke="rgba(212,175,55,0.2)" strokeWidth="3" />
            <circle
              cx="32" cy="32" r="26" fill="none" stroke={COLORS.goldBright} strokeWidth="3"
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              strokeLinecap="round"
              style={{ filter: `drop-shadow(0 0 4px ${COLORS.goldGlow})` }}
            />
          </svg>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'Orbitron,monospace', fontSize: '20px', fontWeight: '900', color: COLORS.text, lineHeight: 1 }}>{player.level}</span>
            <span style={{ fontFamily: 'Orbitron,monospace', fontSize: '7px', color: COLORS.gold, letterSpacing: '0.15em', marginTop: '2px' }}>{t('stats.level', 'LEVEL')}</span>
          </div>
        </div>

        <div style={{ flexShrink: 0 }}>
          <div style={{ fontFamily: 'Orbitron,monospace', color: COLORS.text, fontSize: '13px', fontWeight: '700', lineHeight: 1 }}>{player.name}</div>
          <div style={{ color: COLORS.gold, fontSize: '9.5px', fontFamily: 'Rajdhani,sans-serif', letterSpacing: '0.1em', marginTop: '3px' }}>{player.rank}</div>
          <div style={{ color: COLORS.textMuted, fontSize: '8.5px', fontFamily: 'Orbitron,monospace', marginTop: '4px', letterSpacing: '0.05em' }}>
            XP {player.xp.toLocaleString()} / {player.xpMax.toLocaleString()}
          </div>
        </div>

        <div style={{ width: '1px', height: '60px', background: 'rgba(212,175,55,0.2)', flexShrink: 0 }} />

        <div style={{ display: 'flex', gap: '18px', flex: 1, justifyContent: 'space-around' }}>
          {STATS.map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '3px', justifyContent: 'center' }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={COLORS.gold} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d={stat.icon} />
                </svg>
                <span style={{ color: COLORS.textMuted, fontFamily: 'Orbitron,monospace', fontSize: '7.5px', letterSpacing: '0.1em' }}>{stat.label}</span>
              </div>
              <div style={{ fontFamily: 'Orbitron,monospace', fontSize: '15px', fontWeight: '700', color: COLORS.text, marginTop: '4px' }}>{stat.value}</div>
            </div>
          ))}
        </div>
      </div>
    </Panel>
  );
}
