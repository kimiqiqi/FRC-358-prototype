import { Calendar as CalendarIcon, MapPin, Clock, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { siteConfig } from '../config/site';
import { upcomingEvents } from '../data/events';

export default function Events() {
  return (
    <div className="section-pad pt-32">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-display font-medium text-[var(--text-primary)] mb-6">Team Calendar</h1>
        <p className="text-lg text-[var(--text-secondary)]">
          Stay up to date with our meetings, build sessions, outreach events, and competitions. Our official schedule will be integrated below once finalized via Google Calendar.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-2 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl polaroid-shadow p-4 md:p-8 mb-12 lg:mb-0"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 px-2">
            <div className="flex items-center gap-3">
              <CalendarIcon className="text-[var(--accent)]" size={24} />
              <h2 className="text-2xl font-display font-medium text-[var(--text-primary)]">Interactive Schedule</h2>
            </div>
            {/* Future Add to Calendar Hook */}
            {siteConfig.features.isCalendarActive ? (
              <a href={siteConfig.formLinks.calendarSubscribeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border border-[var(--border-subtle)] rounded-lg text-sm font-bold text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors">
                <ExternalLink size={16} />
                Subscribe to Calendar
              </a>
            ) : (
              <button disabled className="inline-flex items-center gap-2 px-4 py-2 border border-[var(--border-subtle)] rounded-lg text-sm font-bold text-[var(--text-primary)] opacity-50 cursor-not-allowed" aria-disabled="true">
                <ExternalLink size={16} />
                Calendar Pending
              </button>
            )}
          </div>
          
          <div className="aspect-square md:aspect-[4/3] w-full bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-xl flex items-center justify-center relative overflow-hidden">
            {siteConfig.features.isCalendarActive ? (
              <iframe 
                src={siteConfig.formLinks.calendarEmbedUrl} 
                title="Team 358 Interactive Calendar"
                className="w-full h-full border-0 rounded-xl bg-white" 
                loading="lazy"
              ></iframe>
            ) : (
              <>
                <div className="text-center p-8 z-10 bg-[var(--bg-primary)]/90 backdrop-blur-sm border border-[var(--border-subtle)] rounded-xl polaroid-shadow-sm max-w-md mx-4">
                  <CalendarIcon className="w-12 h-12 text-[var(--text-secondary)] mx-auto mb-4 opacity-50" />
                  <p className="font-mono text-xs text-[var(--accent)] uppercase tracking-widest mb-2">Google Calendar Integration</p>
                  <p className="font-display font-medium text-2xl text-[var(--text-primary)] mb-4">Official Schedule Pending</p>
                  <p className="text-sm text-[var(--text-secondary)] mb-6">
                    The team's live Google Calendar will be embedded here. Right now, dates are being confirmed. Check back soon for meeting times and competition schedules.
                  </p>
                </div>
                {/* Abstract calendar grid background (visual structure for placeholder) */}
                <div className="absolute inset-0 grid grid-cols-7 grid-rows-5 gap-px bg-[var(--border-subtle)] opacity-30">
                  {Array.from({ length: 35 }).map((_, i) => (
                    <div key={i} className="bg-[var(--bg-secondary)]"></div>
                  ))}
                </div>
              </>
            )}
          </div>
        </motion.div>

        {/* Featured Events Sidebar */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <div className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl polaroid-shadow p-6">
            <h3 className="font-display font-medium text-2xl text-[var(--text-primary)] mb-6 border-b border-[var(--border-subtle)] pb-4">Upcoming Key Dates</h3>
            
            <div className="space-y-6">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="group cursor-default">
                  <p className="text-[var(--accent)] font-bold text-xs mb-1 uppercase tracking-wider">{event.date}</p>
                  <h4 className="font-bold text-[var(--text-primary)] text-lg mb-2">{event.title}</h4>
                  <div className="flex items-start gap-2 text-[var(--text-secondary)] text-sm mb-1">
                    <MapPin size={16} className="mt-0.5 shrink-0 opacity-70" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-start gap-2 text-[var(--text-secondary)] text-sm">
                    <Clock size={16} className="mt-0.5 shrink-0 opacity-70" />
                    <span>{event.time}</span>
                  </div>
                </div>
              ))}
            </div>
            
            {siteConfig.features.isCalendarActive ? null : (
              <button className="btn-outline w-full mt-8 justify-center opacity-50 cursor-not-allowed" disabled aria-disabled="true">
                Schedule Not Yet Available
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
