export type PageTab = 
  | 'home' 
  | 'about' 
  | 'programs' 
  | 'tournaments' 
  | 'tools' 
  | 'play' 
  | 'gallery' 
  | 'reviews' 
  | 'leadership' 
  | 'contact';

export interface ProgramItem {
  id: string;
  title: string;
  subtitle: string;
  ageGroup: string;
  pieceIcon: string;
  description: string;
  features: string[];
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Mastery';
}

export interface TournamentItem {
  id: string;
  title: string;
  edition: string;
  date: string;
  venue: string;
  status: 'Upcoming' | 'Concluded' | 'Annual';
  fideRated: boolean;
  eventCode?: string;
  category: string;
  rounds: string;
  description: string;
  resultsUrl?: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  event: string;
  year: string;
  category: 'Tournaments' | 'Championships' | 'Felicitation' | 'Coaching';
  description: string;
  imageVisual: string;
  svgBadge?: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'General' | 'Coaching' | 'Tournaments' | 'Online';
}

export interface LeaderProfile {
  name: string;
  role: string;
  title: string;
  bio: string;
  experience: string;
  focus: string;
}
