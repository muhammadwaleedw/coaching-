import React from 'react';
import { PageId, BlogPost } from '../../types';
import { BLOG_POSTS_DATA, COACH_PROFILE } from '../../data/coachingData';
import {
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  Share2,
  Bookmark,
  CheckCircle2,
  BookOpen,
  Calendar as CalendarIcon,
  Quote
} from 'lucide-react';

interface BlogArticleViewProps {
  postId?: string;
  onNavigate: (page: PageId, extraData?: any) => void;
  onOpenBooking: () => void;
  onOpenLeadMagnet: () => void;
}

export const BlogArticleView: React.FC<BlogArticleViewProps> = ({
  postId = 'bp-1',
  onNavigate,
  onOpenBooking,
  onOpenLeadMagnet,
}) => {
  const post =
    BLOG_POSTS_DATA.find((p) => p.id === postId) || BLOG_POSTS_DATA[0];

  const relatedPosts = BLOG_POSTS_DATA.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* 1. ARTICLE HEADER */}
      <article className="pt-4 max-w-4xl mx-auto px-4 sm:px-6">
        <button
          onClick={() => onNavigate('blog')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#667384] hover:text-[#141E28] mb-6 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Articles</span>
        </button>

        <div className="space-y-4">
          <span className="px-3 py-1 bg-[#FAF8F5] border border-[#E0D7C9] text-xs font-bold text-[#C2824D] rounded-full uppercase tracking-wider">
            {post.category}
          </span>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#141E28] leading-[1.2]">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-[#E8E2D9] text-xs text-[#6B7788]">
            <div className="flex items-center gap-3">
              <img
                src={COACH_PROFILE.portraitSecondary}
                alt="Alex Morgan"
                className="w-9 h-9 rounded-full object-cover border border-[#D9D2C7]"
              />
              <div>
                <span className="block font-bold text-[#141E28]">Alex Morgan, MCC</span>
                <span className="text-[11px] text-[#7E8B9C]">Executive & Leadership Coach</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#C2824D]" />
                {post.publishedDate}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#C2824D]" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="my-8 rounded-2xl overflow-hidden shadow-lg border border-[#E8E2D9] max-h-[440px]">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Layout (Content + Sidebar) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Body Copy */}
          <div className="lg:col-span-8 space-y-6 text-sm sm:text-base text-[#3E4A59] leading-relaxed font-light">
            {post.content.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}

            {/* Pull Quote */}
            {post.pullQuote && (
              <div className="my-8 p-6 sm:p-8 bg-[#FAF8F5] border-l-4 border-[#C2824D] rounded-r-xl space-y-2">
                <Quote className="w-6 h-6 text-[#C2824D]/40" />
                <p className="font-serif text-lg sm:text-xl text-[#141E28] italic font-normal leading-snug">
                  "{post.pullQuote}"
                </p>
              </div>
            )}

            {/* Key Takeaways Box */}
            <div className="my-8 p-6 bg-white rounded-xl border border-[#E8E2D9] shadow-sm space-y-3">
              <h3 className="font-serif text-lg font-bold text-[#141E28]">
                Key Takeaways for Senior Leaders
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#4E5A6B]">
                {post.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C2824D] shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Inline Lead Magnet */}
            <div className="my-8 p-6 bg-[#FAF8F5] border border-[#E8E2D9] rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="font-serif text-base font-bold text-[#141E28]">
                  Want to audit your leadership clarity?
                </h4>
                <p className="text-xs text-[#637082]">
                  Download our free 14-page diagnostic guide with 5 core questions.
                </p>
              </div>
              <button
                onClick={onOpenLeadMagnet}
                className="bg-[#141E28] hover:bg-[#C2824D] text-white text-xs font-semibold px-4 py-2.5 rounded whitespace-nowrap transition-colors cursor-pointer"
              >
                Get Free Guide
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6 sticky top-24">
            {/* Sidebar CTA */}
            <div className="bg-[#141E28] text-white p-6 rounded-xl border border-[#2E3C4E] space-y-4 text-center">
              <h4 className="font-serif text-xl font-bold text-white">
                Need Clarity in Your Leadership?
              </h4>
              <p className="text-xs text-[#A8B7C7] leading-relaxed">
                Step back and examine your biggest challenge in a complimentary 30-minute discovery call with Alex.
              </p>
              <button
                onClick={onOpenBooking}
                className="w-full bg-[#C2824D] hover:bg-[#D5935E] text-white py-3 rounded text-xs font-semibold transition-colors cursor-pointer shadow"
              >
                Book a Discovery Call
              </button>
            </div>

            {/* Author Card */}
            <div className="bg-white p-6 rounded-xl border border-[#E8E2D9] space-y-3">
              <div className="flex items-center gap-3">
                <img
                  src={COACH_PROFILE.portraitSecondary}
                  alt="Alex Morgan"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-serif text-base font-bold text-[#141E28]">
                    Alex Morgan
                  </h4>
                  <p className="text-[11px] text-[#C2824D] font-semibold uppercase">
                    Executive Coach
                  </p>
                </div>
              </div>
              <p className="text-xs text-[#5C6777] leading-relaxed">
                {COACH_PROFILE.shortBio}
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* 2. RELATED POSTS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 border-t border-[#E8E2D9] pt-12 space-y-6">
        <h3 className="font-serif text-2xl font-bold text-[#141E28]">
          Related Essays
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {relatedPosts.map((r) => (
            <div
              key={r.id}
              onClick={() => onNavigate('blog-article', { postId: r.id })}
              className="bg-white p-6 rounded-xl border border-[#E8E2D9] hover:border-[#C2824D] transition-all cursor-pointer space-y-2 shadow-sm"
            >
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#C2824D]">
                {r.category}
              </span>
              <h4 className="font-serif text-lg font-bold text-[#141E28] hover:text-[#C2824D] transition-colors">
                {r.title}
              </h4>
              <p className="text-xs text-[#637082] line-clamp-2">
                {r.excerpt}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
