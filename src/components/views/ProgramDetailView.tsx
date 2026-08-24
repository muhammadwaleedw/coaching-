import React, { useState } from 'react';
import { PageId, Program } from '../../types';
import { PROGRAMS_DATA, TESTIMONIALS_DATA, FAQS_DATA } from '../../data/coachingData';
import {
  CheckCircle2,
  Calendar,
  ArrowRight,
  Clock,
  Video,
  Sparkles,
  Shield,
  FileText,
  ChevronDown,
  Quote
} from 'lucide-react';

interface ProgramDetailViewProps {
  programId?: string;
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const ProgramDetailView: React.FC<ProgramDetailViewProps> = ({
  programId = 'next-level-leadership',
  onNavigate,
  onOpenBooking,
}) => {
  const [activePhase, setActivePhase] = useState<number>(0);
  const program =
    PROGRAMS_DATA.find((p) => p.id === programId) || PROGRAMS_DATA[0];

  return (
    <div className="space-y-24 sm:space-y-32 pb-20">
      {/* 1. HERO */}
      <section className="pt-6 sm:pt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFEAE2] border border-[#E0D7C9] text-xs font-semibold text-[#141E28]">
            <span className="w-2 h-2 rounded-full bg-[#C2824D]" />
            <span>Signature Program • {program.duration}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#141E28] font-normal leading-tight">
            {program.title}
          </h1>

          <p className="text-lg text-[#525E6F] font-light leading-relaxed">
            {program.tagline}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 bg-[#FAF8F5] rounded-xl border border-[#E8E2D9] text-xs">
            <div>
              <strong className="block text-[#141E28] mb-0.5">Format:</strong>
              <span className="text-[#556375]">{program.format}</span>
            </div>
            <div>
              <strong className="block text-[#141E28] mb-0.5">Target Scope:</strong>
              <span className="text-[#556375]">{program.targetAudience}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => onNavigate('apply')}
              className="bg-[#141E28] hover:bg-[#C2824D] text-white text-xs font-semibold px-7 py-3.5 rounded shadow flex items-center gap-2 transition-colors cursor-pointer"
            >
              <span>Apply for the Program</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenBooking}
              className="bg-transparent hover:bg-[#F3EFEA] text-[#141E28] text-xs font-semibold px-6 py-3.5 rounded border border-[#D9D2C7] transition-colors cursor-pointer"
            >
              <span>Book a Discovery Call</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. PROGRAM STRUCTURE & CURRICULUM PHASES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-12">
          <span className="text-xs uppercase tracking-widest text-[#C2824D] font-bold">
            Curriculum Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#141E28] font-normal">
            Syllabus & Phase Breakdown
          </h2>
          <p className="text-xs sm:text-sm text-[#556375] max-w-2xl">
            A milestone-driven roadmap designed to deliver immediate behavioral breakthroughs in your day-to-day meetings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Phase Selector Tabs */}
          <div className="lg:col-span-4 space-y-2">
            {program.curriculum.map((c, idx) => (
              <button
                key={idx}
                onClick={() => setActivePhase(idx)}
                className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                  activePhase === idx
                    ? 'bg-[#141E28] text-white border-[#141E28] shadow'
                    : 'bg-white text-[#141E28] border-[#E8E2D9] hover:bg-[#FAF8F5]'
                }`}
              >
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-semibold text-[#C2824D]">{c.phase}</span>
                  <span className="opacity-70">{c.weeks}</span>
                </div>
                <h3 className="font-serif text-base font-bold">{c.title}</h3>
              </button>
            ))}
          </div>

          {/* Phase Details Card */}
          <div className="lg:col-span-8 bg-white p-8 sm:p-10 rounded-2xl border border-[#E8E2D9] shadow-sm space-y-6">
            {(() => {
              const currentCurriculum = program.curriculum[activePhase] || program.curriculum[0];
              return (
                <>
                  <div className="space-y-2 border-b border-[#E8E2D9] pb-4">
                    <span className="text-xs font-bold text-[#C2824D] uppercase tracking-wider">
                      {currentCurriculum.phase} • {currentCurriculum.weeks}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#141E28]">
                      {currentCurriculum.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#525E6F] leading-relaxed">
                      {currentCurriculum.focus}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#141E28] block">
                      Tangible Deliverables & Tools:
                    </span>
                    <div className="space-y-2">
                      {currentCurriculum.deliverables.map((del, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[#445163]">
                          <CheckCircle2 className="w-4 h-4 text-green-700 shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      </section>

      {/* 3. WHAT IS INCLUDED */}
      <section className="bg-[#141E28] text-white py-20 border-y border-[#2B3B4E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
            <span className="text-xs uppercase tracking-widest text-[#E8A87C] font-bold">
              Comprehensive Support
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#FAF8F5] font-normal">
              What’s Included in the Program
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {program.whatIsIncluded.map((inc, i) => (
              <div key={i} className="bg-[#1C2735] p-6 rounded-xl border border-[#2C3B4E] flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#8CE3A8] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#D3DEEC] leading-relaxed">{inc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INVESTMENT & APPLICATION CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-[#E8E2D9] p-8 sm:p-14 shadow-sm max-w-3xl mx-auto text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-[#C2824D] font-bold">
            Tuition & Enrollment
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#141E28]">
            Investment
          </h2>
          <div className="space-y-1">
            <p className="font-serif text-4xl sm:text-5xl font-bold text-[#141E28]">
              {program.investment.amount}
            </p>
            <p className="text-xs text-[#6B7788]">
              {program.investment.period}
            </p>
          </div>
          <p className="text-xs text-[#525E6F] max-w-md mx-auto leading-relaxed">
            {program.investment.note}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onNavigate('apply')}
              className="w-full sm:w-auto bg-[#141E28] hover:bg-[#C2824D] text-white text-xs font-semibold px-8 py-3.5 rounded shadow transition-colors cursor-pointer"
            >
              Submit Program Application
            </button>
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto bg-transparent hover:bg-[#FAF8F5] text-[#141E28] text-xs font-semibold px-6 py-3.5 rounded border border-[#D9D2C7] transition-colors cursor-pointer"
            >
              Schedule Fit Call First
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
