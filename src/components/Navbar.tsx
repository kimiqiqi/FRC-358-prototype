import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Moon, Sun } from 'lucide-react';
import clsx from 'clsx';

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
    const isDarkMode = document.documentElement.classList.contains('dark') || 
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
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
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled ? 'bg-[var(--bg-primary)]/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border-2 border-[var(--text-primary)] flex items-center justify-center text-[var(--text-primary)] font-display font-bold text-xl group-hover:bg-[var(--text-primary)] group-hover:text-[var(--bg-primary)] transition-colors">
              358
            </div>
            <div className="flex flex-col">
              <span className="font-display text-2xl leading-none tracking-tight text-[var(--text-primary)]">Robotic Eagles</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={clsx(
                  'text-xs font-bold uppercase tracking-widest transition-colors hover:text-[var(--accent-blue)]',
                  location.pathname === link.path ? 'text-[var(--accent-blue)]' : 'text-[var(--text-primary)]'
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-4 ml-2">
              <button 
                onClick={toggleTheme} 
                className="p-2 rounded-full text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <Link
                to="/join"
                className="bg-[var(--accent)] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[var(--accent-hover)] transition-colors inline-block"
              >
                Join Us
              </Link>
              <Link
                to="/donate"
                className="bg-[var(--text-primary)] text-[var(--bg-primary)] px-6 py-2.5 rounded-full text-sm font-bold hover:opacity-90 transition-opacity inline-block"
              >
                Donate
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 lg:hidden">
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className="p-2 text-[var(--text-primary)]"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[var(--bg-primary)] border-t border-[var(--border-subtle)] shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={clsx(
                  'block px-3 py-4 text-sm font-bold uppercase tracking-widest border-b border-[var(--border-subtle)]',
                  location.pathname === link.path ? 'text-[var(--accent-blue)]' : 'text-[var(--text-primary)]'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/join"
              className="block px-3 py-4 text-sm font-bold uppercase tracking-widest border-b border-[var(--border-subtle)] text-[var(--text-primary)]"
            >
              Join Us
            </Link>
            <Link
              to="/donate"
              className="flex items-center justify-between px-3 py-4 text-sm font-bold uppercase tracking-widest text-[var(--text-primary)]"
            >
              Donate
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
