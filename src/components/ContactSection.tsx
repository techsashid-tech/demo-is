import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { IS_CHESS_CENTRE_INFO } from '../data/chessData';
import { soundManager } from '../utils/audio';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  ExternalLink, 
  Compass, 
  MessageSquare,
  Navigation
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    ageGroup: 'Junior (4 - 12 Years)',
    interest: 'Grassroots Foundation',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundManager.playVictory();
    setFormSubmitted(true);
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.7 } });
  };

  const whatsappUrl = `https://wa.me/919437208864?text=${encodeURIComponent(
    `Hello IS Chess Centre, I would like to enquire about chess coaching and tournament admission for ${formData.name || 'my child'}.`
  )}`;

  return (
    <section id="contact" className="py-20 relative bg-slate-950 overflow-hidden">
      {/* Lights */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-montserrat text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-red-500" />
            <span>VISIT OUR ACADEMY</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-white tracking-wide">
            TALK TO OUR CHESS EXPERTS
          </h2>

          <p className="font-montserrat text-sm text-slate-400 leading-relaxed">
            Ready to ignite your child's strategic thinking? Visit our academy in Mahanadi Vihar or send us an enquiry for batch schedules and free skill assessments.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form Card */}
          <div className="lg:col-span-6 rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-10 backdrop-blur-xl">
            <h3 className="font-cinzel text-xl font-bold text-white mb-2">
              Book a Free Trial or Enquiry
            </h3>
            <p className="font-montserrat text-xs text-slate-400 mb-6">
              Fill out your details below and our chief coach will connect with you within 24 hours.
            </p>

            {formSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-950/60 border border-emerald-800/80 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center text-emerald-400 mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-cinzel text-xl font-bold text-white">
                  Enquiry Received Successfully!
                </h4>
                <p className="font-montserrat text-xs text-slate-300 leading-relaxed max-w-sm mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Our coaching director has received your request and will call you on <strong>{formData.phone}</strong> shortly.
                </p>

                <div className="pt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-montserrat text-xs font-bold transition"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat Instantly on WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-montserrat text-xs">
                <div>
                  <label className="block text-slate-300 mb-1 font-semibold">
                    Student / Parent Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Mohanty"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-red-500 outline-none transition"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 mb-1 font-semibold">
                      Mobile Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 94372 08864"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-red-500 outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1 font-semibold">
                      Student Age Group
                    </label>
                    <select
                      value={formData.ageGroup}
                      onChange={(e) => setFormData({ ...formData, ageGroup: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-red-500 outline-none transition"
                    >
                      <option>Little Pawns (4 – 8 Years)</option>
                      <option>Junior Tactical (8 – 14 Years)</option>
                      <option>FIDE Competitive (14+ Years)</option>
                      <option>Adult / Open Category</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 mb-1 font-semibold">
                    Program Preference
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-red-500 outline-none transition"
                  >
                    <option>Classroom Batches (Mahanadi Vihar Academy)</option>
                    <option>Interactive Online Chess Lab</option>
                    <option>FIDE Tournament Entry Registration</option>
                    <option>Weekend Rapid & Blitz Club</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 mb-1 font-semibold">
                    Additional Message or Skill Background (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us if the student has previous chess experience or tournament ratings..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-red-500 outline-none transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-3d-primary py-3.5 text-xs uppercase font-bold tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-xl"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Admission Enquiry</span>
                </button>
              </form>
            )}

            {/* Quick Contact Badges */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
              <a
                href={`tel:${IS_CHESS_CENTRE_INFO.phone}`}
                className="inline-flex items-center gap-2 text-xs font-montserrat text-slate-300 hover:text-white transition"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>+91 94372 08864</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-montserrat text-emerald-400 hover:text-emerald-300 transition"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps & Location Information */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* NAP Card */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur-xl space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-red-600/10 border border-red-500/30 flex items-center justify-center text-red-500 shrink-0 mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-cinzel text-lg font-bold text-white">
                    {IS_CHESS_CENTRE_INFO.name}
                  </h4>
                  <p className="font-montserrat text-xs text-slate-300 leading-relaxed mt-1">
                    {IS_CHESS_CENTRE_INFO.address}
                  </p>
                  <p className="font-montserrat text-xs text-amber-400 mt-1">
                    Landmark: Central Location, Mahanadi Vihar Residential Hub
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-slate-800 text-xs font-montserrat text-slate-300">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>{IS_CHESS_CENTRE_INFO.workingHours}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Ample Parking & AC Classrooms</span>
                </div>
              </div>
            </div>

            {/* Google Maps Embed Container with Interactive Controls */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900 overflow-hidden shadow-2xl relative">
              <div className="p-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between text-xs font-montserrat">
                <span className="flex items-center gap-2 text-slate-300 font-semibold">
                  <Compass className="w-4 h-4 text-red-500 animate-spin" />
                  <span>Official Google Map Location</span>
                </span>

                <a
                  href={IS_CHESS_CENTRE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-[11px] font-bold text-white flex items-center gap-1 transition"
                >
                  <span>Get Driving Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="aspect-[4/3] w-full bg-slate-950">
                <iframe
                  title="IS Chess Centre Google Maps Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.384666355653!2d85.9086933!3d20.4633061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190da2d6c66657%3A0xe541c4f4fa11c97a!2sIS%20CHESS%20CENTRE!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'contrast(1.05) saturate(1.1)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="p-3 bg-slate-950 border-t border-slate-800 text-center">
                <a
                  href={IS_CHESS_CENTRE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-montserrat text-blue-400 hover:text-blue-300 inline-flex items-center gap-1 font-semibold"
                >
                  <span>Open Full Satellite Map & Reviews on Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
