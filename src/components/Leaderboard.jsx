import React from 'react';
import { COLORS } from '../data/theme';
import { useLanguage } from '../context/LanguageContext';
import { Panel, PanelHeader, HexBadge } from './ui';

export default function Leaderboard({ tournaments = [], user }) {
  const { t, language } = useLanguage();

  const entries = [
    { rank: 1, name: 'PhantomX', game: 'ARES', score: 98620, rankColor: '#d4af37', isYou: false, avatar: '/images/avatar-2.png' },
    { rank: 2, name: 'CyberRogue', game: 'ARES', score: 87540, rankColor: '#c0c0c0', isYou: false, avatar: '/images/avatar-3.png' },
    { rank: 3, name: 'ShadowStrike', game: 'ARES', score: 76310, rankColor: '#cd7f32', isYou: false, avatar: '/images/avatar-4.png' },
    { rank: 4, name: user?.username || 'NovaX', game: 'ARES', score: 65420, rankColor: '#d4af37', isYou: true, avatar: '/images/avatar-1.png' },
  ];

  return (
    <Panel style={{ flex: 1 }}>
      <PanelHeader title={t('panel.leaderboard', 'LEADERBOARD')} onViewAll />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', padding: '8px' }}>
        {entries.map((entry) => (
          <div
            key={entry.rank}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 10px',
              background: entry.isYou ? 'rgba(212,175,55,0.12)' : 'rgba(255,255,255,0.02)',
              border: `1px solid ${entry.isYou ? 'rgba(212,175,55,0.4)' : 'rgba(212,175,55,0.18)'}`,
              borderRadius: '3px',
              cursor: 'pointer',
            }}
          >
            <div style={{
              fontFamily: 'Orbitron,monospace',
              fontSize: '11px',
              fontWeight: '700',
              color: entry.rankColor,
              width: '14px',
              textAlign: 'center',
              flexShrink: 0,
              textShadow: entry.rank <= 3 ? `0 0 8px ${entry.rankColor}` : 'none',
            }}>
              {entry.rank}
            </div>
            <img
              src={entry.avatar}
              alt={entry.name}
              style={{
                width: '26px', height: '26px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: `1px solid ${entry.isYou ? 'rgba(212,175,55,0.6)' : 'rgba(212,175,55,0.3)'}`,
                flexShrink: 0,
              }}
            />
            <div style={{ flex: 1, minWidth: 0 }}>
              <span style={{ fontFamily: 'Orbitron,monospace', color: COLORS.text, fontSize: '9px', fontWeight: '600' }}>{entry.name}</span>
              {entry.isYou && (
                <span style={{ fontFamily: 'Rajdhani,sans-serif', color: COLORS.gold, fontSize: '9px', marginLeft: '4px' }}>({t('leaderboard.you', 'YOU')})</span>
              )}
            </div>
            <div style={{ color: COLORS.textMuted, fontFamily: 'Orbitron,monospace', fontSize: '8px', marginRight: '6px' }}>{entry.game}</div>
            <div style={{ fontFamily: 'Orbitron,monospace', color: COLORS.text, fontSize: '10px', fontWeight: '600', flexShrink: 0 }}>
              {entry.score.toLocaleString()}
            </div>
            <div style={{ flexShrink: 0, marginLeft: '2px' }}>
              <HexBadge color={entry.isYou ? COLORS.goldBright : '#a07d20'} size={14} />
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}
