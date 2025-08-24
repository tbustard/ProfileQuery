import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import profileImage from "@assets/Untitled design (1)_1755896187722.png";
import { LiquidGlass } from "@specy/liquid-glass-react";

export default function Navigation() {
  const [location] = useLocation();
  const isHomePage = location === '/';
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState(isHomePage ? 'hero' : '');

  const glassStyle = {
    depth: 0,
    segments: 86,
    radius: 0,
    tint: null,
    reflectivity: 0.9,
    thickness: 50,
    dispersion: 5,
    roughness: 0.2,
  };

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

  const getSectionDisplayName = (sectionId: string) => {
    switch (sectionId) {
      case 'hero':
        return 'Overview';
      case 'education':
        return 'Education';
      case 'experience':
        return 'Experience';
      case 'certifications':
        return 'Certifications';
      case 'download':
        return 'Download';
      case 'community':
        return 'Community';
      case 'contact':
        return 'Contact';
      default:
        return 'Portfolio';
    }
  };

  const NavContent = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16 sm:h-20">
        
        {/* Left side - Logo/Name */}
        <div className="flex items-center">
          {isHomePage && isScrolled && (
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
          <div className="relative group">
            <button
              onClick={isHomePage ? () => scrollToSection('#education') : undefined}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-1 ${
                currentSection === 'education' 
                  ? 'text-blue-600 dark:text-blue-400 font-semibold bg-blue-100/10 dark:bg-blue-900/20' 
                  : 'text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-50/10 dark:hover:bg-gray-900/10'
              }`}
            >
              Education
              <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
            </button>
            
            <div className="dropdown-glass absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 max-h-96 overflow-y-auto rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="p-3">
                <button 
                  onClick={() => scrollToSection('#education')}
                  className="w-full text-left block p-5 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <div className="font-semibold text-gray-900 dark:text-white text-base mb-2">University of New Brunswick</div>
                  <div className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    <div>Bachelor of Business Administration</div>
                    <div className="mt-1 font-medium">Fredericton, NB • 2016-2020</div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="relative group">
            <button
              onClick={isHomePage ? () => scrollToSection('#experience') : undefined}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-1 ${
                currentSection === 'experience' 
                  ? 'text-blue-600 dark:text-blue-400 font-semibold bg-blue-100/10 dark:bg-blue-900/20' 
                  : 'text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-50/10 dark:hover:bg-gray-900/10'
              }`}
            >
              Experience
              <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
            </button>
            
            <div className="dropdown-glass absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 max-h-96 overflow-y-auto rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="p-3">
                <button onClick={() => scrollToSection('#experience-bmo-private-wealth-portfolio-assistant')} className="w-full text-left block p-4 rounded-lg hover:bg-white/5 transition-colors border-b border-gray-200/10">
                  <div className="font-semibold text-gray-900 dark:text-white text-base mb-2">BMO Private Wealth</div>
                  <div className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    <div>Portfolio Assistant</div>
                    <div className="mt-1 font-medium">Toronto, ON • 2022-2023</div>
                  </div>
                </button>
                <button onClick={() => scrollToSection('#experience-td-canada-trust-financial-advisor')} className="w-full text-left block p-4 rounded-lg hover:bg-white/5 transition-colors border-b border-gray-200/10">
                  <div className="font-semibold text-gray-900 dark:text-white text-base mb-2">TD Canada Trust</div>
                  <div className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    <div>Financial Advisor</div>
                    <div className="mt-1 font-medium">Kingston, ON • 2021-2022</div>
                  </div>
                </button>
                <button onClick={() => scrollToSection('#experience-royal-bank-of-canada-banking-advisor')} className="w-full text-left block p-4 rounded-lg hover:bg-white/5 transition-colors border-b border-gray-200/10">
                  <div className="font-semibold text-gray-900 dark:text-white text-base mb-2">Royal Bank of Canada</div>
                  <div className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    <div>Banking Advisor</div>
                    <div className="mt-1 font-medium">Kingston, ON • 2020-2021</div>
                  </div>
                </button>
                <button onClick={() => scrollToSection('#experience-royal-bank-of-canada-client-advisor-intern')} className="w-full text-left block p-4 rounded-lg hover:bg-white/5 transition-colors border-b border-gray-200/10">
                  <div className="font-semibold text-gray-900 dark:text-white text-base mb-2">RBC</div>
                  <div className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    <div>Client Advisor Intern</div>
                    <div className="mt-1 font-medium">Fredericton, NB • 2019-2020</div>
                  </div>
                </button>
                <button onClick={() => scrollToSection('#experience-irving-oil-limited-marketing-intern')} className="w-full text-left block p-4 rounded-lg hover:bg-white/5 transition-colors border-b border-gray-200/10">
                  <div className="font-semibold text-gray-900 dark:text-white text-base mb-2">Irving Oil Limited</div>
                  <div className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    <div>Marketing Intern</div>
                    <div className="mt-1 font-medium">Saint John, NB • 2018</div>
                  </div>
                </button>
                <button onClick={() => scrollToSection('#experience-grant-thornton-llp-tax-return-intern')} className="w-full text-left block p-4 rounded-lg hover:bg-white/5 transition-colors">
                  <div className="font-semibold text-gray-900 dark:text-white text-base mb-2">Grant Thornton LLP</div>
                  <div className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    <div>Tax Return Intern</div>
                    <div className="mt-1 font-medium">Saint John, NB • 2018</div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="relative group">
            <button
              onClick={isHomePage ? () => scrollToSection('#certifications') : undefined}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-1 ${
                currentSection === 'certifications' 
                  ? 'text-black dark:text-white font-semibold bg-gray-100/10 dark:bg-gray-900/20' 
                  : 'text-black dark:text-white hover:text-black dark:hover:text-white hover:bg-gray-50/10 dark:hover:bg-gray-900/10'
              }`}
            >
              Certifications
              <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
            </button>
            
            <div className="dropdown-glass absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-96 max-h-96 overflow-y-auto rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="p-2">
                {/* Financial Excellence */}
                <div className="px-4 py-2 text-sm font-semibold text-black dark:text-white">Financial Excellence</div>
                <button onClick={() => scrollToSection('#cert-cfa-level-i-candidate')} className="w-full text-left block p-4 rounded-lg hover:bg-white/5 transition-colors border-b border-gray-200/20">
                  <div className="font-semibold text-gray-900 dark:text-white text-base mb-1">CFA Level I Candidate</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">CFA Institute • 2025</div>
                </button>
                
                {/* Data & Technology */}
                <div className="px-4 py-2 text-sm font-semibold text-black dark:text-white mt-4">Data & Technology</div>
                <button onClick={() => scrollToSection('#cert-data-analytics-professional')} className="w-full text-left block p-4 rounded-lg hover:bg-white/5 transition-colors border-b border-gray-200/20">
                  <div className="font-semibold text-gray-900 dark:text-white text-base mb-1">Data Analytics Professional</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Google • 2023</div>
                </button>
              </div>
            </div>
          </div>

          {/* Community */}
          <div className="relative group">
            <button
              onClick={isHomePage ? () => scrollToSection('#community') : undefined}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-1 ${
                currentSection === 'community' 
                  ? 'text-black dark:text-white font-semibold bg-gray-100/10 dark:bg-gray-900/20' 
                  : 'text-black dark:text-white hover:text-black dark:hover:text-white hover:bg-gray-50/10 dark:hover:bg-gray-900/10'
              }`}
            >
              Community
              <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
            </button>
            
            <div className="dropdown-glass absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 max-h-96 overflow-y-auto rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="p-3">
                <button onClick={() => scrollToSection('#community-royal-bank-of-canada')} className="w-full text-left block p-4 rounded-lg hover:bg-white/5 transition-colors">
                  <div className="font-semibold text-gray-900 dark:text-white text-base mb-2">Royal Bank of Canada</div>
                  <div className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    <div>Student Ambassador</div>
                    <div className="mt-1 font-medium">Fredericton, NB • 2019-2020</div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Download */}
          <button
            onClick={isHomePage ? () => scrollToSection('#download') : undefined}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
              currentSection === 'download' 
                ? 'text-black dark:text-white font-semibold bg-gray-100/10 dark:bg-gray-900/20' 
                : 'text-black dark:text-white hover:text-black dark:hover:text-white hover:bg-gray-50/10 dark:hover:bg-gray-900/10'
            }`}
          >
            Download
          </button>

          {/* Contact */}
          <button
            onClick={isHomePage ? () => scrollToSection('#contact') : undefined}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
              currentSection === 'contact' 
                ? 'text-black dark:text-white font-semibold bg-gray-100/10 dark:bg-gray-900/20' 
                : 'text-black dark:text-white hover:text-black dark:hover:text-white hover:bg-gray-50/10 dark:hover:bg-gray-900/10'
            }`}
          >
            Contact
          </button>
        </div>

        {/* Right side - Mobile menu toggle */}
        <div className="lg:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-foreground hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 w-full z-50">
        {isScrolled ? (
          <LiquidGlass glassStyle={glassStyle}>
            <div className="w-full border-b border-white/10 shadow-2xl">
              <NavContent />
            </div>
          </LiquidGlass>
        ) : (
          <div className="bg-transparent">
            <NavContent />
          </div>
        )}

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 dark:bg-black/95 backdrop-blur-xl border-t border-gray-200/20 shadow-2xl">
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-1">
              {/* Education Section */}
              <div className="space-y-2">
                <button
                  onClick={() => { scrollToSection('#education'); setIsMobileMenuOpen(false); }}
                  className="block w-full text-left px-4 py-4 rounded-lg text-foreground hover:text-primary hover:bg-white/10 transition-all duration-200 min-h-[48px] text-lg font-medium"
                >
                  Education
                </button>
                <button onClick={() => { scrollToSection('#education'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-6 py-4 rounded-lg text-sm text-foreground/80 hover:text-primary hover:bg-white/5 transition-all duration-200">
                  <div className="font-semibold text-gray-900 dark:text-white text-base mb-2">University of New Brunswick</div>
                  <div className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    <div>Bachelor of Business Administration</div>
                    <div className="mt-1 font-medium">Fredericton, NB • 2016-2020</div>
                  </div>
                </button>
              </div>

              {/* Contact Section */}
              <div className="space-y-2">
                <button
                  onClick={() => { scrollToSection('#contact'); setIsMobileMenuOpen(false); }}
                  className="block w-full text-left px-4 py-4 rounded-lg text-foreground hover:text-primary hover:bg-white/10 transition-all duration-200 min-h-[48px] text-lg font-medium"
                >
                  Contact
                </button>
              </div>

              {/* Download Button */}
              <button
                onClick={() => { scrollToSection('#download'); setIsMobileMenuOpen(false); }}
                className="block w-full text-left px-4 py-4 rounded-lg bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary/30 text-primary transition-all duration-200 text-lg font-medium"
              >
                Download
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}