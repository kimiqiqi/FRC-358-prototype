import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Calendar, Users, Wrench, Code, HeartHandshake, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { siteConfig } from '../config/site';
import { credibilityStats, subteams, sponsorPlaceholders } from '../data/home';
import { upcomingEvents } from '../data/events';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-[var(--bg-primary)] pt-20">
        
        {/* Organic Background Textures & Swoosh */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-50 overflow-hidden flex items-center justify-center">
          {/* We emulate the hand-drawn swoosh from the image using SVG */}
          <svg className="absolute w-[150%] h-[150%] max-w-none text-blue-300 dark:text-blue-900 opacity-30" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-100 450 C 300 100, 600 800, 900 350 C 1200 -100, 1500 500, 1800 200" stroke="currentColor" strokeWidth="60" strokeLinecap="round" strokeDasharray="10 20" className="opacity-0" />
            <path d="M-200 600 C 200 800, 400 100, 800 250 C 1100 400, 1000 850, 1500 700" stroke="currentColor" strokeWidth="50" strokeLinecap="round" />
            <path d="M100 200 C 400 -50, 800 600, 1100 300 C 1300 100, 1400 600, 1600 400" stroke="currentColor" strokeWidth="40" strokeLinecap="round" opacity="0.6" />
          </svg>
          
          {/* Subtle cool washes - light icy blues */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/60 dark:bg-blue-900/20 rounded-full filter blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-100/70 dark:bg-slate-800/20 rounded-full filter blur-[100px]"></div>
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
              <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-display font-medium text-[var(--text-primary)] leading-[1.05] tracking-tight mb-6">
                Building robots.<br />
                Writing code.<br />
                Finding community.
              </h1>
              <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-10 max-w-lg">
                We are {siteConfig.schoolName}'s FIRST Robotics Competition Team {siteConfig.teamNumber}.
              </p>
              
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link to="/join" className="btn-primary w-full sm:w-auto text-center justify-center text-lg py-4 sm:py-3 px-8">
                  Join Team {siteConfig.teamNumber}
                </Link>
                <Link to="/donate" className="btn-outline w-full sm:w-auto text-center justify-center text-lg py-4 sm:py-3 px-8">
                  Support Our Mission
                </Link>
              </div>
            </motion.div>
            
            {/* Scrapbook / Polaroid Visuals */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="lg:col-span-7 relative h-[500px] lg:h-[700px] hidden md:block w-full flex-shrink-0"
            >
              {/* Photo 1 (Left) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-[70%] -translate-y-[45%] w-72 lg:w-96 rotate-[-4deg] z-10 transition-transform duration-500 hover:z-30 hover:rotate-[-1deg] hover:scale-105 polaroid-shadow rounded-xl overflow-hidden border-4 border-white dark:border-gray-800">
                <div className="bg-white">
                  <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80" alt="Students working on robot" className="w-full h-auto object-cover aspect-[4/5] bg-gray-100" />
                </div>
              </div>

              {/* Photo 2 (Right) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-[15%] -translate-y-[55%] w-72 lg:w-96 rotate-[4deg] z-20 transition-transform duration-500 hover:z-30 hover:rotate-[1deg] hover:scale-105 polaroid-shadow rounded-xl overflow-hidden border-4 border-white dark:border-gray-800">
                <div className="bg-white">
                  <img src="https://images.unsplash.com/photo-1565084888279-aca607fccece?auto=format&fit=crop&w=800&q=80" alt="Robot components" className="w-full h-auto object-cover aspect-[4/5] bg-gray-100" />
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Scroll Down Squiggle */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex justify-center w-full">
            <svg width="80" height="20" viewBox="0 0 80 20" className="text-[var(--accent)] opacity-30">
               <path d="M0,10 Q10,20 20,10 T40,10 T60,10 T80,10" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </section>

      {/* 3. Quick Credibility Strip */}
      <section className="border-y border-[var(--border-subtle)] bg-[var(--bg-secondary)] py-12">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-4 text-center divide-x-0 md:divide-x divide-[var(--border-subtle)]">
            {credibilityStats.map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <p className="text-4xl font-display font-medium text-[var(--accent)] mb-2">{stat.value}</p>
                <p className="text-xs text-[var(--text-secondary)] font-bold uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. What We Do / Subteams */}
      <section className="py-16 md:py-24 bg-[var(--bg-primary)] bg-grid-pattern">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl md:text-5xl font-display font-medium text-[var(--text-primary)] mb-6">More Than Just Robots</h2>
              <p className="text-lg text-[var(--text-secondary)] mb-8 leading-relaxed">
                Operating a FIRST Robotics team is like running a small technology startup. While we build a 125-pound industrial robot in six weeks, our success relies on a diverse set of creative, technical, and strategic skills from our student body.
              </p>
              <ul className="space-y-4 mb-10">
                {subteams.map((team, idx) => (
                  <motion.li 
                    key={idx} 
                    whileHover={{ scale: 1.02, x: 5 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="flex flex-col sm:flex-row sm:items-center gap-4 text-[var(--text-primary)] bg-[var(--bg-secondary)] border border-[var(--border-subtle)] p-5 rounded-xl hover:border-[var(--accent)] transition-colors polaroid-shadow shadow-sm"
                  >
                    <div className="bg-[var(--accent)]/10 p-3 rounded-xl text-[var(--accent)] self-start sm:self-auto">
                      {team.iconName === 'wrench' && <Wrench size={24} />}
                      {team.iconName === 'code' && <Code size={24} />}
                      {team.iconName === 'users' && <Users size={24} />}
                    </div>
                    <span className="font-bold text-xl md:text-lg">{team.title}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-8">
                <Link to="/join" className="btn-outline w-full sm:w-auto justify-center text-lg py-4 sm:py-3">
                  Explore Available Roles <ArrowRight size={20} className="ml-2" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4 relative">
              <div className="w-full aspect-[4/5] bg-[var(--bg-secondary)] border border-[var(--border-subtle)] polaroid-shadow rounded-xl flex items-center justify-center p-4 overflow-hidden">
                 <div className="text-[var(--text-secondary)] opacity-50 font-mono text-xs text-center uppercase tracking-widest">Action Shot<br/>Placeholder</div>
              </div>
              <div className="w-full aspect-[4/5] bg-[var(--bg-secondary)] border border-[var(--border-subtle)] polaroid-shadow rounded-xl flex items-center justify-center p-4 mt-12 overflow-hidden">
                 <div className="text-[var(--text-secondary)] opacity-50 font-mono text-xs text-center uppercase tracking-widest">Action Shot<br/>Placeholder</div>
              </div>
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
                <h2 className="text-4xl font-display font-medium text-[var(--text-primary)]">2026 Season</h2>
              </div>
              <div className="aspect-video bg-[var(--bg-primary)] mb-8 flex items-center justify-center relative overflow-hidden rounded-2xl border border-[var(--border-subtle)] polaroid-shadow">
                <div className="absolute inset-0 bg-[var(--bg-primary)]"></div>
                <div className="relative z-10 text-center p-6 border-2 border-dashed border-[var(--border-subtle)] m-4 flex-1 h-[calc(100%-2rem)] flex flex-col justify-center items-center rounded-xl">
                  <p className="font-sans font-bold text-sm text-[var(--text-secondary)] uppercase tracking-widest mb-3">Game Reveal</p>
                  <p className="font-display font-medium text-3xl">Coming January 2026</p>
                </div>
              </div>
              <p className="text-[var(--text-secondary)] mb-6 text-lg">
                We are currently in our offseason training period, preparing our new members with the skills they need for the upcoming build season.
              </p>
              <Link to="/season" className="btn-outline w-full sm:w-auto justify-center text-lg py-4 sm:py-3">
                View Season Details <ChevronRight size={20} className="ml-2" />
              </Link>
            </motion.div>

            {/* Upcoming Events */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="text-[var(--accent)]" size={32} />
                <h2 className="text-4xl font-display font-medium text-[var(--text-primary)]">Upcoming Events</h2>
              </div>
              <div className="space-y-4">
                {upcomingEvents.slice(0, 2).map((event) => (
                  <motion.div 
                    key={event.id} 
                    whileHover={{ scale: 1.02, y: -2 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start group bg-[var(--bg-primary)] p-6 rounded-2xl border border-[var(--border-subtle)] polaroid-shadow hover:border-[var(--accent)] hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex flex-row sm:flex-col items-center justify-center shrink-0 w-full sm:w-24 h-auto sm:h-28 bg-[var(--bg-secondary)] text-[var(--text-secondary)] rounded-xl py-3 sm:py-0 border border-[var(--border-subtle)] group-hover:bg-[var(--accent)]/5 group-hover:text-[var(--accent)] group-hover:border-[var(--accent)]/20 transition-colors duration-300">
                      <span className="text-sm font-bold uppercase tracking-wider sm:mb-1 opacity-80 mr-2 sm:mr-0">TBD</span>
                      <span className="text-3xl font-display font-medium">--</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-display font-medium text-[var(--text-primary)] text-2xl mb-1 sm:mb-2 group-hover:text-[var(--accent)] transition-colors">{event.title}</h4>
                      <p className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider mb-2 sm:mb-3">{event.location}</p>
                      <p className="text-[var(--text-secondary)] leading-relaxed">{event.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/events" className="btn-outline w-full sm:w-auto justify-center text-lg py-4 sm:py-3 cursor-pointer">
                  View Full Calendar <ChevronRight size={20} className="ml-2" />
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 7. Outreach Preview */}
      <section className="bg-[var(--bg-primary)] border-t border-[var(--border-subtle)] section-pad text-center relative">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative z-10">
          <HeartHandshake className="mx-auto text-[var(--accent)] mb-6" size={48} />
          <h2 className="text-4xl md:text-5xl font-display font-medium mb-6 text-[var(--text-primary)]">Impacting Our Community</h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto mb-10">
            We believe in spreading the message of FIRST and STEM education throughout our community. From mentoring middle school LEGO League teams to hosting local STEM fairs.
          </p>
          <Link to="/outreach" className="btn-outline text-lg px-10 py-3">
            See Our Outreach Work
          </Link>
        </motion.div>
      </section>

      {/* 8. Support & Sponsors Dual Action */}
      <section className="py-16 md:py-24 bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:w-1/2 text-left">
              <p className="text-sm font-bold text-[var(--accent)] uppercase tracking-[0.2em] mb-4">Invest in the Future</p>
              <h2 className="text-4xl font-display font-medium text-[var(--text-primary)] mb-6">Proudly Supported By <br className="hidden lg:block"/>Our Community</h2>
              <p className="text-[var(--text-secondary)] text-lg mb-10 max-w-lg">
                It takes a village to build a robot. We rely on the generous support of corporate sponsors, local businesses, and individual donors to fund our engineering process and student travel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link to="/sponsors" className="btn-primary w-full sm:w-auto justify-center text-lg py-4 sm:py-3 px-8">
                  Become a Sponsor
                </Link>
                <Link to="/donate" className="btn-outline w-full sm:w-auto justify-center text-lg py-4 sm:py-3 px-8">
                  Make a Donation
                </Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:w-1/2 w-full">
              <div className="grid grid-cols-2 gap-8 lg:gap-12 opacity-80 transition-all duration-500 bg-[var(--bg-primary)] p-12 rounded-2xl border border-[var(--border-subtle)] polaroid-shadow">
                {/* Placeholder Sponsor Logos */}
                {sponsorPlaceholders.map((sponsor, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center justify-center text-xl md:text-2xl font-display font-medium text-[var(--text-secondary)] text-center h-24 bg-[var(--bg-secondary)] rounded-xl border border-[var(--border-subtle)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:shadow-md transition-all duration-300"
                  >
                    {sponsor}
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
