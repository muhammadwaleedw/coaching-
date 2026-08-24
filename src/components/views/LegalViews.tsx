import React from 'react';
import { PageId } from '../../types';
import { Shield, FileText, ArrowLeft, AlertCircle } from 'lucide-react';

interface LegalViewProps {
  pageId: 'privacy' | 'terms' | '404';
  onNavigate: (page: PageId) => void;
}

export const LegalViews: React.FC<LegalViewProps> = ({ pageId, onNavigate }) => {
  if (pageId === '404') {
    return (
      <div className="py-20 max-w-2xl mx-auto px-4 text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-[#FAF8F5] border border-[#D9D2C7] flex items-center justify-center mx-auto text-[#C2824D]">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#141E28]">
          Page Not Found
        </h1>
        <p className="text-xs sm:text-sm text-[#525E6F]">
          The page you are looking for might have been moved, renamed, or is temporarily unavailable.
        </p>
        <button
          onClick={() => onNavigate('home')}
          className="bg-[#141E28] hover:bg-[#C2824D] text-white text-xs font-semibold px-6 py-3 rounded transition-colors cursor-pointer"
        >
          Return to Homepage
        </button>
      </div>
    );
  }

  if (pageId === 'privacy') {
    return (
      <div className="py-12 max-w-3xl mx-auto px-4 sm:px-6 space-y-8">
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#667384] hover:text-[#141E28] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        <div className="space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#C2824D] font-bold">
            Legal & Compliance
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#141E28]">
            Privacy Policy
          </h1>
          <p className="text-xs text-[#7B8797]">Last updated: March 2026</p>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-[#E8E2D9] shadow-sm text-xs sm:text-sm text-[#4E5B6D] space-y-5 leading-relaxed">
          <p>
            At <strong>Alex Morgan Coaching</strong>, we take the confidentiality and privacy of our clients and website visitors with the utmost seriousness.
          </p>
          <h3 className="font-serif text-base font-bold text-[#141E28]">
            1. Collection of Personal Information
          </h3>
          <p>
            We collect personal information that you voluntarily provide when booking a discovery call, submitting an application, downloading our lead magnets, or signing up for our newsletter. This includes your name, email address, job title, company, and leadership context notes.
          </p>
          <h3 className="font-serif text-base font-bold text-[#141E28]">
            2. Executive Coaching Confidentiality
          </h3>
          <p>
            All coaching discussions, diagnostic assessments, stakeholder feedback, and corporate strategy discussions adhere to the strict Code of Ethics of the International Coaching Federation (ICF). Nothing discussed in a coaching session is ever disclosed without your explicit written authorization.
          </p>
          <h3 className="font-serif text-base font-bold text-[#141E28]">
            3. Use of Data
          </h3>
          <p>
            Your information is used solely to deliver coaching services, facilitate calendar bookings, dispatch requested materials, and provide relevant executive insights. We never sell, rent, or trade your personal information to third parties.
          </p>
          <h3 className="font-serif text-base font-bold text-[#141E28]">
            4. Contact Us
          </h3>
          <p>
            If you have questions regarding this Privacy Policy, please contact us at <code>privacy@alexmorgancoaching.com</code>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 max-w-3xl mx-auto px-4 sm:px-6 space-y-8">
      <button
        onClick={() => onNavigate('home')}
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#667384] hover:text-[#141E28] transition-colors cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Home</span>
      </button>

      <div className="space-y-3">
        <span className="text-xs uppercase tracking-widest text-[#C2824D] font-bold">
          Legal & Agreements
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#141E28]">
          Terms & Conditions
        </h1>
        <p className="text-xs text-[#7B8797]">Last updated: March 2026</p>
      </div>

      <div className="bg-white p-8 rounded-2xl border border-[#E8E2D9] shadow-sm text-xs sm:text-sm text-[#4E5B6D] space-y-5 leading-relaxed">
        <p>
          Welcome to the website of <strong>Alex Morgan Coaching</strong>. By accessing or using our website and services, you agree to comply with and be bound by the following terms.
        </p>
        <h3 className="font-serif text-base font-bold text-[#141E28]">
          1. Professional Services Disclaimer
        </h3>
        <p>
          Executive coaching is a collaborative partnership designed to enhance professional leadership and strategic decision-making. Coaching is not psychotherapy, medical advice, legal counsel, or financial advisory.
        </p>
        <h3 className="font-serif text-base font-bold text-[#141E28]">
          2. Intellectual Property
        </h3>
        <p>
          All diagnostic frameworks, workbooks, worksheets, and website copy are the exclusive intellectual property of Alex Morgan Coaching. Clients receive a non-exclusive license to use these materials for their personal and organizational leadership development.
        </p>
        <h3 className="font-serif text-base font-bold text-[#141E28]">
          3. Cancellation & Rescheduling Policy
        </h3>
        <p>
          Discovery calls and coaching sessions may be rescheduled with at least 24 hours advance notice via our automated booking platform.
        </p>
      </div>
    </div>
  );
};
