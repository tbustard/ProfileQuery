import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import profileImage from "@assets/Untitled design (1)_1755896187722.png";

export default function Navigation() {
  const [location] = useLocation();
  const isHomePage = location === '/';
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState(isHomePage ? 'hero' : '');

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
      rootMargin: '-40% 0px -50% 0px',
      threshold: 0.1
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
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
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

  return (
    <>
      {/* Navigation Bar */}
      <nav 
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-700 ease-out ${
          isScrolled 
            ? 'nav-glass border-b border-white/10 shadow-2xl' 
            : 'bg-transparent'
        }`}
        style={{
          background: isScrolled ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
          boxShadow: isScrolled ? '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.15)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Left side - Logo/Name */}
            <div className="flex items-center">
              {isHomePage && isScrolled && (
                <div className="flex items-center space-x-4 transition-all duration-700 ease-out">
                  <img 
                    src={profileImage} 
                    alt="Tyler Bustard" 
                    className="w-9 h-9 rounded-xl object-cover ring-1 ring-white/20 shadow-sm"
                  />
                  <div>
                    <span className="text-lg font-bold text-foreground">Tyler Bustard</span>
                    {currentSection && (
                      <div className="-mt-1">
                        <span className="text-xs font-medium text-primary">
                          {getSectionDisplayName(currentSection)}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Center - Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              
              {/* Education */}
              <div className="relative group">
                <button
                  onClick={isHomePage ? () => scrollToSection('#education') : undefined}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-1 ${
                    currentSection === 'education' 
                      ? 'text-primary font-semibold bg-primary/10' 
                      : 'text-foreground/90 hover:text-foreground hover:bg-white/5'
                  }`}
                >
                  Education
                  <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                </button>
                
                <div className="dropdown-glass absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-2">
                    <button 
                      onClick={() => scrollToSection('#education')}
                      className="w-full text-left block p-4 rounded-lg hover:bg-white/5 transition-colors"
                    >
                      <div className="font-semibold text-gray-900 text-base mb-1">University of New Brunswick</div>
                      <div className="text-sm text-gray-600">Bachelor of Business Administration • Fredericton, NB (2016-2020)</div>
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
                      ? 'text-primary font-semibold bg-primary/10' 
                      : 'text-foreground/90 hover:text-foreground hover:bg-white/5'
                  }`}
                >
                  Experience
                  <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                </button>
                
                <div className="dropdown-glass absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-96 max-h-80 overflow-y-auto rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-2">
                    <button onClick={() => scrollToSection('#experience-bmo-private-wealth-portfolio-assistant')} className="w-full text-left block p-4 rounded-lg hover:bg-white/5 transition-colors border-b border-gray-200/20">
                      <div className="font-semibold text-gray-900 text-base mb-1">BMO Private Wealth</div>
                      <div className="text-sm text-gray-600">Portfolio Assistant • Toronto, ON (2022-2023)</div>
                    </button>
                    <button onClick={() => scrollToSection('#experience-td-canada-trust-financial-advisor')} className="w-full text-left block p-4 rounded-lg hover:bg-white/5 transition-colors border-b border-gray-200/20">
                      <div className="font-semibold text-gray-900 text-base mb-1">TD Canada Trust</div>
                      <div className="text-sm text-gray-600">Financial Advisor • Kingston, ON (2021-2022)</div>
                    </button>
                    <button onClick={() => scrollToSection('#experience-royal-bank-of-canada-banking-advisor')} className="w-full text-left block p-4 rounded-lg hover:bg-white/5 transition-colors border-b border-gray-200/20">
                      <div className="font-semibold text-gray-900 text-base mb-1">Royal Bank of Canada</div>
                      <div className="text-sm text-gray-600">Banking Advisor • Kingston, ON (2020-2021)</div>
                    </button>
                    <button onClick={() => scrollToSection('#experience-royal-bank-of-canada-client-advisor-intern')} className="w-full text-left block p-4 rounded-lg hover:bg-white/5 transition-colors">
                      <div className="font-semibold text-gray-900 text-base mb-1">RBC Client Advisor Intern</div>
                      <div className="text-sm text-gray-600">Fredericton, NB (2019-2020)</div>
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
                      ? 'text-primary font-semibold bg-primary/10' 
                      : 'text-foreground/90 hover:text-foreground hover:bg-white/5'
                  }`}
                >
                  Certifications
                  <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                </button>
                
                <div className="dropdown-glass absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-72 max-h-80 overflow-y-auto rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-2">
                    <div className="font-semibold text-gray-900 text-base p-3 bg-gray-50/30 rounded-lg mb-2">Financial Excellence</div>
                    <button onClick={() => scrollToSection('#cert-cfa-level-i-candidate')} className="w-full text-left block p-3 pl-4 rounded-lg hover:bg-white/5 transition-colors">
                      <div className="font-medium text-gray-900 text-sm">CFA Level I Candidate</div>
                      <div className="text-xs text-gray-600">CFA Institute • 2025</div>
                    </button>
                    <button onClick={() => scrollToSection('#cert-discounted-cash-flow-analysis')} className="w-full text-left block p-3 pl-4 rounded-lg hover:bg-white/5 transition-colors">
                      <div className="font-medium text-gray-900 text-sm">DCF Analysis</div>
                      <div className="text-xs text-gray-600">Training the Street • 2024</div>
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
                      ? 'text-primary font-semibold bg-primary/10' 
                      : 'text-foreground/90 hover:text-foreground hover:bg-white/5'
                  }`}
                >
                  Community
                  <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                </button>
                
                <div className="dropdown-glass absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-72 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-2">
                    <button onClick={() => scrollToSection('#community-united-way')} className="w-full text-left block p-4 rounded-lg hover:bg-white/5 transition-colors">
                      <div className="font-semibold text-gray-900 text-base">United Way</div>
                      <div className="text-sm text-gray-600">Leadership & Financial Literacy</div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Contact */}
              {isHomePage && (
                <div className="relative group">
                  <button
                    onClick={() => scrollToSection('#contact')}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-1 ${
                      currentSection === 'contact' 
                        ? 'text-primary font-semibold bg-primary/10' 
                        : 'text-foreground/90 hover:text-foreground hover:bg-white/5'
                    }`}
                  >
                    Contact
                    <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                  </button>
                  
                  <div className="dropdown-glass absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-72 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="p-2">
                      <button onClick={() => scrollToSection('#contact')} className="w-full text-left block p-4 rounded-lg hover:bg-white/5 transition-colors">
                        <div className="font-semibold text-gray-900 text-base">Email</div>
                        <div className="text-sm text-gray-600">tbustard@unb.ca</div>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Download Button */}
              {isHomePage && (
                <button
                  onClick={() => scrollToSection('#download')}
                  className="px-4 py-2 text-sm font-medium rounded-lg bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary/30 text-primary transition-all duration-200 ml-2"
                >
                  Download
                </button>
              )}
            </div>

            {/* Right side - Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-foreground hover:bg-white/10"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mobile-glass border-t border-white/10">
            <div className="px-6 py-4 space-y-2">
              {isHomePage && (
                <>
                  <button
                    onClick={() => scrollToSection('#education')}
                    className="block w-full text-left px-4 py-3 rounded-lg text-foreground hover:text-primary hover:bg-white/10 transition-all duration-200"
                  >
                    Education
                  </button>
                  <button
                    onClick={() => scrollToSection('#experience')}
                    className="block w-full text-left px-4 py-3 rounded-lg text-foreground hover:text-primary hover:bg-white/10 transition-all duration-200"
                  >
                    Experience
                  </button>
                  <button
                    onClick={() => scrollToSection('#certifications')}
                    className="block w-full text-left px-4 py-3 rounded-lg text-foreground hover:text-primary hover:bg-white/10 transition-all duration-200"
                  >
                    Certifications
                  </button>
                  <button
                    onClick={() => scrollToSection('#community')}
                    className="block w-full text-left px-4 py-3 rounded-lg text-foreground hover:text-primary hover:bg-white/10 transition-all duration-200"
                  >
                    Community
                  </button>
                  <button
                    onClick={() => scrollToSection('#contact')}
                    className="block w-full text-left px-4 py-3 rounded-lg text-foreground hover:text-primary hover:bg-white/10 transition-all duration-200"
                  >
                    Contact
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}