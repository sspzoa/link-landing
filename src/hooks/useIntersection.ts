import { useEffect, useRef } from 'react';

export function useIntersection<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        const target = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          target.style.transition = 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out';
          target.style.opacity = '1';
          target.style.transform = 'translateY(0)';
        } else {
          target.style.transition = 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out';
          target.style.opacity = '0';
          target.style.transform = 'translateY(20px)';
        }
      }
    });

    if (ref.current) {
      ref.current.style.opacity = '0';
      ref.current.style.transform = 'translateY(20px)';
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return ref;
}
