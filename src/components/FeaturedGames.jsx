import React from 'react';
import { games } from '../data';
import { Panel, PanelHeader } from './ui';

export default function FeaturedGames() {
  return (
    <Panel style={{ flex: 1 }}>
      <PanelHeader title="FEATURED GAMES" onViewAll />
      {/* Game cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', padding: '8px', height: 'calc(100% - 37px)' }}>
        {games.map((game) => (
          <div
            key={game.id}
            style={{
              position: 'relative',
              flex: 1,
              borderRadius: '4px',
              overflow: 'hidden',
              border: '1px solid rgba(212,175,55,0.25)',
              cursor: 'pointer',
              minHeight: 0,
              transition: 'border-color 0.2s',
            }}
          >
            {/* Background image */}
            <img
              src={game.image}
              alt={game.name}
              style={{
                position: 'absolute', inset: 0, width: '100%', height: '100%',
                objectFit: 'cover',
                filter: 'brightness(0.6) saturate(1.15)',
              }}
            />
            {/* Gradient overlay - darker on left for text readability */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(90deg, rgba(10,10,15,0.9) 0%, rgba(10,10,15,0.4) 60%, rgba(10,10,15,0.1) 100%)',
            }} />

            {/* Text */}
            <div style={{ position: 'absolute', bottom: '8px', left: '10px' }}>
              <div style={{ fontFamily: 'Orbitron,monospace', color: '#e8e8e8', fontSize: '10px', fontWeight: '700', lineHeight: 1 }}>{game.name}</div>
              <div style={{ fontFamily: 'Orbitron,monospace', color: game.tierColor, fontSize: '8px', fontWeight: '700', letterSpacing: '0.12em', marginTop: '3px', textShadow: `0 0 8px ${game.tierColor}` }}>{game.tier}</div>
            </div>

            {/* Play button */}
            <div style={{
              position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)',
              width: '26px', height: '26px', borderRadius: '50%',
              border: '1px solid rgba(212,175,55,0.5)',
              background: 'rgba(10,10,15,0.7)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 8px rgba(212,175,55,0.3)',
            }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="#f0c75e" stroke="none"><polygon points="5,3 19,12 5,21"/></svg>
            </div>

            {/* Hover glow border */}
            <div style={{
              position: 'absolute', inset: 0,
              boxShadow: `inset 0 0 12px ${game.tierColor}18`,
              pointerEvents: 'none',
            }} />
          </div>
        ))}
      </div>
    </Panel>
  );
}
