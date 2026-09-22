import React, { useState } from 'react';
import { motion } from 'motion/react';
import { IS_CHESS_CENTRE_INFO } from '../data/chessData';
import { soundManager } from '../utils/audio';
import { 
  Trophy, 
  Target, 
  Brain, 
  Award, 
  MapPin, 
  ShieldCheck, 
  HeartHandshake,
  Calendar,
  CheckCircle2
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [selectedMilestone, setSelectedMilestone] = useState(4); // default 2025

  const milestones = [
    {
      year: "2010",
      title: "Academy Foundation",
      location: "Mahanadi Vihar, Cuttack",
      description: "Founded with the mission to democratize competitive chess training in coastal Odisha, starting with grassroots batches of 15 children.",
      piece: "♙"
    },
    {
      year: "2017",
      title: "All Odisha School Chess",
      location: "Packed Mega Hall, Cuttack",
      description: "Organized Odisha's landmark scholastic tournament with over 50 schools and 600+ junior players competing with DGT digital clocks.",
      piece: "♘"
    },
    {
      year: "2021",
      title: "Interactive Online Lab",
      location: "Statewide & Global Reach",
      description: "Expanded our pedagogical framework with digital screen boards, automated PGN analysis, and live online weekend rapid leagues.",
      piece: "♗"
    },
    {
      year: "2024",
      title: "11th Cuttack Cup Landmark",
      location: "Mahanadi Vihar Complex",
      description: "Celebrated 11 continuous years of the prestigious Cuttack Cup (Atal Bihari Vajpayee Memorial), awarding scholarships to emerging talents.",
      piece: "♖"
    },
    {
      year: "2025",
      title: "4th IS Open International FIDE",
      location: "Indoor Sports Complex, Cuttack",
      description: "Flagship international FIDE rated classical tournament attracting Grandmasters, titled arbiters, and champions from 14 states with TV coverage.",
      piece: "♕"
    },
    {
      year: "2026",
      title: "5th & 6th FIDE Grand Editions",
      location: "Jawaharlal Nehru Arena",
      description: "Scheduled 5th IS Open International and Below-1700 FIDE Championships with record prize pools and international master norm opportunities.",
      piece: "♔"
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-slate-950">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-red-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-montserrat text-slate-300">
            <Brain className="w-3.5 h-3.5 text-red-500" />
            <span>OUR LEGACY & MISSION</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-white tracking-wide">
            BUILDING MINDS, ONE MOVE AT A TIME
          </h2>
          <p className="font-montserrat text-sm text-slate-400 leading-relaxed">
            Headquartered in <strong className="text-slate-200">Mahanadi Vihar, Cuttack, Odisha – 753004</strong>, IS CHESS CENTRE has stood as a beacon of intellectual discipline, strategic thinking, and international tournament excellence for over 15 years.
          </p>
        </div>

        {/* 4 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 mb-4 group-hover:scale-110 transition">
              <Brain className="w-6 h-6" />
            </div>
            <h3 className="font-cinzel text-lg font-bold text-white mb-2">Cognitive Mastery</h3>
            <p className="font-montserrat text-xs text-slate-400 leading-relaxed">
              We cultivate pattern recognition, calculation depth, logical foresight, and spatial reasoning that directly translates to academic excellence.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition">
              <Trophy className="w-6 h-6" />
            </div>
            <h3 className="font-cinzel text-lg font-bold text-white mb-2">FIDE Tournament Path</h3>
            <p className="font-montserrat text-xs text-slate-400 leading-relaxed">
              Direct exposure to official FIDE-rated tournaments, certified arbiters, electronic clocks, and official Chess-Results pairing procedures.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-cinzel text-lg font-bold text-white mb-2">Grassroots Inception</h3>
            <p className="font-montserrat text-xs text-slate-400 leading-relaxed">
              Specialized early-age pedagogy for 4-to-8 year olds turning youthful energy into focused patience and tactical delight.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="font-cinzel text-lg font-bold text-white mb-2">Sportsmanship & Grit</h3>
            <p className="font-montserrat text-xs text-slate-400 leading-relaxed">
              Teaching players to analyze defeat without demoralization and celebrate victory with humble grace, building resilient life characters.
            </p>
          </div>
        </div>

        {/* Milestone Timeline */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 sm:p-10 backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
                Historical Milestone Journey
              </h3>
              <p className="font-montserrat text-xs text-slate-400 mt-1">
                Explore key turning points in Odisha's chess evolution powered by IS Chess Centre
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-montserrat text-slate-400">
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>2010 — 2026 Archive</span>
            </div>
          </div>

          {/* Interactive Milestone Selector Buttons */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3 mb-8">
            {milestones.map((m, idx) => {
              const isSelected = selectedMilestone === idx;
              return (
                <button
                  key={m.year}
                  onClick={() => {
                    soundManager.playClockClick();
                    setSelectedMilestone(idx);
                  }}
                  className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-b from-red-600 to-rose-700 border-rose-500 text-white shadow-lg shadow-rose-950/50 scale-105'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                  }`}
                >
                  <div className="text-xl sm:text-2xl mb-1">{m.piece}</div>
                  <div className="font-cinzel text-sm sm:text-base font-bold">{m.year}</div>
                </button>
              );
            })}
          </div>

          {/* Milestone Detail Card */}
          <motion.div
            key={selectedMilestone}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-amber-400">
                <MapPin className="w-3.5 h-3.5 text-red-400" />
                <span>{milestones[selectedMilestone].location}</span>
              </div>
              <h4 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
                {milestones[selectedMilestone].title}
              </h4>
              <p className="font-montserrat text-sm text-slate-300 leading-relaxed">
                {milestones[selectedMilestone].description}
              </p>
            </div>

            <div className="w-full md:w-auto shrink-0 flex items-center justify-end">
              <div className="px-5 py-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
                <span className="block text-2xl sm:text-3xl font-cinzel font-black text-amber-400">
                  {milestones[selectedMilestone].year}
                </span>
                <span className="text-[10px] font-montserrat uppercase text-slate-400 tracking-wider">
                  Verified Landmark
                </span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
