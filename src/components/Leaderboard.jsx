import React from 'react';
import { leaderboard } from '../data';
import { Panel, PanelHeader, HexBadge } from './ui';

export default function Leaderboard() {
  return (
    <Panel style={{ flex: 1 }}>
      <PanelHeader title="LEADERBOARD" onViewAll />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', padding: '8px' }}>
        {leaderboard.map((entry) => (
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
            {/* Rank */}
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

            {/* Avatar */}
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

            {/* Name */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <span style={{ fontFamily: 'Orbitron,monospace', color: '#e8e8e8', fontSize: '9px', fontWeight: '600' }}>{entry.name}</span>
              {entry.isYou && (
                <span style={{ fontFamily: 'Rajdhani,sans-serif', color: '#d4af37', fontSize: '9px', marginLeft: '4px' }}>(You)</span>
              )}
            </div>

            {/* Game tag */}
            <div style={{ color: '#5a5a6a', fontFamily: 'Orbitron,monospace', fontSize: '8px', marginRight: '6px' }}>{entry.game}</div>

            {/* Score */}
            <div style={{ fontFamily: 'Orbitron,monospace', color: '#e8e8e8', fontSize: '10px', fontWeight: '600', flexShrink: 0 }}>
              {entry.score.toLocaleString()}
            </div>

            {/* Hex badge */}
            <div style={{ flexShrink: 0, marginLeft: '2px' }}>
              <HexBadge color={entry.isYou ? '#f0c75e' : '#a07d20'} size={14} />
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}
