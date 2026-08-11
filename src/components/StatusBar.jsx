import React, { useState, useEffect } from 'react';
import { COLORS } from '../data/theme';
import { useLanguage } from '../context/LanguageContext';

const SOCIALS = [
  { name: 'discord', svgPath: 'M18.93 5.36a16.5 16.5 0 00-4.07-1.26.06.06 0 00-.07.03c-.17.3-.37.7-.5 1.01a15.22 15.22 0 00-4.58 0c-.14-.31-.34-.71-.51-1.01a.06.06 0 00-.07-.03c-1.42.25-2.78.68-4.07 1.26a.05.05 0 00-.02.02C2.01 9.31 1.27 13.15 1.63 16.94a.08.08 0 00.03.05 16.6 16.6 0 004.99 2.52.06.06 0 00.07-.02c.38-.52.72-1.07 1.02-1.65a.06.06 0 00-.06-.09c-.54-.2-1.06-.46-1.56-.74a.06.06 0 01-.01-.1l.31-.24a.06.06 0 01.06-.01c3.27 1.49 6.8 1.49 10.03 0a.06.06 0 01.07.01l.31.24a.06.06 0 01-.01.1c-.5.29-1.02.54-1.56.74a.06.06 0 00-.05.09c.3.58.65 1.13 1.02 1.65a.06.06 0 00.07.02 16.6 16.6 0 005-2.52.08.08 0 00.03-.05c.42-4.38-.7-8.2-2.97-11.56a.04.04 0 00-.02-.02zM8.02 14.67c-.98 0-1.79-.9-1.79-2.01s.79-2.01 1.79-2.01c1 0 1.81.91 1.79 2.01 0 1.11-.79 2.01-1.79 2.01zm6.62 0c-.98 0-1.79-.9-1.79-2.01s.79-2.01 1.79-2.01c1 0 1.81.91 1.79 2.01 0 1.11-.79 2.01-1.79 2.01z' },
  { name: 'twitch', svgPath: 'M4.265 3L2.5 6.516v12.968h4.667V22h2.599l2.598-2.516h3.738L21.5 14.064V3H4.265zM19.258 13.387l-2.598 2.516h-4.667l-2.599 2.516v-2.516H6.461V4.355h12.797v9.032zM14.595 7.645h-1.299v3.871h1.3V7.645zM10.93 7.645H9.632v3.871h1.299V7.645z' },
  { name: 'youtube', svgPath: 'M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
  { name: 'twitter', svgPath: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
];

export default function StatusBar({ onlineCount = 24789, ping = 12 }) {
  const [time, setTime] = useState(new Date());
  const { language, t } = useLanguage();

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const timeStr = time.toLocaleTimeString('en-US', { hour12: false });
  const dateStr = time.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  return (
    <div style={{
      height: '38px',
      background: 'rgba(8,8,12,0.98)',
      borderTop: `1px solid ${COLORS.border}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 18px',
      position: 'relative',
      zIndex: 10,
      flexShrink: 0,
    }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: `linear-gradient(90deg, transparent, ${COLORS.borderBright}, rgba(240,199,94,0.4), transparent)` }} />

      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{ width: '7px', height: '7px', background: COLORS.green, borderRadius: '50%', boxShadow: '0 0 8px rgba(34,197,94,0.8)', animation: 'blink 2s infinite' }} />
          <span style={{ fontFamily: 'Orbitron,monospace', fontSize: '9px', color: COLORS.textMuted, letterSpacing: '0.12em' }}>{t('status.online', 'ONLINE')}</span>
          <span style={{ fontFamily: 'Orbitron,monospace', fontSize: '10px', color: COLORS.goldBright, fontWeight: '700' }}>{onlineCount.toLocaleString()}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={COLORS.green} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01" />
          </svg>
          <span style={{ fontFamily: 'Orbitron,monospace', fontSize: '9px', color: COLORS.textMuted, letterSpacing: '0.12em' }}>{t('status.server', 'SERVER')}</span>
          <span style={{ fontFamily: 'Orbitron,monospace', fontSize: '10px', color: COLORS.green, fontWeight: '700' }}>ONLINE</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={COLORS.goldBright} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a10 10 0 100 20 10 10 0 000-20z M12 6v6l4 2" />
          </svg>
          <span style={{ fontFamily: 'Orbitron,monospace', fontSize: '9px', color: COLORS.textMuted, letterSpacing: '0.12em' }}>{t('status.ping', 'PING')}</span>
          <span style={{ fontFamily: 'Orbitron,monospace', fontSize: '10px', color: COLORS.goldBright, fontWeight: '700' }}>{ping}ms</span>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {SOCIALS.map((social) => (
            <a key={social.name} href="#" style={{ color: COLORS.textMuted, transition: 'color 0.2s', display: 'flex' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d={social.svgPath} />
              </svg>
            </a>
          ))}
        </div>
        <div style={{ width: '1px', height: '20px', background: COLORS.border }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontFamily: 'Orbitron,monospace', fontSize: '9px', color: '#a07d20', letterSpacing: '0.1em' }}>{dateStr.toUpperCase()}</span>
          <span style={{ fontFamily: 'Orbitron,monospace', fontSize: '12px', color: COLORS.goldBright, fontWeight: '700', textShadow: '0 0 8px rgba(212,175,55,0.5)' }}>{timeStr}</span>
        </div>
      </div>
    </div>
  );
}
