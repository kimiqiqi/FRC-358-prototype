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
          We believe that our impact should extend far beyond the competition field. Team 358 is dedicated to spreading STEM education and FIRST values throughout our community.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl polaroid-shadow p-8 md:p-12 flex flex-col justify-center"
        >
          <div className="w-14 h-14 rounded-full border-2 border-[var(--accent)] bg-[var(--bg-primary)] flex items-center justify-center text-[var(--accent)] mb-6">
            <BookOpen size={28} />
          </div>
          <h2 className="text-3xl font-display font-medium mb-4 text-[var(--text-primary)]">Mentoring FLL Teams</h2>
          <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
            Our high school students actively mentor FIRST LEGO League (FLL) teams at our local middle and elementary schools. We help younger students learn basic programming, mechanical design, and teamwork skills, preparing them for future success in STEM.
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl polaroid-shadow p-8 md:p-12 flex flex-col justify-center"
        >
          <div className="w-14 h-14 rounded-full border-2 border-[var(--accent)] bg-[var(--bg-primary)] flex items-center justify-center text-[var(--accent)] mb-6">
            <Users size={28} />
          </div>
          <h2 className="text-3xl font-display font-medium text-[var(--text-primary)] mb-4">Community Events</h2>
          <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
            We regularly demonstrate our robots at community events, street fairs, and school open houses. These demonstrations allow us to interact with the public, explain how our robots work, and generate excitement about engineering and technology.
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl polaroid-shadow p-8 md:p-12 flex flex-col justify-center"
        >
          <div className="w-14 h-14 rounded-full border-2 border-[var(--accent)] bg-[var(--bg-primary)] flex items-center justify-center text-[var(--accent)] mb-6">
            <Lightbulb size={28} />
          </div>
          <h2 className="text-3xl font-display font-medium text-[var(--text-primary)] mb-4">STEM Advocacy</h2>
          <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
            We advocate for increased access to STEM education by speaking with local representatives and school board members. We believe every student should have the opportunity to participate in hands-on robotics programs.
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl polaroid-shadow p-8 md:p-12 flex flex-col justify-center"
        >
          <div className="w-14 h-14 rounded-full border-2 border-[var(--accent)] bg-[var(--bg-primary)] flex items-center justify-center text-[var(--accent)] mb-6">
            <HeartHandshake size={28} />
          </div>
          <h2 className="text-3xl font-display font-medium text-[var(--text-primary)] mb-4">Charitable Work</h2>
          <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
            Beyond robotics, our team participates in local food drives, charity walks, and community clean-up efforts. We strive to build well-rounded students who care about their community.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
