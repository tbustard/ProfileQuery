import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@assets/Untitled design (1)_1755896187722.png";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setCurrentSection(sectionId);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navigationItems = [
    { href: "#education", label: "Education" },
    { href: "#experience", label: "Experience" },
    { href: "#certifications", label: "Certifications" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const getSectionDisplayName = (sectionId: string) => {
    switch (sectionId) {
      case 'education':
        return 'Education';
      case 'experience':
        return 'Experience';
      case 'certifications':
        return 'Certifications';
      case 'contact':
        return 'Contact';
      default:
        return 'Portfolio';
    }
  };

  return (
    <>
      {/* Apple-style Liquid Glass Navigation Bar */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-700 ease-out ${
          isScrolled 
            ? 'bg-white/10 backdrop-blur-[25px] backdrop-saturate-[200%] backdrop-brightness-[110%] border-b border-white/20 shadow-2xl' 
            : 'bg-transparent'
        }`}
        style={{
          backdropFilter: isScrolled ? 'blur(25px) saturate(200%) brightness(110%)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(25px) saturate(200%) brightness(110%)' : 'none',
          boxShadow: isScrolled ? '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)' : 'none',
        }}
      >
        <div className="container-width">
          <div className="flex justify-between items-center py-5">
            {/* Animated Profile Section - appears only when scrolling */}
            <div 
              className={`flex items-center transition-all duration-700 ease-out ${
                isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
              }`}
            >
              {/* Profile Image - slides in from right when scrolled */}
              <div 
                className="relative transition-all duration-700 ease-out mr-4"
                style={{
                  transform: `translateX(${isScrolled ? 0 : 30}px) scale(${isScrolled ? 1 : 0.8})`,
                  opacity: isScrolled ? 1 : 0,
                }}
              >
                <img 
                  src={profileImage} 
                  alt="Tyler Bustard" 
                  className="w-11 h-11 rounded-2xl object-cover ring-2 ring-white/30 shadow-lg transition-all duration-300 hover:ring-white/50 hover:scale-110"
                />
              </div>
              
              {/* Name - slides in from center when scrolled */}
              <div 
                className="transition-all duration-700 ease-out"
                style={{
                  transform: `translateX(${isScrolled ? 0 : -20}px) translateY(${isScrolled ? 0 : 10}px)`,
                  opacity: isScrolled ? 1 : 0,
                }}
              >
                <span className="text-lg font-bold text-foreground transition-all duration-700 ease-out">
                  Tyler Bustard
                </span>
                <div className={`text-sm text-primary font-semibold transition-all duration-500 delay-300 ${
                  isScrolled ? 'opacity-100 max-h-6' : 'opacity-0 max-h-0'
                }`}>
                  {currentSection ? getSectionDisplayName(currentSection) : 'Portfolio'}
                </div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 group ${
                    isScrolled
                      ? 'text-foreground hover:bg-white/15 hover:text-primary'
                      : 'text-foreground hover:bg-white/10 hover:text-primary'
                  }`}
                  data-testid={`nav-${item.label.toLowerCase().replace(' ', '-')}`}
                >
                  {item.label}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary group-hover:w-full group-hover:left-0 transition-all duration-300" />
                </button>
              ))}
            </div>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              className={`md:hidden transition-all duration-300 hover:scale-110 ${
                isScrolled 
                  ? 'hover:bg-white/15 text-foreground' 
                  : 'hover:bg-white/10 text-foreground'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
          
          {/* Mobile Navigation with Glass Effect */}
          {isMobileMenuOpen && (
            <div 
              className={`md:hidden transition-all duration-500 ${
                isScrolled 
                  ? 'bg-white/10 backdrop-blur-xl border-t border-white/20' 
                  : 'bg-white/5 backdrop-blur-lg border-t border-white/15'
              }`}
              style={{
                backdropFilter: 'blur(20px) saturate(180%) brightness(105%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%) brightness(105%)',
              }}
            >
              <div className="px-4 py-6 space-y-3">
                {navigationItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className="text-foreground hover:text-primary hover:bg-white/15 block px-4 py-3 rounded-xl text-base font-medium w-full text-left transition-all duration-300 hover:scale-105 hover:translate-x-2"
                    data-testid={`nav-mobile-${item.label.toLowerCase().replace(' ', '-')}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Spacer to prevent content overlap */}
      <div className="h-20" />
    </>
  );
}
