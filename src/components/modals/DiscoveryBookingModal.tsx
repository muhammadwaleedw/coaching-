import React, { useState } from 'react';
import { X, Calendar as CalendarIcon, Clock, Globe, CheckCircle2, ArrowRight, ArrowLeft, Shield, Video, Download } from 'lucide-react';
import { DiscoveryBookingData } from '../../types';

interface DiscoveryBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookingComplete?: (data: DiscoveryBookingData) => void;
}

export const DiscoveryBookingModal: React.FC<DiscoveryBookingModalProps> = ({
  isOpen,
  onClose,
  onBookingComplete,
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [timezone, setTimezone] = useState<string>('Eastern Time (US & Canada)');

  // Form Fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    currentRole: '',
    company: '',
    biggestChallenge: '',
    desiredChange: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  // Generate next 10 business days dynamically
  const getUpcomingDates = () => {
    const dates = [];
    const today = new Date();
    let count = 0;
    let dayOffset = 1;

    while (count < 10) {
      const d = new Date();
      d.setDate(today.getDate() + dayOffset);
      // Skip weekends (0 = Sunday, 6 = Saturday)
      if (d.getDay() !== 0 && d.getDay() !== 6) {
        dates.push({
          fullDate: d.toISOString().split('T')[0],
          dayName: d.toLocaleDateString('en-US', { weekday: 'short' }),
          monthDay: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
          isAvailable: true,
        });
        count++;
      }
      dayOffset++;
    }
    return dates;
  };

  const upcomingDates = getUpcomingDates();

  const timeSlots = [
    '09:00 AM',
    '10:30 AM',
    '01:00 PM',
    '02:30 PM',
    '04:00 PM',
    '05:15 PM'
  ];

  const handleNextToStep2 = () => {
    if (!selectedDate || !selectedTime) {
      alert('Please select both a date and a time slot.');
      return;
    }
    setStep(2);
  };

  const validateStep2 = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your full name.';
    if (!formData.email.trim() || !formData.email.includes('@'))
      errs.email = 'Please enter a valid work email address.';
    if (!formData.currentRole.trim())
      errs.currentRole = 'Please provide your current role/title.';
    if (!formData.biggestChallenge.trim())
      errs.biggestChallenge = 'Please briefly state your main challenge.';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep2()) return;

    const bookingResult: DiscoveryBookingData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      currentRole: `${formData.currentRole}${formData.company ? ` at ${formData.company}` : ''}`,
      biggestChallenge: formData.biggestChallenge,
      desiredChange: formData.desiredChange,
      selectedDate,
      selectedTime,
      timezone,
    };

    if (onBookingComplete) {
      onBookingComplete(bookingResult);
    }
    setStep(3);
  };

  const downloadIcs = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Alex Morgan Coaching//Discovery Call//EN
