import React, { useState } from 'react';
import { PageId } from '../../types';
import { Mail, ArrowRight, ShieldCheck, Linkedin, Youtube, Instagram, CheckCircle2, Award } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
  onOpenLeadMagnet: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenBooking,
  onOpenLeadMagnet
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubscribed(true);
  };

  return (
    <footer className="bg-[#141E28] text-[#D9D2C7] pt-16 pb-12 border-t border-[#222E3C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Upper CTA Banner in Footer */}
        <div className="bg-[#1B2735] border border-[#2D3C4E] rounded-2xl p-8 sm:p-12 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C2824D]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#E8A87C] font-semibold">
                Start With a Conversation
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#FAF8F5] font-normal leading-tight">
                Let’s talk about where you want to go.
              </h2>
              <p className="text-sm sm:text-base text-[#A8B2C1] max-w-2xl font-light">
                You don’t need to have everything figured out before you reach out. That’s what the conversation is for. 30 minutes, zero sales pressure.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <button
                id="footer-cta-book-btn"
                onClick={onOpenBooking}
                className="w-full bg-[#C2824D] hover:bg-[#D5935E] text-white py-3.5 px-6 rounded text-sm font-semibold flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
              >
                <span>Book a Discovery Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                id="footer-cta-guide-btn"
                onClick={onOpenLeadMagnet}
                className="w-full bg-[#223042] hover:bg-[#2B3B50] text-[#FAF8F5] py-3 px-6 rounded text-sm font-medium flex items-center justify-center gap-2 border border-[#34465E] transition-colors cursor-pointer"
              >
                <span>Get the Free Guide</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Directory Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#253344]">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="space-y-1">
              <h3 className="font-serif text-2xl font-bold text-[#FAF8F5]">Alex Morgan</h3>
              <p className="text-xs uppercase tracking-[0.2em] text-[#C2824D] font-semibold">
                Executive & Leadership Coach
              </p>
            </div>
            <p className="text-sm text-[#9AA5B6] leading-relaxed max-w-sm">
              Helping ambitious leaders become more confident, clear, and effective—without sacrificing who they are.
            </p>
            <div className="flex items-center gap-3 pt-2 text-xs text-[#7B8797]">
              <Award className="w-4 h-4 text-[#C2824D]" />
              <span>ICF Master Certified Coach (MCC) • 14+ Years</span>
            </div>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#1E2C3C] flex items-center justify-center text-[#B8C3D2] hover:text-white hover:bg-[#C2824D] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#1E2C3C] flex items-center justify-center text-[#B8C3D2] hover:text-white hover:bg-[#C2824D] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#1E2C3C] flex items-center justify-center text-[#B8C3D2] hover:text-white hover:bg-[#C2824D] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Explore Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-[#FAF8F5] font-semibold">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-[#9AA5B6]">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#E8A87C] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#E8A87C] transition-colors"
                >
                  About Alex
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('coaching')}
                  className="hover:text-[#E8A87C] transition-colors"
                >
                  Coaching Philosophy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('programs')}
                  className="hover:text-[#E8A87C] transition-colors"
                >
                  Programs & Packages
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('results')}
                  className="hover:text-[#E8A87C] transition-colors"
                >
                  Client Results & Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('resources')}
                  className="hover:text-[#E8A87C] transition-colors"
                >
                  Free Resources & Tools
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('blog')}
                  className="hover:text-[#E8A87C] transition-colors"
                >
                  Editorial Articles
                </button>
              </li>
            </ul>
          </div>

          {/* Work With Me */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-[#FAF8F5] font-semibold">
              Work With Me
            </h4>
            <ul className="space-y-2 text-sm text-[#9AA5B6]">
              <li>
                <button
                  onClick={() => onNavigate('coaching-executive')}
                  className="hover:text-[#E8A87C] transition-colors"
                >
                  Executive Coaching
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('coaching-leadership')}
                  className="hover:text-[#E8A87C] transition-colors"
                >
                  Leadership Coaching
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('coaching-career')}
                  className="hover:text-[#E8A87C] transition-colors"
                >
                  Career Coaching
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('coaching-founder')}
                  className="hover:text-[#E8A87C] transition-colors"
                >
                  Founder Coaching
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('program-detail')}
                  className="hover:text-[#E8A87C] transition-colors"
                >
                  12-Week Accelerator
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('apply')}
                  className="hover:text-[#E8A87C] transition-colors"
                >
                  Apply for Coaching
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#E8A87C] transition-colors"
                >
                  Speaking & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Opt-in */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-[#FAF8F5] font-semibold">
              The Leadership Letter
            </h4>
            <p className="text-xs text-[#9AA5B6] leading-relaxed">
              One thoughtful email each week. Practical ideas on leading, deciding, and performing without burnout.
            </p>
            {subscribed ? (
              <div className="bg-[#1C2C3E] p-3 rounded border border-[#2D435E] text-xs text-[#8CE3A8] flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                <span>You’re subscribed. Thank you for reading.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your work email"
                    className="w-full bg-[#1A2634] text-white text-xs px-3.5 py-2.5 rounded border border-[#2F4054] focus:outline-none focus:border-[#C2824D] placeholder-[#5E6D80]"
                  />
                </div>
                {error && <p className="text-[11px] text-[#F87171]">{error}</p>}
                <button
                  type="submit"
                  className="w-full bg-[#2A3B4E] hover:bg-[#C2824D] text-white text-xs font-semibold py-2.5 px-3 rounded transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Subscribe Weekly</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <p className="text-[10px] text-[#69778A]">
                  No spam. Unsubscribe at any time.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#738092] gap-4">
          <div>
            © {new Date().getFullYear()} Alex Morgan Coaching LLC. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('privacy')}
              className="hover:text-[#D9D2C7] transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onNavigate('terms')}
              className="hover:text-[#D9D2C7] transition-colors"
            >
              Terms & Conditions
            </button>
            <button
              onClick={() => onNavigate('faq')}
              className="hover:text-[#D9D2C7] transition-colors"
            >
              Client FAQ
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
