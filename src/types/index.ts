export interface Rank {
  id: string;
  name: string;
  level: number;
  xpRequired: number;
  xpNext: number | null;
  foodMarkup: number;
  accessoryMarkup: number;
  avgMarkup: number;
  earningsPerSale: number;
  color: string;
  twClass: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface SupplyBox {
  rarity: string;
  chance: number;
  color: string;
  glowColor: string;
  examples: string;
}

export interface League {
  name: string;
  criterion: string;
  reward: string;
  color: string;
}

export interface Star {
  name: string;
  criterion: string;
  icon: string;
}
