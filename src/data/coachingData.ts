import {
  ServiceCard,
  Program,
  Testimonial,
  CaseStudy,
  BlogPost,
  ResourceItem,
  FAQItem
} from '../types';

export const COACH_PROFILE = {
  name: 'Alex Morgan',
  title: 'Executive & Leadership Coach',
  tagline: 'Helping ambitious leaders become more confident, clear, and effective—without sacrificing who they are.',
  shortBio: "I'm an executive and leadership coach who helps ambitious people navigate the moments when success stops feeling simple.",
  fullBio: `Over the past 14 years, I have worked with hundreds of executives, founders, and emerging leaders at crucial inflection points in their careers. Before coaching full-time, I spent over a decade leading high-growth operational and product organizations in high-stakes environments. I know firsthand the weight of carrying big decisions, managing multifaceted stakeholder demands, and maintaining emotional composure when the stakes are high.

My coaching methodology blends rigorous behavioral science, strategic leadership frameworks, and deep psychological inquiry. I do not deliver cookie-cutter formulas or generic motivational slogans. Instead, we create a confidential, intellectually rigorous space where you can step back, see your blind spots clearly, and calibrate an authentic leadership style that lasts.`,
  experienceYears: 14,
  leadersCoachedCount: '450+',
  satisfactionRate: '98%',
  contactEmail: 'hello@alexmorgancoaching.com',
  location: 'New York, NY & Global Remote',
  heroImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=900', // Editorial executive portrait
  portraitSecondary: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800',
  workingWithClientImage: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1000',
  credentials: [
    {
      title: 'Master Certified Coach (MCC)',
      issuer: 'International Coaching Federation (ICF)',
      year: '2016',
      description: 'The highest global credential representing over 2,500+ verified coaching hours and rigorous clinical review.'
    },
    {
      title: 'Executive Leadership Program',
      issuer: 'Harvard Business School',
      year: '2014',
      description: 'Advanced executive education in strategic decision-making, organizational dynamics, and governance.'
    },
    {
      title: 'M.S. in Organizational Psychology',
      issuer: 'Columbia University',
      year: '2011',
      description: 'Specialization in executive cognitive performance, behavioral modification, and team resilience.'
    },
    {
      title: 'Certified Hogan Assessment Practitioner',
      issuer: 'Hogan Assessment Systems',
      year: '2015',
      description: 'Deep diagnostic capability in leadership derailers, core values, and reputation management.'
    }
  ],
  careerTimeline: [
    {
      period: '2016 – Present',
      role: 'Founder & Principal Executive Coach',
      organization: 'Alex Morgan Coaching',
      description: 'Advising Fortune 500 VPs, high-growth startup founders, and high-potential directors across North America and Europe.'
    },
    {
      period: '2012 – 2016',
      role: 'VP of People & Organizational Strategy',
      organization: 'Vanguard Growth Partners',
      description: 'Scaled leadership infrastructure across 12 portfolio companies, building executive onboarding and succession systems.'
    },
    {
      period: '2008 – 2012',
      role: 'Senior Director of Operations & Strategy',
      organization: 'Apex Global Enterprises',
      description: 'Led cross-functional teams of 120+ people across 3 global regions through major digital and cultural transformations.'
    }
  ],
  personalValues: [
    {
      title: 'Clarity Over Noise',
      description: 'When everything is a priority, nothing is. We ruthlessly strip away distractions to focus on the levers that genuinely move the needle.'
    },
    {
      title: 'Courageous Candor',
      description: 'Real transformation requires honest feedback delivered with deep empathy and uncompromising respect for your potential.'
    },
    {
      title: 'Sustainable Impact',
      description: 'High performance should not come at the expense of your health, your relationships, or your integrity.'
    },
    {
      title: 'Radical Self-Trust',
      description: 'You already possess the raw intelligence. Coaching helps you unlock the confidence to back yourself completely.'
    }
  ],
  beyondCoaching: {
    story: "When I'm not in coaching sessions, you'll likely find me on mountain trails training for half-marathons, reading mid-century philosophy and organizational psychology, or coaching youth debate. I believe a rich, grounded life outside of work is the ultimate foundation for sustainable leadership.",
    interests: ['Trail Running & Endurance', 'Modern & Classical Architecture', 'Philosophy of Mind', 'Specialty Coffee Roasting', 'Youth Mentorship']
  }
};

export const TRANSFORMATIONS = [
  {
    from: 'Overthinking every decision',
    to: 'Calm, decisive action backed by self-trust',
    description: 'Stop ruminating in cycles of second-guessing. Build a rapid decision framework that aligns with your core strategic goals.'
  },
  {
    from: 'Reactive, firefighting leadership',
    to: 'Intentional, strategic presence',
    description: 'Step out of the daily operational weeds. Shift your time toward high-leverage strategic foresight and proactive team alignment.'
  },
  {
    from: 'Impostor feelings & self-doubt',
    to: 'Grounded executive presence',
    description: 'Own your seat at the executive table without having to wear a mask or pretend to be someone you are not.'
  },
  {
    from: 'Feeling stuck at a career plateau',
    to: 'A crystal-clear, energized trajectory',
    description: 'Chart your next promotion, transition, or venture with a deliberate roadmap that honors your long-term aspirations.'
  }
];

export const COACHING_PILLARS = [
  {
    number: '01',
    name: 'Clarity',
    headline: 'Understand what you really want.',
    description: 'We cut through the noise of external expectations and corporate politics to pinpoint your true priorities, core values, and non-negotiables.'
  },
  {
    number: '02',
    name: 'Perspective',
    headline: 'See yourself and your situation differently.',
    description: 'We shine a light on blind spots, challenge outdated mental models, and help you view complex stakeholder dynamics with objectivity.'
  },
  {
    number: '03',
    name: 'Action',
    headline: 'Turn insight into meaningful progress.',
    description: 'Insights without execution are merely theories. Every session concludes with concrete, calibrated actions and unwavering accountability.'
  }
];

