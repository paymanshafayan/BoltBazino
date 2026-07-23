import React from 'react';
import Header from './components/Header';
import StatusBar from './components/StatusBar';
import { BG_IMAGE } from './data';

export default function App() {
  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      fontFamily: "'Rajdhani', sans-serif",
      color: '#e8e8e8',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      background: '#0a0a0f',
    }}>
      {/* Background image layer */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
      }}>
        <img
          src={BG_IMAGE}
          alt=""
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.4) saturate(1.2) contrast(1.1)',
          }}
        />
        {/* Dark overlay for readability */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(8,8,12,0.7) 0%, rgba(8,8,12,0.55) 50%, rgba(8,8,12,0.85) 100%)',
        }} />
      </div>

      {/* Subtle gold grid background overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        backgroundImage: 'linear-gradient(rgba(212,175,55,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.04) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Header />

        {/* Main content */}
        <div style={{
          flex: 1,
          display: 'flex',
          gap: '8px',
          padding: '8px',
          overflow: 'hidden',
          position: 'relative',
          minHeight: 0,
        }}>
          {/* Left column */}
          <div style={{ width: '230px', display: 'flex', flexDirection: 'column', gap: '8px', flexShrink: 0, minHeight: 0 }}>
          </div>

          {/* Center column */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px', minWidth: 0, minHeight: 0 }}>
          </div>

          {/* Right column */}
          <div style={{ width: '290px', display: 'flex', flexDirection: 'column', gap: '8px', flexShrink: 0, minHeight: 0, overflowY: 'auto' }}>
          </div>
        </div>

        <StatusBar />
      </div>
    </div>
  );
}
