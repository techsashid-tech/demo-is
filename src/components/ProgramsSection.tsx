import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CHESS_PROGRAMS } from '../data/chessData';
import { ProgramItem } from '../types';
import { soundManager } from '../utils/audio';
import { 
  Check, 
  ArrowRight, 
  Sparkles, 
  X, 
  BookOpen, 
  Calendar, 
  Clock, 
  PhoneCall,
  Crown
} from 'lucide-react';

interface ProgramsSectionProps {
  onOpenConsultation: () => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onOpenConsultation }) => {
  const [selectedProgram, setSelectedProgram] = useState<ProgramItem | null>(null);

  const getLevelColor = (level: ProgramItem['level']) => {
    switch (level) {
      case 'Beginner':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'Intermediate':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
      case 'Advanced':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/30';
      case 'Mastery':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
    }
  };

  return (
    <section id="programs" className="py-20 relative bg-slate-900/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-montserrat text-slate-300">
            <Crown className="w-3.5 h-3.5 text-amber-400" />
            <span>STRUCTURED PEDAGOGY</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-white tracking-wide">
            TRAINING PROGRAMS & CURRICULUM
          </h2>
          <p className="font-montserrat text-sm text-slate-400 leading-relaxed">
            Every grandmaster started with their first pawn push. Our progressive multi-tier curriculum accommodates learners at every stage of their chess journey.
          </p>
        </div>

        {/* 6 Programs Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CHESS_PROGRAMS.map((prog) => (
            <div
              key={prog.id}
              className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 flex flex-col justify-between glass-card-interactive group"
            >
              <div>
                {/* Header within card */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-3xl filter drop-shadow">{prog.pieceIcon}</span>
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold font-montserrat border uppercase tracking-wider ${getLevelColor(prog.level)}`}>
                    {prog.level}
                  </span>
                </div>

                <h3 className="font-cinzel text-xl font-bold text-white group-hover:text-red-400 transition-colors duration-200 mb-1">
                  {prog.title}
                </h3>
                <p className="font-montserrat text-xs text-amber-300/90 font-medium mb-3">
                  {prog.subtitle}
                </p>

                <p className="font-montserrat text-xs text-slate-400 leading-relaxed mb-5">
                  {prog.description}
                </p>

                {/* Features list */}
                <div className="space-y-2 mb-6 border-t border-slate-900 pt-4">
                  {prog.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs font-montserrat text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-4 border-t border-slate-900/90 flex items-center justify-between gap-3">
                <button
                  onClick={() => {
                    soundManager.playClockClick();
                    setSelectedProgram(prog);
                  }}
                  className="text-xs font-montserrat font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 transition cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Syllabus Details</span>
                </button>

                <button
                  onClick={() => {
                    soundManager.playClockClick();
                    onOpenConsultation();
                  }}
                  className="px-3.5 py-1.5 rounded-full bg-slate-900 hover:bg-red-600 text-white text-xs font-montserrat font-bold transition-colors cursor-pointer border border-slate-800"
                >
                  Enroll Now
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Program Details Modal */}
      <AnimatePresence>
        {selectedProgram && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-lg rounded-3xl bg-slate-900 border border-slate-700 p-6 sm:p-8 shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedProgram(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{selectedProgram.pieceIcon}</span>
                <div>
                  <h3 className="font-cinzel text-xl font-bold text-white">
                    {selectedProgram.title}
                  </h3>
                  <p className="font-montserrat text-xs text-amber-400">
                    {selectedProgram.subtitle}
                  </p>
                </div>
              </div>

              <div className="space-y-4 my-6 text-xs sm:text-sm font-montserrat text-slate-300">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Target Age Bracket:</span>
                    <strong className="text-white">{selectedProgram.ageGroup}</strong>
                  </div>
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Skill Tier:</span>
                    <strong className="text-white">{selectedProgram.level}</strong>
                  </div>
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Training Facility:</span>
                    <strong className="text-white">Mahanadi Vihar & Online</strong>
                  </div>
                </div>

                <p className="leading-relaxed">
                  {selectedProgram.description}
                </p>

                <div className="space-y-2 pt-2">
                  <h4 className="font-cinzel text-xs font-bold text-white uppercase tracking-wider">
                    Core Learning Modules:
                  </h4>
                  {selectedProgram.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t border-slate-800">
                <button
                  onClick={() => {
                    setSelectedProgram(null);
                    onOpenConsultation();
                  }}
                  className="flex-1 btn-3d-primary py-3 text-xs uppercase font-bold tracking-wider"
                >
                  Enquire for This Batch
                </button>
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="px-4 py-3 rounded-full border border-slate-700 bg-slate-800 text-xs font-bold text-slate-300 hover:text-white"
                >
                  Close
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
