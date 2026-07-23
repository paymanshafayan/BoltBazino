import React from 'react';
import { COLORS, player, navItems, LOGO_IMAGE } from '../data';

export default function Header() {
  return (
    <header
      style={{
        height: '58px',
        background: 'rgba(8,8,12,0.98)',
        borderBottom: '1px solid rgba(212,175,55,0.25)',
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
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.6), rgba(240,199,94,0.4), transparent)' }} />

      {/* Logo - BAZINO with shield */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: '160px', marginRight: '12px' }}>
        <img
          src={LOGO_IMAGE}
          alt="BAZINO logo"
          style={{
            width: '40px', height: '40px', objectFit: 'contain',
            filter: 'drop-shadow(0 0 8px rgba(212,175,55,0.5))',
          }}
        />
        <div>
          <div style={{ fontFamily: 'Orbitron,monospace', color: '#f0c75e', fontWeight: '900', fontSize: '15px', letterSpacing: '0.18em', lineHeight: 1, textShadow: '0 0 10px rgba(212,175,55,0.5)' }}>BAZINO</div>
          <div style={{ fontFamily: 'Orbitron,monospace', color: '#a07d20', fontSize: '7px', letterSpacing: '0.3em', lineHeight: 1, marginTop: '3px' }}>GAMING ARENA</div>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ display: 'flex', alignItems: 'center', flex: 1, justifyContent: 'center', gap: '4px' }}>
        {navItems.map((item) => (
          <button key={item.label} style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            padding: '6px 16px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: item.active ? '#f0c75e' : '#5a5a6a',
            transition: 'color 0.2s',
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d={item.svgPath} />
            </svg>
            <span style={{ fontFamily: 'Orbitron,monospace', fontSize: '8px', letterSpacing: '0.18em', lineHeight: 1 }}>{item.label}</span>
            {item.active && (
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '28px',
                height: '2px',
                background: '#f0c75e',
                borderRadius: '2px',
                boxShadow: '0 0 8px rgba(240,199,94,0.9)',
              }} />
            )}
          </button>
        ))}
      </nav>

      {/* Right actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        {/* Search + Mail icons */}
        {[
          'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
          'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
        ].map((path, i) => (
          <button key={i} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#5a5a6a', padding: '4px', transition: 'color 0.2s' }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d={path} />
            </svg>
          </button>
        ))}
        {/* Bell with gold dot */}
        <button style={{ position: 'relative', background: 'none', border: 'none', cursor: 'pointer', color: '#5a5a6a', padding: '4px' }}>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <div style={{ position: 'absolute', top: '2px', right: '2px', width: '7px', height: '7px', background: '#f0c75e', borderRadius: '50%', boxShadow: '0 0 6px rgba(240,199,94,0.9)', animation: 'blink 2s infinite' }} />
        </button>

        {/* Divider */}
        <div style={{ width: '1px', height: '28px', background: 'rgba(212,175,55,0.2)' }} />

        {/* User profile */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
          <div style={{ position: 'relative' }}>
            <img
              src={player.avatar}
              alt="avatar"
              style={{
                width: '34px', height: '34px', borderRadius: '4px', objectFit: 'cover',
                border: '1px solid rgba(212,175,55,0.6)',
                boxShadow: '0 0 10px rgba(212,175,55,0.3)',
              }}
            />
          </div>
          <div>
            <div style={{ fontFamily: 'Orbitron,monospace', color: '#e8e8e8', fontSize: '12px', fontWeight: '700', lineHeight: 1 }}>{player.name}</div>
            <div style={{ color: '#d4af37', fontSize: '10px', lineHeight: 1, marginTop: '3px', fontFamily: 'Rajdhani,sans-serif', letterSpacing: '0.08em' }}>Level {player.level}</div>
          </div>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#5a5a6a" strokeWidth="2" strokeLinecap="round">
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </header>
  );
}
