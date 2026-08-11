import React from 'react';
import { CLIP, COLORS } from '../data/theme';

const GOLD_GRADIENT = 'linear-gradient(135deg, rgba(240,199,94,0.95) 0%, rgba(212,175,55,0.8) 35%, rgba(180,140,30,0.7) 70%, rgba(240,199,94,0.95) 100%)';

export function Panel({ children, className = '', style = {}, glow = COLORS.goldGlow }) {
  return (
    <div style={{ filter: 'drop-shadow(0 0 6px rgba(212,175,55,0.35)) drop-shadow(0 0 3px rgba(212,175,55,0.2))', height: '100%', ...style }}>
      <div
        style={{
          clipPath: CLIP,
          background: GOLD_GRADIENT,
          padding: '1.5px',
          height: '100%',
        }}
      >
        <div
          className={`relative overflow-hidden ${className}`}
          style={{
            clipPath: CLIP,
            background: `linear-gradient(135deg, ${COLORS.panel} 0%, #0d0d14 100%)`,
            height: '100%',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export function SvgIcon({ path, size = 20, color = 'currentColor', fill = 'none', strokeWidth = 1.5 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d={path} />
    </svg>
  );
}

export function HexBadge({ color = '#d4af37', size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20">
      <polygon
        points="10,1 19,5.5 19,14.5 10,19 1,14.5 1,5.5"
        fill={`${color}22`}
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function PanelHeader({ title, onViewAll, viewAllText = 'VIEW ALL' }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '10px 14px 8px',
      borderBottom: '1px solid rgba(212,175,55,0.15)',
    }}>
      <span style={{ fontFamily: 'Orbitron,monospace', color: '#e8e8e8', fontSize: '10px', fontWeight: '700', letterSpacing: '0.18em' }}>{title}</span>
      {onViewAll && (
        <button onClick={onViewAll} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#d4af37', fontFamily: 'Orbitron,monospace', fontSize: '8px', letterSpacing: '0.12em', display: 'flex', alignItems: 'center', gap: '3px' }}>
          {viewAllText}
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      )}
    </div>
  );
}
