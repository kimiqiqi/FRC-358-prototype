import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Wrench, Code, Camera, Megaphone, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/site';

const faqs = [
  {
    question: "Do I need prior experience to join?",
    answer: "Not at all! We assume no prior knowledge. Our fall training sessions are designed to teach you everything you need to know, whether you want to learn CAD, programming, machining, or business management."
  },
  {
    question: "What is the time commitment?",
    answer: "During the fall (off-season), we typically meet 2-3 times a week after school. During build season (January-March), the commitment increases significantly as we have 6 weeks to build a competitive robot. We meet almost every day after school and on weekends."
  },
  {
    question: "Is there a cost to join?",
    answer: "There are nominal dues, but we firmly believe that financial constraints should never prevent a student from participating. We offer fee waivers and payment plans. Travel costs for regional competitions are heavily subsidized by our sponsors."
  },
  {
    question: "Can I do other sports/activities and still be on the team?",
    answer: "Yes! Many of our students balance robotics with other sports, clubs, and rigorous academic schedules. We just ask that you communicate your availability clearly with your subteam leads."
  },
  {
    question: "Are parents expected to be involved?",
    answer: "While it's a student-led team, parents are crucial to our success! Parent volunteers help arrange team meals during build season, coordinate travel, chaperone events, and sometimes even mentor in their areas of expertise."
  }
];

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[var(--border-subtle)] rounded-2xl bg-[var(--bg-secondary)] overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
      >
        <span className="font-bold text-lg text-[var(--text-primary)]">{question}</span>
        <motion.div 
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 text-[var(--accent)]"
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="p-6 pt-0 text-[var(--text-secondary)] border-t border-[var(--border-subtle)]">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Join() {
  return (
    <div className="section-pad pt-32">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <div className="inline-flex items-center gap-2 bg-[var(--accent)]/10 text-[var(--accent)] px-4 py-2 rounded-full font-bold text-sm tracking-wide mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]"></span>
          </span>
          NO EXPERIENCE REQUIRED
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-medium text-[var(--text-primary)] mb-6">Start Your Engineering Journey</h1>
        <p className="text-lg text-[var(--text-secondary)]">
          You don't need to be an expert to join. We teach you everything you need to know. Whether you want to build robots, write code, or run a business, there's a place for you on The Robotic Eagles.
        </p>
        <div className="mt-8">
          <a href={siteConfig.formLinks.joinInterest} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Apply for the 2026 Season <ArrowRight size={20} className="ml-2" />
          </a>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl polaroid-shadow p-8 md:p-12"
        >
          <h2 className="text-3xl font-display font-medium text-[var(--text-primary)] mb-8">How to Join</h2>
          <ol className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[var(--border-subtle)] before:to-transparent">
            <li className="relative flex items-center md:flex-row flex-col gap-6 text-center md:text-left">
              <div className="w-10 h-10 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--accent)] flex items-center justify-center font-bold text-[var(--accent)] shrink-0 z-10 md:mx-0 mx-auto">1</div>
              <div>
                <h3 className="font-bold text-[var(--text-primary)] text-lg">Attend the Open House</h3>
                <p className="text-[var(--text-secondary)] text-sm">Come to our fall open house to meet the team and see the shop.</p>
              </div>
            </li>
            <li className="relative flex items-center md:flex-row flex-col gap-6 text-center md:text-left">
              <div className="w-10 h-10 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--accent)] flex items-center justify-center font-bold text-[var(--accent)] shrink-0 z-10 md:mx-0 mx-auto">2</div>
              <div>
                <h3 className="font-bold text-[var(--text-primary)] text-lg">Fill out the Application</h3>
                <p className="text-[var(--text-secondary)] text-sm">Complete the online interest form so we have your contact info.</p>
              </div>
            </li>
            <li className="relative flex items-center md:flex-row flex-col gap-6 text-center md:text-left">
              <div className="w-10 h-10 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--accent)] flex items-center justify-center font-bold text-[var(--accent)] shrink-0 z-10 md:mx-0 mx-auto">3</div>
              <div>
                <h3 className="font-bold text-[var(--text-primary)] text-lg">Come to Training Sessions</h3>
                <p className="text-[var(--text-secondary)] text-sm">Attend our fall training workshops to learn the basics of your chosen subteam.</p>
              </div>
            </li>
          </ol>
          <div className="mt-12 text-center">
            <a href={siteConfig.formLinks.joinInterest} target="_blank" rel="noopener noreferrer" className="btn-outline w-full justify-center">
              Fill Out Interest Form <ArrowRight size={20} className="ml-2" />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-display font-medium text-[var(--text-primary)] mb-8">Find Your Role</h2>
          <div className="space-y-4">
            <div className="flex gap-4 p-6 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl polaroid-shadow hover:border-[var(--accent)] transition-colors">
              <div className="shrink-0 text-[var(--accent)] mt-1"><Wrench size={24} /></div>
              <div>
                <h3 className="font-bold text-[var(--text-primary)] text-lg mb-1">Mechanical & CAD</h3>
                <p className="text-sm text-[var(--text-secondary)]">Design robot parts using SolidWorks, operate CNC machines, and assemble the final robot.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl polaroid-shadow hover:border-[var(--accent)] transition-colors">
              <div className="shrink-0 text-[var(--accent)] mt-1"><Code size={24} /></div>
              <div>
                <h3 className="font-bold text-[var(--text-primary)] text-lg mb-1">Software & Electrical</h3>
                <p className="text-sm text-[var(--text-secondary)]">Write Java code for robot control, implement computer vision, and wire the electrical board.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl polaroid-shadow hover:border-[var(--accent)] transition-colors">
              <div className="shrink-0 text-[var(--accent)] mt-1"><Megaphone size={24} /></div>
              <div>
                <h3 className="font-bold text-[var(--text-primary)] text-lg mb-1">Business & Strategy</h3>
                <p className="text-sm text-[var(--text-secondary)]">Manage team finances, write business plans, pitch to sponsors, and analyze match data.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl polaroid-shadow hover:border-[var(--accent)] transition-colors">
              <div className="shrink-0 text-[var(--accent)] mt-1"><Camera size={24} /></div>
              <div>
                <h3 className="font-bold text-[var(--text-primary)] text-lg mb-1">Media & Marketing</h3>
                <p className="text-sm text-[var(--text-secondary)]">Take photos/videos, manage social media, design team apparel, and maintain the website.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* FAQ Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl font-display font-medium mb-4 text-[var(--text-primary)]">Frequently Asked Questions</h2>
          <p className="text-[var(--text-secondary)]">Everything you need to know about joining Team 358.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
