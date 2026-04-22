import { Calendar as CalendarIcon, MapPin, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function Events() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 pt-32">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-display font-medium text-[var(--text-primary)] mb-6">Team Calendar</h1>
        <p className="text-lg text-[var(--text-secondary)]">
          Stay up to date with our meetings, build sessions, outreach events, and competitions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-2 bg-white border border-[var(--border-subtle)] polaroid-shadow p-4 md:p-8 mb-12 lg:mb-0"
        >
          <div className="flex items-center justify-between mb-6 px-2">
            <div className="flex items-center gap-3">
              <CalendarIcon className="text-[var(--accent)]" size={24} />
              <h2 className="text-2xl font-display font-bold text-[var(--text-primary)]">Upcoming Events</h2>
            </div>
            <button className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider hover:text-[var(--accent)] transition-colors">
              + Subscribe
            </button>
          </div>
          
          {/* Google Calendar Embed Placeholder */}
          <div className="aspect-square md:aspect-[4/3] w-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)] flex items-center justify-center relative overflow-hidden">
            <div className="text-center p-6 z-10">
              <p className="font-mono text-sm text-[var(--text-secondary)] uppercase tracking-widest mb-2">Integration Active</p>
              <p className="font-display font-medium text-2xl text-[var(--text-primary)] mb-4">Google Calendar Embed</p>
              <p className="text-sm text-[var(--text-secondary)] max-w-md mx-auto">
                Once the 2026 schedule is finalized, the team's official Google Calendar will render here.
              </p>
            </div>
            {/* Abstract calendar grid background */}
            <div className="absolute inset-0 grid grid-cols-7 grid-rows-5 gap-px bg-[var(--border-subtle)] opacity-40">
              {Array.from({ length: 35 }).map((_, i) => (
                <div key={i} className="bg-[var(--bg-secondary)]"></div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Featured Events Sidebar */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <div className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] polaroid-shadow p-6">
            <h3 className="font-display font-bold text-xl text-[var(--text-primary)] mb-6 border-b border-[var(--border-subtle)] pb-4">Key Dates</h3>
            
            <div className="space-y-6">
              <div className="group">
                <p className="text-[var(--accent)] font-bold text-sm mb-1 uppercase tracking-wider">January 2026</p>
                <h4 className="font-bold text-[var(--text-primary)] text-lg mb-2 group-hover:text-[var(--accent)] transition-colors">FIRST Robotics Kickoff</h4>
                <div className="flex items-start gap-2 text-[var(--text-secondary)] text-sm mb-1">
                  <MapPin size={16} className="mt-0.5 shrink-0" />
                  <span>Hauppauge High School</span>
                </div>
                <div className="flex items-start gap-2 text-[var(--text-secondary)] text-sm">
                  <Clock size={16} className="mt-0.5 shrink-0" />
                  <span>9:00 AM - 3:00 PM</span>
                </div>
              </div>

              <div className="group">
                <p className="text-[var(--accent)] font-bold text-sm mb-1 uppercase tracking-wider">March 2026</p>
                <h4 className="font-bold text-[var(--text-primary)] text-lg mb-2 group-hover:text-[var(--accent)] transition-colors">SBPLI Long Island Regional</h4>
                <div className="flex items-start gap-2 text-[var(--text-secondary)] text-sm mb-1">
                  <MapPin size={16} className="mt-0.5 shrink-0" />
                  <span>Hofstra University</span>
                </div>
                <div className="flex items-start gap-2 text-[var(--text-secondary)] text-sm">
                  <Clock size={16} className="mt-0.5 shrink-0" />
                  <span>All Day Event</span>
                </div>
              </div>
            </div>
            
            <button className="w-full mt-8 bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[var(--text-primary)] py-3 rounded text-sm font-bold hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors">
              Download Full Schedule
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
