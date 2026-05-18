import { useState } from 'react';
import { Heart, Wrench, Plane, Cpu, Mail, CreditCard, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { siteConfig } from '../config/site';

export default function Donate() {
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <div className="section-pad pt-32">
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
          Your donation directly funds robot parts, competition fees, and travel expenses for our students. As a school program, your contribution makes a direct impact.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl polaroid-shadow p-8 md:p-12 relative overflow-hidden flex flex-col justify-center"
          style={{ minHeight: '400px' }}
        >
          <AnimatePresence mode="wait">
            {!showSuccess ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-3xl font-display font-medium text-[var(--text-primary)] mb-6">Make a Financial Contribution</h2>
                <p className="text-[var(--text-secondary)] mb-8">
                  We accept support through check or via our secure online portal. Support may help with robot parts, tools, competition expenses, outreach, and student access. Donation processing will follow the school-approved process once finalized.
                </p>
                
                <div className="space-y-6">
                  {/* Online Portal */}
                  <div className="p-6 bg-[var(--bg-primary)] border border-solid border-[var(--border-subtle)] flex items-start gap-4 rounded-xl">
                    <div className="text-[var(--accent)] mt-1"><CreditCard size={24} /></div>
                    <div>
                      <h3 className="font-bold text-[var(--text-primary)] text-lg mb-1">Online Portal</h3>
                      <p className="text-sm text-[var(--text-secondary)] mb-4">Secure credit card checkout via our official school store.</p>
                      {siteConfig.features.isDonationPortalActive ? (
                        <a 
                          href={siteConfig.formLinks.donationPortal} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="btn-primary"
                          onClick={() => {
                            setTimeout(() => setShowSuccess(true), 100);
                          }}
                        >
                          Donate Online
                        </a>
                      ) : (
                        <button 
                          onClick={() => setShowSuccess(true)}
                          className="btn-primary" 
                        >
                          Simulate Donation
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Check Mailing */}
                  <div className="p-6 bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex items-start gap-4 rounded-xl">
                    <div className="text-[var(--accent)] mt-1"><Mail size={24} /></div>
                    <div>
                      <h3 className="font-bold text-[var(--text-primary)] text-lg mb-1">Mail a Check</h3>
                      <p className="text-sm text-[var(--text-secondary)] mb-4">Check mailing instructions will be provided once confirmed by our school administration.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-center text-center relative py-4"
              >
                {/* Floating Hearts Animation */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                   {[...Array(5)].map((_, i) => (
                      <motion.div
                         key={i}
                         initial={{ opacity: 0, y: 0, scale: 0.5, x: 0 }}
                         animate={{ 
                            opacity: [0, 1, 0], 
                            y: -100 - Math.random() * 60,
                            scale: [0.5, 1.2, 1],
                            x: (i - 2) * 30 + (Math.random() * 40 - 20)
                         }}
                         transition={{ 
                            duration: 2.5 + Math.random(), 
                            ease: "easeOut", 
                            delay: 0.1 + i * 0.15 
                         }}
                         className="absolute text-[var(--accent)]"
                      >
                         <Heart size={12 + Math.random() * 12} fill="currentColor" />
                      </motion.div>
                   ))}
                </div>

                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 12, stiffness: 200 }}
                  className="w-20 h-20 bg-[var(--bg-primary)] border border-[var(--border-subtle)] shadow-sm rounded-full flex items-center justify-center mb-6 relative"
                >
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                    className="absolute inset-0 bg-[var(--accent)] rounded-full z-0"
                  />
                  <Heart size={32} fill="currentColor" className="text-[var(--accent)] relative z-10" />
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4, type: "spring" }}
                    className="absolute -bottom-2 -right-2 bg-[var(--bg-secondary)] rounded-full p-0.5"
                  >
                    <CheckCircle2 size={24} className="text-emerald-500" fill="currentColor" />
                  </motion.div>
                </motion.div>

                <h3 className="text-3xl font-display font-medium text-[var(--text-primary)] mb-3">Thank You!</h3>
                <p className="text-[var(--text-secondary)] mb-8 max-w-sm">
                  Your generous support helps power our team forward. The interaction was successful.
                </p>
                
                <button 
                  onClick={() => setShowSuccess(false)}
                  className="btn-outline px-8"
                >
                  Return
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-display font-medium text-[var(--text-primary)] mb-6">Where Your Money Goes</h2>
          <div className="space-y-4">
            <div className="flex gap-4 p-6 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl polaroid-shadow hover:border-[var(--accent)] transition-colors">
              <div className="shrink-0 text-[var(--accent)] mt-1"><Cpu size={24} /></div>
              <div>
                <h3 className="font-bold text-[var(--text-primary)] text-lg mb-1">Robot Parts & Electronics</h3>
                <p className="text-sm text-[var(--text-secondary)]">Motors, motor controllers, sensors, aluminum, polycarbonate, and other raw materials needed to build a competitive 125lb robot.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl polaroid-shadow hover:border-[var(--accent)] transition-colors">
              <div className="shrink-0 text-[var(--accent)] mt-1"><Wrench size={24} /></div>
              <div>
                <h3 className="font-bold text-[var(--text-primary)] text-lg mb-1">Tools & Equipment</h3>
                <p className="text-sm text-[var(--text-secondary)]">Maintaining and upgrading our shop equipment, from hand tools to 3D printers.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl polaroid-shadow hover:border-[var(--accent)] transition-colors">
              <div className="shrink-0 text-[var(--accent)] mt-1"><Plane size={24} /></div>
              <div>
                <h3 className="font-bold text-[var(--text-primary)] text-lg mb-1">Registration & Travel</h3>
                <p className="text-sm text-[var(--text-secondary)]">Substantial FIRST event registration fees and transportation costs to ensure our students can compete on a regional stage.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
