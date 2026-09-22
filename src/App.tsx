import React, { useState, useEffect } from 'react';
import { PageTab } from './types';
import { Navbar } from './components/Navbar';
import { Preloader } from './components/Preloader';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProgramsSection } from './components/ProgramsSection';
import { TournamentsSection } from './components/TournamentsSection';
import { ChessLabTools } from './components/ChessLabTools';
import { PlayChessPage } from './components/PlayChessPage';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { LeadershipFAQ } from './components/LeadershipFAQ';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { IS_CHESS_CENTRE_INFO } from './data/chessData';
import { soundManager } from './utils/audio';
import { MessageSquare, Phone, Crown, ArrowUp } from 'lucide-react';

export default function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [activeTab, setActiveTab] = useState<PageTab>('home');
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    soundManager.playClockClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenConsultation = () => {
    soundManager.playClockClick();
    setConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-montserrat flex flex-col selection:bg-rose-600 selection:text-white relative">
      
      {/* Cinematic Intro Preloader */}
      {showPreloader && (
        <Preloader onComplete={() => setShowPreloader(false)} />
      )}

      {/* Floating Header Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {activeTab === 'home' && (
          <>
            <Hero
              setActiveTab={setActiveTab}
              onOpenConsultation={handleOpenConsultation}
            />
            <AboutSection />
            <ProgramsSection onOpenConsultation={handleOpenConsultation} />
            <TournamentsSection onOpenConsultation={handleOpenConsultation} />
            <ChessLabTools />
            <GallerySection />
            <ReviewsSection />
            <LeadershipFAQ onOpenConsultation={handleOpenConsultation} />
            <ContactSection />
          </>
        )}

        {activeTab === 'about' && (
          <div className="pt-20">
            <AboutSection />
            <LeadershipFAQ onOpenConsultation={handleOpenConsultation} />
          </div>
        )}

        {activeTab === 'programs' && (
          <div className="pt-20">
            <ProgramsSection onOpenConsultation={handleOpenConsultation} />
          </div>
        )}

        {activeTab === 'tournaments' && (
          <div className="pt-20">
            <TournamentsSection onOpenConsultation={handleOpenConsultation} />
          </div>
        )}

        {activeTab === 'tools' && (
          <div className="pt-20">
            <ChessLabTools />
          </div>
        )}

        {activeTab === 'play' && (
          <div className="pt-20">
            <PlayChessPage />
          </div>
        )}

        {activeTab === 'gallery' && (
          <div className="pt-20">
            <GallerySection />
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="pt-20">
            <ReviewsSection />
          </div>
        )}

        {activeTab === 'leadership' && (
          <div className="pt-20">
            <LeadershipFAQ onOpenConsultation={handleOpenConsultation} />
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="pt-20">
            <ContactSection />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* "Talk to Our Chess Experts" Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />

      {/* Floating Action Buttons (WhatsApp, Dial & Back to Top) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 select-none">
        
        {/* Play Quick Button */}
        {activeTab !== 'play' && (
          <button
            onClick={() => {
              soundManager.playVictory();
              setActiveTab('play');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 text-white font-montserrat font-bold text-xs uppercase tracking-wider shadow-2xl transition hover:scale-105 cursor-pointer border border-rose-400/40"
            title="Instant Play Free Chess"
          >
            <Crown className="w-4 h-4 text-amber-300" />
            <span>Play Chess</span>
          </button>
        )}

        {/* WhatsApp Floating Chat */}
        <a
          href={`https://wa.me/919437208864?text=${encodeURIComponent('Hello IS Chess Centre, I would like to enquire about chess admissions and tournaments in Cuttack.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-2xl transition hover:scale-110 cursor-pointer border border-emerald-400/50"
          title="Chat on WhatsApp (+91 94372 08864)"
        >
          <MessageSquare className="w-6 h-6" />
        </a>

        {/* Scroll Back to Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center shadow-xl border border-slate-700 transition cursor-pointer"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

      </div>

    </div>
  );
}
