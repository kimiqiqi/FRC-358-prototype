import { Link } from 'react-router-dom';
import { Mail, MapPin, Instagram, Github, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[var(--accent)] flex items-center justify-center text-white font-display font-bold text-xl">
                358
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg leading-tight tracking-tight">Robotic Eagles</span>
                <span className="text-xs font-mono text-[var(--text-secondary)] uppercase tracking-wider">FIRST Team 358</span>
              </div>
            </Link>
            <p className="text-[var(--text-secondary)] text-sm max-w-xs">
              Inspiring the next generation of engineers, innovators, and leaders through FIRST Robotics Competition.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-[var(--text-primary)] mb-6 uppercase tracking-wider text-sm">Team</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-[var(--text-secondary)] hover:text-[var(--accent)] text-sm transition-colors">About Us</Link></li>
              <li><Link to="/join" className="text-[var(--text-secondary)] hover:text-[var(--accent)] text-sm transition-colors">Join the Team</Link></li>
              <li><Link to="/season" className="text-[var(--text-secondary)] hover:text-[var(--accent)] text-sm transition-colors">Season 2026</Link></li>
              <li><Link to="/outreach" className="text-[var(--text-secondary)] hover:text-[var(--accent)] text-sm transition-colors">Community Outreach</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-display font-semibold text-[var(--text-primary)] mb-6 uppercase tracking-wider text-sm">Support</h3>
            <ul className="space-y-4">
              <li><Link to="/sponsors" className="text-[var(--text-secondary)] hover:text-[var(--accent)] text-sm transition-colors">Our Sponsors</Link></li>
              <li><Link to="/donate" className="text-[var(--text-secondary)] hover:text-[var(--accent)] text-sm transition-colors">Donate</Link></li>
              <li><Link to="/contact" className="text-[var(--text-secondary)] hover:text-[var(--accent)] text-sm transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-[var(--text-primary)] mb-6 uppercase tracking-wider text-sm">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                <MapPin size={18} className="shrink-0 text-[var(--accent)] mt-0.5" />
                <span>
                  Hauppauge High School<br />
                  500 Lincoln Blvd<br />
                  Hauppauge, NY 11788
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-[var(--text-secondary)]">
                <Mail size={18} className="shrink-0 text-[var(--accent)]" />
                <a href="mailto:contact@roboticeagles358.org" className="hover:text-[var(--accent)] transition-colors">
                  contact@roboticeagles358.org
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-[var(--border-subtle)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[var(--text-secondary)]">
            &copy; {new Date().getFullYear()} Robotic Eagles Team 358. All rights reserved.
          </p>
          <p className="text-xs text-[var(--text-secondary)]">
            Designed & Built by Team 358 Students
          </p>
        </div>
      </div>
    </footer>
  );
}
