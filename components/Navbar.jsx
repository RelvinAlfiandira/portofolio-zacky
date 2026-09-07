'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import StaggeredMenu from '@/components/StaggeredMenu';

export default function Navbar({ isReady = true }) {
  const pathname = usePathname();

  const navLinks = [
    { label: 'Home', ariaLabel: 'Go to Home page', link: '/' },
    { label: 'Projects', ariaLabel: 'View Projects', link: '/projects' },
    { label: 'Achievements', ariaLabel: 'View Achievements', link: '/achievements' },
  ];

  if (!isReady) return null;

  return (
    <motion.header 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-6 left-0 right-0 z-50 max-w-6xl mx-auto px-4 sm:px-8 flex justify-between md:justify-center items-center pointer-events-none"
    >
      {/* Buat Desktop */}
      <nav className="pointer-events-auto hidden md:flex items-center gap-1 bg-zinc-950/80 backdrop-blur-md border border-zinc-800/80 px-3 py-2 rounded-full shadow-2xl relative">
        {navLinks.map((link) => {
          const isActive = pathname === link.link;
          return (
            <Link
              key={link.link}
              href={link.link}
              aria-label={link.ariaLabel}
              className={`relative px-4 py-1.5 text-sm transition-colors duration-300 font-sans ${
                isActive
                  ? 'text-white font-medium'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeNavTab"
                  className="absolute inset-0 bg-white/10 rounded-full -z-10"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              {link.label}
            </Link>
          );
        })}
      </nav>

      {/* Nav Buat Mobile */}
      <div className="md:hidden pointer-events-auto fixed top-6 right-4 sm:right-8 z-50">
        <StaggeredMenu items={navLinks} />
      </div>
    </motion.header>
  );
}