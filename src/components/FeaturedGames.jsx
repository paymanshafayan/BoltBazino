import React from 'react';
import { COLORS } from '../data/theme';
import { useLanguage } from '../context/LanguageContext';
import { Panel, PanelHeader } from './ui';

export default function FeaturedGames({ sliders = [], onNavigate }) {
  const { language, t } = useLanguage();

  const games = (sliders.length > 0 ? sliders : [
    { id: 'g1', imageUrl: '/images/game-1.png', titleEn: 'CALL OF DUTY', titleFa: 'کالاف دیوتی', tier: 'LEGENDARY', tierColor: '#d4af37' },
    { id: 'g2', imageUrl: '/images/game-2.png', titleEn: 'VALORANT', titleFa: 'ولورانت', tier: 'EPIC', tierColor: '#f59e0b' },
    { id: 'g3', imageUrl: '/images/game-3.png', titleEn: 'CYBERPUNK', titleFa: 'سایبرپانک', tier: 'LEGENDARY', tierColor: '#d4af37' },
    { id: 'g4', imageUrl: '/images/game-4.png', titleEn: 'FORTNITE', titleFa: 'فورتنایت', tier: 'RARE', tierColor: '#e8730c' },
  ]).slice(0, 4);

  const getLocText = (item, keyEn, keyFa) => item[keyFa] || item[keyEn] || item.titleEn || item.titleFa || '';

  return (
    <Panel style={{ flex: 1 }}>
      <PanelHeader title={t('panel.featuredGames', 'FEATURED GAMES')} onViewAll={() => onNavigate && onNavigate('tournaments')} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', padding: '8px', height: 'calc(100% - 37px)' }}>
        {games.map((game) => {
          const name = language === 'fa' ? (game.titleFa || game.titleEn || game.name) : (game.titleEn || game.titleFa || game.name);
          const tier = game.tier || (game.badge || 'FEATURED');
          const tierColor = game.tierColor || COLORS.gold;
          return (
            <div
              key={game.id}
              onClick={() => onNavigate && onNavigate('reservations')}
              style={{
                position: 'relative',
                flex: 1,
                borderRadius: '4px',
                overflow: 'hidden',
                border: `1px solid ${COLORS.border}`,
                cursor: 'pointer',
                minHeight: 0,
                transition: 'border-color 0.2s',
              }}
            >
              <img
                src={game.imageUrl || '/images/game-1.png'}
                alt={name}
                style={{
                  position: 'absolute', inset: 0, width: '100%', height: '100%',
                  objectFit: 'cover',
                  filter: 'brightness(0.6) saturate(1.15)',
                }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(90deg, rgba(10,10,15,0.9) 0%, rgba(10,10,15,0.4) 60%, rgba(10,10,15,0.1) 100%)',
              }} />
              <div style={{ position: 'absolute', bottom: '8px', left: '10px' }}>
                <div style={{ fontFamily: 'Orbitron,monospace', color: COLORS.text, fontSize: '10px', fontWeight: '700', lineHeight: 1 }}>{name}</div>
                <div style={{ fontFamily: 'Orbitron,monospace', color: tierColor, fontSize: '8px', fontWeight: '700', letterSpacing: '0.12em', marginTop: '3px', textShadow: `0 0 8px ${tierColor}` }}>{tier}</div>
              </div>
              <div style={{
                position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)',
                width: '26px', height: '26px', borderRadius: '50%',
                border: `1px solid ${COLORS.borderBright}`,
                background: 'rgba(10,10,15,0.7)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: `0 0 8px ${COLORS.goldGlow}`,
              }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill={COLORS.goldBright} stroke="none"><polygon points="5,3 19,12 5,21"/></svg>
              </div>
              <div style={{
                position: 'absolute', inset: 0,
                boxShadow: `inset 0 0 12px ${tierColor}18`,
                pointerEvents: 'none',
              }} />
            </div>
          );
        })}
      </div>
    </Panel>
  );
}
