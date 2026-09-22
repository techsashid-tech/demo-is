import { ProgramItem, TournamentItem, GalleryPhoto, ReviewItem, FAQItem, LeaderProfile } from '../types';

export const IS_CHESS_CENTRE_INFO = {
  name: "IS CHESS CENTRE",
  tagline: "Where Every Move Builds a Master",
  founder: "Chief Coach & FIDE Organizers",
  address: "Mahanadi Vihar, Cuttack, Odisha – 753004, India",
  phone: "+91 94372 08864",
  email: "ischesscentre@gmail.com",
  googleMapsUrl: "https://www.google.com/maps/place/IS+CHESS+CENTRE/@20.4633061,85.9112682,17z/",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.384666355653!2d85.9086933!3d20.4633061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190da2d6c66657%3A0xe541c4f4fa11c97a!2sIS%20CHESS%20CENTRE!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  fideResultsUrl: "https://s1.chess-results.com/tnr1420724.aspx?lan=1&tno=1420724&zeilen=99999&SNode=S0",
  playFreeChessUrl: "https://syamchessverse.vercel.app/#creator-spotlight",
  designerCredit: "Crafted & Designed by S K Das • 07798977519",
  workingHours: "Monday – Sunday: 7:00 AM – 9:00 PM IST",
  stats: [
    { label: "State & National Champions", value: "350+" },
    { label: "FIDE Rated Tournaments", value: "25+" },
    { label: "Active Trainees", value: "1,200+" },
    { label: "Years of Excellence", value: "15+" }
  ]
};

export const CHESS_PROGRAMS: ProgramItem[] = [
  {
    id: "grassroots-beginner",
    title: "Grassroots & Little Pawns",
    subtitle: "Ages 4–8 • Fundamentals & Board Geometry",
    ageGroup: "4 – 8 Years",
    pieceIcon: "♙",
    level: "Beginner",
    description: "Designed specifically for young minds to develop cognitive spatial awareness, basic board coordinates, algebraic notation, piece movements, piece values, and checkmate patterns.",
    features: [
      "Board visualization and square naming drills",
      "Rules of capture, castling, en-passant, and promotion",
      "Basic checkmate patterns (Ladder mate, Queen helper)",
      "Focus, patience, and good sportsmanship etiquette"
    ]
  },
  {
    id: "intermediate-tactics",
    title: "Tactical Foundations & Calculation",
    subtitle: "Ages 8–14 • Forks, Pins, Skewers & Combinations",
    ageGroup: "8 – 14 Years",
    pieceIcon: "♘",
    level: "Intermediate",
    description: "Deep dive into sharp combinations, forcing moves, basic pawn structures, opening principles without memorization, and fundamental endgame conversions (King + Rook vs King).",
    features: [
      "Forks, pins, skewers, discovered attacks, and double checks",
      "Calculating candidate moves (checks, captures, threats)",
      "Essential pawn endgames and opposition rules",
      "Tournament clock practice & algebraic notation recording"
    ]
  },
  {
    id: "fide-competitive",
    title: "FIDE Rating & Competitive Prep",
    subtitle: "Ages 10+ • ELO Target 1400 – 1800+",
    ageGroup: "10 Years & Above",
    pieceIcon: "♖",
    level: "Advanced",
    description: "Intensive training tailored for students competing in Odisha State Championships, National School Games, and International FIDE Rated Open Tournaments.",
    features: [
      "Complete repertoire building for White & Black",
      "Prophylaxis, positional sacrifices, and weak square exploitation",
      "Complex Rook and Minor piece endgames (Lucena & Philidor)",
      "Psychological time management under pressure"
    ]
  },
  {
    id: "grandmaster-mastery",
    title: "Elite Masterclass & Grandmaster Track",
    subtitle: "Rated 1800+ • Title Aspirations (CM, FM, IM)",
    ageGroup: "All Ages (By Rating Selection)",
    pieceIcon: "♔",
    level: "Mastery",
    description: "One-on-one and high-octane master batches led by FIDE-certified trainers. Rigorous engine-assisted game analysis, preparation against specific opponents, and advanced dynamics.",
    features: [
      "Advanced opening novelties and computer prep methodology",
      "Complex positional imbalances and pawn storm dynamics",
      "Deep calculation trees and visualization under blindfold drills",
      "Custom tournament scheduling and FIDE norm optimization"
    ]
  },
  {
    id: "weekend-club",
    title: "Weekend Rapid & Blitz Academy",
    subtitle: "All Skill Levels • Practical Tournament Rounds",
    ageGroup: "Open to All Ages",
    pieceIcon: "♗",
    level: "Intermediate",
    description: "Weekly Swiss system sparring sessions with official DGT electronic clocks, FIDE tie-breaks, pairing software review, and post-game coach critique.",
    features: [
      "5-round official Swiss league every weekend",
      "Live coach post-mortem and blunder dissection",
      "Rapid (15+10) and Blitz (3+2) adaptability",
      "Cash prizes, trophies, and merit certificates"
    ]
  },
  {
    id: "online-global",
    title: "Online Interactive Chess Lab",
    subtitle: "Worldwide Access • Live 1-on-1 & Batches",
    ageGroup: "Global Students",
    pieceIcon: "♕",
    level: "Intermediate",
    description: "High-definition interactive digital chessboard training with screen sharing, cloud PGN storage, automated homework puzzles, and weekly evaluation reports.",
    features: [
      "Live interactive interactive board with instant feedback",
      "Weekly annotated game analysis directly sent to parents",
      "Access to private IS Chess Centre online arena tournaments",
      "Flexible schedule tailored for international time zones"
    ]
  }
];

