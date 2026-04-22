import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function Season() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">2026 Season</h1>
        <p className="text-lg text-[var(--text-secondary)]">
          Follow our journey through the 2026 FIRST Robotics Competition season. Check back here for updates on our robot design, build progress, and competition results.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-3xl p-8 md:p-12 mb-16 text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-sm font-medium text-[var(--text-secondary)] mb-6">
          <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
          Current Phase: Pre-Season Training
        </div>
        <h2 className="text-3xl font-display font-bold mb-4">Awaiting Kickoff</h2>
        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
          The new game will be revealed in early January 2026. Until then, we are training new members, organizing our shop, and participating in offseason events.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="p-6 bg-[var(--bg-primary)] rounded-2xl border border-[var(--border-subtle)]">
            <Calendar className="mx-auto text-[var(--accent)] mb-3" size={24} />
            <h3 className="font-bold mb-1">Kickoff</h3>
            <p className="text-sm text-[var(--text-secondary)]">January 2026</p>
          </div>
          <div className="p-6 bg-[var(--bg-primary)] rounded-2xl border border-[var(--border-subtle)]">
            <Clock className="mx-auto text-[var(--accent)] mb-3" size={24} />
            <h3 className="font-bold mb-1">Build Season</h3>
            <p className="text-sm text-[var(--text-secondary)]">Jan - Feb 2026</p>
          </div>
          <div className="p-6 bg-[var(--bg-primary)] rounded-2xl border border-[var(--border-subtle)]">
            <MapPin className="mx-auto text-[var(--accent)] mb-3" size={24} />
            <h3 className="font-bold mb-1">Competitions</h3>
            <p className="text-sm text-[var(--text-secondary)]">March - April 2026</p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="aspect-video bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-3xl flex items-center justify-center p-8 text-center"
        >
          <div>
            <p className="font-mono text-sm text-[var(--text-secondary)] uppercase tracking-widest mb-2">Robot Reveal</p>
            <p className="font-display font-bold text-xl text-[var(--text-primary)]">Coming Late February</p>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="aspect-video bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-3xl flex items-center justify-center p-8 text-center"
        >
          <div>
            <p className="font-mono text-sm text-[var(--text-secondary)] uppercase tracking-widest mb-2">Competition Media</p>
            <p className="font-display font-bold text-xl text-[var(--text-primary)]">Coming March</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
