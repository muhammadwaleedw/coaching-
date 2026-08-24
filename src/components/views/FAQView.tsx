import React, { useState } from 'react';
import { PageId } from '../../types';
import { FAQS_DATA } from '../../data/coachingData';
import {
  HelpCircle,
  ChevronDown,
  Search,
  Calendar,
  Sparkles,
  MessageSquare
} from 'lucide-react';

interface FAQViewProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const FAQView: React.FC<FAQViewProps> = ({ onNavigate, onOpenBooking }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedId, setExpandedId] = useState<string | null>('faq-1');

  const categories = [
    'All',
    'General',
    'Process',
    'Eligibility',
    'Outcomes',
    'Confidentiality',
    'Logistics',
    'Investment'
  ];

  const filteredFaqs = FAQS_DATA.filter((faq) => {
    const matchesCat =
      selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      {/* HERO */}
      <section className="pt-6 sm:pt-12 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFEAE2] border border-[#E0D7C9] text-xs font-semibold text-[#141E28] mb-6">
          <span className="w-2 h-2 rounded-full bg-[#C2824D]" />
          <span>Clarity & FAQs</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#141E28] font-normal leading-tight">
          Frequently Asked Questions. <br />
          <span className="italic text-[#C2824D] font-light">
            Everything You Need to Know.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-[#525E6F] font-light leading-relaxed pt-4 max-w-2xl mx-auto">
          Honest, transparent answers about how coaching works, what to expect, investment, and how we measure success.
        </p>
      </section>

      {/* SEARCH & CATEGORY FILTER */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-[#E8E2D9] shadow-sm space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-[#8C98A8] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search frequently asked questions..."
              className="w-full pl-9 pr-4 py-2.5 text-xs bg-[#FAF8F5] border border-[#D9D2C7] rounded-lg focus:outline-none focus:border-[#C2824D] text-[#141E28]"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#141E28] text-white shadow-sm'
                    : 'bg-[#FAF8F5] text-[#556272] border border-[#D9D2C7] hover:bg-[#EFEAE2]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ACCORDION LIST */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
        {filteredFaqs.map((faq) => {
          const isExpanded = expandedId === faq.id;
          return (
            <div
              key={faq.id}
              className="bg-white rounded-xl border border-[#E8E2D9] overflow-hidden transition-all shadow-sm"
            >
              <button
                onClick={() => toggleAccordion(faq.id)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF8F5]/60 transition-colors"
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-[#C2824D] uppercase tracking-wider block">
                    {faq.category}
                  </span>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#141E28]">
                    {faq.question}
                  </h3>
                </div>
                <div
                  className={`w-7 h-7 rounded-full bg-[#FAF8F5] border border-[#D9D2C7] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isExpanded ? 'rotate-180 bg-[#141E28] text-white border-[#141E28]' : 'text-[#141E28]'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isExpanded && (
                <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-[#525E6F] leading-relaxed border-t border-[#FAF8F5] bg-[#FAF8F5]/30">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* STILL HAVE QUESTIONS CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-[#141E28] text-white rounded-2xl p-8 sm:p-10 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-serif text-[#FAF8F5]">
            Have a question not listed here?
          </h2>
          <p className="text-xs sm:text-sm text-[#AAB8C9] max-w-md mx-auto">
            Reach out directly or schedule a discovery call to talk through your specific requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <button
              onClick={onOpenBooking}
              className="bg-[#C2824D] hover:bg-[#D5935E] text-white text-xs font-semibold px-6 py-3 rounded shadow transition-colors cursor-pointer"
            >
              Book a Discovery Call
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-transparent hover:bg-white/10 text-white text-xs font-semibold px-6 py-3 rounded border border-white/20 transition-colors cursor-pointer"
            >
              Send an Email Inquiry
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
