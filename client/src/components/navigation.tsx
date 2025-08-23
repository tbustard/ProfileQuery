import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import profileImage from "@assets/Untitled design (1)_1755896187722.png";

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState('');

  const isHomePage = location === '/';

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
    if (!isHomePage) return;

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
  }, [isHomePage]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
            {/* Logo/Home - Conditional based on page */}
            <div className="flex items-center">
              {/* Homepage: Show Tyler Bustard + image when scrolled */}
              {isHomePage && (
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
                      className="w-9 h-9 rounded-xl object-cover ring-1 ring-white/20 shadow-sm transition-all duration-300 hover:ring-white/40 hover:scale-110"
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
                    {/* Section indicator - positioned under the name */}
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
            
            {/* Desktop Navigation with Apple.com-style Dropdowns */}
            <div className="hidden md:flex items-center space-x-2">
              {/* Education Dropdown */}
              <div className="relative group">
                <button
                  onClick={isHomePage ? () => scrollToSection('#education') : undefined}
                  className="px-3 py-2 text-sm font-medium text-foreground/90 hover:text-foreground rounded-lg hover:bg-white/5 transition-all duration-200 flex items-center gap-1"
                  data-testid="nav-education"
                >
                  Education
                  <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                </button>
                
                {/* Apple-style Dropdown */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-80 bg-white/95 backdrop-blur-xl border border-gray-200/50 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-2">
                    <button 
                      onClick={() => scrollToSection('#education')}
                      className="w-full text-left block p-4 rounded-lg hover:bg-gray-50/50 transition-colors"
                    >
                      <div className="font-semibold text-gray-900 text-base mb-1">University of New Brunswick</div>
                      <div className="text-sm text-gray-600">Bachelor of Business Administration • Fredericton, NB (2016-2020)</div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Experience Dropdown */}
              <div className="relative group">
                <button
                  onClick={isHomePage ? () => scrollToSection('#experience') : undefined}
                  className="px-3 py-2 text-sm font-medium text-foreground/90 hover:text-foreground rounded-lg hover:bg-white/5 transition-all duration-200 flex items-center gap-1"
                  data-testid="nav-experience"
                >
                  Experience
                  <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                </button>
                
                {/* Apple-style Dropdown */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-96 bg-white/95 backdrop-blur-xl border border-gray-200/50 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-2 max-h-80 overflow-y-auto">
                    {/* Individual Experience Items */}
                    <button 
                      onClick={() => scrollToSection('#experience')}
                      className="w-full text-left block p-4 rounded-lg hover:bg-gray-50/50 transition-colors border-b border-gray-100/50"
                    >
                      <div className="font-semibold text-gray-900 text-base mb-1">BMO Private Wealth</div>
                      <div className="text-sm text-gray-600">Portfolio Assistant • Toronto, ON (2022-2023)</div>
                    </button>
                    
                    <button 
                      onClick={() => scrollToSection('#experience')}
                      className="w-full text-left block p-4 rounded-lg hover:bg-gray-50/50 transition-colors border-b border-gray-100/50"
                    >
                      <div className="font-semibold text-gray-900 text-base mb-1">TD Canada Trust</div>
                      <div className="text-sm text-gray-600">Financial Advisor • Kingston, ON (2021-2022)</div>
                    </button>
                    
                    <button 
                      onClick={() => scrollToSection('#experience')}
                      className="w-full text-left block p-4 rounded-lg hover:bg-gray-50/50 transition-colors border-b border-gray-100/50"
                    >
                      <div className="font-semibold text-gray-900 text-base mb-1">RBC Banking Advisor</div>
                      <div className="text-sm text-gray-600">Banking Advisor • Kingston, ON (2020-2021)</div>
                    </button>
                    
                    <button 
                      onClick={() => scrollToSection('#experience')}
                      className="w-full text-left block p-4 rounded-lg hover:bg-gray-50/50 transition-colors border-b border-gray-100/50"
                    >
                      <div className="font-semibold text-gray-900 text-base mb-1">RBC Client Advisor</div>
                      <div className="text-sm text-gray-600">Client Advisor Intern • Fredericton, NB (2019-2020)</div>
                    </button>
                    
                    <button 
                      onClick={() => scrollToSection('#experience')}
                      className="w-full text-left block p-4 rounded-lg hover:bg-gray-50/50 transition-colors border-b border-gray-100/50"
                    >
                      <div className="font-semibold text-gray-900 text-base mb-1">Irving Oil Limited</div>
                      <div className="text-sm text-gray-600">Marketing Intern • Saint John, NB (2018)</div>
                    </button>
                    
                    <button 
                      onClick={() => scrollToSection('#experience')}
                      className="w-full text-left block p-4 rounded-lg hover:bg-gray-50/50 transition-colors"
                    >
                      <div className="font-semibold text-gray-900 text-base mb-1">Grant Thornton LLP</div>
                      <div className="text-sm text-gray-600">Tax Return Intern • Saint John, NB (2018)</div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Certifications Dropdown */}
              <div className="relative group">
                <button
                  onClick={isHomePage ? () => scrollToSection('#certifications') : undefined}
                  className="px-3 py-2 text-sm font-medium text-foreground/90 hover:text-foreground rounded-lg hover:bg-white/5 transition-all duration-200 flex items-center gap-1"
                  data-testid="nav-certifications"
                >
                  Certifications
                  <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                </button>
                
                {/* Apple-style Dropdown */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-72 bg-white/95 backdrop-blur-xl border border-gray-200/50 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-2 max-h-80 overflow-y-auto">
                    {/* Financial Excellence Category */}
                    <div className="font-semibold text-gray-900 text-base p-3 border-b border-gray-200/70 bg-gray-50/30">Financial Excellence</div>
                    <button onClick={() => scrollToSection('#certifications')} className="w-full text-left block p-2 pl-6 rounded-lg hover:bg-gray-50/50 transition-colors">
                      <div className="text-sm text-gray-700">CFA Level I Candidate</div>
                    </button>
                    <button onClick={() => scrollToSection('#certifications')} className="w-full text-left block p-2 pl-6 rounded-lg hover:bg-gray-50/50 transition-colors">
                      <div className="text-sm text-gray-700">Discounted Cash Flow Analysis</div>
                    </button>
                    <button onClick={() => scrollToSection('#certifications')} className="w-full text-left block p-2 pl-6 rounded-lg hover:bg-gray-50/50 transition-colors">
                      <div className="text-sm text-gray-700">Financial Planning 1</div>
                    </button>
                    <button onClick={() => scrollToSection('#certifications')} className="w-full text-left block p-2 pl-6 rounded-lg hover:bg-gray-50/50 transition-colors">
                      <div className="text-sm text-gray-700">Certificate in Financial Services Advice</div>
                    </button>
                    <button onClick={() => scrollToSection('#certifications')} className="w-full text-left block p-2 pl-6 rounded-lg hover:bg-gray-50/50 transition-colors">
                      <div className="text-sm text-gray-700">Canadian Securities Course</div>
                    </button>
                    <button onClick={() => scrollToSection('#certifications')} className="w-full text-left block p-2 pl-6 rounded-lg hover:bg-gray-50/50 transition-colors">
                      <div className="text-sm text-gray-700">Financial & Valuation Modeling</div>
                    </button>
                    <button onClick={() => scrollToSection('#certifications')} className="w-full text-left block p-2 pl-6 rounded-lg hover:bg-gray-50/50 transition-colors">
                      <div className="text-sm text-gray-700">Bloomberg Market Concepts Certificate</div>
                    </button>
                    
                    {/* Data & Technology Category */}
                    <div className="font-semibold text-gray-900 text-base p-3 border-b border-gray-200/70 bg-gray-50/30 mt-3">Data & Technology</div>
                    <button onClick={() => scrollToSection('#certifications')} className="w-full text-left block p-2 pl-6 rounded-lg hover:bg-gray-50/50 transition-colors">
                      <div className="text-sm text-gray-700">Data Analytics Professional</div>
                    </button>
                    <button onClick={() => scrollToSection('#certifications')} className="w-full text-left block p-2 pl-6 rounded-lg hover:bg-gray-50/50 transition-colors">
                      <div className="text-sm text-gray-700">Data Visualization with Tableau</div>
                    </button>
                    <button onClick={() => scrollToSection('#certifications')} className="w-full text-left block p-2 pl-6 rounded-lg hover:bg-gray-50/50 transition-colors">
                      <div className="text-sm text-gray-700">Python for Everybody</div>
                    </button>
                    <button onClick={() => scrollToSection('#certifications')} className="w-full text-left block p-2 pl-6 rounded-lg hover:bg-gray-50/50 transition-colors">
                      <div className="text-sm text-gray-700">Machine Learning</div>
                    </button>
                    <button onClick={() => scrollToSection('#certifications')} className="w-full text-left block p-2 pl-6 rounded-lg hover:bg-gray-50/50 transition-colors">
                      <div className="text-sm text-gray-700">SQL for Data Science</div>
                    </button>
                    
                    {/* Advanced Analytics Category */}
                    <div className="font-semibold text-gray-900 text-base p-3 border-b border-gray-200/70 bg-gray-50/30 mt-3">Advanced Analytics</div>
                    <button onClick={() => scrollToSection('#certifications')} className="w-full text-left block p-2 pl-6 rounded-lg hover:bg-gray-50/50 transition-colors">
                      <div className="text-sm text-gray-700">Econometrics: Methods & Applications</div>
                    </button>
                    <button onClick={() => scrollToSection('#certifications')} className="w-full text-left block p-2 pl-6 rounded-lg hover:bg-gray-50/50 transition-colors">
                      <div className="text-sm text-gray-700">Matrix Algebra for Engineers</div>
                    </button>
                    <button onClick={() => scrollToSection('#certifications')} className="w-full text-left block p-2 pl-6 rounded-lg hover:bg-gray-50/50 transition-colors">
                      <div className="text-sm text-gray-700">Introduction to Calculus</div>
                    </button>
                    <button onClick={() => scrollToSection('#certifications')} className="w-full text-left block p-2 pl-6 rounded-lg hover:bg-gray-50/50 transition-colors">
                      <div className="text-sm text-gray-700">Inferential Statistics</div>
                    </button>
                    
                    {/* Academic Achievement Category */}
                    <div className="font-semibold text-gray-900 text-base p-3 border-b border-gray-200/70 bg-gray-50/30 mt-3">Academic Achievement</div>
                    <button onClick={() => scrollToSection('#certifications')} className="w-full text-left block p-2 pl-6 rounded-lg hover:bg-gray-50/50 transition-colors">
                      <div className="text-sm text-gray-700">GRE General Test</div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Community Dropdown */}
              <div className="relative group">
                <button
                  onClick={isHomePage ? () => scrollToSection('#community') : undefined}
                  className="px-3 py-2 text-sm font-medium text-foreground/90 hover:text-foreground rounded-lg hover:bg-white/5 transition-all duration-200 flex items-center gap-1"
                  data-testid="nav-community"
                >
                  Community
                  <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                </button>
                
                {/* Apple-style Dropdown */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-72 bg-white/95 backdrop-blur-xl border border-gray-200/50 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-2">
                    <button 
                      onClick={() => scrollToSection('#community')}
                      className="w-full text-left block p-4 rounded-lg hover:bg-gray-50/50 transition-colors"
                    >
                      <div className="font-semibold text-gray-900 text-base mb-1">Community Engagement</div>
                      <div className="text-sm text-gray-600">Leadership & volunteer service across multiple organizations</div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Contact - Only on home page */}
              {isHomePage && (
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="px-3 py-2 text-sm font-medium text-foreground/90 hover:text-foreground rounded-lg hover:bg-white/5 transition-all duration-200"
                  data-testid="nav-contact"
                >
                  Contact
                </button>
              )}
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
          
          {/* Mobile Navigation */}
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
                {isHomePage ? (
                  <>
                    <button
                      onClick={() => scrollToSection('#education')}
                      className="text-foreground hover:text-primary hover:bg-white/15 block px-4 py-3 rounded-xl text-base font-medium w-full text-left transition-all duration-300 hover:scale-105 hover:translate-x-2"
                      data-testid="nav-mobile-education"
                    >
                      Education
                    </button>
                    <button
                      onClick={() => scrollToSection('#experience')}
                      className="text-foreground hover:text-primary hover:bg-white/15 block px-4 py-3 rounded-xl text-base font-medium w-full text-left transition-all duration-300 hover:scale-105 hover:translate-x-2"
                      data-testid="nav-mobile-experience"
                    >
                      Experience
                    </button>
                    <button
                      onClick={() => scrollToSection('#certifications')}
                      className="text-foreground hover:text-primary hover:bg-white/15 block px-4 py-3 rounded-xl text-base font-medium w-full text-left transition-all duration-300 hover:scale-105 hover:translate-x-2"
                      data-testid="nav-mobile-certifications"
                    >
                      Certifications
                    </button>
                    <button
                      onClick={() => scrollToSection('#community')}
                      className="text-foreground hover:text-primary hover:bg-white/15 block px-4 py-3 rounded-xl text-base font-medium w-full text-left transition-all duration-300 hover:scale-105 hover:translate-x-2"
                      data-testid="nav-mobile-community"
                    >
                      Community
                    </button>
                    <button
                      onClick={() => scrollToSection('#contact')}
                      className="text-foreground hover:text-primary hover:bg-white/15 block px-4 py-3 rounded-xl text-base font-medium w-full text-left transition-all duration-300 hover:scale-105 hover:translate-x-2"
                      data-testid="nav-mobile-contact"
                    >
                      Contact
                    </button>
                  </>
                ) : null}
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