export const UPCOMING_AND_PAST_TOURNAMENTS: TournamentItem[] = [
  {
    id: "5th-is-open-2026",
    title: "5th IS International Open FIDE Rated Chess Tournament 2026",
    edition: "5th Grand Edition",
    date: "May 22 – May 27, 2026",
    venue: "Jawaharlal Nehru Indoor Stadium / Cuttack Club, Odisha",
    status: "Upcoming",
    fideRated: true,
    eventCode: "FIDE-IS-2026-OPEN",
    category: "Open FIDE International (Classical 90+30)",
    rounds: "9 Rounds Swiss System",
    description: "The flagship international classical chess event in Odisha welcoming Grandmasters, International Masters, and titled prodigies from across India and abroad.",
    resultsUrl: "https://s1.chess-results.com/tnr1420724.aspx?lan=1&tno=1420724&zeilen=99999&SNode=S0"
  },
  {
    id: "6th-is-below-1700-2026",
    title: "6th IS International Below-1700 FIDE Rated Chess Tournament 2026",
    edition: "6th Below-1700 Special",
    date: "June 12 – June 15, 2026",
    venue: "Barabati Stadium Banquet Complex, Cuttack",
    status: "Upcoming",
    fideRated: true,
    eventCode: "FIDE-IS-BELOW1700-2026",
    category: "Below 1700 FIDE Rating Special",
    rounds: "8 Rounds Swiss System",
    description: "Odisha's premier rating booster tournament with separate age-category prizes (U-7, U-9, U-11, U-13, U-15) and guaranteed cash purse.",
    resultsUrl: "https://s1.chess-results.com/tnr1420724.aspx?lan=1&tno=1420724&zeilen=99999&SNode=S0"
  },
  {
    id: "4th-is-open-2025",
    title: "4th IS Open International FIDE Rated Chess Tournament 2025",
    edition: "4th Edition Landmark",
    date: "Concluded with Record 600+ Players",
    venue: "Cuttack Indoor Sports Arena, Odisha",
    status: "Concluded",
    fideRated: true,
    eventCode: "FIDE Event ID: 1420724",
    category: "International FIDE Rated Classical",
    rounds: "9 Rounds Swiss System",
    description: "Massive international tournament covered by state television and press media. Attracted champions from 14 states with live electronic board broadcast.",
    resultsUrl: "https://s1.chess-results.com/tnr1420724.aspx?lan=1&tno=1420724&zeilen=99999&SNode=S0"
  },
  {
    id: "odisha-u7-state-2025",
    title: "Odisha State Under-7 Open & Girls Chess Championship 2025",
    edition: "State Championship",
    date: "Annual State Championship",
    venue: "Organized by IS Chess Centre, Cuttack",
    status: "Concluded",
    fideRated: true,
    category: "State Championship Under-7",
    rounds: "7 Rounds Swiss",
    description: "Official state selection championship recognizing rising boy and girl prodigies who represented Odisha at National Youth Championships.",
    resultsUrl: "https://s1.chess-results.com/tnr1420724.aspx?lan=1&tno=1420724&zeilen=99999&SNode=S0"
  },
  {
    id: "11th-cuttack-cup",
    title: "11th Cuttack Cup Chess Tournament (Bharat Ratna Atal Bihari Vajpayee Memorial)",
    edition: "11th Annual Trophy",
    date: "Memorial Cup Tournament",
    venue: "Mahanadi Vihar Community Center, Cuttack",
    status: "Annual",
    fideRated: false,
    category: "Open Rapid & Youth Age Categories",
    rounds: "7 Rounds Swiss",
    description: "Heritage annual tournament honoring Indian leadership and sports excellence, featuring glittering champion trophies and special scholastic scholarships.",
    resultsUrl: "https://s1.chess-results.com/tnr1420724.aspx?lan=1&tno=1420724&zeilen=99999&SNode=S0"
  },
  {
    id: "all-odisha-school-2018",
    title: "All Odisha School Chess Championship & Pyarimohan Samantaray Memorial",
    edition: "Inter-School Grand League",
    date: "Annual Inter-School League",
    venue: "Ravenshaw Collegiate / Cuttack Hall",
    status: "Annual",
    fideRated: false,
    category: "School Children League (50+ Schools)",
    rounds: "8 Rounds Swiss",
    description: "Odisha's largest grassroots scholastic event bringing together over 50 schools and 800 aspiring child masters in an Olympic-standard hall.",
    resultsUrl: "https://s1.chess-results.com/tnr1420724.aspx?lan=1&tno=1420724&zeilen=99999&SNode=S0"
  }
];

