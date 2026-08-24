import React from 'react';
import { PageId } from '../../types';
import {
  COACH_PROFILE,
  TRANSFORMATIONS,
  COACHING_PILLARS,
  FOUR_STEP_PROCESS,
  SERVICES_DATA,
  TESTIMONIALS_DATA,
  CASE_STUDIES_DATA,
  PROGRAMS_DATA,
} from '../../data/coachingData';
import {
  ArrowRight,
  Shield,
  Award,
  Sparkles,
  Calendar,
  CheckCircle2,
  TrendingUp,
  Compass,
  Zap,
  Users,
  Clock,
  BookOpen,
  Quote,
  ChevronRight
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (page: PageId, extraData?: any) => void;
  onOpenBooking: () => void;
  onOpenLeadMagnet: () => void;
  onOpenQuiz: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenBooking,
  onOpenLeadMagnet,
  onOpenQuiz,
}) => {
  const featuredProgram = PROGRAMS_DATA[0];
  const featuredCaseStudy = CASE_STUDIES_DATA[0];

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shield':
        return <Shield className="w-5 h-5 text-[#C2824D]" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#C2824D]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-[#C2824D]" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-[#C2824D]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#C2824D]" />;
    }
  };

  return (
    <div className="space-y-24 sm:space-y-32 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 sm:pt-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFEAE2] border border-[#E0D7C9] text-xs font-semibold text-[#141E28]">
                <span className="w-2 h-2 rounded-full bg-[#C2824D]" />
                <span>Executive & Leadership Coaching</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#141E28] font-normal leading-[1.15] tracking-tight">
                You Know You're Capable of More. <br />
                <span className="italic text-[#C2824D] font-serif font-light">
                  Let's Figure Out What's Next.
                </span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-lg sm:text-xl text-[#525E6F] max-w-2xl font-light leading-relaxed">
                Executive and leadership coaching for ambitious professionals who want greater clarity, confidence, and impact in the way they lead and live.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  id="hero-primary-cta"
                  onClick={onOpenBooking}
                  className="bg-[#141E28] hover:bg-[#C2824D] text-[#FAF8F5] text-sm font-semibold px-7 py-4 rounded-lg shadow-md hover:shadow-lg flex items-center justify-center gap-2.5 transition-all duration-200 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book a Discovery Call</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  id="hero-secondary-cta"
                  onClick={() => onNavigate('coaching')}
                  className="bg-transparent hover:bg-[#F3EFEA] text-[#141E28] text-sm font-semibold px-6 py-4 rounded-lg border border-[#D9D2C7] flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Explore Coaching</span>
                </button>
              </div>

              {/* Trust statement */}
              <div className="pt-4 border-t border-[#E8E2D9] flex flex-wrap items-center gap-4 text-xs font-medium text-[#6B7788]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C2824D]" /> Executive Leadership
                </span>
                <span className="text-[#D9D2C7]">•</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C2824D]" /> Career Growth
                </span>
                <span className="text-[#D9D2C7]">•</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C2824D]" /> Personal Transformation
                </span>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative border backdrop */}
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-[#C2824D]/20 via-transparent to-[#141E28]/10 -rotate-1 pointer-events-none" />

                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#E8E2D9] bg-white">
                  <img
                    src={COACH_PROFILE.heroImage}
                    alt="Alex Morgan, Executive Coach"
                    className="w-full h-[480px] sm:h-[540px] object-cover object-top filter contrast-[1.02]"
                  />
                  {/* Floating Trust Card Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#141E28]/90 backdrop-blur-md text-white p-4 rounded-xl border border-white/10 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold text-[#E8A87C] uppercase tracking-wider">
                          Alex Morgan, MCC
                        </p>
                        <p className="text-xs text-[#C8D1DC]">
                          14+ Years Guiding C-Suite & High-Growth Leaders
                        </p>
                      </div>
                      <span className="px-2.5 py-1 bg-[#C2824D] text-white text-[11px] font-semibold rounded">
                        450+ Coached
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HERO TRUST STRIP */}
      <section className="bg-[#FAF8F5] border-y border-[#E8E2D9] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <span className="block font-serif text-2xl sm:text-3xl font-bold text-[#141E28]">
                14+ Years
              </span>
              <span className="block text-xs uppercase tracking-wider text-[#687586] font-semibold">
                Executive Experience
              </span>
            </div>
            <div className="space-y-1 border-l border-[#E8E2D9]">
              <span className="block font-serif text-2xl sm:text-3xl font-bold text-[#141E28]">
                450+
              </span>
              <span className="block text-xs uppercase tracking-wider text-[#687586] font-semibold">
                Leaders Coached
              </span>
            </div>
            <div className="space-y-1 border-l border-[#E8E2D9]">
              <span className="block font-serif text-2xl sm:text-3xl font-bold text-[#141E28]">
                ICF MCC
              </span>
              <span className="block text-xs uppercase tracking-wider text-[#687586] font-semibold">
                Master Certified Coach
              </span>
            </div>
            <div className="space-y-1 border-l border-[#E8E2D9]">
              <span className="block font-serif text-2xl sm:text-3xl font-bold text-[#141E28]">
                98%
              </span>
              <span className="block text-xs uppercase tracking-wider text-[#687586] font-semibold">
                Client Satisfaction
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROBLEM / IDENTIFICATION SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <span className="text-xs uppercase tracking-widest text-[#C2824D] font-bold">
            The Reality of Senior Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#141E28] font-normal leading-tight">
            You Don't Need Another Checklist. <br />
            <span className="italic font-light text-[#141E28]">You Need Clarity.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#525E6F] font-light leading-relaxed pt-2">
            Success at senior levels brings a distinct set of challenges that no tactical management manual can solve:
          </p>
        </div>

        {/* 6 Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "You're successful, but feel stuck.",
              text: "You have achieved your initial career milestones, but the next summit feels undefined, uninspiring, or uncertain."
            },
            {
              title: "Stepping into a bigger leadership scope.",
              text: "The skills that made you an exceptional individual contributor or manager are not the skills required to lead at scale."
            },
            {
              title: "Struggling with a high-stakes decision.",
              text: "Overthinking, analyzing endless data, and fearing the consequences of making the wrong strategic or organizational call."
            },
            {
              title: "Confidence lagging behind responsibilities.",
              text: "You have the title, the seat at the table, and the expectations—yet you wrestle with the quiet feeling of being an impostor."
            },
            {
              title: "Knowing something needs to change.",
              text: "You sense the friction in your team or your career, but you are too close to the day-to-day operations to see the root cause."
            },
            {
              title: "Constantly performing, never pausing.",
              text: "You run on back-to-back calendar meetings all week, leaving zero cognitive margin for creative foresight or strategic renewal."
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-xl border border-[#E8E2D9] hover:border-[#C2824D]/60 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="w-7 h-7 rounded-full bg-[#FAF8F5] border border-[#D9D2C7] text-xs font-serif font-bold text-[#141E28] flex items-center justify-center">
                  0{idx + 1}
                </span>
                <h3 className="font-serif text-lg font-bold text-[#141E28]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#616D7E] leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Section closer */}
        <div className="text-center mt-12 space-y-4">
          <p className="text-xl sm:text-2xl font-serif text-[#141E28] font-normal">
            That’s where coaching comes in.
          </p>
          <button
            onClick={() => onNavigate('about')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C2824D] hover:text-[#141E28] transition-colors uppercase tracking-wider"
          >
            <span>Learn how we bridge the gap</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* 4. TRANSFORMATION SECTION (From -> To) */}
      <section className="bg-[#141E28] text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C2824D]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs uppercase tracking-widest text-[#E8A87C] font-bold">
              The Journey of Growth
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#FAF8F5] font-normal leading-tight">
              From Where You Are to Where You Want to Be
            </h2>
            <p className="text-sm sm:text-base text-[#AAB4C2] font-light">
              Real leadership development is not about memorizing theories—it is about shifting your cognitive operating system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TRANSFORMATIONS.map((t, idx) => (
              <div
                key={idx}
                className="bg-[#1C2836] border border-[#2D3C4E] rounded-2xl p-6 sm:p-8 space-y-6 hover:border-[#C2824D]/60 transition-all"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                  {/* From */}
                  <div className="bg-[#141E28] p-4 rounded-xl border border-[#273545] space-y-1">
                    <span className="text-[10px] uppercase tracking-widest text-[#F87171] font-bold">
                      From
                    </span>
                    <p className="text-sm font-semibold text-[#D3DBE4]">
                      {t.from}
                    </p>
                  </div>

                  {/* To */}
                  <div className="bg-[#243447] p-4 rounded-xl border border-[#C2824D]/40 space-y-1 relative">
                    <span className="text-[10px] uppercase tracking-widest text-[#8CE3A8] font-bold">
                      To
                    </span>
                    <p className="text-sm font-semibold text-[#FAF8F5]">
                      {t.to}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#9AA5B6] leading-relaxed">
                  {t.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={onOpenBooking}
              className="bg-[#C2824D] hover:bg-[#D5935E] text-white text-xs font-semibold px-7 py-3.5 rounded-lg shadow transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Begin Your Transformation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. COACHING PHILOSOPHY (Clarity, Perspective, Action) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#C2824D] font-bold">
              Guiding Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#141E28] font-normal leading-tight">
              Coaching Isn't About Giving You the Answers.
            </h2>
            <p className="text-base text-[#525E6F] font-light leading-relaxed">
              "It’s about creating the space, perspective, and accountability you need to discover better answers for yourself."
            </p>
            <p className="text-xs sm:text-sm text-[#667384] leading-relaxed">
              When leaders are stuck, it is rarely due to a lack of intellect. It is because they are too submerged in the daily friction to see the underlying dynamics clearly. We build an intellectually rigorous, non-judgmental partnership where you can calibrate your vision.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('about')}
                className="text-xs font-bold text-[#141E28] hover:text-[#C2824D] uppercase tracking-wider flex items-center gap-1.5 transition-colors"
              >
                <span>Read Alex’s Story & Beliefs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {COACHING_PILLARS.map((pillar) => (
              <div
                key={pillar.number}
                className="bg-white p-6 sm:p-7 rounded-xl border border-[#E8E2D9] shadow-sm hover:shadow transition-all space-y-2"
              >
                <div className="flex items-center gap-3">
                  <span className="font-serif text-2xl font-bold text-[#C2824D]">
                    {pillar.number}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#141E28]">
                    {pillar.name}
                  </h3>
                </div>
                <h4 className="text-xs sm:text-sm font-semibold text-[#141E28]">
                  {pillar.headline}
                </h4>
                <p className="text-xs sm:text-sm text-[#5C6777] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. COACHING SERVICES / WAYS WE WORK TOGETHER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <span className="text-xs uppercase tracking-widest text-[#C2824D] font-bold">
            Tailored Engagements
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#141E28] font-normal">
            Ways We Can Work Together
          </h2>
          <p className="text-sm sm:text-base text-[#525E6F] font-light">
            Every leader's inflection point is unique. Choose the coaching track aligned with your current scope and ambitions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_DATA.map((srv) => (
            <div
              key={srv.id}
              className="bg-white rounded-2xl border border-[#E8E2D9] p-8 sm:p-9 flex flex-col justify-between hover:border-[#C2824D] transition-all duration-300 shadow-sm hover:shadow-md space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E8E2D9] flex items-center justify-center">
                    {getServiceIcon(srv.iconName)}
                  </div>
                  {srv.badge && (
                    <span className="px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#E0D7C9] text-[11px] font-semibold text-[#141E28]">
                      {srv.badge}
                    </span>
                  )}
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif text-2xl font-bold text-[#141E28]">
                    {srv.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#C2824D]">
                    {srv.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#5C6878] leading-relaxed">
                  {srv.description}
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-bold text-[#141E28] uppercase tracking-wider block">
                    Core Focus Areas:
                  </span>
                  <div className="space-y-1.5">
                    {srv.whatWeWorkOn.slice(0, 3).map((w, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#4E5B6D]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C2824D] shrink-0 mt-0.5" />
                        <span>{w}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E8E2D9] flex items-center justify-between">
                <button
                  onClick={() => onNavigate(srv.pageId)}
                  className="text-xs font-bold text-[#141E28] hover:text-[#C2824D] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>{srv.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={onOpenBooking}
                  className="text-[11px] font-semibold text-[#667384] hover:text-[#141E28] underline underline-offset-2"
                >
                  Book intro
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. HOW COACHING WORKS (4-Step Process) */}
      <section className="bg-[#F3EFEA] py-20 border-y border-[#E8E2D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
            <span className="text-xs uppercase tracking-widest text-[#C2824D] font-bold">
              The Engagement Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#141E28] font-normal">
              How Coaching Works
            </h2>
            <p className="text-sm sm:text-base text-[#525E6F] font-light">
              A structured 4-step framework that turns introspection into measurable executive capability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FOUR_STEP_PROCESS.map((p) => (
              <div
                key={p.step}
                className="bg-white p-7 rounded-xl border border-[#E8E2D9] shadow-sm flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <span className="font-serif text-3xl font-bold text-[#C2824D]">
                    {p.step}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#141E28]">
                    {p.name}
                  </h3>
                  <span className="text-[11px] uppercase tracking-wider text-[#6E7B8C] font-semibold block">
                    {p.tagline}
                  </span>
                  <p className="text-xs sm:text-sm text-[#556272] leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={onOpenBooking}
              className="bg-[#141E28] hover:bg-[#C2824D] text-white text-xs font-semibold px-7 py-3.5 rounded-lg shadow inline-flex items-center gap-2 cursor-pointer transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Discovery Call</span>
            </button>
          </div>
        </div>
      </section>

      {/* 8. ABOUT PREVIEW ("Hi, I'm Alex.") */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-[#E8E2D9] p-8 sm:p-12 lg:p-14 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 relative">
              <div className="rounded-xl overflow-hidden shadow-lg border border-[#E8E2D9]">
                <img
                  src={COACH_PROFILE.portraitSecondary}
                  alt="Alex Morgan"
                  className="w-full h-[420px] object-cover object-center"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#C2824D] font-bold">
                Meet Your Coach
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#141E28] font-normal leading-tight">
                Hi, I'm Alex.
              </h2>
              <p className="text-base sm:text-lg text-[#141E28] font-medium leading-relaxed">
                "I'm an executive and leadership coach who helps ambitious people navigate the moments when success stops feeling simple."
              </p>
              <p className="text-xs sm:text-sm text-[#556375] leading-relaxed">
                Before dedicating my life to coaching, I spent over a decade leading operations and product organizations. I understand the sleepless nights before executive board meetings, the anxiety of inheriting a high-stakes initiative, and the isolation that often accompanies senior leadership.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="border-l-2 border-[#C2824D] pl-3">
                  <span className="block font-serif text-lg font-bold text-[#141E28]">
                    Master Certified
                  </span>
                  <span className="text-xs text-[#6B7788]">ICF Highest Credential</span>
                </div>
                <div className="border-l-2 border-[#C2824D] pl-3">
                  <span className="block font-serif text-lg font-bold text-[#141E28]">
                    Harvard Exec Alum
                  </span>
                  <span className="text-xs text-[#6B7788]">Strategic Decision-Making</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="bg-[#141E28] hover:bg-[#C2824D] text-white text-xs font-semibold px-6 py-3 rounded inline-flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Meet Alex & Explore Background</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. SOCIAL PROOF / TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#C2824D] font-bold">
              Client Experiences
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#141E28] font-normal">
              The Work Speaks for Itself
            </h2>
          </div>
          <button
            onClick={() => onNavigate('results')}
            className="text-xs font-bold text-[#C2824D] hover:text-[#141E28] flex items-center gap-1.5 transition-colors uppercase tracking-wider"
          >
            <span>Read More Stories ({TESTIMONIALS_DATA.length}+)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.slice(0, 3).map((t) => (
            <div
              key={t.id}
              className="bg-white p-7 rounded-xl border border-[#E8E2D9] shadow-sm flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 bg-[#FAF8F5] border border-[#E0D7C9] text-[10px] font-semibold text-[#141E28] rounded">
                    {t.category}
                  </span>
                  <Quote className="w-5 h-5 text-[#C2824D]/30" />
                </div>
                <p className="text-xs sm:text-sm text-[#4E5A6B] leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#E8E2D9] flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-[#D9D2C7]"
                />
                <div>
                  <h4 className="text-xs font-bold text-[#141E28]">{t.name}</h4>
                  <p className="text-[11px] text-[#6E7B8C]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. RESULTS / OUTCOMES SECTION */}
      <section className="bg-[#FAF8F5] border-y border-[#E8E2D9] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
            <span className="text-xs uppercase tracking-widest text-[#C2824D] font-bold">
              Tangible Outcomes
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#141E28] font-normal">
              What Changes When You Have the Right Support
            </h2>
            <p className="text-sm sm:text-base text-[#525E6F] font-light">
              The quantifiable and qualitative shifts clients experience through our coaching engagements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              {
                title: 'Greater Confidence',
                desc: 'Trust yourself when making difficult, ambiguous decisions with high stakes.'
              },
              {
                title: 'Stronger Leadership',
                desc: 'Communicate with gravitas, delegate with trust, and lead intentionally.'
              },
              {
                title: 'Better Decisions',
                desc: 'Stop overthinking and move forward rapidly with grounded frameworks.'
              },
              {
                title: 'Clearer Direction',
                desc: 'Know what you truly want and build an active roadmap to achieve it.'
              },
              {
                title: 'Sustainable Performance',
                desc: 'Achieve significant professional milestones without running on empty.'
              }
            ].map((outcome, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border border-[#E8E2D9] shadow-sm space-y-2 hover:border-[#C2824D] transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-[#FAF8F5] border border-[#C2824D] text-[#C2824D] flex items-center justify-center text-xs font-bold">
                  {idx + 1}
                </div>
                <h3 className="font-serif text-base font-bold text-[#141E28]">
                  {outcome.title}
                </h3>
                <p className="text-xs text-[#637081] leading-relaxed">
                  {outcome.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FEATURED CASE STUDY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#141E28] text-white rounded-2xl p-8 sm:p-12 lg:p-14 relative overflow-hidden border border-[#2D3C4E]">
          <div className="space-y-2 mb-8">
            <span className="text-xs uppercase tracking-widest text-[#E8A87C] font-bold">
              Featured Case Study
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#FAF8F5] font-normal leading-tight">
              {featuredCaseStudy.title}
            </h2>
            <p className="text-xs text-[#A1B0C4]">
              {featuredCaseStudy.clientRole} • {featuredCaseStudy.industry} • {featuredCaseStudy.duration}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#1C2735] p-5 rounded-xl border border-[#2C3B4E] space-y-2">
              <span className="text-[11px] uppercase tracking-wider text-[#F87171] font-bold">
                The Challenge
              </span>
              <p className="text-xs text-[#B9C5D4] leading-relaxed">
                {featuredCaseStudy.challenge}
              </p>
            </div>

            <div className="bg-[#1C2735] p-5 rounded-xl border border-[#2C3B4E] space-y-2">
              <span className="text-[11px] uppercase tracking-wider text-[#E8A87C] font-bold">
                The Shift
              </span>
              <p className="text-xs text-[#B9C5D4] leading-relaxed">
                {featuredCaseStudy.theShift}
              </p>
            </div>

            <div className="bg-[#1C2735] p-5 rounded-xl border border-[#2C3B4E] space-y-2">
              <span className="text-[11px] uppercase tracking-wider text-[#8CE3A8] font-bold">
                The Result
              </span>
              <ul className="text-xs text-[#B9C5D4] space-y-1">
                {featuredCaseStudy.results.slice(0, 2).map((r, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8CE3A8] shrink-0 mt-0.5" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-4 border-t border-[#2A394C] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#A8B7CB] italic max-w-xl">
              "{featuredCaseStudy.clientQuote}"
            </p>
            <button
              onClick={() => onNavigate('results')}
              className="bg-[#C2824D] hover:bg-[#D5935E] text-white text-xs font-semibold px-6 py-3 rounded flex items-center gap-2 transition-colors cursor-pointer shrink-0"
            >
              <span>Read the Full Case Story</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 12. HIGH-CONVERTING LEAD MAGNET SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#F3EFEA] to-[#FAF8F5] border border-[#E8E2D9] rounded-2xl p-8 sm:p-12 lg:p-14 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white border border-[#D9D2C7] rounded text-[10px] uppercase font-bold tracking-wider text-[#C2824D]">
                <BookOpen className="w-3.5 h-3.5" /> Free Leadership Guide
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#141E28] font-normal leading-tight">
                5 Questions Every Ambitious Leader Should Ask Before Their Next Big Move
              </h2>
              <p className="text-xs sm:text-sm text-[#525E6F] leading-relaxed">
                Get the free 14-page diagnostic guide designed to help you gain absolute clarity before making your next career or leadership decision.
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-[#637082] pt-1">
                <span>✓ Interactive workbook notes</span>
                <span>✓ Blind-spot diagnostics</span>
                <span>✓ No spam guarantee</span>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                onClick={onOpenLeadMagnet}
                className="w-full bg-[#141E28] hover:bg-[#C2824D] text-white py-4 px-6 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow cursor-pointer"
              >
                <span>Download & Read Free Guide</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenQuiz}
                className="w-full bg-white hover:bg-[#FAF8F5] text-[#141E28] py-3.5 px-6 rounded-lg text-xs font-semibold border border-[#D9D2C7] flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#C2824D]" />
                <span>Take 3-Min Leadership Scorecard</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 13. FEATURED PROGRAM SECTION (12-Week Leadership Accelerator) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-[#E8E2D9] p-8 sm:p-12 shadow-sm">
          <div className="space-y-2 mb-10 text-center max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-[#C2824D] font-bold">
              Structured Transformation
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#141E28] font-normal">
              Ready for Deeper Transformation?
            </h2>
            <p className="text-xs sm:text-sm text-[#525E6F]">
              Our premier 12-week intensive designed for leaders stepping into expanded executive scope.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-1">
                <span className="px-3 py-1 bg-[#FAF8F5] border border-[#D9D2C7] text-xs font-bold text-[#141E28] rounded-full">
                  {featuredProgram.duration}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#141E28] pt-2">
                  {featuredProgram.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5C6878] leading-relaxed">
                  {featuredProgram.description}
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold text-[#141E28] uppercase tracking-wider block">
                  What is included:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {featuredProgram.whatIsIncluded.map((inc, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#4F5B6C]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C2824D] shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#FAF8F5] p-7 rounded-xl border border-[#E8E2D9] space-y-5 text-center">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-[#687586] font-semibold">
                  Program Investment
                </span>
                <p className="font-serif text-3xl sm:text-4xl font-bold text-[#141E28]">
                  {featuredProgram.investment.amount}
                </p>
                <p className="text-xs text-[#687586]">
                  {featuredProgram.investment.period}
                </p>
              </div>
              <p className="text-[11px] text-[#7A8696] leading-relaxed">
                {featuredProgram.investment.note}
              </p>
              <div className="space-y-2 pt-2">
                <button
                  onClick={() => onNavigate('program-detail')}
                  className="w-full bg-[#141E28] hover:bg-[#C2824D] text-white py-3 rounded text-xs font-semibold transition-colors cursor-pointer shadow"
                >
                  Explore the Program Details
                </button>
                <button
                  onClick={onOpenBooking}
                  className="w-full bg-white hover:bg-[#F3EFEA] text-[#141E28] py-2.5 rounded text-xs font-semibold border border-[#D9D2C7] transition-colors cursor-pointer"
                >
                  Book a Call to Discuss Fit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 14. DISCOVERY CALL FINAL CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#141E28] text-white rounded-2xl p-8 sm:p-12 lg:p-16 text-center space-y-6 relative overflow-hidden border border-[#2B394A]">
          <div className="max-w-2xl mx-auto space-y-3 relative z-10">
            <span className="text-xs uppercase tracking-widest text-[#E8A87C] font-bold">
              Take the Next Step
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#FAF8F5] font-normal leading-tight">
              Let's Talk About Where You Want to Go.
            </h2>
            <p className="text-sm sm:text-base text-[#A8B6C7] font-light leading-relaxed">
              "You don't need to have everything figured out before you reach out. That's what the conversation is for."
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 relative z-10">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto bg-[#C2824D] hover:bg-[#D5935E] text-white text-xs font-semibold px-8 py-4 rounded-lg shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Discovery Call</span>
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto bg-[#1C2735] hover:bg-[#253548] text-[#FAF8F5] text-xs font-medium px-7 py-4 rounded-lg border border-[#324357] transition-colors cursor-pointer"
            >
              <span>Send a Message</span>
            </button>
          </div>

          <p className="text-[11px] text-[#718092] relative z-10">
            30-Minute Virtual Session • 100% Confidential • Zero Hard Sell
          </p>
        </div>
      </section>
    </div>
  );
};
