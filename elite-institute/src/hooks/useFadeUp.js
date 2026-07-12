import { useEffect } from 'react';

export function useFadeUp() {
  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-up');
    if (!fadeElements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -30px 0px' }
    );

    fadeElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  });
}
