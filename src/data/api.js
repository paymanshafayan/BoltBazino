// Data layer — uses mock data directly in standalone mode.
// In production (bazino-gamenet-portal), these would fetch from the backend API.

import {
  fallbackSystems,
  fallbackCafeItems,
  fallbackAccessories,
  fallbackTournaments,
  fallbackArticles,
  fallbackUser,
  fallbackSettings,
  fallbackSliders,
} from './mockData';

export async function fetchAllData() {
  return {
    systems: fallbackSystems,
    cafeItems: fallbackCafeItems,
    accessories: fallbackAccessories,
    tournaments: fallbackTournaments,
    articles: fallbackArticles,
    user: fallbackUser,
    settings: fallbackSettings,
    sliders: fallbackSliders,
  };
}
