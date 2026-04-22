import { Link } from 'react-router-dom';
import { Target, Users, Zap, Trophy } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">About Team 358</h1>
        <p className="text-lg text-[var(--text-secondary)]">
          We are the Hauppauge Robotic Eagles, a FIRST Robotics Competition team dedicated to inspiring students in science, technology, engineering, and mathematics.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-display font-bold mb-6">Our Mission</h2>
          <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
            Our mission is to inspire young people to be science and technology leaders and innovators, by engaging them in exciting mentor-based programs that build science, engineering, and technology skills, that inspire innovation, and that foster well-rounded life capabilities including self-confidence, communication, and leadership.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            We strive to create an inclusive environment where every student, regardless of their prior experience, can find a role and develop skills that will serve them in their future careers.
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-3xl p-8 flex flex-col justify-center"
        >
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Zap className="text-[var(--accent)]" /> What is FIRST?
          </h3>
          <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
            FIRST (For Inspiration and Recognition of Science and Technology) is a global nonprofit organization that operates after-school robotics programs for young people. The FIRST Robotics Competition (FRC) challenges high school students to build industrial-size robots to play a difficult field game in alliance with other teams, while also raising funds, designing a team "brand," and advancing respect and appreciation for STEM within the local community.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center p-6 bg-[var(--bg-secondary)] rounded-2xl border border-[var(--border-subtle)]">
          <div className="w-12 h-12 mx-auto bg-[var(--accent)]/10 text-[var(--accent)] rounded-full flex items-center justify-center mb-4">
            <Users size={24} />
          </div>
          <h4 className="font-bold mb-2">Student Led</h4>
          <p className="text-sm text-[var(--text-secondary)]">Students make the design decisions, write the code, and drive the robot.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-center p-6 bg-[var(--bg-secondary)] rounded-2xl border border-[var(--border-subtle)]">
          <div className="w-12 h-12 mx-auto bg-[var(--accent)]/10 text-[var(--accent)] rounded-full flex items-center justify-center mb-4">
            <Target size={24} />
          </div>
          <h4 className="font-bold mb-2">Real Skills</h4>
          <p className="text-sm text-[var(--text-secondary)]">Learn CAD, machining, Java, marketing, and project management.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-center p-6 bg-[var(--bg-secondary)] rounded-2xl border border-[var(--border-subtle)]">
          <div className="w-12 h-12 mx-auto bg-[var(--accent)]/10 text-[var(--accent)] rounded-full flex items-center justify-center mb-4">
            <Trophy size={24} />
          </div>
          <h4 className="font-bold mb-2">Gracious Professionalism</h4>
          <p className="text-sm text-[var(--text-secondary)]">Fierce competition and mutual gain are not separate notions.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="text-center p-6 bg-[var(--bg-secondary)] rounded-2xl border border-[var(--border-subtle)]">
          <div className="w-12 h-12 mx-auto bg-[var(--accent)]/10 text-[var(--accent)] rounded-full flex items-center justify-center mb-4">
            <Zap size={24} />
          </div>
          <h4 className="font-bold mb-2">Innovation</h4>
          <p className="text-sm text-[var(--text-secondary)]">Pushing boundaries to solve complex engineering challenges every year.</p>
        </motion.div>
      </div>
    </div>
  );
}
