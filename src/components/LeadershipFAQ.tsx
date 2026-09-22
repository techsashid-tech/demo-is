import React, { useState } from 'react';
import { LEADERSHIP_TEAM, FREQUENTLY_ASKED_QUESTIONS, IS_CHESS_CENTRE_INFO } from '../data/chessData';
import { soundManager } from '../utils/audio';
import { 
  Users, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Award, 
  ShieldCheck, 
  PhoneCall,
  Crown
} from 'lucide-react';

interface LeadershipFAQProps {
  onOpenConsultation: () => void;
}

export const LeadershipFAQ: React.FC<LeadershipFAQProps> = ({ onOpenConsultation }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    soundManager.playClockClick();
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <section id="leadership" className="py-20 relative bg-slate-900/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* LEADERSHIP SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-montserrat text-slate-300">
            <Crown className="w-3.5 h-3.5 text-amber-400" />
            <span>EXPERT MENTORSHIP</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-white tracking-wide">
            LEADERSHIP & CHIEF COACHES
          </h2>
          <p className="font-montserrat text-sm text-slate-400 leading-relaxed">
            Guided by certified FIDE trainers, senior arbiters, and veteran champions who have dedicated over a decade and a half to elevating Odisha chess to international prominence.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {LEADERSHIP_TEAM.map((leader, i) => (
            <div
              key={i}
              className="rounded-3xl border border-slate-800 bg-slate-950 p-6 sm:p-8 flex flex-col justify-between glass-card-interactive"
            >
              <div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-600/20 to-blue-600/20 border border-slate-700 flex items-center justify-center text-3xl mb-5 shadow-inner">
                  {i === 0 ? '♔' : i === 1 ? '♖' : '♗'}
                </div>

                <h3 className="font-cinzel text-xl font-bold text-white mb-1">
                  {leader.name}
                </h3>
                <p className="font-montserrat text-xs text-rose-400 font-bold mb-1">
                  {leader.role}
                </p>
                <p className="font-montserrat text-[11px] text-amber-300/80 mb-4">
                  {leader.title}
                </p>

                <p className="font-montserrat text-xs text-slate-400 leading-relaxed mb-6">
                  {leader.bio}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-900 space-y-2 text-xs font-montserrat text-slate-300">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{leader.experience}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>{leader.focus}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-montserrat text-slate-300">
              <HelpCircle className="w-3.5 h-3.5 text-blue-400" />
              <span>EVERYTHING YOU NEED TO KNOW</span>
            </div>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-white tracking-wide">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="font-montserrat text-xs sm:text-sm text-slate-400">
              Clear answers regarding our Cuttack academy location, admissions, FIDE ratings, and tournament schedules.
            </p>
          </div>

          {/* Accordion Items */}
          <div className="space-y-4">
            {FREQUENTLY_ASKED_QUESTIONS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-800 bg-slate-950/80 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-900/40 transition"
                  >
                    <span className="font-cinzel text-sm sm:text-base font-bold text-white flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-rose-500" />
                      <span>{faq.question}</span>
                    </span>
                    <span className="text-slate-400 shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5 text-amber-400" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm font-montserrat text-slate-300 leading-relaxed border-t border-slate-900 bg-slate-900/30">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom FAQ Help Box */}
          <div className="mt-10 p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h4 className="font-cinzel text-base font-bold text-white">
                Have a specific question about your child's chess journey?
              </h4>
              <p className="font-montserrat text-xs text-slate-400 mt-0.5">
                Our mentors are happy to discuss batch schedules, ratings, and free trial sessions.
              </p>
            </div>
            <button
              onClick={onOpenConsultation}
              className="btn-3d-primary px-6 py-2.5 text-xs uppercase font-bold tracking-wider shrink-0 flex items-center gap-2"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Contact Chief Coach</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