export const FOUR_STEP_PROCESS = [
  {
    step: '01',
    name: 'Discover',
    tagline: 'Mapping Your Baseline',
    description: 'We conduct a deep dive into your current reality, leadership patterns, key relationships, and aspirations. We understand exactly where you stand today.'
  },
  {
    step: '02',
    name: 'Clarify',
    tagline: 'Identifying Core Levers',
    description: 'We uncover the underlying bottlenecks, cognitive traps, and organizational friction that are keeping you stuck or operating below your ceiling.'
  },
  {
    step: '03',
    name: 'Transform',
    tagline: 'Recalibrating Mindset & Practice',
    description: 'We experiment with new communication styles, strategic frameworks, and boundary-setting techniques in real-world high-stakes meetings.'
  },
  {
    step: '04',
    name: 'Act',
    tagline: 'Sustained Executive Impact',
    description: 'You graduate with permanent behavioral shifts, enhanced executive gravitas, and an enduring toolkit for navigating future complexity.'
  }
];

export const SERVICES_DATA: ServiceCard[] = [
  {
    id: 'executive',
    title: '1:1 Executive Coaching',
    subtitle: 'For senior leaders navigating growth, complexity, and high-stakes change.',
    description: 'A tailored, confidential partnership designed to elevate your strategic thinking, refine your executive presence, and expand your influence across the C-suite and board.',
    targetAudience: 'C-Suite Executives, VPs, Managing Directors, and Business Unit Leaders.',
    commonChallenges: [
      'Managing high-stakes board and stakeholder relations',
      'Navigating massive organizational change or restructuring',
      'Feeling isolated at the top with no sounding board for sensitive decisions',
      'Struggling to balance immediate quarterly demands with long-term strategy'
    ],
    whatWeWorkOn: [
      'Strategic vision calibration & cross-functional alignment',
      'Executive communication & presence under intense scrutiny',
      'Stakeholder diplomacy and board-level persuasion',
      'Energy management and cognitive recovery strategies'
    ],
    expectedOutcomes: [
      'Decisive clarity in complex, ambiguous scenarios',
      'Increased organizational trust and team engagement',
      'Sustainable executive stamina without burnout'
    ],
    ctaText: 'Explore Executive Coaching',
    pageId: 'coaching-executive',
    badge: 'Flagship Engagement',
    iconName: 'Shield'
  },
  {
    id: 'leadership',
    title: 'Leadership Coaching',
    subtitle: 'Develop the confidence, communication, and strategic thinking to lead with impact.',
    description: 'Step into bigger leadership shoes with confidence. Master the art of delegating with trust, having difficult conversations, and inspiring cross-functional teams.',
    targetAudience: 'Directors, Senior Managers, and High-Potential Leaders transitioning to larger scopes.',
    commonChallenges: [
      'Transitioning from an individual expert/doer to an orchestrator',
      'Hesitation to delegate critical tasks due to perfectionism',
      'Conflict avoidance and delayed difficult conversations',
      'Struggling to motivate and retain high performers'
    ],
    whatWeWorkOn: [
      'Shifting from tactical problem-solving to strategic leadership',
      'Delivering constructive feedback that inspires accountability',
      'Mastering difficult conversations with emotional composure',
      'Building high-trust psychological safety in teams'
    ],
    expectedOutcomes: [
      'Empowered teams that deliver results independently',
      'Confident, respected leadership voice across the organization',
      'Regained calendar hours by delegating effectively'
    ],
    ctaText: 'Explore Leadership Coaching',
    pageId: 'coaching-leadership',
    badge: 'High Impact',
    iconName: 'Compass'
  },
  {
    id: 'career',
    title: 'Career Coaching',
    subtitle: 'Gain crystal-clear direction around your next move and build the strategy to get there.',
    description: 'Whether you are positioning yourself for a promotion, considering a lateral leap, or navigating an industry pivot, we build a deliberate strategy to achieve your career vision.',
    targetAudience: 'Mid-to-Senior Professionals at critical inflection points and career crossroads.',
    commonChallenges: [
      'Feeling uninspired or undervalued in current role',
      'Unclear on how to articulate unique value and executive brand',
      'Unsure whether to stay, negotiate, or pursue external opportunities',
      'Lack of an intentional networking and sponsorship strategy'
    ],
    whatWeWorkOn: [
      'Defining your non-negotiables, strengths, and market positioning',
      'Crafting a compelling narrative for interviews and board pitches',
      'Strategic internal positioning for executive promotions',
      'Compensation negotiation frameworks and offer evaluation'
    ],
    expectedOutcomes: [
      'Total clarity on your next 3–5 year career trajectory',
      'High-confidence positioning in executive searches and interviews',
      'Substantial compensation and title advancements'
    ],
    ctaText: 'Explore Career Coaching',
    pageId: 'coaching-career',
    badge: 'Accelerated',
    iconName: 'TrendingUp'
  },
  {
    id: 'founder',
    title: 'Founder Coaching',
    subtitle: 'Make better decisions, scale your leadership, and build a business without losing yourself.',
    description: 'Leading a venture from early product-market fit to scale requires an entirely different version of you as a leader. We help you scale your mindset as fast as your revenue.',
    targetAudience: 'Seed, Series A–C Founders, and Venture-Backed Entrepreneurs.',
    commonChallenges: [
      'Bottlenecking all major decisions and hiring processes',
      'Managing co-founder friction and board misalignment',
      'Severe cognitive overload, isolation, and sleep deficit',
      'Evolving from a passionate builder into a CEO of leaders'
    ],
    whatWeWorkOn: [
      'Founder-to-CEO mindset transformation',
      'Executive team hiring, delegation, and performance management',
      'Board communication, fundraising composure, and investor alignment',
      'Sustainable founder operating rhythm to protect mental clarity'
    ],
    expectedOutcomes: [
      'An autonomous executive team that drives execution',
      'Clarity on core company metrics and strategic bets',
      'Restored personal well-being and enduring founder stamina'
    ],
    ctaText: 'Explore Founder Coaching',
    pageId: 'coaching-founder',
    badge: 'Founder Focus',
    iconName: 'Zap'
  }
];

