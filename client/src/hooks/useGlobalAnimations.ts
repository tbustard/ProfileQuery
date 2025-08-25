import { useEffect } from 'react';

// Global animation coordinator to ensure smooth animations across the entire site
export const useGlobalAnimations = () => {
  useEffect(() => {
    // Set up global animation classes on body
    document.body.classList.add('animations-ready');
    
    // Optimize performance for animations
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
      /* Ensure all animations use GPU acceleration */
      .scroll-fade-in,
      .scroll-slide-up,
      .scroll-scale-in,
      .page-load-fade-in {
        transform: translateZ(0);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      
      /* Optimize backdrop filters for performance */
      @media (max-width: 768px) {
        .backdrop-blur-xl, .backdrop-blur-lg {
          backdrop-filter: blur(8px) !important;
          -webkit-backdrop-filter: blur(8px) !important;
        }
        .backdrop-blur-md {
          backdrop-filter: blur(6px) !important;
          -webkit-backdrop-filter: blur(6px) !important;
        }
      }
      
      /* Reduce effects on low-power devices */
      @media (prefers-reduced-motion: reduce) {
        .backdrop-blur-xl, .backdrop-blur-lg, .backdrop-blur-md {
          backdrop-filter: none !important;
          -webkit-backdrop-filter: none !important;
          background: rgba(255, 255, 255, 0.9) !important;
        }
      }
      
      /* Prevent animation flickers - only on animated elements */
      .scroll-fade-in,
      .scroll-slide-up,
      .scroll-scale-in,
      .page-load-fade-in {
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
      }
      
      /* Smooth scrolling for all navigation */
      html {
        scroll-behavior: smooth;
      }
      
      /* Progressive enhancement for animations */
      @media (prefers-reduced-motion: no-preference) {
        .animations-ready .scroll-fade-in,
        .animations-ready .scroll-slide-up,
        .animations-ready .scroll-scale-in {
          transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
        }
      }
    `;
    
    document.head.appendChild(styleSheet);
    
    // Initialize intersection observer for better performance
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -10% 0px',
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5]
    };
    
    // Preload animation styles
    const animationElements = document.querySelectorAll('.scroll-fade-in, .scroll-slide-up, .scroll-scale-in');
    animationElements.forEach(el => {
      el.classList.add('animation-ready');
    });
    
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);
};