// GSAP Animation Library for Apple Liquid Glass Effects
// This module provides sophisticated animations inspired by Apple's design system

declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
  }
}

export class AppleGSAPAnimations {
  private static isGSAPLoaded(): boolean {
    return typeof window !== 'undefined' && window.gsap && window.ScrollTrigger;
  }

  static initializeScrollAnimations() {
    if (!this.isGSAPLoaded()) {
      console.warn('GSAP or ScrollTrigger not loaded');
      return;
    }

    const { gsap, ScrollTrigger } = window;
    gsap.registerPlugin(ScrollTrigger);

    // Apple-style card animations with elastic easing
    const cards = document.querySelectorAll('.apple-card, .apple-glass');
    cards.forEach((card, index) => {
      gsap.set(card, {
        opacity: 0,
        y: 50,
        scale: 0.9,
        rotationX: 10
      });

      gsap.to(card, {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationX: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.75)",
        delay: index * 0.1,
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });
    });

    // Section fade-ins with spring physics
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
      const children = section.querySelectorAll('h1, h2, h3, p, .card');
      
      gsap.set(children, {
        opacity: 0,
        y: 30,
        scale: 0.95
      });

      gsap.to(children, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });
    });

    // Navigation liquid glass effect
    const nav = document.querySelector('nav');
    if (nav) {
      gsap.set(nav, {
        y: -100,
        opacity: 0
      });

      gsap.to(nav, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "elastic.out(1, 0.6)",
        delay: 0.2
      });
    }
  }

  static addHoverAnimations() {
    if (!this.isGSAPLoaded()) return;

    const { gsap } = window;

    // Enhanced card hover effects
    const interactiveElements = document.querySelectorAll('.apple-card, .apple-button-primary, .apple-button-secondary');
    
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        gsap.to(element, {
          scale: 1.05,
          rotationY: 2,
          rotationX: 2,
          duration: 0.3,
          ease: "elastic.out(1, 0.75)"
        });
      });

      element.addEventListener('mouseleave', () => {
        gsap.to(element, {
          scale: 1,
          rotationY: 0,
          rotationX: 0,
          duration: 0.3,
          ease: "elastic.out(1, 0.75)"
        });
      });

      element.addEventListener('mousedown', () => {
        gsap.to(element, {
          scale: 0.98,
          duration: 0.1,
          ease: "power2.out"
        });
      });

      element.addEventListener('mouseup', () => {
        gsap.to(element, {
          scale: 1.05,
          duration: 0.2,
          ease: "elastic.out(1, 0.75)"
        });
      });
    });
  }

  static createShimmerEffect(element: Element) {
    if (!this.isGSAPLoaded()) return;

    const { gsap } = window;

    // Create shimmer overlay
    const shimmer = document.createElement('div');
    shimmer.style.cssText = `
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%);
      pointer-events: none;
      z-index: 10;
      transform: translateX(-100%) rotate(45deg);
    `;

    element.appendChild(shimmer);

    // Animate shimmer on hover
    element.addEventListener('mouseenter', () => {
      gsap.to(shimmer, {
        x: '200%',
        duration: 0.8,
        ease: "power2.out"
      });
    });

    element.addEventListener('mouseleave', () => {
      gsap.set(shimmer, { x: '-100%' });
    });
  }

  static parallaxGlassEffect() {
    if (!this.isGSAPLoaded()) return;

    const { gsap, ScrollTrigger } = window;

    const glassElements = document.querySelectorAll('.apple-glass, .apple-card');
    
    glassElements.forEach(element => {
      gsap.to(element, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      // Glass refraction parallax
      const refractionLayer = element.querySelector('::before');
      if (refractionLayer) {
        gsap.to(refractionLayer, {
          yPercent: -20,
          xPercent: 5,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top", 
            scrub: true
          }
        });
      }
    });
  }

  static morphingGlassTransition(fromElement: Element, toElement: Element) {
    if (!this.isGSAPLoaded()) return;

    const { gsap } = window;

    const tl = gsap.timeline();
    
    tl.to(fromElement, {
      scale: 0.8,
      opacity: 0,
      rotationY: 90,
      duration: 0.4,
      ease: "power2.in"
    })
    .set(toElement, {
      scale: 0.8,
      opacity: 0,
      rotationY: -90
    })
    .to(toElement, {
      scale: 1,
      opacity: 1,
      rotationY: 0,
      duration: 0.4,
      ease: "elastic.out(1, 0.75)"
    });

    return tl;
  }

  static initializeAll() {
    // Wait for DOM and GSAP to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
          this.initializeScrollAnimations();
          this.addHoverAnimations();
          this.parallaxGlassEffect();
        }, 100);
      });
    } else {
      setTimeout(() => {
        this.initializeScrollAnimations();
        this.addHoverAnimations();
        this.parallaxGlassEffect();
      }, 100);
    }
  }
}

// Remove auto-initialization to prevent conflicts

export default AppleGSAPAnimations;