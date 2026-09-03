'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Achievements', path: '/achievements' },
  ];

  return (
    <header className="sticky top-6 z-50 max-w-6xl mx-auto px-4 sm:px-8 flex justify-end">
      {/* Desktop Capsule Navigation Pill */}
      <nav className="hidden md:flex items-center gap-6 bg-zinc-950/80 backdrop-blur-md border border-zinc-800/80 px-6 py-2.5 rounded-full shadow-2xl">
        {navLinks.map((link) => {
          const isActive = pathname === link.path;
          return (
            <Link
              key={link.path}
              href={link.path}
              className={`text-sm transition-colors font-sans ${
                isActive
                  ? 'text-white font-medium'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>

      {/* Mobile Toggle Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-zinc-950/80 backdrop-blur-md border border-zinc-800 p-3 rounded-full text-zinc-300 hover:text-white"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-14 right-4 bg-zinc-950/95 border border-zinc-800 rounded-2xl p-4 min-w-[180px] shadow-2xl backdrop-blur-xl space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2 rounded-xl text-sm ${
                pathname === link.path
                  ? 'bg-zinc-800 text-white font-medium'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}