// API layer — fetches from bazino backend endpoints with graceful fallback to mock data.
// Endpoints mirror bazino-gamenet-portal server.ts routes.

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

async function fetchJson(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    const data = await res.json();
    return data;
  } catch {
    return null;
  }
}

export async function fetchSystems() {
  const data = await fetchJson('/api/systems');
  return Array.isArray(data) && data.length > 0 ? data : fallbackSystems;
}

export async function fetchCafeItems() {
  const data = await fetchJson('/api/cafe');
  return Array.isArray(data) && data.length > 0 ? data : fallbackCafeItems;
}

export async function fetchAccessories() {
  const data = await fetchJson('/api/accessories');
  return Array.isArray(data) && data.length > 0 ? data : fallbackAccessories;
}

export async function fetchTournaments() {
  const data = await fetchJson('/api/tournaments');
  return Array.isArray(data) && data.length > 0 ? data : fallbackTournaments;
}

export async function fetchArticles() {
  const data = await fetchJson('/api/articles');
  return Array.isArray(data) && data.length > 0 ? data : fallbackArticles;
}

export async function fetchUser() {
  const data = await fetchJson('/api/user');
  if (data && data.username && data.username !== 'Guest') return data;
  return fallbackUser;
}

export async function fetchSettings() {
  const data = await fetchJson('/api/settings');
  return data && typeof data === 'object' ? data : fallbackSettings;
}

export async function fetchSliders() {
  const data = await fetchJson('/api/app-sliders');
  return Array.isArray(data) && data.length > 0 ? data : fallbackSliders;
}

export async function fetchAllData() {
  const [systems, cafeItems, accessories, tournaments, articles, user, settings, sliders] =
    await Promise.all([
      fetchSystems(),
      fetchCafeItems(),
      fetchAccessories(),
      fetchTournaments(),
      fetchArticles(),
      fetchUser(),
      fetchSettings(),
      fetchSliders(),
    ]);

  return { systems, cafeItems, accessories, tournaments, articles, user, settings, sliders };
}
