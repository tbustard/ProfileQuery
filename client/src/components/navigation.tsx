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
      const navHeight = 120; // Navigation bar height + extra spacing
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
      {/* SVG Filter for Liquid Glass Distortion */}
      <svg style={{ display: 'none' }}>
        <filter id="liquid-glass-distortion" x="0%" y="0%" width="100%" height="100%" filterUnits="objectBoundingBox">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.008 0.008" 
            numOctaves="1" 
            seed="5" 
            result="turbulence"
          >
            <animate 
              attributeName="seed" 
              from="1" 
              to="100" 
              dur="12s" 
              repeatCount="indefinite"
            />
          </feTurbulence>
          
          <feComponentTransfer in="turbulence" result="mapped">
            <feFuncR type="gamma" amplitude="1" exponent="8" offset="0.5"/>
            <feFuncG type="gamma" amplitude="0" exponent="1" offset="0"/>
            <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5"/>
            <feFuncA type="discrete" tableValues="1"/>
          </feComponentTransfer>
          
          <feGaussianBlur in="mapped" stdDeviation="2" result="softNoise"/>
          
          <feDisplacementMap 
            in="SourceGraphic" 
            in2="softNoise" 
            scale="8" 
            xChannelSelector="R" 
            yChannelSelector="B"
          />
        </filter>
      </svg>

      {/* Apple Liquid Glass Navigation Bar */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-700 ease-out ${
          isScrolled ? 'liquid-glass-active' : 'bg-transparent'
        }`}
        style={{
          isolation: 'isolate',
        }}
      >
        {/* Liquid Glass Distortion Layer */}
        {isScrolled && (
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              backdropFilter: 'blur(3px)',
              WebkitBackdropFilter: 'blur(3px)',
              filter: 'url(#liquid-glass-distortion)',
              zIndex: 1,
            }}
          />
        )}
        
        {/* Tint Layer */}
        {isScrolled && (
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 100%)',
              zIndex: 2,
            }}
          />
        )}
        
        {/* Specular Highlights */}
        {isScrolled && (
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 0%, transparent 30%, transparent 70%, rgba(255, 255, 255, 0.2) 100%)',
              boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.3), inset 0 -1px 0 rgba(0, 0, 0, 0.05)',
              zIndex: 3,
            }}
          />
        )}
        
        {/* Border */}
        {isScrolled && (
          <div 
            className="absolute bottom-0 left-0 right-0 h-px bg-white/20 pointer-events-none"
            style={{ zIndex: 4 }}
          />
        )}
        <div className="container-width relative" style={{ zIndex: 10 }}>
          <div className="flex justify-between items-center py-5 w-full">
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
                    <span className="text-lg font-bold text-foreground transition-all duration-700 ease-out" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
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
            <div className="hidden md:flex items-center space-x-2 relative">
              {/* Experience Dropdown */}
              <div className="relative group">
                <button
                  onClick={isHomePage ? () => scrollToSection('#experience') : undefined}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-1 ${
                    currentSection === 'experience'
                      ? 'text-foreground bg-white/20 backdrop-blur-sm border border-white/30 shadow-sm'
                      : 'text-foreground/90 hover:text-foreground hover:bg-white/10 backdrop-blur-sm'
                  }`}
                  data-testid="nav-experience"
                  style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
                >
                  Experience
                  <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                </button>
                
                {/* Apple-style Dropdown */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-96 bg-white/95 backdrop-blur-xl border border-gray-200/50 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-2 max-h-80 overflow-y-auto">
                    {/* Individual Experience Items */}
                    <button 
                      onClick={() => scrollToSection('#experience-bmo-private-wealth-portfolio-assistant')}
                      className="w-full text-left block p-4 rounded-lg hover: transition-colors border-b border-gray-200"
                    >
                      <div className="font-semibold text-gray-900 text-base mb-1">BMO Private Wealth</div>
                      <div className="text-sm text-gray-600">Portfolio Assistant • Toronto, ON (2022-2023)</div>
                    </button>
                    
                    <button 
                      onClick={() => scrollToSection('#experience-td-canada-trust-financial-advisor')}
                      className="w-full text-left block p-4 rounded-lg hover: transition-colors border-b border-gray-200"
                    >
                      <div className="font-semibold text-gray-900 text-base mb-1">TD Canada Trust</div>
                      <div className="text-sm text-gray-600">Financial Advisor • Kingston, ON (2021-2022)</div>
                    </button>
                    
                    <button 
                      onClick={() => scrollToSection('#experience-royal-bank-of-canada-banking-advisor')}
                      className="w-full text-left block p-4 rounded-lg hover: transition-colors border-b border-gray-200"
                    >
                      <div className="font-semibold text-gray-900 text-base mb-1">Royal Bank of Canada</div>
                      <div className="text-sm text-gray-600">Banking Advisor • Kingston, ON (2020-2021)</div>
                    </button>
                    
                    <button 
                      onClick={() => scrollToSection('#experience-royal-bank-of-canada-client-advisor-intern')}
                      className="w-full text-left block p-4 rounded-lg hover: transition-colors border-b border-gray-200"
                    >
                      <div className="font-semibold text-gray-900 text-base mb-1">Royal Bank of Canada</div>
                      <div className="text-sm text-gray-600">Client Advisor Intern • Fredericton, NB (2019-2020)</div>
                    </button>
                    
                    <button 
                      onClick={() => scrollToSection('#experience-irving-oil-limited-marketing-intern')}
                      className="w-full text-left block p-4 rounded-lg hover: transition-colors border-b border-gray-200"
                    >
                      <div className="font-semibold text-gray-900 text-base mb-1">Irving Oil Limited</div>
                      <div className="text-sm text-gray-600">Marketing Intern • Saint John, NB (2018)</div>
                    </button>
                    
                    <button 
                      onClick={() => scrollToSection('#experience-grant-thornton-llp-tax-return-intern')}
                      className="w-full text-left block p-4 rounded-lg hover: transition-colors"
                    >
                      <div className="font-semibold text-gray-900 text-base mb-1">Grant Thornton LLP</div>
                      <div className="text-sm text-gray-600">Tax Return Intern • Saint John, NB (2018)</div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Education Dropdown */}
              <div className="relative group">
                <button
                  onClick={isHomePage ? () => scrollToSection('#education') : undefined}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-1 ${
                    currentSection === 'education'
                      ? 'text-foreground bg-white/20 backdrop-blur-sm border border-white/30 shadow-sm'
                      : 'text-foreground/90 hover:text-foreground hover:bg-white/10 backdrop-blur-sm'
                  }`}
                  data-testid="nav-education"
                  style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
                >
                  Education
                  <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                </button>
                
                {/* Liquid Glass Dropdown */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-80 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 liquid-glass-dropdown">
                  <div className="p-2">
                    <button 
                      onClick={() => scrollToSection('#education')}
                      className="w-full text-left block p-4 rounded-lg hover: transition-colors"
                    >
                      <div className="font-semibold text-gray-900 text-base mb-1">University of New Brunswick</div>
                      <div className="text-sm text-gray-600">Bachelor of Business Administration • Fredericton, NB (2016-2020)</div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Certifications Dropdown */}
              <div className="relative group">
                <button
                  onClick={isHomePage ? () => scrollToSection('#certifications') : undefined}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-1 ${
                    currentSection === 'certifications'
                      ? 'text-foreground bg-white/20 backdrop-blur-sm border border-white/30 shadow-sm'
                      : 'text-foreground/90 hover:text-foreground hover:bg-white/10 backdrop-blur-sm'
                  }`}
                  data-testid="nav-certifications"
                  style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
                >
                  Certifications
                  <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                </button>
                
                {/* Liquid Glass Dropdown */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-72 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 liquid-glass-dropdown">
                  <div className="p-2 max-h-80 overflow-y-auto">
                    {/* Financial Excellence Certifications */}
                    <div className="font-semibold text-gray-900 text-base p-3 border-b border-gray-200/70 bg-gray-50/30 hover: transition-colors w-full text-left rounded-lg mb-2">Financial Excellence</div>
                    <button onClick={() => scrollToSection('#cert-cfa-level-i-candidate')} className="w-full text-left block p-3 pl-4 rounded-lg hover: transition-colors border-b border-gray-200">
                      <div className="font-medium text-gray-900 text-sm mb-1">CFA Level I Candidate</div>
                      <div className="text-xs text-gray-600">CFA Institute • 2025</div>
                    </button>
                    <button onClick={() => scrollToSection('#cert-discounted-cash-flow-analysis')} className="w-full text-left block p-3 pl-4 rounded-lg hover: transition-colors border-b border-gray-200">
                      <div className="font-medium text-gray-900 text-sm mb-1">Discounted Cash Flow Analysis</div>
                      <div className="text-xs text-gray-600">Training the Street • 2024</div>
                    </button>
                    <button onClick={() => scrollToSection('#cert-financial-planning-1')} className="w-full text-left block p-3 pl-4 rounded-lg hover: transition-colors border-b border-gray-200">
                      <div className="font-medium text-gray-900 text-sm mb-1">Financial Planning 1</div>
                      <div className="text-xs text-gray-600">Canadian Securities Institute • 2023</div>
                    </button>
                    <button onClick={() => scrollToSection('#cert-certificate-in-financial-services-advice')} className="w-full text-left block p-3 pl-4 rounded-lg hover: transition-colors border-b border-gray-200">
                      <div className="font-medium text-gray-900 text-sm mb-1">Certificate in Financial Services Advice</div>
                      <div className="text-xs text-gray-600">Canadian Securities Institute • 2022</div>
                    </button>
                    <button onClick={() => scrollToSection('#cert-personal-financial-service-advice')} className="w-full text-left block p-3 pl-4 rounded-lg hover: transition-colors border-b border-gray-200">
                      <div className="font-medium text-gray-900 text-sm mb-1">Personal Financial Service Advice</div>
                      <div className="text-xs text-gray-600">Canadian Securities Institute • 2021</div>
                    </button>
                    <button onClick={() => scrollToSection('#cert-canadian-securities-course')} className="w-full text-left block p-3 pl-4 rounded-lg hover: transition-colors border-b border-gray-200">
                      <div className="font-medium text-gray-900 text-sm mb-1">Canadian Securities Course</div>
                      <div className="text-xs text-gray-600">Canadian Securities Institute • 2021</div>
                    </button>
                    <button onClick={() => scrollToSection('#cert-financial---valuation-modeling')} className="w-full text-left block p-3 pl-4 rounded-lg hover: transition-colors border-b border-gray-200">
                      <div className="font-medium text-gray-900 text-sm mb-1">Financial & Valuation Modeling</div>
                      <div className="text-xs text-gray-600">Wall Street Prep • 2020</div>
                    </button>
                    <button onClick={() => scrollToSection('#cert-investment-funds-in-canada')} className="w-full text-left block p-3 pl-4 rounded-lg hover: transition-colors border-b border-gray-200">
                      <div className="font-medium text-gray-900 text-sm mb-1">Investment Funds in Canada</div>
                      <div className="text-xs text-gray-600">Canadian Securities Institute • 2020</div>
                    </button>
                    <button onClick={() => scrollToSection('#cert-bloomberg-market-concepts-certificate')} className="w-full text-left block p-3 pl-4 rounded-lg hover: transition-colors border-b border-gray-200">
                      <div className="font-medium text-gray-900 text-sm mb-1">Bloomberg Market Concepts Certificate</div>
                      <div className="text-xs text-gray-600">Bloomberg • 2020</div>
                    </button>
                    <button onClick={() => scrollToSection('#cert-personal-finance-essentials')} className="w-full text-left block p-3 pl-4 rounded-lg hover: transition-colors border-b border-gray-200">
                      <div className="font-medium text-gray-900 text-sm mb-1">Personal Finance Essentials</div>
                      <div className="text-xs text-gray-600">McGill University • 2020</div>
                    </button>
                    
                    {/* Data & Technology Certifications */}
                    <div className="font-semibold text-gray-900 text-base p-3 border-b border-gray-200/70 bg-gray-50/30 hover: transition-colors w-full text-left rounded-lg mb-2 mt-3">Data & Technology</div>
                    <button onClick={() => scrollToSection('#cert-data-analytics-professional')} className="w-full text-left block p-3 pl-4 rounded-lg hover: transition-colors border-b border-gray-200">
                      <div className="font-medium text-gray-900 text-sm mb-1">Data Analytics Professional</div>
                      <div className="text-xs text-gray-600">Google • 2023</div>
                    </button>
                    <button onClick={() => scrollToSection('#cert-data-visualization-with-tableau')} className="w-full text-left block p-3 pl-4 rounded-lg hover: transition-colors border-b border-gray-200">
                      <div className="font-medium text-gray-900 text-sm mb-1">Data Visualization with Tableau</div>
                      <div className="text-xs text-gray-600">UC Davis • 2023</div>
                    </button>
                    <button onClick={() => scrollToSection('#cert-python-for-everybody')} className="w-full text-left block p-3 pl-4 rounded-lg hover: transition-colors border-b border-gray-200">
                      <div className="font-medium text-gray-900 text-sm mb-1">Python for Everybody</div>
                      <div className="text-xs text-gray-600">University of Michigan • 2023</div>
                    </button>
                    <button onClick={() => scrollToSection('#cert-machine-learning')} className="w-full text-left block p-3 pl-4 rounded-lg hover: transition-colors border-b border-gray-200">
                      <div className="font-medium text-gray-900 text-sm mb-1">Machine Learning</div>
                      <div className="text-xs text-gray-600">Stanford University • 2020</div>
                    </button>
                    <button onClick={() => scrollToSection('#cert-sql-for-data-science')} className="w-full text-left block p-3 pl-4 rounded-lg hover: transition-colors border-b border-gray-200">
                      <div className="font-medium text-gray-900 text-sm mb-1">SQL for Data Science</div>
                      <div className="text-xs text-gray-600">UC Davis • 2020</div>
                    </button>
                    <button onClick={() => scrollToSection('#cert-power-bi-data-visualization')} className="w-full text-left block p-3 pl-4 rounded-lg hover: transition-colors border-b border-gray-200">
                      <div className="font-medium text-gray-900 text-sm mb-1">Power BI Data Visualization</div>
                      <div className="text-xs text-gray-600">Microsoft • 2020</div>
                    </button>
                    
                    {/* Advanced Analytics Certifications */}
                    <div className="font-semibold text-gray-900 text-base p-3 border-b border-gray-200/70 bg-gray-50/30 hover: transition-colors w-full text-left rounded-lg mb-2 mt-3">Advanced Analytics</div>
                    <button onClick={() => scrollToSection('#cert-econometrics--methods---applications')} className="w-full text-left block p-3 pl-4 rounded-lg hover: transition-colors border-b border-gray-200">
                      <div className="font-medium text-gray-900 text-sm mb-1">Econometrics: Methods & Applications</div>
                      <div className="text-xs text-gray-600">Erasmus University • 2024</div>
                    </button>
                    <button onClick={() => scrollToSection('#cert-matrix-algebra-for-engineers')} className="w-full text-left block p-3 pl-4 rounded-lg hover: transition-colors border-b border-gray-200">
                      <div className="font-medium text-gray-900 text-sm mb-1">Matrix Algebra for Engineers</div>
                      <div className="text-xs text-gray-600">HKUST • 2024</div>
                    </button>
                    <button onClick={() => scrollToSection('#cert-introduction-to-calculus')} className="w-full text-left block p-3 pl-4 rounded-lg hover: transition-colors border-b border-gray-200">
                      <div className="font-medium text-gray-900 text-sm mb-1">Introduction to Calculus</div>
                      <div className="text-xs text-gray-600">University of Sydney • 2023</div>
                    </button>
                    <button onClick={() => scrollToSection('#cert-inferential-statistics')} className="w-full text-left block p-3 pl-4 rounded-lg hover: transition-colors border-b border-gray-200">
                      <div className="font-medium text-gray-900 text-sm mb-1">Inferential Statistics</div>
                      <div className="text-xs text-gray-600">Duke University • 2020</div>
                    </button>
                    <button onClick={() => scrollToSection('#cert-excel-skills-for-business')} className="w-full text-left block p-3 pl-4 rounded-lg hover: transition-colors border-b border-gray-200">
                      <div className="font-medium text-gray-900 text-sm mb-1">Excel Skills for Business</div>
                      <div className="text-xs text-gray-600">Macquarie University • 2020</div>
                    </button>
                    
                    {/* Academic Achievement Certifications */}
                    <div className="font-semibold text-gray-900 text-base p-3 border-b border-gray-200/70 bg-gray-50/30 hover: transition-colors w-full text-left rounded-lg mb-2 mt-3">Academic Achievement</div>
                    <button onClick={() => scrollToSection('#cert-gre-general-test')} className="w-full text-left block p-3 pl-4 rounded-lg hover: transition-colors">
                      <div className="font-medium text-gray-900 text-sm mb-1">GRE General Test</div>
                      <div className="text-xs text-gray-600">ETS • 2024</div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Community Dropdown */}
              <div className="relative group">
                <button
                  onClick={isHomePage ? () => scrollToSection('#community') : undefined}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-1 ${
                    currentSection === 'community'
                      ? 'text-foreground bg-white/20 backdrop-blur-sm border border-white/30 shadow-sm'
                      : 'text-foreground/90 hover:text-foreground hover:bg-white/10 backdrop-blur-sm'
                  }`}
                  data-testid="nav-community"
                  style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
                >
                  Community
                  <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                </button>
                
                {/* Liquid Glass Dropdown */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-72 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 liquid-glass-dropdown">
                  <div className="p-2 max-h-80 overflow-y-auto">
                    <button 
                      onClick={() => scrollToSection('#community-united-way')}
                      className="w-full text-left block p-4 rounded-lg hover: transition-colors border-b border-gray-200"
                    >
                      <div className="font-semibold text-gray-900 text-base mb-1">United Way</div>
                      <div className="text-sm text-gray-600">Next Gen Ambassador • Kingston, ON (2020-2023)</div>
                    </button>
                    
                    <button 
                      onClick={() => scrollToSection('#community-royal-bank-of-canada')}
                      className="w-full text-left block p-4 rounded-lg hover: transition-colors border-b border-gray-200"
                    >
                      <div className="font-semibold text-gray-900 text-base mb-1">Royal Bank of Canada</div>
                      <div className="text-sm text-gray-600">Student Ambassador • Fredericton, NB (2019-2020)</div>
                    </button>
                    
                    <button 
                      onClick={() => scrollToSection('#community-irving-oil-limited')}
                      className="w-full text-left block p-4 rounded-lg hover: transition-colors"
                    >
                      <div className="font-semibold text-gray-900 text-base mb-1">Irving Oil Limited</div>
                      <div className="text-sm text-gray-600">Volunteer Staff • Saint John, NB (2018)</div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Contact Dropdown - Only on home page */}
              {isHomePage && (
                <div className="relative group">
                  <button
                    onClick={() => scrollToSection('#contact')}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-1 ${
                      currentSection === 'contact'
                        ? 'text-foreground bg-white/20 backdrop-blur-sm border border-white/30 shadow-sm'
                        : 'text-foreground/90 hover:text-foreground hover:bg-white/10 backdrop-blur-sm'
                    }`}
                    data-testid="nav-contact"
                    style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
                  >
                    Contact
                    <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                  </button>
                  
                  {/* Liquid Glass Dropdown */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-72 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 liquid-glass-dropdown">
                    <div className="p-2">
                      <button 
                        onClick={() => scrollToSection('#contact-email')}
                        className="w-full text-left block p-4 rounded-lg hover: transition-colors border-b border-gray-200"
                      >
                        <div className="font-semibold text-gray-900 text-base mb-1">Email</div>
                        <div className="text-sm text-gray-600">tbustard@unb.ca</div>
                      </button>
                      
                      <button 
                        onClick={() => scrollToSection('#contact-phone')}
                        className="w-full text-left block p-4 rounded-lg hover: transition-colors border-b border-gray-200"
                      >
                        <div className="font-semibold text-gray-900 text-base mb-1">Phone</div>
                        <div className="text-sm text-gray-600">(613) 985-1223</div>
                      </button>
                      
                      <button 
                        onClick={() => scrollToSection('#contact-location')}
                        className="w-full text-left block p-4 rounded-lg hover: transition-colors"
                      >
                        <div className="font-semibold text-gray-900 text-base mb-1">Location</div>
                        <div className="text-sm text-gray-600">Toronto, Ontario, Canada</div>
                      </button>
                    </div>
                  </div>
                </div>
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
                      onClick={() => scrollToSection('#experience')}
                      className="text-foreground hover:text-primary hover:bg-white/15 block px-4 py-3 rounded-xl text-base font-medium w-full text-left transition-all duration-300 hover:scale-105 hover:translate-x-2"
                      data-testid="nav-mobile-experience"
                    >
                      Experience
                    </button>
                    <button
                      onClick={() => scrollToSection('#education')}
                      className="text-foreground hover:text-primary hover:bg-white/15 block px-4 py-3 rounded-xl text-base font-medium w-full text-left transition-all duration-300 hover:scale-105 hover:translate-x-2"
                      data-testid="nav-mobile-education"
                    >
                      Education
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