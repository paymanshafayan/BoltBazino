// Bazino-compatible type definitions for the Ares Elite Gold theme.
// Mirrors the shapes defined in bazino-gamenet-portal/src/types/gamenet.ts
// so this theme can consume the same API data.

export interface UserState {
  username: string;
  email: string;
  phone: string;
  loyaltyPoints: number;
  role?: string;
}

export interface LoyaltyTx {
  id: string;
  points: number;
  description: string;
  type: 'Earned' | 'Redeemed';
  date: string;
}

export interface GameSystem {
  id: string;
  name: string;
  type: 'PC' | 'PS5' | 'Xbox';
  hourlyRate: number;
  isActive: boolean;
  isReserved: boolean;
}

export interface Reservation {
  id: string;
  systemName: string;
  startTime: string;
  endTime: string;
  totalPrice: number;
  paidAmount: number;
  discountApplied: number;
  pointsEarned: number;
  date: string;
}

export interface CafeItem {
  id: string;
  name: string;
  category: 'Drinks' | 'Foods' | 'Snacks';
  price: number;
  imageUrl: string;
  inventory: number;
  isAvailable: boolean;
}

export interface Accessory {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  stock: number;
  category: 'Keyboard' | 'Mouse' | 'Headset' | 'Controller';
}

export interface Tournament {
  id: string;
  title: string;
  game: string;
  registrationFee: number;
  startDate: string;
  maxTeams: number;
  status: 'Upcoming' | 'Active' | 'Completed';
  registeredTeamsCount: number;
  teams: Array<{
    name: string;
    leader: string;
    members: string[];
  }>;
  bracket: {
    round1: Array<{ id: string; teamA: string; teamB: string; scoreA?: number; scoreB?: number; winner?: string }>;
    semis: Array<{ id: string; teamA: string; teamB: string; scoreA?: number; scoreB?: number; winner?: string }>;
    finals: Array<{ id: string; teamA: string; teamB: string; scoreA?: number; scoreB?: number; winner?: string }>;
  };
}

export interface Article {
  id: string;
  title: string;
  content: string;
  category: string;
  imageUrl: string;
  author: string;
  date: string;
  comments: Array<{
    id: string;
    gamerTag: string;
    content: string;
    date: string;
  }>;
}

export interface DiscountCode {
  code: string;
  type: 'Percent' | 'Fixed';
  value: number;
  minOrder: number;
  expiry: string;
  isActive: boolean;
}

// Theme registration shape — matches AdminPanelTab theme objects
export interface ThemeInfo {
  id: string;
  name: string;
  type: string;
  colors?: {
    primary: string;
    bg: string;
    card: string;
  };
}

// Localized text helper type
export type LocaleText = {
  fa: string;
  en: string;
};
