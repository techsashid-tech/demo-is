import React from 'react';

interface IsChessLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  withGlow?: boolean;
}

export const IsChessLogo: React.FC<IsChessLogoProps> = ({
  className = '',
  size = 'md',
  withGlow = true
}) => {
  const sizeMap = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
    xl: 'w-28 h-28',
    '2xl': 'w-40 h-40'
  };

  return (
    <div className={`relative inline-block select-none ${sizeMap[size]} ${className}`}>
      {withGlow && (
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-red-600/40 via-blue-600/40 to-indigo-600/40 blur-md opacity-60 animate-pulse-glow pointer-events-none" />
      )}
      
      {/* Official IS CHESS CENTRE Vector Logo */}
      <svg 
        viewBox="0 0 512 512" 
        className="w-full h-full relative z-10 drop-shadow-xl rounded-2xl overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logoRedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#eb4232" />
            <stop offset="100%" stop-color="#cb2818" />
          </linearGradient>
          <linearGradient id="logoBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#4a93f5" />
            <stop offset="100%" stop-color="#2a73da" />
          </linearGradient>
          <linearGradient id="logoNavyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#243372" />
            <stop offset="100%" stop-color="#182352" />
          </linearGradient>
          <clipPath id="logoClip">
            <rect x="0" y="0" width="512" height="512" rx="72" ry="72" />
          </clipPath>
        </defs>

        <g clipPath="url(#logoClip)">
          {/* Top-Left Red Square */}
          <rect x="0" y="0" width="256" height="264" fill="url(#logoRedGrad)" />
          
          {/* Top-Right Blue Square */}
          <rect x="256" y="0" width="256" height="264" fill="url(#logoBlueGrad)" />

          {/* Equalizer Frequency Bars at Horizontal Division */}
          <g opacity="0.35">
            <line x1="20" y1="230" x2="20" y2="295" stroke="#a78bfa" strokeWidth="3" />
            <line x1="36" y1="238" x2="36" y2="288" stroke="#a78bfa" strokeWidth="3" />
            <line x1="52" y1="225" x2="52" y2="300" stroke="#a78bfa" strokeWidth="3" />
            <line x1="68" y1="235" x2="68" y2="290" stroke="#a78bfa" strokeWidth="3" />
            <line x1="84" y1="220" x2="84" y2="305" stroke="#a78bfa" strokeWidth="3" />
            <line x1="100" y1="232" x2="100" y2="294" stroke="#a78bfa" strokeWidth="3" />
            <line x1="116" y1="224" x2="116" y2="302" stroke="#a78bfa" strokeWidth="3" />
            <line x1="132" y1="240" x2="132" y2="286" stroke="#a78bfa" strokeWidth="3" />
            <line x1="148" y1="228" x2="148" y2="298" stroke="#a78bfa" strokeWidth="3" />
            <line x1="164" y1="222" x2="164" y2="304" stroke="#a78bfa" strokeWidth="3" />
            <line x1="180" y1="236" x2="180" y2="290" stroke="#a78bfa" strokeWidth="3" />
            <line x1="196" y1="226" x2="196" y2="300" stroke="#a78bfa" strokeWidth="3" />
            <line x1="212" y1="238" x2="212" y2="288" stroke="#a78bfa" strokeWidth="3" />
            <line x1="228" y1="224" x2="228" y2="302" stroke="#a78bfa" strokeWidth="3" />
            <line x1="244" y1="234" x2="244" y2="292" stroke="#a78bfa" strokeWidth="3" />
            <line x1="260" y1="228" x2="260" y2="298" stroke="#c084fc" strokeWidth="3" />
            <line x1="276" y1="238" x2="276" y2="288" stroke="#c084fc" strokeWidth="3" />
            <line x1="292" y1="222" x2="292" y2="304" stroke="#c084fc" strokeWidth="3" />
            <line x1="308" y1="235" x2="308" y2="291" stroke="#c084fc" strokeWidth="3" />
            <line x1="324" y1="226" x2="324" y2="300" stroke="#c084fc" strokeWidth="3" />
            <line x1="340" y1="238" x2="340" y2="288" stroke="#c084fc" strokeWidth="3" />
            <line x1="356" y1="224" x2="356" y2="302" stroke="#c084fc" strokeWidth="3" />
            <line x1="372" y1="232" x2="372" y2="294" stroke="#c084fc" strokeWidth="3" />
            <line x1="388" y1="220" x2="388" y2="306" stroke="#c084fc" strokeWidth="3" />
            <line x1="404" y1="236" x2="404" y2="290" stroke="#c084fc" strokeWidth="3" />
            <line x1="420" y1="225" x2="420" y2="301" stroke="#c084fc" strokeWidth="3" />
            <line x1="436" y1="238" x2="436" y2="288" stroke="#c084fc" strokeWidth="3" />
            <line x1="452" y1="228" x2="452" y2="298" stroke="#c084fc" strokeWidth="3" />
            <line x1="468" y1="235" x2="468" y2="291" stroke="#c084fc" strokeWidth="3" />
            <line x1="484" y1="226" x2="484" y2="300" stroke="#c084fc" strokeWidth="3" />
          </g>

          {/* Bottom Half Navy Block */}
          <rect x="0" y="260" width="512" height="252" fill="url(#logoNavyGrad)" />

          {/* Letter 'i' (White) with flared base */}
          <g filter="drop-shadow(0 3px 6px rgba(0,0,0,0.2))">
            <circle cx="132" cy="74" r="23" fill="#ffffff" />
            <path d="M 120 110 L 144 110 L 144 214 Q 158 220 166 230 L 166 238 L 98 238 L 98 230 Q 106 220 120 214 Z" fill="#ffffff" />
          </g>

          {/* Calligraphic Script Letter 'S' (White) */}
          <g filter="drop-shadow(0 3px 6px rgba(0,0,0,0.2))">
            <path d="M 440 82 C 430 65 400 42 355 42 C 302 42 262 76 262 128 C 262 178 305 212 358 238 C 392 254 416 270 416 292 C 416 318 386 338 344 338 C 298 338 268 316 256 294 L 268 284 C 280 302 305 322 344 322 C 376 322 402 308 402 288 C 402 266 376 248 340 230 C 286 202 248 168 248 122 C 248 64 296 28 356 28 C 406 28 440 54 456 75 Z" fill="#ffffff" />
          </g>

          {/* Word "CHESS" in bold classical Serif */}
          <text 
            x="256" 
            y="388" 
            fontFamily="'Cinzel', Georgia, serif" 
            fontSize="76" 
            fontWeight="800" 
            letterSpacing="4" 
            fill="#ffffff" 
            textAnchor="middle"
          >
            CHESS
          </text>

          {/* Word "C E N T R E" in clean spaced Sans-serif */}
          <text 
            x="256" 
            y="458" 
            fontFamily="'Montserrat', sans-serif" 
            fontSize="34" 
            fontWeight="800" 
            letterSpacing="14" 
            fill="#ffffff" 
            textAnchor="middle"
          >
            CENTRE
          </text>
        </g>
      </svg>
    </div>
  );
};
