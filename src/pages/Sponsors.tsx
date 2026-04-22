import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, TrendingUp, Users } from 'lucide-react';
import { motion } from 'motion/react';

export default function Sponsors() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 pt-32">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-display font-medium text-[var(--text-primary)] mb-6">Our Sponsors</h1>
        <p className="text-lg text-[var(--text-secondary)]">
          Building a competitive robot and running a STEM team requires significant resources. We are incredibly grateful to the organizations that make our mission possible.
        </p>
      </motion.div>

      {/* Why Sponsor Us */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-none polaroid-shadow p-8"
        >
          <div className="w-12 h-12 rounded-full bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] mb-6">
            <TrendingUp size={24} />
          </div>
          <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">Invest in the Future</h3>
          <p className="text-[var(--text-secondary)] text-sm">
            Your sponsorship directly supports the development of future engineers, programmers, and business leaders in our community.
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-none polaroid-shadow p-8"
        >
          <div className="w-12 h-12 rounded-full bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] mb-6">
            <ShieldCheck size={24} />
          </div>
          <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">Brand Visibility</h3>
          <p className="text-[var(--text-secondary)] text-sm">
            Sponsors receive logo placement on our robot, team apparel, website, and pit display, reaching thousands at regional events.
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-none polaroid-shadow p-8"
        >
          <div className="w-12 h-12 rounded-full bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] mb-6">
            <Users size={24} />
          </div>
          <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">Community Impact</h3>
          <p className="text-[var(--text-secondary)] text-sm">
            Show your company's commitment to STEM education and local youth development through our 501(c)(3) equivalent program.
          </p>
        </motion.div>
      </div>

      {/* Current Sponsors Placeholder */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mb-24 bg-white p-12 polaroid-shadow"
      >
        <h2 className="text-3xl font-display font-bold text-center text-[var(--text-primary)] mb-12">2026 Season Sponsors</h2>
        
        <div className="space-y-16">
          {/* Platinum Level */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px bg-[var(--border-subtle)] flex-1"></div>
              <h3 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-[0.2em]">Platinum Level</h3>
              <div className="h-px bg-[var(--border-subtle)] flex-1"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="h-40 bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-primary)] font-display font-medium text-2xl tracking-widest uppercase hover:border-[var(--accent)] transition-colors">SPONSOR 1</div>
              <div className="h-40 bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-primary)] font-display font-medium text-2xl tracking-widest uppercase hover:border-[var(--accent)] transition-colors">SPONSOR 2</div>
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
              <div className="h-32 bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-primary)] font-display font-medium text-xl tracking-wider uppercase hover:border-[var(--accent)] transition-colors">LOGO</div>
              <div className="h-32 bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-primary)] font-display font-medium text-xl tracking-wider uppercase hover:border-[var(--accent)] transition-colors">LOGO</div>
              <div className="h-32 bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-primary)] font-display font-medium text-xl tracking-wider uppercase hover:border-[var(--accent)] transition-colors">LOGO</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[var(--text-primary)] text-white rounded-none polaroid-shadow p-12 md:p-16 text-center"
      >
        <h2 className="text-3xl font-display font-bold mb-4">Become a Corporate Partner</h2>
        <p className="text-slate-300 max-w-2xl mx-auto mb-8 text-lg">
          Interested in supporting Team 358? We offer various sponsorship tiers with unique exposure opportunities at local events. Contact us to seamlessly integrate your brand.
        </p>
        <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[var(--accent)] text-white px-8 py-4 rounded-full font-bold hover:bg-[var(--accent-hover)] transition-all">
          Request Sponsorship Packet <ArrowRight size={20} />
        </Link>
      </motion.div>
    </div>
  );
}
