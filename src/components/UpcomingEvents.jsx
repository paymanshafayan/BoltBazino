import React from 'react';
import { events } from '../data';
import { Panel, PanelHeader } from './ui';

const ICONS = {
  shield: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  zap: 'M13 10V3L4 14h7v7l9-11h-7z',
  swords: 'M14.5 17.5L3 6M3 3l4 4M17 3l4 4-9.5 9.5M20 14.5L9 3',
};

const EVENT_ICONS = [ICONS.shield, ICONS.zap, ICONS.swords];

export default function UpcomingEvents() {
  return (
    <Panel style={{ flexShrink: 0 }}>
      <PanelHeader title="UPCOMING EVENTS" onViewAll />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', padding: '8px' }}>
        {events.map((event, i) => (
          <div
            key={event.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '8px 10px',
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(212,175,55,0.18)',
              borderRadius: '3px',
              cursor: 'pointer',
            }}
          >
            {/* Icon badge */}
            <div style={{
              width: '34px', height: '34px', flexShrink: 0,
              background: event.iconBg,
              border: `1px solid ${event.iconBorder}`,
              borderRadius: '4px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: `0 0 10px ${event.iconBg}`,
            }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={event.iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d={EVENT_ICONS[i]} />
              </svg>
            </div>

            {/* Info */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: 'Orbitron,monospace', color: '#e8e8e8', fontSize: '9px', fontWeight: '700', letterSpacing: '0.1em', lineHeight: 1 }}>{event.name}</div>
              <div style={{ color: '#5a5a6a', fontSize: '9px', fontFamily: 'Rajdhani,sans-serif', marginTop: '3px', letterSpacing: '0.05em' }}>{event.date}</div>
            </div>

            {/* Reward */}
            <div style={{ textAlign: 'right', flexShrink: 0 }}>
              <div style={{ color: '#5a5a6a', fontSize: '7.5px', fontFamily: 'Orbitron,monospace', letterSpacing: '0.1em' }}>REWARD</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '3px', justifyContent: 'flex-end', marginTop: '2px' }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="#f0c75e" stroke="none">
                  <circle cx="12" cy="12" r="10" />
                  <text x="12" y="16" textAnchor="middle" fill="#5a3e00" fontSize="11" fontWeight="700">$</text>
                </svg>
                <span style={{ fontFamily: 'Orbitron,monospace', fontSize: '10px', fontWeight: '700', color: '#f0c75e' }}>{event.reward.toLocaleString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}
