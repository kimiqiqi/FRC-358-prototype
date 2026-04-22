import { Mail, MapPin, Send } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Contact Us</h1>
        <p className="text-lg text-[var(--text-secondary)]">
          Have a question about joining, sponsoring, or mentoring the team? We'd love to hear from you.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-3xl p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <p className="text-[var(--text-secondary)] mb-2">For general inquiries and sponsorship:</p>
                  <a href="mailto:contact@roboticeagles358.org" className="text-[var(--accent)] hover:underline font-medium">
                    contact@roboticeagles358.org
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Location</h3>
                  <p className="text-[var(--text-secondary)] mb-2">Our shop is located at:</p>
                  <address className="not-italic text-[var(--text-primary)] font-medium">
                    Hauppauge High School<br />
                    500 Lincoln Blvd<br />
                    Hauppauge, NY 11788
                  </address>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form Placeholder */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-3xl p-8"
        >
          <h2 className="text-2xl font-display font-bold mb-6">Send a Message</h2>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">First Name</label>
                <input type="text" id="firstName" className="w-full bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-colors" placeholder="Jane" />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Last Name</label>
                <input type="text" id="lastName" className="w-full bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-colors" placeholder="Doe" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Email Address</label>
              <input type="email" id="email" className="w-full bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-colors" placeholder="jane@example.com" />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Subject</label>
              <select id="subject" className="w-full bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-colors text-[var(--text-primary)]">
                <option>General Inquiry</option>
                <option>Joining the Team</option>
                <option>Sponsorship</option>
                <option>Mentorship</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Message</label>
              <textarea id="message" rows={4} className="w-full bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-colors resize-none" placeholder="How can we help you?"></textarea>
            </div>
            <button type="button" className="w-full flex items-center justify-center gap-2 bg-[var(--text-primary)] text-[var(--bg-primary)] px-8 py-4 rounded-xl font-medium hover:bg-[var(--accent)] hover:text-white transition-all mt-4">
              Send Message <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
