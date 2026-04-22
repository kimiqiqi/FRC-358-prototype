import { Link } from 'react-router-dom';
import { Wrench, Code, Camera, Megaphone, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Join() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Join the Team</h1>
        <p className="text-lg text-[var(--text-secondary)]">
          No prior experience is required. We will teach you everything you need to know. Whether you want to build robots, write code, or run a business, there's a place for you on Team 358.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-3xl p-8 md:p-12"
        >
          <h2 className="text-2xl font-display font-bold mb-6">How to Join</h2>
          <ol className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[var(--border-subtle)] before:to-transparent">
            <li className="relative flex items-center gap-6">
              <div className="w-10 h-10 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--accent)] flex items-center justify-center font-bold text-[var(--accent)] shrink-0 z-10">1</div>
              <div>
                <h3 className="font-bold text-lg">Attend the Open House</h3>
                <p className="text-[var(--text-secondary)] text-sm">Come to our fall open house to meet the team and see the shop.</p>
              </div>
            </li>
            <li className="relative flex items-center gap-6">
              <div className="w-10 h-10 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--accent)] flex items-center justify-center font-bold text-[var(--accent)] shrink-0 z-10">2</div>
              <div>
                <h3 className="font-bold text-lg">Fill out the Application</h3>
                <p className="text-[var(--text-secondary)] text-sm">Complete the online interest form so we have your contact info.</p>
              </div>
            </li>
            <li className="relative flex items-center gap-6">
              <div className="w-10 h-10 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--accent)] flex items-center justify-center font-bold text-[var(--accent)] shrink-0 z-10">3</div>
              <div>
                <h3 className="font-bold text-lg">Come to Training Sessions</h3>
                <p className="text-[var(--text-secondary)] text-sm">Attend our fall training workshops to learn the basics of your chosen subteam.</p>
              </div>
            </li>
          </ol>
          <div className="mt-10">
            <a href="#" className="inline-flex items-center justify-center gap-2 bg-[var(--text-primary)] text-[var(--bg-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--accent)] hover:text-white transition-all w-full">
              Fill Out Interest Form <ArrowRight size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-display font-bold mb-6">Find Your Role</h2>
          <div className="space-y-4">
            <div className="flex gap-4 p-6 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl hover:border-[var(--accent)] transition-colors">
              <div className="shrink-0 text-[var(--accent)] mt-1"><Wrench size={24} /></div>
              <div>
                <h3 className="font-bold text-lg mb-1">Mechanical & CAD</h3>
                <p className="text-sm text-[var(--text-secondary)]">Design robot parts using SolidWorks, operate CNC machines, and assemble the final robot.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl hover:border-[var(--accent)] transition-colors">
              <div className="shrink-0 text-[var(--accent)] mt-1"><Code size={24} /></div>
              <div>
                <h3 className="font-bold text-lg mb-1">Software & Electrical</h3>
                <p className="text-sm text-[var(--text-secondary)]">Write Java code for robot control, implement computer vision, and wire the electrical board.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl hover:border-[var(--accent)] transition-colors">
              <div className="shrink-0 text-[var(--accent)] mt-1"><Megaphone size={24} /></div>
              <div>
                <h3 className="font-bold text-lg mb-1">Business & Strategy</h3>
                <p className="text-sm text-[var(--text-secondary)]">Manage team finances, write business plans, pitch to sponsors, and analyze match data.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl hover:border-[var(--accent)] transition-colors">
              <div className="shrink-0 text-[var(--accent)] mt-1"><Camera size={24} /></div>
              <div>
                <h3 className="font-bold text-lg mb-1">Media & Marketing</h3>
                <p className="text-sm text-[var(--text-secondary)]">Take photos/videos, manage social media, design team apparel, and maintain the website.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
