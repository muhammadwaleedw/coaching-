import React from 'react';
import { PageId } from '../../types';
import { RESOURCES_DATA } from '../../data/coachingData';
import {
  BookOpen,
  FileText,
  Sparkles,
  Headphones,
  ArrowRight,
  Download,
  CheckCircle2,
  Calendar
} from 'lucide-react';

interface ResourcesViewProps {
  onNavigate: (page: PageId) => void;
  onOpenLeadMagnet: () => void;
  onOpenQuiz: () => void;
  onOpenBooking: () => void;
}

export const ResourcesView: React.FC<ResourcesViewProps> = ({
  onNavigate,
  onOpenLeadMagnet,
  onOpenQuiz,
  onOpenBooking,
}) => {
  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'Free Guide':
        return <BookOpen className="w-5 h-5 text-[#C2824D]" />;
      case 'Worksheet':
        return <FileText className="w-5 h-5 text-[#C2824D]" />;
      case 'Assessment':
        return <Sparkles className="w-5 h-5 text-[#C2824D]" />;
      case 'Audio Briefing':
      case 'Podcast':
        return <Headphones className="w-5 h-5 text-[#C2824D]" />;
      default:
        return <FileText className="w-5 h-5 text-[#C2824D]" />;
    }
  };

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      {/* 1. HERO */}
      <section className="pt-6 sm:pt-12 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFEAE2] border border-[#E0D7C9] text-xs font-semibold text-[#141E28] mb-6">
          <span className="w-2 h-2 rounded-full bg-[#C2824D]" />
          <span>Executive Toolkit & Resources</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#141E28] font-normal leading-tight">
          Tools for Leading, Thinking, <br />
          <span className="italic text-[#C2824D] font-light">
            and Deciding Better.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-[#525E6F] font-light leading-relaxed pt-4 max-w-2xl mx-auto">
          Complimentary workbooks, diagnostics, and decision-making frameworks drawn from hundreds of executive coaching engagements.
        </p>
      </section>

      {/* 2. FEATURED LEAD MAGNET HERO BOX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#141E28] to-[#1C2A39] text-white rounded-2xl p-8 sm:p-12 lg:p-14 border border-[#2D3E52] shadow-xl relative overflow-hidden">
          <div className="max-w-3xl space-y-5">
            <span className="px-3 py-1 bg-[#C2824D] text-white text-[10px] font-bold uppercase tracking-wider rounded">
              Featured 14-Page Diagnostic
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#FAF8F5] font-normal leading-tight">
              5 Questions Every Ambitious Leader Should Ask Before Their Next Big Move
            </h2>
            <p className="text-xs sm:text-sm text-[#AAB9CB] leading-relaxed">
              Designed to help you evaluate your current trajectory, uncover hidden motivations, and eliminate second-guessing before making your next career leap.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-[#D3DEEC] pt-2">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#8CE3A8]" /> Interactive workbook reader
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#8CE3A8]" /> Real-time reflection note saving
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#8CE3A8]" /> 100% Free instant access
              </span>
            </div>
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onOpenLeadMagnet}
                className="bg-[#C2824D] hover:bg-[#D5935E] text-white text-xs font-semibold px-7 py-3.5 rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer shadow"
              >
                <span>Read & Download Free Guide</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenQuiz}
                className="bg-[#26374A] hover:bg-[#2F445B] text-white text-xs font-medium px-6 py-3.5 rounded-lg border border-[#3C526D] flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#C2824D]" />
                <span>Take 3-Min Leadership Scorecard</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. RESOURCE DIRECTORY GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-1">
          <span className="text-xs uppercase tracking-widest text-[#C2824D] font-bold">
            Executive Library
          </span>
          <h2 className="text-3xl font-serif text-[#141E28]">
            Worksheets, Diagnostics & Masterclasses
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESOURCES_DATA.map((res) => (
            <div
              key={res.id}
              className="bg-white p-7 rounded-xl border border-[#E8E2D9] shadow-sm flex flex-col justify-between space-y-6 hover:border-[#C2824D] transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-[#FAF8F5] border border-[#E8E2D9] flex items-center justify-center">
                    {getResourceIcon(res.type)}
                  </div>
                  <span className="px-2.5 py-0.5 rounded bg-[#FAF8F5] border border-[#D9D2C7] text-[10px] font-bold text-[#141E28]">
                    {res.type}
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-semibold text-[#C2824D] uppercase tracking-wider">
                    {res.category}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#141E28]">
                    {res.title}
                  </h3>
                </div>

                <p className="text-xs text-[#556375] leading-relaxed">
                  {res.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E8E2D9] flex items-center justify-between">
                <span className="text-[11px] text-[#7A8798]">
                  {res.readTimeOrDuration}
                </span>
                <button
                  onClick={() => {
                    if (res.type === 'Assessment') {
                      onOpenQuiz();
                    } else {
                      onOpenLeadMagnet();
                    }
                  }}
                  className="text-xs font-bold text-[#141E28] hover:text-[#C2824D] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>{res.type === 'Assessment' ? 'Launch Tool' : 'Access'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
