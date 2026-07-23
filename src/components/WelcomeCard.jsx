import React from 'react';
import { player } from '../data';
import { Panel } from './ui';

export default function WelcomeCard() {
  return (
    <Panel style={{ flexShrink: 0 }}>
      <div style={{ padding: '14px 18px', position: 'relative' }}>
        {/* Decorative hexagon - top right */}
        <div style={{ position: 'absolute', top: '12px', right: '14px', opacity: 0.9, animation: 'rotateSlow 14s linear infinite' }}>
          <svg width="52" height="52" viewBox="0 0 60 60">
            <polygon points="30,4 56,18 56,42 30,56 4,42 4,18" fill="rgba(10,10,15,0.6)" stroke="rgba(212,175,55,0.6)" strokeWidth="1.5" />
            <polygon points="30,13 47,22 47,38 30,47 13,38 13,22" fill="none" stroke="rgba(212,175,55,0.3)" strokeWidth="1" />
            <polygon points="30,21 41,27 41,34 30,39 19,34 19,27" fill="none" stroke="rgba(240,199,94,0.4)" strokeWidth="0.8" />
          </svg>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle, rgba(212,175,55,0.22), transparent 70%)' }} />
        </div>

        <div style={{ fontFamily: 'Rajdhani,sans-serif', color: '#a07d20', fontSize: '11px', letterSpacing: '0.2em', lineHeight: 1, marginBottom: '4px' }}>WELCOME BACK,</div>
        <div style={{
          fontFamily: 'Orbitron,monospace',
          fontSize: '26px',
          fontWeight: '900',
          color: '#f0c75e',
          letterSpacing: '0.05em',
          lineHeight: 1,
          textShadow: '0 0 18px rgba(212,175,55,0.7), 0 0 6px rgba(240,199,94,0.9)',
          marginBottom: '8px',
        }}>{player.name.toUpperCase()}</div>
        <div style={{ color: '#5a5a6a', fontSize: '11px', fontFamily: 'Rajdhani,sans-serif', marginBottom: '14px', letterSpacing: '0.03em' }}>
          The Arena Awaits. Gear Up and Conquer.
        </div>

        {/* Balance and BZ Points - two stat boxes */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
          <div style={{
            flex: 1, padding: '8px 10px',
            background: 'rgba(212,175,55,0.08)',
            border: '1px solid rgba(212,175,55,0.25)',
            borderRadius: '3px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="#f0c75e" stroke="none">
                <circle cx="12" cy="12" r="10" />
                <text x="12" y="16" textAnchor="middle" fill="#5a3e00" fontSize="11" fontWeight="900">$</text>
              </svg>
              <span style={{ color: '#a07d20', fontSize: '8px', fontFamily: 'Orbitron,monospace', letterSpacing: '0.1em' }}>BALANCE</span>
            </div>
            <div style={{ fontFamily: 'Orbitron,monospace', fontSize: '14px', fontWeight: '700', color: '#f0c75e', marginTop: '3px' }}>
              {player.balance.toLocaleString()}
            </div>
          </div>
          <div style={{
            flex: 1, padding: '8px 10px',
            background: 'rgba(212,175,55,0.08)',
            border: '1px solid rgba(212,175,55,0.25)',
            borderRadius: '3px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <svg width="10" height="10" viewBox="0 0 20 20">
                <polygon points="10,1 19,5.5 19,14.5 10,19 1,14.5 1,5.5" fill="#f0c75e" />
              </svg>
              <span style={{ color: '#a07d20', fontSize: '8px', fontFamily: 'Orbitron,monospace', letterSpacing: '0.1em' }}>BZ POINTS</span>
            </div>
            <div style={{ fontFamily: 'Orbitron,monospace', fontSize: '14px', fontWeight: '700', color: '#f0c75e', marginTop: '3px' }}>
              {player.bzPoints.toLocaleString()}
            </div>
          </div>
        </div>

        {/* Button */}
        <button style={{
          width: '100%',
          padding: '11px 0',
          background: 'rgba(212,175,55,0.9)',
          border: 'none',
          cursor: 'pointer',
          fontFamily: 'Orbitron,monospace',
          fontSize: '10px',
          letterSpacing: '0.2em',
          color: '#0a0a0f',
          fontWeight: '900',
          transition: 'all 0.2s',
          clipPath: 'polygon(8px 0%, calc(100% - 8px) 0%, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0% calc(100% - 8px), 0% 8px)',
          boxShadow: '0 0 18px rgba(212,175,55,0.5)',
        }}>
          EXPLORE EVENTS
        </button>
      </div>
    </Panel>
  );
}
