'use client';

import { useState, useEffect, useSyncExternalStore } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import StrokeText from '../StrokeText';

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export default function Preloader({ onPreloaderComplete }) {
  const isClient = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const shouldReduceMotion = useReducedMotion();

  const [isLoading, setIsLoading] = useState(() => {
    if (typeof window === 'undefined') return true;
    try {
      return !sessionStorage.getItem('hasLoadedBefore');
    } catch (e) {
      return true;
    }
  });

  const [mounted, setMounted] = useState(() => {
    if (typeof window === 'undefined') return false;
    try {
      return !sessionStorage.getItem('hasLoadedBefore');
    } catch (e) {
      return false;
    }
  });

  const finishLoading = () => {
    setIsLoading(false);
    try {
      sessionStorage.setItem('hasLoadedBefore', 'true');
    } catch (e) {}
    if (typeof document !== 'undefined') {
      document.documentElement.classList.remove('is-loading');
    }
  };

  useEffect(() => {
    if (!isLoading && typeof document !== 'undefined') {
      document.documentElement.classList.remove('is-loading');
    }
  }, [isLoading]);

  useEffect(() => {
    if (shouldReduceMotion && isLoading) {
      const timer = setTimeout(() => {
        finishLoading();
      }, 1200);

      return () => clearTimeout(timer);
    }
  }, [shouldReduceMotion, isLoading]);

  useEffect(() => {
    if (!isLoading) {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      return;
    }

    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';

    const safetyTimer = setTimeout(() => {
      finishLoading();
      if (onPreloaderComplete) onPreloaderComplete();
    }, 4000);

    return () => {
      clearTimeout(safetyTimer);
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [isLoading, onPreloaderComplete]);

  useEffect(() => {
    if (isClient && !isLoading && onPreloaderComplete) {
      onPreloaderComplete();
    }
  }, [isClient, isLoading, onPreloaderComplete]);

  const handleTextAnimationComplete = () => {
    setTimeout(() => {
      finishLoading();
    }, 400);
  };

  if (!isClient) return null;

  return (
    <AnimatePresence 
      mode="wait"
      onExitComplete={() => {
        finishLoading();
        if (onPreloaderComplete) {
          onPreloaderComplete();
        }
      }}
    >
      {isLoading && (
        <motion.div
          id="preloader-layer"
          key="preloader"
          initial={{ y: '0%', opacity: 1 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { y: '-100%' }}
          transition={
            shouldReduceMotion
              ? { duration: 0.5, ease: 'easeInOut' }
              : { duration: 1.1, ease: [0.76, 0, 0.24, 1] }
          }
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#080808] select-none pointer-events-auto touch-none px-4 overflow-hidden"
        >
          <div className="w-full max-w-4xl mx-auto flex justify-center items-center">
            {mounted && (
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
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}