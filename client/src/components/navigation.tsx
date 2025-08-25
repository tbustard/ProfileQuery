import { useState, useEffect, useMemo, useRef } from "react";
import { ChevronDown, Menu, X, ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import profileImage from "@assets/Untitled design (1)_1755896187722.png";

export default function Navigation() {
  const [location] = useLocation();
  const isHomePage = location === '/';
  const isResumePage = location === '/resume';
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState(isHomePage ? 'hero' : '');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

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

  return (
    <>
      {/* Navigation Bar with Clean Glass Effect */}
      <nav 
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ease-out`}
        style={{
          background: isScrolled 
            ? 'rgba(255, 255, 255, 0.88)' 
            : 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          borderBottom: isScrolled 
            ? '1px solid rgba(0, 0, 0, 0.08)' 
            : '1px solid rgba(0, 0, 0, 0.04)',
          boxShadow: isScrolled 
            ? '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.9)' 
            : '0 2px 8px rgba(0, 0, 0, 0.02), inset 0 1px 0 rgba(255, 255, 255, 0.9)'
        }}
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
                  className="flex items-center space-x-4 transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  <img 
                    src={profileImage} 
                    alt="Tyler Bustard" 
                    className="w-9 h-9 rounded-xl object-cover ring-1 ring-black/10 shadow-sm"
                  />
                  <div className="relative">
                    <span className="text-lg tracking-tight apple-heading-nav">
                      <span className="font-bold bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent">Tyler</span>{' '}
                      <span className="font-normal bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent">Bustard</span>
                    </span>
                  </div>
                </button>
              )}
              {isResumePage && (
                <button 
                  onClick={() => {
                    if (window.history.length > 1) {
                      window.history.back();
                    } else {
                      window.location.href = '/';
                    }
                  }}
                  className="flex items-center space-x-4 transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  <img 
                    src={profileImage} 
                    alt="Tyler Bustard" 
                    className="w-9 h-9 rounded-xl object-cover ring-1 ring-black/10 shadow-sm"
                  />
                  <div className="relative">
                    <span className="text-lg tracking-tight apple-heading-nav">
                      <span className="font-bold bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent">Tyler</span>{' '}
                      <span className="font-normal bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent">Bustard</span>
                    </span>
                  </div>
                </button>
              )}
            </div>

            {/* Center - Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              
              {/* Education */}
              {isHomePage && (
                <div className="relative dropdown-container">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === 'education' ? null : 'education')}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-1 ${
                      currentSection === 'education' 
                        ? 'text-blue-600 font-semibold bg-blue-50/50' 
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/30'
                    }`}
                  >
                    Education
                    <ChevronDown size={14} className={`transition-transform duration-200 ${openDropdown === 'education' ? 'rotate-180' : ''}`} />
                  </button>
                  
                </div>
              )}

              {/* Experience */}
              {isHomePage && (
                <div className="relative dropdown-container">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === 'experience' ? null : 'experience')}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-1 ${
                      currentSection === 'experience' 
                        ? 'text-blue-600 font-semibold bg-blue-50/50' 
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/30'
                    }`}
                  >
                    Experience
                    <ChevronDown size={14} className={`transition-transform duration-200 ${openDropdown === 'experience' ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              )}

              {/* Certifications */}
              {isHomePage && (
                <div className="relative dropdown-container">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === 'certifications' ? null : 'certifications')}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-1 ${
                      currentSection === 'certifications' || currentSection === 'skills' 
                        ? 'text-blue-600 font-semibold bg-blue-50/50' 
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/30'
                    }`}
                  >
                    Certifications
                    <ChevronDown size={14} className={`transition-transform duration-200 ${openDropdown === 'certifications' ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              )}

              {/* Community */}
              {isHomePage && (
                <div className="relative dropdown-container">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === 'community' ? null : 'community')}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-1 ${
                      currentSection === 'community' 
                        ? 'text-blue-600 font-semibold bg-blue-50/50' 
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/30'
                    }`}
                  >
                    Community
                    <ChevronDown size={14} className={`transition-transform duration-200 ${openDropdown === 'community' ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              )}

              {/* Contact */}
              {isHomePage && (
                <div className="relative dropdown-container">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === 'contact' ? null : 'contact')}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-1 ${
                      currentSection === 'contact' 
                        ? 'text-blue-600 font-semibold bg-blue-50/50' 
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/30'
                    }`}
                  >
                    Contact
                    <ChevronDown size={14} className={`transition-transform duration-200 ${openDropdown === 'contact' ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              )}
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-3">
              {/* Desktop Resume Button */}
              <div className="hidden lg:block">
                <button 
                  onClick={() => {
                    if (isResumePage) {
                      if (window.history.length > 1) {
                        window.history.back();
                      } else {
                        window.location.href = '/';
                      }
                    } else {
                      window.location.href = '/resume';
                    }
                  }}
                  className="px-4 py-2 text-sm font-medium rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-all duration-200 hover:scale-105 shadow-sm"
                >
                  {isResumePage ? 'Close' : 'Resume'}
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100/50 transition-colors"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Clean Glass Effect */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div 
            className="absolute inset-0 bg-black/20" 
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div 
            className="absolute inset-x-0 top-0 h-full overflow-y-auto"
            style={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)'
            }}
          >
            <div className="p-6 pt-20">
              <div className="space-y-6">
                {/* Mobile Navigation Links */}
                {isHomePage && (
                  <>
                    <button 
                      onClick={() => {
                        scrollToSection('#education');
                        setIsMobileMenuOpen(false);
                      }}
                      className="block w-full text-left px-4 py-3 text-lg font-medium text-gray-900 hover:bg-gray-100/50 rounded-lg transition-colors"
                    >
                      Education
                    </button>
                    <button 
                      onClick={() => {
                        scrollToSection('#experience');
                        setIsMobileMenuOpen(false);
                      }}
                      className="block w-full text-left px-4 py-3 text-lg font-medium text-gray-900 hover:bg-gray-100/50 rounded-lg transition-colors"
                    >
                      Experience
                    </button>
                    <button 
                      onClick={() => {
                        scrollToSection('#certifications');
                        setIsMobileMenuOpen(false);
                      }}
                      className="block w-full text-left px-4 py-3 text-lg font-medium text-gray-900 hover:bg-gray-100/50 rounded-lg transition-colors"
                    >
                      Certifications
                    </button>
                    <button 
                      onClick={() => {
                        scrollToSection('#community');
                        setIsMobileMenuOpen(false);
                      }}
                      className="block w-full text-left px-4 py-3 text-lg font-medium text-gray-900 hover:bg-gray-100/50 rounded-lg transition-colors"
                    >
                      Community
                    </button>
                    <button 
                      onClick={() => {
                        scrollToSection('#contact');
                        setIsMobileMenuOpen(false);
                      }}
                      className="block w-full text-left px-4 py-3 text-lg font-medium text-gray-900 hover:bg-gray-100/50 rounded-lg transition-colors"
                    >
                      Contact
                    </button>
                  </>
                )}
                
                {/* Resume Button */}
                <button 
                  onClick={() => {
                    isResumePage ? (window.history.length > 1 ? window.history.back() : window.location.href = '/') : window.location.href = '/resume';
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full px-4 py-3 text-lg font-medium bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  {isResumePage ? 'Close Resume' : 'View Resume'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Dropdowns - Clean Glass Effect */}
      {/* Education Dropdown */}
      {openDropdown === 'education' && (
        <div className="fixed top-20 left-1/2 transform -translate-x-80 w-80 mt-2 z-[55] dropdown-container hidden lg:block">
          <div 
            className="rounded-xl p-4 shadow-xl transition-all duration-200"
            style={{
              background: 'rgba(255, 255, 255, 0.92)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.9)'
            }}
          >
            <button 
              onClick={() => {
                scrollToSection('#education');
                setOpenDropdown(null);
              }}
              className="w-full text-left hover:bg-gray-100/50 rounded-lg p-2 transition-all duration-200"
            >
              <div className="space-y-1">
                <div className="text-lg font-bold text-gray-900">University of New Brunswick</div>
                <div className="text-base text-gray-600">Bachelor of Business Administration</div>
                <div className="text-sm text-gray-500">Fredericton, NB • 2016-2020</div>
              </div>
            </button>
          </div>
        </div>
      )}

      {/* Experience Dropdown */}
      {openDropdown === 'experience' && (
        <div className="fixed top-20 left-1/2 transform -translate-x-32 w-80 mt-2 z-[55] dropdown-container hidden lg:block">
          <div 
            className="rounded-xl p-4 shadow-xl transition-all duration-200"
            style={{
              background: 'rgba(255, 255, 255, 0.92)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.9)'
            }}
          >
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {/* BMO Private Wealth */}
              <button 
                onClick={() => {
                  scrollToSection('#experience-bmo-private-wealth-portfolio-assistant');
                  setOpenDropdown(null);
                }}
                className="w-full text-left hover:bg-gray-100/50 rounded-lg p-2 transition-all duration-200"
              >
                <div className="space-y-1">
                  <div className="text-base font-bold text-gray-900">Portfolio Assistant</div>
                  <div className="text-sm text-gray-600">BMO Private Wealth</div>
                  <div className="text-xs text-gray-500">Toronto, ON • 2022-2023</div>
                </div>
              </button>
              
              {/* TD Canada Trust */}
              <button 
                onClick={() => {
                  scrollToSection('#experience-td-canada-trust-financial-advisor');
                  setOpenDropdown(null);
                }}
                className="w-full text-left hover:bg-gray-100/50 rounded-lg p-2 transition-all duration-200"
              >
                <div className="space-y-1">
                  <div className="text-base font-bold text-gray-900">Financial Advisor</div>
                  <div className="text-sm text-gray-600">TD Canada Trust</div>
                  <div className="text-xs text-gray-500">Kingston, ON • 2021-2022</div>
                </div>
              </button>
              
              {/* RBC Banking Advisor */}
              <button 
                onClick={() => {
                  scrollToSection('#experience-royal-bank-of-canada-banking-advisor');
                  setOpenDropdown(null);
                }}
                className="w-full text-left hover:bg-gray-100/50 rounded-lg p-2 transition-all duration-200"
              >
                <div className="space-y-1">
                  <div className="text-base font-bold text-gray-900">Banking Advisor</div>
                  <div className="text-sm text-gray-600">Royal Bank of Canada</div>
                  <div className="text-xs text-gray-500">Kingston, ON • 2020-2021</div>
                </div>
              </button>
              
              {/* RBC Client Advisor Intern */}
              <button 
                onClick={() => {
                  scrollToSection('#experience-royal-bank-of-canada-client-advisor-intern');
                  setOpenDropdown(null);
                }}
                className="w-full text-left hover:bg-gray-100/50 rounded-lg p-2 transition-all duration-200"
              >
                <div className="space-y-1">
                  <div className="text-base font-bold text-gray-900">Client Advisor Intern</div>
                  <div className="text-sm text-gray-600">Royal Bank of Canada</div>
                  <div className="text-xs text-gray-500">Fredericton, NB • 2019-2020</div>
                </div>
              </button>
              
              {/* Irving Oil */}
              <button 
                onClick={() => {
                  scrollToSection('#experience-irving-oil-limited-marketing-intern');
                  setOpenDropdown(null);
                }}
                className="w-full text-left hover:bg-gray-100/50 rounded-lg p-2 transition-all duration-200"
              >
                <div className="space-y-1">
                  <div className="text-base font-bold text-gray-900">Marketing Intern</div>
                  <div className="text-sm text-gray-600">Irving Oil Limited</div>
                  <div className="text-xs text-gray-500">Saint John, NB • 2018</div>
                </div>
              </button>
              
              {/* Grant Thornton */}
              <button 
                onClick={() => {
                  scrollToSection('#experience-grant-thornton-llp-tax-return-intern');
                  setOpenDropdown(null);
                }}
                className="w-full text-left hover:bg-gray-100/50 rounded-lg p-2 transition-all duration-200"
              >
                <div className="space-y-1">
                  <div className="text-base font-bold text-gray-900">Tax Return Intern</div>
                  <div className="text-sm text-gray-600">Grant Thornton LLP</div>
                  <div className="text-xs text-gray-500">Saint John, NB • 2018</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Certifications Dropdown - Complete and Accurate */}
      {openDropdown === 'certifications' && (
        <div className="fixed top-20 left-1/2 transform translate-x-8 w-[420px] mt-2 z-[55] dropdown-container hidden lg:block">
          <div 
            className="rounded-xl p-4 shadow-xl transition-all duration-200"
            style={{
              background: 'rgba(255, 255, 255, 0.92)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.9)'
            }}
          >
            <div className="mb-3">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">22 Professional Certifications</h3>
            </div>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              
              {/* Financial Excellence - 10 certifications */}
              <div className="border-b border-gray-100 pb-3">
                <div className="text-xs font-semibold text-blue-600 mb-2 uppercase">Financial Excellence</div>
                
                <button onClick={() => { scrollToSection('#certifications-financial-excellence'); setOpenDropdown(null); }} className="w-full text-left hover:bg-gray-100/50 rounded-lg p-2 transition-all duration-200 mb-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-sm font-bold text-gray-900">CFA Level I Candidate</div>
                      <div className="text-xs text-gray-600">CFA Institute</div>
                    </div>
                    <span className="text-xs text-gray-500">2025</span>
                  </div>
                </button>
                
                <button onClick={() => { scrollToSection('#certifications-financial-excellence'); setOpenDropdown(null); }} className="w-full text-left hover:bg-gray-100/50 rounded-lg p-2 transition-all duration-200 mb-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-sm font-bold text-gray-900">Discounted Cash Flow Analysis</div>
                      <div className="text-xs text-gray-600">Training the Street</div>
                    </div>
                    <span className="text-xs text-gray-500">2024</span>
                  </div>
                </button>
                
                <button onClick={() => { scrollToSection('#certifications-financial-excellence'); setOpenDropdown(null); }} className="w-full text-left hover:bg-gray-100/50 rounded-lg p-2 transition-all duration-200 mb-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-sm font-bold text-gray-900">Canadian Securities Course</div>
                      <div className="text-xs text-gray-600">CSI</div>
                    </div>
                    <span className="text-xs text-gray-500">2021</span>
                  </div>
                </button>
                
                <button onClick={() => { scrollToSection('#certifications-financial-excellence'); setOpenDropdown(null); }} className="w-full text-left hover:bg-gray-100/50 rounded-lg p-2 transition-all duration-200">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-sm font-bold text-gray-900">Investment Funds in Canada</div>
                      <div className="text-xs text-gray-600">CSI</div>
                    </div>
                    <span className="text-xs text-gray-500">2020</span>
                  </div>
                </button>
              </div>
              
              {/* Data & Technology - 6 certifications */}
              <div className="border-b border-gray-100 pb-3">
                <div className="text-xs font-semibold text-emerald-600 mb-2 uppercase">Data & Technology</div>
                
                <button onClick={() => { scrollToSection('#certifications-data-technology'); setOpenDropdown(null); }} className="w-full text-left hover:bg-gray-100/50 rounded-lg p-2 transition-all duration-200 mb-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-sm font-bold text-gray-900">Data Analytics Professional</div>
                      <div className="text-xs text-gray-600">Google</div>
                    </div>
                    <span className="text-xs text-gray-500">2023</span>
                  </div>
                </button>
                
                <button onClick={() => { scrollToSection('#certifications-data-technology'); setOpenDropdown(null); }} className="w-full text-left hover:bg-gray-100/50 rounded-lg p-2 transition-all duration-200 mb-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-sm font-bold text-gray-900">Python for Everybody</div>
                      <div className="text-xs text-gray-600">University of Michigan</div>
                    </div>
                    <span className="text-xs text-gray-500">2023</span>
                  </div>
                </button>
                
                <button onClick={() => { scrollToSection('#certifications-data-technology'); setOpenDropdown(null); }} className="w-full text-left hover:bg-gray-100/50 rounded-lg p-2 transition-all duration-200">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-sm font-bold text-gray-900">SQL for Data Science</div>
                      <div className="text-xs text-gray-600">UC Davis</div>
                    </div>
                    <span className="text-xs text-gray-500">2020</span>
                  </div>
                </button>
              </div>
              
              {/* Advanced Analytics - 5 certifications */}
              <div className="border-b border-gray-100 pb-3">
                <div className="text-xs font-semibold text-purple-600 mb-2 uppercase">Advanced Analytics</div>
                
                <button onClick={() => { scrollToSection('#certifications-advanced-analytics'); setOpenDropdown(null); }} className="w-full text-left hover:bg-gray-100/50 rounded-lg p-2 transition-all duration-200 mb-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-sm font-bold text-gray-900">Econometrics: Methods & Applications</div>
                      <div className="text-xs text-gray-600">Erasmus University</div>
                    </div>
                    <span className="text-xs text-gray-500">2024</span>
                  </div>
                </button>
                
                <button onClick={() => { scrollToSection('#certifications-advanced-analytics'); setOpenDropdown(null); }} className="w-full text-left hover:bg-gray-100/50 rounded-lg p-2 transition-all duration-200">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-sm font-bold text-gray-900">Excel Skills for Business</div>
                      <div className="text-xs text-gray-600">Macquarie University</div>
                    </div>
                    <span className="text-xs text-gray-500">2020</span>
                  </div>
                </button>
              </div>
              
              {/* Standardized Exam */}
              <div>
                <div className="text-xs font-semibold text-amber-600 mb-2 uppercase">Standardized Exam</div>
                
                <button onClick={() => { scrollToSection('#certifications-standardized-exam'); setOpenDropdown(null); }} className="w-full text-left hover:bg-gray-100/50 rounded-lg p-2 transition-all duration-200">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-sm font-bold text-gray-900">GRE General Test</div>
                      <div className="text-xs text-gray-600">ETS</div>
                    </div>
                    <span className="text-xs text-gray-500">2024</span>
                  </div>
                </button>
              </div>
              
            </div>
          </div>
        </div>
      )}

      {/* Community Dropdown - Accurate and Complete */}
      {openDropdown === 'community' && (
        <div className="fixed top-20 left-1/2 transform translate-x-48 w-80 mt-2 z-[55] dropdown-container hidden lg:block">
          <div 
            className="rounded-xl p-4 shadow-xl transition-all duration-200"
            style={{
              background: 'rgba(255, 255, 255, 0.92)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.9)'
            }}
          >
            <div className="mb-3">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Community Service</h3>
            </div>
            <div className="space-y-3">
              
              {/* United Way */}
              <button 
                onClick={() => {
                  scrollToSection('#community-united-way');
                  setOpenDropdown(null);
                }}
                className="w-full text-left hover:bg-gray-100/50 rounded-lg p-3 transition-all duration-200"
              >
                <div className="space-y-1">
                  <div className="text-base font-bold text-gray-900">Next Gen Ambassador</div>
                  <div className="text-sm text-gray-600">United Way</div>
                  <div className="text-xs text-gray-500">Kingston, ON • 2020-2023</div>
                  <div className="text-xs text-blue-600 mt-1">3 years of service</div>
                </div>
              </button>
              
              {/* RBC Student Ambassador */}
              <button 
                onClick={() => {
                  scrollToSection('#community-royal-bank-of-canada');
                  setOpenDropdown(null);
                }}
                className="w-full text-left hover:bg-gray-100/50 rounded-lg p-3 transition-all duration-200"
              >
                <div className="space-y-1">
                  <div className="text-base font-bold text-gray-900">Student Ambassador</div>
                  <div className="text-sm text-gray-600">Royal Bank of Canada</div>
                  <div className="text-xs text-gray-500">Fredericton, NB • 2019-2020</div>
                  <div className="text-xs text-blue-600 mt-1">1 year of service</div>
                </div>
              </button>
              
              {/* Irving Oil */}
              <button 
                onClick={() => {
                  scrollToSection('#community-irving-oil-limited');
                  setOpenDropdown(null);
                }}
                className="w-full text-left hover:bg-gray-100/50 rounded-lg p-3 transition-all duration-200"
              >
                <div className="space-y-1">
                  <div className="text-base font-bold text-gray-900">Volunteer Staff</div>
                  <div className="text-sm text-gray-600">Irving Oil Limited</div>
                  <div className="text-xs text-gray-500">Saint John, NB • 2018</div>
                  <div className="text-xs text-blue-600 mt-1">Youth engagement</div>
                </div>
              </button>
              
            </div>
            
            <div className="mt-4 pt-3 border-t border-gray-100">
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="text-sm font-bold text-gray-900">4+</div>
                  <div className="text-xs text-gray-500">Years</div>
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">500+</div>
                  <div className="text-xs text-gray-500">People</div>
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">3</div>
                  <div className="text-xs text-gray-500">Orgs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Dropdown */}
      {openDropdown === 'contact' && (
        <div className="fixed top-20 left-1/2 transform translate-x-60 w-72 mt-2 z-[55] dropdown-container hidden lg:block">
          <div 
            className="rounded-xl p-4 shadow-xl transition-all duration-200"
            style={{
              background: 'rgba(255, 255, 255, 0.92)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.9)'
            }}
          >
            <div className="space-y-3">
              
              {/* Email */}
              <button 
                onClick={() => {
                  scrollToSection('#contact');
                  setOpenDropdown(null);
                }}
                className="w-full text-left hover:bg-gray-100/50 rounded-lg p-2 transition-all duration-200"
              >
                <div className="space-y-1">
                  <div className="text-base font-bold text-gray-900">Email</div>
                  <div className="text-sm text-gray-600">tbustard@unb.ca</div>
                </div>
              </button>

              {/* Phone */}
              <button 
                onClick={() => {
                  scrollToSection('#contact');
                  setOpenDropdown(null);
                }}
                className="w-full text-left hover:bg-gray-100/50 rounded-lg p-2 transition-all duration-200"
              >
                <div className="space-y-1">
                  <div className="text-base font-bold text-gray-900">Phone</div>
                  <div className="text-sm text-gray-600">(613) 985-1223</div>
                </div>
              </button>

              {/* Location */}
              <button 
                onClick={() => {
                  scrollToSection('#contact');
                  setOpenDropdown(null);
                }}
                className="w-full text-left hover:bg-gray-100/50 rounded-lg p-2 transition-all duration-200"
              >
                <div className="space-y-1">
                  <div className="text-base font-bold text-gray-900">Location</div>
                  <div className="text-sm text-gray-600">Toronto, Ontario, Canada</div>
                </div>
              </button>

            </div>
          </div>
        </div>
      )}

    </>
  );
}