export const PROGRAMS_DATA: Program[] = [
  {
    id: 'next-level-leadership',
    title: '12-Week Leadership Accelerator',
    tagline: 'A rigorous, structured 12-week intensive designed for leaders stepping into significantly higher responsibility.',
    duration: '12 Weeks (Bi-weekly 1:1 sessions + asynchronous advisory)',
    format: 'Virtual (Zoom) with private Slack channel access & custom diagnostics',
    targetAudience: 'Newly promoted Directors, VPs, and high-impact leaders taking on expanded scope.',
    idealFor: [
      'Leaders who recently inherited a larger or dysfunctional team',
      'High performers stepping into senior leadership for the first time',
      'Executives tasked with spearheading high-visibility organizational transformations'
    ],
    description: 'The Next Level Leadership Program combines deep 1:1 coaching with actionable leadership frameworks. Over 12 weeks, you will audit your leadership style, eliminate micro-management tendencies, master high-stakes communications, and build a high-performing team culture.',
    highlights: [
      'Comprehensive 360 Diagnostic & Hogan Leadership Assessment',
      '6 Deep-Dive 60-Minute 1:1 Coaching Sessions',
      'Weekly Tactical Accountability check-ins',
      'Direct WhatsApp/Slack Access for real-time meeting preparation',
      'Full Executive Toolkit & Framework Library'
    ],
    curriculum: [
      {
        phase: 'Phase 1',
        weeks: 'Weeks 1–3',
        title: 'Diagnostic & Leadership Archetype',
        focus: 'Uncovering blind spots, assessing stakeholder perception, and establishing your authentic leadership North Star.',
        deliverables: ['Hogan Leadership Derailer Report', 'Personal Leadership Charter', '90-Day Priority Matrix']
      },
      {
        phase: 'Phase 2',
        weeks: 'Weeks 4–6',
        title: 'Strategic Leverage & Delegation',
        focus: 'Auditing your calendar, stripping out operational noise, and building high-trust delegation protocols for your team.',
        deliverables: ['Calendar Realignment Audit', 'Delegation Matrix', 'Team Empowerment Agreement']
      },
      {
        phase: 'Phase 3',
        weeks: 'Weeks 7–9',
        title: 'High-Stakes Influence & Gravitas',
        focus: 'Refining executive presence, mastering difficult conversations, and influencing peers and superiors effortlessly.',
        deliverables: ['Executive Communication Playbook', 'Difficult Conversation Scripting Framework']
      },
      {
        phase: 'Phase 4',
        weeks: 'Weeks 10–12',
        title: 'Culture, Scale & Enduring Impact',
        focus: 'Building team psychological safety, sustaining energy rhythms, and locking in permanent behavioral changes.',
        deliverables: ['High-Performance Team Cadence', 'Long-term Leadership Maintenance Roadmap']
      }
    ],
    whatIsIncluded: [
      '6 x 60-minute bi-weekly private 1:1 coaching sessions via HD Zoom',
      'Full Hogan Leadership Diagnostic ($1,200 standalone value)',
      'Unlimited asynchronous voice/text support between sessions for urgent advice',
      'Access to the proprietary Executive Template Library (Playbooks, scripts, scorecards)',
      'Mid-point and post-program stakeholder perception review'
    ],
    investment: {
      amount: '$4,800',
      period: 'or 3 monthly installments of $1,700',
      note: 'Often sponsored by employer learning & development budgets. L&D reimbursement invoice provided.'
    },
    featured: true
  },
  {
    id: 'executive-retained',
    title: '1:1 Executive Advisory & Coaching',
    tagline: 'An ongoing, high-touch strategic partnership for C-level executives, enterprise VPs, and founders.',
    duration: '6 Months or 12 Months Retained Partnership',
    format: 'Private 1:1 Bi-Weekly Coaching + Unlimited On-Demand Sounding Board',
    targetAudience: 'CEOs, CPOs, CTOs, CFOs, Managing Directors, and Senior VPs.',
    idealFor: [
      'Leaders navigating enterprise-scale growth, IPOs, or mergers',
      'Executives seeking an objective, discreet confidant at the highest level',
      'Leaders managing complex multi-stakeholder boards and activist investors'
    ],
    description: 'This is the most comprehensive partnership available. Serving as your strategic thinking partner, behavioral mirror, and trusted confidant, Alex helps you maintain total mental clarity, make sound high-stakes decisions, and lead with poise through intense pressure.',
    highlights: [
      'Bi-weekly 60-minute strategic coaching sessions',
      'Priority emergency call access before crucial board meetings or negotiations',
      'Full 360 stakeholder qualitative interviews and synthesis',
      'Onboarding & organizational strategy advisory'
    ],
    curriculum: [
      {
        phase: 'Quarter 1',
        weeks: 'Months 1–3',
        title: 'Executive Alignment & Vision',
        focus: 'Deep stakeholder mapping, clarifying enterprise strategic objectives, and optimizing executive presence.',
        deliverables: ['Stakeholder 360 Synthesis Report', 'Executive Strategic Dashboard']
      },
      {
        phase: 'Quarter 2',
        weeks: 'Months 4–6',
        title: 'Execution, Governance & Scale',
        focus: 'Optimizing executive team performance, board dynamics, and long-term organizational health.',
        deliverables: ['Executive Succession Plan', 'Quarterly Leadership Review System']
      }
    ],
    whatIsIncluded: [
      '12 x 60-minute 1:1 sessions per 6-month cycle',
      'Confidential 360 Stakeholder Interview process with 6–8 colleagues',
      'Priority scheduling and guaranteed same-day advisory response',
      'Direct collaboration with your Chief of Staff or Executive Assistant for scheduling ease'
    ],
    investment: {
      amount: '$12,000',
      period: '6-Month Retainer (or $2,200/mo)',
      note: 'Corporate billing and custom procurement agreements supported.'
    }
  },
  {
    id: 'career-intensive',
    title: 'Career Clarity Intensive',
    tagline: 'A focused, high-speed 4-week sprint to resolve career ambiguity and chart your next major leap.',
    duration: '4 Weeks (3 Intensive sessions + complete positioning overhaul)',
    format: 'Virtual 1:1 with tailored assessments & resume/narrative review',
    targetAudience: 'Senior professionals contemplating a pivotal career move, transition, or executive promotion.',
    idealFor: [
      'Leaders feeling stuck in golden handcuffs and seeking meaningful alignment',
      'Executives preparing for competitive search processes or board roles',
      'Professionals navigating involuntary transitions or industry shifts'
    ],
    description: 'Stop spending months wondering what is next. In this focused 4-week sprint, we diagnose your unique market differentiator, articulate your leadership story, and construct an active execution strategy to land the role you truly want.',
    highlights: [
      '3 x 75-Minute Deep-Dive Strategy Sessions',
      'Executive Value Proposition & Positioning Narrative Review',
      'Target Company & Sponsorship Networking Strategy',
      'Interview & Offer Negotiation Framework'
    ],
    curriculum: [
      {
        phase: 'Week 1',
        weeks: 'Week 1',
        title: 'Career Audit & Strengths Synthesis',
        focus: 'Unpacking past wins, analyzing market demand, and defining your career non-negotiables.',
        deliverables: ['Career Non-Negotiables Scorecard', 'Strengths Matrix']
      },
      {
        phase: 'Week 2–3',
        weeks: 'Weeks 2–3',
        title: 'Positioning & Executive Narrative',
        focus: 'Crafting your leadership story for high-stakes interviews, recruiters, and internal sponsors.',
        deliverables: ['Executive Bio & Narrative Template', 'Target Market List']
      },
      {
        phase: 'Week 4',
        weeks: 'Week 4',
        title: 'Go-to-Market & Negotiation Strategy',
        focus: 'Activating warm networks, interview readiness drills, and compensation negotiation scripts.',
        deliverables: ['Executive Outreach System', 'Compensation Negotiation Playbook']
      }
    ],
    whatIsIncluded: [
      '3 x 75-minute high-focus strategy sessions',
      'Comprehensive review of your executive resume, LinkedIn, and bio narrative',
      'Customized outreach scripts and networking templates',
      'Recorded mock interview and presence feedback'
    ],
    investment: {
      amount: '$2,400',
      period: 'One-time investment',
      note: 'Immediate scheduling upon acceptance.'
    }
  },
  {
    id: 'founder-strategy',
    title: 'Founder Strategy & Scale Coaching',
    tagline: 'A bi-monthly strategic coaching program for founders building high-growth companies.',
    duration: '4–6 Months Flexible Program',
    format: 'Virtual 1:1 + Co-founder Mediation Sessions when needed',
    targetAudience: 'Early-stage to Series B Founders balancing growth, team management, and personal sanity.',
    idealFor: [
      'Founders shifting from building product to managing an executive staff',
      'Co-founders experiencing strategic or interpersonal tension',
      'Entrepreneurs navigating fundraising rounds or board restructuring'
    ],
    description: 'Building a great company is as much a psychological challenge as a strategic one. We help you stay calm under immense pressure, build a leadership team you trust, and lead with clarity while keeping your identity grounded.',
    highlights: [
      'Bi-weekly 60-Minute Founder Coaching Sessions',
      'Quarterly Co-Founder Alignment Workshops',
      'Board Meeting Preparation & De-escalation Strategies',
      'Executive Hiring & Interview Calibration'
    ],
    curriculum: [
      {
        phase: 'Phase 1',
        weeks: 'Month 1',
        title: 'Founder Bottleneck Diagnosis',
        focus: 'Identifying which operational bottlenecks reside on your desk and freeing up mental bandwidth.',
        deliverables: ['Founder Delegation Protocol', 'Executive Priority Scorecard']
      },
      {
        phase: 'Phase 2',
        weeks: 'Months 2–4',
        title: 'Leadership Scaling & Governance',
        focus: 'Hiring key executives, establishing company cadences, and managing investor dynamics.',
        deliverables: ['Executive Hiring Rubric', 'Board Communication Template']
      }
    ],
    whatIsIncluded: [
      '8 x 60-minute 1:1 coaching sessions over 4 months',
      '1 x 90-minute Co-Founder Alignment Session (optional)',
      'Emergency messaging access between sessions for crisis management',
      'Access to Founder Health & Stamina frameworks'
    ],
    investment: {
      amount: '$6,000',
      period: '4-Month Engagement (or 4 x $1,600/mo)',
      note: 'Qualifies as an eligible corporate operational expense.'
    }
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    role: 'VP of Operations',
    company: 'Enterprise FinTech Platform',
    category: 'Leadership',
    quote: "I came into coaching feeling completely stuck and overwhelmed by a massive team reorg. Within just a few sessions with Alex, I had total clarity around the decision I had been avoiding for months. Alex has an uncanny ability to help you strip away the emotional noise and lead with grounded authority.",
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400',
    metrics: 'Promoted to EVP & reduced personal working hours by 12 hrs/wk'
  },
  {
    id: 't2',
    name: 'David Chen',
    role: 'Co-Founder & CEO',
    company: 'Series B AI Infrastructure',
    category: 'Founder',
    quote: "As a technical founder, stepping into the CEO role during our Series B was terrifying. I was micromanaging because I was terrified of failing. Alex helped me transition from a builder into a true executive. Our board noticed the shift in my communication almost immediately.",
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    metrics: 'Successfully scaled team from 25 to 80 without founder burnout'
  },
  {
    id: 't3',
    name: 'Elena Rostova',
    role: 'Senior Director of Product',
    company: 'Global SaaS Enterprise',
    category: 'Executive Presence',
    quote: "Alex doesn't just listen—Alex asks the precise question that turns your assumptions upside down in the best possible way. I went from feeling like an impostor in C-suite meetings to commanding the room with effortless poise. It was by far the best investment in my career.",
    avatar: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80&w=400',
    metrics: 'Secured VP promotion and 35% compensation increase'
  },
  {
    id: 't4',
    name: 'Marcus Vance',
    role: 'Managing Director',
    company: 'Private Equity Advisory',
    category: 'Decision Making' as any,
    quote: "Coaching with Alex gave me the space to think that my busy schedule never allowed. The frameworks we built for strategic decision-making saved me dozens of hours of ruminating and helped me guide my team through a turbulent market transition with confidence.",
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    metrics: 'Completed 3 major fund initiatives with zero senior turnover'
  },
  {
    id: 't5',
    name: 'Rachel Adams',
    role: 'Chief Marketing Officer',
    company: 'Consumer Health Brands',
    category: 'Confidence',
    quote: "I was on the brink of severe burnout when I reached out to Alex. Through our 12-week program, I rebuilt my relationship with boundaries, learned how to hold my team accountable without micromanaging, and rediscovered my genuine passion for leading.",
    avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=400',
    metrics: 'Eliminated weekend working cycles while exceeding marketing KPI targets'
  },
  {
    id: 't6',
    name: 'James Thornton',
    role: 'Partner',
    company: 'Global Strategy Consultancy',
    category: 'Career',
    quote: "When you reach a senior level, finding completely unbiased, high-caliber feedback is nearly impossible. Alex became that essential partner for me. If you want to elevate your strategic depth and become a more inspiring leader, work with Alex.",
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
    metrics: 'Elected to Global Management Committee'
  }
];

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    id: 'cs-overwhelmed-leader',
    title: 'From Overwhelmed Leader to Confident Decision-Maker',
    clientRole: 'VP of Global Operations',
    industry: 'Enterprise Technology',
    summary: 'How a high-performing VP overcame crippling decision paralysis and team micromanagement during a critical company restructuring.',
    before: 'Working 65+ hours per week, attending 35+ meetings, constantly second-guessing key hiring and operational decisions, and feeling disconnected from family and long-term strategy.',
    challenge: 'A massive company restructuring doubled the size of Sarah’s team overnight. Fear of delivering poor results led to extreme micromanagement, severe cognitive fatigue, and growing friction with executive peers.',
    coachingApproach: [
      'Diagnostic audit of weekly time expenditures and decision-making choke points',
      'Designed a tiered delegation protocol shifting operational sign-offs to direct reports',
      'Mastered the "Decide & Calibrate" rapid decision framework to stop over-analysis',
      'Weekly roleplaying sessions for high-stakes executive committee alignment meetings'
    ],
    theShift: 'Through coaching, Sarah recognized that her perfectionism was protecting her ego rather than serving her team. She learned to embrace 80% information thresholds for tactical choices, freeing up 15+ hours weekly for strategic market positioning.',
    results: [
      'Reduced direct operational meetings by 40% while team delivery speed improved by 28%',
      'Promoted to Senior Vice President within 9 months of coaching completion',
      'Reclaimed evenings and weekends with zero compromise on business results',
      'Team engagement scores rose from 68% to 92% across a 120-person division'
    ],
    clientQuote: "Coaching with Alex changed how I view my entire purpose as a leader. I realized that my value isn't in knowing every single detail—it's in creating the clarity and psychological safety for my team to execute at their best.",
    clientName: 'Sarah J.',
    duration: '6 Months (1:1 Executive Coaching)'
  },
  {
    id: 'cs-founder-scale',
    title: 'Scaling from Technical Founder to Seasoned CEO',
    clientRole: 'Founder & CEO',
    industry: 'Developer Tools / Series B',
    summary: 'Transitioning from hands-on engineer to an inspiring CEO capable of steering an 85-person organization.',
    before: 'Writing code until 2am, avoiding conflict with executive hires, and delivering rambling, uninspiring updates to the board of directors.',
    challenge: 'After raising a $24M Series B, David faced immense pressure to scale the executive team. His engineering instincts caused him to debate minor technical details instead of setting high-level company strategy and holding his VPs accountable.',
    coachingApproach: [
      'Implemented the "CEO Operating Rhythm" to separate tactical fires from strategic vision',
      'Trained in executive communication and structured storytelling for board presentations',
      'Coached through difficult management transitions, including replacing an underperforming executive',
      'Built a sustainable daily habit stack to protect mental stamina and emotional regulation'
    ],
    theShift: 'David made the foundational cognitive leap from "best technical problem solver" to "architect of organizational clarity". He developed the confidence to step back, set clear scorecards, and hold leaders accountable without guilt.',
    results: [
      'Successfully recruited seasoned VPs of Sales and Marketing within 4 months',
      'Board praised a 180-degree improvement in strategic communication and executive gravitas',
      'Zero unplanned executive attrition over an 18-month hypergrowth period'
    ],
    clientQuote: "Alex gave me the playbook and the psychological grounding to survive the most difficult year of my life. I wouldn't still be CEO of this company without our sessions.",
    clientName: 'David C.',
    duration: '12 Months (Founder Coaching)'
  },
  {
    id: 'cs-executive-presence',
    title: 'Breaking Through the Senior Director Ceiling to VP',
    clientRole: 'Senior Director of Product',
    industry: 'Healthcare Technology',
    summary: 'Overcoming impostor syndrome and mastering executive stakeholder diplomacy to secure a competitive C-suite appointment.',
    before: 'Over-preparing 40-slide decks for every meeting, speaking softly in cross-functional debates, and being perceived as "great on execution, but not strategic enough for VP".',
    challenge: 'Despite leading the company’s highest-grossing product portfolio, Elena was passed over twice for executive advancement due to a perceived lack of "executive presence" and hesitation during conflict.',
    coachingApproach: [
      'In-depth 360 review identifying precise perceptions among Executive Committee members',
      'Trained in the "Bottom-Line-Up-Front" (BLUF) executive communication methodology',
      'Worked through deep-rooted impostor beliefs and perfectionist protection mechanisms',
      'Crafted an internal sponsorship campaign to build active advocates across finance and sales'
    ],
    theShift: 'Elena shifted her self-perception from an eager-to-please contributor to an equal peer of the executive team. She replaced lengthy slide decks with concise, influential 3-point strategic memos that commanded immediate respect.',
    results: [
      'Secured promotion to Vice President of Product Management ahead of two external candidates',
      'Appointed to the company-wide Operating Committee as the youngest member',
      'Negotiated a 40% total compensation package increase'
    ],
    clientQuote: "Alex helped me realize that executive presence isn't about being the loudest voice in the room—it's about having absolute clarity and unshakeable conviction in your perspective.",
    clientName: 'Elena R.',
    duration: '4 Months (Career Clarity & Leadership Accelerator)'
  }
];

