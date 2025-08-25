import { useState, useEffect } from "react";
import { useInitialPageAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Globe, Download, Printer, Linkedin, ChevronUp, Briefcase, GraduationCap } from "lucide-react";
import Navigation from "@/components/navigation";

// Import logos from assets
import profileImage from "@assets/Untitled design (1)_1755896187722.png";
import fiscalAiLogo from "@assets/fiscal_ai_logo_new.png";
import unbLogo from "@assets/University_of_New_Brunswick_Logo.svg_1755912478863.png";
import bmoLogo from "@assets/BMO_Logo.svg_1755913265896.png";
import tdLogo from "@assets/Toronto-Dominion_Bank_logo.svg_1755913265896.png";
import rbcLogo from "@assets/RBC-Logo_1755913716813.png";
import unitedWayLogo from "@assets/United-Way-Logo_1755913265895.png";
import irvingLogo from "@assets/Irving_Oil.svg_1755913265895.png";
import grantThorntonLogo from "@assets/Grant_Thornton_logo_1755913265895.png";
import cfaLogo from "@assets/CFA_Institute_Logo_1755923720192.png";
import trainingTheStreetLogo from "@assets/trainning the street_1755938972014.png";
import etsLogo from "@assets/ETS_1755939510188.png";

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

  const handlePrintResume = () => {
    window.print();
  };

  const handleDownloadResume = () => {
    // Fetch the uploaded resume
    fetch('/api/resume', {
      credentials: 'include'
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('No resume found');
        }
        return response.blob();
      })
      .then(blob => {
        // Create download link
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Tyler_Bustard_Resume.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      })
      .catch(error => {
        console.error('Error downloading resume:', error);
        // Fallback to print if no uploaded resume
        window.print();
      });
  };

  return (
    <div className="min-h-screen print:min-h-0" style={{ backgroundColor: '#f5f5f7' }}>
      <Navigation />

      {/* Resume Content - US Letter Size (8.5" x 11") */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16 pt-24 print:p-0 print:pt-0">
        {/* US Letter container: 21.59cm x 27.94cm */}
        <div className="max-w-[816px] mx-auto print:max-w-none" style={{ 
          width: '100%',
          maxWidth: '816px', // ~8.5 inches at 96 DPI
        }}>
          
          {/* Action Buttons - Hidden in print */}
          <div className="flex justify-end gap-3 mb-4 print:hidden">
            <Button
              onClick={handleDownloadResume}
              className="bg-blue-600 hover:bg-blue-700 text-white"
              data-testid="button-download-resume"
            >
              <Download size={18} className="mr-2" />
              Download PDF
            </Button>
            <Button
              onClick={handlePrintResume}
              className="bg-gray-600 hover:bg-gray-700 text-white"
              data-testid="button-print-resume"
            >
              <Printer size={18} className="mr-2" />
              Print Resume
            </Button>
          </div>
          
          {/* Page 1 - Fits US Letter */}
          <div className={`bg-white rounded-2xl shadow-xl mb-8 p-8 print:shadow-none print:border-0 print:rounded-none print:mb-0 page-load-fade-in ${isPageLoaded ? 'loaded' : ''}`}
               style={{ minHeight: '1056px' }}> {/* 11 inches at 96 DPI */}
            
            {/* Compact Header with Profile */}
            <div className="mb-6">
              <div className="flex items-start gap-6">
                {/* Profile Photo */}
                <img 
                  src={profileImage} 
                  alt="Tyler Bustard" 
                  className="w-24 h-24 rounded-2xl object-cover shadow-lg print:shadow-md"
                  data-testid="img-resume-profile"
                />

                {/* Name and Contact */}
                <div className="flex-1">
                  <h1 className="text-4xl font-bold text-gray-900 mb-1" style={{ letterSpacing: '-0.025em' }}>
                    Tyler Bustard
                  </h1>
                  <h2 className="text-xl text-blue-600 font-medium mb-3">
                    Equity Analyst | Finance & Technology Professional
                  </h2>
                  
                  {/* Contact Bar - Compact */}
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
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
                      <Globe className="w-3.5 h-3.5 text-blue-500" />
                      tylerbustard.ca
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Summary - Keywords for ATS */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 mb-6">
              <p className="text-sm leading-relaxed text-gray-700">
                <span className="font-semibold">6+ years</span> driving innovation at the intersection of <span className="font-semibold">finance, technology, and AI</span>. 
                Proven expertise in <span className="font-semibold">financial analysis, portfolio management, client relations</span>, and 
                <span className="font-semibold"> AI-driven data solutions</span>. Track record of improving operational efficiency by up to 
                <span className="font-semibold"> 15%</span> and exceeding performance targets across <span className="font-semibold">7 organizations</span>.
              </p>
            </div>

            {/* Education - Compact Card */}
            <section className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide">Education</h3>
              </div>
              
              <Card className="border-l-4 border-l-blue-600 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 p-4">
                  <img src={unbLogo} alt="UNB" className="w-12 h-12 object-contain flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-gray-900">Bachelor of Business Administration</h4>
                        <p className="text-sm text-blue-600 font-medium">University of New Brunswick</p>
                        <p className="text-sm text-gray-600">Finance Major • Dean's List • GPA: 3.7/4.3</p>
                      </div>
                      <span className="text-sm font-medium text-gray-500">2016 - 2020</span>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Professional Experience - Three Most Recent */}
            <section className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Briefcase className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide">Professional Experience</h3>
              </div>
              
              <div className="space-y-4">
                {/* Fiscal.ai - NEW */}
                <Card className="border-l-4 border-l-green-600 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4 p-4">
                    <img src={fiscalAiLogo} alt="Fiscal.ai" className="w-12 h-12 object-contain rounded-lg flex-shrink-0 bg-gray-50 p-1" />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-bold text-gray-900">Equity Analyst</h4>
                          <p className="text-sm text-green-600 font-medium">Fiscal.ai • Toronto, ON</p>
                        </div>
                        <span className="text-sm font-medium text-gray-500">2023 - Present</span>
                      </div>
                      <ul className="text-sm space-y-1 text-gray-700 mb-2">
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">•</span>
                          Analyze and compile public company financial statements, cutting reporting turnaround by <span className="font-semibold">13%</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">•</span>
                          Collaborate with product and engineering to implement AI-driven data features boosting adoption by <span className="font-semibold">12%</span>
                        </li>
                      </ul>
                      <div className="flex flex-wrap gap-1">
                        {["Financial Analysis", "AI Integration", "Data Analytics", "Python"].map(skill => (
                          <Badge key={skill} variant="secondary" className="text-xs px-2 py-0.5 bg-green-50 text-green-700 border-green-200">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>

                {/* BMO Private Wealth */}
                <Card className="border-l-4 border-l-blue-600 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4 p-4">
                    <img src={bmoLogo} alt="BMO" className="w-12 h-12 object-contain flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-bold text-gray-900">Portfolio Assistant</h4>
                          <p className="text-sm text-blue-600 font-medium">BMO Private Wealth • Toronto, ON</p>
                        </div>
                        <span className="text-sm font-medium text-gray-500">2022 - 2023</span>
                      </div>
                      <ul className="text-sm space-y-1 text-gray-700 mb-2">
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          Advised Investment Counsellors managing <span className="font-semibold">$100M+ portfolios</span>, improved efficiency by <span className="font-semibold">12%</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          Enhanced client communications, boosting response rates by <span className="font-semibold">9%</span> and retention metrics
                        </li>
                      </ul>
                      <div className="flex flex-wrap gap-1">
                        {["Portfolio Management", "Client Relations", "Financial Analysis", "Excel"].map(skill => (
                          <Badge key={skill} variant="secondary" className="text-xs px-2 py-0.5 bg-blue-50 text-blue-700 border-blue-200">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>

                {/* TD Canada Trust */}
                <Card className="border-l-4 border-l-green-500 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4 p-4">
                    <img src={tdLogo} alt="TD" className="w-12 h-12 object-contain flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-bold text-gray-900">Financial Advisor</h4>
                          <p className="text-sm text-green-600 font-medium">TD Canada Trust • Kingston, ON</p>
                        </div>
                        <span className="text-sm font-medium text-gray-500">2021 - 2022</span>
                      </div>
                      <ul className="text-sm space-y-1 text-gray-700 mb-2">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          Cultivated client relationships, achieving <span className="font-semibold">11% sales increase</span> through needs-based advising
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          Exceeded targets with <span className="font-semibold">top 15% performance</span> ranking in district
                        </li>
                      </ul>
                      <div className="flex flex-wrap gap-1">
                        {["Financial Planning", "Sales", "Client Advisory", "Product Knowledge"].map(skill => (
                          <Badge key={skill} variant="secondary" className="text-xs px-2 py-0.5 bg-green-50 text-green-700 border-green-200">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </section>

            {/* Co-op Experience - Compact Grid */}
            <section className="mb-6">
              <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-3">Co-op & Early Career Experience</h4>
              
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="grid grid-cols-2 gap-4">
                  {/* RBC Combined */}
                  <div className="flex items-start gap-3">
                    <img src={rbcLogo} alt="RBC" className="w-8 h-8 object-contain flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-xs font-bold text-gray-900">Royal Bank of Canada</p>
                      <p className="text-xs text-gray-600">Banking Advisor (2020-21)</p>
                      <p className="text-xs text-gray-600">Client Advisor Intern (2019-20)</p>
                      <p className="text-xs text-blue-600 mt-1">• 13% ↑ repeat transactions • 15% ↑ feedback scores</p>
                    </div>
                  </div>

                  {/* Irving Oil */}
                  <div className="flex items-start gap-3">
                    <img src={irvingLogo} alt="Irving" className="w-8 h-8 object-contain flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-xs font-bold text-gray-900">Irving Oil Limited</p>
                      <p className="text-xs text-gray-600">Marketing Intern (2018)</p>
                      <p className="text-xs text-blue-600 mt-1">• 11% ↑ targeted marketing • Customer lifecycle model</p>
                    </div>
                  </div>

                  {/* Grant Thornton */}
                  <div className="flex items-start gap-3 col-span-2">
                    <img src={grantThorntonLogo} alt="Grant Thornton" className="w-8 h-8 object-contain flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-xs font-bold text-gray-900">Grant Thornton LLP</p>
                      <p className="text-xs text-gray-600">Tax Return Intern (2018)</p>
                      <p className="text-xs text-blue-600 mt-1">• Processed 100+ tax returns • 15% ↓ filing errors • 10% ↑ accuracy</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Professional Certifications - Compact */}
            <section className="mb-6">
              <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide mb-3">Professional Certifications</h3>
              
              <div className="grid grid-cols-2 gap-3">
                <Card className="p-3 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3">
                    <img src={cfaLogo} alt="CFA" className="w-10 h-10 object-contain" />
                    <div>
                      <p className="text-sm font-bold text-gray-900">CFA Level 1</p>
                      <p className="text-xs text-gray-600">CFA Institute • 2023</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-3 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3">
                    <img src={trainingTheStreetLogo} alt="TTS" className="w-10 h-10 object-contain" />
                    <div>
                      <p className="text-sm font-bold text-gray-900">Financial Modeling</p>
                      <p className="text-xs text-gray-600">Training the Street • 2023</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-3 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3">
                    <img src={etsLogo} alt="ETS" className="w-10 h-10 object-contain" />
                    <div>
                      <p className="text-sm font-bold text-gray-900">GRE Certified</p>
                      <p className="text-xs text-gray-600">Score: 325 (95th %ile) • 2022</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-3 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-lg font-bold text-blue-600">15+</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">Additional Courses</p>
                      <p className="text-xs text-gray-600">Bloomberg, Coursera, McGill</p>
                    </div>
                  </div>
                </Card>
              </div>
            </section>

            {/* Community & Leadership */}
            <section>
              <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide mb-3">Community Leadership</h3>
              
              <div className="flex items-start gap-3 bg-orange-50 rounded-xl p-4">
                <img src={unitedWayLogo} alt="United Way" className="w-10 h-10 object-contain flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm font-bold text-gray-900">Community Outreach Committee Lead</p>
                  <p className="text-xs text-gray-600">United Way • RBC • Irving Oil</p>
                  <p className="text-xs text-gray-700 mt-1">
                    Led fundraising initiatives raising <span className="font-semibold">$25,000+</span> for local charities. 
                    Organized 10+ volunteer events engaging <span className="font-semibold">200+ employees</span>.
                  </p>
                </div>
              </div>
            </section>

            {/* Core Competencies - Keywords for ATS */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-xs text-gray-600 text-center">
                <span className="font-semibold">Core Competencies:</span> Financial Analysis • Portfolio Management • AI/ML Integration • Python • SQL • 
                Client Relations • Business Development • Data Analytics • Risk Management • Excel/VBA • Bloomberg Terminal • 
                Investment Research • Wealth Management • Regulatory Compliance • Strategic Planning
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-200 hover:scale-110 z-50 print:hidden"
          aria-label="Scroll to top"
          data-testid="button-scroll-to-top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          @page {
            size: letter;
            margin: 0.5in;
          }
          
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          
          .print\\:hidden {
            display: none !important;
          }
          
          .shadow-xl, .shadow-lg, .shadow-md {
            box-shadow: none !important;
          }
          
          .hover\\:shadow-lg:hover {
            box-shadow: none !important;
          }
          
          .bg-gradient-to-r {
            background: #f0f9ff !important;
          }
        }
      `}</style>
    </div>
  );
}