BEGIN:VEVENT
SUMMARY:Executive Discovery Call with Alex Morgan
DESCRIPTION:30-Minute Confidential Discovery Conversation.\\nFocus: ${formData.biggestChallenge || 'Executive Leadership Clarity'}
DTSTART:${selectedDate.replace(/-/g, '')}T140000Z
DTEND:${selectedDate.replace(/-/g, '')}T143000Z
LOCATION:Zoom Video Conference (Link in calendar invitation)
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `AlexMorgan_DiscoveryCall_${selectedDate}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#141E28]/70 backdrop-blur-sm animate-fadeIn">
      <div
        className="bg-[#FAF8F5] border border-[#E8E2D9] rounded-2xl max-w-3xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden relative"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-[#141E28] text-white px-6 py-4 flex items-center justify-between border-b border-[#2A3747]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C2824D] animate-pulse" />
            <span className="text-xs uppercase tracking-wider font-semibold text-[#E8A87C]">
              30-Minute Confidential Discovery Session
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

        {/* Progress Bar */}
        <div className="bg-[#EFEAE2] px-6 py-2.5 flex items-center justify-between text-xs border-b border-[#E8E2D9]">
          <div className="flex items-center gap-2">
            <span
              className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] ${
                step >= 1 ? 'bg-[#141E28] text-white' : 'bg-[#D9D2C7] text-[#6E7787]'
              }`}
            >
              1
            </span>
            <span className={step === 1 ? 'font-bold text-[#141E28]' : 'text-[#6E7787]'}>
              Select Date & Time
            </span>
          </div>
          <div className="h-0.5 w-8 bg-[#D9D2C7]" />
          <div className="flex items-center gap-2">
            <span
              className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] ${
                step >= 2 ? 'bg-[#141E28] text-white' : 'bg-[#D9D2C7] text-[#6E7787]'
              }`}
            >
              2
            </span>
            <span className={step === 2 ? 'font-bold text-[#141E28]' : 'text-[#6E7787]'}>
              Intake Questions
            </span>
          </div>
          <div className="h-0.5 w-8 bg-[#D9D2C7]" />
          <div className="flex items-center gap-2">
            <span
              className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] ${
                step === 3 ? 'bg-[#C2824D] text-white' : 'bg-[#D9D2C7] text-[#6E7787]'
              }`}
            >
              3
            </span>
            <span className={step === 3 ? 'font-bold text-[#141E28]' : 'text-[#6E7787]'}>
              Confirmed
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          {/* STEP 1: Select Date & Time */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="space-y-1">
                <h3 className="font-serif text-2xl text-[#141E28] font-bold">
                  Choose a convenient time with Alex
                </h3>
                <p className="text-xs text-[#667384]">
                  All sessions are conducted via private HD Zoom. Zero pitch, 100% strategic clarity.
                </p>
              </div>

              {/* Timezone selector */}
              <div className="flex items-center gap-2 text-xs bg-[#F3EFEA] p-2.5 rounded-lg border border-[#E8E2D9] max-w-sm">
                <Globe className="w-4 h-4 text-[#C2824D]" />
                <span className="font-medium text-[#141E28]">Timezone:</span>
                <select
                  value={timezone}
                  onChange={(e) => setTimezone(e.target.value)}
                  className="bg-transparent text-xs font-semibold text-[#141E28] focus:outline-none cursor-pointer"
                >
                  <option>Eastern Time (US & Canada)</option>
                  <option>Pacific Time (US & Canada)</option>
                  <option>Central Time (US & Canada)</option>
                  <option>GMT / London (UK)</option>
                  <option>Central European Time (CET)</option>
                  <option>Sydney / Melbourne (AEST)</option>
                </select>
              </div>

              {/* Date Picker Grid */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-[#141E28] uppercase tracking-wider">
                  Select Date
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                  {upcomingDates.map((item) => {
                    const isSelected = selectedDate === item.fullDate;
                    return (
                      <button
                        key={item.fullDate}
                        onClick={() => setSelectedDate(item.fullDate)}
                        className={`p-3 rounded-lg border text-center transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#141E28] text-white border-[#141E28] shadow'
                            : 'bg-white text-[#141E28] border-[#D9D2C7] hover:border-[#C2824D] hover:bg-[#FAF8F5]'
                        }`}
                      >
                        <span className="block text-[11px] font-medium opacity-80 uppercase">
                          {item.dayName}
                        </span>
                        <span className="block text-sm font-bold mt-0.5">
                          {item.monthDay}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Slot Picker Grid */}
              {selectedDate && (
                <div className="space-y-2 pt-2 animate-fadeIn">
                  <label className="block text-xs font-bold text-[#141E28] uppercase tracking-wider">
                    Available Time Slots ({timezone.split(' ')[0]})
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {timeSlots.map((slot) => {
                      const isSelected = selectedTime === slot;
                      return (
                        <button
                          key={slot}
                          onClick={() => setSelectedTime(slot)}
                          className={`py-2.5 px-3 rounded-lg border text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-[#C2824D] text-white border-[#C2824D] shadow-sm'
                              : 'bg-white text-[#141E28] border-[#D9D2C7] hover:border-[#C2824D]'
                          }`}
                        >
                          <Clock className="w-3.5 h-3.5" />
                          <span>{slot}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 1 Footer */}
              <div className="pt-4 border-t border-[#E8E2D9] flex items-center justify-between">
                <div className="text-xs text-[#707C8C] flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-[#C2824D]" />
                  <span>Strictly confidential</span>
                </div>
                <button
                  onClick={handleNextToStep2}
                  disabled={!selectedDate || !selectedTime}
                  className={`px-6 py-2.5 rounded text-xs font-semibold flex items-center gap-2 transition-all ${
                    selectedDate && selectedTime
                      ? 'bg-[#141E28] hover:bg-[#C2824D] text-white cursor-pointer shadow'
                      : 'bg-[#D9D2C7] text-[#8C96A4] cursor-not-allowed'
                  }`}
                >
                  <span>Continue to Intake</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Intake Questions */}
          {step === 2 && (
            <form onSubmit={handleSubmitBooking} className="space-y-5">
              <div className="space-y-1">
                <h3 className="font-serif text-2xl text-[#141E28] font-bold">
                  Tell Alex about your leadership context
                </h3>
                <p className="text-xs text-[#667384]">
                  Session: <strong>{selectedDate}</strong> at <strong>{selectedTime}</strong> ({timezone})
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#141E28] mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. David Vance"
                    className="w-full px-3.5 py-2.5 rounded text-xs bg-white border border-[#D9D2C7] focus:outline-none focus:border-[#C2824D] text-[#141E28]"
                  />
                  {errors.name && <p className="text-[11px] text-red-600 mt-0.5">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#141E28] mb-1">
                    Work Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="david@company.com"
                    className="w-full px-3.5 py-2.5 rounded text-xs bg-white border border-[#D9D2C7] focus:outline-none focus:border-[#C2824D] text-[#141E28]"
                  />
                  {errors.email && <p className="text-[11px] text-red-600 mt-0.5">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#141E28] mb-1">
                    Current Role / Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.currentRole}
                    onChange={(e) => setFormData({ ...formData, currentRole: e.target.value })}
                    placeholder="e.g. VP of Product / Co-Founder"
                    className="w-full px-3.5 py-2.5 rounded text-xs bg-white border border-[#D9D2C7] focus:outline-none focus:border-[#C2824D] text-[#141E28]"
                  />
                  {errors.currentRole && (
                    <p className="text-[11px] text-red-600 mt-0.5">{errors.currentRole}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#141E28] mb-1">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Acme Corp (50–200 employees)"
                    className="w-full px-3.5 py-2.5 rounded text-xs bg-white border border-[#D9D2C7] focus:outline-none focus:border-[#C2824D] text-[#141E28]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#141E28] mb-1">
                  What is your biggest leadership or career challenge right now? <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={2}
                  required
                  value={formData.biggestChallenge}
                  onChange={(e) => setFormData({ ...formData, biggestChallenge: e.target.value })}
                  placeholder="e.g. Stepping into a senior role, delegating to direct reports, or managing high-stakes stakeholder friction..."
                  className="w-full px-3.5 py-2 rounded text-xs bg-white border border-[#D9D2C7] focus:outline-none focus:border-[#C2824D] text-[#141E28]"
                />
                {errors.biggestChallenge && (
                  <p className="text-[11px] text-red-600 mt-0.5">{errors.biggestChallenge}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#141E28] mb-1">
                  What would meaningful transformation or success look like for you in 6 months?
                </label>
                <textarea
                  rows={2}
                  value={formData.desiredChange}
                  onChange={(e) => setFormData({ ...formData, desiredChange: e.target.value })}
                  placeholder="e.g. Feeling confident in executive meetings, building an autonomous team, or landing an EVP promotion..."
                  className="w-full px-3.5 py-2 rounded text-xs bg-white border border-[#D9D2C7] focus:outline-none focus:border-[#C2824D] text-[#141E28]"
                />
              </div>

              <div className="pt-4 border-t border-[#E8E2D9] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs font-semibold text-[#6E7787] hover:text-[#141E28] flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Time Selection</span>
                </button>
                <button
                  type="submit"
                  className="bg-[#C2824D] hover:bg-[#D5935E] text-white px-6 py-2.5 rounded text-xs font-semibold flex items-center gap-2 shadow cursor-pointer transition-colors"
                >
                  <span>Confirm & Book Discovery Call</span>
                  <CheckCircle2 className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {/* STEP 3: Confirmed State */}
          {step === 3 && (
            <div className="space-y-6 text-center py-4 animate-fadeIn">
              <div className="w-16 h-16 bg-[#EBF7EE] text-green-700 rounded-full flex items-center justify-center mx-auto border border-[#BCE4C6]">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-2 max-w-md mx-auto">
                <span className="text-xs uppercase tracking-widest text-[#C2824D] font-bold">
                  Discovery Call Confirmed
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#141E28]">
                  You're all set, {formData.name.split(' ')[0] || 'Leader'}!
                </h3>
                <p className="text-xs sm:text-sm text-[#556375] leading-relaxed">
                  A calendar invitation and Zoom details have been dispatched to <strong>{formData.email}</strong>.
                </p>
              </div>

              {/* Call Summary Card */}
              <div className="bg-white p-5 rounded-xl border border-[#E8E2D9] max-w-md mx-auto text-left space-y-3 shadow-sm">
                <div className="flex items-center gap-3 text-xs text-[#141E28] font-semibold">
                  <CalendarIcon className="w-4 h-4 text-[#C2824D]" />
                  <span>{selectedDate} at {selectedTime} ({timezone})</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#141E28]">
                  <Video className="w-4 h-4 text-[#C2824D]" />
                  <span>Private 1:1 HD Zoom Meeting with Alex Morgan</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#525E6F]">
                  <Clock className="w-4 h-4 text-[#C2824D]" />
                  <span>Duration: 30 Minutes</span>
                </div>
              </div>

              {/* Preparation Checklist */}
              <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#E8E2D9] max-w-md mx-auto text-left space-y-2">
                <h4 className="text-xs font-bold text-[#141E28] uppercase tracking-wider">
                  How to prepare for our conversation:
                </h4>
                <ul className="text-xs text-[#5C6878] space-y-1.5 list-disc pl-4">
                  <li>Find a quiet, private space where you can speak candidly.</li>
                  <li>Reflect on your single highest-priority leadership obstacle.</li>
                  <li>No need to prepare formal slides or documents—just bring your genuine perspective.</li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={downloadIcs}
                  className="w-full sm:w-auto bg-[#141E28] hover:bg-[#2C3B4E] text-white px-5 py-2.5 rounded text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer shadow"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Add to Calendar (.ics)</span>
                </button>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto bg-white hover:bg-[#F3EFEA] text-[#141E28] px-5 py-2.5 rounded text-xs font-semibold border border-[#D9D2C7] transition-colors cursor-pointer"
                >
                  Return to Website
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
