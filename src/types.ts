export type PageId =
  | 'home'
  | 'about'
  | 'coaching'
  | 'coaching-executive'
  | 'coaching-leadership'
  | 'coaching-career'
  | 'coaching-founder'
  | 'programs'
  | 'program-detail'
  | 'results'
  | 'resources'
  | 'blog'
  | 'blog-article'
  | 'faq'
  | 'contact'
  | 'discovery-call'
  | 'apply'
  | 'thank-you'
  | 'privacy'
  | 'terms';

export interface ServiceCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  targetAudience: string;
  commonChallenges: string[];
  whatWeWorkOn: string[];
  expectedOutcomes: string[];
  ctaText: string;
  pageId: PageId;
  badge?: string;
  iconName: string;
}

export interface Program {
  id: string;
  title: string;
  tagline: string;
  duration: string;
  format: string;
  targetAudience: string;
  idealFor: string[];
  description: string;
  highlights: string[];
  curriculum: {
    phase: string;
    weeks: string;
    title: string;
    focus: string;
    deliverables: string[];
  }[];
  whatIsIncluded: string[];
  investment: {
    amount: string;
    period: string;
    note: string;
  };
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  category: 'Leadership' | 'Career' | 'Executive Presence' | 'Founder' | 'Confidence';
  quote: string;
  avatar: string;
  metrics?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  clientRole: string;
  industry: string;
  summary: string;
  before: string;
  challenge: string;
  coachingApproach: string[];
  theShift: string;
  results: string[];
  clientQuote: string;
  clientName: string;
  duration: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: 'Leadership' | 'Career' | 'Confidence' | 'Personal Growth' | 'Executive Presence' | 'Decision Making';
  publishedDate: string;
  readTime: string;
  featuredImage: string;
  content: string[];
  pullQuote?: string;
  keyTakeaways: string[];
  tableOfContents?: { title: string; id: string }[];
}

export interface ResourceItem {
  id: string;
  title: string;
  type: 'Free Guide' | 'Worksheet' | 'Audio Briefing' | 'Assessment' | 'Podcast';
  category: string;
  description: string;
  readTimeOrDuration: string;
  downloadUrl?: string;
  featured?: boolean;
}

export interface FAQItem {
  id: string;
  category: 'Coaching' | 'Sessions' | 'Programs' | 'Investment' | 'Scheduling' | 'Confidentiality' | 'Getting Started';
  question: string;
  answer: string;
}

export interface DiscoveryBookingData {
  name: string;
  email: string;
  phone: string;
  currentRole: string;
  biggestChallenge: string;
  desiredChange: string;
  selectedDate: string;
  selectedTime: string;
  timezone: string;
}

export interface CoachingApplicationData {
  fullName: string;
  email: string;
  phone: string;
  role: string;
  company: string;
  selectedProgram: string;
  primaryGoal: string;
  biggestObstacle: string;
  whyNow: string;
  successDefinition: string;
  readinessLevel: 'Exploring' | 'Interested' | 'Ready to start';
  referralSource?: string;
}
