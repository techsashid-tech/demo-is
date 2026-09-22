import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { IsChessLogo } from './IsChessLogo';
import { IS_CHESS_CENTRE_INFO } from '../data/chessData';
import { PageTab } from '../types';
import { soundManager } from '../utils/audio';
import { 
  Trophy, 
  Sparkles, 
  ArrowRight, 
  Crown, 
  ExternalLink, 
  Play, 
  MapPin, 
  ShieldCheck,
  CheckCircle2,
  Users
} from 'lucide-react';

interface HeroProps {
  setActiveTab: (tab: PageTab) => void;
  onOpenConsultation: () => void;
}

const TAGLINES = [
  "Where Champions Begin",
  "Think Beyond the Board",
  "Train Your Mind",
  "Master Every Move",
  "From First Move to Grandmaster Mindset"
];

export const Hero: React.FC<HeroProps> = ({ setActiveTab, onOpenConsultation }) => {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % TAGLINES.length);
    }, 3800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[92vh] pt-28 pb-16 flex flex-col justify-center overflow-hidden">
      {/* Dynamic Ambient Background Lights */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-red-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Floating Chess Piece Silhouettes in Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none opacity-[0.04] text-7xl font-serif">
        <span className="absolute top-20 left-[10%] animate-float-3d">♔</span>
        <span className="absolute top-48 right-[12%] animate-float-3d" style={{ animationDelay: '1.5s' }}>♕</span>
        <span className="absolute bottom-32 left-[18%] animate-float-3d" style={{ animationDelay: '2.5s' }}>♘</span>
        <span className="absolute bottom-20 right-[25%] animate-float-3d" style={{ animationDelay: '3.5s' }}>♖</span>
        <span className="absolute top-1/2 left-[48%] animate-float-3d" style={{ animationDelay: '4.5s' }}>♗</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand & Hero Messaging */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Top Badge: Verified FIDE Academy */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-montserrat text-slate-300 backdrop-blur-md"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Premier Chess Academy & Tournament Organizer in Cuttack</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight"
              >
                IS CHESS <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-blue-400">CENTRE</span>
              </motion.h1>

              {/* Sequential Tagline Rotator */}
              <div className="h-12 flex items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={taglineIndex}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.4 }}
                    className="font-playfair italic text-xl sm:text-2xl lg:text-3xl text-amber-300 font-semibold flex items-center gap-2"
                  >
                    <Crown className="w-5 h-5 text-amber-400 inline-block" />
                    <span>“{TAGLINES[taglineIndex]}”</span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-300 text-sm sm:text-base leading-relaxed font-montserrat max-w-2xl"
            >
              Nurturing thinkers, strategists, and national champions from <strong className="text-white font-semibold">Mahanadi Vihar, Cuttack</strong>. 
              From 4-year-old grassroots beginners to titled FIDE masters, we combine classical chess mastery with tournament exposure and modern digital analysis.
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-2 flex flex-wrap items-center gap-3.5"
            >
              {/* Play Free Chess Button */}
              <button
                onClick={() => {
                  soundManager.playVictory();
                  setActiveTab('play');
                }}
                className="btn-3d-primary px-6 py-3.5 text-xs sm:text-sm tracking-wider uppercase font-montserrat font-bold flex items-center gap-2 cursor-pointer shadow-lg"
              >
                <Crown className="w-4 h-4 text-amber-300" />
                <span>Play Free Chess Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* View Official Results */}
              <a
                href={IS_CHESS_CENTRE_INFO.fideResultsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-3d-blue px-5 py-3.5 text-xs sm:text-sm tracking-wider uppercase font-montserrat font-bold flex items-center gap-2 cursor-pointer shadow-lg"
              >
                <Trophy className="w-4 h-4 text-amber-300" />
                <span>FIDE Chess Results</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              {/* Chess Tools Lab */}
              <button
                onClick={() => {
                  soundManager.playClockClick();
                  setActiveTab('tools');
                }}
                className="px-5 py-3 rounded-full border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-xs sm:text-sm font-montserrat font-semibold text-slate-200 transition cursor-pointer flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>15 Chess Lab Tools</span>
              </button>
            </motion.div>

            {/* Address & Quick Location Verification */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 font-montserrat">
              <a
                href={IS_CHESS_CENTRE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-amber-400 transition"
              >
                <MapPin className="w-4 h-4 text-red-500" />
                <span>Mahanadi Vihar, Cuttack, Odisha – 753004</span>
              </a>
              <span className="hidden sm:inline text-slate-600">•</span>
              <a
                href={`tel:${IS_CHESS_CENTRE_INFO.phone}`}
                className="inline-flex items-center gap-1.5 hover:text-white transition"
              >
                <span>Call: +91 94372 08864</span>
              </a>
            </div>

          </div>

          {/* Right Column: 3D Visual Board & Emblem Presentation */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-md"
            >
              {/* Outer Radiant Backdrop Glow */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-red-600/30 via-indigo-600/20 to-blue-600/30 blur-2xl opacity-70" />

              {/* 3D Showcase Card */}
              <div className="relative rounded-3xl border border-slate-700/80 bg-slate-900/90 p-6 shadow-2xl backdrop-blur-xl animate-light-sweep">
                
                {/* Header inside Card */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
                  <div className="flex items-center gap-3">
                    <IsChessLogo size="sm" withGlow={false} />
                    <div>
                      <h3 className="font-cinzel text-sm font-bold text-white tracking-wide">
                        OFFICIAL ACADEMY
                      </h3>
                      <p className="text-[10px] font-montserrat text-emerald-400 font-medium flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        ADMISSIONS OPEN 2026–27
                      </p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold font-montserrat bg-amber-400/10 text-amber-300 border border-amber-400/30">
                    FIDE RATED HUB
                  </span>
                </div>

                {/* Mini Interactive 3D Chess Board Display */}
                <div className="rounded-xl overflow-hidden border border-slate-700/80 shadow-inner bg-slate-950 p-2">
                  <div className="grid grid-cols-8 gap-0.5 aspect-square rounded-lg overflow-hidden">
                    {Array.from({ length: 64 }).map((_, idx) => {
                      const row = Math.floor(idx / 8);
                      const col = idx % 8;
                      const isDark = (row + col) % 2 === 1;

                      // Display some strategic opening pieces (e.g. Italian Game setup)
                      let piece = '';
                      let pieceColor = '';

                      // White pieces
                      if (row === 7) {
                        const rankPieces = ['♖', '♘', '♗', '♕', '♔', '', '♘', '♖'];
                        piece = rankPieces[col] || '';
                        pieceColor = 'text-amber-100';
                      } else if (row === 6) {
                        piece = col === 4 ? '' : '♙';
                        pieceColor = 'text-amber-100';
                      } else if (row === 4 && col === 4) {
                        piece = '♙';
                        pieceColor = 'text-amber-100';
                      } else if (row === 5 && col === 5) {
                        piece = '♘';
                        pieceColor = 'text-amber-100';
                      } else if (row === 4 && col === 2) {
                        piece = '♗';
                        pieceColor = 'text-amber-100';
                      }

                      // Black pieces
                      if (row === 0) {
                        const rankPieces = ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'];
                        piece = rankPieces[col] || '';
                        pieceColor = 'text-slate-400';
                      } else if (row === 1) {
                        piece = col === 4 ? '' : '♟';
                        pieceColor = 'text-slate-400';
                      } else if (row === 3 && col === 4) {
                        piece = '♟';
                        pieceColor = 'text-slate-400';
                      } else if (row === 2 && col === 2) {
                        piece = '♞';
                        pieceColor = 'text-slate-400';
                      }

                      return (
                        <div
                          key={idx}
                          className={`flex items-center justify-center text-lg sm:text-xl font-serif select-none transition-colors duration-200 ${
                            isDark ? 'bg-slate-800' : 'bg-slate-700/60'
                          } ${(row === 4 && col === 4) || (row === 3 && col === 4) ? 'bg-rose-950/70' : ''}`}
                        >
                          <span className={`drop-shadow-sm ${pieceColor}`}>{piece}</span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex justify-between items-center px-2 pt-2 text-[10px] font-mono text-slate-400">
                    <span>Position: Italian Game (Giuoco Piano)</span>
                    <span className="text-emerald-400">Analysis: +0.25 (Equal)</span>
                  </div>
                </div>

                {/* Key Benefits Checklist */}
                <div className="mt-4 space-y-2 text-xs font-montserrat text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Official FIDE International Rating Coaching</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Organizers of 4th & 5th IS Open International FIDE Events</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>DGT Digital Clock & Score Recording Practical Drills</span>
                  </div>
                </div>

                {/* Bottom Card Action */}
                <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between">
                  <button
                    onClick={onOpenConsultation}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 text-white font-montserrat font-bold text-xs uppercase tracking-wider transition text-center cursor-pointer shadow-md"
                  >
                    Request Free Assessment Session
                  </button>
                </div>

              </div>
            </motion.div>
          </div>

        </div>

        {/* Milestone Stats Ribbon */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          {IS_CHESS_CENTRE_INFO.stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-3 rounded-2xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm"
            >
              <div className="font-cinzel text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-300 to-blue-400">
                {stat.value}
              </div>
              <div className="text-xs font-montserrat font-medium text-slate-400 mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
