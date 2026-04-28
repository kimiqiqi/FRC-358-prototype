import { Mail, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { siteConfig } from '../config/site';

export default function Contact() {
  return (
    <div className="section-pad pt-32">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-display font-medium text-[var(--text-primary)] mb-6">Contact Us</h1>
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
          <div className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl polaroid-shadow p-8">
            <h2 className="text-3xl font-display font-medium text-[var(--text-primary)] mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <p className="text-[var(--text-secondary)] mb-2">For general inquiries and sponsorship:</p>
                  <a href={`mailto:${siteConfig.contactEmail}`} className="text-[var(--accent)] hover:underline font-medium">
                    {siteConfig.contactEmail}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Location</h3>
                  <p className="text-[var(--text-secondary)] mb-2">We are located at:</p>
                  <address className="not-italic text-[var(--text-primary)] font-medium whitespace-pre-line">
                    {siteConfig.schoolName}{'\n'}
                    {siteConfig.schoolAddress.split(', ').join('\n')}
                  </address>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Location Map */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl polaroid-shadow p-2 relative min-h-[400px] flex flex-col"
        >
          <div className="absolute inset-0 p-2">
            <iframe 
              src={`https://maps.google.com/maps?q=${encodeURIComponent(siteConfig.schoolName + " " + siteConfig.schoolAddress)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
              title={`${siteConfig.schoolName} Map Location`}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full rounded-xl"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
