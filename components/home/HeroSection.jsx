'use client';

import { useEffect, useRef, useState } from 'react';

export default function TextType({
  text = [],
  typingSpeed = 60,
  deletingSpeed = 35,
  pauseDuration = 2000,
  showCursor = true,
  cursorCharacter = '|',
  className = '',
}) {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!Array.isArray(text) || text.length === 0) return undefined;

    const currentFull = text[textIndex % text.length] || '';

    let delay = isDeleting ? deletingSpeed : typingSpeed;
    if (!isDeleting && displayText === currentFull) {
      delay = pauseDuration;
    }

    timeoutRef.current = setTimeout(() => {
      if (!isDeleting && displayText === currentFull) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % text.length);
        return;
      }

      setDisplayText((prev) =>
        isDeleting ? prev.slice(0, -1) : currentFull.slice(0, prev.length + 1)
      );
    }, delay);

    // Cleanup wajib: timeout lama SELALU dibersihkan sebelum yang baru dibuat,
    // dan saat komponen unmount. Ini yang mencegah timer menumpuk tanpa henti.
    return () => clearTimeout(timeoutRef.current);
  }, [displayText, isDeleting, textIndex, text, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={className}>
      {displayText}
      {showCursor && (
        <span className="animate-pulse" aria-hidden="true">
          {cursorCharacter}
        </span>
      )}
    </span>
  );
}