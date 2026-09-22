import React, { useState, useEffect } from 'react';
import { PageTab } from '../types';
import { IsChessLogo } from './IsChessLogo';
import { IS_CHESS_CENTRE_INFO } from '../data/chessData';
import { soundManager } from '../utils/audio';
import { 
  Volume2, 
  VolumeX, 
  Menu, 
  X, 
  ExternalLink, 
  Trophy, 
  Sparkles, 
  Compass, 
  PhoneCall,
  Crown
} from 'lucide-react';

interface NavbarProps {
  activeTab: PageTab;
  setActiveTab: (tab: PageTab) => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenConsultation
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    soundManager.enabled = next;
    if (next) soundManager.playClockClick();
  };

  const navItems: { id: PageTab; label: string; icon?: React.ReactNode }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'programs', label: 'Programs' },
    { id: 'tournaments', label: 'Tournaments' },
    { id: 'tools', label: 'Chess Lab (15 Tools)' },
    { id: 'play', label: 'Play Chess', icon: <Crown className="w-3.5 h-3.5 text-amber-400" /> },
    { id: 'gallery', label: 'Gallery' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'leadership', label: 'Leadership & FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (tabId: PageTab) => {
    soundManager.playClockClick();
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-2xl py-2.5' 
          : 'bg-gradient-to-b from-slate-950/90 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo & Brand Identity */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
          >
            <div className="transition-transform duration-300 group-hover:scale-105">
              <IsChessLogo size="sm" withGlow={true} />
            </div>
            <div>
              <div className="font-cinzel text-lg sm:text-xl font-bold tracking-wider text-white flex items-center gap-2">
                <span>IS CHESS CENTRE</span>
              </div>
              <p className="text-[10px] font-montserrat tracking-widest text-slate-400 hidden sm:block uppercase">
                Mahanadi Vihar • Cuttack, Odisha
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-sm">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-montserrat font-medium transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-gradient-to-r from-red-600 to-rose-700 text-white shadow-md shadow-rose-950/40 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Action CTAs & Sound Switch */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              title={soundEnabled ? 'Mute sound effects' : 'Unmute sound effects'}
              className="p-2 rounded-full border border-slate-800 bg-slate-900/60 text-slate-300 hover:text-white hover:border-slate-700 transition cursor-pointer"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
            </button>

            {/* Official Chess Results External Link */}
            <a
              href={IS_CHESS_CENTRE_INFO.fideResultsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-montserrat font-semibold rounded-full bg-blue-900/40 hover:bg-blue-800/60 text-blue-200 border border-blue-700/50 transition-all cursor-pointer shadow-sm"
              title="View live FIDE official chess results and pairings"
            >
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              <span>Results</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>

            {/* Talk to Experts Button */}
            <button
              onClick={onOpenConsultation}
              className="btn-3d-primary px-4 py-1.5 text-xs tracking-wide uppercase font-montserrat font-bold flex items-center gap-1.5 cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Enquiry</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={toggleSound}
              className="p-2 rounded-full border border-slate-800 bg-slate-900 text-slate-300"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg border border-slate-800 bg-slate-900 text-white cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-950/98 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2 pt-2 pb-3">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2.5 rounded-lg text-xs font-montserrat text-left transition flex items-center gap-2 cursor-pointer ${
                    isActive 
                      ? 'bg-rose-600 text-white font-bold' 
                      : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
            <a
              href={IS_CHESS_CENTRE_INFO.fideResultsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-blue-950/80 text-blue-200 border border-blue-800/80 text-xs font-semibold"
            >
              <Trophy className="w-4 h-4 text-amber-400" />
              <span>Official FIDE Chess Results (Chess-Results.com)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full btn-3d-primary py-2.5 text-center text-xs tracking-wider uppercase font-bold"
            >
              Talk to Our Chess Experts (+91 94372 08864)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
