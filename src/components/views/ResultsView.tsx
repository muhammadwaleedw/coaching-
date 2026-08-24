import React, { useState } from 'react';
import { PageId } from '../../types';
import { TESTIMONIALS_DATA, CASE_STUDIES_DATA } from '../../data/coachingData';
import {
  Quote,
  CheckCircle2,
  Calendar,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Award,
  Filter
} from 'lucide-react';

interface ResultsViewProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const ResultsView: React.FC<ResultsViewProps> = ({
  onNavigate,
  onOpenBooking,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Leadership', 'Career', 'Executive Presence', 'Founder', 'Confidence'];

  const filteredTestimonials =
    selectedCategory === 'All'
      ? TESTIMONIALS_DATA
      : TESTIMONIALS_DATA.filter((t) => t.category === selectedCategory);

  return (
    <div className="space-y-24 sm:space-y-32 pb-20">
      {/* 1. HERO */}
      <section className="pt-6 sm:pt-12 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFEAE2] border border-[#E0D7C9] text-xs font-semibold text-[#141E28] mb-6">
          <span className="w-2 h-2 rounded-full bg-[#C2824D]" />
          <span>Client Results & Case Studies</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#141E28] font-normal leading-tight">
          Real People. <br />
          <span className="italic text-[#C2824D] font-light">Real Growth.</span>
        </h1>

        <p className="text-base sm:text-lg text-[#525E6F] font-light leading-relaxed pt-4 max-w-2xl mx-auto">
          Read how leaders, executives, and founders transformed their confidence, elevated their communication, and made high-stakes decisions with clarity.
        </p>
      </section>

      {/* 2. IN-DEPTH CASE STUDIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#C2824D] font-bold">
            Detailed Case Studies
          </span>
          <h2 className="text-3xl font-serif text-[#141E28]">
            Transformation Breakdowns
          </h2>
        </div>

        <div className="space-y-12">
          {CASE_STUDIES_DATA.map((cs) => (
            <div
              key={cs.id}
              className="bg-white rounded-2xl border border-[#E8E2D9] p-8 sm:p-12 shadow-sm space-y-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E8E2D9] pb-4">
                <div>
                  <span className="text-xs font-bold text-[#C2824D] uppercase tracking-wider">
                    {cs.industry} • {cs.duration}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#141E28] mt-1">
                    {cs.title}
                  </h3>
                </div>
                <span className="px-3 py-1 bg-[#FAF8F5] border border-[#D9D2C7] text-xs font-semibold text-[#141E28] rounded-full self-start sm:self-auto">
                  {cs.clientRole}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Before */}
                <div className="bg-[#FAF8F5] p-5 rounded-xl border border-[#E8E2D9] space-y-2">
                  <span className="text-[11px] uppercase tracking-wider text-[#F87171] font-bold">
                    Before Coaching
                  </span>
                  <p className="text-xs text-[#525E6F] leading-relaxed">
                    {cs.before}
                  </p>
                </div>

                {/* Challenge */}
                <div className="bg-[#FAF8F5] p-5 rounded-xl border border-[#E8E2D9] space-y-2">
                  <span className="text-[11px] uppercase tracking-wider text-[#C2824D] font-bold">
                    The Core Challenge
                  </span>
                  <p className="text-xs text-[#525E6F] leading-relaxed">
                    {cs.challenge}
                  </p>
                </div>

                {/* The Shift */}
                <div className="bg-[#FAF8F5] p-5 rounded-xl border border-[#E8E2D9] space-y-2">
                  <span className="text-[11px] uppercase tracking-wider text-[#141E28] font-bold">
                    The Cognitive Shift
                  </span>
                  <p className="text-xs text-[#525E6F] leading-relaxed">
                    {cs.theShift}
                  </p>
                </div>

                {/* After / Results */}
                <div className="bg-[#FAF8F5] p-5 rounded-xl border border-[#BCE4C6] space-y-2">
                  <span className="text-[11px] uppercase tracking-wider text-green-800 font-bold">
                    Quantified Outcomes
                  </span>
                  <ul className="text-xs text-[#141E28] space-y-1 font-medium">
                    {cs.results.map((r, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-700 shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Quote from client */}
              <div className="p-6 bg-[#141E28] text-white rounded-xl flex items-start gap-4">
                <Quote className="w-6 h-6 text-[#C2824D] shrink-0" />
                <div className="space-y-1">
                  <p className="text-xs sm:text-sm text-[#D8E2ED] italic leading-relaxed">
                    "{cs.clientQuote}"
                  </p>
                  <p className="text-xs font-bold text-[#E8A87C]">
                    — {cs.clientName}, {cs.clientRole}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. TESTIMONIAL DIRECTORY WITH FILTER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest text-[#C2824D] font-bold">
              Client Feedback
            </span>
            <h2 className="text-3xl font-serif text-[#141E28]">
              More Client Stories
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#141E28] text-white shadow-sm'
                    : 'bg-white text-[#525E6F] border border-[#D9D2C7] hover:bg-[#FAF8F5]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredTestimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white p-7 rounded-xl border border-[#E8E2D9] shadow-sm flex flex-col justify-between space-y-6"
            >
              <div className="space-y-3">
                <span className="px-2.5 py-0.5 bg-[#FAF8F5] border border-[#E0D7C9] text-[10px] font-semibold text-[#141E28] rounded">
                  {t.category}
                </span>
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
                  <p className="text-[11px] text-[#6E7B8C]">{t.role} • {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#141E28] text-white rounded-2xl p-8 sm:p-12 space-y-4">
          <h2 className="text-3xl font-serif text-[#FAF8F5]">
            Ready to Write Your Own Success Story?
          </h2>
          <p className="text-xs sm:text-sm text-[#AAB8C9] max-w-lg mx-auto">
            Book a 30-minute discovery conversation with Alex to explore your current challenges and potential solutions.
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
