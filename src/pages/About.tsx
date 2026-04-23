import { Link } from 'react-router-dom';
import { Target, Users, Zap, Trophy } from 'lucide-react';
import { motion } from 'motion/react';
import { teamHistory } from '../data/history';

export default function About() {
  return (
    <div className="section-pad pt-32">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-display font-medium text-[var(--text-primary)] mb-6">About The Robotic Eagles</h1>
        <p className="text-lg text-[var(--text-secondary)]">
          We are Hauppauge High School's FIRST Robotics Competition Team 358. We don't just build robots—we build the next generation of engineers, creators, and leaders.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl polaroid-shadow p-8 md:p-12"
        >
          <h2 className="text-3xl font-display font-medium text-[var(--text-primary)] mb-6">Our Mission</h2>
          <p className="text-[var(--text-secondary)] mb-6 leading-relaxed text-lg">
            Our mission is to empower Hauppauge students to become science and technology leaders. By exposing them to rigorous mentor-based programs, we build not just structural engineering and coding skills, but the resilience to solve impossible problems.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed text-lg">
            We are a student-driven organization. We believe that hands-on experience failing, iterating, and succeeding under a 6-week deadline produces well-rounded students equipped with unparalleled self-confidence and communication capabilities.
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-[#041E42] text-white border border-[var(--border-subtle)] rounded-2xl p-8 md:p-12 flex flex-col justify-center polaroid-shadow"
        >
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <Zap className="text-white" /> What is FIRST?
          </h3>
          <p className="text-slate-300 leading-relaxed text-lg">
            FIRST (For Inspiration and Recognition of Science and Technology) is a global nonprofit organization that operates after-school robotics programs for young people. The FIRST Robotics Competition (FRC) challenges high school students to build industrial-size robots to play a difficult field game in alliance with other teams, while also raising funds, designing a team "brand," and advancing respect and appreciation for STEM within the local community.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
        {/* Abstract/General info boxes */}
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

      {/* History Timeline Component */}
      <div className="mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-display font-medium mb-4 text-[var(--text-primary)]">Our History & Legacy</h2>
          <p className="text-lg text-[var(--text-secondary)]">
            For over two decades, the Robotic Eagles have been soaring to new heights. Here are some of our proudest moments.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-[var(--border-subtle)] -translate-x-1/2 rounded" />

          {/* Timeline Items */}
          <div className="space-y-12">
            
            {teamHistory.map((item, index) => {
              const isEven = index % 2 === 0;
              const Icon = item.icon;
              
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className={`relative flex flex-col md:flex-row items-center justify-between group ${!isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className={`hidden md:block w-5/12 ${isEven ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <h3 className="text-2xl font-bold text-[var(--text-primary)]">{item.title}</h3>
                    <p className="text-[var(--text-secondary)] mt-2">{item.description}</p>
                  </div>
                  <div className={`absolute left-4 md:left-1/2 w-10 h-10 border-4 rounded-full -translate-x-1/2 flex items-center justify-center z-10 shadow-lg group-hover:scale-110 transition-transform ${item.highlight ? 'bg-[var(--accent)] text-white border-[var(--bg-primary)]' : 'bg-[var(--bg-primary)] text-[var(--accent)] border-[var(--accent)]'}`}>
                    <Icon size={16} />
                  </div>
                  <div className={`w-full md:w-5/12 ${isEven ? 'pl-12 md:pl-8' : 'pr-12 md:pr-8 text-left md:text-right pl-12 md:pl-0'}`}>
                    <div className="md:hidden mb-2">
                      <h3 className="text-2xl font-bold text-[var(--text-primary)]">{item.title}</h3>
                      <p className="text-[var(--text-secondary)] mt-2">{item.description}</p>
                    </div>
                    <div className={`text-4xl font-display tracking-widest font-bold ${item.highlight ? 'text-[var(--accent)] opacity-80' : 'text-[var(--text-primary)] opacity-20'}`}>
                      {item.year}
                    </div>
                  </div>
                </motion.div>
              );
            })}

          </div>
        </div>
      </div>
    </div>
  );
}
