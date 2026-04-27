import { HeartHandshake, BookOpen, Users, Lightbulb } from 'lucide-react';
import { motion } from 'motion/react';

export default function Outreach() {
  return (
    <div className="section-pad pt-32">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-display font-medium text-[var(--text-primary)] mb-6">Community Outreach</h1>
        <p className="text-lg text-[var(--text-secondary)]">
          We believe that our impact should extend far beyond the competition field. Team 358 is dedicated to spreading STEM education and FIRST values throughout Hauppauge and the broader Long Island community.
        </p>
      </motion.div>

      <div className="space-y-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl polaroid-shadow overflow-hidden"
        >
          <div className="order-2 md:order-1 p-8 md:p-12">
            <div className="w-14 h-14 rounded-full border-2 border-[var(--accent)] bg-[var(--bg-primary)] flex items-center justify-center text-[var(--accent)] mb-6">
              <BookOpen size={28} />
            </div>
            <h2 className="text-3xl font-display font-medium mb-4 text-[var(--text-primary)]">Mentoring Local Teams</h2>
            <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
              Our high school students actively mentor FIRST LEGO League (FLL) teams at our local middle and elementary schools. We help younger students learn basic programming, mechanical design, and teamwork skills, preparing them for a future in STEM.
            </p>
          </div>
          <div className="order-1 md:order-2 aspect-video md:aspect-auto md:h-full bg-[var(--bg-primary)] border-b md:border-b-0 md:border-l border-[var(--border-subtle)] flex items-center justify-center relative">
             <div className="absolute inset-0 bg-slate-800/10 dark:bg-slate-900/40 mix-blend-multiply"></div>
             <div className="text-[var(--text-secondary)] opacity-50 font-mono text-xs text-center uppercase tracking-widest relative z-10 p-6 border-2 border-solid border-[var(--border-subtle)]">Photo Placeholder: Mentorship</div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl polaroid-shadow overflow-hidden"
        >
          <div className="aspect-video md:aspect-auto md:h-full bg-[var(--bg-primary)] border-b md:border-b-0 md:border-r border-[var(--border-subtle)] flex items-center justify-center relative">
             <div className="absolute inset-0 bg-slate-800/10 dark:bg-slate-900/40 mix-blend-multiply"></div>
             <div className="text-[var(--text-secondary)] opacity-50 font-mono text-xs text-center uppercase tracking-widest relative z-10 p-6 border-2 border-solid border-[var(--border-subtle)]">Photo Placeholder: Robot Demo</div>
          </div>
          <div className="p-8 md:p-12">
            <div className="w-14 h-14 rounded-full border-2 border-[var(--accent)] bg-[var(--bg-primary)] flex items-center justify-center text-[var(--accent)] mb-6">
              <Users size={28} />
            </div>
            <h2 className="text-3xl font-display font-medium text-[var(--text-primary)] mb-4">Community Demonstrations</h2>
            <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
              We regularly demonstrate our robots at community events, street fairs, and school open houses. These demonstrations allow us to interact with the public, explain how our robots work, and generate excitement about engineering and technology in our local area.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl polaroid-shadow overflow-hidden"
        >
          <div className="order-2 md:order-1 p-8 md:p-12">
            <div className="w-14 h-14 rounded-full border-2 border-[var(--accent)] bg-[var(--bg-primary)] flex items-center justify-center text-[var(--accent)] mb-6">
              <Lightbulb size={28} />
            </div>
            <h2 className="text-3xl font-display font-medium text-[var(--text-primary)] mb-4">STEM Advocacy</h2>
            <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
              We advocate for increased access to STEM education by speaking with local representatives and school board members. We believe every student should have the opportunity to participate in hands-on robotics programs regardless of their background.
            </p>
          </div>
          <div className="order-1 md:order-2 aspect-video md:aspect-auto md:h-full bg-[var(--bg-primary)] border-b md:border-b-0 md:border-l border-[var(--border-subtle)] flex items-center justify-center relative">
             <div className="absolute inset-0 bg-slate-800/10 dark:bg-slate-900/40 mix-blend-multiply"></div>
             <div className="text-[var(--text-secondary)] opacity-50 font-mono text-xs text-center uppercase tracking-widest relative z-10 p-6 border-2 border-solid border-[var(--border-subtle)]">Photo Placeholder: Advocacy Event</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
