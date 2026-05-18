import { Link } from 'react-router-dom';
import { Mail, MapPin, Instagram, Github, Youtube, ArrowRight } from 'lucide-react';
import { motion, useSpring, useMotionValue, useReducedMotion } from 'motion/react';
import { PointerEvent, useState, useEffect, useRef } from 'react';

import { siteConfig } from '../config/site';

export default function Footer() {
  const [isMounted, setIsMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const shouldReduceMotion = useReducedMotion();

  // Smooth out mouse movement for the glow
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  function handlePointerMove({ currentTarget, clientX, clientY, pointerType }: PointerEvent<HTMLElement>) {
    if (pointerType !== 'mouse') return;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <footer 
      className="relative bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)] pt-16 pb-8 overflow-hidden group"
      onPointerMove={handlePointerMove}
    >
      {/* Immersive engineering background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Faint technical grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]" />
        
        {/* Layered gradients for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/80 to-transparent" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[var(--accent)] rounded-full mix-blend-multiply filter blur-[120px] opacity-10 dark:opacity-20 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-10 dark:opacity-20 -translate-x-1/2 translate-y-1/2" />

        {/* Cursor-follow radial spotlight */}
        {isMounted && !shouldReduceMotion && (
          <motion.div
            className="absolute rounded-full opacity-0 xl:group-hover:opacity-100 transition-opacity duration-1000 hidden md:block"
            style={{
              width: '800px',
              height: '800px',
              left: springX,
              top: springY,
              x: '-50%',
              y: '-50%',
              background: 'radial-gradient(circle closest-side, var(--accent) 0%, transparent 100%)',
              opacity: 0.06,
            }}
          />
        )}

        {/* Lightweight floating particles (sparks/data packets) with connection network */}
        {isMounted && !shouldReduceMotion && (
          <ParticleNetwork mouseX={mouseX} mouseY={mouseY} shouldReduceMotion={shouldReduceMotion} />
        )}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group/logo w-max">
              <div className="w-10 h-10 rounded-lg bg-[var(--accent)] flex items-center justify-center text-[var(--bg-primary)] font-display font-bold text-xl transition-transform duration-300 group-hover/logo:scale-105 group-hover/logo:shadow-[0_0_15px_var(--accent)]">
                {siteConfig.teamNumber}
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg leading-tight tracking-tight transition-colors duration-300 group-hover/logo:text-[var(--accent)]">{siteConfig.teamName}</span>
                <span className="text-xs font-mono text-[var(--text-secondary)] uppercase tracking-wider">FIRST Team {siteConfig.teamNumber}</span>
              </div>
            </Link>
            <p className="text-[var(--text-secondary)] text-sm max-w-xs leading-relaxed">
              Inspiring the next generation of engineers, innovators, and leaders through FIRST Robotics Competition.
            </p>
            <div className="flex items-center gap-4">
              <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-2 -ml-2 rounded-full text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/10 transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href={siteConfig.socials.youtube} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/10 transition-all duration-300">
                <Youtube size={20} />
              </a>
              <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/10 transition-all duration-300">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-[var(--text-primary)] mb-6 uppercase tracking-wider text-sm">Team</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="group/link flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent)] text-sm transition-colors"><ArrowRight size={14} className="opacity-0 -ml-4 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all duration-300" />About Us</Link></li>
              <li><Link to="/join" className="group/link flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent)] text-sm transition-colors"><ArrowRight size={14} className="opacity-0 -ml-4 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all duration-300" />Join the Team</Link></li>
              <li><Link to="/season" className="group/link flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent)] text-sm transition-colors"><ArrowRight size={14} className="opacity-0 -ml-4 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all duration-300" />Season 2026</Link></li>
              <li><Link to="/outreach" className="group/link flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent)] text-sm transition-colors"><ArrowRight size={14} className="opacity-0 -ml-4 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all duration-300" />Community Outreach</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-display font-semibold text-[var(--text-primary)] mb-6 uppercase tracking-wider text-sm">Support</h3>
            <ul className="space-y-4">
              <li><Link to="/sponsors" className="group/link flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent)] text-sm transition-colors"><ArrowRight size={14} className="opacity-0 -ml-4 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all duration-300" />Our Sponsors</Link></li>
              <li><Link to="/donate" className="group/link flex items-center gap-2 text-[var(--text-secondary)] hover:emerald-500 text-sm transition-colors font-medium"><ArrowRight size={14} className="opacity-0 -ml-4 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all duration-300" />Donate</Link></li>
              <li><Link to="/contact" className="group/link flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent)] text-sm transition-colors"><ArrowRight size={14} className="opacity-0 -ml-4 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all duration-300" />Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-[var(--text-primary)] mb-6 uppercase tracking-wider text-sm">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-[var(--text-secondary)] group/item transition-colors">
                <MapPin size={18} className="shrink-0 text-[var(--text-secondary)] group-hover/item:text-[var(--accent)] mt-0.5 transition-colors duration-300" />
                <span className="whitespace-pre-line group-hover/item:text-[var(--text-primary)] transition-colors duration-300">
                  {siteConfig.schoolName}{'\n'}
                  {siteConfig.schoolAddress.split(', ').join('\n')}
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-[var(--text-secondary)] group/item transition-colors">
                <Mail size={18} className="shrink-0 text-[var(--text-secondary)] group-hover/item:text-[var(--accent)] transition-colors duration-300" />
                <a href={`mailto:${siteConfig.contactEmail}`} className="group-hover/item:text-[var(--text-primary)] transition-colors duration-300">
                  {siteConfig.contactEmail}
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-[var(--border-subtle)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[var(--text-secondary)]">
            &copy; {new Date().getFullYear()} {siteConfig.teamName} Team {siteConfig.teamNumber}. All rights reserved.
          </p>
          <p className="text-xs text-[var(--text-secondary)]">
            Designed & Built by Team {siteConfig.teamNumber} Students
          </p>
        </div>
      </div>
    </footer>
  );
}

function ParticleNetwork({ 
  mouseX, 
  mouseY, 
  shouldReduceMotion 
}: { 
  mouseX: any; 
  mouseY: any; 
  shouldReduceMotion: boolean; 
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (shouldReduceMotion || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 4 : 12;
    
    // Get accent color
    const rootStyles = getComputedStyle(document.documentElement);
    let accentColor = rootStyles.getPropertyValue('--accent').trim() || '#0044CC';
    
    let r = 0, g = 68, b = 204;
    if (accentColor.startsWith('#')) {
      const hex = accentColor.replace('#', '');
      if (hex.length === 3) {
        r = parseInt(hex[0]+hex[0], 16);
        g = parseInt(hex[1]+hex[1], 16);
        b = parseInt(hex[2]+hex[2], 16);
      } else if (hex.length === 6) {
        r = parseInt(hex.substring(0,2), 16);
        g = parseInt(hex.substring(2,4), 16);
        b = parseInt(hex.substring(4,6), 16);
      }
    }

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      baseOpacity: number;
    }

    const particles: Particle[] = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3 - 0.2, // Drift upward
      size: Math.random() * 1.5 + 1,
      baseOpacity: Math.random() * 0.5 + 0.1,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const mx = mouseX.get();
      const my = mouseY.get();

      // update
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // wrap around smoothly
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;
      });

      // draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 180) {
            // Check distance to mouse
            const hx = (particles[i].x + particles[j].x) / 2;
            const hy = (particles[i].y + particles[j].y) / 2;
            const mxDist = Math.sqrt(Math.pow(hx - mx, 2) + Math.pow(hy - my, 2));

            if (mxDist < 300) { // Highlight connections near cursor
              // connection opacity drops off with distance and with distance from cursor
              const opacity = (1 - dist / 180) * (1 - mxDist / 300) * 0.4;
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        }
      }

      // draw particles
      particles.forEach((p) => {
        // intensify near mouse
        const mxDist = Math.sqrt(Math.pow(p.x - mx, 2) + Math.pow(p.y - my, 2));
        let finalOpacity = p.baseOpacity;
        if (mxDist < 200) {
          finalOpacity += (1 - mxDist / 200) * 0.4;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${finalOpacity})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `rgba(${r}, ${g}, ${b}, ${finalOpacity})`;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [shouldReduceMotion, mouseX, mouseY]);

  if (shouldReduceMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
