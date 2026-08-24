import React, { useState } from 'react';
import { PageId } from '../../types';
import { COACH_PROFILE } from '../../data/coachingData';
import {
  Calendar,
  Clock,
  Video,
  Shield,
  CheckCircle2,
  ArrowRight,
  User,
  Mail,
  Briefcase
} from 'lucide-react';

interface DiscoveryCallViewProps {
  onNavigate: (page: PageId) => void;
}

export const DiscoveryCallView: React.FC<DiscoveryCallViewProps> = ({
  onNavigate,
}) => {
  const [selectedDate, setSelectedDate] = useState<string>('2026-03-24');
  const [selectedTime, setSelectedTime] = useState<string>('10:00 AM');
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    currentSituation: '',
    primaryGoal: '',
  });
  const [booked, setBooked] = useState(false);

  const availableDates = [
    { label: 'Tue, Mar 24', value: '2026-03-24', slots: ['10:00 AM', '1:00 PM', '3:30 PM'] },
    { label: 'Wed, Mar 25', value: '2026-03-25', slots: ['9:30 AM', '11:00 AM', '2:00 PM'] },
    { label: 'Thu, Mar 26', value: '2026-03-26', slots: ['10:00 AM', '1:30 PM', '4:00 PM'] },
    { label: 'Fri, Mar 27', value: '2026-03-27', slots: ['11:00 AM', '2:30 PM'] },
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBooked(true);
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* HERO */}
      <section className="pt-6 sm:pt-12 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFEAE2] border border-[#E0D7C9] text-xs font-semibold text-[#141E28] mb-6">
          <span className="w-2 h-2 rounded-full bg-[#C2824D]" />
          <span>Complimentary Strategic Consultation</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#141E28] font-normal leading-tight">
          Book Your 30-Minute <br />
          <span className="italic text-[#C2824D] font-light">
            Leadership Discovery Call.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-[#525E6F] font-light leading-relaxed pt-4 max-w-2xl mx-auto">
          A zero-pressure, high-value conversation to evaluate where you are, identify your biggest leadership bottlenecks, and determine if our coaching approach is the right fit.
        </p>
      </section>

      {/* CALENDAR & INTAKE INTERFACE */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl border border-[#E8E2D9] shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column: Call Details */}
          <div className="lg:col-span-4 bg-[#141E28] text-white p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-white/10 pb-6">
                <img
                  src={COACH_PROFILE.portraitSecondary}
                  alt="Alex Morgan"
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#C2824D]"
                />
                <div>
                  <h3 className="font-serif text-base font-bold text-white">Alex Morgan</h3>
                  <p className="text-[11px] text-[#C5D0DC]">Executive & Leadership Coach</p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-[#C5D0DC]">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#E8A87C]" />
                  <span>30 Minutes</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Video className="w-4 h-4 text-[#E8A87C]" />
                  <span>Private Google Meet (Video / Audio)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Shield className="w-4 h-4 text-[#E8A87C]" />
                  <span>100% Confidential Conversation</span>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6 space-y-2">
                <h4 className="text-xs font-bold text-[#E8A87C] uppercase tracking-wider">
                  What we will cover:
                </h4>
                <ul className="text-xs text-[#A9B8C8] space-y-2">
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#E8A87C] font-bold">•</span>
                    <span>Your current leadership focus and friction points.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#E8A87C] font-bold">•</span>
                    <span>What a tailored 3–6 month trajectory would look like.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#E8A87C] font-bold">•</span>
                    <span>Mutual qualification and next steps.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-[11px] text-[#8695A6] border-t border-white/10 pt-4">
              Questions? Email us at hello@alexmorgancoaching.com
            </div>
          </div>

          {/* Right Column: Interactive Booking */}
          <div className="lg:col-span-8 p-8 sm:p-10">
            {booked ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-14 h-14 rounded-full bg-green-100 text-green-800 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#141E28]">
                  Discovery Call Confirmed!
                </h3>
                <p className="text-xs sm:text-sm text-[#556375] max-w-md mx-auto leading-relaxed">
                  We have reserved your session for <strong>{selectedDate} at {selectedTime}</strong>. A calendar invite with your private video link has been dispatched to <strong>{formData.email}</strong>.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => onNavigate('home')}
                    className="bg-[#141E28] hover:bg-[#C2824D] text-white text-xs font-semibold px-6 py-3 rounded transition-colors cursor-pointer"
                  >
                    Return to Homepage
                  </button>
                </div>
              </div>
            ) : (
              <div>
                {step === 1 ? (
                  <div className="space-y-6">
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#C2824D]">
                        Step 1 of 2
                      </span>
                      <h3 className="font-serif text-xl font-bold text-[#141E28]">
                        Select Date & Time (EST)
                      </h3>
                    </div>

                    {/* Date Selector */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {availableDates.map((d) => (
                        <button
                          key={d.value}
                          type="button"
                          onClick={() => {
                            setSelectedDate(d.value);
                            setSelectedTime(d.slots[0]);
                          }}
                          className={`p-3 rounded-lg border text-center transition-all cursor-pointer ${
                            selectedDate === d.value
                              ? 'bg-[#141E28] text-white border-[#141E28] shadow-sm'
                              : 'bg-[#FAF8F5] text-[#141E28] border-[#D9D2C7] hover:bg-[#EFEAE2]'
                          }`}
                        >
                          <span className="block text-xs font-bold">{d.label}</span>
                        </button>
                      ))}
                    </div>

                    {/* Time Selector */}
                    <div className="space-y-2">
                      <span className="text-xs font-semibold text-[#525E6F]">
                        Available times for selected date:
                      </span>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {availableDates
                          .find((d) => d.value === selectedDate)
                          ?.slots.map((t) => (
                            <button
                              key={t}
                              type="button"
                              onClick={() => setSelectedTime(t)}
                              className={`p-2.5 rounded-lg border text-xs font-semibold transition-all cursor-pointer ${
                                selectedTime === t
                                  ? 'bg-[#C2824D] text-white border-[#C2824D]'
                                  : 'bg-white text-[#141E28] border-[#D9D2C7] hover:border-[#C2824D]'
                              }`}
                            >
                              {t}
                            </button>
                          ))}
                      </div>
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="bg-[#141E28] hover:bg-[#C2824D] text-white text-xs font-semibold px-6 py-3 rounded flex items-center gap-2 transition-colors cursor-pointer"
                      >
                        <span>Continue to Intake Questions</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleBooking} className="space-y-4">
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#C2824D]">
                        Step 2 of 2
                      </span>
                      <h3 className="font-serif text-xl font-bold text-[#141E28]">
                        Brief Leadership Intake
                      </h3>
                      <p className="text-[11px] text-[#6E7B8C]">
                        Selected: <strong>{selectedDate} at {selectedTime}</strong>
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-[11px] font-bold text-[#141E28] block mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Jordan Hayes"
                          className="w-full px-3 py-2 text-xs bg-[#FAF8F5] border border-[#D9D2C7] rounded focus:outline-none focus:border-[#C2824D]"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-bold text-[#141E28] block mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="jordan@company.com"
                          className="w-full px-3 py-2 text-xs bg-[#FAF8F5] border border-[#D9D2C7] rounded focus:outline-none focus:border-[#C2824D]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-[11px] font-bold text-[#141E28] block mb-1">
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g. Stripe"
                          className="w-full px-3 py-2 text-xs bg-[#FAF8F5] border border-[#D9D2C7] rounded focus:outline-none focus:border-[#C2824D]"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-bold text-[#141E28] block mb-1">
                          Current Role / Title *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.role}
                          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                          placeholder="e.g. Director of Engineering"
                          className="w-full px-3 py-2 text-xs bg-[#FAF8F5] border border-[#D9D2C7] rounded focus:outline-none focus:border-[#C2824D]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] font-bold text-[#141E28] block mb-1">
                        What is your primary leadership bottleneck right now? *
                      </label>
                      <textarea
                        required
                        rows={2}
                        value={formData.currentSituation}
                        onChange={(e) =>
                          setFormData({ ...formData, currentSituation: e.target.value })
                        }
                        placeholder="Briefly describe what prompted you to reach out..."
                        className="w-full px-3 py-2 text-xs bg-[#FAF8F5] border border-[#D9D2C7] rounded focus:outline-none focus:border-[#C2824D]"
                      />
                    </div>

                    <div className="pt-3 flex justify-between">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="text-xs text-[#637082] hover:underline cursor-pointer"
                      >
                        ← Change Date/Time
                      </button>

                      <button
                        type="submit"
                        className="bg-[#141E28] hover:bg-[#C2824D] text-white text-xs font-semibold px-6 py-3 rounded shadow transition-colors cursor-pointer"
                      >
                        Confirm & Reserve Session
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
