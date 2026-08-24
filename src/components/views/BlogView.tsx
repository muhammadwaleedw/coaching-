import React, { useState } from 'react';
import { PageId, BlogPost } from '../../types';
import { BLOG_POSTS_DATA } from '../../data/coachingData';
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  Search,
  Sparkles
} from 'lucide-react';

interface BlogViewProps {
  onNavigate: (page: PageId, extraData?: any) => void;
}

export const BlogView: React.FC<BlogViewProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Leadership',
    'Decision Making',
    'Executive Presence',
    'Personal Growth',
    'Career'
  ];

  const filteredPosts = BLOG_POSTS_DATA.filter((post) => {
    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      {/* HERO */}
      <section className="pt-6 sm:pt-12 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFEAE2] border border-[#E0D7C9] text-xs font-semibold text-[#141E28] mb-6">
          <span className="w-2 h-2 rounded-full bg-[#C2824D]" />
          <span>Editorial Insights & Essays</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#141E28] font-normal leading-tight">
          Ideas for Leading, Growing, <br />
          <span className="italic text-[#C2824D] font-light">
            and Thinking Better.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-[#525E6F] font-light leading-relaxed pt-4 max-w-2xl mx-auto">
          Thoughtful, long-form essays on executive decision velocity, high-trust delegation, and sustainable leadership impact.
        </p>
      </section>

      {/* SEARCH & FILTERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-[#E8E2D9] shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#8C98A8] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles & topics..."
              className="w-full pl-9 pr-4 py-2 text-xs bg-[#FAF8F5] border border-[#D9D2C7] rounded-lg focus:outline-none focus:border-[#C2824D] text-[#141E28]"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
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

      {/* ARTICLES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => onNavigate('blog-article', { postId: post.id })}
              className="bg-white rounded-2xl border border-[#E8E2D9] overflow-hidden shadow-sm hover:shadow-md hover:border-[#C2824D] transition-all duration-300 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="h-56 w-full overflow-hidden relative">
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 rounded bg-[#141E28]/85 backdrop-blur-sm text-white text-[10px] uppercase font-bold tracking-wider">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-7 sm:p-8 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-[#7B8797]">
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

                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#141E28] group-hover:text-[#C2824D] transition-colors leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-[#556375] leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-7 sm:px-8 pb-7 pt-2 flex items-center justify-between border-t border-[#FAF8F5]">
                <span className="text-xs font-bold text-[#141E28] group-hover:text-[#C2824D] flex items-center gap-1.5 transition-colors">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