export const BLOG_POSTS_DATA: BlogPost[] = [
  {
    id: 'bp-1',
    slug: 'the-art-of-decisive-leadership',
    title: 'The Art of Decisive Leadership: How to Stop Overthinking and Make Confident Calls',
    excerpt: 'Why high-achieving leaders get trapped in analysis paralysis, and the exact 4-part cognitive framework top executives use to make swift, high-stakes decisions.',
    category: 'Decision Making',
    publishedDate: 'October 14, 2025',
    readTime: '6 min read',
    featuredImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=900',
    content: [
      'As your scope of leadership expands, the nature of your decisions changes fundamentally. Early in your career, problems had clear right and wrong answers. You could analyze data, run spreadsheets, and find the optimal path.',
      'In senior leadership, however, almost every meaningful decision is ambiguous. You are asked to choose between two imperfect options with incomplete information. This is where high achievers frequently stall.',
      'The desire to eliminate 100% of risk leads to endless requests for more data, extra committee meetings, and delayed execution. In the coaching room, I see this daily: smart leaders masking their fear of responsibility behind a facade of "thoroughness."',
      'To break this pattern, top executives rely on the **70% Rule**. If you wait until you have 90% of the information, you are already too late. Gather 70% of the relevant data, verify your alignment with core strategic intent, make the call, and focus 100% of your energy on agile execution.',
      'Remember: decisive leadership is not about being right every single time. It is about maintaining organizational momentum and building the psychological resilience to adjust course when new facts emerge.'
    ],
    pullQuote: "Decisive leadership is not about having all the answers—it is about having the courage to move forward when the answers are incomplete.",
    keyTakeaways: [
      'Distinguish between reversible two-way doors and irreversible one-way door decisions.',
      'Adopt the 70% information rule to maintain team velocity.',
      'Recognize that delayed decisions are active decisions that drain organizational trust.',
      'Build post-decision review rhythms rather than pre-decision anxiety loops.'
    ],
    tableOfContents: [
      { title: 'The Shift from Expert to Executive', id: 'shift' },
      { title: 'The Hidden Cost of Analysis Paralysis', id: 'cost' },
      { title: 'The 70% Decision Framework', id: 'framework' },
      { title: 'Building Self-Trust in Ambiguity', id: 'selftrust' }
    ]
  },
  {
    id: 'bp-2',
    slug: 'why-smart-leaders-struggle-to-delegate',
    title: 'Why Smart Leaders Struggle to Delegate (And How to Fix It Without Dropping the Ball)',
    excerpt: 'Perfectionism and hero syndrome are the silent killers of leadership scale. Here is how to transition from doing the work to developing your team.',
    category: 'Leadership',
    publishedDate: 'November 2, 2025',
    readTime: '8 min read',
    featuredImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=900',
    content: [
      'Every leader says they want to delegate more. Yet their calendars tell a starkly different story: packed 12-hour days, weekend email triage, and constant operational firefighting.',
      'Why do intelligent, well-intentioned leaders find delegation so profoundly difficult? The root cause is rarely tactical—it is psychological.',
      'For years, your value was defined by the brilliance of your individual output. Stepping back feels like losing control, or worse, risking a drop in standards that will reflect poorly on your reputation.',
      'True delegation is not abdication. It is an intentional teaching protocol. When you delegate the *outcome* rather than the *process*, you grant your team the psychological ownership they need to grow, while liberating yourself to think strategically.'
    ],
    pullQuote: "If you are the smartest person in every operational meeting, you haven't built a team—you have built a bottleneck.",
    keyTakeaways: [
      'Define clear definitions of "done" rather than prescribing step-by-step instructions.',
      'Establish check-in milestones instead of hovering over daily tasks.',
      'Treat team errors as tuition for future competence rather than reasons to reclaim control.',
      'Track your "leadership leverage ratio" to measure how much output your team creates without you.'
    ]
  },
  {
    id: 'bp-3',
    slug: 'executive-presence-demystified',
    title: 'Executive Presence Demystified: The Subtle Habits of Leaders Who Command the Room',
    excerpt: 'Executive presence is not an innate charismatic gift—it is a learnable set of physical, linguistic, and emotional behaviors.',
    category: 'Executive Presence',
    publishedDate: 'December 10, 2025',
    readTime: '5 min read',
    featuredImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=900',
    content: [
      'Few phrases in corporate performance reviews are as frustratingly vague as "needs more executive presence." What does that actually mean?',
      'Through our coaching engagements with hundreds of executives, we have broken presence down into three observable components: Gravitas (how you act), Communication (how you speak), and Appearance (how you present).',
      'The most potent lever is how you handle silence. Inexperienced leaders rush to fill every pause, use qualifying language ("I just think...", "This might be wrong, but..."), and speak at a rapid tempo.',
      'Leaders with true gravitas speak with measured cadence, state their conclusions first, and comfortably hold pauses while the room absorbs their point.'
    ],
    pullQuote: "Presence is not the volume of your voice; it is the clarity of your intent and the stillness of your attention.",
    keyTakeaways: [
      'Eliminate qualifying filler words that undermine your authority.',
      'Use the Bottom-Line-Up-Front (BLUF) communication pattern.',
      'Embrace intentional pauses to allow high-impact points to land.',
      'Maintain steady eye contact and open posture during challenging cross-examinations.'
    ]
  },
  {
    id: 'bp-4',
    slug: 'sustainable-high-performance-without-burnout',
    title: 'Sustainable High Performance: Leading at the Highest Level Without Sacrificing Your Health',
    excerpt: 'How elite executives treat energy management like an Olympic sport to achieve massive career results while maintaining personal well-being.',
    category: 'Personal Growth',
    publishedDate: 'January 18, 2026',
    readTime: '7 min read',
    featuredImage: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=900',
    content: [
      'The corporate world has long celebrated the badge of exhaustion: 80-hour workweeks, unread inbox counts in the thousands, and running on adrenaline.',
      'In reality, chronic sleep deprivation and relentless cognitive overload degrade the exact prefrontal cortex functions you need most: emotional regulation, strategic foresight, and nuanced judgment.',
      'High performance is not about time management; it is about energy management. The most effective leaders build deliberate recovery periods into their day, guard their deep work blocks with fierce boundaries, and treat physical recovery as a core job requirement.'
    ],
    pullQuote: "Rest is not a reward you earn after the work is done; it is the prerequisite that makes extraordinary work possible.",
    keyTakeaways: [
      'Designate non-negotiable 90-minute morning deep work blocks with zero notifications.',
      'Implement a strict "shutdown ritual" to signal to your brain that the workday is complete.',
      'Measure your output by strategic impact rather than total hours logged.',
      'Recognize the early biological signals of burnout before they turn into acute crises.'
    ]
  }
];

