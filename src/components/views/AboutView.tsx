import React from 'react';
import { PageId } from '../../types';
import { COACH_PROFILE } from '../../data/coachingData';
import {
  Award,
  CheckCircle2,
  Calendar,
  ArrowRight,
  Shield,
  BookOpen,
  Sparkles,
  Compass,
  Heart
} from 'lucide-react';

interface AboutViewProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onNavigate,
  onOpenBooking,
}) => {
  return (
    <div className="space-y-24 sm:space-y-32 pb-20">
      {/* 1. ABOUT HERO */}
      <section className="pt-6 sm:pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFEAE2] border border-[#E0D7C9] text-xs font-semibold text-[#141E28]">
                <span className="w-2 h-2 rounded-full bg-[#C2824D]" />
                <span>The Coach Behind the Work</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#141E28] font-normal leading-tight">
                Hi, I'm Alex. <br />
                <span className="italic text-[#C2824D] font-light">
                  I help ambitious leaders navigate when success stops feeling simple.
                </span>
              </h1>

              <p className="text-lg text-[#525E6F] font-light leading-relaxed">
                {COACH_PROFILE.shortBio}
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={onOpenBooking}
                  className="bg-[#141E28] hover:bg-[#C2824D] text-white text-xs font-semibold px-7 py-3.5 rounded shadow flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book a Discovery Call</span>
                </button>
                <button
                  onClick={() => onNavigate('coaching')}
                  className="bg-transparent hover:bg-[#F3EFEA] text-[#141E28] text-xs font-semibold px-6 py-3.5 rounded border border-[#D9D2C7] transition-colors cursor-pointer"
                >
                  <span>Explore Coaching Tracks</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-[#E8E2D9] relative">
                <img
                  src={COACH_PROFILE.portraitSecondary}
                  alt="Alex Morgan"
                  className="w-full h-[500px] object-cover object-center"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#141E28]/95 text-white p-4 rounded-xl border border-white/10 text-xs">
                  <p className="font-bold text-[#E8A87C]">Master Certified Coach (MCC)</p>
                  <p className="text-[#C5D0DC] text-[11px]">Over 2,500+ verified clinical coaching hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MY STORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-[#E8E2D9] p-8 sm:p-14 shadow-sm">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#C2824D] font-bold">
              My Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#141E28] font-normal">
              Why I Dedicate My Life to Coaching Leaders
            </h2>
            <div className="prose text-sm sm:text-base text-[#525E6F] space-y-4 leading-relaxed font-light">
              <p>
                Before becoming an executive coach, I spent over a decade leading operations, scaling teams, and driving organizational turnarounds. I loved the intellectual challenge of building systems, but as my scope grew, I noticed a recurring, quiet tension.
              </p>
              <p>
                The higher I rose, the less feedback I received. The stakes grew tenfold, yet the conversations became more guarded. I watched brilliant leaders around me collapse under cognitive overload, delay critical decisions out of fear, or adopt artificial "command-and-control" personas that alienated their best people.
              </p>
              <p>
                I realized that what senior leaders need most is not another tactical spreadsheet or business framework. They need an objective, intellectually rigorous, and completely confidential thinking partner—someone who has no internal political agenda and can hold up a clean mirror.
              </p>
              <p>
                Since founding my practice, I have had the privilege of partnering with over 450 executives, founders, and directors. Every single day, I see what happens when a leader stops hiding behind self-doubt and learns to lead from authentic conviction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT I BELIEVE (Core Principles) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <span className="text-xs uppercase tracking-widest text-[#C2824D] font-bold">
            Core Beliefs
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#141E28] font-normal">
            What I Believe About Leadership & Growth
          </h2>
          <p className="text-sm text-[#525E6F] font-light">
            The foundational principles that guide every coaching interaction and behavioral intervention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {COACH_PROFILE.personalValues.map((val, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-xl border border-[#E8E2D9] shadow-sm space-y-3"
            >
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#FAF8F5] border border-[#C2824D] text-[#C2824D] flex items-center justify-center text-xs font-bold">
                  {idx + 1}
                </span>
                <h3 className="font-serif text-xl font-bold text-[#141E28]">
                  {val.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#556375] leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. MY COACHING APPROACH */}
      <section className="bg-[#141E28] text-white py-20 border-y border-[#283749]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
            <span className="text-xs uppercase tracking-widest text-[#E8A87C] font-bold">
              The Method
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#FAF8F5] font-normal">
              How Our Sessions Actually Work
            </h2>
            <p className="text-sm text-[#AAB8C9] font-light">
              No generic advice. No scripted lectures. An active, high-impact dialogue designed for immediate execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#1C2735] p-7 rounded-xl border border-[#2B3B4E] space-y-3">
              <span className="text-xs font-bold text-[#E8A87C] uppercase tracking-wider">
                01. Focus on Real-Time Challenges
              </span>
              <h3 className="font-serif text-lg font-bold text-white">
                Context-Driven Inquiry
              </h3>
              <p className="text-xs text-[#A9B8C8] leading-relaxed">
                We dissect upcoming high-stakes board presentations, critical team restructuring, or difficult direct-report conversations occurring that very week.
              </p>
            </div>

            <div className="bg-[#1C2735] p-7 rounded-xl border border-[#2B3B4E] space-y-3">
              <span className="text-xs font-bold text-[#E8A87C] uppercase tracking-wider">
                02. Behavioral Diagnostics
              </span>
              <h3 className="font-serif text-lg font-bold text-white">
                Uncovering Root Patterns
              </h3>
              <p className="text-xs text-[#A9B8C8] leading-relaxed">
                We identify the emotional triggers, perfectionist traps, and micro-management habits that lead to cognitive fatigue and decision paralysis.
              </p>
            </div>

            <div className="bg-[#1C2735] p-7 rounded-xl border border-[#2B3B4E] space-y-3">
              <span className="text-xs font-bold text-[#E8A87C] uppercase tracking-wider">
                03. Behavioral Experiments
              </span>
              <h3 className="font-serif text-lg font-bold text-white">
                Calibrated Action & Review
              </h3>
              <p className="text-xs text-[#A9B8C8] leading-relaxed">
                Every session ends with 1–2 precise behavioral experiments to test in your workplace. We track outcomes relentlessly between sessions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CAREER & EXPERIENCE TIMELINE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <span className="text-xs uppercase tracking-widest text-[#C2824D] font-bold">
            Track Record
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#141E28] font-normal">
            Leadership & Coaching Timeline
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {COACH_PROFILE.careerTimeline.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-7 rounded-xl border border-[#E8E2D9] shadow-sm space-y-2 relative"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="text-xs font-bold text-[#C2824D] uppercase tracking-wider">
                  {item.period}
                </span>
                <span className="text-xs text-[#7B8898]">{item.organization}</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-[#141E28]">
                {item.role}
              </h3>
              <p className="text-xs sm:text-sm text-[#556375] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CREDENTIALS & CERTIFICATIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <span className="text-xs uppercase tracking-widest text-[#C2824D] font-bold">
            Formal Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#141E28] font-normal">
            Certified Clinical & Academic Excellence
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {COACH_PROFILE.credentials.map((cred, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-7 rounded-xl border border-[#E8E2D9] shadow-sm space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#667384]">{cred.issuer}</span>
                  <span className="text-xs font-bold text-[#C2824D]">{cred.year}</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-[#141E28]">
                  {cred.title}
                </h3>
                <p className="text-xs text-[#525E6F] leading-relaxed">
                  {cred.description}
                </p>
              </div>
              <div className="pt-2 flex items-center gap-1.5 text-[11px] font-semibold text-[#141E28]">
                <Award className="w-3.5 h-3.5 text-[#C2824D]" /> Verified Credential
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. BEYOND COACHING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF8F5] border border-[#E8E2D9] rounded-2xl p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#C2824D] font-bold">
                The Human Element
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#141E28] font-normal">
                Beyond Coaching
              </h2>
              <p className="text-sm text-[#556375] leading-relaxed">
                {COACH_PROFILE.beyondCoaching.story}
              </p>
              <div className="pt-2 flex flex-wrap gap-2">
                {COACH_PROFILE.beyondCoaching.interests.map((interest, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white border border-[#D9D2C7] rounded-full text-xs font-medium text-[#141E28]"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-[#E8E2D9] space-y-3 text-center">
              <Heart className="w-8 h-8 text-[#C2824D] mx-auto" />
              <h3 className="font-serif text-lg font-bold text-[#141E28]">
                My Personal Promise to You
              </h3>
              <p className="text-xs text-[#637082] leading-relaxed">
                "I will always treat you as a whole person, not merely a high-performance engine. We will build success that enhances your life rather than consumes it."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#141E28] text-white rounded-2xl p-8 sm:p-12 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-serif text-[#FAF8F5] font-normal">
            Let's Work Together
          </h2>
          <p className="text-xs sm:text-sm text-[#AAB8C9] max-w-xl mx-auto font-light">
            Take the first step toward greater clarity, confidence, and leadership impact.
          </p>
          <div className="flex justify-center">
            <button
              onClick={onOpenBooking}
              className="bg-[#C2824D] hover:bg-[#D5935E] text-white text-xs font-semibold px-8 py-3.5 rounded shadow inline-flex items-center gap-2 cursor-pointer transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Discovery Call</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
