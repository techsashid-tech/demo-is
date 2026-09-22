import React, { useState } from 'react';
import { IsChessLogo } from './IsChessLogo';
import { IS_CHESS_CENTRE_INFO } from '../data/chessData';
import { PageTab } from '../types';
import { soundManager } from '../utils/audio';
import { 
  Trophy, 
  MapPin, 
  Phone, 
  Mail, 
  ExternalLink, 
  Heart, 
  ShieldCheck, 
  Crown,
  X
} from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: PageTab) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenConsultation }) => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const handleNav = (tab: PageTab) => {
    soundManager.playClockClick();
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden select-none">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 bg-gradient-to-t from-red-600/5 via-blue-600/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <IsChessLogo size="md" withGlow={true} />
              <div>
                <h3 className="font-cinzel text-xl font-bold text-white tracking-wider">
                  IS CHESS CENTRE
                </h3>
                <p className="font-montserrat text-[10px] tracking-widest text-slate-400 uppercase">
                  Mahanadi Vihar • Cuttack, Odisha
                </p>
              </div>
            </div>

            <p className="font-montserrat text-xs text-slate-400 leading-relaxed">
              Premier chess academy & FIDE tournament organizer dedicated to nurturing future Grandmasters and state champions through tactical depth, discipline, and international competition.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs font-montserrat text-amber-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Accredited FIDE & AICF Affiliated Events</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-cinzel text-xs font-bold text-white uppercase tracking-wider">
              Explore Academy
            </h4>
            <ul className="space-y-2 text-xs font-montserrat text-slate-400">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-white transition cursor-pointer">
                  Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white transition cursor-pointer">
                  Legacy & Mission
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('programs')} className="hover:text-white transition cursor-pointer">
                  Training Programs
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('tournaments')} className="hover:text-white transition cursor-pointer">
                  FIDE Tournaments
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('tools')} className="hover:text-white transition cursor-pointer">
                  Chess Lab (15 Tools)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('play')} className="hover:text-white transition cursor-pointer text-amber-300 font-semibold">
                  ♟ Play Free Chess
                </button>
              </li>
            </ul>
          </div>

          {/* Official Portals */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-cinzel text-xs font-bold text-white uppercase tracking-wider">
              Official Platforms
            </h4>
            <ul className="space-y-2 text-xs font-montserrat text-slate-400">
              <li>
                <a
                  href={IS_CHESS_CENTRE_INFO.fideResultsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition flex items-center gap-1.5"
                >
                  <Trophy className="w-3.5 h-3.5 text-amber-400" />
                  <span>Chess-Results.com Server</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href={IS_CHESS_CENTRE_INFO.playFreeChessUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition flex items-center gap-1.5"
                >
                  <Crown className="w-3.5 h-3.5 text-amber-400" />
                  <span>SyamChessverse Arena</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href={IS_CHESS_CENTRE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-400 transition flex items-center gap-1.5"
                >
                  <MapPin className="w-3.5 h-3.5 text-red-400" />
                  <span>Verified Google Business</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
            </ul>
          </div>

          {/* Official Academy NAP */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-cinzel text-xs font-bold text-white uppercase tracking-wider">
              Centre Contact & Address
            </h4>
            <div className="space-y-2.5 text-xs font-montserrat text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>{IS_CHESS_CENTRE_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${IS_CHESS_CENTRE_INFO.phone}`} className="hover:text-white transition">
                  {IS_CHESS_CENTRE_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{IS_CHESS_CENTRE_INFO.email}</span>
              </div>
            </div>

            <button
              onClick={onOpenConsultation}
              className="mt-2 w-full py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-montserrat font-bold text-white transition text-center"
            >
              Talk to Our Experts
            </button>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-montserrat text-slate-500">
          <div>
            © {new Date().getFullYear()} IS CHESS CENTRE. All Rights Reserved. Mahanadi Vihar, Cuttack.
          </div>

          {/* Mandatory Designer Credit */}
          <div className="text-amber-400/90 font-medium flex items-center gap-1.5 bg-slate-900/80 px-3.5 py-1.5 rounded-full border border-slate-800">
            <span>{IS_CHESS_CENTRE_INFO.designerCredit}</span>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-4 text-[11px]">
            <button
              onClick={() => setLegalModal('privacy')}
              className="hover:text-slate-300 transition cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => setLegalModal('terms')}
              className="hover:text-slate-300 transition cursor-pointer"
            >
              Terms of Training
            </button>
          </div>
        </div>

      </div>

      {/* Legal Policy Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
          <div className="w-full max-w-lg rounded-3xl bg-slate-900 border border-slate-700 p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setLegalModal(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-cinzel text-xl font-bold text-white mb-4">
              {legalModal === 'privacy' ? 'Privacy Policy & Child Safety' : 'Terms & Academy Guidelines'}
            </h3>

            <div className="space-y-3 text-xs font-montserrat text-slate-300 max-h-72 overflow-y-auto pr-2 leading-relaxed">
              <p>
                IS CHESS CENTRE upholds the highest standards of child protection, data privacy, and ethical sportsmanship in compliance with the All India Chess Federation (AICF) and World Chess Federation (FIDE).
              </p>
              <p>
                1. <strong>Student Information:</strong> All parental phone numbers and student FIDE IDs submitted through this portal are treated confidentially and never shared with commercial third parties.
              </p>
              <p>
                2. <strong>Fair Play & Discipline:</strong> Students enrolled in tournament programs agree to uphold FIDE Anti-Cheating and Fair-Play standards at all times.
              </p>
              <p>
                3. <strong>Media & Photographs:</strong> Tournament prize distribution and felicitation photos taken at official academy events may be recorded in archival yearbooks and state press reporting.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-right">
              <button
                onClick={() => setLegalModal(null)}
                className="px-5 py-2 rounded-full bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold font-montserrat"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
