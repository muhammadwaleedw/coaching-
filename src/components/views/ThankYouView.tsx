import React from 'react';
import { PageId } from '../../types';
import { CheckCircle2, ArrowRight, BookOpen, Calendar, Mail } from 'lucide-react';

interface ThankYouViewProps {
  onNavigate: (page: PageId) => void;
  onOpenLeadMagnet: () => void;
  onOpenBooking: () => void;
}

export const ThankYouView: React.FC<ThankYouViewProps> = ({
  onNavigate,
  onOpenLeadMagnet,
  onOpenBooking,
}) => {
  return (
    <div className="py-12 sm:py-20 max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-8">
      <div className="w-16 h-16 rounded-full bg-green-100 text-green-800 flex items-center justify-center mx-auto border border-green-200">
        <CheckCircle2 className="w-8 h-8" />
      </div>

      <div className="space-y-3">
        <span className="text-xs uppercase tracking-widest text-[#C2824D] font-bold">
          Submission Received
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#141E28]">
          Thank You for Taking Action.
        </h1>
        <p className="text-sm sm:text-base text-[#525E6F] max-w-xl mx-auto font-light leading-relaxed">
          Your details have been securely transmitted. A personal confirmation email is on its way to your inbox.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl border border-[#E8E2D9] shadow-sm text-left space-y-4">
        <h3 className="font-serif text-lg font-bold text-[#141E28] border-b border-[#E8E2D9] pb-3">
          Recommended Next Steps While You Wait
        </h3>
        <div className="space-y-3 text-xs text-[#525E6F]">
          <div className="flex items-start gap-3">
            <span className="w-5 h-5 rounded-full bg-[#141E28] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
              1
            </span>
            <p>
              <strong className="text-[#141E28]">Check your inbox:</strong> Add <code>hello@alexmorgancoaching.com</code> to your contacts to ensure calendar invites and workbook links don't get trapped in spam.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-5 h-5 rounded-full bg-[#141E28] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
              2
            </span>
            <p>
              <strong className="text-[#141E28]">Read the Guide:</strong> If you requested the 14-page diagnostic workbook, take 10 quiet minutes to complete the reflection exercises.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-5 h-5 rounded-full bg-[#141E28] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
              3
            </span>
            <p>
              <strong className="text-[#141E28]">Explore client journeys:</strong> Read our detailed transformation case studies to see how peer executives approached similar inflection points.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3 pt-4">
        <button
          onClick={() => onNavigate('results')}
          className="bg-[#141E28] hover:bg-[#C2824D] text-white text-xs font-semibold px-6 py-3 rounded transition-colors cursor-pointer"
        >
          Explore Case Studies
        </button>
        <button
          onClick={() => onNavigate('home')}
          className="bg-transparent hover:bg-[#FAF8F5] text-[#141E28] text-xs font-semibold px-6 py-3 rounded border border-[#D9D2C7] transition-colors cursor-pointer"
        >
          Return to Homepage
        </button>
      </div>
    </div>
  );
};