export const GALLERY_MOMENTS: GalleryPhoto[] = [
  {
    id: "photo-1",
    title: "4th IS Open International FIDE Rated Winners Podium",
    event: "4th IS Open International 2025",
    year: "2025",
    category: "Tournaments",
    description: "Champions holding prestigious trophies and prize envelopes at the 4th IS Open International FIDE Rated Chess Tournament organized in Cuttack.",
    imageVisual: "podium-4th-is-open"
  },
  {
    id: "photo-2",
    title: "Odisha State Under-7 Girls & Open Championship Felicitation",
    event: "Odisha State U-7 Championship 2025",
    year: "2025",
    category: "Championships",
    description: "Young child prodigies and proud parents receiving trophies and merit certificates from sports dignitaries and IS Chess Centre leadership.",
    imageVisual: "state-u7-champions"
  },
  {
    id: "photo-3",
    title: "Live TV Press & Media Coverage at Mega Tournament Hall",
    event: "Press & News Conference",
    year: "2025",
    category: "Tournaments",
    description: "Major television networks (News World Odisha, Kanak TV) interviewing the IS Chess Centre chief organizer surrounded by hundreds of young chess players.",
    imageVisual: "press-media-conference"
  },
  {
    id: "photo-4",
    title: "All Odisha School Chess Championship Mega Hall",
    event: "Scholastic Grand League",
    year: "2024",
    category: "Championships",
    description: "Over 600 schoolchildren seated in disciplined rows with DGT electronic chess clocks and tournament scoresheets.",
    imageVisual: "mega-hall-schoolchildren"
  },
  {
    id: "photo-5",
    title: "11th Cuttack Cup Champion Trophy Presentation",
    event: "11th Cuttack Cup Chess Tournament",
    year: "2024",
    category: "Felicitation",
    description: "Young tournament victor honored on stage with grand champion trophy and felicitation shawl for exemplary chess performance.",
    imageVisual: "cuttack-cup-trophy"
  },
  {
    id: "photo-6",
    title: "Rotary Odisha Inter-District Chess Premier League (IOCPL)",
    event: "Odisha Chess Premier League Player Auction",
    year: "2025",
    category: "Tournaments",
    description: "Official team franchise owners and IS Chess Centre coaches during the premier league player auction and trophy launch ceremony.",
    imageVisual: "iocpl-player-auction"
  },
  {
    id: "photo-7",
    title: "Ceremonial First Move on Board 1",
    event: "Inaugural Ceremony FIDE International",
    year: "2025",
    category: "Tournaments",
    description: "Chief guest and senior FIDE arbiters executing the ceremonial White opening move 1.e4 to officially launch the tournament.",
    imageVisual: "ceremonial-first-move"
  },
  {
    id: "photo-8",
    title: "Young Master Calculating at Digital Chess Clock",
    event: "Intense Classical Round",
    year: "2025",
    category: "Coaching",
    description: "Young IS Chess Centre student exhibiting intense concentration, calculating deep combinations with minutes left on the DGT 2010 clock.",
    imageVisual: "youth-concentration-dgt"
  }
];

