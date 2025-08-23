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
                  <div className="relative">
                    <span className="text-lg font-bold text-foreground">Tyler Bustard</span>
                    {/* Blue underline like main page */}
                    <div className="absolute -bottom-1 left-0 w-16 h-1 bg-primary rounded-full" />
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
                    <button onClick={() => scrollToSection('#experience-royal-bank-of-canada-client-advisor-intern')} className="w-full text-left block p-4 rounded-lg hover:bg-white/5 transition-colors border-b border-gray-200/20">
                      <div className="font-semibold text-gray-900 text-base mb-1">RBC Client Advisor Intern</div>
                      <div className="text-sm text-gray-600">Fredericton, NB (2019-2020)</div>
                    </button>
                    <button onClick={() => scrollToSection('#experience-irving-oil-limited-marketing-intern')} className="w-full text-left block p-4 rounded-lg hover:bg-white/5 transition-colors border-b border-gray-200/20">
                      <div className="font-semibold text-gray-900 text-base mb-1">Irving Oil Limited</div>
                      <div className="text-sm text-gray-600">Marketing Intern • Saint John, NB (2018)</div>
                    </button>
                    <button onClick={() => scrollToSection('#experience-grant-thornton-llp-tax-return-intern')} className="w-full text-left block p-4 rounded-lg hover:bg-white/5 transition-colors">
                      <div className="font-semibold text-gray-900 text-base mb-1">Grant Thornton LLP</div>
                      <div className="text-sm text-gray-600">Tax Return Intern • Saint John, NB (2018)</div>
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
                
                <div className="dropdown-glass absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 max-h-96 overflow-y-auto rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-2">
                    {/* Financial Excellence */}
                    <div className="font-semibold text-gray-900 text-base p-3 bg-blue-50/50 rounded-lg mb-2">Financial Excellence</div>
                    <button onClick={() => scrollToSection('#cert-cfa-level-i-candidate')} className="w-full text-left block p-2 pl-4 rounded-lg hover:bg-white/5 transition-colors">
                      <div className="font-medium text-gray-900 text-sm">CFA Level I Candidate</div>
                      <div className="text-xs text-gray-600">CFA Institute • 2025</div>
                    </button>
                    <button onClick={() => scrollToSection('#cert-discounted-cash-flow-analysis')} className="w-full text-left block p-2 pl-4 rounded-lg hover:bg-white/5 transition-colors">
                      <div className="font-medium text-gray-900 text-sm">DCF Analysis</div>
                      <div className="text-xs text-gray-600">Training the Street • 2024</div>
                    </button>
                    <button onClick={() => scrollToSection('#cert-financial-planning-1')} className="w-full text-left block p-2 pl-4 rounded-lg hover:bg-white/5 transition-colors">
                      <div className="font-medium text-gray-900 text-sm">Financial Planning 1</div>
                      <div className="text-xs text-gray-600">CSI • 2023</div>
                    </button>
                    <button onClick={() => scrollToSection('#cert-certificate-in-financial-services-advice')} className="w-full text-left block p-2 pl-4 rounded-lg hover:bg-white/5 transition-colors">
                      <div className="font-medium text-gray-900 text-sm">Certificate in Financial Services Advice</div>
                      <div className="text-xs text-gray-600">CSI • 2022</div>
                    </button>
                    <button onClick={() => scrollToSection('#cert-canadian-securities-course')} className="w-full text-left block p-2 pl-4 rounded-lg hover:bg-white/5 transition-colors">
                      <div className="font-medium text-gray-900 text-sm">Canadian Securities Course</div>
                      <div className="text-xs text-gray-600">CSI • 2021</div>
                    </button>
                    
                    {/* Data & Technology */}
                    <div className="font-semibold text-gray-900 text-base p-3 bg-emerald-50/50 rounded-lg mb-2 mt-4">Data & Technology</div>
                    <button onClick={() => scrollToSection('#cert-data-analytics-professional')} className="w-full text-left block p-2 pl-4 rounded-lg hover:bg-white/5 transition-colors">
                      <div className="font-medium text-gray-900 text-sm">Data Analytics Professional</div>
                      <div className="text-xs text-gray-600">Google • 2023</div>
                    </button>
                    <button onClick={() => scrollToSection('#cert-python-for-everybody')} className="w-full text-left block p-2 pl-4 rounded-lg hover:bg-white/5 transition-colors">
                      <div className="font-medium text-gray-900 text-sm">Python for Everybody</div>
                      <div className="text-xs text-gray-600">University of Michigan • 2023</div>
                    </button>
                    <button onClick={() => scrollToSection('#cert-machine-learning')} className="w-full text-left block p-2 pl-4 rounded-lg hover:bg-white/5 transition-colors">
                      <div className="font-medium text-gray-900 text-sm">Machine Learning</div>
                      <div className="text-xs text-gray-600">Stanford • 2020</div>
                    </button>
                    
                    {/* Advanced Analytics */}
                    <div className="font-semibold text-gray-900 text-base p-3 bg-purple-50/50 rounded-lg mb-2 mt-4">Advanced Analytics</div>
                    <button onClick={() => scrollToSection('#cert-econometrics-methods-applications')} className="w-full text-left block p-2 pl-4 rounded-lg hover:bg-white/5 transition-colors">
                      <div className="font-medium text-gray-900 text-sm">Econometrics: Methods & Applications</div>
                      <div className="text-xs text-gray-600">Erasmus University • 2024</div>
                    </button>
                    
                    {/* Academic Achievement */}
                    <div className="font-semibold text-gray-900 text-base p-3 bg-amber-50/50 rounded-lg mb-2 mt-4">Academic Achievement</div>
                    <button onClick={() => scrollToSection('#cert-gre-general-test')} className="w-full text-left block p-2 pl-4 rounded-lg hover:bg-white/5 transition-colors">
                      <div className="font-medium text-gray-900 text-sm">GRE General Test</div>
                      <div className="text-xs text-gray-600">ETS • 2024</div>
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
                
                <div className="dropdown-glass absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-2">
                    <button onClick={() => scrollToSection('#community-united-way')} className="w-full text-left block p-4 rounded-lg hover:bg-white/5 transition-colors border-b border-gray-200/20">
                      <div className="font-semibold text-gray-900 text-base mb-1">United Way</div>
                      <div className="text-sm text-gray-600">Next Gen Ambassador • Kingston, ON (2020-2023)</div>
                    </button>
                    <button onClick={() => scrollToSection('#community-royal-bank-of-canada')} className="w-full text-left block p-4 rounded-lg hover:bg-white/5 transition-colors border-b border-gray-200/20">
                      <div className="font-semibold text-gray-900 text-base mb-1">Royal Bank of Canada</div>
                      <div className="text-sm text-gray-600">Student Ambassador • Fredericton, NB (2019-2020)</div>
                    </button>
                    <button onClick={() => scrollToSection('#community-irving-oil-limited')} className="w-full text-left block p-4 rounded-lg hover:bg-white/5 transition-colors">
                      <div className="font-semibold text-gray-900 text-base mb-1">Irving Oil Limited</div>
                      <div className="text-sm text-gray-600">Volunteer Staff • Saint John, NB (2018)</div>
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
                  
                  <div className="dropdown-glass absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="p-2">
                      <button onClick={() => scrollToSection('#contact')} className="w-full text-left block p-4 rounded-lg hover:bg-white/5 transition-colors border-b border-gray-200/20">
                        <div className="font-semibold text-gray-900 text-base mb-1">Email</div>
                        <div className="text-sm text-gray-600">tbustard@unb.ca</div>
                      </button>
                      <button onClick={() => scrollToSection('#contact')} className="w-full text-left block p-4 rounded-lg hover:bg-white/5 transition-colors border-b border-gray-200/20">
                        <div className="font-semibold text-gray-900 text-base mb-1">Phone</div>
                        <div className="text-sm text-gray-600">(613) 985-1223</div>
                      </button>
                      <button onClick={() => scrollToSection('#contact')} className="w-full text-left block p-4 rounded-lg hover:bg-white/5 transition-colors">
                        <div className="font-semibold text-gray-900 text-base mb-1">Location</div>
                        <div className="text-sm text-gray-600">Toronto, Ontario, Canada</div>
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