export const RESOURCES_DATA: ResourceItem[] = [
  {
    id: 'guide-5-questions',
    title: '5 Questions Every Ambitious Leader Should Ask Before Their Next Big Move',
    type: 'Free Guide',
    category: 'Career & Leadership Clarity',
    description: 'A comprehensive 14-page diagnostic workbook designed to help you evaluate your current trajectory, uncover hidden motivations, and make your next career leap with complete conviction.',
    readTimeOrDuration: '15 min exercise',
    featured: true
  },
  {
    id: 'worksheet-delegation',
    title: 'The Executive Delegation & Leverage Matrix',
    type: 'Worksheet',
    category: 'Team Performance',
    description: 'A practical 2-page template to audit your weekly tasks, identify which responsibilities should be handed off, and build structured handover agreements.',
    readTimeOrDuration: 'Downloadable PDF',
    featured: true
  },
  {
    id: 'assessment-readiness',
    title: 'Executive Leadership Readiness & Blind Spot Scorecard',
    type: 'Assessment',
    category: 'Self-Assessment',
    description: 'An interactive 6-minute diagnostic to score your leadership across 4 core pillars: Strategic Thinking, Delegation, Executive Presence, and Energy Stamina.',
    readTimeOrDuration: '6 min interactive tool',
    featured: true
  },
  {
    id: 'audio-difficult-conversations',
    title: 'De-Escalating High-Stakes Conversations: Audio Masterclass',
    type: 'Audio Briefing',
    category: 'Communication',
    description: 'A 22-minute private audio briefing breaking down real-world scripts for handling underperforming direct reports and resistant executive peers.',
    readTimeOrDuration: '22 min audio',
    featured: false
  },
  {
    id: 'guide-board-ready',
    title: 'The Board-Ready Executive: Presentation Playbook',
    type: 'Free Guide',
    category: 'Executive Presence',
    description: 'A blueprint on structuring board-level updates that build confidence and win budget approvals without getting lost in technical minutiae.',
    readTimeOrDuration: '8 min read',
    featured: false
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Coaching',
    question: 'What is executive and leadership coaching, and how does it work?',
    answer: 'Executive coaching is a confidential, collaborative partnership designed to accelerate your personal and professional effectiveness. Rather than telling you what to do (like a consultant) or exploring past trauma (like therapy), coaching focuses on your present reality and future goals. We examine your leadership behaviors, challenge blind spots, refine your communication, and hold you accountable to implementing sustainable high-impact changes.'
  },
  {
    id: 'faq-2',
    category: 'Getting Started',
    question: 'Who is coaching best suited for?',
    answer: 'Coaching is designed for ambitious, self-aware leaders, executives, founders, and senior professionals who are already successful but recognize they have reached an inflection point where their old habits will not get them to their next level. Whether you are stepping into a bigger role, managing rapid team growth, or navigating career ambiguity, coaching provides the dedicated space to elevate your performance.'
  },
  {
    id: 'faq-3',
    category: 'Sessions',
    question: 'How often do we meet, and what is the format of sessions?',
    answer: 'Most clients meet bi-weekly for 60-minute sessions over Zoom. Between sessions, you will have specific behavioral experiments and reflection exercises to implement in your day-to-day meetings. You also have direct access to Alex via a private Slack channel or WhatsApp for real-time sounding board advice prior to high-stakes meetings.'
  },
  {
    id: 'faq-4',
    category: 'Sessions',
    question: 'What happens during a Discovery Call?',
    answer: 'A Discovery Call is a focused, 30-minute conversation where we discuss your current situation, your biggest leadership or career challenges, and what meaningful transformation looks like for you. It is not a high-pressure sales pitch. It is an opportunity for both of us to evaluate chemistry, ensure mutual fit, and determine whether coaching is the right solution for your goals.'
  },
  {
    id: 'faq-5',
    category: 'Investment',
    question: 'How much does coaching cost, and can my company pay for it?',
    answer: 'Our individual programs range from $2,400 for focused career intensives to $4,800 for the 12-Week Leadership Accelerator and $12,000 for retained executive partnerships. Over 75% of our clients have their coaching fully sponsored or subsidized through their employer’s Learning & Development, Executive Education, or Talent Development budgets. We provide comprehensive corporate reimbursement documentation.'
  },
  {
    id: 'faq-6',
    category: 'Confidentiality',
    question: 'Is our coaching conversation completely confidential?',
    answer: 'Absolutely. All discussions, diagnostics, and personal revelations are protected by strict ICF ethical standards. Even if your employer sponsors the coaching program, what is shared in our sessions remains 100% confidential between you and Alex. We only share high-level development themes with sponsors with your explicit consent.'
  },
  {
    id: 'faq-7',
    category: 'Getting Started',
    question: 'How do I know if I am ready for coaching right now?',
    answer: 'You are ready for coaching if you are genuinely open to feedback, willing to examine your own mindset and habits, and prepared to dedicate 2–3 hours per week to intentional reflection and practice. If you are seeking someone to simply validate your current approach or tell you what you want to hear, coaching may not be the right investment.'
  },
  {
    id: 'faq-8',
    category: 'Programs',
    question: 'What is the difference between the 12-Week Accelerator and 1:1 Executive Coaching?',
    answer: 'The 12-Week Leadership Accelerator follows a structured, milestone-driven curriculum (Hogan diagnostic, strategic delegation, executive presence, and culture building) ideal for directors and newly promoted leaders. The 1:1 Retained Executive Coaching is an open, bespoke partnership tailored for C-suite leaders managing ongoing organizational complexity, board dynamics, and high-frequency crises.'
  }
];

