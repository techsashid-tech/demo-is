import React from 'react';
import { motion } from 'motion/react';
import { UPCOMING_AND_PAST_TOURNAMENTS, IS_CHESS_CENTRE_INFO } from '../data/chessData';
import { soundManager } from '../utils/audio';
import { 
  Trophy, 
  ExternalLink, 
  Calendar, 
  MapPin, 
  Award, 
  Clock, 
  ShieldCheck, 
  CheckCircle2,
  Users
} from 'lucide-react';

interface TournamentsSectionProps {
  onOpenConsultation: () => void;
}

export const TournamentsSection: React.FC<TournamentsSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="tournaments" className="py-20 relative bg-slate-950 overflow-hidden">
      {/* Decorative Lights */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-rose-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-montserrat text-slate-300">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>FIDE RECOGNIZED EVENTS</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-white tracking-wide">
            INTERNATIONAL & STATE TOURNAMENTS
          </h2>
          <p className="font-montserrat text-sm text-slate-400 leading-relaxed">
            IS CHESS CENTRE is an accredited organizer of premier International FIDE Rated Tournaments in Odisha. All pairings and official standings are hosted on the world-standard Chess-Results server.
          </p>

          {/* Big Highlight Action: View Official Results on Chess-Results */}
          <div className="pt-4 flex justify-center">
            <a
              href={IS_CHESS_CENTRE_INFO.fideResultsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundManager.playVictory()}
              className="btn-3d-blue px-6 sm:px-8 py-3.5 text-xs sm:text-sm tracking-wider uppercase font-montserrat font-black flex items-center gap-2.5 shadow-xl hover:scale-105 transition"
            >
              <Trophy className="w-4 h-4 text-amber-300" />
              <span>View Official FIDE Tournament Results (Chess-Results.com)</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Tournaments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {UPCOMING_AND_PAST_TOURNAMENTS.map((t) => (
            <div
              key={t.id}
              className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 flex flex-col justify-between glass-card-interactive group"
            >
              <div>
                {/* Status Bar */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold font-montserrat uppercase tracking-wider ${
                    t.status === 'Upcoming'
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                      : t.status === 'Annual'
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                      : 'bg-blue-500/20 text-blue-300 border border-blue-500/40'
                  }`}>
                    {t.status}
                  </span>

                  {t.fideRated && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold font-montserrat text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/30">
                      <ShieldCheck className="w-3 h-3 text-amber-400" />
                      FIDE RATED
                    </span>
                  )}
                </div>

                <h3 className="font-cinzel text-lg font-bold text-white group-hover:text-amber-300 transition mb-1">
                  {t.title}
                </h3>
                <p className="font-montserrat text-xs text-rose-400 font-semibold mb-3">
                  {t.edition}
                </p>

                <div className="space-y-2 mb-4 text-xs font-montserrat text-slate-300">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{t.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-red-400 shrink-0" />
                    <span className="truncate">{t.venue}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>{t.rounds}</span>
                  </div>
                </div>

                <p className="font-montserrat text-xs text-slate-400 leading-relaxed mb-6">
                  {t.description}
                </p>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                <a
                  href={t.resultsUrl || IS_CHESS_CENTRE_INFO.fideResultsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-montserrat font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1.5 transition"
                >
                  <Trophy className="w-3.5 h-3.5 text-amber-400" />
                  <span>Rankings</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>

                {t.status === 'Upcoming' ? (
                  <button
                    onClick={() => {
                      soundManager.playClockClick();
                      onOpenConsultation();
                    }}
                    className="btn-3d-primary px-3 py-1.5 text-[11px] uppercase font-bold"
                  >
                    Register Entry
                  </button>
                ) : (
                  <span className="text-[10px] font-mono text-slate-500 uppercase">
                    Official Archive
                  </span>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Arbiter & Regulation Standards Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-slate-900/40 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="font-cinzel text-lg font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span>International FIDE & AICF Compliance</span>
            </h4>
            <p className="font-montserrat text-xs text-slate-400 max-w-2xl">
              All tournaments utilize official Swiss-Manager pairing software, DGT electronic broadcast chessboards, and are officiated by accredited International & FIDE Arbiters ensuring zero rating ambiguity.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href={IS_CHESS_CENTRE_INFO.fideResultsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-xs font-montserrat font-bold text-white transition flex items-center gap-2 border border-slate-700"
            >
              <span>Check Tournament ID: 1420724</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
