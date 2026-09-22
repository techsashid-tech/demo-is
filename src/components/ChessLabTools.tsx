import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { Chess } from 'chess.js';
import { soundManager } from '../utils/audio';
import { 
  Clock, 
  RotateCcw, 
  Play, 
  Pause, 
  Sparkles, 
  Trophy, 
  BookOpen, 
  Calculator, 
  Eye, 
  Shuffle, 
  Check, 
  HelpCircle,
  Copy,
  ChevronRight,
  Maximize2
} from 'lucide-react';

export const ChessLabTools: React.FC = () => {
  const [activeToolTab, setActiveToolTab] = useState<number>(0);

  // 1. CHESS CLOCK STATE
  const [timeWhite, setTimeWhite] = useState<number>(300); // 5 min
  const [timeBlack, setTimeBlack] = useState<number>(300);
  const [clockRunning, setClockRunning] = useState<boolean>(false);
  const [turn, setTurn] = useState<'white' | 'black'>('white');
  const [clockPreset, setClockPreset] = useState<'bullet' | 'blitz' | 'rapid' | 'classical'>('blitz');

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (clockRunning) {
      timer = setInterval(() => {
        if (turn === 'white') {
          setTimeWhite((prev) => {
            if (prev <= 1) {
              setClockRunning(false);
              soundManager.playVictory();
              return 0;
            }
            return prev - 1;
          });
        } else {
          setTimeBlack((prev) => {
            if (prev <= 1) {
              setClockRunning(false);
              soundManager.playVictory();
              return 0;
            }
            return prev - 1;
          });
        }
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [clockRunning, turn]);

  const switchClockTurn = () => {
    soundManager.playClockClick();
    if (!clockRunning) setClockRunning(true);
    setTurn(turn === 'white' ? 'black' : 'white');
  };

  const resetClock = (preset = clockPreset) => {
    setClockRunning(false);
    setTurn('white');
    if (preset === 'bullet') {
      setTimeWhite(60);
      setTimeBlack(60);
    } else if (preset === 'blitz') {
      setTimeWhite(300);
      setTimeBlack(300);
    } else if (preset === 'rapid') {
      setTimeWhite(600);
      setTimeBlack(600);
    } else {
      setTimeWhite(900);
      setTimeBlack(900);
    }
  };

  const formatClockTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // 2. DAILY PUZZLE STATE
  const puzzle = {
    fen: "r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4",
    title: "Tactical Strike: Fried Liver & Fork Attack",
    toPlay: "White to play and gain decisive advantage",
    solutionMove: "Bxf7+",
    explanation: "Sacrificing on f7! 1. Bxf7+ Kxf7 2. Nxe5+ draws the Black King out of safety and exposes the knight!"
  };
  const [puzzleSolved, setPuzzleSolved] = useState<boolean>(false);
  const [puzzleAnswer, setPuzzleAnswer] = useState<string>('');
  const [puzzleStatus, setPuzzleStatus] = useState<string>('');

  const handlePuzzleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanInput = puzzleAnswer.trim().toLowerCase();
    if (cleanInput === 'bxf7+' || cleanInput === 'bxf7' || cleanInput === 'bishop takes f7') {
      setPuzzleSolved(true);
      setPuzzleStatus('Brilliant move! You found the master sacrifice.');
      soundManager.playVictory();
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } else {
      soundManager.playCheck();
      setPuzzleStatus('Not quite! Look for the critical check that strips Black King shelter.');
    }
  };

  // 3. FEN VIEWER STATE
  const [fenInput, setFenInput] = useState<string>('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
  const [copiedFen, setCopiedFen] = useState(false);

  const copyFenToClipboard = () => {
    navigator.clipboard.writeText(fenInput);
    setCopiedFen(true);
    setTimeout(() => setCopiedFen(false), 2000);
  };

  // 4. ELO RATING CALCULATOR
  const [playerRating, setPlayerRating] = useState<number>(1450);
  const [opponentRating, setOpponentRating] = useState<number>(1520);
  const [gameResult, setGameResult] = useState<number>(1); // 1 = Win, 0.5 = Draw, 0 = Loss
  const [kFactor, setKFactor] = useState<number>(20);

  // FIDE ELO Formula
  const ratingDiff = opponentRating - playerRating;
  const expectedScore = 1 / (1 + Math.pow(10, ratingDiff / 400));
  const ratingDelta = Math.round(kFactor * (gameResult - expectedScore) * 10) / 10;
  const newRating = Math.round(playerRating + ratingDelta);

  // 5. OPENINGS EXPLORER
  const openings = [
    {
      name: "Ruy Lopez (Spanish Opening)",
      moves: "1. e4 e5 2. Nf3 Nc6 3. Bb5",
      type: "Classical Open Game",
      plan: "Puts immediate pressure on the c6 knight defending e5, seeking central control with d4."
    },
    {
      name: "Sicilian Defense (Najdorf / Dragon)",
      moves: "1. e4 c5",
      type: "Asymmetrical Counter-Attack",
      plan: "Black fights for central control from the flank, aiming for unbalanced positions with winning chances."
    },
    {
      name: "Queen's Gambit",
      moves: "1. d4 d5 2. c4",
      type: "Positional Central Control",
      plan: "White offers a wing pawn to dominate the central d4 and e4 squares and restrict Black's minor pieces."
    },
    {
      name: "French Defense",
      moves: "1. e4 e6 2. d4 d5",
      type: "Solid Solidified Pawn Chain",
      plan: "Black sets up an impenetrable pawn structure on d5 and e6, counter-striking White's center with c5."
    }
  ];
  const [selectedOpening, setSelectedOpening] = useState(0);

  // 6. BOARD THEMES
  const [boardTheme, setBoardTheme] = useState<'midnight' | 'classic' | 'emerald'>('midnight');
  const boardThemes = {
    midnight: { dark: 'bg-slate-800', light: 'bg-slate-600' },
    classic: { dark: 'bg-[#b58863]', light: 'bg-[#f0d9b5]' },
    emerald: { dark: 'bg-[#769656]', light: 'bg-[#eeeed2]' }
  };

  const toolsList = [
    "Digital Chess Clock",
    "FIDE ELO Rating Calculator",
    "Tactical Daily Puzzle",
    "Chess Opening Explorer",
    "FEN Notation Tool",
    "Piece Tactical Matrix & Values",
    "PGN Move Replayer",
    "Board Theme Customizer"
  ];

  return (
    <section id="tools" className="py-20 relative bg-slate-900/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-montserrat text-slate-300">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>INTERACTIVE CHESS LAB</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-white tracking-wide">
            15 BROWSER CHESS TOOLS & ENGINE
          </h2>
          <p className="font-montserrat text-sm text-slate-400 leading-relaxed">
            State-of-the-art interactive training widgets built for arbiters, tournament competitors, coaches, and curious students. Practice calculation, clocks, and ratings right in your browser.
          </p>
        </div>

        {/* Tools Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {toolsList.map((tName, i) => (
            <button
              key={i}
              onClick={() => {
                soundManager.playClockClick();
                setActiveToolTab(i);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-montserrat font-semibold transition cursor-pointer ${
                activeToolTab === i
                  ? 'bg-rose-600 text-white shadow-lg shadow-rose-950/40 scale-105'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {tName}
            </button>
          ))}
        </div>

        {/* Tool Display Card */}
        <div className="max-w-4xl mx-auto rounded-3xl border border-slate-800 bg-slate-950 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          
          {/* TOOL 0: DIGITAL CHESS CLOCK */}
          {activeToolTab === 0 && (
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                  <h3 className="font-cinzel text-xl font-bold text-white flex items-center gap-2">
                    <Clock className="w-5 h-5 text-amber-400" />
                    <span>Tournament Digital Chess Clock</span>
                  </h3>
                  <p className="font-montserrat text-xs text-slate-400 mt-0.5">
                    Click either clock face to switch turn and start counting down
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  {(['bullet', 'blitz', 'rapid', 'classical'] as const).map((p) => (
                    <button
                      key={p}
                      onClick={() => {
                        setClockPreset(p);
                        resetClock(p);
                      }}
                      className={`px-2.5 py-1 rounded text-[11px] font-mono uppercase transition ${
                        clockPreset === p ? 'bg-amber-400 text-slate-950 font-bold' : 'bg-slate-900 text-slate-400 hover:text-white'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              {/* Two Sided Clock Faces */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* White Clock */}
                <button
                  onClick={switchClockTurn}
                  className={`p-8 rounded-2xl border flex flex-col items-center justify-center transition-all cursor-pointer ${
                    turn === 'white' && clockRunning
                      ? 'bg-amber-400/10 border-amber-400 shadow-xl shadow-amber-950/40 scale-102 ring-2 ring-amber-400/40'
                      : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <span className="text-xs font-montserrat font-bold text-slate-400 mb-2 uppercase tracking-widest">
                    White Player {turn === 'white' && clockRunning && '• Active'}
                  </span>
                  <span className="font-mono text-5xl sm:text-6xl font-black text-white">
                    {formatClockTime(timeWhite)}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 mt-2">Tap to pass turn</span>
                </button>

                {/* Black Clock */}
                <button
                  onClick={switchClockTurn}
                  className={`p-8 rounded-2xl border flex flex-col items-center justify-center transition-all cursor-pointer ${
                    turn === 'black' && clockRunning
                      ? 'bg-red-500/10 border-red-500 shadow-xl shadow-red-950/40 scale-102 ring-2 ring-red-500/40'
                      : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <span className="text-xs font-montserrat font-bold text-slate-400 mb-2 uppercase tracking-widest">
                    Black Player {turn === 'black' && clockRunning && '• Active'}
                  </span>
                  <span className="font-mono text-5xl sm:text-6xl font-black text-white">
                    {formatClockTime(timeBlack)}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 mt-2">Tap to pass turn</span>
                </button>
              </div>

              {/* Clock Controls */}
              <div className="flex justify-center gap-3 pt-2">
                <button
                  onClick={() => setClockRunning(!clockRunning)}
                  className="px-6 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-montserrat text-xs font-bold transition flex items-center gap-2 cursor-pointer"
                >
                  {clockRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span>{clockRunning ? 'Pause Clock' : 'Start Clock'}</span>
                </button>

                <button
                  onClick={() => resetClock()}
                  className="px-6 py-2.5 rounded-full border border-slate-800 hover:bg-slate-900 text-slate-300 font-montserrat text-xs font-bold transition flex items-center gap-2 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Reset</span>
                </button>
              </div>
            </div>
          )}

          {/* TOOL 1: FIDE ELO CALCULATOR */}
          {activeToolTab === 1 && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <h3 className="font-cinzel text-xl font-bold text-white flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-emerald-400" />
                  <span>Official FIDE Rating Delta Calculator</span>
                </h3>
                <p className="font-montserrat text-xs text-slate-400 mt-0.5">
                  Calculate expected tournament performance and rating points gained/lost
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-montserrat text-slate-400 mb-1">
                      Your Current FIDE Rating:
                    </label>
                    <input
                      type="number"
                      value={playerRating}
                      onChange={(e) => setPlayerRating(Number(e.target.value))}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white font-mono text-sm focus:border-emerald-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-montserrat text-slate-400 mb-1">
                      Opponent's FIDE Rating:
                    </label>
                    <input
                      type="number"
                      value={opponentRating}
                      onChange={(e) => setOpponentRating(Number(e.target.value))}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white font-mono text-sm focus:border-emerald-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-montserrat text-slate-400 mb-1">
                      Game Outcome:
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { label: 'Win (1.0)', val: 1 },
                        { label: 'Draw (0.5)', val: 0.5 },
                        { label: 'Loss (0.0)', val: 0 }
                      ].map((item) => (
                        <button
                          key={item.val}
                          type="button"
                          onClick={() => setGameResult(item.val)}
                          className={`py-2 rounded-lg text-xs font-montserrat font-bold cursor-pointer transition ${
                            gameResult === item.val
                              ? 'bg-emerald-600 text-white'
                              : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-montserrat text-slate-400 mb-1">
                      FIDE K-Factor:
                    </label>
                    <select
                      value={kFactor}
                      onChange={(e) => setKFactor(Number(e.target.value))}
                      className="w-full px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs font-montserrat outline-none"
                    >
                      <option value={40}>K = 40 (Under 18 or New to FIDE)</option>
                      <option value={20}>K = 20 (Standard Junior & Club Rated)</option>
                      <option value={10}>K = 10 (Master Rated 2400+)</option>
                    </select>
                  </div>
                </div>

                {/* Calculation Result */}
                <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
                  <div className="space-y-4">
                    <span className="text-xs font-montserrat uppercase tracking-wider text-slate-400 font-bold">
                      FIDE Formula Output
                    </span>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-400">Expected Score Probability:</span>
                        <span className="font-mono text-white font-bold">{(expectedScore * 100).toFixed(1)}%</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-400">Rating Change (Delta):</span>
                        <span className={`font-mono font-bold text-base ${ratingDelta >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                          {ratingDelta >= 0 ? `+${ratingDelta}` : ratingDelta} ELO
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-sm pt-2 border-t border-slate-800">
                        <span className="text-slate-200 font-semibold">New FIDE Rating:</span>
                        <span className="font-mono text-xl text-amber-400 font-black">{newRating}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-[10px] font-montserrat text-slate-500 mt-4">
                    * Calculated according to official FIDE Handbook Handbook Section B.02 Rating Regulations.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TOOL 2: TACTICAL DAILY PUZZLE */}
          {activeToolTab === 2 && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <h3 className="font-cinzel text-xl font-bold text-white flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-amber-400" />
                  <span>{puzzle.title}</span>
                </h3>
                <p className="font-montserrat text-xs text-amber-400 mt-0.5 font-medium">
                  {puzzle.toPlay}
                </p>
              </div>

              {/* Puzzle Board Preview */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                <div className="max-w-[280px] mx-auto rounded-xl overflow-hidden border border-slate-700 shadow-xl">
                  <div className="grid grid-cols-8 aspect-square">
                    {Array.from({ length: 64 }).map((_, i) => {
                      const r = Math.floor(i / 8);
                      const c = i % 8;
                      const isDark = (r + c) % 2 === 1;
                      
                      // Highlight key tactical squares
                      let highlight = '';
                      if (r === 1 && c === 5) highlight = 'bg-rose-900/60'; // f7
                      if (r === 4 && c === 2) highlight = 'bg-amber-900/50'; // c4 bishop
                      
                      return (
                        <div
                          key={i}
                          className={`flex items-center justify-center text-sm select-none ${
                            highlight || (isDark ? 'bg-slate-800' : 'bg-slate-700/60')
                          }`}
                        >
                          {r === 4 && c === 2 && <span className="text-white font-serif">♗</span>}
                          {r === 0 && c === 4 && <span className="text-slate-400 font-serif">♚</span>}
                          {r === 1 && c === 5 && <span className="text-slate-400 font-serif">♟</span>}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-xs font-montserrat text-slate-300 leading-relaxed">
                    White has played the Italian Game. Black's king is still uncastled and the f7 square is only defended by the king! What is White's best tactical move?
                  </p>

                  <form onSubmit={handlePuzzleSubmit} className="space-y-3">
                    <div>
                      <label className="block text-xs font-montserrat text-slate-400 mb-1">
                        Enter move (e.g. "Bxf7+"):
                      </label>
                      <input
                        type="text"
                        placeholder="Type move here..."
                        value={puzzleAnswer}
                        onChange={(e) => setPuzzleAnswer(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white font-mono text-sm focus:border-rose-500 outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-3d-primary py-2.5 text-xs font-montserrat font-bold uppercase tracking-wider cursor-pointer"
                    >
                      Verify Solution
                    </button>
                  </form>

                  {puzzleStatus && (
                    <div className={`p-3 rounded-xl text-xs font-montserrat ${
                      puzzleSolved ? 'bg-emerald-950/80 border border-emerald-800 text-emerald-300' : 'bg-rose-950/80 border border-rose-800 text-rose-300'
                    }`}>
                      {puzzleStatus}
                    </div>
                  )}

                  {puzzleSolved && (
                    <p className="text-xs font-mono text-amber-300 bg-slate-900 p-3 rounded-lg border border-slate-800">
                      Analysis: {puzzle.explanation}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TOOL 3: OPENING EXPLORER */}
          {activeToolTab === 3 && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <h3 className="font-cinzel text-xl font-bold text-white flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-blue-400" />
                  <span>Grandmaster Opening Repertoire</span>
                </h3>
                <p className="font-montserrat text-xs text-slate-400 mt-0.5">
                  Explore core principles of standard tournament chess openings
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {openings.map((op, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      soundManager.playClockClick();
                      setSelectedOpening(idx);
                    }}
                    className={`p-3 rounded-xl border text-left transition cursor-pointer ${
                      selectedOpening === idx
                        ? 'bg-blue-600/20 border-blue-500 text-white'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div className="font-cinzel text-xs font-bold truncate">{op.name}</div>
                    <div className="font-mono text-[10px] text-amber-400 mt-1">{op.moves}</div>
                  </button>
                ))}
              </div>

              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                <div className="flex justify-between items-center">
                  <h4 className="font-cinzel text-lg font-bold text-white">
                    {openings[selectedOpening].name}
                  </h4>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-blue-500/20 text-blue-300 border border-blue-500/40">
                    {openings[selectedOpening].type}
                  </span>
                </div>
                <div className="font-mono text-sm text-amber-300 font-semibold bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                  {openings[selectedOpening].moves}
                </div>
                <p className="text-xs font-montserrat text-slate-300 leading-relaxed">
                  <strong>Strategic Objective:</strong> {openings[selectedOpening].plan}
                </p>
              </div>
            </div>
          )}

          {/* TOOL 4: FEN NOTATION TOOL */}
          {activeToolTab === 4 && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <h3 className="font-cinzel text-xl font-bold text-white flex items-center gap-2">
                  <Eye className="w-5 h-5 text-purple-400" />
                  <span>FEN Notation Inspector & Generator</span>
                </h3>
                <p className="font-montserrat text-xs text-slate-400 mt-0.5">
                  Forsyth–Edwards Notation representation of chess board state
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-montserrat text-slate-400 mb-1">
                    Current FEN String:
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={fenInput}
                      onChange={(e) => setFenInput(e.target.value)}
                      className="flex-1 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white font-mono text-xs focus:border-purple-500 outline-none"
                    />
                    <button
                      onClick={copyFenToClipboard}
                      className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-montserrat font-bold flex items-center gap-1.5 transition cursor-pointer"
                    >
                      {copiedFen ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      <span>{copiedFen ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { label: 'Initial Position', fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1' },
                    { label: 'Scholar’s Mate', fen: 'r1bqkb1r/pppp1Qpp/2n2n2/4p3/2B1P3/8/PPPP1PPP/RNB1K1NR b KQkq - 0 4' },
                    { label: 'Endgame Lucena', fen: '1K1k4/1P6/8/8/8/8/r7/2R5 w - - 0 1' }
                  ].map((preset, i) => (
                    <button
                      key={i}
                      onClick={() => setFenInput(preset.fen)}
                      className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-left text-xs font-montserrat text-slate-300 transition"
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TOOL 5: PIECE TACTICAL MATRIX */}
          {activeToolTab === 5 && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <h3 className="font-cinzel text-xl font-bold text-white">
                  Piece Tactical Matrix & Point Hierarchy
                </h3>
                <p className="font-montserrat text-xs text-slate-400 mt-0.5">
                  Standard material evaluation and positional characteristics
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { symbol: '♙', name: 'Pawn', val: '1 Point', role: 'Soul of chess; establishes central pawn chains, promotes on 8th rank.' },
                  { symbol: '♘', name: 'Knight', val: '3 Points', role: 'Leaper; excels in closed positions, outpost squares, and tricky forks.' },
                  { symbol: '♗', name: 'Bishop', val: '3.25 Points', role: 'Long-range sniper; devastating on open diagonals and as a bishop pair.' },
                  { symbol: '♖', name: 'Rook', val: '5 Points', role: 'Heavy artillery; controls open files and 7th rank infiltration.' },
                  { symbol: '♕', name: 'Queen', val: '9 Points', role: 'Supreme tactical weapon combining Rook and Bishop trajectory.' },
                  { symbol: '♔', name: 'King', val: 'Infinite Value', role: 'Must be safeguarded early; turns into a powerful endgame combatant.' }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                    <div className="text-3xl font-serif text-amber-400">{item.symbol}</div>
                    <div className="font-cinzel font-bold text-white text-sm">{item.name}</div>
                    <div className="text-xs font-mono text-emerald-400 font-semibold">{item.val}</div>
                    <p className="text-[11px] font-montserrat text-slate-400 leading-snug pt-1">
                      {item.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TOOL 6: PGN MOVE REPLAYER */}
          {activeToolTab === 6 && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <h3 className="font-cinzel text-xl font-bold text-white">
                  PGN (Portable Game Notation) Replayer
                </h3>
                <p className="font-montserrat text-xs text-slate-400 mt-0.5">
                  Standard notation replayer used in tournament scoresheets
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs text-amber-300 leading-relaxed">
                  [Event "4th IS Open International 2025"]<br />
                  [Site "Cuttack, IND"]<br />
                  [Round "1"]<br />
                  [Result "1-0"]<br />
                  1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Nb8 10. d4 Nbd7 1-0
                </div>
                <p className="text-xs font-montserrat text-slate-400">
                  Students at IS CHESS CENTRE learn standard algebraic notation from their very first week, enabling full post-game computer critique.
                </p>
              </div>
            </div>
          )}

          {/* TOOL 7: BOARD THEME CUSTOMIZER */}
          {activeToolTab === 7 && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <h3 className="font-cinzel text-xl font-bold text-white">
                  Board Theme & Visual Style Customizer
                </h3>
                <p className="font-montserrat text-xs text-slate-400 mt-0.5">
                  Select your preferred high-contrast tournament board colors
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'midnight', name: 'Midnight Slate' },
                  { id: 'classic', name: 'Classic Wood' },
                  { id: 'emerald', name: 'Emerald Tournament' }
                ].map((th) => (
                  <button
                    key={th.id}
                    onClick={() => setBoardTheme(th.id as any)}
                    className={`p-4 rounded-xl border text-center font-montserrat text-xs font-bold transition cursor-pointer ${
                      boardTheme === th.id
                        ? 'bg-rose-600 text-white border-rose-500 shadow-lg'
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white'
                    }`}
                  >
                    {th.name}
                  </button>
                ))}
              </div>

              {/* Sample Theme Preview */}
              <div className="max-w-[200px] mx-auto rounded-lg overflow-hidden border border-slate-700 shadow-xl">
                <div className="grid grid-cols-4 aspect-square">
                  {Array.from({ length: 16 }).map((_, idx) => {
                    const r = Math.floor(idx / 4);
                    const c = idx % 4;
                    const isDark = (r + c) % 2 === 1;
                    return (
                      <div
                        key={idx}
                        className={`aspect-square ${isDark ? boardThemes[boardTheme].dark : boardThemes[boardTheme].light}`}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
