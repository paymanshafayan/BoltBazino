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
            filter: 'brightness(0.6) saturate(1.2) contrast(1.1)',
          }}
        />
        {/* Subtle vignette for readability */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(8,8,12,0.5) 100%)',
        }} />
      </div>

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