export const GOOGLE_REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Dr. Priyadarshi Mohapatra",
    role: "Parent of State U-9 Champion",
    rating: 5,
    date: "1 month ago",
    comment: "IS Chess Centre has transformed my son's focus and academic patience. The coach's dedication in Mahanadi Vihar is unparalleled in Cuttack. He climbed from an unrated beginner to FIDE 1380 within 14 months!",
    verified: true
  },
  {
    id: "rev-2",
    name: "Subrat Kumar Sahoo",
    role: "FIDE Rated Player (1650)",
    rating: 5,
    date: "3 weeks ago",
    comment: "The best chess training academy in Cuttack, Odisha. They don't just teach routine openings; they teach you how to think like a chess master. Organizing regular international FIDE rated tournaments gives students massive real-world confidence.",
    verified: true
  },
  {
    id: "rev-3",
    name: "Ananya Patnaik",
    role: "Parent of Little Pawn batch",
    rating: 5,
    date: "2 months ago",
    comment: "My 6-year-old daughter looks forward to every session at IS Chess Centre. The friendly, encouraging atmosphere, puzzle competitions, and disciplined environment are exceptional. Highly recommend for any child!",
    verified: true
  },
  {
    id: "rev-4",
    name: "Rajesh Ranjan Das",
    role: "Tournament Competitor & Arbitrage Trainee",
    rating: 5,
    date: "4 months ago",
    comment: "The 4th IS Open International was flawlessly organized. DGT clocks, professional FIDE arbiters, clean seating, and transparent pairings published live on Chess-Results. Cuttack is proud of IS Chess Centre.",
    verified: true
  }
];

export const FREQUENTLY_ASKED_QUESTIONS: FAQItem[] = [
  {
    category: "General",
    question: "Where is IS CHESS CENTRE located and how can I visit?",
    answer: "IS CHESS CENTRE is centrally located in Mahanadi Vihar, Cuttack, Odisha – 753004. You can visit us in person any day between 7:00 AM and 9:00 PM, or call us directly at +91 94372 08864 for directions and batch scheduling."
  },
  {
    category: "Coaching",
    question: "What is the minimum age to enroll my child in chess training?",
    answer: "Children can begin as early as 4 to 5 years old in our 'Grassroots & Little Pawns' foundation program. At this tender age, chess enhances spatial memory, visual calculation, discipline, and problem-solving without cognitive strain."
  },
  {
    category: "Tournaments",
    question: "Are your tournaments recognized and rated by FIDE / AICF?",
    answer: "Yes! IS CHESS CENTRE regularly organizes official International FIDE Rated Open Chess Tournaments, Below-1700 FIDE events, and Odisha State Selection Championships in accordance with All India Chess Federation (AICF) and World Chess Federation (FIDE) regulations. All player ratings reflect directly on the official FIDE portal."
  },
  {
    category: "Tournaments",
    question: "Where can I check live pairings and official standings of your tournaments?",
    answer: "All tournament pairings, round-by-round results, player cards, and final standings are published on the official Chess-Results server. You can click the 'View Official Chess Results' button right here on our website to access the official server records."
  },
  {
    category: "Online",
    question: "Do you offer online chess classes for students outside Cuttack?",
    answer: "Yes! We run our 'Interactive Online Chess Lab' for students across India and overseas. Classes include live board screen-sharing, cloud PGN reviews, weekly homework assignments, and weekend practice matches on our free platform."
  },
  {
    category: "Coaching",
    question: "How long does it take for a beginner to get their official FIDE rating?",
    answer: "With consistent weekly training, homework, and participation in 2 to 3 recognized FIDE rated tournaments, dedicated students typically earn their initial FIDE classical rating within 9 to 18 months."
  }
];

export const LEADERSHIP_TEAM: LeaderProfile[] = [
  {
    name: "Chief Coach & FIDE Organizers",
    role: "Founder & Head of Academy",
    title: "International FIDE Certified Trainer & Organizer",
    bio: "Pioneered grassroots chess development across Cuttack and coastal Odisha for over 15 years. Spearheaded multiple FIDE Rated International Tournaments, nurturing hundreds of state medalists and National School Games champions.",
    experience: "15+ Years Coaching & Event Management",
    focus: "Tactical Depth, Positional Mastery & Grassroots Talent Identification"
  },
  {
    name: "Senior FIDE Arbiter & Technical Director",
    role: "Tournament Operations & Technical Oversight",
    title: "FIDE Arbiter & Swiss-Manager Specialist",
    bio: "Ensures international tournament integrity, official FIDE regulations compliance, live electronic board broadcasting, and accurate player rating report generation.",
    experience: "12+ Years Official Tournament Arbitration",
    focus: "FIDE Laws of Chess, Electronic DGT Setup, Swiss-Manager Protocol"
  },
  {
    name: "Senior Youth Prodigy Mentor",
    role: "Director of Youth & Foundation Training",
    title: "Master Level Coach & Child Psychology Specialist",
    bio: "Specializes in developing young minds from ages 4 through 12, transforming natural curiosity into disciplined calculation, patience, and competitive sportsmanship.",
    experience: "10+ Years Dedicated Youth Training",
    focus: "Foundational Board Geometry, Visualization & Emotional Resilience"
  }
];