export const LEAD_MAGNET_QUESTIONS = [
  {
    number: 1,
    title: 'The Energy & Alignment Audit',
    question: 'When you reflect on the last 90 days, which 20% of your responsibilities gave you 80% of your energy, and which 20% drained you most?',
    context: 'Most leaders assume they are tired from working hard. In reality, fatigue comes from misalignment—spending hours on tasks that do not utilize your zone of genius.',
    reflectionPrompt: 'List 3 specific activities you need to ruthlessly delegate or eliminate over the next 60 days.'
  },
  {
    number: 2,
    title: 'The Perception Gap',
    question: 'If your executive peers were asked to describe your greatest strength and your most dangerous blind spot behind closed doors, what would they say?',
    context: 'Your career trajectory is determined by your reputation when you are not in the room. Leaders who proactively bridge this perception gap advance significantly faster.',
    reflectionPrompt: 'Who is one trusted colleague you can ask for raw, unfiltered feedback this week?'
  },
  {
    number: 3,
    title: 'The Decision Threshold',
    question: 'What is the one conversation or decision you have been putting off for more than two weeks?',
    context: 'The cost of delayed decisions is rarely calculated on spreadsheets, but it drains cognitive stamina and signals hesitation to your team.',
    reflectionPrompt: 'What is the absolute worst-case outcome if you make this decision today, and how would you recover?'
  },
  {
    number: 4,
    title: 'The Operating Horizon',
    question: 'Are you currently leading your team from a reactive firefighting stance or a proactive 18-month strategic horizon?',
    context: 'Operating in the weeds is comfortable because you feel immediately useful. But true executive impact requires the discipline to create space for long-term vision.',
    reflectionPrompt: 'What would have to be true for your team to run flawlessly for 2 weeks without you answering a single email?'
  },
  {
    number: 5,
    title: 'The Identity & Values Alignment',
    question: 'Does the next level of success you are striving for require you to sacrifice who you are, or does it demand that you become more of who you truly are?',
    context: 'Sustainable leadership is never about adopting an artificial persona. The most compelling leaders are those whose external authority matches their internal self-trust.',
    reflectionPrompt: 'What core value will you refuse to compromise, no matter how high the stakes become?'
  }
];
