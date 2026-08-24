import React, { useState } from 'react';
import { PageId } from '../../types';
import { PROGRAMS_DATA } from '../../data/coachingData';
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Shield,
  Clock,
  Send,
  User,
  Briefcase,
  Target,
  Award
} from 'lucide-react';

interface ApplicationViewProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const ApplicationView: React.FC<ApplicationViewProps> = ({
  onNavigate,
  onOpenBooking,
}) => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    // Step 1: Program & Profile
    selectedProgram: 'Next-Level Leadership Accelerator (12-Week)',
    fullName: '',
    workEmail: '',
    phone: '',
    company: '',
    roleTitle: '',
    teamSize: '11-50 people',

    // Step 2: Current Context & Friction
    biggestChallenge: '',
    pastAttempts: '',
    whyNow: '',

    // Step 3: Goals & Investment
    targetOutcome: '',
    fundingType: 'Self-Funded',
    readyToCommit: true,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* HERO */}
      <section className="pt-6 sm:pt-12 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFEAE2] border border-[#E0D7C9] text-xs font-semibold text-[#141E28] mb-6">
          <span className="w-2 h-2 rounded-full bg-[#C2824D]" />
          <span>Confidential Application</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#141E28] font-normal leading-tight">
          Apply for Executive Coaching
        </h1>

        <p className="text-base sm:text-lg text-[#525E6F] font-light leading-relaxed pt-4 max-w-2xl mx-auto">
          Due to the high-touch, immersive nature of our work, Alex accepts a maximum of 12 active 1:1 coaching clients at any given time.
        </p>
      </section>

      {/* FORM CARD */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl border border-[#E8E2D9] p-8 sm:p-12 shadow-sm">
          {submitted ? (
            <div className="text-center py-12 space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#E8F5E9] text-green-800 flex items-center justify-center mx-auto border border-[#C8E6C9]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h2 className="font-serif text-3xl font-bold text-[#141E28]">
                  Application Received
                </h2>
                <p className="text-sm text-[#556375] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.fullName || 'Leader'}</strong>. Alex personally reviews every submission to ensure strong mutual fit.
                </p>
              </div>

              <div className="p-6 bg-[#FAF8F5] rounded-xl border border-[#E8E2D9] max-w-md mx-auto text-left text-xs space-y-2 text-[#525E6F]">
                <strong className="block text-[#141E28]">What happens next:</strong>
                <p>1. Review within 24–48 business hours.</p>
                <p>2. If qualified, you will receive a direct invitation to book a 30-minute Strategy Call.</p>
                <p>3. If our roster is currently full, you will be placed on our priority waitlist.</p>
              </div>

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
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Stepper Header */}
              <div className="flex items-center justify-between border-b border-[#E8E2D9] pb-4">
                <span className="text-xs font-bold text-[#C2824D] uppercase tracking-wider">
                  Step {step} of 3
                </span>
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3].map((s) => (
                    <div
                      key={s}
                      className={`w-8 h-1.5 rounded-full transition-colors ${
                        step >= s ? 'bg-[#C2824D]' : 'bg-[#E8E2D9]'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* STEP 1 */}
              {step === 1 && (
                <div className="space-y-6">
                  <div className="space-y-1">
                    <h2 className="font-serif text-2xl font-bold text-[#141E28]">
                      Program & Professional Profile
                    </h2>
                    <p className="text-xs text-[#637082]">
                      Tell us about your current organizational role and preferred engagement track.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#141E28]">
                      Select Desired Program / Track *
                    </label>
                    <select
                      value={formData.selectedProgram}
                      onChange={(e) =>
                        setFormData({ ...formData, selectedProgram: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F5] border border-[#D9D2C7] rounded-lg focus:outline-none focus:border-[#C2824D] text-[#141E28]"
                    >
                      <option>Next-Level Leadership Accelerator (12-Week)</option>
                      <option>1:1 Executive Coaching Partnership (6 Months Retained)</option>
                      <option>Founder & CEO Leadership Advisory</option>
                      <option>Career Strategy Intensive (4 Weeks)</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#141E28]">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="Alex Parker"
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
                        value={formData.workEmail}
                        onChange={(e) =>
                          setFormData({ ...formData, workEmail: e.target.value })
                        }
                        placeholder="alex@company.com"
                        className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F5] border border-[#D9D2C7] rounded-lg focus:outline-none focus:border-[#C2824D] text-[#141E28]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#141E28]">
                        Company
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        placeholder="e.g. Stripe, Acme"
                        className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F5] border border-[#D9D2C7] rounded-lg focus:outline-none focus:border-[#C2824D] text-[#141E28]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#141E28]">
                        Title / Role *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.roleTitle}
                        onChange={(e) =>
                          setFormData({ ...formData, roleTitle: e.target.value })
                        }
                        placeholder="e.g. VP of Product"
                        className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F5] border border-[#D9D2C7] rounded-lg focus:outline-none focus:border-[#C2824D] text-[#141E28]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#141E28]">
                        Team / Org Size
                      </label>
                      <select
                        value={formData.teamSize}
                        onChange={(e) =>
                          setFormData({ ...formData, teamSize: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F5] border border-[#D9D2C7] rounded-lg focus:outline-none focus:border-[#C2824D] text-[#141E28]"
                      >
                        <option>1 - 10 people</option>
                        <option>11 - 50 people</option>
                        <option>51 - 200 people</option>
                        <option>200+ people</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      disabled={!formData.fullName || !formData.workEmail || !formData.roleTitle}
                      className="bg-[#141E28] hover:bg-[#C2824D] disabled:opacity-50 text-white text-xs font-semibold px-6 py-3 rounded flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <span>Continue to Leadership Context</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div className="space-y-6">
                  <div className="space-y-1">
                    <h2 className="font-serif text-2xl font-bold text-[#141E28]">
                      Your Leadership Context & Friction
                    </h2>
                    <p className="text-xs text-[#637082]">
                      Be candid. Coaching is most effective when we address root bottlenecks head-on.
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#141E28]">
                      What is the single biggest challenge holding back your leadership or career right now? *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.biggestChallenge}
                      onChange={(e) =>
                        setFormData({ ...formData, biggestChallenge: e.target.value })
                      }
                      placeholder="e.g., Struggling to step out of execution into high-level strategy, managing difficult stakeholder politics, lack of executive presence..."
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F5] border border-[#D9D2C7] rounded-lg focus:outline-none focus:border-[#C2824D] text-[#141E28]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#141E28]">
                      What have you tried so far to resolve this, and why hasn’t it produced lasting results?
                    </label>
                    <textarea
                      rows={3}
                      value={formData.pastAttempts}
                      onChange={(e) =>
                        setFormData({ ...formData, pastAttempts: e.target.value })
                      }
                      placeholder="e.g., Read books, tried delegating more, but found myself getting pulled back into micro-details..."
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F5] border border-[#D9D2C7] rounded-lg focus:outline-none focus:border-[#C2824D] text-[#141E28]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#141E28]">
                      Why is resolving this urgent for you right now? *
                    </label>
                    <textarea
                      required
                      rows={2}
                      value={formData.whyNow}
                      onChange={(e) =>
                        setFormData({ ...formData, whyNow: e.target.value })
                      }
                      placeholder="e.g., Upcoming board review, restructuring taking place in 90 days, feeling close to burnout..."
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F5] border border-[#D9D2C7] rounded-lg focus:outline-none focus:border-[#C2824D] text-[#141E28]"
                    />
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="bg-transparent hover:bg-[#FAF8F5] text-[#141E28] text-xs font-semibold px-4 py-2.5 rounded border border-[#D9D2C7] flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      disabled={!formData.biggestChallenge || !formData.whyNow}
                      className="bg-[#141E28] hover:bg-[#C2824D] disabled:opacity-50 text-white text-xs font-semibold px-6 py-3 rounded flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <span>Continue to Goals & Commitment</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <div className="space-y-6">
                  <div className="space-y-1">
                    <h2 className="font-serif text-2xl font-bold text-[#141E28]">
                      Target Outcomes & Sponsorship
                    </h2>
                    <p className="text-xs text-[#637082]">
                      Final details before reviewing mutual fit.
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#141E28]">
                      If coaching is a 10/10 success, what tangible outcome will exist in 3 to 6 months? *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.targetOutcome}
                      onChange={(e) =>
                        setFormData({ ...formData, targetOutcome: e.target.value })
                      }
                      placeholder="e.g. My leadership team operates autonomously, I've secured VP promotion, or I have reclaimed 10 hours a week for deep strategic work..."
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F5] border border-[#D9D2C7] rounded-lg focus:outline-none focus:border-[#C2824D] text-[#141E28]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#141E28]">
                      Funding / Sponsorship Source *
                    </label>
                    <select
                      value={formData.fundingType}
                      onChange={(e) =>
                        setFormData({ ...formData, fundingType: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F5] border border-[#D9D2C7] rounded-lg focus:outline-none focus:border-[#C2824D] text-[#141E28]"
                    >
                      <option>Corporate Sponsored / Company L&D Budget</option>
                      <option>Self-Funded Investment</option>
                      <option>Founder / Startup Budget</option>
                      <option>Requesting Invoice / Corporate Proposal</option>
                    </select>
                  </div>

                  <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#E8E2D9] flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="readyToCommit"
                      checked={formData.readyToCommit}
                      onChange={(e) =>
                        setFormData({ ...formData, readyToCommit: e.target.checked })
                      }
                      className="mt-1 accent-[#C2824D]"
                    />
                    <label htmlFor="readyToCommit" className="text-xs text-[#525E6F] leading-relaxed cursor-pointer">
                      I understand that coaching requires active implementation, candid self-reflection, and dedicating approximately 60–90 minutes bi-weekly to deep strategic execution.
                    </label>
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="bg-transparent hover:bg-[#FAF8F5] text-[#141E28] text-xs font-semibold px-4 py-2.5 rounded border border-[#D9D2C7] flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back</span>
                    </button>

                    <button
                      type="submit"
                      disabled={!formData.targetOutcome || !formData.readyToCommit}
                      className="bg-[#141E28] hover:bg-[#C2824D] disabled:opacity-50 text-white text-xs font-semibold px-8 py-3.5 rounded flex items-center gap-2 transition-colors cursor-pointer shadow"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Official Application</span>
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
