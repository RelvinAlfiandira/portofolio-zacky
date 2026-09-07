'use client';

import { useState, useEffect, useRef, useSyncExternalStore } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StrokeText from '../StrokeText';

const subscribe = () => () => { };
const getSnapshot = () => true;
const getServerSnapshot = () => false;

// Batas maksimal preloader boleh tampil. Kalau animasi StrokeText
// tidak pernah memanggil onComplete (macet/gagal), preloader tetap
// dipaksa hilang setelah durasi ini, supaya situs tidak pernah stuck permanen.
const MAX_PRELOADER_MS = 3500;

export default function Preloader({ onPreloaderComplete }) {
  const isClient = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const [isLoading, setIsLoading] = useState(() => {
    if (typeof window !== 'undefined') {
      return !sessionStorage.getItem('hasLoadedBefore');
    }
    return false;
  });

  // Guard supaya proses "selesai loading" cuma pernah jalan sekali,
  // baik dipicu oleh StrokeText selesai maupun oleh safety net.
  const hasFinishedRef = useRef(false);

  const finishLoading = () => {
    if (hasFinishedRef.current) return;
    hasFinishedRef.current = true;
    setIsLoading(false);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('hasLoadedBefore', 'true');
    }
  };

  const handleTextAnimationComplete = () => {
    setTimeout(finishLoading, 400);
  };

  // Safety net: paksa preloader hilang kalau StrokeText tidak pernah
  // memanggil onComplete dalam batas waktu wajar.
  useEffect(() => {
    if (!isLoading) return undefined;
    const safetyTimer = setTimeout(finishLoading, MAX_PRELOADER_MS);
    return () => clearTimeout(safetyTimer);
  }, [isLoading]);

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
              drawDuration={1.2}             // Turunkan durasi dari 2.0 ke 1.2 detik
              fillDelay={0.2}                // Turunkan jeda fill
              stagger={0.03}                 // Percepat stagger dari 0.06 ke 0.03
              fontSize={typeof window !== 'undefined' && window.innerWidth < 640 ? 32 : 56}
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