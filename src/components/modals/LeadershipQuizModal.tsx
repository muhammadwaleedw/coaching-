import React, { useState } from 'react';
import { X, Sparkles, ArrowRight, CheckCircle2, RefreshCw, BarChart2, Shield } from 'lucide-react';

interface LeadershipQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

const QUIZ_QUESTIONS = [
  {
    id: 1,
    category: 'Decision Velocity',
    question: 'When faced with a high-stakes, ambiguous strategic decision:',
    options: [
      { text: 'I ruminate for days/weeks and seek validation from multiple parties before acting.', score: 1 },
      { text: 'I gather extensive data, sometimes causing minor delays to execution velocity.', score: 2 },
      { text: 'I use the 70% information rule to make swift, calibrated decisions with high confidence.', score: 3 }
    ]
  },
  {
    id: 2,
    category: 'Leverage & Delegation',
    question: 'How do you currently handle delegation with your team?',
    options: [
      { text: 'I end up doing critical work myself because it is faster and safer than explaining it.', score: 1 },
      { text: 'I delegate tasks but find myself constantly checking in and micro-editing deliverables.', score: 2 },
      { text: 'I delegate full outcomes with clear scorecards and focus 80% of my time on high-level strategy.', score: 3 }
    ]
  },
  {
    id: 3,
    category: 'Executive Gravitas',
    question: 'In C-suite, board-level, or high-stakes stakeholder meetings:',
    options: [
      { text: 'I often experience impostor feelings and over-prepare long slide decks as a defense shield.', score: 1 },
      { text: 'I contribute well on tactical topics but hesitate during contentious cross-examinations.', score: 2 },
      { text: 'I command the room with succinct, high-impact framing and comfortable composure under fire.', score: 3 }
    ]
  },
  {
    id: 4,
    category: 'Difficult Conversations',
    question: 'When an employee, peer, or co-founder is underperforming or causing friction:',
    options: [
      { text: 'I avoid the conversation hoping the issue resolves itself or work around them.', score: 1 },
      { text: 'I delay the conversation until frustration builds up, making the dialogue tense.', score: 2 },
      { text: 'I address issues immediately with empathy, clarity, and firm accountability agreements.', score: 3 }
    ]
  },
  {
    id: 5,
    category: 'Strategic Horizon',
    question: 'How much of your weekly calendar is dedicated to proactive, uninterrupted thinking?',
    options: [
      { text: 'Virtually zero. My entire week is back-to-back meetings and reactive Slack firefighting.', score: 1 },
      { text: '1–2 hours, but it is frequently hijacked by urgent operational escalations.', score: 2 },
      { text: '5+ non-negotiable hours reserved for market foresight, organizational design, and coaching.', score: 3 }
    ]
  },
  {
    id: 6,
    category: 'Energy & Stamina',
    question: 'How sustainable is your current pace of performance?',
    options: [
      { text: 'I am running on adrenaline and caffeine, close to acute burnout.', score: 1 },
      { text: 'I manage the workload during the week but feel drained and disconnected on weekends.', score: 2 },
      { text: 'I have robust boundary rituals and high energy throughout the day.', score: 3 }
    ]
  }
];

