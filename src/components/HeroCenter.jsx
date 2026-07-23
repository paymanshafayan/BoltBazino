import React, { useState, useEffect } from 'react';
import { COLORS, quickActions, HERO_IMAGE } from '../data';

function useCountdown(targetMs) {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, targetMs - now);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  return { d, h, m, s };
}

function TimeUnit({ value, label }) {
  const padded = String(value).padStart(2, '0');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
      <div style={{
        fontFamily: 'Orbitron,monospace',
        fontSize: '28px',
        fontWeight: '900',
        color: '#f0c75e',
        lineHeight: 1,
        textShadow: '0 0 12px rgba(212,175,55,0.7), 0 0 4px rgba(240,199,94,0.9)',
        padding: '6px 12px',
        background: 'rgba(10,10,15,0.85)',
        border: '1px solid rgba(212,175,55,0.4)',
        borderRadius: '3px',
        minWidth: '46px',
        textAlign: 'center',
      }}>
        {padded}
      </div>
      <span style={{ fontFamily: 'Orbitron,monospace', fontSize: '7px', color: '#a07d20', letterSpacing: '0.2em' }}>{label}</span>
    </div>
  );
}

export default function HeroCenter() {
  // Target ~5 days from now
  const [target] = useState(() => Date.now() + 5 * 86400000 + 3 * 3600000 + 42 * 60000);
  const { d, h, m, s } = useCountdown(target);

  return (
    <div style={{ flex: 1, position: 'relative', overflow: 'hidden', borderRadius: '2px' }}>
      {/* Gold gradient border */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        clipPath: 'polygon(12px 0%, calc(100% - 12px) 0%, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0% calc(100% - 12px), 0% 12px)',
        background: 'linear-gradient(135deg, rgba(240,199,94,0.95) 0%, rgba(212,175,55,0.7) 35%, rgba(180,140,30,0.6) 70%, rgba(240,199,94,0.95) 100%)',
        padding: '1.5px',
        filter: 'drop-shadow(0 0 8px rgba(212,175,55,0.4))',
      }}>
        <div style={{
          position: 'relative',
          height: '100%',
          background: '#0a0a0f',
          clipPath: 'polygon(12px 0%, calc(100% - 12px) 0%, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0% calc(100% - 12px), 0% 12px)',
          overflow: 'hidden',
        }}>
          {/* Hero character image */}
          <img
            src={HERO_IMAGE}
            alt="hero warrior"
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
              filter: 'brightness(0.75) contrast(1.15) saturate(1.1)',
            }}
          />

          {/* Dark gradient for readability */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(180deg, rgba(10,10,15,0.2) 0%, rgba(10,10,15,0.1) 30%, rgba(10,10,15,0.5) 75%, rgba(10,10,15,0.92) 100%)',
            pointerEvents: 'none',
          }} />

          {/* Gold grid overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'linear-gradient(rgba(212,175,55,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            pointerEvents: 'none',
          }} />

          {/* Scan line */}
          <div style={{
            position: 'absolute', left: 0, right: 0, height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(240,199,94,0.5), rgba(212,175,55,0.3), transparent)',
            animation: 'scanLine 6s linear infinite',
            pointerEvents: 'none',
          }} />

          {/* Corner decorations - gold */}
          {[
            { top: 6, left: 6, borderTop: true, borderLeft: true },
            { top: 6, right: 6, borderTop: true, borderRight: true },
            { bottom: 58, left: 6, borderBottom: true, borderLeft: true },
            { bottom: 58, right: 6, borderBottom: true, borderRight: true },
          ].map((corner, i) => {
            const style = { position: 'absolute', width: '18px', height: '18px', ...corner };
            return (
              <div key={i} style={style}>
                <svg width="18" height="18" viewBox="0 0 18 18">
                  <path
                    d={
                      corner.borderTop && corner.borderLeft ? 'M18 2 L2 2 L2 18' :
                      corner.borderTop && corner.borderRight ? 'M0 2 L16 2 L16 18' :
                      corner.borderBottom && corner.borderLeft ? 'M18 16 L2 16 L2 0' :
                      'M0 16 L16 16 L16 0'
                    }
                    fill="none" stroke="rgba(240,199,94,0.7)" strokeWidth="1.5"
                  />
                </svg>
              </div>
            );
          })}

          {/* Top label */}
          <div style={{
            position: 'absolute', top: '18px', left: '50%', transform: 'translateX(-50%)',
            display: 'flex', alignItems: 'center', gap: '8px',
          }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f0c75e', boxShadow: '0 0 8px rgba(240,199,94,0.9)', animation: 'blink 1.5s infinite' }} />
            <span style={{ fontFamily: 'Orbitron,monospace', fontSize: '9px', color: '#f0c75e', letterSpacing: '0.3em', fontWeight: '700', textShadow: '0 0 8px rgba(212,175,55,0.6)' }}>
              TOURNAMENT STARTS IN
            </span>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f0c75e', boxShadow: '0 0 8px rgba(240,199,94,0.9)', animation: 'blink 1.5s infinite' }} />
          </div>

          {/* Countdown timer */}
          <div style={{
            position: 'absolute', top: '48px', left: '50%', transform: 'translateX(-50%)',
            display: 'flex', gap: '10px', alignItems: 'flex-start',
          }}>
            <TimeUnit value={d} label="DAYS" />
            <span style={{ fontFamily: 'Orbitron,monospace', fontSize: '24px', color: 'rgba(212,175,55,0.5)', fontWeight: '900', marginTop: '10px' }}>:</span>
            <TimeUnit value={h} label="HOURS" />
            <span style={{ fontFamily: 'Orbitron,monospace', fontSize: '24px', color: 'rgba(212,175,55,0.5)', fontWeight: '900', marginTop: '10px' }}>:</span>
            <TimeUnit value={m} label="MINUTES" />
            <span style={{ fontFamily: 'Orbitron,monospace', fontSize: '24px', color: 'rgba(212,175,55,0.5)', fontWeight: '900', marginTop: '10px' }}>:</span>
            <TimeUnit value={s} label="SECONDS" />
          </div>

          {/* Tournament title + prize */}
          <div style={{
            position: 'absolute', bottom: '72px', left: '50%', transform: 'translateX(-50%)',
            textAlign: 'center',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
          }}>
            <div style={{ fontFamily: 'Orbitron,monospace', fontSize: '24px', fontWeight: '900', color: '#f0c75e', letterSpacing: '0.1em', textShadow: '0 0 18px rgba(212,175,55,0.8), 0 0 6px rgba(240,199,94,0.9)' }}>
              ARENA CHAMPIONSHIP
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#f0c75e" stroke="none">
                <circle cx="12" cy="12" r="10" />
                <text x="12" y="16" textAnchor="middle" fill="#5a3e00" fontSize="12" fontWeight="900" fontFamily="Orbitron,monospace">$</text>
              </svg>
              <span style={{ fontFamily: 'Orbitron,monospace', fontSize: '14px', color: '#f0c75e', fontWeight: '700', letterSpacing: '0.05em' }}>25,000 PRIZE POOL</span>
            </div>
          </div>

          {/* Join button */}
          <button style={{
            position: 'absolute', bottom: '72px', right: '20px',
            padding: '10px 24px',
            background: 'rgba(212,175,55,0.9)',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'Orbitron,monospace',
            fontSize: '10px',
            letterSpacing: '0.2em',
            color: '#0a0a0f',
            fontWeight: '900',
            clipPath: 'polygon(8px 0%, calc(100% - 8px) 0%, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0% calc(100% - 8px), 0% 8px)',
            boxShadow: '0 0 18px rgba(212,175,55,0.6)',
            transition: 'all 0.2s',
          }}>
            JOIN NOW
          </button>

          {/* Quick action bar */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            height: '58px',
            background: 'rgba(8,8,12,0.95)',
            borderTop: '1px solid rgba(212,175,55,0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '4px',
            padding: '0 8px',
          }}>
            {quickActions.map((action) => (
              <button key={action.label} style={{
                flex: 1,
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px',
                padding: '6px 4px',
                background: 'none',
                border: '1px solid rgba(212,175,55,0.2)',
                borderRadius: '3px',
                cursor: 'pointer',
                color: '#d4af37',
                transition: 'all 0.2s',
                maxWidth: '90px',
              }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d={action.svgPath} />
                </svg>
                <span style={{ fontFamily: 'Orbitron,monospace', fontSize: '7.5px', letterSpacing: '0.12em', color: '#a07d20' }}>{action.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

