import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import AresEliteHome from './components/AresEliteHome';
import { fetchAllData } from './data/api';

export default function App() {
  const [data, setData] = useState(null);
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    fetchAllData().then(setData);
  }, []);

  if (!data) {
    return (
      <div style={{
        height: '100vh', width: '100vw',
        background: '#0a0a0f',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'Orbitron, monospace',
        color: '#d4af37',
        fontSize: '14px',
        letterSpacing: '0.2em',
      }}>
        LOADING...
      </div>
    );
  }

  return (
    <LanguageProvider initialLang="fa">
      <AresEliteHome
        user={data.user}
        tournaments={data.tournaments}
        sliders={data.sliders}
        systems={data.systems}
        cafeItems={data.cafeItems}
        accessories={data.accessories}
        articles={data.articles}
        settings={data.settings}
        activeTab={activeTab}
        onNavigate={setActiveTab}
      />
    </LanguageProvider>
  );
}
