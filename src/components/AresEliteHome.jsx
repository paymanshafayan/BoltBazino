import React from 'react';
import Header from './Header';
import StatusBar from './StatusBar';
import HeroCenter from './HeroCenter';
import FeaturedGames from './FeaturedGames';
import Leaderboard from './Leaderboard';
import PlayerStats from './PlayerStats';
import UpcomingEvents from './UpcomingEvents';
import WelcomeCard from './WelcomeCard';
import { COLORS, BG_IMAGE } from '../data/theme';
import { useLanguage } from '../context/LanguageContext';

// AresEliteHome — the main entry component for the "Ares Elite Gold" bazino theme.
// Receives standard bazino props (user, tournaments, sliders, systems, etc.)
// and renders the full dashboard layout.
export default function AresEliteHome({
  user = null,
  tournaments = [],
  sliders = [],
  systems = [],
  cafeItems = [],
  accessories = [],
  articles = [],
  settings = {},
  activeTab = 'home',
  onNavigate,
}) {
  const { language } = useLanguage();

  return (
    <div
      data-theme="ares-elite-gold"
      dir={language === 'fa' ? 'rtl' : 'ltr'}
      style={{
        height: '100vh',
        width: '100vw',
        fontFamily: "'Rajdhani', 'Vazirmatn', sans-serif",
        color: COLORS.text,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        background: COLORS.bg,
      }}
    >
      {/* Background image layer */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
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
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(8,8,12,0.5) 100%)',
        }} />
      </div>

      <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Header user={user} activeTab={activeTab} onNavigate={onNavigate} />

        {/* Main content — three column dashboard layout */}
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
            <WelcomeCard user={user} onNavigate={onNavigate} />
            <UpcomingEvents tournaments={tournaments} onNavigate={onNavigate} />
          </div>

          {/* Center column */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px', minWidth: 0, minHeight: 0 }}>
            <PlayerStats user={user} />
            <HeroCenter tournaments={tournaments} onNavigate={onNavigate} />
          </div>

          {/* Right column */}
          <div style={{ width: '290px', display: 'flex', flexDirection: 'column', gap: '8px', flexShrink: 0, minHeight: 0, overflowY: 'auto' }}>
            <FeaturedGames sliders={sliders} onNavigate={onNavigate} />
            <Leaderboard tournaments={tournaments} user={user} />
          </div>
        </div>

        <StatusBar />
      </div>
    </div>
  );
}
