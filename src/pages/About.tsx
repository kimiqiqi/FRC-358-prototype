import { Link } from 'react-router-dom';
import { Target, Users, Zap, Trophy, Award, Flag, Star } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function About() {
  return (
    <div className="section-pad pt-32">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-display font-medium text-[var(--text-primary)] mb-6">About Team 358</h1>
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
          <h2 className="text-3xl font-display font-medium text-[var(--text-primary)] mb-6">Our Mission</h2>
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
          className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl p-8 flex flex-col justify-center polaroid-shadow"
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
          <h2 className="text-3xl font-display font-bold mb-4 text-[var(--text-primary)]">Our History & Legacy</h2>
          <p className="text-lg text-[var(--text-secondary)]">
            For over two decades, the Robotic Eagles have been soaring to new heights. Here are some of our proudest moments.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-[var(--border-subtle)] -translate-x-1/2 rounded" />

          {/* Timeline Items */}
          <div className="space-y-12">
            
            {/* Item 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative flex flex-col md:flex-row items-center justify-between group"
            >
              <div className="hidden md:block w-5/12 text-right pr-8">
                <h3 className="text-2xl font-bold text-[var(--text-primary)]">Team Founded</h3>
                <p className="text-[var(--text-secondary)] mt-2">Hauppauge High School establishes Team 358 to bring hands-on engineering to students.</p>
              </div>
              <div className="absolute left-4 md:left-1/2 w-10 h-10 bg-[var(--bg-primary)] border-4 border-[var(--accent)] rounded-full -translate-x-1/2 flex items-center justify-center z-10 shadow-lg group-hover:scale-110 transition-transform">
                <Flag className="text-[var(--accent)]" size={16} />
              </div>
              <div className="w-full md:w-5/12 pl-12 md:pl-8">
                <div className="md:hidden mb-2">
                  <h3 className="text-2xl font-bold text-[var(--text-primary)]">Team Founded</h3>
                  <p className="text-[var(--text-secondary)] mt-2">Hauppauge High School establishes Team 358 to bring hands-on engineering to students.</p>
                </div>
                <div className="text-4xl font-display tracking-widest text-[var(--text-primary)] opacity-20 font-bold">1999</div>
              </div>
            </motion.div>

            {/* Item 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative flex flex-col md:flex-row items-center justify-between group md:flex-row-reverse"
            >
              <div className="hidden md:block w-5/12 text-left pl-8">
                <h3 className="text-2xl font-bold text-[var(--text-primary)]">Rookie Year</h3>
                <p className="text-[var(--text-secondary)] mt-2">Competed in our very first FIRST Robotics Competition, building the foundation of our long-standing programs.</p>
              </div>
              <div className="absolute left-4 md:left-1/2 w-10 h-10 bg-[var(--bg-primary)] border-4 border-[var(--accent)] rounded-full -translate-x-1/2 flex items-center justify-center z-10 shadow-lg group-hover:scale-110 transition-transform">
                <Star className="text-[var(--accent)]" size={16} />
              </div>
              <div className="w-full md:w-5/12 pr-12 md:pr-8 text-left md:text-right pl-12 md:pl-0">
                <div className="md:hidden mb-2">
                  <h3 className="text-2xl font-bold text-[var(--text-primary)]">Rookie Year</h3>
                  <p className="text-[var(--text-secondary)] mt-2">Competed in our very first FIRST Robotics Competition, building the foundation of our long-standing programs.</p>
                </div>
                <div className="text-4xl font-display tracking-widest text-[var(--text-primary)] opacity-20 font-bold">2000</div>
              </div>
            </motion.div>

            {/* Item 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative flex flex-col md:flex-row items-center justify-between group"
            >
              <div className="hidden md:block w-5/12 text-right pr-8">
                <h3 className="text-2xl font-bold text-[var(--text-primary)]">Long Island Regional Champions</h3>
                <p className="text-[var(--text-secondary)] mt-2">Captured the top regional title, proving the Robotic Eagles as a powerhouse in NY competitive robotics.</p>
              </div>
              <div className="absolute left-4 md:left-1/2 w-10 h-10 bg-[var(--accent)] text-white border-4 border-[var(--bg-primary)] rounded-full -translate-x-1/2 flex items-center justify-center z-10 shadow-lg group-hover:scale-110 transition-transform">
                <Trophy size={16} />
              </div>
              <div className="w-full md:w-5/12 pl-12 md:pl-8">
                <div className="md:hidden mb-2">
                  <h3 className="text-2xl font-bold text-[var(--text-primary)]">Long Island Regional Champions</h3>
                  <p className="text-[var(--text-secondary)] mt-2">Captured the top regional title, proving the Robotic Eagles as a powerhouse in NY competitive robotics.</p>
                </div>
                <div className="text-4xl font-display tracking-widest text-[var(--accent)] font-bold opacity-80">2004</div>
              </div>
            </motion.div>

            {/* Item 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative flex flex-col md:flex-row items-center justify-between group md:flex-row-reverse"
            >
              <div className="hidden md:block w-5/12 text-left pl-8">
                <h3 className="text-2xl font-bold text-[var(--text-primary)]">Engineering Inspiration</h3>
                <p className="text-[var(--text-secondary)] mt-2">Awarded the Engineering Inspiration Award for advancing respect and appreciation for engineering in our community.</p>
              </div>
              <div className="absolute left-4 md:left-1/2 w-10 h-10 bg-[var(--bg-primary)] border-4 border-[var(--accent)] rounded-full -translate-x-1/2 flex items-center justify-center z-10 shadow-lg group-hover:scale-110 transition-transform">
                <Award className="text-[var(--accent)]" size={16} />
              </div>
              <div className="w-full md:w-5/12 pr-12 md:pr-8 text-left md:text-right pl-12 md:pl-0">
                <div className="md:hidden mb-2">
                  <h3 className="text-2xl font-bold text-[var(--text-primary)]">Engineering Inspiration</h3>
                  <p className="text-[var(--text-secondary)] mt-2">Awarded the Engineering Inspiration Award for advancing respect and appreciation for engineering in our community.</p>
                </div>
                <div className="text-4xl font-display tracking-widest text-[var(--text-primary)] opacity-20 font-bold">2007</div>
              </div>
            </motion.div>

            {/* Item 5 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative flex flex-col md:flex-row items-center justify-between group"
            >
              <div className="hidden md:block w-5/12 text-right pr-8">
                <h3 className="text-2xl font-bold text-[var(--text-primary)]">Multiple Regional Victories</h3>
                <p className="text-[var(--text-secondary)] mt-2">Continued standard of excellence with Long Island Regional wins in 2011, 2014, and 2018.</p>
              </div>
              <div className="absolute left-4 md:left-1/2 w-10 h-10 bg-[var(--accent)] text-white border-4 border-[var(--bg-primary)] rounded-full -translate-x-1/2 flex items-center justify-center z-10 shadow-lg group-hover:scale-110 transition-transform">
                <Trophy size={16} />
              </div>
              <div className="w-full md:w-5/12 pl-12 md:pl-8">
                <div className="md:hidden mb-2">
                  <h3 className="text-2xl font-bold text-[var(--text-primary)]">Multiple Regional Victories</h3>
                  <p className="text-[var(--text-secondary)] mt-2">Continued standard of excellence with Long Island Regional wins in 2011, 2014, and 2018.</p>
                </div>
                <div className="text-4xl font-display tracking-widest text-[var(--accent)] font-bold opacity-80">2010s</div>
              </div>
            </motion.div>
            
            {/* Item 6 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative flex flex-col md:flex-row items-center justify-between group md:flex-row-reverse"
            >
              <div className="hidden md:block w-5/12 text-left pl-8">
                <h3 className="text-2xl font-bold text-[var(--text-primary)]">The Next Generation</h3>
                <p className="text-[var(--text-secondary)] mt-2">Expanding community reach by creating youth robotics camps and establishing massive reference resources used by FRC teams globally (team358.org).</p>
              </div>
              <div className="absolute left-4 md:left-1/2 w-10 h-10 bg-[var(--bg-primary)] border-4 border-[var(--accent)] rounded-full -translate-x-1/2 flex items-center justify-center z-10 shadow-lg group-hover:scale-110 transition-transform">
                <Users className="text-[var(--accent)]" size={16} />
              </div>
              <div className="w-full md:w-5/12 pr-12 md:pr-8 text-left md:text-right pl-12 md:pl-0">
                <div className="md:hidden mb-2">
                  <h3 className="text-2xl font-bold text-[var(--text-primary)]">The Next Generation</h3>
                  <p className="text-[var(--text-secondary)] mt-2">Expanding community reach by creating youth robotics camps and establishing massive reference resources used by FRC teams globally (team358.org).</p>
                </div>
                <div className="text-4xl font-display tracking-widest text-[var(--text-primary)] opacity-20 font-bold">Present</div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}
