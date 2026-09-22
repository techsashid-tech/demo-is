import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { IsChessLogo } from './IsChessLogo';
import { soundManager } from '../utils/audio';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'completed'>('loading');

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setPhase('completed');
          setTimeout(() => {
            onComplete();
          }, 600);
          return 100;
        }
        return prev + 2;
      });
    }, 28);

    return () => clearInterval(timer);
  }, [onComplete]);

  const handleSkip = () => {
    soundManager.playClockClick();
    onComplete();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-white select-none overflow-hidden"
      >
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Subtle Chess Board Grid Backdrop */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

        {/* Central Logo & Brand Animation */}
        <div className="relative z-10 flex flex-col items-center max-w-md px-6 text-center">
          <motion.div
            initial={{ scale: 0.7, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="animate-float-3d mb-6"
          >
            <IsChessLogo size="xl" withGlow={true} />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-cinzel text-3xl sm:text-4xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300"
          >
            IS CHESS CENTRE
          </motion.h1>

          {/* Subtitle / Location */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="font-montserrat text-xs tracking-widest text-slate-400 mt-1 uppercase"
          >
            Mahanadi Vihar • Cuttack, Odisha
          </motion.p>

          {/* Animated Slogan */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="my-6 inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-slate-800 bg-slate-900/60 backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
            <span className="font-cinzel text-xs font-semibold tracking-widest text-amber-300">
              THINK • PLAN • CONQUER
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          </motion.div>

          {/* Progress Bar Container */}
          <div className="w-64 sm:w-72 mt-2">
            <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800 p-0.5">
              <motion.div
                className="h-full bg-gradient-to-r from-red-500 via-amber-400 to-blue-500 rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>
            <div className="flex justify-between items-center text-[10px] font-montserrat text-slate-500 mt-2">
              <span>INITIALIZING ENGINE</span>
              <span className="font-mono text-slate-300">{progress}%</span>
            </div>
          </div>

          {/* Skip Button */}
          <button
            onClick={handleSkip}
            className="mt-8 text-xs font-montserrat tracking-wider text-slate-400 hover:text-white transition-colors duration-200 underline underline-offset-4 cursor-pointer"
          >
            Skip Intro →
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
