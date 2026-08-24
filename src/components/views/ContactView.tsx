import React, { useState } from 'react';
import { PageId } from '../../types';
import { COACH_PROFILE } from '../../data/coachingData';
import {
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Calendar,
  Shield,
  MessageSquare
} from 'lucide-react';

interface ContactViewProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({
  onNavigate,
  onOpenBooking,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    inquiryType: 'Executive 1:1 Coaching',
    budgetRange: '$5,000 - $10,000',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      {/* HERO */}
      <section className="pt-6 sm:pt-12 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFEAE2] border border-[#E0D7C9] text-xs font-semibold text-[#141E28] mb-6">
          <span className="w-2 h-2 rounded-full bg-[#C2824D]" />
          <span>Get in Touch</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#141E28] font-normal leading-tight">
          Let’s Start a Conversation.
        </h1>

        <p className="text-base sm:text-lg text-[#525E6F] font-light leading-relaxed pt-4 max-w-2xl mx-auto">
          Whether you’re interested in 1:1 executive coaching, a keynote workshop, or simply exploring organizational alignment, reach out below.
        </p>
      </section>

      {/* CONTACT GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Details & Quick Discovery */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-8 rounded-2xl border border-[#E8E2D9] shadow-sm space-y-6">
              <h2 className="font-serif text-2xl font-bold text-[#141E28]">
                Direct Contact Details
              </h2>
              <div className="space-y-4 text-xs text-[#525E6F]">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#C2824D] shrink-0" />
                  <span>{COACH_PROFILE.contactEmail}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#C2824D] shrink-0" />
                  <span>{COACH_PROFILE.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#C2824D] shrink-0" />
                  <span>Response Time: Typically within 24 business hours</span>
                </div>
              </div>
            </div>

            <div className="bg-[#141E28] text-white p-8 rounded-2xl border border-[#2B3B4E] space-y-4">
              <h3 className="font-serif text-xl font-bold text-[#FAF8F5]">
                Prefer Direct Calendar Booking?
              </h3>
              <p className="text-xs text-[#AAB8C9] leading-relaxed">
                Skip the back-and-forth email scheduling. Select an available slot directly on Alex’s executive calendar.
              </p>
              <button
                onClick={onOpenBooking}
                className="w-full bg-[#C2824D] hover:bg-[#D5935E] text-white py-3 rounded text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow"
              >
                <Calendar className="w-4 h-4" />
                <span>Open Booking Calendar</span>
              </button>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-2xl border border-[#E8E2D9] shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-12 h-12 rounded-full bg-green-100 text-green-800 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#141E28]">
                  Thank You for Reaching Out
                </h3>
                <p className="text-xs sm:text-sm text-[#556375] max-w-md mx-auto">
                  Your message has been delivered directly to Alex Morgan’s desk. We will review your inquiry and follow up within 24 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-bold text-[#C2824D] hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="font-serif text-2xl font-bold text-[#141E28]">
                  Send an Inquiry
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#141E28]">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. Jordan Hayes"
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F5] border border-[#D9D2C7] rounded-lg focus:outline-none focus:border-[#C2824D] text-[#141E28]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#141E28]">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="jordan@company.com"
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F5] border border-[#D9D2C7] rounded-lg focus:outline-none focus:border-[#C2824D] text-[#141E28]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#141E28]">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      placeholder="e.g. Acme Health"
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F5] border border-[#D9D2C7] rounded-lg focus:outline-none focus:border-[#C2824D] text-[#141E28]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#141E28]">
                      Current Role / Title
                    </label>
                    <input
                      type="text"
                      value={formData.role}
                      onChange={(e) =>
                        setFormData({ ...formData, role: e.target.value })
                      }
                      placeholder="e.g. VP of Engineering"
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F5] border border-[#D9D2C7] rounded-lg focus:outline-none focus:border-[#C2824D] text-[#141E28]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#141E28]">
                      Inquiry Focus *
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) =>
                        setFormData({ ...formData, inquiryType: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F5] border border-[#D9D2C7] rounded-lg focus:outline-none focus:border-[#C2824D] text-[#141E28]"
                    >
                      <option>Executive 1:1 Coaching</option>
                      <option>Next-Level Leadership Accelerator (12-Week)</option>
                      <option>Founder / CEO Advisory</option>
                      <option>Career Strategy Intensive</option>
                      <option>Corporate Workshop / Speaking</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#141E28]">
                      Estimated Budget Range
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) =>
                        setFormData({ ...formData, budgetRange: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F5] border border-[#D9D2C7] rounded-lg focus:outline-none focus:border-[#C2824D] text-[#141E28]"
                    >
                      <option>$3,000 - $5,000</option>
                      <option>$5,000 - $10,000</option>
                      <option>$10,000 - $25,000</option>
                      <option>$25,000+ (Corporate Retainer)</option>
                      <option>Company L&D / Seeking Quote</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#141E28]">
                    What is the primary challenge or objective you are looking to address? *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Briefly describe your current situation, upcoming transitions, or what success looks like for you..."
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F5] border border-[#D9D2C7] rounded-lg focus:outline-none focus:border-[#C2824D] text-[#141E28]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#141E28] hover:bg-[#C2824D] text-white py-3.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer flex items-center justify-center gap-2 shadow"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
