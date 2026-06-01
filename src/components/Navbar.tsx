import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'motion/react';

import { siteConfig } from '../config/site';

const navLinks = [
  { name: 'About', path: '/about' },
  { name: 'Season 2026', path: '/season' },
  { name: 'Outreach', path: '/outreach' },
  { name: 'Events', path: '/events' },
  { name: 'Sponsors', path: '/sponsors' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Initial theme check
  useEffect(() => {
    const isDarkMode = localStorage.theme === 'dark';
    
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  };

  return (
    <header
      className={clsx(
        'fixed top-0 w-full z-50 transition-all duration-500 ease-out border-b border-transparent',
        scrolled ? 'bg-[var(--bg-primary)]/80 backdrop-blur-md shadow-sm border-[var(--border-subtle)] py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border-2 border-[var(--text-primary)] flex items-center justify-center text-[var(--text-primary)] font-display font-bold text-xl group-hover:bg-[var(--text-primary)] group-hover:text-[var(--bg-primary)] transition-colors duration-300">
              {siteConfig.teamNumber}
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="font-display text-2xl leading-none tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-300">{siteConfig.teamName}</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={clsx(
                  'relative text-xs font-bold uppercase tracking-widest transition-colors hover:text-[var(--accent-blue)] py-2 group',
                  location.pathname === link.path ? 'text-[var(--accent-blue)]' : 'text-[var(--text-primary)]'
                )}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--accent)] transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
            ))}
            <div className="flex items-center gap-4 ml-2">
              <button 
                onClick={toggleTheme} 
                className="p-2 rounded-full text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <Link
                to="/join"
                className="btn-primary px-6 py-2.5 text-sm shadow-sm"
              >
                Join Us
              </Link>
              <Link
                to="/donate"
                className="btn-outline px-6 py-2.5 text-sm"
              >
                Donate
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 lg:hidden">
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className="p-2 text-[var(--text-primary)] transition-transform duration-300 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-lg"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden absolute top-full left-0 w-full bg-[var(--bg-primary)]/95 backdrop-blur-xl border-b border-[var(--border-subtle)] shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={clsx(
                    'block px-4 py-4 text-sm font-bold uppercase tracking-widest border-b border-[var(--border-subtle)] transition-colors duration-300 active:bg-[var(--bg-secondary)]',
                    location.pathname === link.path ? 'text-[var(--accent-blue)]' : 'text-[var(--text-primary)]'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="p-4 flex flex-col gap-3 mt-4">
                <Link
                  to="/join"
                  className="btn-primary w-full justify-center text-sm py-3"
                >
                  Join Team
                </Link>
                <Link
                  to="/donate"
                  className="btn-outline w-full justify-center text-sm py-3 bg-[var(--bg-secondary)]"
                >
                  Support Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
