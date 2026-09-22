import React from 'react';
import { GOOGLE_REVIEWS, IS_CHESS_CENTRE_INFO } from '../data/chessData';
import { soundManager } from '../utils/audio';
import { 
  Star, 
  CheckCircle2, 
  ExternalLink, 
  MessageSquareQuote,
  ShieldCheck
} from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 relative bg-slate-950 overflow-hidden">
      {/* Lights */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-montserrat text-slate-300">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>5.0 GOOGLE VERIFIED REVIEWS</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-white tracking-wide">
            WHAT STUDENTS & PARENTS SAY
          </h2>

          <p className="font-montserrat text-sm text-slate-400 leading-relaxed">
            Real feedback from proud parents, FIDE rated tournament champions, and scholastic participants who train at IS CHESS CENTRE in Mahanadi Vihar, Cuttack.
          </p>

          {/* CTA: Read All Reviews on Google Maps */}
          <div className="pt-2 flex justify-center">
            <a
              href={`${IS_CHESS_CENTRE_INFO.googleMapsUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundManager.playClockClick()}
              className="btn-3d-blue px-6 py-3 text-xs tracking-wider uppercase font-montserrat font-bold flex items-center gap-2 shadow-lg cursor-pointer"
            >
              <Star className="w-4 h-4 text-amber-300 fill-amber-300" />
              <span>Read All Verified Reviews on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {GOOGLE_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 flex flex-col justify-between glass-card-interactive"
            >
              <div className="space-y-4">
                {/* Header inside review card */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="text-xs font-mono text-slate-400">{rev.date}</span>
                </div>

                <p className="font-montserrat text-sm text-slate-300 leading-relaxed italic">
                  “{rev.comment}”
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-6 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <h4 className="font-cinzel text-base font-bold text-white flex items-center gap-2">
                    <span>{rev.name}</span>
                    {rev.verified && (
                      <span title="Verified Google Review">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      </span>
                    )}
                  </h4>
                  <p className="font-montserrat text-xs text-amber-400/90 font-medium">
                    {rev.role}
                  </p>
                </div>

                <div className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-[10px] font-mono text-slate-400">
                  Google Review
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
