import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const ref = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Track scroll direction
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY.current ? 'down' : 'up');
      lastScrollY.current = currentScrollY;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add delay if specified
          const delay = options.delay || 0;
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          
          if (options.triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!options.triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold: options.threshold || 0.2,
        rootMargin: options.rootMargin || '0px 0px -5% 0px',
      }
    );

    window.addEventListener('scroll', handleScroll, { passive: true });
    observer.observe(element);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.unobserve(element);
    };
  }, [options.threshold, options.rootMargin, options.triggerOnce, options.delay]);

  return { ref, isVisible, scrollDirection };
}

export function useStaggeredScrollAnimation(
  itemCount: number,
  options: UseScrollAnimationOptions = {}
) {
  const [visibleItems, setVisibleItems] = useState(new Set<number>());
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const ref = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Track scroll direction
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY.current ? 'down' : 'up');
      lastScrollY.current = currentScrollY;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const baseDelay = options.delay || 0;
          const staggerDelay = 100; // Faster stagger for more responsiveness
          
          // Trigger staggered animation
          for (let i = 0; i < itemCount; i++) {
            setTimeout(() => {
              setVisibleItems(prev => new Set([...Array.from(prev), i]));
            }, baseDelay + (i * staggerDelay));
          }
          if (options.triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!options.triggerOnce) {
          setVisibleItems(new Set());
        }
      },
      {
        threshold: options.threshold || 0.15,
        rootMargin: options.rootMargin || '0px 0px -5% 0px',
      }
    );

    window.addEventListener('scroll', handleScroll, { passive: true });
    observer.observe(element);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.unobserve(element);
    };
  }, [itemCount, options.threshold, options.rootMargin, options.triggerOnce, options.delay]);

  return { ref, visibleItems, scrollDirection };
}

// Hook for initial page load animations
export function useInitialPageAnimation(delay: number = 0) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return isLoaded;
}