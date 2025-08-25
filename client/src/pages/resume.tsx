import { useState, useEffect } from "react";
import { useInitialPageAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Globe, Download, Printer, Linkedin, ChevronUp, Briefcase, GraduationCap, Award, Users } from "lucide-react";
import Navigation from "@/components/navigation";

// Import logos from assets
import profileImage from "@assets/Untitled design (1)_1755896187722.png";
import unbLogo from "@assets/University_of_New_Brunswick_Logo.svg_1755912478863.png";
import fiscalAiLogo from "@assets/fiscal_ai_logo_new.png";
import bmoLogo from "@assets/BMO_Logo.svg_1755913265896.png";
import tdLogo from "@assets/Toronto-Dominion_Bank_logo.svg_1755913265896.png";
import rbcLogo from "@assets/RBC-Logo_1755913716813.png";
import unitedWayLogo from "@assets/United-Way-Logo_1755913265895.png";
import irvingLogo from "@assets/Irving_Oil.svg_1755913265895.png";
import grantThorntonLogo from "@assets/Grant_Thornton_logo_1755913265895.png";
import cfaLogo from "@assets/CFA_Institute_Logo_1755923720192.png";
import csiLogo from "@assets/canadian securities institute_1755923720191.png";
import bloombergLogo from "@assets/bloomberg_1755923720190.png";
import trainingTheStreetLogo from "@assets/trainning the street_1755938972014.png";
import etsLogo from "@assets/ETS_1755939510188.png";
import wallStreetPrepLogo from "@assets/wall street prep_1755923720193.png";
import courseraLogo from "@assets/Coursera_1755937682843.png";
import mcgillLogo from "@assets/mcgill_1755937693386.png";

