import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_MOMENTS, IS_CHESS_CENTRE_INFO } from '../data/chessData';
import { GalleryPhoto } from '../types';
import { soundManager } from '../utils/audio';
import { 
  Trophy, 
  Camera, 
  ExternalLink, 
  X, 
  Calendar, 
  MapPin, 
  Maximize2,
  Filter
} from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  const categories = ['All', 'Tournaments', 'Championships', 'Felicitation', 'Coaching'];

  const filteredPhotos = activeCategory === 'All'
    ? GALLERY_MOMENTS
    : GALLERY_MOMENTS.filter((p) => p.category === activeCategory);

  // SVG representation generators for the authentic event scenes
  const renderVisualCard = (visualId: string, title: string) => {
    return (
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center p-4">
        {/* Subtle Backdrop Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 opacity-90" />
        
        {/* Ambient Lights */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-600/20 rounded-full blur-2xl" />
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/20 rounded-full blur-2xl" />

        {/* Dynamic Graphic Scene */}
        <div className="relative z-10 text-center space-y-2 p-3">
          <div className="inline-flex p-3 rounded-2xl bg-slate-800/80 border border-slate-700/80 shadow-lg text-amber-400 mx-auto">
            {visualId.includes('trophy') || visualId.includes('podium') ? (
              <Trophy className="w-8 h-8 text-amber-400" />
            ) : visualId.includes('press') ? (
              <Camera className="w-8 h-8 text-blue-400" />
            ) : (
              <span className="text-3xl font-serif">♔</span>
            )}
          </div>
          <h4 className="font-cinzel text-xs sm:text-sm font-bold text-white line-clamp-1">
            {title}
          </h4>
          <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/60">
            Client Archive Verified
          </span>
        </div>
      </div>
    );
  };

  return (
    <section id="gallery" className="py-20 relative bg-slate-900/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-montserrat text-slate-300">
            <Camera className="w-3.5 h-3.5 text-rose-500" />
            <span>ARCHIVE OF EXCELLENCE</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-white tracking-wide">
            PHOTO GALLERY & MOMENTS
          </h2>
          <p className="font-montserrat text-sm text-slate-400 leading-relaxed">
            Relive historic moments from our International FIDE tournaments, Odisha State Championships, felicitation ceremonies, and intense chess calculations in Cuttack.
          </p>

          {/* External Google Maps Photo Gallery Button */}
          <div className="pt-2 flex justify-center">
            <a
              href={`${IS_CHESS_CENTRE_INFO.googleMapsUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundManager.playClockClick()}
              className="btn-3d-blue px-6 py-3 text-xs tracking-wider uppercase font-montserrat font-bold flex items-center gap-2 shadow-lg cursor-pointer"
            >
              <Camera className="w-4 h-4 text-amber-300" />
              <span>Open Full Photo Gallery on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                soundManager.playClockClick();
                setActiveCategory(cat);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-montserrat font-semibold transition cursor-pointer ${
                activeCategory === cat
                  ? 'bg-rose-600 text-white shadow-lg shadow-rose-950/40 scale-105'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => {
                soundManager.playClockClick();
                setSelectedPhoto(photo);
              }}
              className="rounded-3xl border border-slate-800 bg-slate-950/80 p-4 flex flex-col justify-between glass-card-interactive cursor-pointer group"
            >
              <div>
                {/* Visual Scene Box */}
                <div className="overflow-hidden rounded-2xl mb-4 group-hover:scale-102 transition duration-300">
                  {renderVisualCard(photo.imageVisual, photo.title)}
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1.5">
                  <span className="text-amber-400 font-semibold">{photo.event}</span>
                  <span>{photo.year}</span>
                </div>

                <h3 className="font-cinzel text-sm font-bold text-white group-hover:text-rose-400 transition-colors line-clamp-2 mb-2">
                  {photo.title}
                </h3>

                <p className="font-montserrat text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {photo.description}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-900 flex items-center justify-between text-xs font-montserrat text-slate-400 group-hover:text-white">
                <span className="text-[10px] uppercase tracking-wider">{photo.category}</span>
                <span className="flex items-center gap-1 text-[11px] text-blue-400">
                  <span>View Details</span>
                  <Maximize2 className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-2xl rounded-3xl bg-slate-900 border border-slate-700 p-6 sm:p-8 shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="overflow-hidden rounded-2xl mb-6">
                {renderVisualCard(selectedPhoto.imageVisual, selectedPhoto.title)}
              </div>

              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-amber-400/10 text-amber-300 border border-amber-400/30">
                    {selectedPhoto.event}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-slate-800 text-slate-300">
                    {selectedPhoto.year}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-rose-950 text-rose-300 border border-rose-800">
                    {selectedPhoto.category}
                  </span>
                </div>

                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
                  {selectedPhoto.title}
                </h3>

                <p className="font-montserrat text-sm text-slate-300 leading-relaxed">
                  {selectedPhoto.description}
                </p>

                <div className="pt-4 flex items-center justify-between border-t border-slate-800">
                  <a
                    href={IS_CHESS_CENTRE_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-montserrat text-blue-400 hover:text-blue-300 flex items-center gap-1.5"
                  >
                    <span>View Location on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => setSelectedPhoto(null)}
                    className="px-5 py-2 rounded-full bg-slate-800 hover:bg-slate-700 text-xs font-montserrat font-bold text-white"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
