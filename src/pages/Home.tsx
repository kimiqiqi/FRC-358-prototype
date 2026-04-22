import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Calendar, Users, Wrench, Code, HeartHandshake, Award } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-[var(--bg-primary)] pt-20">
        
        {/* Organic Background Textures & Swoosh */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-50 overflow-hidden flex items-center justify-center">
          {/* We emulate the hand-drawn swoosh from the image using SVG */}
          <svg className="absolute w-[150%] h-[150%] max-w-none text-[#93c5fd] opacity-40 mix-blend-multiply" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-100 450 C 300 100, 600 800, 900 350 C 1200 -100, 1500 500, 1800 200" stroke="currentColor" strokeWidth="60" strokeLinecap="round" strokeDasharray="10 20" className="opacity-0" />
            <path d="M-200 600 C 200 800, 400 100, 800 250 C 1100 400, 1000 850, 1500 700" stroke="currentColor" strokeWidth="50" strokeLinecap="round" />
            <path d="M100 200 C 400 -50, 800 600, 1100 300 C 1300 100, 1400 600, 1600 400" stroke="currentColor" strokeWidth="40" strokeLinecap="round" opacity="0.6" />
          </svg>
          
          {/* Subtle cool washes - light icy blues */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#dbeafe] rounded-full mix-blend-multiply filter blur-[120px] opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#f1f5f9] rounded-full mix-blend-multiply filter blur-[100px] opacity-70"></div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Hero Typography & CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-5 max-w-2xl relative z-20"
            >
              <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-display font-medium text-[var(--text-primary)] leading-[1.05] tracking-tight mb-8">
                Building robots?<br />
                Writing code?<br />
                Finding community?
              </h1>
              
              <Link to="/join" className="inline-block bg-[var(--accent)] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[var(--accent-hover)] transition-all transform hover:scale-105 shadow-xl hover:shadow-[0_10px_40px_-10px_rgba(0,68,204,0.4)]">
                Join Team 358 Today
              </Link>
            </motion.div>
            
            {/* Scrapbook / Polaroid Visuals */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="lg:col-span-7 relative h-[500px] lg:h-[700px] hidden md:block w-full flex-shrink-0"
            >
              {/* Photo 1 (Left) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-[70%] -translate-y-[45%] w-72 lg:w-96 rotate-[-8deg] z-10 transition-transform duration-500 hover:z-30 hover:rotate-[-2deg] hover:scale-105 polaroid-shadow">
                {/* Tape */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-10 bg-[var(--tape-color)] rotate-[4deg] z-20 shadow-sm opacity-90 backdrop-blur-sm"></div>
                <div className="bg-white p-4 pb-16 shadow-lg border border-gray-100">
                  <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80" alt="Students working on robot" className="w-full h-auto object-cover aspect-[4/5] bg-gray-100" />
                </div>
              </div>

              {/* Photo 2 (Right) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-[15%] -translate-y-[55%] w-72 lg:w-96 rotate-[6deg] z-20 transition-transform duration-500 hover:z-30 hover:rotate-[2deg] hover:scale-105 polaroid-shadow">
                {/* Tape */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-10 bg-[var(--tape-color)] rotate-[-3deg] z-20 shadow-sm opacity-90 backdrop-blur-sm"></div>
                <div className="bg-white p-4 pb-16 shadow-lg border border-gray-100">
                  <img src="https://images.unsplash.com/photo-1565084888279-aca607fccece?auto=format&fit=crop&w=800&q=80" alt="Robot components" className="w-full h-auto object-cover aspect-[4/5] bg-gray-100" />
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Scroll Down Squiggle (similar to image) */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex justify-center w-full">
            <svg width="80" height="20" viewBox="0 0 80 20" className="text-[var(--accent)] opacity-50 mix-blend-multiply">
               <path d="M0,10 Q10,20 20,10 T40,10 T60,10 T80,10" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </section>

      {/* 3. Quick Credibility Strip */}
      <section className="border-y border-[var(--border-subtle)] bg-[var(--bg-secondary)] py-12">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-[var(--border-subtle)]">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-4xl font-display font-medium text-[var(--accent)] mb-2">25+</p>
              <p className="text-xs text-[var(--text-secondary)] font-bold uppercase tracking-widest">Years Active</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <p className="text-4xl font-display font-medium text-[var(--accent)] mb-2">50+</p>
              <p className="text-xs text-[var(--text-secondary)] font-bold uppercase tracking-widest">Active Students</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <p className="text-4xl font-display font-medium text-[var(--accent)] mb-2">15</p>
              <p className="text-xs text-[var(--text-secondary)] font-bold uppercase tracking-widest">Mentors</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <p className="text-4xl font-display font-medium text-[var(--accent)] mb-2">100%</p>
              <p className="text-xs text-[var(--text-secondary)] font-bold uppercase tracking-widest">Student Led</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. What We Do / Subteams */}
      <section className="py-16 md:py-24 bg-[var(--bg-primary)]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-medium text-[var(--text-primary)] mb-4">More Than Robots</h2>
            <p className="text-lg text-[var(--text-secondary)]">
              A FIRST Robotics team operates like a small business. Whether you're interested in engineering, programming, media, or business, there's a place for you here.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Mechanical/Design */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="bg-[var(--bg-secondary)] shadow-sm border border-transparent rounded-none p-10 hover:border-gray-200 transition-all group polaroid-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] mb-6 group-hover:scale-110 transition-transform">
                <Wrench size={26} />
              </div>
              <h3 className="text-2xl font-display font-bold text-[var(--text-primary)] mb-3">Mechanical & Design</h3>
              <p className="text-[var(--text-secondary)] mb-6">
                Use CAD software to design robot mechanisms, then bring them to life using power tools, CNC machines, and 3D printers.
              </p>
            </motion.div>

            {/* Programming/Electrical */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="bg-[var(--bg-secondary)] shadow-sm border border-transparent rounded-none p-10 hover:border-gray-200 transition-all group polaroid-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] mb-6 group-hover:scale-110 transition-transform">
                <Code size={26} />
              </div>
              <h3 className="text-2xl font-display font-bold text-[var(--text-primary)] mb-3">Software & Electrical</h3>
              <p className="text-[var(--text-secondary)] mb-6">
                Wire the robot's control system and write Java code to make it move autonomously using sensors and vision processing.
              </p>
            </motion.div>

            {/* Business/Media */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="bg-[var(--bg-secondary)] shadow-sm border border-transparent rounded-none p-10 hover:border-gray-200 transition-all group polaroid-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] mb-6 group-hover:scale-110 transition-transform">
                <Users size={26} />
              </div>
              <h3 className="text-2xl font-display font-bold text-[var(--text-primary)] mb-3">Business & Media</h3>
              <p className="text-[var(--text-secondary)] mb-6">
                Manage team finances, write grant proposals, design team apparel, and create engaging photo and video content.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Season Preview & 6. Upcoming Events */}
      <section className="py-16 md:py-24 bg-[var(--bg-secondary)] border-y border-[var(--border-subtle)]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Season Preview */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-6">
                <Award className="text-[var(--accent)]" size={32} />
                <h2 className="text-4xl font-display font-bold text-[var(--text-primary)]">2026 Season</h2>
              </div>
              <div className="aspect-video bg-[var(--bg-primary)] mb-8 flex items-center justify-center relative overflow-hidden polaroid-shadow">
                <div className="absolute inset-0 bg-[var(--bg-primary)]"></div>
                <div className="relative z-10 text-center p-6 border-2 border-dashed border-[var(--border-subtle)] m-4 flex-1 h-[calc(100%-2rem)] flex flex-col justify-center items-center">
                  <p className="font-sans font-bold text-sm text-[var(--text-secondary)] uppercase tracking-widest mb-3">Game Reveal</p>
                  <p className="font-display font-medium text-3xl">Coming January 2026</p>
                </div>
              </div>
              <p className="text-[var(--text-secondary)] mb-6 text-lg">
                We are currently in our offseason training period, preparing our new members with the skills they need for the upcoming build season.
              </p>
              <Link to="/season" className="inline-flex items-center gap-2 text-[var(--accent)] font-bold hover:underline">
                View Season Details <ChevronRight size={18} />
              </Link>
            </motion.div>

            {/* Upcoming Events */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="text-[var(--accent)]" size={32} />
                <h2 className="text-4xl font-display font-bold text-[var(--text-primary)]">Upcoming Events</h2>
              </div>
              <div className="space-y-6">
                {/* Event Item 1 */}
                <div className="flex gap-8 items-start group">
                  <div className="flex flex-col items-center justify-center shrink-0 w-20 h-24 bg-[var(--text-primary)] text-[var(--bg-primary)] polaroid-shadow group-hover:-translate-y-1 transition-transform">
                    <span className="text-xs font-bold uppercase tracking-wider mb-1 opacity-80">Oct</span>
                    <span className="text-3xl font-display font-medium">15</span>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-[var(--text-primary)] text-2xl mb-2">Fall Open House</h4>
                    <p className="text-sm font-bold text-[var(--text-secondary)] uppercase tracking-wider mb-2">Hauppauge High School</p>
                    <p className="text-[var(--text-secondary)]">Come meet the team and see our robots in action. Open to all interested students and parents.</p>
                  </div>
                </div>

                {/* Event Item 2 */}
                <div className="flex gap-8 items-start group">
                  <div className="flex flex-col items-center justify-center shrink-0 w-20 h-24 bg-[var(--text-primary)] text-[var(--bg-primary)] polaroid-shadow group-hover:-translate-y-1 transition-transform">
                    <span className="text-xs font-bold uppercase tracking-wider mb-1 opacity-80">Nov</span>
                    <span className="text-3xl font-display font-medium">02</span>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-[var(--text-primary)] text-2xl mb-2">Offseason Competition</h4>
                    <p className="text-sm font-bold text-[var(--text-secondary)] uppercase tracking-wider mb-2">Half Hollow Hills</p>
                    <p className="text-[var(--text-secondary)]">Competing with our 2025 robot in a local offseason event.</p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <Link to="/events" className="inline-flex items-center gap-2 text-[var(--accent)] font-bold hover:underline">
                  View Full Calendar <ChevronRight size={18} />
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 7. Outreach Preview */}
      <section className="py-16 md:py-24 bg-[var(--bg-primary)]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative z-10">
            <HeartHandshake className="mx-auto text-[var(--accent)] mb-6" size={48} />
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-[var(--text-primary)]">Impacting Our Community</h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto mb-12">
              We believe in spreading the message of FIRST and STEM education throughout our community. From mentoring middle school LEGO League teams to hosting local STEM fairs.
            </p>
            <Link to="/outreach" className="inline-flex items-center justify-center gap-2 bg-[var(--text-primary)] text-[var(--bg-primary)] px-10 py-5 rounded-full font-bold hover:opacity-90 transition-all transform hover:scale-105 shadow-md">
              See Our Outreach Work
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 8. Sponsors Strip */}
      <section className="py-12 md:py-16 bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold text-[var(--text-secondary)] uppercase tracking-[0.2em] mb-12">Proudly Supported By</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholder Sponsor Logos */}
            <div className="text-2xl font-display font-bold text-[var(--text-primary)]">SPONSOR 1</div>
            <div className="text-2xl font-display font-medium text-[var(--text-primary)]">SPONSOR 2</div>
            <div className="text-2xl font-display font-bold text-[var(--text-primary)]">SPONSOR 3</div>
            <div className="text-2xl font-display font-medium text-[var(--text-primary)] italic">SPONSOR 4</div>
          </div>
          <div className="text-center mt-16">
            <Link to="/sponsors" className="text-sm font-bold text-[var(--accent)] hover:underline uppercase tracking-widest">
              Become a Sponsor &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