export const LeadershipQuizModal: React.FC<LeadershipQuizModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
}) => {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResult, setShowResult] = useState(false);

  if (!isOpen) return null;

  const currentQ = QUIZ_QUESTIONS[currentQIndex];
  const isLastQuestion = currentQIndex === QUIZ_QUESTIONS.length - 1;

  const handleSelectOption = (score: number) => {
    setSelectedAnswers({ ...selectedAnswers, [currentQ.id]: score });
  };

  const handleNext = () => {
    if (!selectedAnswers[currentQ.id]) return;
    if (isLastQuestion) {
      setShowResult(true);
    } else {
      setCurrentQIndex(currentQIndex + 1);
    }
  };

  const handleReset = () => {
    setCurrentQIndex(0);
    setSelectedAnswers({});
    setShowResult(false);
  };

  const totalScore = (Object.values(selectedAnswers) as number[]).reduce((a: number, b: number) => a + b, 0);
  const maxScore = QUIZ_QUESTIONS.length * 3;
  const percentage = Math.round((totalScore / maxScore) * 100);

  const getDiagnosis = () => {
    if (percentage >= 80) {
      return {
        level: 'Strategic Executive (Optimizing)',
        badge: 'High Altitude',
        summary:
          'You demonstrate strong leadership maturity and solid baseline habits. Your primary growth frontier is scaling your executive reach, board stewardship, and mastering long-term legacy strategy.',
        recommendedProgram: '1:1 Executive Retained Partnership',
      };
    } else if (percentage >= 50) {
      return {
        level: 'High-Impact Leader at an Inflection Point (Transitioning)',
        badge: 'Critical Inflection',
        summary:
          'You are clearly high-achieving, but operational friction, delegation hesitation, and meeting bloat are keeping you stuck in the weeds. A structured leadership acceleration program will create rapid leverage.',
        recommendedProgram: '12-Week Leadership Accelerator',
      };
    } else {
      return {
        level: 'Overwhelmed High-Performer (Urgent Realignment)',
        badge: 'Burnout Risk',
        summary:
          'You are carrying unsustainable cognitive weight. Analysis paralysis and micromanagement are draining your energy. Re-calibrating your boundaries and decision frameworks will immediately restore peace of mind.',
        recommendedProgram: 'Leadership & Clarity Intensive',
      };
    }
  };

  const diagnosis = getDiagnosis();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#141E28]/70 backdrop-blur-sm animate-fadeIn">
      <div
        className="bg-[#FAF8F5] border border-[#E8E2D9] rounded-2xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden relative"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-[#141E28] text-white px-6 py-4 flex items-center justify-between border-b border-[#2A3747]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#C2824D]" />
            <span className="text-xs uppercase tracking-wider font-semibold text-[#FAF8F5]">
              Executive Readiness & Blind Spot Scorecard
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-[#9AA5B6] hover:text-white p-1 rounded transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          {!showResult ? (
            <div className="space-y-6">
              {/* Progress Indicator */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs text-[#637081]">
                  <span>
                    Question {currentQIndex + 1} of {QUIZ_QUESTIONS.length}
                  </span>
                  <span className="font-semibold text-[#C2824D]">{currentQ.category}</span>
                </div>
                <div className="w-full bg-[#E5DFD5] h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-[#C2824D] h-full transition-all duration-300 rounded-full"
                    style={{
                      width: `${((currentQIndex + 1) / QUIZ_QUESTIONS.length) * 100}%`,
                    }}
                  />
                </div>
              </div>

              {/* Question */}
              <div className="space-y-3">
                <h3 className="font-serif text-xl sm:text-2xl text-[#141E28] font-bold leading-snug">
                  {currentQ.question}
                </h3>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {currentQ.options.map((opt, idx) => {
                  const isSelected = selectedAnswers[currentQ.id] === opt.score;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(opt.score)}
                      className={`w-full text-left p-4 rounded-xl border text-xs sm:text-sm transition-all cursor-pointer flex items-start gap-3 ${
                        isSelected
                          ? 'bg-[#141E28] text-white border-[#141E28] shadow-md'
                          : 'bg-white text-[#1E232A] border-[#D9D2C7] hover:border-[#C2824D] hover:bg-[#FDFBF7]'
                      }`}
                    >
                      <span
                        className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5 ${
                          isSelected
                            ? 'bg-[#C2824D] text-white'
                            : 'bg-[#EAE4DA] text-[#556272]'
                        }`}
                      >
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="leading-relaxed">{opt.text}</span>
                    </button>
                  );
                })}
              </div>

              {/* Navigation Actions */}
              <div className="pt-4 border-t border-[#E8E2D9] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setCurrentQIndex(Math.max(0, currentQIndex - 1))}
                  disabled={currentQIndex === 0}
                  className="text-xs font-semibold text-[#6E7787] disabled:opacity-30 cursor-pointer"
                >
                  Previous
                </button>
                <button
                  onClick={handleNext}
                  disabled={!selectedAnswers[currentQ.id]}
                  className={`px-6 py-2.5 rounded text-xs font-semibold flex items-center gap-2 transition-all ${
                    selectedAnswers[currentQ.id]
                      ? 'bg-[#C2824D] hover:bg-[#D5935E] text-white cursor-pointer shadow'
                      : 'bg-[#D9D2C7] text-[#8C96A4] cursor-not-allowed'
                  }`}
                >
                  <span>{isLastQuestion ? 'View Leadership Score' : 'Next Question'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ) : (
            /* Results View */
            <div className="space-y-6 animate-fadeIn">
              <div className="text-center space-y-2">
                <span className="text-xs uppercase tracking-widest text-[#C2824D] font-bold">
                  Diagnostic Results
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#141E28]">
                  Your Leadership Readiness Score
                </h3>
              </div>

              {/* Scorecard Hero Box */}
              <div className="bg-white p-6 rounded-2xl border border-[#E8E2D9] shadow-sm text-center space-y-4">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#FAF8F5] border-4 border-[#C2824D] mx-auto shadow-inner">
                  <span className="text-3xl font-serif font-bold text-[#141E28]">
                    {percentage}%
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="inline-block px-3 py-1 bg-[#141E28] text-white text-xs font-semibold rounded-full uppercase tracking-wider">
                    {diagnosis.level}
                  </span>
                  <p className="text-xs sm:text-sm text-[#525E6F] leading-relaxed max-w-lg mx-auto pt-2">
                    {diagnosis.summary}
                  </p>
                </div>
              </div>

              {/* Recommended Action */}
              <div className="bg-[#141E28] text-white p-6 rounded-xl space-y-3">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#E8A87C] font-semibold">
                  <BarChart2 className="w-4 h-4" />
                  <span>Recommended Next Step</span>
                </div>
                <h4 className="font-serif text-xl font-bold text-white">
                  Discuss Your Diagnostic on a Discovery Call
                </h4>
                <p className="text-xs text-[#B8C3D2] leading-relaxed">
                  Best matched program: <strong>{diagnosis.recommendedProgram}</strong>. Review your score breakdown and uncover your top 2 leverage points in a private 30-minute session with Alex.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => {
                      onClose();
                      onOpenBooking();
                    }}
                    className="bg-[#C2824D] hover:bg-[#D5935E] text-white text-xs font-semibold px-5 py-2.5 rounded flex items-center justify-center gap-2 transition-colors cursor-pointer shadow"
                  >
                    <span>Book Discovery Call with Alex</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={handleReset}
                    className="bg-[#243345] hover:bg-[#2F4259] text-white text-xs font-medium px-4 py-2.5 rounded flex items-center justify-center gap-2 border border-[#3A4D64] transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Retake Quiz</span>
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
