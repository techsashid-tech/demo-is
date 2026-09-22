import React, { useState, useEffect } from 'react';
import { Chess, Square, PieceSymbol, Color } from 'chess.js';
import confetti from 'canvas-confetti';
import { soundManager } from '../utils/audio';
import { IS_CHESS_CENTRE_INFO } from '../data/chessData';
import { 
  RotateCcw, 
  RotateCw, 
  Undo2, 
  Crown, 
  ExternalLink, 
  Sparkles, 
  Trophy, 
  Clock, 
  Flag,
  Handshake,
  CheckCircle2
} from 'lucide-react';

export const PlayChessPage: React.FC = () => {
  const [game, setGame] = useState<Chess>(new Chess());
  const [board, setBoard] = useState(game.board());
  const [selectedSquare, setSelectedSquare] = useState<Square | null>(null);
  const [legalMoves, setLegalMoves] = useState<string[]>([]);
  const [flipped, setFlipped] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string>('White to move. Click any white piece to start.');
  const [capturedWhite, setCapturedWhite] = useState<string[]>([]);
  const [capturedBlack, setCapturedBlack] = useState<string[]>([]);
  const [moveHistory, setMoveHistory] = useState<string[]>([]);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);

  // Piece Unicode Map
  const pieceSymbols: Record<string, string> = {
    'wp': '♙', 'wn': '♘', 'wb': '♗', 'wr': '♖', 'wq': '♕', 'wk': '♔',
    'bp': '♟', 'bn': '♞', 'bb': '♝', 'br': '♜', 'bq': '♛', 'bk': '♚'
  };

  const updateGameState = (newGame: Chess) => {
    setGame(newGame);
    setBoard(newGame.board());
    setMoveHistory(newGame.history());

    if (newGame.isCheckmate()) {
      setIsGameOver(true);
      setStatusMessage(`Checkmate! ${newGame.turn() === 'w' ? 'Black' : 'White'} wins!`);
      soundManager.playVictory();
      confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
    } else if (newGame.isDraw()) {
      setIsGameOver(true);
      setStatusMessage('Game drawn (Stalemate, 50-move rule, or repetition).');
      soundManager.playClockClick();
    } else if (newGame.inCheck()) {
      setStatusMessage(`Check! ${newGame.turn() === 'w' ? 'White' : 'Black'} King is under attack.`);
      soundManager.playCheck();
    } else {
      setStatusMessage(`${newGame.turn() === 'w' ? 'White' : 'Black'} to move.`);
    }
  };

  const handleSquareClick = (square: Square) => {
    if (isGameOver) return;

    // If no piece is selected yet
    if (!selectedSquare) {
      const piece = game.get(square);
      if (piece && piece.color === game.turn()) {
        setSelectedSquare(square);
        const moves = game.moves({ square, verbose: true }).map((m) => m.to);
        setLegalMoves(moves);
        soundManager.playClockClick();
      }
      return;
    }

    // If clicking the same square, deselect
    if (selectedSquare === square) {
      setSelectedSquare(null);
      setLegalMoves([]);
      return;
    }

    // Try making a move from selectedSquare to square
    try {
      const isCapture = !!game.get(square);
      const move = game.move({
        from: selectedSquare,
        to: square,
        promotion: 'q' // auto-queen for convenience
      });

      if (move) {
        if (isCapture) {
          soundManager.playCapture();
        } else {
          soundManager.playMove();
        }
        setSelectedSquare(null);
        setLegalMoves([]);
        updateGameState(new Chess(game.fen()));
      } else {
        // If clicked on another piece of the same color, switch selection
        const piece = game.get(square);
        if (piece && piece.color === game.turn()) {
          setSelectedSquare(square);
          const moves = game.moves({ square, verbose: true }).map((m) => m.to);
          setLegalMoves(moves);
          soundManager.playClockClick();
        } else {
          setSelectedSquare(null);
          setLegalMoves([]);
        }
      }
    } catch {
      setSelectedSquare(null);
      setLegalMoves([]);
    }
  };

  const handleUndo = () => {
    game.undo();
    setIsGameOver(false);
    setSelectedSquare(null);
    setLegalMoves([]);
    soundManager.playClockClick();
    updateGameState(new Chess(game.fen()));
  };

  const handleReset = () => {
    const newG = new Chess();
    setIsGameOver(false);
    setSelectedSquare(null);
    setLegalMoves([]);
    soundManager.playClockClick();
    updateGameState(newG);
  };

  // Convert board rows/cols
  const rows = flipped ? [0, 1, 2, 3, 4, 5, 6, 7] : [7, 6, 5, 4, 3, 2, 1, 0];
  const cols = flipped ? [7, 6, 5, 4, 3, 2, 1, 0] : [0, 1, 2, 3, 4, 5, 6, 7];

  return (
    <section id="play" className="py-20 relative bg-slate-950 min-h-screen overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner with 100% Free Instant Access */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-montserrat text-slate-300">
            <Crown className="w-3.5 h-3.5 text-amber-400" />
            <span>INSTANT GUEST PLAY • 100% FREE</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-white tracking-wide">
            PLAY CHESS ONLINE NOW
          </h2>

          <p className="font-montserrat text-sm text-slate-400 leading-relaxed">
            No registration, no password, no email, and zero friction. Enjoy unlimited games on our browser board or jump right into the live free international arena!
          </p>

          {/* Big Highlight Action: Play Free Chess Now External CTA */}
          <div className="pt-2 flex justify-center">
            <a
              href={IS_CHESS_CENTRE_INFO.playFreeChessUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundManager.playVictory()}
              className="btn-3d-primary px-8 py-4 text-xs sm:text-sm tracking-wider uppercase font-montserrat font-black flex items-center gap-2.5 shadow-2xl hover:scale-105 transition"
            >
              <Crown className="w-4 h-4 text-amber-300" />
              <span>Launch SyamChessverse Arena (Free Online Play)</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Playable Chess Arena Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Main Board Container */}
          <div className="lg:col-span-8 flex flex-col items-center">
            
            {/* Status Bar */}
            <div className="w-full max-w-[520px] mb-3 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs font-montserrat">
              <div className="flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full ${isGameOver ? 'bg-amber-400' : 'bg-emerald-400 animate-pulse'}`} />
                <span className="font-semibold text-slate-200">{statusMessage}</span>
              </div>
              <span className="font-mono text-slate-400 text-[11px]">
                Turn: {game.turn() === 'w' ? 'White' : 'Black'}
              </span>
            </div>

            {/* Chess Board */}
            <div className="w-full max-w-[520px] aspect-square rounded-2xl overflow-hidden border-4 border-slate-800 shadow-2xl bg-slate-900 p-2">
              <div className="grid grid-cols-8 grid-rows-8 w-full h-full rounded-xl overflow-hidden shadow-inner">
                {rows.map((r) =>
                  cols.map((c) => {
                    const file = String.fromCharCode(97 + c);
                    const rank = (r + 1).toString();
                    const sq = `${file}${rank}` as Square;
                    const piece = game.get(sq);
                    const isDark = (r + c) % 2 === 0;
                    const isSelected = selectedSquare === sq;
                    const isLegalTarget = legalMoves.includes(sq);

                    let bgClass = isDark ? 'bg-slate-800' : 'bg-slate-600/90';
                    if (isSelected) bgClass = 'bg-rose-900/80 ring-2 ring-rose-400 inset-0';
                    if (isLegalTarget) bgClass = isDark ? 'bg-emerald-900/60' : 'bg-emerald-700/60';

                    return (
                      <button
                        key={sq}
                        onClick={() => handleSquareClick(sq)}
                        className={`relative flex items-center justify-center aspect-square select-none cursor-pointer transition-colors duration-150 ${bgClass}`}
                      >
                        {/* Legal Move Dot */}
                        {isLegalTarget && !piece && (
                          <div className="w-3.5 h-3.5 rounded-full bg-emerald-400/80 pointer-events-none shadow" />
                        )}

                        {/* Piece Icon */}
                        {piece && (
                          <span
                            className={`text-3xl sm:text-4xl filter drop-shadow select-none ${
                              piece.color === 'w' ? 'text-amber-100' : 'text-slate-950 font-bold'
                            }`}
                          >
                            {pieceSymbols[`${piece.color}${piece.type}`]}
                          </span>
                        )}

                        {/* Coordinate Labels */}
                        {c === (flipped ? 7 : 0) && (
                          <span className="absolute top-0.5 left-0.5 text-[9px] font-mono font-bold text-slate-400 opacity-60 pointer-events-none">
                            {rank}
                          </span>
                        )}
                        {r === (flipped ? 7 : 0) && (
                          <span className="absolute bottom-0.5 right-1 text-[9px] font-mono font-bold text-slate-400 opacity-60 pointer-events-none">
                            {file}
                          </span>
                        )}
                      </button>
                    );
                  })
                )}
              </div>
            </div>

            {/* Controls Toolbar */}
            <div className="w-full max-w-[520px] mt-4 flex items-center justify-between gap-2">
              <button
                onClick={handleUndo}
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-montserrat font-semibold text-slate-300 hover:text-white transition flex items-center gap-1.5 cursor-pointer"
              >
                <Undo2 className="w-3.5 h-3.5" />
                <span>Undo</span>
              </button>

              <button
                onClick={() => {
                  soundManager.playClockClick();
                  setFlipped(!flipped);
                }}
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-montserrat font-semibold text-slate-300 hover:text-white transition flex items-center gap-1.5 cursor-pointer"
              >
                <RotateCw className="w-3.5 h-3.5" />
                <span>Flip Board</span>
              </button>

              <button
                onClick={handleReset}
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-montserrat font-semibold text-rose-400 hover:text-rose-300 transition flex items-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>New Game</span>
              </button>
            </div>

          </div>

          {/* Right Panel: Move Notation & Game Controls */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Live Move History Card */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5 backdrop-blur-xl">
              <h3 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center justify-between">
                <span>Algebraic Score Sheet</span>
                <span className="text-[10px] font-mono text-slate-400 font-normal">
                  {moveHistory.length} Moves
                </span>
              </h3>

              <div className="h-56 overflow-y-auto pr-2 space-y-1 font-mono text-xs text-slate-300 border border-slate-800/80 rounded-xl p-3 bg-slate-950">
                {moveHistory.length === 0 ? (
                  <p className="text-slate-600 text-center py-10 font-montserrat">
                    Game moves will appear here in standard algebraic notation...
                  </p>
                ) : (
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                    {Array.from({ length: Math.ceil(moveHistory.length / 2) }).map((_, moveIdx) => (
                      <div key={moveIdx} className="contents">
                        <span className="text-slate-400">
                          {moveIdx + 1}. <strong className="text-white font-semibold">{moveHistory[moveIdx * 2]}</strong>
                        </span>
                        <span className="text-amber-300">
                          {moveHistory[moveIdx * 2 + 1] || ''}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Quick Guest Tips */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 space-y-2 text-xs font-montserrat text-slate-400">
              <div className="flex items-center gap-2 text-slate-200 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Pass-and-Play or Self Training</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Play on the same screen with a friend or test tactical opening variations. Full rules (castling, promotion, checkmate) are automatically enforced.
              </p>
            </div>

            {/* Launch Free Arena CTA */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-950/80 to-slate-900 border border-blue-800/60 text-center space-y-3">
              <h4 className="font-cinzel text-sm font-bold text-white">
                Want to play against real players?
              </h4>
              <p className="text-xs font-montserrat text-blue-200/80">
                Jump into the free live chess arena with match-making, ratings, and puzzles:
              </p>
              <a
                href={IS_CHESS_CENTRE_INFO.playFreeChessUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-3d-blue py-2.5 text-xs uppercase font-bold flex items-center justify-center gap-2"
              >
                <span>Play Live Arena</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
