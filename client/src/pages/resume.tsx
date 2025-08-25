import { useState, useEffect } from "react";
import { useInitialPageAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Globe, Download, Printer, Linkedin, ChevronUp, Briefcase, GraduationCap, Award, Heart, Target } from "lucide-react";
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
import trainingTheStreetLogo from "@assets/trainning the street_1755938972014.png";
import csiLogo from "@assets/canadian securities institute_1755923720191.png";
import etsLogo from "@assets/ETS_1755939510188.png";
import bloombergLogo from "@assets/bloomberg_1755923720190.png";
import wallStreetPrepLogo from "@assets/wall street prep_1755923720193.png";

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
        <div className="max-w-5xl mx-auto">
          
          {/* Action Buttons */}
          <div className="flex justify-end gap-3 mb-6 print:hidden">
            <Button
              onClick={() => window.print()}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
              data-testid="button-print-pdf"
            >
              <Printer className="w-4 h-4" />
              Print PDF
            </Button>
            <Button
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/Tyler_Bustard_Resume.pdf';
                link.download = 'Tyler_Bustard_Resume.pdf';
                link.click();
              }}
              className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
              data-testid="button-download"
            >
              <Download className="w-4 h-4" />
              Download
            </Button>
          </div>
          
          {/* Resume Container - Exact dimensions: 21.59cm x 55.88cm */}
          <div className={`resume-page bg-white/95 backdrop-blur-xl border border-white/40 rounded-[2rem] shadow-xl mb-6 page-load-fade-in print:shadow-none print:border-0 print:rounded-none ${isPageLoaded ? 'loaded' : ''}`}
               style={{ 
                 width: '21.59cm',
                 height: '55.88cm',
                 padding: '2.54cm 1.27cm', // Top/Bottom: 2.54cm, Left/Right: 1.27cm
                 margin: '0 auto',
                 boxSizing: 'border-box',
                 overflow: 'hidden'
               }}>
            
            {/* Header Section - Compact and Professional */}
            <div className="mb-4">
              <div className="flex items-start gap-4 mb-3">
                {/* Profile Photo */}
                <img 
                  src={profileImage} 
                  alt="Tyler Bustard" 
                  className="w-24 h-24 rounded-2xl object-cover shadow-lg ring-2 ring-white/50"
                  data-testid="img-resume-profile"
                />

                {/* Name and Contact Info */}
                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-gray-900 mb-1 tracking-tight" 
                      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif' }}>
                    Tyler Bustard
                  </h1>
                  <h2 className="text-lg text-blue-600 font-medium mb-2">
                    Finance & Technology Professional
                  </h2>
                  
                  {/* Contact Bar - Compact */}
                  <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-600">
                    <div className="flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-blue-500" />
                      <span>tbustard@unb.ca</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-blue-500" />
                      <span>+1 (613) 985-1223</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5 text-blue-500" />
                      <span>tylerbustard.ca</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-blue-500" />
                      <span>Toronto, Ontario</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Summary - ATS Optimized */}
              <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-xl p-4 border border-blue-100/50">
                <p className="text-sm leading-relaxed text-gray-700">
                  <span className="font-semibold">Strategic Finance Professional</span> with <span className="font-semibold">6+ years</span> driving <span className="font-medium">innovation</span> at the intersection of <span className="font-medium">capital markets, wealth management, AI technology,</span> and <span className="font-medium">data analytics</span>. Proven track record of <span className="font-medium">optimizing portfolio performance</span>, <span className="font-medium">enhancing client relationships</span>, and <span className="font-medium">implementing AI-driven solutions</span> that boost operational efficiency by up to <span className="font-semibold">15%</span>.
                </p>
              </div>
            </div>

            {/* Education Section */}
            <section className="mb-4">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-5 h-5 text-blue-600" />
                <h3 className="text-base font-bold text-gray-900 uppercase tracking-wider">Education</h3>
              </div>
              
              <div className="bg-white rounded-xl border border-gray-200 p-3 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center border border-blue-200">
                      <img src={unbLogo} alt="UNB" className="w-7 h-7 object-contain" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-sm font-bold text-gray-900">Bachelor of Business Administration</h4>
                        <p className="text-xs text-blue-600 font-semibold">Finance Major • University of New Brunswick</p>
                      </div>
                      <span className="text-xs font-medium text-gray-500 bg-gray-50 px-1.5 py-0.5 rounded">2016-2020</span>
                    </div>
                    <ul className="space-y-0.5">
                      <li className="text-sm text-gray-700 flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span><span className="font-semibold">1st Place</span> CIBC Capital Markets Case Competition</span>
                      </li>
                      <li className="text-sm text-gray-700 flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>UNB Student Investment Fund <span className="font-semibold">Portfolio Manager</span></span>
                      </li>
                      <li className="text-sm text-gray-700 flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span><span className="font-semibold">$47,500</span> in Scholarship Awards</span>
                      </li>
                      <li className="text-sm text-gray-700 flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span><span className="font-semibold">3rd Place</span> TD Securities Case Competition</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Professional Experience Section */}
            <section className="mb-4">
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="w-5 h-5 text-blue-600" />
                <h3 className="text-base font-bold text-gray-900 uppercase tracking-wider">Professional Experience</h3>
              </div>
              
              <div className="space-y-3">
                {/* Fiscal.ai - NEW */}
                <div className="bg-white rounded-xl border border-gray-200 p-3 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center border border-gray-200">
                        <img src={fiscalAiLogo} alt="Fiscal.ai" className="w-7 h-7 object-contain" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="text-sm font-bold text-gray-900">Equity Analyst</h4>
                          <p className="text-xs text-blue-600 font-semibold">Fiscal.ai • Toronto, ON</p>
                        </div>
                        <span className="text-xs font-medium text-gray-500 bg-gray-50 px-1.5 py-0.5 rounded">2023-Present</span>
                      </div>
                      <ul className="space-y-0.5 mb-2">
                        <li className="text-sm text-gray-700 flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span>Analyze and compile public company financial statements, cutting reporting turnaround by <span className="font-semibold">13%</span></span>
                        </li>
                        <li className="text-sm text-gray-700 flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span>Collaborate with product and engineering to implement <span className="font-semibold">AI-driven data features</span>, boosting adoption by <span className="font-semibold">12%</span></span>
                        </li>
                      </ul>
                      <div className="flex flex-wrap gap-1">
                        {['Financial Analysis', 'AI Integration', 'Data Analytics', 'Python', 'SQL'].map(skill => (
                          <span key={skill} className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* BMO Private Wealth */}
                <div className="bg-white rounded-xl border border-gray-200 p-3 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center border border-blue-200">
                        <img src={bmoLogo} alt="BMO" className="w-7 h-7 object-contain" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="text-sm font-bold text-gray-900">Portfolio Assistant</h4>
                          <p className="text-xs text-blue-600 font-semibold">BMO Private Wealth • Toronto, ON</p>
                        </div>
                        <span className="text-xs font-medium text-gray-500 bg-gray-50 px-1.5 py-0.5 rounded">2022-2023</span>
                      </div>
                      <ul className="space-y-0.5 mb-2">
                        <li className="text-sm text-gray-700 flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span>Advised Investment Counsellors managing <span className="font-semibold">$100M+ AUM</span>, reducing preparation time by <span className="font-semibold">12%</span></span>
                        </li>
                        <li className="text-sm text-gray-700 flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span>Bolstered client communications, boosting response rates by <span className="font-semibold">9%</span>, heightening client satisfaction and retention</span>
                        </li>
                      </ul>
                      <div className="flex flex-wrap gap-1">
                        {['Portfolio Management', 'Wealth Management', 'Client Relations', 'Financial Modeling', 'Advanced Excel'].map(skill => (
                          <span key={skill} className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* TD Canada Trust */}
                <div className="bg-white rounded-xl border border-gray-200 p-3 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center border border-green-200">
                        <img src={tdLogo} alt="TD" className="w-7 h-7 object-contain" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="text-sm font-bold text-gray-900">Financial Advisor</h4>
                          <p className="text-xs text-blue-600 font-semibold">TD Canada Trust • Kingston, ON</p>
                        </div>
                        <span className="text-xs font-medium text-gray-500 bg-gray-50 px-1.5 py-0.5 rounded">2021-2022</span>
                      </div>
                      <ul className="space-y-0.5 mb-2">
                        <li className="text-sm text-gray-700 flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span>Cultivated strong client relationships, achieving <span className="font-semibold">11% sales increase</span> through needs-based advisory</span>
                        </li>
                        <li className="text-sm text-gray-700 flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span>Exceeded targets, achieving <span className="font-semibold">top 15%</span> performance ranking within district</span>
                        </li>
                      </ul>
                      <div className="flex flex-wrap gap-1">
                        {['Financial Planning', 'Sales', 'Investment Advisory', 'Compliance', 'CRM'].map(skill => (
                          <span key={skill} className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Co-op Experience Section - Grouped */}
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-200 p-4">
                  <h4 className="text-xs font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded font-semibold">CO-OP</span>
                    <span className="text-xs">Early Career Experience</span>
                  </h4>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {/* RBC Banking */}
                    <div className="bg-white rounded-lg p-2 border border-gray-200 hover:shadow-sm transition-all duration-200">
                      <div className="flex items-start gap-2">
                        <div className="flex-shrink-0">
                          <div className="w-7 h-7 bg-blue-50 rounded flex items-center justify-center">
                            <img src={rbcLogo} alt="RBC" className="w-5 h-5 object-contain" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="text-xs font-bold text-gray-900">Banking Advisor</h5>
                          <p className="text-xs text-gray-600">RBC • Kingston, ON • 2020-2021</p>
                          <p className="text-xs text-gray-700 mt-1">Strengthened client relationships, +13% repeat business</p>
                        </div>
                      </div>
                    </div>

                    {/* RBC Client Advisor */}
                    <div className="bg-white rounded-lg p-2 border border-gray-200 hover:shadow-sm transition-all duration-200">
                      <div className="flex items-start gap-2">
                        <div className="flex-shrink-0">
                          <div className="w-7 h-7 bg-blue-50 rounded flex items-center justify-center">
                            <img src={rbcLogo} alt="RBC" className="w-5 h-5 object-contain" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="text-xs font-bold text-gray-900">Client Advisor Intern</h5>
                          <p className="text-xs text-gray-600">RBC • Fredericton, NB • 2019-2020</p>
                          <p className="text-xs text-gray-700 mt-1">Resolved complex issues, +15% satisfaction scores</p>
                        </div>
                      </div>
                    </div>

                    {/* Irving Oil */}
                    <div className="bg-white rounded-lg p-2 border border-gray-200 hover:shadow-sm transition-all duration-200">
                      <div className="flex items-start gap-2">
                        <div className="flex-shrink-0">
                          <div className="w-7 h-7 bg-red-50 rounded flex items-center justify-center">
                            <img src={irvingLogo} alt="Irving" className="w-5 h-5 object-contain" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="text-xs font-bold text-gray-900">Marketing Intern</h5>
                          <p className="text-xs text-gray-600">Irving Oil • Saint John, NB • 2018</p>
                          <p className="text-xs text-gray-700 mt-1">Conducted competitor analysis, +11% targeted reach</p>
                        </div>
                      </div>
                    </div>

                    {/* Grant Thornton */}
                    <div className="bg-white rounded-lg p-2 border border-gray-200 hover:shadow-sm transition-all duration-200">
                      <div className="flex items-start gap-2">
                        <div className="flex-shrink-0">
                          <div className="w-7 h-7 bg-purple-50 rounded flex items-center justify-center">
                            <img src={grantThorntonLogo} alt="Grant Thornton" className="w-5 h-5 object-contain" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="text-xs font-bold text-gray-900">Tax Return Intern</h5>
                          <p className="text-xs text-gray-600">Grant Thornton LLP • Saint John, NB • 2018</p>
                          <p className="text-xs text-gray-700 mt-1">Processed 100+ returns, exceeded accuracy targets</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Professional Certifications */}
            <section className="mb-3">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-4 h-4 text-blue-600" />
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Professional Certifications</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                {/* CFA */}
                <div className="bg-white rounded-lg border border-gray-200 p-3 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 bg-blue-50 rounded flex items-center justify-center">
                      <img src={cfaLogo} alt="CFA" className="w-5 h-5 object-contain" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xs font-bold text-gray-900">CFA Level I Candidate</h4>
                      <p className="text-xs text-blue-600">CFA Institute • 2025</p>
                      <p className="text-xs text-gray-600 mt-0.5">Investment Analysis & Ethics</p>
                    </div>
                  </div>
                </div>

                {/* Training the Street */}
                <div className="bg-white rounded-lg border border-gray-200 p-3 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 bg-green-50 rounded flex items-center justify-center">
                      <img src={trainingTheStreetLogo} alt="TTS" className="w-5 h-5 object-contain" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xs font-bold text-gray-900">Discounted Cash Flow Analysis</h4>
                      <p className="text-xs text-blue-600">Training the Street • 2024</p>
                      <p className="text-xs text-gray-600 mt-0.5">Advanced Financial Modeling</p>
                    </div>
                  </div>
                </div>

                {/* GRE */}
                <div className="bg-white rounded-lg border border-gray-200 p-3 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 bg-purple-50 rounded flex items-center justify-center">
                      <img src={etsLogo} alt="ETS" className="w-5 h-5 object-contain" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xs font-bold text-gray-900">GRE Exam</h4>
                      <p className="text-xs text-blue-600">Educational Testing Service • 2023</p>
                      <p className="text-xs text-gray-600 mt-0.5">Score: 325 (Q: 165, V: 160)</p>
                    </div>
                  </div>
                </div>

                {/* Bloomberg */}
                <div className="bg-white rounded-lg border border-gray-200 p-3 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 bg-orange-50 rounded flex items-center justify-center">
                      <img src={bloombergLogo} alt="Bloomberg" className="w-5 h-5 object-contain" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xs font-bold text-gray-900">Bloomberg Market Concepts</h4>
                      <p className="text-xs text-blue-600">Bloomberg LP • 2020</p>
                      <p className="text-xs text-gray-600 mt-0.5">Market Data & Analytics</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Training - Categorized */}
              <div className="mt-2 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-3 border border-gray-200">
                <p className="text-xs font-semibold text-gray-700 mb-2">Additional Certifications & Training:</p>
                <div className="grid grid-cols-2 gap-2">
                  {/* Finance & Investment */}
                  <div className="bg-white rounded p-2 border border-gray-100">
                    <div className="flex items-center justify-between mb-1">
                      <h5 className="text-xs font-semibold text-gray-800">Finance & Investment</h5>
                      <span className="text-xs font-bold text-blue-600">5</span>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-6 h-6 bg-blue-50 rounded flex items-center justify-center">
                        <img src={cfaLogo} alt="CFA" className="w-4 h-4 object-contain" />
                      </div>
                      <div className="w-6 h-6 bg-green-50 rounded flex items-center justify-center">
                        <img src={trainingTheStreetLogo} alt="TTS" className="w-4 h-4 object-contain" />
                      </div>
                      <div className="w-6 h-6 bg-red-50 rounded flex items-center justify-center">
                        <img src={csiLogo} alt="CSI" className="w-4 h-4 object-contain" />
                      </div>
                      <div className="w-6 h-6 bg-gray-50 rounded flex items-center justify-center">
                        <span className="text-xs font-bold text-gray-600">+2</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Technology & Data */}
                  <div className="bg-white rounded p-2 border border-gray-100">
                    <div className="flex items-center justify-between mb-1">
                      <h5 className="text-xs font-semibold text-gray-800">Technology & Data</h5>
                      <span className="text-xs font-bold text-blue-600">4</span>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-6 h-6 bg-orange-50 rounded flex items-center justify-center">
                        <img src={bloombergLogo} alt="Bloomberg" className="w-4 h-4 object-contain" />
                      </div>
                      <div className="w-6 h-6 bg-blue-50 rounded flex items-center justify-center">
                        <span className="text-xs font-bold text-blue-600">G</span>
                      </div>
                      <div className="w-6 h-6 bg-yellow-50 rounded flex items-center justify-center">
                        <span className="text-xs font-bold text-yellow-600">AWS</span>
                      </div>
                      <div className="w-6 h-6 bg-gray-50 rounded flex items-center justify-center">
                        <span className="text-xs font-bold text-gray-600">+1</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Testing & Education */}
                  <div className="bg-white rounded p-2 border border-gray-100">
                    <div className="flex items-center justify-between mb-1">
                      <h5 className="text-xs font-semibold text-gray-800">Testing & Education</h5>
                      <span className="text-xs font-bold text-blue-600">2</span>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-6 h-6 bg-purple-50 rounded flex items-center justify-center">
                        <img src={etsLogo} alt="ETS" className="w-4 h-4 object-contain" />
                      </div>
                      <div className="w-6 h-6 bg-gray-50 rounded flex items-center justify-center">
                        <span className="text-xs font-bold text-gray-600">GMAT</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Business Management */}
                  <div className="bg-white rounded p-2 border border-gray-100">
                    <div className="flex items-center justify-between mb-1">
                      <h5 className="text-xs font-semibold text-gray-800">Business Management</h5>
                      <span className="text-xs font-bold text-blue-600">1</span>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-6 h-6 bg-green-50 rounded flex items-center justify-center">
                        <span className="text-xs font-bold text-green-600">PMP</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Community Leadership */}
            <section className="mb-3">
              <div className="flex items-center gap-2 mb-3">
                <Heart className="w-4 h-4 text-blue-600" />
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Community Leadership</h3>
              </div>
              
              <div className="bg-white rounded-xl border border-gray-200 p-3 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center border border-red-200">
                      <img src={unitedWayLogo} alt="United Way" className="w-7 h-7 object-contain" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-sm font-bold text-gray-900">Next Gen Ambassador</h4>
                        <p className="text-xs text-blue-600 font-semibold">United Way • Kingston, ON</p>
                      </div>
                      <span className="text-xs font-medium text-gray-500 bg-gray-50 px-1.5 py-0.5 rounded">2020-2023</span>
                    </div>
                    <ul className="space-y-0.5 mb-2">
                      <li className="text-sm text-gray-700 flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Led fundraising strategies, achieving <span className="font-semibold">20% increase</span> in funds raised over three years</span>
                      </li>
                      <li className="text-sm text-gray-700 flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Spearheaded engagement initiatives, resulting in <span className="font-semibold">15% rise</span> in workplace participation</span>
                      </li>
                    </ul>
                    <div className="flex flex-wrap gap-1">
                      {['Fundraising Strategy', 'Leadership', 'Event Planning', 'Community Engagement', 'Stakeholder Management'].map(skill => (
                        <span key={skill} className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Community - Two Cards */}
              <div className="mt-2 grid grid-cols-2 gap-2">
                <div className="bg-white rounded-lg p-2 border border-gray-200 hover:shadow-sm transition-shadow">
                  <div className="flex items-start gap-2">
                    <div className="flex-shrink-0">
                      <div className="w-7 h-7 bg-blue-50 rounded flex items-center justify-center">
                        <img src={rbcLogo} alt="RBC" className="w-5 h-5 object-contain" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h5 className="text-xs font-bold text-gray-900">Student Ambassador</h5>
                      <p className="text-xs text-gray-600">Royal Bank of Canada • 2019-2020</p>
                      <p className="text-xs text-gray-700 mt-1">Increased student engagement by 25% through campus events</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-2 border border-gray-200 hover:shadow-sm transition-shadow">
                  <div className="flex items-start gap-2">
                    <div className="flex-shrink-0">
                      <div className="w-7 h-7 bg-red-50 rounded flex items-center justify-center">
                        <img src={irvingLogo} alt="Irving" className="w-5 h-5 object-contain" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h5 className="text-xs font-bold text-gray-900">Volunteer Staff</h5>
                      <p className="text-xs text-gray-600">Irving Oil Limited • 2018</p>
                      <p className="text-xs text-gray-700 mt-1">Organized engaging activities for 100+ children at community events</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 bg-white/90 backdrop-blur-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 print:hidden group"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5 text-gray-700 group-hover:text-blue-600 transition-colors" />
        </button>
      )}

      {/* Print Styles - Optimized for 8.5" x 22" */}
      <style>{`
        @media print {
          @page {
            size: 21.59cm 55.88cm;
            margin: 1.27cm;
          }
          
          body, html {
            background: white !important;
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
            margin: 0 !important;
            padding: 0 !important;
          }
          
          /* Hide navigation and non-essential elements */
          nav, .print\\:hidden, button {
            display: none !important;
          }
          
          /* Reset backgrounds and containers */
          .min-h-screen {
            background: white !important;
            padding: 0 !important;
            min-height: auto !important;
          }
          
          .px-4, .sm\\:px-6, .lg\\:px-8, .pb-16, .pt-24 {
            padding: 0 !important;
          }
          
          .max-w-5xl {
            max-width: 100% !important;
            margin: 0 !important;
          }
          
          /* Resume page specific */
          .resume-page {
            background: white !important;
            border: none !important;
            border-radius: 0 !important;
            box-shadow: none !important;
            padding: 0.5in !important;
            margin: 0 !important;
            min-height: auto !important;
            page-break-after: avoid !important;
          }
          
          /* Typography adjustments */
          h1 { font-size: 28pt !important; }
          h2 { font-size: 16pt !important; }
          h3 { font-size: 11pt !important; }
          h4 { font-size: 10pt !important; }
          p, li, span { font-size: 9pt !important; }
          .text-xs { font-size: 8pt !important; }
          .text-sm { font-size: 9pt !important; }
          .text-base { font-size: 10pt !important; }
          
          /* Ensure colors print */
          .bg-gradient-to-r, .bg-gradient-to-br {
            background: #f3f4f6 !important;
          }
          
          .text-blue-600 { color: #2563eb !important; }
          .text-blue-500 { color: #3b82f6 !important; }
          .bg-blue-50 { background-color: #eff6ff !important; }
          .border-blue-200 { border-color: #bfdbfe !important; }
          
          /* Profile image adjustments */
          img {
            print-color-adjust: exact !important;
            -webkit-print-color-adjust: exact !important;
          }
          
          /* Section spacing */
          section {
            margin-bottom: 0.4in !important;
            page-break-inside: avoid !important;
          }
          
          /* Keep elements together */
          .rounded-xl, .rounded-lg {
            page-break-inside: avoid !important;
          }
          
          /* Grid and flex adjustments */
          .grid-cols-2 { grid-template-columns: repeat(2, 1fr) !important; }
          .grid-cols-3 { grid-template-columns: repeat(3, 1fr) !important; }
          
          /* Remove hover effects */
          .hover\\:shadow-md:hover,
          .hover\\:shadow-xl:hover,
          .hover\\:scale-110:hover {
            transform: none !important;
            box-shadow: none !important;
          }
        }
      `}</style>
    </div>
  );
}