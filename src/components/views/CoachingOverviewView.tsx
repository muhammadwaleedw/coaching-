import React from 'react';
import { PageId } from '../../types';
import { SERVICES_DATA } from '../../data/coachingData';
import {
  Shield,
  Compass,
  TrendingUp,
  Zap,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Sparkles,
  Users
} from 'lucide-react';

interface CoachingOverviewViewProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const CoachingOverviewView: React.FC<CoachingOverviewViewProps> = ({
  onNavigate,
  onOpenBooking,
}) => {
  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      {/* 1. HERO */}
      <section className="pt-6 sm:pt-12 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFEAE2] border border-[#E0D7C9] text-xs font-semibold text-[#141E28] mb-6">
          <span className="w-2 h-2 rounded-full bg-[#C2824D]" />
          <span>Coaching Services Overview</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#141E28] font-normal leading-tight">
          Coaching for the Person <br />
          <span className="italic text-[#C2824D] font-light">
            Behind the Performance.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-[#525E6F] font-light leading-relaxed pt-4 max-w-2xl mx-auto">
          We do not believe in one-size-fits-all leadership formulas. Our coaching engagements are specifically calibrated to the unique pressures, scopes, and inflection points of your career.
        </p>

        <div className="pt-8 flex justify-center gap-4">
          <button
            onClick={onOpenBooking}
            className="bg-[#141E28] hover:bg-[#C2824D] text-white text-xs font-semibold px-7 py-3.5 rounded shadow inline-flex items-center gap-2 transition-colors cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a Discovery Call</span>
          </button>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {SERVICES_DATA.map((srv, idx) => (
            <div
              key={srv.id}
              className="bg-white rounded-2xl border border-[#E8E2D9] p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              <div className="lg:col-span-5 space-y-4">
                <span className="px-2.5 py-1 rounded bg-[#FAF8F5] border border-[#D9D2C7] text-xs font-bold text-[#C2824D] uppercase tracking-wider">
                  0{idx + 1} • {srv.title}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#141E28]">
                  {srv.title}
                </h2>
                <p className="text-xs sm:text-sm font-medium text-[#C2824D]">
                  {srv.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-[#556375] leading-relaxed">
                  {srv.description}
                </p>
                <div className="pt-2">
                  <span className="text-[11px] font-bold text-[#141E28] uppercase tracking-wider block mb-1">
                    Who it's for:
                  </span>
                  <p className="text-xs text-[#525E6F] bg-[#FAF8F5] p-3 rounded border border-[#E8E2D9]">
                    {srv.targetAudience}
                  </p>
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => onNavigate(srv.pageId)}
                    className="bg-[#141E28] hover:bg-[#C2824D] text-white text-xs font-semibold px-5 py-2.5 rounded inline-flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <span>View Dedicated Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#FAF8F5] p-6 sm:p-8 rounded-xl border border-[#E8E2D9]">
                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#141E28] border-b border-[#D9D2C7] pb-1.5">
                    Common Challenges
                  </h3>
                  <ul className="space-y-2">
                    {srv.commonChallenges.map((ch, i) => (
                      <li key={i} className="text-xs text-[#525E6F] flex items-start gap-2">
                        <span className="text-[#C2824D] font-bold">•</span>
                        <span>{ch}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#141E28] border-b border-[#D9D2C7] pb-1.5">
                    Expected Outcomes
                  </h3>
                  <ul className="space-y-2">
                    {srv.expectedOutcomes.map((out, i) => (
                      <li key={i} className="text-xs text-[#141E28] font-medium flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-700 shrink-0 mt-0.5" />
                        <span>{out}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#141E28] text-white rounded-2xl p-8 sm:p-12 space-y-4">
          <h2 className="text-3xl font-serif text-[#FAF8F5]">
            Unsure Which Track Fits You Best?
          </h2>
          <p className="text-xs sm:text-sm text-[#AAB8C9] max-w-lg mx-auto">
            Book a 30-minute discovery conversation with Alex to discuss your specific goals and get tailored guidance.
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
