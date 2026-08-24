import React from 'react';
import { PageId, Program } from '../../types';
import { PROGRAMS_DATA } from '../../data/coachingData';
import {
  CheckCircle2,
  Calendar,
  ArrowRight,
  Clock,
  Video,
  Sparkles,
  Users,
  Award
} from 'lucide-react';

interface ProgramsViewProps {
  onNavigate: (page: PageId, extraData?: any) => void;
  onOpenBooking: () => void;
}

export const ProgramsView: React.FC<ProgramsViewProps> = ({
  onNavigate,
  onOpenBooking,
}) => {
  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      {/* HERO */}
      <section className="pt-6 sm:pt-12 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFEAE2] border border-[#E0D7C9] text-xs font-semibold text-[#141E28] mb-6">
          <span className="w-2 h-2 rounded-full bg-[#C2824D]" />
          <span>Curated Coaching Programs</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#141E28] font-normal leading-tight">
          Structured Programs Designed for <br />
          <span className="italic text-[#C2824D] font-light">
            Measurable Executive Impact.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-[#525E6F] font-light leading-relaxed pt-4 max-w-2xl mx-auto">
          Whether you need a high-speed 4-week sprint to resolve career ambiguity or an ongoing retained partnership for enterprise stewardship, explore our signature programs below.
        </p>
      </section>

      {/* PROGRAMS DIRECTORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROGRAMS_DATA.map((prog) => (
            <div
              key={prog.id}
              className={`rounded-2xl border p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-md relative ${
                prog.featured
                  ? 'bg-white border-[#C2824D] ring-2 ring-[#C2824D]/20'
                  : 'bg-white border-[#E8E2D9]'
              }`}
            >
              {prog.featured && (
                <span className="absolute -top-3.5 right-6 bg-[#C2824D] text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
                  Most Popular Intensive
                </span>
              )}

              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#667384]">
                    <Clock className="w-4 h-4 text-[#C2824D]" />
                    <span>{prog.duration}</span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#141E28]">
                    {prog.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#C2824D] font-medium">
                    {prog.tagline}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#556375] leading-relaxed">
                  {prog.description}
                </p>

                <div className="space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#141E28] block">
                    Ideal For:
                  </span>
                  <ul className="space-y-1.5">
                    {prog.idealFor.map((item, i) => (
                      <li key={i} className="text-xs text-[#525E6F] flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C2824D] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#E8E2D9] space-y-1">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs font-bold text-[#141E28]">Investment:</span>
                    <span className="font-serif text-xl font-bold text-[#141E28]">
                      {prog.investment.amount}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#6E7B8C]">
                    {prog.investment.period} • {prog.investment.note}
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-[#E8E2D9] flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => onNavigate('program-detail', { programId: prog.id })}
                  className="w-full sm:w-auto flex-1 bg-[#141E28] hover:bg-[#C2824D] text-white text-xs font-semibold py-3 px-4 rounded text-center transition-colors cursor-pointer"
                >
                  View Full Syllabus & Details
                </button>
                <button
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto bg-transparent hover:bg-[#F3EFEA] text-[#141E28] text-xs font-semibold py-3 px-4 rounded border border-[#D9D2C7] transition-colors cursor-pointer"
                >
                  Book Discovery Call
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CORPORATE SPONSORSHIP NOTE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF8F5] border border-[#E8E2D9] rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="font-serif text-xl font-bold text-[#141E28]">
              Does your company sponsor Executive Coaching?
            </h3>
            <p className="text-xs sm:text-sm text-[#556375] max-w-xl">
              Over 75% of our clients have their coaching funded via corporate L&D budgets, talent stipends, or executive education budgets. We provide itemized receipts and corporate business cases.
            </p>
          </div>
          <button
            onClick={() => onNavigate('apply')}
            className="bg-[#141E28] hover:bg-[#C2824D] text-white text-xs font-semibold px-6 py-3 rounded whitespace-nowrap transition-colors cursor-pointer shrink-0"
          >
            Apply for Coaching
          </button>
        </div>
      </section>
    </div>
  );
};
