import { Heart, Wrench, Plane, Cpu, Mail, CreditCard } from 'lucide-react';
import { motion } from 'motion/react';

export default function Donate() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 pt-32">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <div className="w-16 h-16 bg-[var(--accent)]/10 text-[var(--accent)] rounded-full flex items-center justify-center mx-auto mb-6">
          <Heart size={32} />
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-medium text-[var(--text-primary)] mb-6">Support Our Mission</h1>
        <p className="text-lg text-[var(--text-secondary)]">
          Your donation directly funds robot parts, competition fees, and travel expenses for our students. As a 501(c)(3) equivalent school program, your contribution makes a direct impact.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-none polaroid-shadow p-8 md:p-12"
        >
          <h2 className="text-2xl font-display font-bold text-[var(--text-primary)] mb-6">Make a Financial Contribution</h2>
          <p className="text-[var(--text-secondary)] mb-8">
            We accept support through check or via our upcoming secure online portal. All donations go directly to the Hauppauge Robotics team account.
          </p>
          
          <div className="space-y-6">
            {/* Online Portal */}
            <div className="p-6 bg-[var(--bg-primary)] border border-dashed border-[var(--border-subtle)] flex items-start gap-4">
              <div className="text-[var(--accent)] mt-1"><CreditCard size={24} /></div>
              <div>
                <h3 className="font-bold text-[var(--text-primary)] text-lg mb-1">Online Portal (Coming Soon)</h3>
                <p className="text-sm text-[var(--text-secondary)] mb-4">We are finalizing our school's approved digital checkout process.</p>
                <div className="inline-block bg-[var(--border-subtle)] text-[var(--text-secondary)] px-6 py-2 rounded-full font-bold text-sm cursor-not-allowed">
                  Portal Unavailable
                </div>
              </div>
            </div>

            {/* Check Mailing */}
            <div className="p-6 bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex items-start gap-4">
              <div className="text-[var(--accent)] mt-1"><Mail size={24} /></div>
              <div>
                <h3 className="font-bold text-[var(--text-primary)] text-lg mb-1">Mail a Check</h3>
                <p className="text-sm text-[var(--text-secondary)] mb-4">Please make checks payable to <strong>Hauppauge Robotics</strong> and mail them to:</p>
                <div className="bg-[var(--bg-secondary)] p-4 rounded font-mono text-sm text-[var(--text-primary)] border border-[var(--border-subtle)]">
                  Hauppauge High School<br />
                  Attn: Robotics Team 358<br />
                  500 Lincoln Blvd<br />
                  Hauppauge, NY 11788
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-display font-bold text-[var(--text-primary)] mb-6">Where Your Money Goes</h2>
          <div className="space-y-4">
            <div className="flex gap-4 p-6 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] polaroid-shadow hover:border-gray-300 transition-colors">
              <div className="shrink-0 text-[var(--accent)] mt-1"><Cpu size={24} /></div>
              <div>
                <h3 className="font-bold text-[var(--text-primary)] text-lg mb-1">Robot Parts & Electronics</h3>
                <p className="text-sm text-[var(--text-secondary)]">Motors, motor controllers, sensors, aluminum, polycarbonate, and other raw materials needed to build a competitive 125lb robot.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] polaroid-shadow hover:border-gray-300 transition-colors">
              <div className="shrink-0 text-[var(--accent)] mt-1"><Wrench size={24} /></div>
              <div>
                <h3 className="font-bold text-[var(--text-primary)] text-lg mb-1">Tools & Equipment</h3>
                <p className="text-sm text-[var(--text-secondary)]">Maintaining and upgrading our shop equipment, from hand tools to 3D printers and CNC routers.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] polaroid-shadow hover:border-gray-300 transition-colors">
              <div className="shrink-0 text-[var(--accent)] mt-1"><Plane size={24} /></div>
              <div>
                <h3 className="font-bold text-[var(--text-primary)] text-lg mb-1">Registration & Travel</h3>
                <p className="text-sm text-[var(--text-secondary)]">FIRST event registration fees ($6,000+ per year) and travel expenses for regional and championship events.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
