import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, TrendingUp, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { siteConfig } from '../config/site';

export default function Sponsors() {
  return (
    <div className="section-pad pt-32">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-display font-medium text-[var(--text-primary)] mb-6">Corporate Partnerships</h1>
        <p className="text-lg text-[var(--text-secondary)]">
          It takes significant resources to build industrial-grade robots and run a technology team. We partner with companies, foundations, and community organizations to make our mission possible.
        </p>
        <div className="mt-8">
          <p className="text-sm text-[var(--text-secondary)]">Are you an individual or family looking to help?</p>
          <Link to="/donate" className="text-[var(--accent)] hover:underline font-bold text-sm">Visit our Donation page</Link>
        </div>
      </motion.div>

      {/* Why Sponsor Us */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-transparent border border-[var(--border-subtle)] rounded-2xl polaroid-shadow p-8"
        >
          <div className="w-12 h-12 rounded-full border-2 border-[var(--accent)] bg-[var(--bg-primary)] flex items-center justify-center text-[var(--accent)] mb-6">
            <TrendingUp size={24} />
          </div>
          <h3 className="text-2xl font-display font-medium text-[var(--text-primary)] mb-3">Invest in the Future</h3>
          <p className="text-[var(--text-secondary)] text-sm">
            Your sponsorship directly supports the development of future engineers, programmers, and business leaders in our community.
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-transparent border border-[var(--border-subtle)] rounded-2xl polaroid-shadow p-8"
        >
          <div className="w-12 h-12 rounded-full border-2 border-[var(--accent)] bg-[var(--bg-primary)] flex items-center justify-center text-[var(--accent)] mb-6">
            <ShieldCheck size={24} />
          </div>
          <h3 className="text-2xl font-display font-medium text-[var(--text-primary)] mb-3">Company Visibility</h3>
          <p className="text-[var(--text-secondary)] text-sm">
            Sponsors are recognized through prominent logo placement on our competition robot, pit display, team apparel, and digital platforms.
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-transparent border border-[var(--border-subtle)] rounded-2xl polaroid-shadow p-8"
        >
          <div className="w-12 h-12 rounded-full border-2 border-[var(--accent)] bg-[var(--bg-primary)] flex items-center justify-center text-[var(--accent)] mb-6">
            <Users size={24} />
          </div>
          <h3 className="text-2xl font-display font-medium text-[var(--text-primary)] mb-3">Talent Pipeline</h3>
          <p className="text-[var(--text-secondary)] text-sm">
            Connect directly with highly motivated, STEM-focused students who will become the next generation of engineers and technologists.
          </p>
        </motion.div>
      </div>

      {/* Current Sponsors Placeholder */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mb-24 bg-[var(--bg-secondary)] rounded-2xl border border-[var(--border-subtle)] p-8 md:p-12 polaroid-shadow"
      >
        <h2 className="text-3xl font-display font-medium text-center text-[var(--text-primary)] mb-12">2026 Season Sponsors</h2>
        
        <div className="space-y-16">
          {/* Platinum Level */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px bg-[var(--border-subtle)] flex-1"></div>
              <h3 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-[0.2em]">Platinum Level</h3>
              <div className="h-px bg-[var(--border-subtle)] flex-1"></div>
            </div>
            
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="h-40 bg-[var(--bg-primary)] rounded-xl border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-primary)] font-display text-2xl tracking-widest uppercase hover:border-[var(--accent)] transition-colors">SPONSOR 1</div>
              <div className="h-40 bg-[var(--bg-primary)] rounded-xl border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-primary)] font-display text-2xl tracking-widest uppercase hover:border-[var(--accent)] transition-colors">SPONSOR 2</div>
            </div>
          </div>

          {/* Gold Level */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px bg-[var(--border-subtle)] flex-1"></div>
              <h3 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-[0.2em]">Gold Level</h3>
              <div className="h-px bg-[var(--border-subtle)] flex-1"></div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="h-32 bg-[var(--bg-primary)] rounded-xl border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-primary)] font-display font-medium text-xl tracking-wider uppercase hover:border-[var(--accent)] transition-colors">LOGO</div>
              <div className="h-32 bg-[var(--bg-primary)] rounded-xl border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-primary)] font-display font-medium text-xl tracking-wider uppercase hover:border-[var(--accent)] transition-colors">LOGO</div>
              <div className="h-32 bg-[var(--bg-primary)] rounded-xl border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-primary)] font-display font-medium text-xl tracking-wider uppercase hover:border-[var(--accent)] transition-colors">LOGO</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[var(--text-primary)] text-[var(--bg-primary)] rounded-2xl polaroid-shadow p-12 md:p-16 text-center shadow-2xl"
      >
        <h2 className="text-3xl font-display font-medium mb-4">Become a Corporate Partner</h2>
        <p className="text-[var(--bg-secondary)] max-w-2xl mx-auto mb-10 text-lg opacity-90">
          Interested in supporting Team {siteConfig.teamNumber}? We offer various sponsorship tiers with unique exposure opportunities at local events. Contact us for our complete sponsorship packet.
        </p>
        <Link to="/contact" className="btn-primary bg-[var(--bg-primary)] text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]">
          Request Sponsorship Packet <ArrowRight size={20} className="ml-2" />
        </Link>
      </motion.div>
    </div>
  );
}