export default function Resume() {
  const isPageLoaded = useInitialPageAnimation(400);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;
    let lastKnownScrollY = 0;
    
    const handleScroll = () => {
      if (timeoutId) clearTimeout(timeoutId);
      
      timeoutId = setTimeout(() => {
        const scrollY = window.scrollY;
        if (Math.abs(scrollY - lastKnownScrollY) > 50) {
          setShowScrollToTop(scrollY > 300);
          lastKnownScrollY = scrollY;
        }
      }, 100);
    };

    setShowScrollToTop(window.scrollY > 300);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f5f7' }}>
      <Navigation />

      {/* Main Resume Content */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16 pt-24">
        <div className="max-w-[8.5in] mx-auto">
          
          {/* Resume Page - US Letter Format */}
          <div 
            className={`bg-white border border-gray-200 shadow-xl page-load-fade-in print:shadow-none print:border-0 ${isPageLoaded ? 'loaded' : ''}`}
            style={{ 
              width: '8.5in',
              minHeight: '11in',
              padding: '0.5in',
              margin: '0 auto 1rem auto'
            }}
          >
            
            {/* Compact Header with Profile */}
            <header className="flex items-start gap-6 mb-5">
              <img 
                src={profileImage} 
                alt="Tyler Bustard" 
                className="w-24 h-24 rounded-xl object-cover shadow-md"
                data-testid="img-resume-profile"
              />
              <div className="flex-1">
                <h1 className="text-4xl font-bold text-gray-900 mb-1">Tyler Bustard</h1>
                <h2 className="text-xl text-blue-600 font-medium mb-2">Finance & Technology Professional</h2>
                <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Globe className="w-3.5 h-3.5 text-blue-500" />
                    tylerbustard.ca
                  </span>
                  <span className="flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-blue-500" />
                    tbustard@unb.ca
                  </span>
                  <span className="flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-blue-500" />
                    (613) 985-1223
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-blue-500" />
                    Toronto, ON
                  </span>
                  <span className="flex items-center gap-1">
                    <Linkedin className="w-3.5 h-3.5 text-blue-500" />
                    linkedin.com/in/tylerbustard
                  </span>
                </div>
              </div>
            </header>

            {/* Executive Summary - ATS Keywords */}
            <section className="mb-5">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>6+ years</strong> driving results across <strong>fintech, wealth management, and banking</strong>. 
                Expert in <strong>financial analysis, AI integration, portfolio management</strong>, and <strong>client advisory</strong>. 
                Proven track record of <strong>revenue growth, process optimization</strong>, and <strong>digital transformation</strong> 
                delivering <strong>8-15% improvements</strong> across key metrics.
              </p>
            </section>

            {/* Education Section */}
            <section className="mb-5">
              <div className="flex items-center gap-2 mb-3 border-b border-gray-300 pb-1">
                <GraduationCap className="w-4 h-4 text-blue-600" />
                <h3 className="text-base font-bold text-gray-900 uppercase tracking-wider">Education</h3>
              </div>
              
              <div className="flex gap-3">
                <img src={unbLogo} alt="UNB" className="w-10 h-10 object-contain flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">Bachelor of Business Administration - Finance Major</h4>
                      <p className="text-sm text-blue-600">University of New Brunswick, Saint John</p>
                    </div>
                    <span className="text-sm font-medium text-gray-600">2020</span>
                  </div>
                  <ul className="mt-1.5 space-y-0.5 text-xs text-gray-700">
                    <li>• <strong>Case Competitions:</strong> 1st Place (CIBC), 3rd Place (TD), RBC & SLC participant</li>
                    <li>• <strong>Portfolio Manager</strong> – UNB Student Investment Fund | <strong>RBC Student Ambassador</strong></li>
                    <li>• <strong>$47,500 in scholarships</strong> for academic merit and leadership</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Professional Experience */}
            <section className="mb-5">
              <div className="flex items-center gap-2 mb-3 border-b border-gray-300 pb-1">
                <Briefcase className="w-4 h-4 text-blue-600" />
                <h3 className="text-base font-bold text-gray-900 uppercase tracking-wider">Professional Experience</h3>
              </div>
              
              <div className="space-y-4">
                {/* Fiscal.ai - NEW */}
                <div className="flex gap-3">
                  <img src={fiscalAiLogo} alt="Fiscal.ai" className="w-9 h-9 object-contain flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-sm font-bold text-gray-900">Equity Analyst</h4>
                        <p className="text-sm text-blue-600 font-medium">Fiscal.ai • Toronto, ON</p>
                      </div>
                      <span className="text-xs font-medium text-gray-600">2023 - Present</span>
                    </div>
                    <ul className="mt-1.5 space-y-0.5 text-xs text-gray-700">
                      <li>• Analyze and compile public company financial statements, cutting reporting turnaround by <strong>13%</strong></li>
                      <li>• Collaborate with product and engineering to implement AI-driven data features boosting adoption by <strong>12%</strong></li>
                    </ul>
                    <div className="mt-1.5 flex flex-wrap gap-1">
                      <span className="px-2 py-0.5 text-xs bg-blue-50 text-blue-700 rounded-full">Financial Analysis</span>
                      <span className="px-2 py-0.5 text-xs bg-blue-50 text-blue-700 rounded-full">AI Integration</span>
                      <span className="px-2 py-0.5 text-xs bg-blue-50 text-blue-700 rounded-full">Data Analytics</span>
                      <span className="px-2 py-0.5 text-xs bg-blue-50 text-blue-700 rounded-full">Python</span>
                    </div>
                  </div>
                </div>

                {/* BMO */}
                <div className="flex gap-3">
                  <img src={bmoLogo} alt="BMO" className="w-9 h-9 object-contain flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-sm font-bold text-gray-900">Portfolio Assistant</h4>
                        <p className="text-sm text-blue-600 font-medium">BMO Private Wealth • Toronto, ON</p>
                      </div>
                      <span className="text-xs font-medium text-gray-600">2022 - 2023</span>
                    </div>
                    <ul className="mt-1.5 space-y-0.5 text-xs text-gray-700">
                      <li>• Advised two Investment Counsellors managing portfolios over <strong>$100M</strong>, cut preparation time by <strong>12%</strong></li>
                      <li>• Enhanced client communications, boosting response rates by <strong>9%</strong> and improving retention</li>
                    </ul>
                    <div className="mt-1.5 flex flex-wrap gap-1">
                      <span className="px-2 py-0.5 text-xs bg-blue-50 text-blue-700 rounded-full">Portfolio Management</span>
                      <span className="px-2 py-0.5 text-xs bg-blue-50 text-blue-700 rounded-full">Client Relations</span>
                      <span className="px-2 py-0.5 text-xs bg-blue-50 text-blue-700 rounded-full">Excel</span>
                    </div>
                  </div>
                </div>

                {/* TD */}
                <div className="flex gap-3">
                  <img src={tdLogo} alt="TD" className="w-9 h-9 object-contain flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-sm font-bold text-gray-900">Financial Advisor</h4>
                        <p className="text-sm text-blue-600 font-medium">TD Canada Trust • Kingston, ON</p>
                      </div>
                      <span className="text-xs font-medium text-gray-600">2021 - 2022</span>
                    </div>
                    <ul className="mt-1.5 space-y-0.5 text-xs text-gray-700">
                      <li>• Cultivated strong client relationships, achieving <strong>11% sales increase</strong> through needs assessment</li>
                      <li>• Exceeded targets achieving <strong>top 15%</strong> performance ranking within district</li>
                    </ul>
                    <div className="mt-1.5 flex flex-wrap gap-1">
                      <span className="px-2 py-0.5 text-xs bg-blue-50 text-blue-700 rounded-full">Financial Planning</span>
                      <span className="px-2 py-0.5 text-xs bg-blue-50 text-blue-700 rounded-full">Sales</span>
                      <span className="px-2 py-0.5 text-xs bg-blue-50 text-blue-700 rounded-full">Client Advisory</span>
                    </div>
                  </div>
                </div>

                {/* Co-op Experiences Section */}
                <div className="bg-gray-50 rounded-lg p-3 mt-3">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Co-op & Early Career Experience</h4>
                  <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                    <div className="flex items-start gap-2">
                      <img src={rbcLogo} alt="RBC" className="w-6 h-6 object-contain flex-shrink-0 mt-0.5" />
                      <div className="text-xs">
                        <p className="font-semibold text-gray-800">Banking Advisor • RBC</p>
                        <p className="text-gray-600">Kingston, ON (2020-2021)</p>
                        <p className="text-gray-700">13% increase in repeat transactions</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <img src={rbcLogo} alt="RBC" className="w-6 h-6 object-contain flex-shrink-0 mt-0.5" />
                      <div className="text-xs">
                        <p className="font-semibold text-gray-800">Client Advisor Intern • RBC</p>
                        <p className="text-gray-600">Fredericton, NB (2019-2020)</p>
                        <p className="text-gray-700">15% boost in feedback scores</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <img src={irvingLogo} alt="Irving" className="w-6 h-6 object-contain flex-shrink-0 mt-0.5" />
                      <div className="text-xs">
                        <p className="font-semibold text-gray-800">Marketing Intern • Irving Oil</p>
                        <p className="text-gray-600">Saint John, NB (2018)</p>
                        <p className="text-gray-700">11% marketing improvement</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <img src={grantThorntonLogo} alt="GT" className="w-6 h-6 object-contain flex-shrink-0 mt-0.5" />
                      <div className="text-xs">
                        <p className="font-semibold text-gray-800">Tax Intern • Grant Thornton</p>
                        <p className="text-gray-600">Saint John, NB (2018)</p>
                        <p className="text-gray-700">100+ returns, 15% error reduction</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Professional Certifications */}
            <section className="mb-5">
              <div className="flex items-center gap-2 mb-3 border-b border-gray-300 pb-1">
                <Award className="w-4 h-4 text-blue-600" />
                <h3 className="text-base font-bold text-gray-900 uppercase tracking-wider">Professional Certifications</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {/* Left Column */}
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <img src={cfaLogo} alt="CFA" className="w-8 h-8 object-contain flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-gray-900">CFA Level II Candidate</p>
                      <p className="text-xs text-gray-600">CFA Institute • 2025</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <img src={trainingTheStreetLogo} alt="TTS" className="w-8 h-8 object-contain flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-gray-900">Financial Modeling</p>
                      <p className="text-xs text-gray-600">Training The Street • 2024</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <img src={wallStreetPrepLogo} alt="WSP" className="w-8 h-8 object-contain flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-gray-900">Excel & PowerPoint</p>
                      <p className="text-xs text-gray-600">Wall Street Prep • 2024</p>
                    </div>
                  </div>
                </div>
                
                {/* Right Column */}
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <img src={csiLogo} alt="CSI" className="w-8 h-8 object-contain flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-gray-900">CSC, CPH, WME</p>
                      <p className="text-xs text-gray-600">Canadian Securities Institute • 2021-2023</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <img src={bloombergLogo} alt="Bloomberg" className="w-8 h-8 object-contain flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-gray-900">Market Concepts (BMC)</p>
                      <p className="text-xs text-gray-600">Bloomberg • 2024</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <img src={courseraLogo} alt="Coursera" className="w-8 h-8 object-contain flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-gray-900">Data Analytics</p>
                      <p className="text-xs text-gray-600">Google Certificate • 2024</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Certifications Bar */}
              <div className="mt-2 p-2 bg-blue-50 rounded-lg">
                <p className="text-xs text-gray-700">
                  <strong>Additional:</strong> ETS GRE (323/340) • McGill Personal Finance • IFIC Mutual Funds • Excel Modeling • Python for Finance
                </p>
              </div>
            </section>

            {/* Community & Leadership */}
            <section>
              <div className="flex items-center gap-2 mb-3 border-b border-gray-300 pb-1">
                <Users className="w-4 h-4 text-blue-600" />
                <h3 className="text-base font-bold text-gray-900 uppercase tracking-wider">Community & Leadership</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-start gap-2">
                  <img src={unitedWayLogo} alt="United Way" className="w-8 h-8 object-contain flex-shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-gray-900">Community Impact Lead</p>
                    <p className="text-xs text-gray-600">United Way • Raised $5,000+</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <img src={rbcLogo} alt="RBC" className="w-8 h-8 object-contain flex-shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-gray-900">Student Ambassador</p>
                    <p className="text-xs text-gray-600">RBC • Mentored 20+ students</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <img src={unbLogo} alt="UNB" className="w-8 h-8 object-contain flex-shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-gray-900">Finance Club Executive</p>
                    <p className="text-xs text-gray-600">UNB • 100+ member engagement</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-blue-600">JDI</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-900">Youth Leadership</p>
                    <p className="text-xs text-gray-600">JDI Youth Summit • Speaker</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Core Competencies Footer - ATS Keywords */}
            <div className="mt-5 pt-3 border-t border-gray-300">
              <p className="text-xs text-gray-700">
                <strong>Core Skills:</strong> Financial Analysis • Portfolio Management • Investment Strategy • Risk Assessment • 
                Client Advisory • Wealth Management • Data Analytics • Python • SQL • Excel/VBA • Financial Modeling • 
                Business Development • Regulatory Compliance • Digital Transformation • AI/ML Integration • Agile • CRM Systems
              </p>
            </div>
          </div>

          {/* Print Button */}
          <div className="text-center mt-6 print:hidden">
            <Button
              onClick={() => window.print()}
              variant="default"
              className="gap-2"
              data-testid="button-print-resume"
            >
              <Printer className="w-4 h-4" />
              Print Resume
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center z-50 print:hidden"
          aria-label="Scroll to top"
          data-testid="button-scroll-top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          @page {
            size: letter;
            margin: 0;
          }
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          .print\\:hidden {
            display: none !important;
          }
          .print\\:shadow-none {
            box-shadow: none !important;
          }
          .print\\:border-0 {
            border: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}