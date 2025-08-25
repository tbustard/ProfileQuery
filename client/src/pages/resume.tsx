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
          
          {/* Resume Container - Designed for 8.5" x 22" */}
          <div className={`resume-page bg-white/95 backdrop-blur-xl border border-white/40 rounded-[2rem] shadow-xl mb-6 page-load-fade-in print:shadow-none print:border-0 print:rounded-none ${isPageLoaded ? 'loaded' : ''}`}
               style={{ 
                 padding: '48px',
                 minHeight: '2100px', // Optimized for 22 inches at standard DPI
                 maxWidth: '816px', // 8.5 inches at 96 DPI
                 margin: '0 auto'
               }}>
            
            {/* Header Section - Compact and Professional */}
            <div className="mb-6">
              <div className="flex items-start gap-6 mb-5">
                {/* Profile Photo */}
                <img 
                  src={profileImage} 
                  alt="Tyler Bustard" 
                  className="w-32 h-32 rounded-2xl object-cover shadow-lg ring-2 ring-white/50"
                  data-testid="img-resume-profile"
                />

                {/* Name and Contact Info */}
                <div className="flex-1">
                  <h1 className="text-5xl font-bold text-gray-900 mb-2 tracking-tight" 
                      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif' }}>
                    Tyler Bustard
                  </h1>
                  <h2 className="text-2xl text-blue-600 font-medium mb-3">
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
            <section className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wider">Education</h3>
              </div>
              
              <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-sm flex items-center justify-center border border-gray-100">
                      <img src={unbLogo} alt="UNB" className="w-8 h-8 object-contain" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-base font-bold text-gray-900">Bachelor of Business Administration</h4>
                        <p className="text-sm text-blue-600 font-semibold">Finance Major • University of New Brunswick</p>
                      </div>
                      <span className="text-sm font-medium text-gray-500 bg-gray-50 px-2 py-0.5 rounded">2016-2020</span>
                    </div>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-xs text-gray-600 mt-3">
                      <div>• <span className="font-semibold">1st Place</span> CIBC Capital Markets Case Competition</div>
                      <div>• UNB Student Investment Fund <span className="font-semibold">Portfolio Manager</span></div>
                      <div>• <span className="font-semibold">$47,500</span> in Scholarship Awards</div>
                      <div>• <span className="font-semibold">3rd Place</span> TD Securities Case Competition</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Professional Experience Section */}
            <section className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wider">Professional Experience</h3>
              </div>
              
              <div className="space-y-5">
                {/* Fiscal.ai - NEW */}
                <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-white rounded-xl shadow-md flex items-center justify-center border border-gray-200">
                        <img src={fiscalAiLogo} alt="Fiscal.ai" className="w-10 h-10 object-contain" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="text-base font-bold text-gray-900">Equity Analyst</h4>
                          <p className="text-sm text-blue-600 font-semibold">Fiscal.ai • Toronto, ON</p>
                        </div>
                        <span className="text-sm font-medium text-gray-500 bg-gray-50 px-2 py-0.5 rounded">2023-Present</span>
                      </div>
                      <ul className="space-y-1.5 mb-4">
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
                <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-white rounded-xl shadow-md flex items-center justify-center border border-blue-200">
                        <img src={bmoLogo} alt="BMO" className="w-10 h-10 object-contain" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="text-base font-bold text-gray-900">Portfolio Assistant</h4>
                          <p className="text-sm text-blue-600 font-semibold">BMO Private Wealth • Toronto, ON</p>
                        </div>
                        <span className="text-sm font-medium text-gray-500 bg-gray-50 px-2 py-0.5 rounded">2022-2023</span>
                      </div>
                      <ul className="space-y-1.5 mb-4">
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
                <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-white rounded-xl shadow-md flex items-center justify-center border border-green-200">
                        <img src={tdLogo} alt="TD" className="w-10 h-10 object-contain" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="text-base font-bold text-gray-900">Financial Advisor</h4>
                          <p className="text-sm text-blue-600 font-semibold">TD Canada Trust • Kingston, ON</p>
                        </div>
                        <span className="text-sm font-medium text-gray-500 bg-gray-50 px-2 py-0.5 rounded">2021-2022</span>
                      </div>
                      <ul className="space-y-1.5 mb-4">
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
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-200 p-7">
                  <h4 className="text-sm font-bold text-gray-900 mb-5 flex items-center gap-3">
                    <span className="bg-blue-600 text-white text-xs px-3 py-1.5 rounded-lg font-semibold tracking-wide">CO-OP</span>
                    <span className="text-base">Early Career Experience</span>
                  </h4>
                  
                  <div className="grid grid-cols-2 gap-x-5 gap-y-5">
                    {/* RBC Banking */}
                    <div className="bg-white rounded-xl p-5 border border-gray-200 hover:shadow-md transition-all duration-200">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 mt-0.5">
                          <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                            <img src={rbcLogo} alt="RBC" className="w-7 h-7 object-contain" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="text-sm font-bold text-gray-900 mb-1">Banking Advisor</h5>
                          <p className="text-xs text-gray-600 mb-2.5">RBC • Kingston, ON • 2020-2021</p>
                          <p className="text-xs text-gray-700 leading-relaxed">Strengthened client relationships, +13% repeat business</p>
                        </div>
                      </div>
                    </div>

                    {/* RBC Client Advisor */}
                    <div className="bg-white rounded-xl p-5 border border-gray-200 hover:shadow-md transition-all duration-200">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 mt-0.5">
                          <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                            <img src={rbcLogo} alt="RBC" className="w-7 h-7 object-contain" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="text-sm font-bold text-gray-900 mb-1">Client Advisor Intern</h5>
                          <p className="text-xs text-gray-600 mb-2.5">RBC • Fredericton, NB • 2019-2020</p>
                          <p className="text-xs text-gray-700 leading-relaxed">Resolved complex issues, +15% satisfaction scores</p>
                        </div>
                      </div>
                    </div>

                    {/* Irving Oil */}
                    <div className="bg-white rounded-xl p-5 border border-gray-200 hover:shadow-md transition-all duration-200">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 mt-0.5">
                          <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                            <img src={irvingLogo} alt="Irving" className="w-7 h-7 object-contain" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="text-sm font-bold text-gray-900 mb-1">Marketing Intern</h5>
                          <p className="text-xs text-gray-600 mb-2.5">Irving Oil • Saint John, NB • 2018</p>
                          <p className="text-xs text-gray-700 leading-relaxed">Conducted competitor analysis, +11% targeted reach</p>
                        </div>
                      </div>
                    </div>

                    {/* Grant Thornton */}
                    <div className="bg-white rounded-xl p-5 border border-gray-200 hover:shadow-md transition-all duration-200">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 mt-0.5">
                          <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                            <img src={grantThorntonLogo} alt="Grant Thornton" className="w-7 h-7 object-contain" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="text-sm font-bold text-gray-900 mb-1">Tax Return Intern</h5>
                          <p className="text-xs text-gray-600 mb-2.5">Grant Thornton LLP • Saint John, NB • 2018</p>
                          <p className="text-xs text-gray-700 leading-relaxed">Processed 100+ returns, exceeded accuracy targets</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Professional Certifications */}
            <section className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wider">Professional Certifications</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {/* CFA */}
                <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                      <img src={cfaLogo} alt="CFA" className="w-7 h-7 object-contain" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-gray-900 mb-1">CFA Level I Candidate</h4>
                      <p className="text-xs text-blue-600 mb-1">CFA Institute • 2025</p>
                      <p className="text-xs text-gray-600">Investment Analysis & Ethics</p>
                    </div>
                  </div>
                </div>

                {/* Training the Street */}
                <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                      <img src={trainingTheStreetLogo} alt="TTS" className="w-7 h-7 object-contain" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-gray-900 mb-1">Discounted Cash Flow Analysis</h4>
                      <p className="text-xs text-blue-600 mb-1">Training the Street • 2024</p>
                      <p className="text-xs text-gray-600">Advanced Financial Modeling</p>
                    </div>
                  </div>
                </div>

                {/* GRE */}
                <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                      <img src={etsLogo} alt="ETS" className="w-7 h-7 object-contain" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-gray-900 mb-1">GRE Exam</h4>
                      <p className="text-xs text-blue-600 mb-1">Educational Testing Service • 2023</p>
                      <p className="text-xs text-gray-600">Score: 325 (Q: 165, V: 160)</p>
                    </div>
                  </div>
                </div>

                {/* Bloomberg */}
                <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center">
                      <img src={bloombergLogo} alt="Bloomberg" className="w-7 h-7 object-contain" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-gray-900 mb-1">Bloomberg Market Concepts</h4>
                      <p className="text-xs text-blue-600 mb-1">Bloomberg LP • 2020</p>
                      <p className="text-xs text-gray-600">Market Data & Analytics</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Training - Compact */}
              <div className="mt-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-4 border border-gray-200">
                <p className="text-sm font-semibold text-gray-700 mb-3">Additional Training & Licenses:</p>
                <div className="flex flex-wrap gap-2">
                  {['Wall Street Prep Financial Modeling', 'GMAT Score: 710 (ETS)', 'Coursera Machine Learning (Stanford)', 'Google Data Analytics Certificate', 'IFIC Mutual Funds License', 'Canadian Securities Course (CSI)', 'Project Management Professional (PMP) Training', 'AWS Cloud Practitioner Essentials'].map(cert => (
                    <span key={cert} className="text-xs bg-white px-2.5 py-1 rounded-md border border-gray-200 hover:bg-blue-50 transition-colors">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* Community Leadership */}
            <section className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wider">Community Leadership</h3>
              </div>
              
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-white rounded-xl shadow-md flex items-center justify-center border border-red-200">
                      <img src={unitedWayLogo} alt="United Way" className="w-10 h-10 object-contain" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-base font-bold text-gray-900">Next Gen Ambassador</h4>
                        <p className="text-sm text-blue-600 font-semibold">United Way • Kingston, ON</p>
                      </div>
                      <span className="text-sm font-medium text-gray-500 bg-gray-50 px-2 py-0.5 rounded">2020-2023</span>
                    </div>
                    <ul className="space-y-1.5 mb-3">
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
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-5 border border-gray-200 hover:shadow-sm transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                        <img src={rbcLogo} alt="RBC" className="w-7 h-7 object-contain" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h5 className="text-sm font-bold text-gray-900">RBC Race for the Kids</h5>
                      <p className="text-xs text-gray-600 mt-1">Volunteer Coordinator • 2021</p>
                      <p className="text-xs text-gray-700 mt-2">Organized fundraising events, coordinated 50+ volunteers</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-200 hover:shadow-sm transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                        <img src={bmoLogo} alt="BMO" className="w-7 h-7 object-contain" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h5 className="text-sm font-bold text-gray-900">BMO Community Banking</h5>
                      <p className="text-xs text-gray-600 mt-1">Financial Literacy Instructor • 2022</p>
                      <p className="text-xs text-gray-700 mt-2">Taught financial planning workshops to 100+ community members</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Core Competencies - ATS Keywords */}
            <section>
              <div className="flex items-center gap-2 mb-5">
                <Target className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wider">Core Competencies</h3>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-xl p-6 border border-blue-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="grid grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg p-4 border border-gray-100">
                    <h4 className="text-sm font-bold text-gray-800 mb-3 uppercase tracking-wide">Technical Skills</h4>
                    <div className="space-y-2">
                      {['Python/SQL/VBA Programming', 'Advanced Excel & Financial Modeling', 'Data Analytics & Visualization', 'Bloomberg Terminal & Refinitiv', 'AI/Machine Learning Integration', 'API Development & Integration'].map(skill => (
                        <p key={skill} className="text-xs text-gray-700 flex items-start">
                          <span className="text-blue-500 mr-2 mt-0.5">•</span>
                          <span>{skill}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border border-gray-100">
                    <h4 className="text-sm font-bold text-gray-800 mb-3 uppercase tracking-wide">Finance Expertise</h4>
                    <div className="space-y-2">
                      {['Portfolio Management & Asset Allocation', 'Equity Research & Valuation', 'Risk Assessment & Mitigation', 'High Net Worth Wealth Management', 'Investment Banking & M&A', 'Capital Markets & Trading'].map(skill => (
                        <p key={skill} className="text-xs text-gray-700 flex items-start">
                          <span className="text-blue-500 mr-2 mt-0.5">•</span>
                          <span>{skill}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border border-gray-100">
                    <h4 className="text-sm font-bold text-gray-800 mb-3 uppercase tracking-wide">Leadership & Soft Skills</h4>
                    <div className="space-y-2">
                      {['Client Relationship Management', 'Strategic Planning & Execution', 'Team Leadership & Mentoring', 'Complex Problem Solving', 'Executive Communication', 'Agile Project Management'].map(skill => (
                        <p key={skill} className="text-xs text-gray-700 flex items-start">
                          <span className="text-blue-500 mr-2 mt-0.5">•</span>
                          <span>{skill}</span>
                        </p>
                      ))}
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