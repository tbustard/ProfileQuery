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
                      : 'text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-blue-50/10 dark:hover:bg-blue-900/10'
                  }`}
                >
                  Education
                  <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                </button>
                
                <div className="dropdown-glass absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-96 max-h-96 overflow-y-auto rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-2">
                    <button 
                      onClick={() => scrollToSection('#education')}
                      className="w-full text-left block p-4 rounded-lg hover:bg-white/5 transition-colors"
                    >
                      <div className="font-semibold text-gray-900 dark:text-white text-base mb-1">University of New Brunswick</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Bachelor of Business Administration • Fredericton, NB (2016-2020)</div>
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
                      : 'text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-blue-50/10 dark:hover:bg-blue-900/10'
                  }`}
                >
                  Experience
                  <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                </button>
                
                <div className="dropdown-glass absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-96 max-h-96 overflow-y-auto rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-2">
                    <button onClick={() => scrollToSection('#experience-bmo-private-wealth-portfolio-assistant')} className="w-full text-left block p-4 rounded-lg hover:bg-white/5 transition-colors border-b border-gray-200/20">
                      <div className="font-semibold text-gray-900 dark:text-white text-base mb-1">BMO Private Wealth</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Portfolio Assistant • Toronto, ON (2022-2023)</div>
                    </button>
                    <button onClick={() => scrollToSection('#experience-td-canada-trust-financial-advisor')} className="w-full text-left block p-4 rounded-lg hover:bg-white/5 transition-colors border-b border-gray-200/20">
                      <div className="font-semibold text-gray-900 dark:text-white text-base mb-1">TD Canada Trust</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Financial Advisor • Kingston, ON (2021-2022)</div>
                    </button>
                    <button onClick={() => scrollToSection('#experience-royal-bank-of-canada-banking-advisor')} className="w-full text-left block p-4 rounded-lg hover:bg-white/5 transition-colors border-b border-gray-200/20">
                      <div className="font-semibold text-gray-900 dark:text-white text-base mb-1">Royal Bank of Canada</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Banking Advisor • Kingston, ON (2020-2021)</div>
                    </button>
                    <button onClick={() => scrollToSection('#experience-royal-bank-of-canada-client-advisor-intern')} className="w-full text-left block p-4 rounded-lg hover:bg-white/5 transition-colors border-b border-gray-200/20">
                      <div className="font-semibold text-gray-900 dark:text-white text-base mb-1">RBC Client Advisor Intern</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Fredericton, NB (2019-2020)</div>
                    </button>
                    <button onClick={() => scrollToSection('#experience-irving-oil-limited-marketing-intern')} className="w-full text-left block p-4 rounded-lg hover:bg-white/5 transition-colors border-b border-gray-200/20">
                      <div className="font-semibold text-gray-900 dark:text-white text-base mb-1">Irving Oil Limited</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Marketing Intern • Saint John, NB (2018)</div>
                    </button>
                    <button onClick={() => scrollToSection('#experience-grant-thornton-llp-tax-return-intern')} className="w-full text-left block p-4 rounded-lg hover:bg-white/5 transition-colors">
                      <div className="font-semibold text-gray-900 dark:text-white text-base mb-1">Grant Thornton LLP</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Tax Return Intern • Saint John, NB (2018)</div>
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
                    <button onClick={() => scrollToSection('#cert-discounted-cash-flow-analysis')} className="w-full text-left block p-4 rounded-lg hover:bg-white/5 transition-colors border-b border-gray-200/20">
                      <div className="font-semibold text-gray-900 dark:text-white text-base mb-1">DCF Analysis</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Training the Street • 2024</div>
                    </button>
                    <button onClick={() => scrollToSection('#cert-financial-planning-1')} className="w-full text-left block p-4 rounded-lg hover:bg-white/5 transition-colors border-b border-gray-200/20">
                      <div className="font-semibold text-gray-900 dark:text-white text-base mb-1">Financial Planning 1</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">CSI • 2023</div>
                    </button>
                    <button onClick={() => scrollToSection('#cert-certificate-in-financial-services-advice')} className="w-full text-left block p-4 rounded-lg hover:bg-white/5 transition-colors border-b border-gray-200/20">
                      <div className="font-semibold text-gray-900 dark:text-white text-base mb-1">Certificate in Financial Services Advice</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">CSI • 2022</div>
                    </button>
                    <button onClick={() => scrollToSection('#cert-personal-financial-service-advice')} className="w-full text-left block p-4 rounded-lg hover:bg-white/5 transition-colors border-b border-gray-200/20">
                      <div className="font-semibold text-gray-900 dark:text-white text-base mb-1">Personal Financial Service Advice</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">CSI • 2021</div>
                    </button>
                    <button onClick={() => scrollToSection('#cert-canadian-securities-course')} className="w-full text-left block p-4 rounded-lg hover:bg-white/5 transition-colors border-b border-gray-200/20">
                      <div className="font-semibold text-gray-900 dark:text-white text-base mb-1">Canadian Securities Course</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">CSI • 2021</div>
                    </button>
                    <button onClick={() => scrollToSection('#cert-financial---valuation-modeling')} className="w-full text-left block p-4 rounded-lg hover:bg-white/5 transition-colors border-b border-gray-200/20">
                      <div className="font-semibold text-gray-900 dark:text-white text-base mb-1">Financial & Valuation Modeling</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Wall Street Prep • 2020</div>
                    </button>
                    <button onClick={() => scrollToSection('#cert-investment-funds-in-canada')} className="w-full text-left block p-4 rounded-lg hover:bg-white/5 transition-colors border-b border-gray-200/20">
                      <div className="font-semibold text-gray-900 dark:text-white text-base mb-1">Investment Funds in Canada</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">CSI • 2020</div>
                    </button>
                    <button onClick={() => scrollToSection('#cert-bloomberg-market-concepts-certificate')} className="w-full text-left block p-4 rounded-lg hover:bg-white/5 transition-colors border-b border-gray-200/20">
                      <div className="font-semibold text-gray-900 dark:text-white text-base mb-1">Bloomberg Market Concepts Certificate</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Bloomberg • 2020</div>
                    </button>
                    <button onClick={() => scrollToSection('#cert-personal-finance-essentials')} className="w-full text-left block p-4 rounded-lg hover:bg-white/5 transition-colors border-b border-gray-200/20">
                      <div className="font-semibold text-gray-900 dark:text-white text-base mb-1">Personal Finance Essentials</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">McGill University • 2020</div>
                    </button>
                    
                    {/* Data & Technology */}
                    <div className="px-4 py-2 text-sm font-semibold text-black dark:text-white mt-4">Data & Technology</div>
                    <button onClick={() => scrollToSection('#cert-data-analytics-professional')} className="w-full text-left block p-4 rounded-lg hover:bg-white/5 transition-colors border-b border-gray-200/20">
                      <div className="font-semibold text-gray-900 dark:text-white text-base mb-1">Data Analytics Professional</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Google • 2023</div>
                    </button>
                    <button onClick={() => scrollToSection('#cert-python-for-everybody')} className="w-full text-left block p-4 rounded-lg hover:bg-white/5 transition-colors border-b border-gray-200/20">
                      <div className="font-semibold text-gray-900 dark:text-white text-base mb-1">Python for Everybody</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">University of Michigan • 2023</div>
                    </button>
                    <button onClick={() => scrollToSection('#cert-data-visualization-with-tableau')} className="w-full text-left block p-4 rounded-lg hover:bg-white/5 transition-colors border-b border-gray-200/20">
                      <div className="font-semibold text-gray-900 dark:text-white text-base mb-1">Data Visualization with Tableau</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">UC Davis • 2023</div>
                    </button>
                    <button onClick={() => scrollToSection('#cert-machine-learning')} className="w-full text-left block p-4 rounded-lg hover:bg-white/5 transition-colors border-b border-gray-200/20">
                      <div className="font-semibold text-gray-900 dark:text-white text-base mb-1">Machine Learning</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Stanford • 2020</div>
                    </button>
                    <button onClick={() => scrollToSection('#cert-sql-for-data-science')} className="w-full text-left block p-4 rounded-lg hover:bg-white/5 transition-colors border-b border-gray-200/20">
                      <div className="font-semibold text-gray-900 dark:text-white text-base mb-1">SQL for Data Science</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">UC Davis • 2020</div>
                    </button>
                    <button onClick={() => scrollToSection('#cert-power-bi-data-visualization')} className="w-full text-left block p-4 rounded-lg hover:bg-white/5 transition-colors border-b border-gray-200/20">
                      <div className="font-semibold text-gray-900 dark:text-white text-base mb-1">Power BI Data Visualization</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Microsoft • 2020</div>
                    </button>
                    
                    {/* Advanced Analytics */}
                    <div className="px-4 py-2 text-sm font-semibold text-black dark:text-white mt-4">Advanced Analytics</div>
                    <button onClick={() => scrollToSection('#cert-econometrics--methods---applications')} className="w-full text-left block p-4 rounded-lg hover:bg-white/5 transition-colors border-b border-gray-200/20">
                      <div className="font-semibold text-gray-900 dark:text-white text-base mb-1">Econometrics: Methods & Applications</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Erasmus University • 2024</div>
                    </button>
                    <button onClick={() => scrollToSection('#cert-matrix-algebra-for-engineers')} className="w-full text-left block p-4 rounded-lg hover:bg-white/5 transition-colors border-b border-gray-200/20">
                      <div className="font-semibold text-gray-900 dark:text-white text-base mb-1">Matrix Algebra for Engineers</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">HKUST • 2024</div>
                    </button>
                    <button onClick={() => scrollToSection('#cert-introduction-to-calculus')} className="w-full text-left block p-4 rounded-lg hover:bg-white/5 transition-colors border-b border-gray-200/20">
                      <div className="font-semibold text-gray-900 dark:text-white text-base mb-1">Introduction to Calculus</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">University of Sydney • 2023</div>
                    </button>
                    <button onClick={() => scrollToSection('#cert-inferential-statistics')} className="w-full text-left block p-4 rounded-lg hover:bg-white/5 transition-colors border-b border-gray-200/20">
                      <div className="font-semibold text-gray-900 dark:text-white text-base mb-1">Inferential Statistics</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Duke University • 2020</div>
                    </button>
                    <button onClick={() => scrollToSection('#cert-excel-skills-for-business')} className="w-full text-left block p-4 rounded-lg hover:bg-white/5 transition-colors border-b border-gray-200/20">
                      <div className="font-semibold text-gray-900 dark:text-white text-base mb-1">Excel Skills for Business</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Macquarie University • 2020</div>
                    </button>
                    
                    {/* Standardized Exam */}
                    <div className="px-4 py-2 text-sm font-semibold text-black dark:text-white mt-4">Standardized Exam</div>
                    <button onClick={() => scrollToSection('#cert-gre-general-test')} className="w-full text-left block p-4 rounded-lg hover:bg-white/5 transition-colors">
                      <div className="font-semibold text-gray-900 dark:text-white text-base mb-1">GRE General Test</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">ETS • 2024</div>
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
                      ? 'text-blue-600 dark:text-blue-400 font-semibold bg-blue-100/10 dark:bg-blue-900/20' 
                      : 'text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-blue-50/10 dark:hover:bg-blue-900/10'
                  }`}
                >
                  Community
                  <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                </button>
                
                <div className="dropdown-glass absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-96 max-h-96 overflow-y-auto rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-2">
                    <button onClick={() => scrollToSection('#community-united-way')} className="w-full text-left block p-4 rounded-lg hover:bg-white/5 transition-colors border-b border-gray-200/20">
                      <div className="font-semibold text-gray-900 dark:text-white text-base mb-1">United Way</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Next Gen Ambassador • Kingston, ON (2020-2023)</div>
                    </button>
                    <button onClick={() => scrollToSection('#community-royal-bank-of-canada')} className="w-full text-left block p-4 rounded-lg hover:bg-white/5 transition-colors border-b border-gray-200/20">
                      <div className="font-semibold text-gray-900 dark:text-white text-base mb-1">Royal Bank of Canada</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Student Ambassador • Fredericton, NB (2019-2020)</div>
                    </button>
                    <button onClick={() => scrollToSection('#community-irving-oil-limited')} className="w-full text-left block p-4 rounded-lg hover:bg-white/5 transition-colors">
                      <div className="font-semibold text-gray-900 dark:text-white text-base mb-1">Irving Oil Limited</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Volunteer Staff • Saint John, NB (2018)</div>
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
                        ? 'text-blue-600 dark:text-blue-400 font-semibold bg-blue-100/10 dark:bg-blue-900/20' 
                        : 'text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-blue-50/10 dark:hover:bg-blue-900/10'
                    }`}
                  >
                    Contact
                    <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                  </button>
                  
                  <div className="dropdown-glass absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-96 max-h-96 overflow-y-auto rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="p-2">
                      <button onClick={() => scrollToSection('#contact')} className="w-full text-left block p-4 rounded-lg hover:bg-white/5 transition-colors border-b border-gray-200/20">
                        <div className="font-semibold text-gray-900 dark:text-white text-base mb-1">Email</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">tbustard@unb.ca</div>
                      </button>
                      <button onClick={() => scrollToSection('#contact')} className="w-full text-left block p-4 rounded-lg hover:bg-white/5 transition-colors border-b border-gray-200/20">
                        <div className="font-semibold text-gray-900 dark:text-white text-base mb-1">Phone</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">(613) 985-1223</div>
                      </button>
                      <button onClick={() => scrollToSection('#contact')} className="w-full text-left block p-4 rounded-lg hover:bg-white/5 transition-colors">
                        <div className="font-semibold text-gray-900 dark:text-white text-base mb-1">Location</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Toronto, Ontario, Canada</div>
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
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-foreground hover:bg-white/10 min-h-[48px] min-w-[48px] p-3"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mobile-glass border-t border-white/10">
            <div className="max-h-[calc(100vh-4rem)] sm:max-h-[calc(100vh-5rem)] overflow-y-auto px-4 sm:px-6 py-6 space-y-4">
              {isHomePage && (
                <>
                  {/* Education Section */}
                  <div className="space-y-2">
                    <button
                      onClick={() => { scrollToSection('#education'); setIsMobileMenuOpen(false); }}
                      className="block w-full text-left px-4 py-4 rounded-lg text-foreground hover:text-primary hover:bg-white/10 transition-all duration-200 min-h-[48px] text-lg font-medium"
                    >
                      Education
                    </button>
                    <button 
                      onClick={() => { scrollToSection('#education'); setIsMobileMenuOpen(false); }}
                      className="block w-full text-left px-6 py-3 rounded-lg text-sm text-foreground/80 hover:text-primary hover:bg-white/5 transition-all duration-200"
                    >
                      <div className="font-semibold text-gray-900 dark:text-white mb-1">University of New Brunswick</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Bachelor of Business Administration • Fredericton, NB (2016-2020)</div>
                    </button>
                  </div>

                  {/* Experience Section */}
                  <div className="space-y-2">
                    <button
                      onClick={() => { scrollToSection('#experience'); setIsMobileMenuOpen(false); }}
                      className="block w-full text-left px-4 py-4 rounded-lg text-foreground hover:text-primary hover:bg-white/10 transition-all duration-200 min-h-[48px] text-lg font-medium"
                    >
                      Experience
                    </button>
                    <button onClick={() => { scrollToSection('#experience-bmo-private-wealth-portfolio-assistant'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-6 py-3 rounded-lg text-sm text-foreground/80 hover:text-primary hover:bg-white/5 transition-all duration-200">
                      <div className="font-semibold text-gray-900 dark:text-white mb-1">BMO Private Wealth</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Portfolio Assistant • Toronto, ON (2022-2023)</div>
                    </button>
                    <button onClick={() => { scrollToSection('#experience-td-canada-trust-financial-advisor'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-6 py-3 rounded-lg text-sm text-foreground/80 hover:text-primary hover:bg-white/5 transition-all duration-200">
                      <div className="font-semibold text-gray-900 dark:text-white mb-1">TD Canada Trust</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Financial Advisor • Kingston, ON (2021-2022)</div>
                    </button>
                    <button onClick={() => { scrollToSection('#experience-royal-bank-of-canada-banking-advisor'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-6 py-3 rounded-lg text-sm text-foreground/80 hover:text-primary hover:bg-white/5 transition-all duration-200">
                      <div className="font-semibold text-gray-900 dark:text-white mb-1">Royal Bank of Canada</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Banking Advisor • Kingston, ON (2020-2021)</div>
                    </button>
                    <button onClick={() => { scrollToSection('#experience-royal-bank-of-canada-client-advisor-intern'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-6 py-3 rounded-lg text-sm text-foreground/80 hover:text-primary hover:bg-white/5 transition-all duration-200">
                      <div className="font-semibold text-gray-900 dark:text-white mb-1">RBC Client Advisor Intern</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Fredericton, NB (2019-2020)</div>
                    </button>
                    <button onClick={() => { scrollToSection('#experience-irving-oil-limited-marketing-intern'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-6 py-3 rounded-lg text-sm text-foreground/80 hover:text-primary hover:bg-white/5 transition-all duration-200">
                      <div className="font-semibold text-gray-900 dark:text-white mb-1">Irving Oil Limited</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Marketing Intern • Saint John, NB (2018)</div>
                    </button>
                    <button onClick={() => { scrollToSection('#experience-grant-thornton-llp-tax-return-intern'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-6 py-3 rounded-lg text-sm text-foreground/80 hover:text-primary hover:bg-white/5 transition-all duration-200">
                      <div className="font-semibold text-gray-900 dark:text-white mb-1">Grant Thornton LLP</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Tax Return Intern • Saint John, NB (2018)</div>
                    </button>
                  </div>

                  {/* Certifications Section */}
                  <div className="space-y-2">
                    <button
                      onClick={() => { scrollToSection('#certifications'); setIsMobileMenuOpen(false); }}
                      className="block w-full text-left px-4 py-4 rounded-lg text-black dark:text-white hover:text-black dark:hover:text-white hover:bg-gray-50/10 dark:hover:bg-gray-900/10 transition-all duration-200 min-h-[48px] text-lg font-medium"
                    >
                      Certifications
                    </button>
                    
                    {/* Financial Excellence */}
                    <div className="px-6 py-2 text-sm font-semibold text-black dark:text-white">Financial Excellence</div>
                    <button onClick={() => { scrollToSection('#cert-cfa-level-i-candidate'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-6 py-3 rounded-lg text-sm text-foreground/80 hover:text-primary hover:bg-white/5 transition-all duration-200">
                      <div className="font-semibold text-gray-900 dark:text-white mb-1">CFA Level I Candidate</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">CFA Institute • 2025</div>
                    </button>
                    <button onClick={() => { scrollToSection('#cert-discounted-cash-flow-analysis'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-6 py-3 rounded-lg text-sm text-foreground/80 hover:text-primary hover:bg-white/5 transition-all duration-200">
                      <div className="font-semibold text-gray-900 dark:text-white mb-1">DCF Analysis</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Training the Street • 2024</div>
                    </button>
                    <button onClick={() => { scrollToSection('#cert-financial-planning-1'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-6 py-3 rounded-lg text-sm text-foreground/80 hover:text-primary hover:bg-white/5 transition-all duration-200">
                      <div className="font-semibold text-gray-900 dark:text-white mb-1">Financial Planning 1</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">CSI • 2023</div>
                    </button>
                    <button onClick={() => { scrollToSection('#cert-certificate-in-financial-services-advice'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-6 py-3 rounded-lg text-sm text-foreground/80 hover:text-primary hover:bg-white/5 transition-all duration-200">
                      <div className="font-semibold text-gray-900 dark:text-white mb-1">Certificate in Financial Services Advice</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">CSI • 2022</div>
                    </button>
                    <button onClick={() => { scrollToSection('#cert-personal-financial-service-advice'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-6 py-3 rounded-lg text-sm text-foreground/80 hover:text-primary hover:bg-white/5 transition-all duration-200">
                      <div className="font-semibold text-gray-900 dark:text-white mb-1">Personal Financial Service Advice</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">CSI • 2021</div>
                    </button>
                    <button onClick={() => { scrollToSection('#cert-canadian-securities-course'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-6 py-3 rounded-lg text-sm text-foreground/80 hover:text-primary hover:bg-white/5 transition-all duration-200">
                      <div className="font-semibold text-gray-900 dark:text-white mb-1">Canadian Securities Course</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">CSI • 2021</div>
                    </button>
                    <button onClick={() => { scrollToSection('#cert-financial---valuation-modeling'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-6 py-3 rounded-lg text-sm text-foreground/80 hover:text-primary hover:bg-white/5 transition-all duration-200">
                      <div className="font-semibold text-gray-900 dark:text-white mb-1">Financial & Valuation Modeling</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Wall Street Prep • 2020</div>
                    </button>
                    <button onClick={() => { scrollToSection('#cert-investment-funds-in-canada'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-6 py-3 rounded-lg text-sm text-foreground/80 hover:text-primary hover:bg-white/5 transition-all duration-200">
                      <div className="font-semibold text-gray-900 dark:text-white mb-1">Investment Funds in Canada</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">CSI • 2020</div>
                    </button>
                    <button onClick={() => { scrollToSection('#cert-bloomberg-market-concepts-certificate'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-6 py-3 rounded-lg text-sm text-foreground/80 hover:text-primary hover:bg-white/5 transition-all duration-200">
                      <div className="font-semibold text-gray-900 dark:text-white mb-1">Bloomberg Market Concepts Certificate</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Bloomberg • 2020</div>
                    </button>
                    <button onClick={() => { scrollToSection('#cert-personal-finance-essentials'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-6 py-3 rounded-lg text-sm text-foreground/80 hover:text-primary hover:bg-white/5 transition-all duration-200">
                      <div className="font-semibold text-gray-900 dark:text-white mb-1">Personal Finance Essentials</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">McGill University • 2020</div>
                    </button>
                    
                    {/* Data & Technology */}
                    <div className="px-6 py-2 text-sm font-semibold text-black dark:text-white">Data & Technology</div>
                    <button onClick={() => { scrollToSection('#cert-data-analytics-professional'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-6 py-3 rounded-lg text-sm text-foreground/80 hover:text-primary hover:bg-white/5 transition-all duration-200">
                      <div className="font-semibold text-gray-900 dark:text-white mb-1">Data Analytics Professional</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Google • 2023</div>
                    </button>
                    <button onClick={() => { scrollToSection('#cert-python-for-everybody'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-6 py-3 rounded-lg text-sm text-foreground/80 hover:text-primary hover:bg-white/5 transition-all duration-200">
                      <div className="font-semibold text-gray-900 dark:text-white mb-1">Python for Everybody</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">University of Michigan • 2023</div>
                    </button>
                    <button onClick={() => { scrollToSection('#cert-data-visualization-with-tableau'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-6 py-3 rounded-lg text-sm text-foreground/80 hover:text-primary hover:bg-white/5 transition-all duration-200">
                      <div className="font-semibold text-gray-900 dark:text-white mb-1">Data Visualization with Tableau</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">UC Davis • 2023</div>
                    </button>
                    <button onClick={() => { scrollToSection('#cert-machine-learning'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-6 py-3 rounded-lg text-sm text-foreground/80 hover:text-primary hover:bg-white/5 transition-all duration-200">
                      <div className="font-semibold text-gray-900 dark:text-white mb-1">Machine Learning</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Stanford • 2020</div>
                    </button>
                    <button onClick={() => { scrollToSection('#cert-sql-for-data-science'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-6 py-3 rounded-lg text-sm text-foreground/80 hover:text-primary hover:bg-white/5 transition-all duration-200">
                      <div className="font-semibold text-gray-900 dark:text-white mb-1">SQL for Data Science</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">UC Davis • 2020</div>
                    </button>
                    <button onClick={() => { scrollToSection('#cert-power-bi-data-visualization'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-6 py-3 rounded-lg text-sm text-foreground/80 hover:text-primary hover:bg-white/5 transition-all duration-200">
                      <div className="font-semibold text-gray-900 dark:text-white mb-1">Power BI Data Visualization</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Microsoft • 2020</div>
                    </button>
                    
                    {/* Advanced Analytics */}
                    <div className="px-6 py-2 text-sm font-semibold text-black dark:text-white">Advanced Analytics</div>
                    <button onClick={() => { scrollToSection('#cert-econometrics--methods---applications'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-6 py-3 rounded-lg text-sm text-foreground/80 hover:text-primary hover:bg-white/5 transition-all duration-200">
                      <div className="font-semibold text-gray-900 dark:text-white mb-1">Econometrics: Methods & Applications</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Erasmus University • 2024</div>
                    </button>
                    <button onClick={() => { scrollToSection('#cert-matrix-algebra-for-engineers'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-6 py-3 rounded-lg text-sm text-foreground/80 hover:text-primary hover:bg-white/5 transition-all duration-200">
                      <div className="font-semibold text-gray-900 dark:text-white mb-1">Matrix Algebra for Engineers</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">HKUST • 2024</div>
                    </button>
                    <button onClick={() => { scrollToSection('#cert-introduction-to-calculus'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-6 py-3 rounded-lg text-sm text-foreground/80 hover:text-primary hover:bg-white/5 transition-all duration-200">
                      <div className="font-semibold text-gray-900 dark:text-white mb-1">Introduction to Calculus</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">University of Sydney • 2023</div>
                    </button>
                    <button onClick={() => { scrollToSection('#cert-inferential-statistics'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-6 py-3 rounded-lg text-sm text-foreground/80 hover:text-primary hover:bg-white/5 transition-all duration-200">
                      <div className="font-semibold text-gray-900 dark:text-white mb-1">Inferential Statistics</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Duke University • 2020</div>
                    </button>
                    <button onClick={() => { scrollToSection('#cert-excel-skills-for-business'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-6 py-3 rounded-lg text-sm text-foreground/80 hover:text-primary hover:bg-white/5 transition-all duration-200">
                      <div className="font-semibold text-gray-900 dark:text-white mb-1">Excel Skills for Business</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Macquarie University • 2020</div>
                    </button>
                    
                    {/* Standardized Exam */}
                    <div className="px-6 py-2 text-sm font-semibold text-black dark:text-white">Standardized Exam</div>
                    <button onClick={() => { scrollToSection('#cert-gre-general-test'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-6 py-3 rounded-lg text-sm text-foreground/80 hover:text-primary hover:bg-white/5 transition-all duration-200">
                      <div className="font-semibold text-gray-900 dark:text-white mb-1">GRE General Test</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">ETS • 2024</div>
                    </button>
                  </div>

                  {/* Community Section */}
                  <div className="space-y-2">
                    <button
                      onClick={() => { scrollToSection('#community'); setIsMobileMenuOpen(false); }}
                      className="block w-full text-left px-4 py-4 rounded-lg text-foreground hover:text-primary hover:bg-white/10 transition-all duration-200 min-h-[48px] text-lg font-medium"
                    >
                      Community
                    </button>
                    <button onClick={() => { scrollToSection('#community-united-way'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-6 py-3 rounded-lg text-sm text-foreground/80 hover:text-primary hover:bg-white/5 transition-all duration-200">
                      <div className="font-semibold text-gray-900 dark:text-white mb-1">United Way</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Next Gen Ambassador • Kingston, ON (2020-2023)</div>
                    </button>
                    <button onClick={() => { scrollToSection('#community-royal-bank-of-canada'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-6 py-3 rounded-lg text-sm text-foreground/80 hover:text-primary hover:bg-white/5 transition-all duration-200">
                      <div className="font-semibold text-gray-900 dark:text-white mb-1">Royal Bank of Canada</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Student Ambassador • Fredericton, NB (2019-2020)</div>
                    </button>
                    <button onClick={() => { scrollToSection('#community-irving-oil-limited'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-6 py-3 rounded-lg text-sm text-foreground/80 hover:text-primary hover:bg-white/5 transition-all duration-200">
                      <div className="font-semibold text-gray-900 dark:text-white mb-1">Irving Oil Limited</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Volunteer Staff • Saint John, NB (2018)</div>
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
                    <button onClick={() => { scrollToSection('#contact'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-6 py-3 rounded-lg text-sm text-foreground/80 hover:text-primary hover:bg-white/5 transition-all duration-200">
                      <div className="font-semibold text-gray-900 dark:text-white mb-1">Email</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">tbustard@unb.ca</div>
                    </button>
                    <button onClick={() => { scrollToSection('#contact'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-6 py-3 rounded-lg text-sm text-foreground/80 hover:text-primary hover:bg-white/5 transition-all duration-200">
                      <div className="font-semibold text-gray-900 dark:text-white mb-1">Phone</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">(613) 985-1223</div>
                    </button>
                    <button onClick={() => { scrollToSection('#contact'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-6 py-3 rounded-lg text-sm text-foreground/80 hover:text-primary hover:bg-white/5 transition-all duration-200">
                      <div className="font-semibold text-gray-900 dark:text-white mb-1">Location</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Toronto, Ontario, Canada</div>
                    </button>
                  </div>

                  {/* Download Button */}
                  <button
                    onClick={() => { scrollToSection('#download'); setIsMobileMenuOpen(false); }}
                    className="block w-full text-left px-4 py-4 rounded-lg bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary/30 text-primary transition-all duration-200 text-lg font-medium"
                  >
                    Download
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