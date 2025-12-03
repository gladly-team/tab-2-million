export interface Charity {
  id: string;
  name: string;
  category: 'Health' | 'Environment' | 'Human Rights' | 'Education' | 'Animals';
  raised: number;
  description: string;
  impactStatement: string; // e.g., "$1 provides X"
  color: string;
  iconName: string;
}

export interface ImpactStats {
  totalRaised: number;
  totalTabbers: number;
  heartsDonated: number;
}

export interface AIStoryResponse {
  story: string;
  highlight: string;
}
