import React, { useState } from 'react';
import { X, BookOpen, CheckCircle, Download, ArrowRight, Sparkles, FileText, Check, Lock } from 'lucide-react';
import { LEAD_MAGNET_QUESTIONS } from '../../data/coachingData';

interface LeadMagnetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const LeadMagnetModal: React.FC<LeadMagnetModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
}) => {
  const [activeTab, setActiveTab] = useState<'form' | 'reader'>('form');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [savedNotes, setSavedNotes] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !email.includes('@')) {
      setError('Please provide your name and a valid work email.');
      return;
    }
    setError('');
    setIsSubmitted(true);
    setActiveTab('reader');
  };

  const handleAnswerChange = (qNum: number, val: string) => {
    setAnswers((prev) => ({ ...prev, [qNum]: val }));
    setSavedNotes(false);
  };

  const handleSaveNotes = () => {
    setSavedNotes(true);
    setTimeout(() => setSavedNotes(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#141E28]/70 backdrop-blur-sm animate-fadeIn">
      <div
        className="bg-[#FAF8F5] border border-[#E8E2D9] rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden relative"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-[#141E28] text-white px-6 py-4 flex items-center justify-between border-b border-[#2A3747]">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-[#C2824D] text-white text-[10px] uppercase font-bold tracking-wider rounded">
              Complimentary Guide
            </span>
            <span className="text-xs text-[#B8C3D2] hidden sm:inline">
              Executive Decision & Clarity Framework
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-[#9AA5B6] hover:text-white p-1 rounded transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          {activeTab === 'form' && !isSubmitted ? (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Left Column: Visual Guide Summary */}
              <div className="md:col-span-6 space-y-5">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-widest text-[#C2824D] font-bold">
                    14-Page Leadership Diagnostic
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#141E28] font-bold leading-tight">
                    5 Questions Every Ambitious Leader Should Ask Before Their Next Big Move
                  </h2>
                  <p className="text-sm text-[#525E6F] leading-relaxed">
                    Designed to help you gain absolute clarity on your direction, identify dangerous blind spots, and eliminate second-guessing before making your next career or organizational leap.
                  </p>
                </div>

                <div className="space-y-2.5 pt-2">
                  <div className="flex items-start gap-2.5 text-xs text-[#333E4D]">
                    <CheckCircle className="w-4 h-4 text-[#C2824D] shrink-0 mt-0.5" />
                    <span><strong>The Energy Audit:</strong> Pinpoint which responsibilities drain your cognitive bandwidth.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#333E4D]">
                    <CheckCircle className="w-4 h-4 text-[#C2824D] shrink-0 mt-0.5" />
                    <span><strong>The Perception Gap:</strong> How executive peers perceive your strengths & derailers.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#333E4D]">
                    <CheckCircle className="w-4 h-4 text-[#C2824D] shrink-0 mt-0.5" />
                    <span><strong>The 70% Threshold:</strong> How to overcome delayed decision-making.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#333E4D]">
                    <CheckCircle className="w-4 h-4 text-[#C2824D] shrink-0 mt-0.5" />
                    <span><strong>Authentic Identity:</strong> Leading with high authority without wearing a mask.</span>
                  </div>
                </div>

                <div className="p-3.5 bg-[#F3EFEA] rounded-lg border border-[#E8E2D9] text-xs text-[#636F80] flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#C2824D] shrink-0" />
                  <span>No spam. Instant access in your browser and sent to your email.</span>
                </div>
              </div>

              {/* Right Column: Lead Form */}
              <div className="md:col-span-6 bg-white p-6 sm:p-7 rounded-xl border border-[#E8E2D9] shadow-sm">
                <h3 className="font-serif text-lg font-bold text-[#141E28] mb-1">
                  Get Instant Access
                </h3>
                <p className="text-xs text-[#667384] mb-5">
                  Enter your details below to read the guide immediately.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#141E28] mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Jessica Taylor"
                      className="w-full px-3.5 py-2.5 rounded text-sm bg-[#FAF8F5] border border-[#D9D2C7] focus:outline-none focus:border-[#C2824D] text-[#141E28]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#141E28] mb-1">
                      Work Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jessica@company.com"
                      className="w-full px-3.5 py-2.5 rounded text-sm bg-[#FAF8F5] border border-[#D9D2C7] focus:outline-none focus:border-[#C2824D] text-[#141E28]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#141E28] mb-1">
                      Current Role / Title (Optional)
                    </label>
                    <input
                      type="text"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      placeholder="e.g. VP of Product / Senior Director"
                      className="w-full px-3.5 py-2.5 rounded text-sm bg-[#FAF8F5] border border-[#D9D2C7] focus:outline-none focus:border-[#C2824D] text-[#141E28]"
                    />
                  </div>

                  {error && (
                    <p className="text-xs text-red-600 font-medium">{error}</p>
                  )}

                  <button
                    type="submit"
                    className="w-full bg-[#141E28] hover:bg-[#C2824D] text-white py-3 rounded text-sm font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow"
                  >
                    <span>Send Me the Guide & Read Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-center text-[#7F8B9B]">
                    Protected by ICF professional ethics standards.
                  </p>
                </form>
              </div>
            </div>
          ) : (
            /* Interactive Guide Reader */
            <div className="space-y-8">
              {/* Success Banner */}
              <div className="bg-[#EBF7EE] border border-[#BCE4C6] p-4 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-700 shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-green-900">
                      Guide sent to {email || 'your email'}!
                    </p>
                    <p className="text-xs text-green-800">
                      You can also read through the 5 core diagnostic questions and record your reflections below.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    const guideText = LEAD_MAGNET_QUESTIONS.map(
                      (q) =>
                        `Question ${q.number}: ${q.title}\n${q.question}\n\nReflection: ${
                          answers[q.number] || '[Not answered]'
                        }\n\n`
                    ).join('\n---\n\n');
                    const blob = new Blob([guideText], { type: 'text/plain' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = `AlexMorgan_5_Questions_Reflections.txt`;
                    a.click();
                  }}
                  className="bg-white text-green-900 border border-green-300 text-xs font-semibold px-3 py-1.5 rounded flex items-center gap-1.5 hover:bg-green-50 shrink-0"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download My Notes</span>
                </button>
              </div>

              {/* Intro to the 5 Questions */}
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <span className="text-xs uppercase tracking-widest text-[#C2824D] font-bold">
                  Executive Workbook
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#141E28]">
                  The 5 Core Leadership Inquiries
                </h3>
                <p className="text-xs sm:text-sm text-[#5C6777]">
                  Answer these five questions with complete honesty. You can record your reflections directly in each box.
                </p>
              </div>

              {/* Questions List */}
              <div className="space-y-6">
                {LEAD_MAGNET_QUESTIONS.map((item) => (
                  <div
                    key={item.number}
                    className="bg-white p-5 sm:p-6 rounded-xl border border-[#E8E2D9] shadow-sm space-y-4"
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-full bg-[#141E28] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        0{item.number}
                      </span>
                      <div className="space-y-1">
                        <span className="text-xs font-semibold text-[#C2824D] uppercase tracking-wider">
                          {item.title}
                        </span>
                        <h4 className="font-serif text-lg font-bold text-[#141E28]">
                          {item.question}
                        </h4>
                      </div>
                    </div>

                    <div className="bg-[#FAF8F5] p-3.5 rounded-lg border-l-2 border-[#C2824D] text-xs text-[#525E6F] leading-relaxed">
                      <strong>Executive Context:</strong> {item.context}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#141E28] mb-1.5">
                        Prompt: {item.reflectionPrompt}
                      </label>
                      <textarea
                        rows={2}
                        value={answers[item.number] || ''}
                        onChange={(e) => handleAnswerChange(item.number, e.target.value)}
                        placeholder="Type your notes or observations here..."
                        className="w-full px-3 py-2 text-xs rounded bg-[#FAF8F5] border border-[#D9D2C7] focus:outline-none focus:border-[#C2824D] text-[#141E28]"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Actions */}
              <div className="bg-[#141E28] text-white p-6 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1 text-center sm:text-left">
                  <h4 className="font-serif text-lg font-bold text-white">
                    Want to unpack your answers with Alex?
                  </h4>
                  <p className="text-xs text-[#B8C3D2]">
                    Review your diagnostic reflections in a complimentary 30-minute discovery call.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleSaveNotes}
                    className="bg-[#243345] hover:bg-[#2F4259] text-white text-xs font-medium px-4 py-2.5 rounded border border-[#3A4D64] transition-colors"
                  >
                    {savedNotes ? 'Reflections Saved!' : 'Save Progress'}
                  </button>
                  <button
                    onClick={() => {
                      onClose();
                      onOpenBooking();
                    }}
                    className="bg-[#C2824D] hover:bg-[#D5935E] text-white text-xs font-semibold px-5 py-2.5 rounded flex items-center gap-1.5 transition-colors shadow"
                  >
                    <span>Book Discovery Call</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
