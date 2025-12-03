
import { Charity, ImpactStats } from './types';

export const IMPACT_STATS: ImpactStats = {
  totalRaised: 2000000,
  totalTabbers: 1500000,
  heartsDonated: 500000000,
};

export const CHARITIES: Charity[] = [
  {
    id: 'water_org',
    name: 'Water.org',
    category: 'Health',
    raised: 450000,
    description: 'Empowering families through access to affordable financing for safe water and sanitation.',
    impactStatement: 'Over 18,000 people with access to clean water.',
    color: '#0EA5E9', // Sky blue
    iconName: 'Droplets',
  },
  {
    id: 'conservation_intl',
    name: 'Conservation International',
    category: 'Environment',
    raised: 420000,
    description: 'Protecting nature for the benefit of all.',
    impactStatement: 'Helped preserve over 8,000 acres of rainforest.',
    color: '#22C55E', // Green
    iconName: 'Trees',
  },
  {
    id: 'save_the_children',
    name: 'Save the Children',
    category: 'Human Rights',
    raised: 380000,
    description: 'Doing whatever it takes for children - every day and in times of crisis.',
    impactStatement: 'Over 150,000 essential vaccines for children.',
    color: '#EF4444', // Red
    iconName: 'HeartHandshake',
  },
  {
    id: 'action_against_hunger',
    name: 'Action Against Hunger',
    category: 'Health',
    raised: 210000,
    description: 'Global humanitarian organization that takes decisive action against the causes and effects of hunger.',
    impactStatement: 'Over 450,000 packets of emergency nutrition.',
    color: '#F97316', // Orange
    iconName: 'Utensils',
  },
  {
    id: 'eden_reforestation',
    name: 'Eden Reforestation',
    category: 'Environment',
    raised: 150000,
    description: 'Working with local communities to restore forests on a massive scale.',
    impactStatement: 'Over 100,000 trees planted.',
    color: '#15803d', // Dark Green
    iconName: 'Sprout',
  },
  {
    id: 'ocean_cleanup',
    name: 'The Ocean Cleanup',
    category: 'Environment',
    raised: 120000,
    description: 'Developing advanced technologies to rid the oceans of plastic.',
    impactStatement: 'Over 20,000 lbs of plastic removed from the ocean.',
    color: '#0891b2', // Cyan
    iconName: 'Anchor',
  },
  {
    id: 'givedirectly',
    name: 'GiveDirectly',
    category: 'Human Rights',
    raised: 80000,
    description: 'Sending money directly to people living in extreme poverty.',
    impactStatement: 'Over $80,000 in direct cash transfers.',
    color: '#8b5cf6', // Purple
    iconName: 'Banknote',
  },
];
