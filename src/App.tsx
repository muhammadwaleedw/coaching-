import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomeView } from './components/views/HomeView';
import { AboutView } from './components/views/AboutView';
import { CoachingOverviewView } from './components/views/CoachingOverviewView';
import { SpecialtyCoachingView } from './components/views/SpecialtyCoachingView';
import { ProgramsView } from './components/views/ProgramsView';
import { ProgramDetailView } from './components/views/ProgramDetailView';
import { ResultsView } from './components/views/ResultsView';
import { ResourcesView } from './components/views/ResourcesView';
import { BlogView } from './components/views/BlogView';
import { BlogArticleView } from './components/views/BlogArticleView';
import { FAQView } from './components/views/FAQView';
import { ContactView } from './components/views/ContactView';
import { ApplicationView } from './components/views/ApplicationView';
import { DiscoveryCallView } from './components/views/DiscoveryCallView';
import { ThankYouView } from './components/views/ThankYouView';
import { LegalViews } from './components/views/LegalViews';

// Modals
import { DiscoveryBookingModal } from './components/modals/DiscoveryBookingModal';
import { LeadMagnetModal } from './components/modals/LeadMagnetModal';
import { LeadershipQuizModal } from './components/modals/LeadershipQuizModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [extraData, setExtraData] = useState<any>({});

  // Modal States
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isLeadMagnetOpen, setIsLeadMagnetOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  // Navigate helper with scroll reset
  const handleNavigate = (page: PageId, data?: any) => {
    setCurrentPage(page);
    if (data) {
      setExtraData(data);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render view based on currentPage
  const renderCurrentView = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomeView
            onNavigate={handleNavigate}
            onOpenBooking={() => setIsBookingOpen(true)}
            onOpenLeadMagnet={() => setIsLeadMagnetOpen(true)}
            onOpenQuiz={() => setIsQuizOpen(true)}
          />
        );

      case 'about':
        return (
          <AboutView
            onNavigate={handleNavigate}
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        );

      case 'coaching':
        return (
          <CoachingOverviewView
            onNavigate={handleNavigate}
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        );

      case 'coaching-executive':
      case 'coaching-leadership':
      case 'coaching-career':
      case 'coaching-founder':
        return (
          <SpecialtyCoachingView
            pageId={currentPage}
            onNavigate={handleNavigate}
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        );

      case 'programs':
        return (
          <ProgramsView
            onNavigate={handleNavigate}
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        );

      case 'program-detail':
        return (
          <ProgramDetailView
            programId={extraData?.programId}
            onNavigate={handleNavigate}
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        );

      case 'results':
        return (
          <ResultsView
            onNavigate={handleNavigate}
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        );

      case 'resources':
        return (
          <ResourcesView
            onNavigate={handleNavigate}
            onOpenLeadMagnet={() => setIsLeadMagnetOpen(true)}
            onOpenQuiz={() => setIsQuizOpen(true)}
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        );

      case 'blog':
        return <BlogView onNavigate={handleNavigate} />;

      case 'blog-article':
        return (
          <BlogArticleView
            postId={extraData?.postId}
            onNavigate={handleNavigate}
            onOpenBooking={() => setIsBookingOpen(true)}
            onOpenLeadMagnet={() => setIsLeadMagnetOpen(true)}
          />
        );

      case 'faq':
        return (
          <FAQView
            onNavigate={handleNavigate}
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        );

      case 'contact':
        return (
          <ContactView
            onNavigate={handleNavigate}
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        );

      case 'apply':
        return (
          <ApplicationView
            onNavigate={handleNavigate}
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        );

      case 'discovery-call':
        return <DiscoveryCallView onNavigate={handleNavigate} />;

      case 'thank-you':
        return (
          <ThankYouView
            onNavigate={handleNavigate}
            onOpenLeadMagnet={() => setIsLeadMagnetOpen(true)}
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        );

      case 'privacy':
        return <LegalViews pageId="privacy" onNavigate={handleNavigate} />;

      case 'terms':
        return <LegalViews pageId="terms" onNavigate={handleNavigate} />;

      default:
        return <LegalViews pageId="404" onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#141E28] flex flex-col selection:bg-[#C2824D]/20 selection:text-[#141E28]">
      {/* 1. STICKY HEADER */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenLeadMagnet={() => setIsLeadMagnetOpen(true)}
      />

      {/* 2. MAIN CONTENT VIEW */}
      <main className="flex-1 w-full">{renderCurrentView()}</main>

      {/* 3. FOOTER */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenLeadMagnet={() => setIsLeadMagnetOpen(true)}
        onOpenQuiz={() => setIsQuizOpen(true)}
      />

      {/* 4. MODALS */}
      <DiscoveryBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      <LeadMagnetModal
        isOpen={isLeadMagnetOpen}
        onClose={() => setIsLeadMagnetOpen(false)}
      />

      <LeadershipQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onOpenBooking={() => {
          setIsQuizOpen(false);
          setIsBookingOpen(true);
        }}
      />
    </div>
  );
}
