import React from 'react';
import { COLORS, navItems, LOGO_IMAGE } from '../data/theme';
import { useLanguage } from '../context/LanguageContext';
import { SvgIcon } from './ui';

export default function Header({ user, activeTab, onNavigate }) {
  const { language, t } = useLanguage();
  const username = user?.username || 'Guest';

  return (
    <header
      style={{
        height: '58px',
        background: 'rgba(8,8,12,0.98)',
        borderBottom: `1px solid ${COLORS.border}`,
        display: 'flex',
        alignItems: 'center',
        padding: '0 16px',
        gap: '0',
        position: 'relative',
        zIndex: 10,
        flexShrink: 0,
      }}
    >
      {/* Gold scan line */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: `linear-gradient(90deg, transparent, ${COLORS.borderBright}, rgba(240,199,94,0.4), transparent)` }} />

      {/* Logo - BAZINO with shield */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: '160px', marginRight: '12px' }}>
        <img
          src={LOGO_IMAGE}
          alt="BAZINO logo"
          style={{
            width: '40px', height: '40px', objectFit: 'contain',
            filter: `drop-shadow(0 0 8px ${COLORS.goldGlow})`,
          }}
        />
        <div>
          <div style={{ fontFamily: 'Orbitron,monospace', color: COLORS.goldBright, fontWeight: '900', fontSize: '15px', letterSpacing: '0.18em', lineHeight: 1, textShadow: `0 0 10px ${COLORS.goldGlow}` }}>BAZINO</div>
          <div style={{ fontFamily: language === 'fa' ? "'Vazirmatn',sans-serif" : 'Orbitron,monospace', color: '#a07d20', fontSize: language === 'fa' ? 10 : 7, letterSpacing: language === 'fa' ? '0.05em' : '0.3em', lineHeight: 1, marginTop: '3px' }}>{language === 'fa' ? 'سالن گیمینگ' : 'GAMING ARENA'}</div>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ display: 'flex', alignItems: 'center', flex: 1, justifyContent: 'center', gap: '4px' }}>
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          const label = item.label[language] || item.label.en;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate && onNavigate(item.id)}
              style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
                padding: '6px 16px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: isActive ? COLORS.goldBright : COLORS.textMuted,
                transition: 'color 0.2s',
              }}
            >
              <SvgIcon path={item.svgPath} size={18} color={isActive ? COLORS.goldBright : COLORS.textMuted} />
              <span style={{ fontFamily: language === 'fa' ? "'Vazirmatn',sans-serif" : 'Orbitron,monospace', fontSize: language === 'fa' ? 11 : 8, letterSpacing: language === 'fa' ? '0.02em' : '0.18em', lineHeight: 1 }}>{label}</span>
              {isActive && (
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '28px',
                  height: '2px',
                  background: COLORS.goldBright,
                  borderRadius: '2px',
                  boxShadow: `0 0 8px rgba(240,199,94,0.9)`,
                }} />
              )}
            </button>
          );
        })}
      </nav>

      {/* Right actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        {[
          'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
          'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
        ].map((path, i) => (
          <button key={i} style={{ background: 'none', border: 'none', cursor: 'pointer', color: COLORS.textMuted, padding: '4px', transition: 'color 0.2s' }}>
            <SvgIcon path={path} size={17} color={COLORS.textMuted} />
          </button>
        ))}
        <button style={{ position: 'relative', background: 'none', border: 'none', cursor: 'pointer', color: COLORS.textMuted, padding: '4px' }}>
          <SvgIcon path="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" size={17} color={COLORS.textMuted} />
          <div style={{ position: 'absolute', top: '2px', right: '2px', width: '7px', height: '7px', background: COLORS.goldBright, borderRadius: '50%', boxShadow: '0 0 6px rgba(240,199,94,0.9)', animation: 'blink 2s infinite' }} />
        </button>

        {/* Divider */}
        <div style={{ width: '1px', height: '28px', background: COLORS.border }} />

        {/* User profile */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
          <div style={{ position: 'relative' }}>
            <img
              src="/images/avatar-1.png"
              alt="avatar"
              style={{
                width: '34px', height: '34px', borderRadius: '4px', objectFit: 'cover',
                border: `1px solid ${COLORS.borderBright}`,
                boxShadow: `0 0 10px ${COLORS.goldGlow}`,
              }}
            />
          </div>
          <div>
            <div style={{ fontFamily: 'Orbitron,monospace', color: COLORS.text, fontSize: '12px', fontWeight: '700', lineHeight: 1 }}>{username}</div>
            <div style={{ color: COLORS.gold, fontSize: language === 'fa' ? 12 : 10, lineHeight: 1.3, marginTop: '3px', fontFamily: language === 'fa' ? "'Vazirmatn',sans-serif" : 'Rajdhani,sans-serif', letterSpacing: language === 'fa' ? '0' : '0.08em' }}>
              {user?.loyaltyPoints ? `${user.loyaltyPoints.toLocaleString()} ${language === 'fa' ? 'امتیاز' : 'PTS'}` : (language === 'fa' ? 'مهمان' : 'Guest')}
            </div>
          </div>
          <SvgIcon path="M19 9l-7 7-7-7" size={12} color={COLORS.textMuted} />
        </div>
      </div>
    </header>
  );
}
