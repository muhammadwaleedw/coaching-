import React from 'react';
import { PageId } from '../../types';
import { SERVICES_DATA, TESTIMONIALS_DATA, FAQS_DATA } from '../../data/coachingData';
import {
  Shield,
  Compass,
  TrendingUp,
  Zap,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Sparkles,
  Quote,
  Clock,
  HelpCircle
} from 'lucide-react';

interface SpecialtyCoachingViewProps {
  pageId: PageId;
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const SpecialtyCoachingView: React.FC<SpecialtyCoachingViewProps> = ({
  pageId,
  onNavigate,
  onOpenBooking,
}) => {
  // Determine service key from pageId
  const serviceKey = pageId.replace('coaching-', '');
  const service = SERVICES_DATA.find((s) => s.id === serviceKey) || SERVICES_DATA[0];

  const getHeroContent = () => {
    switch (serviceKey) {
      case 'executive':
        return {
          eyebrow: 'Executive & C-Suite Coaching',
          headline: 'Lead With More Clarity, Confidence, and Impact',
          lead: 'High-stakes leadership requires total mental composure, strategic foresight, and the ability to influence peers, boards, and organizations without hesitation.',
          targetAudience: 'Executives, Senior Leaders, Directors, VPs, and C-Suite Professionals',
          sessionStructure: [
            {
              title: '360 Qualitative Stakeholder Diagnostic',
              desc: 'We map how your direct reports, peer executives, and board perceive your influence, decisiveness, and communication.'
            },
            {
              title: 'Strategic Leverage & Sounding Board',
              desc: 'Bi-weekly confidential sessions to dissect enterprise roadmaps, high-stakes negotiations, and organizational change.'
            },
            {
              title: 'Executive Presence & Composure',
              desc: 'Mastering the Bottom-Line-Up-Front (BLUF) methodology and commanding high-pressure boardrooms with ease.'
            }
          ]
        };
      case 'leadership':
        return {
          eyebrow: 'Leadership Development',
          headline: 'Become the Leader Your Role Requires You to Be',
          lead: 'Transition from being the expert doer to an inspiring executive orchestrator. Master delegation, difficult conversations, and strategic team empowerment.',
          targetAudience: 'Directors, Senior Managers, and High-Potential Leaders stepping into larger scope',
          sessionStructure: [
            {
              title: 'From Doer to Leader Mindset Shift',
              desc: 'Breaking the hero syndrome and perfectionism that forces you into micromanagement.'
            },
            {
              title: 'High-Trust Delegation & Accountability',
              desc: 'Building tiered delegation scorecards that allow your team to operate autonomously.'
            },
            {
              title: 'Navigating Difficult Feedback',
              desc: 'Delivering direct, empathetic feedback that resolves performance issues without creating resentment.'
            }
          ]
        };
      case 'career':
        return {
          eyebrow: 'Career Strategy & Navigation',
          headline: 'Your Next Career Move Should Feel Intentional.',
          lead: 'Stop waiting for promotions to happen to you. Build an active executive value proposition, master stakeholder sponsorship, and navigate your next major leap.',
          targetAudience: 'Mid-to-Senior Professionals navigating transitions, promotions, or industry pivots',
          sessionStructure: [
            {
              title: 'Executive Narrative & Positioning',
              desc: 'Crafting your leadership story, differentiator, and career non-negotiables for high-level searches.'
            },
            {
              title: 'Internal & External Sponsorship',
              desc: 'Building strategic alliances with senior sponsors and executive search partners.'
            },
            {
              title: 'High-Stakes Negotiation & Close',
              desc: 'Securing optimal compensation, equity structures, and role scopes with total confidence.'
            }
          ]
        };
      case 'founder':
      default:
        return {
          eyebrow: 'Founder & CEO Advisory',
          headline: 'Scale Your Leadership as Fast as Your Business.',
          lead: 'Make better decisions, build an autonomous executive team, and navigate board dynamics without burning out or losing your core identity.',
          targetAudience: 'Seed, Series A–C Founders, and Venture-Backed Entrepreneurs',
          sessionStructure: [
            {
              title: 'Founder-to-CEO Mindset Transition',
              desc: 'Shifting from building product to managing an executive staff and setting high-level company vision.'
            },
            {
              title: 'Executive Hiring & Co-Founder Alignment',
              desc: 'Recruiting VPs who execute independently and resolving friction at the founding level.'
            },
            {
              title: 'Sustainable Operating Cadence',
              desc: 'Protecting sleep, mental clarity, and focus during high-pressure fundraising and growth sprints.'
            }
          ]
        };
    }
  };

  const hero = getHeroContent();
  const relevantTestimonial =
    TESTIMONIALS_DATA.find((t) => t.category.toLowerCase().includes(serviceKey)) ||
    TESTIMONIALS_DATA[0];
  const relevantFaqs = FAQS_DATA.slice(0, 4);

  return (
    <div className="space-y-24 sm:space-y-32 pb-20">
      {/* 1. HERO */}
      <section className="pt-6 sm:pt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFEAE2] border border-[#E0D7C9] text-xs font-semibold text-[#141E28]">
            <span className="w-2 h-2 rounded-full bg-[#C2824D]" />
            <span>{hero.eyebrow}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#141E28] font-normal leading-tight">
            {hero.headline}
          </h1>

          <p className="text-lg text-[#525E6F] font-light leading-relaxed">
            {hero.lead}
          </p>

          <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#E8E2D9] text-xs text-[#525E6F]">
            <strong className="text-[#141E28]">Who it’s for:</strong> {hero.targetAudience}
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={onOpenBooking}
              className="bg-[#141E28] hover:bg-[#C2824D] text-white text-xs font-semibold px-7 py-3.5 rounded shadow flex items-center gap-2 transition-colors cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Discovery Call</span>
            </button>
            <button
              onClick={() => onNavigate('programs')}
              className="bg-transparent hover:bg-[#F3EFEA] text-[#141E28] text-xs font-semibold px-6 py-3.5 rounded border border-[#D9D2C7] transition-colors cursor-pointer"
            >
              <span>View Structured Programs</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. COMMON CHALLENGES & CORE FOCUS AREAS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Challenges */}
          <div className="bg-white p-8 rounded-2xl border border-[#E8E2D9] shadow-sm space-y-5">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-wider text-[#C2824D] font-bold">
                The Bottlenecks
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#141E28]">
                Common Leadership Challenges We Solve
              </h2>
            </div>
            <div className="space-y-3">
              {service.commonChallenges.map((ch, idx) => (
                <div key={idx} className="p-3 bg-[#FAF8F5] rounded-lg border border-[#E8E2D9] text-xs text-[#556375] flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#141E28] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{ch}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Focus Areas & Outcomes */}
          <div className="bg-white p-8 rounded-2xl border border-[#E8E2D9] shadow-sm space-y-5">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-wider text-[#8CE3A8] font-bold text-green-800">
                The Transformation
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#141E28]">
                What We Work on & Expected Outcomes
              </h2>
            </div>
            <div className="space-y-3">
              {service.whatWeWorkOn.map((w, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[#4E5B6D]">
                  <CheckCircle2 className="w-4 h-4 text-[#C2824D] shrink-0 mt-0.5" />
                  <span>{w}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[#E8E2D9] space-y-2">
              <span className="text-[11px] font-bold text-[#141E28] uppercase tracking-wider block">
                Target Outcomes:
              </span>
              {service.expectedOutcomes.map((out, idx) => (
                <div key={idx} className="text-xs font-semibold text-[#141E28] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-700" />
                  <span>{out}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT SESSIONS LOOK LIKE */}
      <section className="bg-[#141E28] text-white py-20 border-y border-[#29384A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
            <span className="text-xs uppercase tracking-widest text-[#E8A87C] font-bold">
              Session Cadence
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#FAF8F5] font-normal">
              What Coaching Sessions Look Like
            </h2>
            <p className="text-sm text-[#AAB8C9] font-light">
              A private, high-altitude sanctuary designed for candid reflection and immediate execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hero.sessionStructure.map((s, idx) => (
              <div key={idx} className="bg-[#1C2735] p-7 rounded-xl border border-[#2C3B4E] space-y-3">
                <span className="font-serif text-2xl font-bold text-[#C2824D]">
                  0{idx + 1}
                </span>
                <h3 className="font-serif text-lg font-bold text-white">
                  {s.title}
                </h3>
                <p className="text-xs text-[#A8B7C7] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. RELEVANT TESTIMONIAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-[#E8E2D9] p-8 sm:p-12 shadow-sm">
          <div className="max-w-3xl mx-auto space-y-6 text-center">
            <Quote className="w-8 h-8 text-[#C2824D] mx-auto" />
            <p className="font-serif text-xl sm:text-2xl text-[#141E28] italic leading-relaxed">
              "{relevantTestimonial.quote}"
            </p>
            <div className="space-y-1">
              <h4 className="font-bold text-sm text-[#141E28]">
                {relevantTestimonial.name}
              </h4>
              <p className="text-xs text-[#6B7788]">
                {relevantTestimonial.role} • {relevantTestimonial.company}
              </p>
              {relevantTestimonial.metrics && (
                <p className="text-xs font-semibold text-[#C2824D] pt-1">
                  ✓ {relevantTestimonial.metrics}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQs FOR THIS TRACK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-2 mb-8">
            <span className="text-xs uppercase tracking-widest text-[#C2824D] font-bold">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl font-serif text-[#141E28]">
              Questions About This Coaching Track
            </h2>
          </div>

          <div className="space-y-4">
            {relevantFaqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white p-6 rounded-xl border border-[#E8E2D9] shadow-sm space-y-2"
              >
                <h3 className="font-serif text-base font-bold text-[#141E28]">
                  {faq.question}
                </h3>
                <p className="text-xs sm:text-sm text-[#556375] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#141E28] text-white rounded-2xl p-8 sm:p-12 space-y-4">
          <h2 className="text-3xl font-serif text-[#FAF8F5]">
            Ready to Take the Next Step in Your Leadership?
          </h2>
          <p className="text-xs sm:text-sm text-[#AAB8C9] max-w-lg mx-auto">
            Book a complimentary 30-minute discovery call to discuss your situation and see if coaching is the right fit.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenBooking}
              className="bg-[#C2824D] hover:bg-[#D5935E] text-white text-xs font-semibold px-7 py-3 rounded shadow transition-colors cursor-pointer"
            >
              Book a Discovery Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
