import React, { useState, useEffect } from 'react';
import { PageId } from '../../types';
import { Menu, X, ArrowRight, BookOpen, Calendar, Phone, Sparkles } from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId, extraData?: any) => void;
  onOpenBooking: () => void;
  onOpenLeadMagnet: () => void;
  onOpenQuiz: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenBooking,
  onOpenLeadMagnet,
  onOpenQuiz
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; page: PageId }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Coaching', page: 'coaching' },
    { label: 'Programs', page: 'programs' },
    { label: 'Results', page: 'results' },
    { label: 'Resources', page: 'resources' },
    { label: 'Blog', page: 'blog' },
    { label: 'FAQ', page: 'faq' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleLinkClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Banner for Lead Magnet / Diagnostic */}
      <div className="bg-[#141E28] text-[#FAF8F5] text-xs py-2 px-4 border-b border-[#2C3847]/40">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-[#C2824D] text-white uppercase tracking-wider">
              Free Guide
            </span>
            <span className="text-[#D9D2C7] hidden sm:inline">
              "5 Questions Every Ambitious Leader Should Ask Before Their Next Big Move"
            </span>
            <span className="text-[#D9D2C7] sm:hidden">
              Free Leadership Clarity Guide
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <button
              onClick={onOpenLeadMagnet}
              className="font-medium text-[#E8A87C] hover:text-white underline underline-offset-2 flex items-center gap-1 transition-colors cursor-pointer"
            >
              Download Guide <ArrowRight className="w-3 h-3" />
            </button>
            <span className="text-white/20 hidden md:inline">•</span>
            <button
              onClick={onOpenQuiz}
              className="hidden md:flex items-center gap-1 text-[#D9D2C7] hover:text-white transition-colors cursor-pointer"
            >
              <Sparkles className="w-3 h-3 text-[#C2824D]" /> Take 3-Min Leadership Scorecard
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm border-b border-[#E8E2D9] py-3'
            : 'bg-[#FAF8F5] py-5 border-b border-[#E8E2D9]/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              id="header-logo-btn"
              onClick={() => handleLinkClick('home')}
              className="text-left group cursor-pointer"
            >
              <span className="font-serif text-2xl font-bold tracking-tight text-[#141E28] block group-hover:text-[#C2824D] transition-colors">
                Alex Morgan
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#6E7787] block -mt-1">
                Executive & Leadership Coach
              </span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => {
                const isActive =
                  currentPage === link.page ||
                  (link.page === 'coaching' && currentPage.startsWith('coaching-')) ||
                  (link.page === 'programs' && currentPage === 'program-detail') ||
                  (link.page === 'blog' && currentPage === 'blog-article');

                return (
                  <button
                    key={link.page}
                    id={`nav-${link.page}`}
                    onClick={() => handleLinkClick(link.page)}
                    className={`text-sm font-medium transition-all duration-200 relative py-1 cursor-pointer ${
                      isActive
                        ? 'text-[#141E28] font-semibold'
                        : 'text-[#525B67] hover:text-[#141E28]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C2824D] rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                id="header-explore-btn"
                onClick={() => handleLinkClick('coaching')}
                className="text-xs font-semibold text-[#141E28] hover:text-[#C2824D] px-3 py-2 transition-colors cursor-pointer"
              >
                Explore Coaching
              </button>
              <button
                id="header-book-btn"
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 bg-[#141E28] hover:bg-[#C2824D] text-[#FAF8F5] text-xs font-semibold px-4 py-2.5 rounded shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book a Discovery Call</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                id="mobile-quick-book-btn"
                onClick={onOpenBooking}
                className="bg-[#141E28] text-white text-xs font-semibold px-3 py-2 rounded flex items-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Call</span>
              </button>
              <button
                id="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#141E28] hover:text-[#C2824D] focus:outline-none rounded"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#E8E2D9] bg-[#FAF8F5] px-4 pt-3 pb-6 space-y-2 shadow-lg animate-fadeIn">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.page}
                  onClick={() => handleLinkClick(link.page)}
                  className={`w-full text-left px-3 py-2.5 rounded text-sm font-medium transition-colors ${
                    currentPage === link.page
                      ? 'bg-[#EFEAE2] text-[#141E28] font-bold'
                      : 'text-[#4A5462] hover:bg-[#F3EFEA] hover:text-[#141E28]'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-[#E8E2D9] space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-[#141E28] hover:bg-[#C2824D] text-white py-3 rounded text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Discovery Call</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLeadMagnet();
                }}
                className="w-full bg-[#F3EFEA] hover:bg-[#EAE4DC] text-[#141E28] py-2.5 rounded text-sm font-medium flex items-center justify-center gap-2 border border-[#D9D2C7] transition-colors"
              >
                <BookOpen className="w-4 h-4 text-[#C2824D]" />
                <span>Get Free Guide (5 Questions)</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
