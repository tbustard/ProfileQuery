import { useState, useEffect, useMemo } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { LiquidGlass } from "@specy/liquid-glass-react";
import profileImage from "@assets/Untitled design (1)_1755896187722.png";

export default function Navigation() {
  const [location] = useLocation();
  const isHomePage = location === '/';
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState(isHomePage ? 'hero' : '');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [savedScrollPosition, setSavedScrollPosition] = useState(0);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openDropdown) {
        const target = event.target as HTMLElement;
        if (!target.closest('.dropdown-container')) {
          setOpenDropdown(null);
        }
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [openDropdown]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open and preserve scroll position
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Save current scroll position
      setSavedScrollPosition(window.scrollY);
      // Prevent scrolling without changing position
      document.body.style.overflow = 'hidden';
    } else {
      // Restore scrolling and position
      document.body.style.overflow = '';
      // Use requestAnimationFrame to ensure DOM is ready
      requestAnimationFrame(() => {
        window.scrollTo(0, savedScrollPosition);
      });
    }
    
    // Cleanup function to ensure scroll is restored
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen, savedScrollPosition]);

  useEffect(() => {
    if (!isHomePage) {
      setCurrentSection('');
      return;
    }

    setCurrentSection('hero');

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
    };

    let visibleSections = new Map();

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleSections.set(entry.target.id, entry.intersectionRatio);
        } else {
          visibleSections.delete(entry.target.id);
        }
      });

      // Find the section with the highest intersection ratio
      let maxRatio = 0;
      let activeSection = 'hero';
      
      Array.from(visibleSections.entries()).forEach(([sectionId, ratio]) => {
        if (ratio > maxRatio) {
          maxRatio = ratio;
          activeSection = sectionId;
        }
      });

      setCurrentSection(activeSection);
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      visibleSections.clear();
    };
  }, [isHomePage]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  // Memoized glass styles for navigation - optimized for readability
  const navGlassStyle = useMemo(() => ({
    depth: 0,
    segments: 50,
    radius: 0,
    tint: null,
    reflectivity: 0.9,
    thickness: 50,
    dispersion: 5,
    roughness: 0.3
  }), []);

  const dropdownGlassStyle = useMemo(() => ({
    depth: 10,
    segments: 50,
    radius: 10,
    tint: null,
    reflectivity: 0.9,
    thickness: 50,
    dispersion: 5,
    roughness: 0.3
  }), []);

  return (
    <>
      {/* Navigation Bar */}
      <nav 
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-700 ease-out ${
          isScrolled 
            ? 'border-b border-white/10 shadow-2xl' 
            : 'bg-transparent'
        }`}
      >
        {isScrolled ? (
          <LiquidGlass
            glassStyle={navGlassStyle}
            style="border-bottom: 1px solid rgba(255, 255, 255, 0.1); box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.15);"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16 sm:h-20">
                
                {/* Left side - Logo/Name */}
                <div className="flex items-center">
                  {isHomePage && (
                    <button 
                      onClick={() => {
                        window.scrollTo({
                          top: 0,
                          behavior: 'smooth'
                        });
                      }}
                      className="flex items-center space-x-4 transition-all duration-700 ease-out hover:scale-105 cursor-pointer"
                    >
                      <img 
                        src={profileImage} 
                        alt="Tyler Bustard" 
                        className="w-9 h-9 rounded-xl object-cover ring-1 ring-white/20 shadow-sm"
                      />
                      <div className="relative">
                        <span className="text-lg tracking-tight apple-heading-nav">
                          <span className="font-bold bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent dark:from-white dark:via-gray-100 dark:to-gray-300">Tyler</span>{' '}
                          <span className="font-normal bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent dark:from-white dark:via-gray-100 dark:to-gray-300">Bustard</span>
                        </span>
                      </div>
                    </button>
                  )}
                </div>

                {/* Center - Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-1">
                  
                  {/* Education */}
                  <div className="relative dropdown-container">
                    <button
                      onClick={() => setOpenDropdown(openDropdown === 'education' ? null : 'education')}
                      className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-1 ${
                        currentSection === 'education' 
                          ? 'text-blue-600 dark:text-blue-400 font-semibold bg-blue-100/10 dark:bg-blue-900/20' 
                          : 'text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/10 dark:hover:bg-blue-900/10'
                      }`}
                    >
                      Education
                      <ChevronDown size={14} className={`transition-transform duration-200 ${openDropdown === 'education' ? 'rotate-180' : ''}`} />
                    </button>
                    
                  </div>

                  {/* Experience */}
                  <div className="relative dropdown-container">
                    <button
                      onClick={() => setOpenDropdown(openDropdown === 'experience' ? null : 'experience')}
                      className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-1 ${
                        currentSection === 'experience' 
                          ? 'text-blue-600 dark:text-blue-400 font-semibold bg-blue-100/10 dark:bg-blue-900/20' 
                          : 'text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/10 dark:hover:bg-blue-900/10'
                      }`}
                    >
                      Experience
                      <ChevronDown size={14} className={`transition-transform duration-200 ${openDropdown === 'experience' ? 'rotate-180' : ''}`} />
                    </button>
                  </div>

                  {/* Certifications */}
                  <div className="relative dropdown-container">
                    <button
                      onClick={() => setOpenDropdown(openDropdown === 'certifications' ? null : 'certifications')}
                      className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-1 ${
                        currentSection === 'certifications' 
                          ? 'text-blue-600 dark:text-blue-400 font-semibold bg-blue-100/10 dark:bg-blue-900/20' 
                          : 'text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/10 dark:hover:bg-blue-900/10'
                      }`}
                    >
                      Certifications
                      <ChevronDown size={14} className={`transition-transform duration-200 ${openDropdown === 'certifications' ? 'rotate-180' : ''}`} />
                    </button>
                  </div>

                  {/* Community */}
                  <div className="relative dropdown-container">
                    <button
                      onClick={() => setOpenDropdown(openDropdown === 'community' ? null : 'community')}
                      className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-1 ${
                        currentSection === 'community' 
                          ? 'text-blue-600 dark:text-blue-400 font-semibold bg-blue-100/10 dark:bg-blue-900/20' 
                          : 'text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/10 dark:hover:bg-blue-900/10'
                      }`}
                    >
                      Community
                      <ChevronDown size={14} className={`transition-transform duration-200 ${openDropdown === 'community' ? 'rotate-180' : ''}`} />
                    </button>
                  </div>

                  {/* Contact */}
                  <div className="relative dropdown-container">
                    <button
                      onClick={() => setOpenDropdown(openDropdown === 'contact' ? null : 'contact')}
                      className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-1 ${
                        currentSection === 'contact' 
                          ? 'text-blue-600 dark:text-blue-400 font-semibold bg-blue-100/10 dark:bg-blue-900/20' 
                          : 'text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/10 dark:hover:bg-blue-900/10'
                      }`}
                    >
                      Contact
                      <ChevronDown size={14} className={`transition-transform duration-200 ${openDropdown === 'contact' ? 'rotate-180' : ''}`} />
                    </button>
                  </div>

                  {/* Download */}
                  <button
                    onClick={isHomePage ? () => scrollToSection('#download') : undefined}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      currentSection === 'download' 
                        ? 'text-primary font-semibold bg-primary/10' 
                        : 'text-primary hover:text-primary/80 hover:bg-primary/5'
                    }`}
                  >
                    Download
                  </button>

                </div>

                {/* Right side - Mobile menu toggle */}
                <div className="lg:hidden">
                  <Button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    variant="ghost"
                    size="sm"
                    className="relative z-50 p-2 text-foreground hover:text-primary transition-colors"
                    data-testid="mobile-menu-toggle"
                  >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                  </Button>
                </div>
              </div>
            </div>
          </LiquidGlass>
        ) : (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16 sm:h-20">
              
              {/* Right side - Mobile menu toggle for non-scrolled state */}
              <div></div>
              <div></div>
              <div className="lg:hidden">
                <Button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  variant="ghost"
                  size="sm"
                  className="relative z-50 p-2 text-foreground hover:text-primary transition-colors"
                  data-testid="mobile-menu-toggle"
                >
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-16 sm:top-20 z-40">
            <LiquidGlass
              glassStyle={navGlassStyle}
              style="border-top: 1px solid rgba(255, 255, 255, 0.1);"
            >
              <div className="max-w-2xl mx-auto px-4 py-6 h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent" style={{ height: 'calc(100vh - 4rem)' }}>
                <div className="space-y-6">
                  {isHomePage && (
                    <>
                      {/* Education Section */}
                      <div className="space-y-3">
                        <div className="text-xl font-bold text-blue-600 dark:text-blue-400 px-4">Education</div>
                        <button onClick={() => { scrollToSection('#education'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-4 py-3 rounded-lg text-foreground/80 hover:text-primary hover:bg-white/5 transition-all duration-200">
                          <div className="space-y-1">
                            <div className="text-lg font-bold text-gray-900 dark:text-white">University of New Brunswick</div>
                            <div className="text-base text-gray-700 dark:text-gray-300">Bachelor of Business Administration</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">Fredericton, NB</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">2016-2020</div>
                          </div>
                        </button>
                      </div>

                      {/* Experience Section */}
                      <div className="space-y-3">
                        <div className="text-xl font-bold text-blue-600 dark:text-blue-400 px-4">Experience</div>
                        <div className="space-y-2">
                          <button onClick={() => { scrollToSection('#experience-bmo-private-wealth-portfolio-assistant'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-4 py-3 rounded-lg text-foreground/80 hover:text-primary hover:bg-white/5 transition-all duration-200">
                            <div className="space-y-1">
                              <div className="text-lg font-bold text-gray-900 dark:text-white">Portfolio Assistant</div>
                              <div className="text-base text-gray-700 dark:text-gray-300">BMO Private Wealth</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">Toronto, Ontario</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">2022-2025</div>
                            </div>
                          </button>
                          <button onClick={() => { scrollToSection('#experience-td-canada-trust-financial-advisor'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-4 py-3 rounded-lg text-foreground/80 hover:text-primary hover:bg-white/5 transition-all duration-200">
                            <div className="space-y-1">
                              <div className="text-lg font-bold text-gray-900 dark:text-white">Financial Advisor</div>
                              <div className="text-base text-gray-700 dark:text-gray-300">TD Canada Trust</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">Kingston, Ontario</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">2021-2022</div>
                            </div>
                          </button>
                          <button onClick={() => { scrollToSection('#experience-rbc-dominion-securities-banking-advisor'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-4 py-3 rounded-lg text-foreground/80 hover:text-primary hover:bg-white/5 transition-all duration-200">
                            <div className="space-y-1">
                              <div className="text-lg font-bold text-gray-900 dark:text-white">Banking Advisor</div>
                              <div className="text-base text-gray-700 dark:text-gray-300">RBC Dominion Securities</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">Kingston, Ontario</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">2020-2021</div>
                            </div>
                          </button>
                          <button onClick={() => { scrollToSection('#experience-nbif-research-assistant'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-4 py-3 rounded-lg text-foreground/80 hover:text-primary hover:bg-white/5 transition-all duration-200">
                            <div className="space-y-1">
                              <div className="text-lg font-bold text-gray-900 dark:text-white">Research Assistant</div>
                              <div className="text-base text-gray-700 dark:text-gray-300">NBIF</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">Fredericton, New Brunswick</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">2019-2020</div>
                            </div>
                          </button>
                          <button onClick={() => { scrollToSection('#experience-rbc-royal-bank-of-canada-financial-services-representative'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-4 py-3 rounded-lg text-foreground/80 hover:text-primary hover:bg-white/5 transition-all duration-200">
                            <div className="space-y-1">
                              <div className="text-lg font-bold text-gray-900 dark:text-white">Financial Services Representative</div>
                              <div className="text-base text-gray-700 dark:text-gray-300">RBC Royal Bank of Canada</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">Fredericton, New Brunswick</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">2018-2019</div>
                            </div>
                          </button>
                          <button onClick={() => { scrollToSection('#experience-rbc-dominion-securities-summer-student'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-4 py-3 rounded-lg text-foreground/80 hover:text-primary hover:bg-white/5 transition-all duration-200">
                            <div className="space-y-1">
                              <div className="text-lg font-bold text-gray-900 dark:text-white">Summer Student</div>
                              <div className="text-base text-gray-700 dark:text-gray-300">RBC Dominion Securities</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">Fredericton, New Brunswick</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">2017-2018</div>
                            </div>
                          </button>
                        </div>
                      </div>

                      {/* Certifications Section */}
                      <div className="space-y-3">
                        <div className="text-xl font-bold text-blue-600 dark:text-blue-400 px-4">Certifications</div>
                        <div className="space-y-2 max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
                          <button onClick={() => { scrollToSection('#certifications-financial-excellence'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-4 py-2 rounded-lg text-foreground/80 hover:text-primary hover:bg-white/5 transition-all duration-200">
                            <div className="space-y-1">
                              <div className="text-base font-bold text-gray-900 dark:text-white">CFA Level I Candidate</div>
                              <div className="text-sm text-gray-700 dark:text-gray-300">CFA Institute</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">2025</div>
                            </div>
                          </button>
                          <button onClick={() => { scrollToSection('#certifications-financial-excellence'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-4 py-2 rounded-lg text-foreground/80 hover:text-primary hover:bg-white/5 transition-all duration-200">
                            <div className="space-y-1">
                              <div className="text-base font-bold text-gray-900 dark:text-white">Discounted Cash Flow Analysis</div>
                              <div className="text-sm text-gray-700 dark:text-gray-300">Training the Street</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">2024</div>
                            </div>
                          </button>
                          <button onClick={() => { scrollToSection('#certifications-financial-excellence'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-4 py-2 rounded-lg text-foreground/80 hover:text-primary hover:bg-white/5 transition-all duration-200">
                            <div className="space-y-1">
                              <div className="text-base font-bold text-gray-900 dark:text-white">Financial Planning 1</div>
                              <div className="text-sm text-gray-700 dark:text-gray-300">Canadian Securities Institute</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">2023</div>
                            </div>
                          </button>
                          <button onClick={() => { scrollToSection('#certifications-data---technology'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-4 py-2 rounded-lg text-foreground/80 hover:text-primary hover:bg-white/5 transition-all duration-200">
                            <div className="space-y-1">
                              <div className="text-base font-bold text-gray-900 dark:text-white">Data Analytics Professional</div>
                              <div className="text-sm text-gray-700 dark:text-gray-300">Google</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">2023</div>
                            </div>
                          </button>
                          <button onClick={() => { scrollToSection('#certifications-data---technology'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-4 py-2 rounded-lg text-foreground/80 hover:text-primary hover:bg-white/5 transition-all duration-200">
                            <div className="space-y-1">
                              <div className="text-base font-bold text-gray-900 dark:text-white">Machine Learning</div>
                              <div className="text-sm text-gray-700 dark:text-gray-300">Stanford University</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">2020</div>
                            </div>
                          </button>
                        </div>
                        <button onClick={() => { scrollToSection('#certifications'); setIsMobileMenuOpen(false); }} className="block w-full text-center px-4 py-2 rounded-lg text-blue-600 dark:text-blue-400 hover:bg-blue-50/10 dark:hover:bg-blue-900/10 transition-all duration-200 text-sm font-medium">
                          View All 22 Certifications
                        </button>
                      </div>

                      {/* Community Section */}
                      <div className="space-y-3">
                        <div className="text-xl font-bold text-blue-600 dark:text-blue-400 px-4">Community</div>
                        <div className="space-y-2">
                          <button onClick={() => { scrollToSection('#community-united-way'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-4 py-3 rounded-lg text-foreground/80 hover:text-primary hover:bg-white/5 transition-all duration-200">
                            <div className="space-y-1">
                              <div className="text-lg font-bold text-gray-900 dark:text-white">Next Gen Ambassador</div>
                              <div className="text-base text-gray-700 dark:text-gray-300">United Way</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">Kingston, Ontario</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">2020-2023</div>
                            </div>
                          </button>
                          <button onClick={() => { scrollToSection('#community-royal-bank-of-canada'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-4 py-3 rounded-lg text-foreground/80 hover:text-primary hover:bg-white/5 transition-all duration-200">
                            <div className="space-y-1">
                              <div className="text-lg font-bold text-gray-900 dark:text-white">Student Ambassador</div>
                              <div className="text-base text-gray-700 dark:text-gray-300">Royal Bank of Canada</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">Fredericton, New Brunswick</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">2019-2020</div>
                            </div>
                          </button>
                          <button onClick={() => { scrollToSection('#community-irving-oil-limited'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-4 py-3 rounded-lg text-foreground/80 hover:text-primary hover:bg-white/5 transition-all duration-200">
                            <div className="space-y-1">
                              <div className="text-lg font-bold text-gray-900 dark:text-white">Volunteer Staff</div>
                              <div className="text-base text-gray-700 dark:text-gray-300">Irving Oil Limited</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">Saint John, New Brunswick</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">2018</div>
                            </div>
                          </button>
                        </div>
                      </div>

                      {/* Contact Section */}
                      <div className="space-y-2">
                        <button onClick={() => { scrollToSection('#contact'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-4 py-4 rounded-lg text-foreground hover:text-primary hover:bg-white/10 transition-all duration-200 min-h-[48px] text-lg font-medium">
                          Contact
                        </button>
                        <button onClick={() => { scrollToSection('#contact'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-6 py-3 rounded-lg text-sm text-foreground/80 hover:text-primary hover:bg-white/5 transition-all duration-200">
                          <div className="font-semibold text-gray-900 dark:text-white text-base mb-2">Email</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-medium">tbustard@unb.ca</div>
                        </button>
                        <button onClick={() => { scrollToSection('#contact'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-6 py-3 rounded-lg text-sm text-foreground/80 hover:text-primary hover:bg-white/5 transition-all duration-200">
                          <div className="font-semibold text-gray-900 dark:text-white text-base mb-2">Phone</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-medium">(613) 985-1223</div>
                        </button>
                        <button onClick={() => { scrollToSection('#contact'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-6 py-3 rounded-lg text-sm text-foreground/80 hover:text-primary hover:bg-white/5 transition-all duration-200">
                          <div className="font-semibold text-gray-900 dark:text-white text-base mb-2">Location</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-medium">Toronto, Ontario, Canada</div>
                        </button>
                      </div>

                      {/* Download Button */}
                      <button onClick={() => { scrollToSection('#download'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-4 py-4 rounded-lg bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary/30 text-primary transition-all duration-200 text-lg font-medium">
                        Download
                      </button>
                    </>
                  )}
                </div>
              </div>
            </LiquidGlass>
          </div>
        )}

      </nav>

      {/* Education Dropdown - Outside nav container */}
      {openDropdown === 'education' && (
        <div className="fixed top-20 left-1/2 transform -translate-x-80 w-80 z-[9999] mt-2">
          <LiquidGlass 
            glassStyle={dropdownGlassStyle}
            style="border-radius: 12px; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.15); border: 1px solid rgba(255, 255, 255, 0.1);"
          >
            <div className="rounded-xl p-4">
              <button 
                onClick={() => {
                  scrollToSection('#education');
                  setOpenDropdown(null);
                }}
                className="w-full text-left hover:bg-white/10 dark:hover:bg-black/10 rounded-lg p-2 transition-all duration-200 -m-2"
              >
                <div className="space-y-1">
                  <div className="text-lg font-bold text-gray-900 dark:text-white bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">University of New Brunswick</div>
                  <div className="text-base text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Bachelor of Business Administration</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 font-medium bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Fredericton, NB</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 font-medium bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">2016-2020</div>
                </div>
              </button>
            </div>
          </LiquidGlass>
        </div>
      )}

      {/* Experience Dropdown - Outside nav container */}
      {openDropdown === 'experience' && (
        <div className="fixed top-20 left-1/2 transform -translate-x-32 w-80 z-[9999] mt-2">
          <LiquidGlass 
            glassStyle={dropdownGlassStyle}
            style="border-radius: 12px; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.15); border: 1px solid rgba(255, 255, 255, 0.1);"
          >
            <div className="rounded-xl p-4">
              <div className="space-y-3 max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
                {/* BMO Private Wealth */}
                <button 
                  onClick={() => {
                    scrollToSection('#experience-bmo-private-wealth-portfolio-assistant');
                    setOpenDropdown(null);
                  }}
                  className="w-full text-left hover:bg-white/10 dark:hover:bg-black/10 rounded-lg p-2 transition-all duration-200"
                >
                  <div className="space-y-1">
                    <div className="text-lg font-bold text-gray-900 dark:text-white bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Portfolio Assistant</div>
                    <div className="text-base text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">BMO Private Wealth</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Toronto, Ontario</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">2022-2023</div>
                  </div>
                </button>
                
                {/* TD Canada Trust */}
                <button 
                  onClick={() => {
                    scrollToSection('#experience-td-canada-trust-financial-advisor');
                    setOpenDropdown(null);
                  }}
                  className="w-full text-left hover:bg-white/10 dark:hover:bg-black/10 rounded-lg p-2 transition-all duration-200"
                >
                  <div className="space-y-1">
                    <div className="text-lg font-bold text-gray-900 dark:text-white bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Financial Advisor</div>
                    <div className="text-base text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">TD Canada Trust</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Kingston, Ontario</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">2021-2022</div>
                  </div>
                </button>
                
                {/* RBC Banking Advisor */}
                <button 
                  onClick={() => {
                    scrollToSection('#experience-royal-bank-of-canada-banking-advisor');
                    setOpenDropdown(null);
                  }}
                  className="w-full text-left hover:bg-white/10 dark:hover:bg-black/10 rounded-lg p-2 transition-all duration-200"
                >
                  <div className="space-y-1">
                    <div className="text-lg font-bold text-gray-900 dark:text-white bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Banking Advisor</div>
                    <div className="text-base text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Royal Bank of Canada</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Kingston, Ontario</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">2020-2021</div>
                  </div>
                </button>
                
                {/* RBC Client Advisor Intern */}
                <button 
                  onClick={() => {
                    scrollToSection('#experience-royal-bank-of-canada-client-advisor-intern');
                    setOpenDropdown(null);
                  }}
                  className="w-full text-left hover:bg-white/10 dark:hover:bg-black/10 rounded-lg p-2 transition-all duration-200"
                >
                  <div className="space-y-1">
                    <div className="text-lg font-bold text-gray-900 dark:text-white bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Client Advisor Intern</div>
                    <div className="text-base text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Royal Bank of Canada</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Fredericton, New Brunswick</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">2019-2020</div>
                  </div>
                </button>
                
                {/* Irving Oil */}
                <button 
                  onClick={() => {
                    scrollToSection('#experience-irving-oil-limited-marketing-intern');
                    setOpenDropdown(null);
                  }}
                  className="w-full text-left hover:bg-white/10 dark:hover:bg-black/10 rounded-lg p-2 transition-all duration-200"
                >
                  <div className="space-y-1">
                    <div className="text-lg font-bold text-gray-900 dark:text-white bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Marketing Intern</div>
                    <div className="text-base text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Irving Oil Limited</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Saint John, New Brunswick</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">2018</div>
                  </div>
                </button>
                
                {/* Grant Thornton */}
                <button 
                  onClick={() => {
                    scrollToSection('#experience-grant-thornton-llp-tax-return-intern');
                    setOpenDropdown(null);
                  }}
                  className="w-full text-left hover:bg-white/10 dark:hover:bg-black/10 rounded-lg p-2 transition-all duration-200"
                >
                  <div className="space-y-1">
                    <div className="text-lg font-bold text-gray-900 dark:text-white bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Tax Return Intern</div>
                    <div className="text-base text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Grant Thornton LLP</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Saint John, New Brunswick</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">2018</div>
                  </div>
                </button>
              </div>
            </div>
          </LiquidGlass>
        </div>
      )}

      {/* Certifications Dropdown - Outside nav container */}
      {openDropdown === 'certifications' && (
        <div className="fixed top-20 left-1/2 transform translate-x-8 w-96 z-[9999] mt-2">
          <LiquidGlass 
            glassStyle={dropdownGlassStyle}
            style="border-radius: 12px; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.15); border: 1px solid rgba(255, 255, 255, 0.1);"
          >
            <div className="rounded-xl p-4">
              <div className="space-y-3 max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
                
                <button onClick={() => { scrollToSection('#certifications-financial-excellence'); setOpenDropdown(null); }} className="w-full text-left hover:bg-white/10 dark:hover:bg-black/10 rounded-lg p-2 transition-all duration-200">
                  <div className="space-y-1">
                    <div className="text-lg font-bold text-gray-900 dark:text-white bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">CFA Level I Candidate</div>
                    <div className="text-base text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">CFA Institute</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">2025</div>
                  </div>
                </button>
                
                <button onClick={() => { scrollToSection('#certifications-financial-excellence'); setOpenDropdown(null); }} className="w-full text-left hover:bg-white/10 dark:hover:bg-black/10 rounded-lg p-2 transition-all duration-200">
                  <div className="space-y-1">
                    <div className="text-lg font-bold text-gray-900 dark:text-white bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Discounted Cash Flow Analysis</div>
                    <div className="text-base text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Training the Street</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">2024</div>
                  </div>
                </button>
                
                <button onClick={() => { scrollToSection('#certifications-financial-excellence'); setOpenDropdown(null); }} className="w-full text-left hover:bg-white/10 dark:hover:bg-black/10 rounded-lg p-2 transition-all duration-200">
                  <div className="space-y-1">
                    <div className="text-lg font-bold text-gray-900 dark:text-white bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Financial Planning 1</div>
                    <div className="text-base text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Canadian Securities Institute</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">2023</div>
                  </div>
                </button>
                
                <button onClick={() => { scrollToSection('#certifications-financial-excellence'); setOpenDropdown(null); }} className="w-full text-left hover:bg-white/10 dark:hover:bg-black/10 rounded-lg p-2 transition-all duration-200">
                  <div className="space-y-1">
                    <div className="text-lg font-bold text-gray-900 dark:text-white bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Certificate in Financial Services Advice</div>
                    <div className="text-base text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Canadian Securities Institute</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">2022</div>
                  </div>
                </button>
                
                <button onClick={() => { scrollToSection('#certifications-financial-excellence'); setOpenDropdown(null); }} className="w-full text-left hover:bg-white/10 dark:hover:bg-black/10 rounded-lg p-2 transition-all duration-200">
                  <div className="space-y-1">
                    <div className="text-lg font-bold text-gray-900 dark:text-white bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Personal Financial Service Advice</div>
                    <div className="text-base text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Canadian Securities Institute</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">2021</div>
                  </div>
                </button>
                
                <button onClick={() => { scrollToSection('#certifications-financial-excellence'); setOpenDropdown(null); }} className="w-full text-left hover:bg-white/10 dark:hover:bg-black/10 rounded-lg p-2 transition-all duration-200">
                  <div className="space-y-1">
                    <div className="text-lg font-bold text-gray-900 dark:text-white bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Canadian Securities Course</div>
                    <div className="text-base text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Canadian Securities Institute</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">2021</div>
                  </div>
                </button>
                
                <button onClick={() => { scrollToSection('#certifications-financial-excellence'); setOpenDropdown(null); }} className="w-full text-left hover:bg-white/10 dark:hover:bg-black/10 rounded-lg p-2 transition-all duration-200">
                  <div className="space-y-1">
                    <div className="text-lg font-bold text-gray-900 dark:text-white bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Financial & Valuation Modeling</div>
                    <div className="text-base text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Wall Street Prep</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">2020</div>
                  </div>
                </button>
                
                <button onClick={() => { scrollToSection('#certifications-financial-excellence'); setOpenDropdown(null); }} className="w-full text-left hover:bg-white/10 dark:hover:bg-black/10 rounded-lg p-2 transition-all duration-200">
                  <div className="space-y-1">
                    <div className="text-lg font-bold text-gray-900 dark:text-white bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Investment Funds in Canada</div>
                    <div className="text-base text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Canadian Securities Institute</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">2020</div>
                  </div>
                </button>
                
                <button onClick={() => { scrollToSection('#certifications-financial-excellence'); setOpenDropdown(null); }} className="w-full text-left hover:bg-white/10 dark:hover:bg-black/10 rounded-lg p-2 transition-all duration-200">
                  <div className="space-y-1">
                    <div className="text-lg font-bold text-gray-900 dark:text-white bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Bloomberg Market Concepts Certificate</div>
                    <div className="text-base text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Bloomberg</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">2020</div>
                  </div>
                </button>
                
                <button onClick={() => { scrollToSection('#certifications-financial-excellence'); setOpenDropdown(null); }} className="w-full text-left hover:bg-white/10 dark:hover:bg-black/10 rounded-lg p-2 transition-all duration-200">
                  <div className="space-y-1">
                    <div className="text-lg font-bold text-gray-900 dark:text-white bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Personal Finance Essentials</div>
                    <div className="text-base text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">McGill University</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">2020</div>
                  </div>
                </button>

                <button onClick={() => { scrollToSection('#certifications-data---technology'); setOpenDropdown(null); }} className="w-full text-left hover:bg-white/10 dark:hover:bg-black/10 rounded-lg p-2 transition-all duration-200">
                  <div className="space-y-1">
                    <div className="text-lg font-bold text-gray-900 dark:text-white bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Data Analytics Professional</div>
                    <div className="text-base text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Google</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">2023</div>
                  </div>
                </button>
                
                <button onClick={() => { scrollToSection('#certifications-data---technology'); setOpenDropdown(null); }} className="w-full text-left hover:bg-white/10 dark:hover:bg-black/10 rounded-lg p-2 transition-all duration-200">
                  <div className="space-y-1">
                    <div className="text-lg font-bold text-gray-900 dark:text-white bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Data Visualization with Tableau</div>
                    <div className="text-base text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">UC Davis</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">2023</div>
                  </div>
                </button>
                
                <button onClick={() => { scrollToSection('#certifications-data---technology'); setOpenDropdown(null); }} className="w-full text-left hover:bg-white/10 dark:hover:bg-black/10 rounded-lg p-2 transition-all duration-200">
                  <div className="space-y-1">
                    <div className="text-lg font-bold text-gray-900 dark:text-white bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Python for Everybody</div>
                    <div className="text-base text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">University of Michigan</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">2023</div>
                  </div>
                </button>
                
                <button onClick={() => { scrollToSection('#certifications-data---technology'); setOpenDropdown(null); }} className="w-full text-left hover:bg-white/10 dark:hover:bg-black/10 rounded-lg p-2 transition-all duration-200">
                  <div className="space-y-1">
                    <div className="text-lg font-bold text-gray-900 dark:text-white bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Machine Learning</div>
                    <div className="text-base text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Stanford University</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">2020</div>
                  </div>
                </button>
                
                <button onClick={() => { scrollToSection('#certifications-data---technology'); setOpenDropdown(null); }} className="w-full text-left hover:bg-white/10 dark:hover:bg-black/10 rounded-lg p-2 transition-all duration-200">
                  <div className="space-y-1">
                    <div className="text-lg font-bold text-gray-900 dark:text-white bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">SQL for Data Science</div>
                    <div className="text-base text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">UC Davis</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">2020</div>
                  </div>
                </button>
                
                <button onClick={() => { scrollToSection('#certifications-data---technology'); setOpenDropdown(null); }} className="w-full text-left hover:bg-white/10 dark:hover:bg-black/10 rounded-lg p-2 transition-all duration-200">
                  <div className="space-y-1">
                    <div className="text-lg font-bold text-gray-900 dark:text-white bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Power BI Data Visualization</div>
                    <div className="text-base text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Microsoft</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">2020</div>
                  </div>
                </button>

                <button onClick={() => { scrollToSection('#certifications-advanced-analytics'); setOpenDropdown(null); }} className="w-full text-left hover:bg-white/10 dark:hover:bg-black/10 rounded-lg p-2 transition-all duration-200">
                  <div className="space-y-1">
                    <div className="text-lg font-bold text-gray-900 dark:text-white bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Econometrics: Methods & Applications</div>
                    <div className="text-base text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Erasmus University</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">2024</div>
                  </div>
                </button>
                
                <button onClick={() => { scrollToSection('#certifications-advanced-analytics'); setOpenDropdown(null); }} className="w-full text-left hover:bg-white/10 dark:hover:bg-black/10 rounded-lg p-2 transition-all duration-200">
                  <div className="space-y-1">
                    <div className="text-lg font-bold text-gray-900 dark:text-white bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Matrix Algebra for Engineers</div>
                    <div className="text-base text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">HKUST</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">2024</div>
                  </div>
                </button>
                
                <button onClick={() => { scrollToSection('#certifications-advanced-analytics'); setOpenDropdown(null); }} className="w-full text-left hover:bg-white/10 dark:hover:bg-black/10 rounded-lg p-2 transition-all duration-200">
                  <div className="space-y-1">
                    <div className="text-lg font-bold text-gray-900 dark:text-white bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Introduction to Calculus</div>
                    <div className="text-base text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">University of Sydney</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">2023</div>
                  </div>
                </button>
                
                <button onClick={() => { scrollToSection('#certifications-advanced-analytics'); setOpenDropdown(null); }} className="w-full text-left hover:bg-white/10 dark:hover:bg-black/10 rounded-lg p-2 transition-all duration-200">
                  <div className="space-y-1">
                    <div className="text-lg font-bold text-gray-900 dark:text-white bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Inferential Statistics</div>
                    <div className="text-base text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Duke University</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">2020</div>
                  </div>
                </button>
                
                <button onClick={() => { scrollToSection('#certifications-advanced-analytics'); setOpenDropdown(null); }} className="w-full text-left hover:bg-white/10 dark:hover:bg-black/10 rounded-lg p-2 transition-all duration-200">
                  <div className="space-y-1">
                    <div className="text-lg font-bold text-gray-900 dark:text-white bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Excel Skills for Business</div>
                    <div className="text-base text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Macquarie University</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">2020</div>
                  </div>
                </button>

                <button onClick={() => { scrollToSection('#certifications-standardized-exam'); setOpenDropdown(null); }} className="w-full text-left hover:bg-white/10 dark:hover:bg-black/10 rounded-lg p-2 transition-all duration-200">
                  <div className="space-y-1">
                    <div className="text-lg font-bold text-gray-900 dark:text-white bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">GRE General Test</div>
                    <div className="text-base text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">ETS</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">2024</div>
                  </div>
                </button>

              </div>
            </div>
          </LiquidGlass>
        </div>
      )}

      {/* Community Dropdown - Outside nav container */}
      {openDropdown === 'community' && (
        <div className="fixed top-20 left-1/2 transform translate-x-48 w-80 z-[9999] mt-2">
          <LiquidGlass 
            glassStyle={dropdownGlassStyle}
            style="border-radius: 12px; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.15); border: 1px solid rgba(255, 255, 255, 0.1);"
          >
            <div className="rounded-xl p-4">
              <div className="space-y-3 max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
                
                {/* United Way */}
                <button 
                  onClick={() => {
                    scrollToSection('#community-united-way');
                    setOpenDropdown(null);
                  }}
                  className="w-full text-left hover:bg-white/10 dark:hover:bg-black/10 rounded-lg p-2 transition-all duration-200"
                >
                  <div className="space-y-1">
                    <div className="text-lg font-bold text-gray-900 dark:text-white bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Next Gen Ambassador</div>
                    <div className="text-base text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">United Way</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Kingston, Ontario</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">2020-2023</div>
                  </div>
                </button>

                {/* Royal Bank of Canada */}
                <button 
                  onClick={() => {
                    scrollToSection('#community-royal-bank-of-canada');
                    setOpenDropdown(null);
                  }}
                  className="w-full text-left hover:bg-white/10 dark:hover:bg-black/10 rounded-lg p-2 transition-all duration-200"
                >
                  <div className="space-y-1">
                    <div className="text-lg font-bold text-gray-900 dark:text-white bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Student Ambassador</div>
                    <div className="text-base text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Royal Bank of Canada</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Fredericton, New Brunswick</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">2019-2020</div>
                  </div>
                </button>

                {/* Irving Oil Limited */}
                <button 
                  onClick={() => {
                    scrollToSection('#community-irving-oil-limited');
                    setOpenDropdown(null);
                  }}
                  className="w-full text-left hover:bg-white/10 dark:hover:bg-black/10 rounded-lg p-2 transition-all duration-200"
                >
                  <div className="space-y-1">
                    <div className="text-lg font-bold text-gray-900 dark:text-white bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Volunteer Staff</div>
                    <div className="text-base text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Irving Oil Limited</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Saint John, New Brunswick</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">2018</div>
                  </div>
                </button>

              </div>
            </div>
          </LiquidGlass>
        </div>
      )}

      {/* Contact Dropdown - Outside nav container */}
      {openDropdown === 'contact' && (
        <div className="fixed top-20 left-1/2 transform translate-x-80 w-80 z-[9999] mt-2">
          <LiquidGlass 
            glassStyle={dropdownGlassStyle}
            style="border-radius: 12px; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.15); border: 1px solid rgba(255, 255, 255, 0.1);"
          >
            <div className="rounded-xl p-4">
              <div className="space-y-3">
                
                {/* Email */}
                <button 
                  onClick={() => {
                    scrollToSection('#contact');
                    setOpenDropdown(null);
                  }}
                  className="w-full text-left hover:bg-white/10 dark:hover:bg-black/10 rounded-lg p-2 transition-all duration-200"
                >
                  <div className="space-y-1">
                    <div className="text-lg font-bold text-gray-900 dark:text-white bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Email</div>
                    <div className="text-base text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">tbustard@unb.ca</div>
                  </div>
                </button>

                {/* Phone */}
                <button 
                  onClick={() => {
                    scrollToSection('#contact');
                    setOpenDropdown(null);
                  }}
                  className="w-full text-left hover:bg-white/10 dark:hover:bg-black/10 rounded-lg p-2 transition-all duration-200"
                >
                  <div className="space-y-1">
                    <div className="text-lg font-bold text-gray-900 dark:text-white bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Phone</div>
                    <div className="text-base text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">(613) 985-1223</div>
                  </div>
                </button>

                {/* Location */}
                <button 
                  onClick={() => {
                    scrollToSection('#contact');
                    setOpenDropdown(null);
                  }}
                  className="w-full text-left hover:bg-white/10 dark:hover:bg-black/10 rounded-lg p-2 transition-all duration-200"
                >
                  <div className="space-y-1">
                    <div className="text-lg font-bold text-gray-900 dark:text-white bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Location</div>
                    <div className="text-base text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded px-1 py-0.5 block w-fit">Toronto, Ontario, Canada</div>
                  </div>
                </button>

              </div>
            </div>
          </LiquidGlass>
        </div>
      )}

    </>
  );
}