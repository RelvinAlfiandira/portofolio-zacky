'use client';

import { useState, useEffect, useSyncExternalStore } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StrokeText from '../StrokeText';

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export default function Preloader({ onPreloaderComplete }) {
  const isClient = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const [isLoading, setIsLoading] = useState(() => {
    if (typeof window !== 'undefined') {
      return !sessionStorage.getItem('hasLoadedBefore');
    }
    return false;
  });

  const handleTextAnimationComplete = () => {
    setTimeout(() => {
      setIsLoading(false);
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('hasLoadedBefore', 'true');
      }
    }, 400);
  };

  useEffect(() => {
    if (isClient && !isLoading && onPreloaderComplete) {
      onPreloaderComplete();
    }
  }, [isClient, isLoading, onPreloaderComplete]);

  if (!isClient) return null;

  return (
    <AnimatePresence 
      mode="wait"
      onExitComplete={() => {
        if (onPreloaderComplete) {
          onPreloaderComplete();
        }
      }}
    >
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: '0%' }}
          exit={{ y: '-100%' }}
          transition={{
            duration: 1.1,
            ease: [0.76, 0, 0.24, 1], 
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#080808] select-none pointer-events-auto px-4 overflow-hidden"
        >
          <div className="w-full max-w-4xl mx-auto flex justify-center items-center">
            <StrokeText
              text="WELCOME TO MY PORTFOLIO WEBSITE"
              strokeColor="#15405f"
              fillColor="#ffffff"
              strokeWidth={1.5}
              drawDuration={2.0}
              fillDelay={0.3}
              stagger={0.06}
              fontSize={typeof window !== 'undefined' && window.innerWidth < 640 ? 36 : 64}
              letterSpacing={-1}
              trigger="mount"
              fillMode="wipe"
              onComplete={handleTextAnimationComplete}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}