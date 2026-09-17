'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const socials = [
  { name: 'GitHub', href: 'https://github.com/Zackyalghfr', icon: FaGithub },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/Zackyalghfr', icon: FaLinkedin },
  { name: 'Instagram', href: 'https://instagram.com/zackyalghfr', icon: FaInstagram },
];

const baseStyles =
  'relative overflow-hidden inline-flex items-center justify-center gap-2 h-11 sm:h-12 px-7 font-medium rounded-xl backdrop-blur-md transition-all text-sm sm:text-base shadow-lg hover:scale-[1.02] active:scale-95';

const buttonVariants = {
  white: 'bg-white/10 hover:bg-white/20 text-white border border-white/20',
  blue: 'bg-[#15405f]/40 hover:bg-[#15405f]/60 text-sky-200 border border-[#15405f]/60',
};

export default function SocialConnect({ variant = 'white' }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex items-center gap-3">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={`${baseStyles} ${buttonVariants[variant] || buttonVariants.white}`}
      >
        {open ? (
          <>Close <X size={16} /></>
        ) : (
          <>Let&apos;s Connect <ArrowRight size={16} /></>
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="flex items-center gap-3"
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  variants={{
                    hidden: { opacity: 0, scale: 0.4, y: 10 },
                    show: {
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      transition: { type: 'spring', stiffness: 300, damping: 20 },
                    },
                  }}
                  whileHover={{ scale: 1.12 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center justify-center w-12 h-12 rounded-full text-white bg-white/10 hover:bg-white/20 border border-white/15 shadow-lg backdrop-blur-sm transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}