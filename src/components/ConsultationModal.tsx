import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { IS_CHESS_CENTRE_INFO } from '../data/chessData';
import { soundManager } from '../utils/audio';
import { 
  X, 
  Send, 
  CheckCircle2, 
  Phone, 
  MessageSquare, 
  MapPin, 
  Crown,
  Sparkles
} from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [programChoice, setProgramChoice] = useState('Grassroots & Little Pawns (4-8 yrs)');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundManager.playVictory();
    setSubmitted(true);
    confetti({ particleCount: 75, spread: 70, origin: { y: 0.6 } });
  };

  const whatsappDirect = `https://wa.me/919437208864?text=${encodeURIComponent(
    `Hello IS Chess Centre, I would like to book a chess assessment for ${fullName || 'my child'}. Phone: ${mobileNumber}.`
  )}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="w-full max-w-lg rounded-3xl bg-slate-900 border border-slate-700/80 p-6 sm:p-8 shadow-2xl relative select-none"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="flex items-center gap-2 mb-2">
            <Crown className="w-5 h-5 text-amber-400" />
            <span className="text-xs font-montserrat font-bold text-amber-400 uppercase tracking-widest">
              Direct Expert Advisory
            </span>
          </div>

          <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white mb-1">
            Talk to Our Chess Experts
          </h3>
          <p className="font-montserrat text-xs text-slate-400 mb-6">
            Mahanadi Vihar, Cuttack • Call: +91 94372 08864
          </p>

          {submitted ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center text-emerald-400 mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="font-cinzel text-lg font-bold text-white">
                Request Registered!
              </h4>
              <p className="font-montserrat text-xs text-slate-300 leading-relaxed max-w-sm mx-auto">
                Thank you, <strong>{fullName}</strong>. Our coaching team will reach out to <strong>{mobileNumber}</strong> today.
              </p>

              <div className="pt-3 flex flex-col gap-2">
                <a
                  href={whatsappDirect}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-montserrat text-xs font-bold transition flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp Instantly</span>
                </a>
                <button
                  onClick={onClose}
                  className="w-full py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-montserrat font-semibold"
                >
                  Back to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-montserrat">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">
                  Parent / Student Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-red-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">
                  Mobile Number (WhatsApp Preferred) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 94372 08864"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-red-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">
                  Interested Program
                </label>
                <select
                  value={programChoice}
                  onChange={(e) => setProgramChoice(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-red-500 outline-none"
                >
                  <option>Grassroots & Little Pawns (4-8 yrs)</option>
                  <option>Tactical Foundations (8-14 yrs)</option>
                  <option>FIDE Competitive & Rating Booster</option>
                  <option>Online Interactive Chess Lab</option>
                  <option>Upcoming Tournament Registration</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">
                  Message / Current Rating (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Any previous chess exposure or tournament participation..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-red-500 outline-none resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full btn-3d-primary py-3.5 text-xs uppercase font-bold tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-xl"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Callback & Trial</span>
                </button>
              </div>

              <div className="text-center pt-2">
                <a
                  href={`tel:${IS_CHESS_CENTRE_INFO.phone}`}
                  className="text-slate-400 hover:text-white transition text-[11px] inline-flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Or dial directly: +91 94372 08864</span>
                </a>
              </div>
            </form>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
