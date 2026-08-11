import React from 'react';
import { COLORS } from '../data/theme';
import { useLanguage } from '../context/LanguageContext';
import { Panel, PanelHeader } from './ui';

const ICONS = {
  shield: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  zap: 'M13 10V3L4 14h7v7l9-11h-7z',
  swords: 'M14.5 17.5L3 6M3 3l4 4M17 3l4 4-9.5 9.5M20 14.5L9 3',
};

const EVENT_ICONS = [ICONS.shield, ICONS.zap, ICONS.swords];

export default function UpcomingEvents({ tournaments = [], onNavigate }) {
  const { t, language } = useLanguage();

  const events = (tournaments.length > 0 ? tournaments.slice(0, 3) : [
    { id: 'e1', title: 'ARENA CHAMPIONSHIP', game: 'CS2', registrationFee: 25000, startDate: '2026-08-24', status: 'Upcoming' },
    { id: 'e2', title: 'CYBER WARFARE', game: 'Valorant', registrationFee: 15000, startDate: '2026-09-05', status: 'Upcoming' },
    { id: 'e3', title: 'CLAN SHOWDOWN', game: 'Dota 2', registrationFee: 20000, startDate: '2026-09-18', status: 'Active' },
  ]).map((evt, i) => ({
    id: evt.id,
    name: evt.title || evt.name,
    game: evt.game || '',
    date: evt.startDate || evt.date,
    reward: evt.registrationFee || evt.reward || 0,
    status: evt.status || 'Upcoming',
    iconBg: `rgba(212,175,55,0.15)`,
    iconBorder: `rgba(212,175,55,0.5)`,
    iconColor: COLORS.gold,
  }));

  return (
    <Panel style={{ flexShrink: 0 }}>
      <PanelHeader title={t('panel.upcomingEvents', 'UPCOMING EVENTS')} onViewAll={() => onNavigate && onNavigate('tournaments')} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', padding: '8px' }}>
        {events.map((event, i) => (
          <div
            key={event.id}
            onClick={() => onNavigate && onNavigate('tournaments')}
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
            <div style={{
              width: '34px', height: '34px', flexShrink: 0,
              background: event.iconBg,
              border: `1px solid ${event.iconBorder}`,
              borderRadius: '4px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: `0 0 10px ${event.iconBg}`,
            }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={event.iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d={EVENT_ICONS[i % 3]} />
              </svg>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: 'Orbitron,monospace', color: COLORS.text, fontSize: '9px', fontWeight: '700', letterSpacing: '0.1em', lineHeight: 1 }}>{event.name}</div>
              <div style={{ color: COLORS.textMuted, fontSize: '9px', fontFamily: 'Rajdhani,sans-serif', marginTop: '3px', letterSpacing: '0.05em' }}>
                {event.game ? `${event.game} — ` : ''}{event.date}
                {event.status === 'Active' && (
                  <span style={{ color: COLORS.green, marginLeft: '4px', fontFamily: 'Orbitron,monospace', fontSize: '7px' }}>● LIVE</span>
                )}
              </div>
            </div>
            <div style={{ textAlign: 'right', flexShrink: 0 }}>
              <div style={{ color: COLORS.textMuted, fontSize: '7.5px', fontFamily: 'Orbitron,monospace', letterSpacing: '0.1em' }}>
                {language === 'fa' ? 'جایزه' : 'REWARD'}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '3px', justifyContent: 'flex-end', marginTop: '2px' }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill={COLORS.goldBright} stroke="none">
                  <circle cx="12" cy="12" r="10" />
                  <text x="12" y="16" textAnchor="middle" fill="#5a3e00" fontSize="11" fontWeight="700">$</text>
                </svg>
                <span style={{ fontFamily: 'Orbitron,monospace', fontSize: '10px', fontWeight: '700', color: COLORS.goldBright }}>{event.reward.toLocaleString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}
