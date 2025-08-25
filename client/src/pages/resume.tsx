import { useState, useEffect } from "react";
import { useInitialPageAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Globe, Download, Printer, Linkedin, ChevronUp } from "lucide-react";
import Navigation from "@/components/navigation";

// Import logos from assets
import profileImage from "@assets/Untitled design (1)_1755896187722.png";
import unbLogo from "@assets/University_of_New_Brunswick_Logo.svg_1755912478863.png";
import bmoLogo from "@assets/BMO_Logo.svg_1755913265896.png";
import tdLogo from "@assets/Toronto-Dominion_Bank_logo.svg_1755913265896.png";
import rbcLogo from "@assets/RBC-Logo_1755913716813.png";
import unitedWayLogo from "@assets/United-Way-Logo_1755913265895.png";
import irvingLogo from "@assets/Irving_Oil.svg_1755913265895.png";
import grantThorntonLogo from "@assets/Grant_Thornton_logo_1755913265895.png";
import cfaLogo from "@assets/CFA_Institute_Logo_1755923720192.png";
import trainingTheStreetLogo from "@assets/trainning the street_1755938972014.png";

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
        // Only update if there's a significant change
        if (Math.abs(scrollY - lastKnownScrollY) > 50) {
          setShowScrollToTop(scrollY > 300);
          lastKnownScrollY = scrollY;
        }
      }, 100);
    };

    // Initial check
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
          
          
          {/* Page 1 */}
          <div className={`bg-white/95 backdrop-blur-xl border border-white/40 rounded-[2rem] p-8 sm:p-12 lg:p-16 shadow-xl mb-6 page-load-fade-in print:shadow-none print:border-0 print:rounded-none ${isPageLoaded ? 'loaded' : ''}`}>
            
            {/* Header Section */}
            <div className="mb-10">
              {/* Photo and Text */}
              <div className="flex items-center gap-10 mb-8">
                {/* Profile Photo */}
                <img 
                  src={profileImage} 
                  alt="Tyler Bustard" 
                  className="w-44 h-44 rounded-full object-cover shadow-xl ring-4 ring-white/50"
                  data-testid="img-resume-profile"
                />

                {/* Name, Title, and Description */}
                <div className="flex-1">
                  <h1 className="text-7xl font-semibold text-gray-900 mb-3 tracking-tight" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif', letterSpacing: '-0.025em' }}>
                    Tyler Bustard
                  </h1>
                  <h2 className="text-3xl text-blue-600 font-normal mb-6" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif' }}>
                    Finance & Technology Professional
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-3xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif' }}>
                    Driving <span className="font-medium text-gray-800">innovation</span> at the intersection of finance and technology. 
                    Delivering <span className="font-medium text-gray-800">exceptional results</span> through analytical expertise, strategic thinking, and client-focused solutions.
                  </p>
                </div>
              </div>
              
              {/* Contact Information - Elegant Bar */}
              <div className="bg-gray-50 rounded-2xl px-8 py-4">
                <div className="text-base text-gray-600 flex justify-center items-center flex-wrap gap-6" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif' }}>
                  <div className="flex items-center gap-1.5">
                    <Globe className="w-4 h-4 text-blue-500" />
                    <span className="font-medium">tylerbustard.ca</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Mail className="w-4 h-4 text-blue-500" />
                    <span>tbustard@unb.ca</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Phone className="w-4 h-4 text-blue-500" />
                    <span>+1 (613) 985-1223</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span>Toronto, Ontario, Canada</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <section className="mb-10">
              <h3 className="text-2xl font-semibold mb-8 text-gray-900 uppercase tracking-wider" style={{ fontSize: '1.25rem', letterSpacing: '0.08em' }}>
                Education
              </h3>
              
              <div className="flex gap-6 bg-gray-50/50 rounded-2xl p-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center border border-gray-100">
                    <img src={unbLogo} alt="UNB" className="w-9 h-9 object-contain" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h4 className="text-xl font-semibold text-gray-900">Bachelor of Business Administration - Finance Major</h4>
                    <span className="text-sm font-medium text-gray-500">2020</span>
                  </div>
                  <p className="text-blue-600 font-medium mb-1">University of New Brunswick</p>
                  <p className="text-base text-gray-500 mb-4">Saint John, New Brunswick</p>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <span className="text-blue-500 mr-2">▸</span>
                      <span className="text-base text-gray-700">Case Competitions: <span className="font-semibold text-gray-900">1st Place (CIBC)</span>, <span className="font-medium">3rd Place (TD)</span>, RBC and SLC participant</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-500 mr-2">▸</span>
                      <span className="text-base text-gray-700">Analyst and Portfolio Manager – University of New Brunswick Student Investment Fund</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-500 mr-2">▸</span>
                      <span className="text-base text-gray-700">UNB Finance Club, RBC Student Ambassador, Accredited Co-op Program</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-500 mr-2">▸</span>
                      <span className="text-base text-gray-700">Recipient of 5 Scholarship and Alumni Awards for academic merit and leadership skills, Total <span className="font-semibold text-gray-900">$47,500</span></span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Professional Experience */}
            <section className="mb-8">
              <h3 className="text-2xl font-semibold mb-8 text-gray-900 uppercase tracking-wider" style={{ fontSize: '1.25rem', letterSpacing: '0.08em' }}>
                Professional Experience
              </h3>
              
              <div className="space-y-5">
                {/* BMO Experience */}
                <div className="flex gap-5 p-5 rounded-2xl hover:bg-gray-50/50 transition-colors">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center border border-gray-100">
                      <img src={bmoLogo} alt="BMO" className="w-8 h-8 object-contain" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">Portfolio Assistant</h4>
                      <span className="text-sm font-medium text-gray-500 tabular-nums">2022 - 2023</span>
                    </div>
                    <p className="text-blue-600 font-medium mb-1">BMO Private Wealth</p>
                    <p className="text-base text-gray-500 mb-3">Toronto, Ontario</p>
                    <div className="space-y-1.5 mb-3">
                      <div className="flex items-start">
                        <span className="text-gray-400 mr-2">—</span>
                        <span className="text-base text-gray-700">Advised two Investment Counsellors managing portfolios over <span className="font-semibold text-gray-900">$100M</span> and cut preparation time by <span className="font-semibold text-gray-900">12%</span></span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-gray-400 mr-2">—</span>
                        <span className="text-base text-gray-700">Bolstered client communications, boosting response rates by <span className="font-semibold text-gray-900">9%</span> heightening client satisfaction and retention</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-100">Portfolio Management</span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-100">Client Relations</span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-100">Financial Analysis</span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-100">Excel</span>
                    </div>
                  </div>
                </div>

                {/* TD Experience */}
                <div className="flex gap-5 p-5 rounded-2xl hover:bg-gray-50/50 transition-colors">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center border border-gray-100">
                      <img src={tdLogo} alt="TD" className="w-8 h-8 object-contain" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">Financial Advisor</h4>
                      <span className="text-sm font-medium text-gray-500 tabular-nums">2021 - 2022</span>
                    </div>
                    <p className="text-blue-600 font-medium mb-1">TD Canada Trust</p>
                    <p className="text-base text-gray-500 mb-3">Kingston, Ontario</p>
                    <div className="space-y-1.5 mb-3">
                      <div className="flex items-start">
                        <span className="text-gray-400 mr-2">—</span>
                        <span className="text-base text-gray-700">Cultivated strong client relationships by assessing individual financial needs, resulting in an <span className="font-semibold text-gray-900">11% increase</span> in sales</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-gray-400 mr-2">—</span>
                        <span className="text-base text-gray-700">Exceeded sales targets, achieving a <span className="font-semibold text-gray-900">top 15%</span> performance ranking within the district</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-100">Financial Planning</span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-100">Sales</span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-100">Client Advisory</span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-100">Product Knowledge</span>
                    </div>
                  </div>
                </div>

                {/* RBC Experience */}
                <div className="flex gap-5 p-5 rounded-2xl hover:bg-gray-50/50 transition-colors">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center border border-gray-100">
                      <img src={rbcLogo} alt="RBC" className="w-8 h-8 object-contain" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">Banking Advisor</h4>
                      <span className="text-sm font-medium text-gray-500 tabular-nums">2020 - 2021</span>
                    </div>
                    <p className="text-blue-600 font-medium mb-1">Royal Bank of Canada</p>
                    <p className="text-base text-gray-500 mb-3">Kingston, Ontario</p>
                    <div className="space-y-1.5 mb-3">
                      <div className="flex items-start">
                        <span className="text-gray-400 mr-2">—</span>
                        <span className="text-base text-gray-700">Strengthened client relationships by advising on personalized solutions, increased repeat transactions by <span className="font-semibold text-gray-900">13%</span></span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-gray-400 mr-2">—</span>
                        <span className="text-base text-gray-700">Excelled in needs-based advising, boosting adoption of core products like GICs, mutual funds, and TFSAs by <span className="font-semibold text-gray-900">8%</span></span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-100">Banking Products</span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-100">Financial Advisory</span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-100">Client Relationship Management</span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-100">Digital Banking</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Page 2 */}
          <div className={`bg-white/95 backdrop-blur-xl border border-white/40 rounded-[2rem] p-8 sm:p-12 lg:p-16 shadow-xl page-load-fade-in print:shadow-none print:border-0 print:rounded-none ${isPageLoaded ? 'loaded' : ''}`}>
            
            {/* Professional Experience Continued */}
            <section className="mb-10">
              <h3 className="text-2xl font-semibold mb-8 text-gray-900 uppercase tracking-wider" style={{ fontSize: '1.25rem', letterSpacing: '0.08em' }}>
                Professional Experience (continued)
              </h3>
              
              <div className="space-y-5">
                {/* RBC Intern Experience */}
                <div className="flex gap-5 p-5 rounded-2xl hover:bg-gray-50/50 transition-colors">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center border border-gray-100">
                      <img src={rbcLogo} alt="RBC" className="w-8 h-8 object-contain" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">Client Advisor Intern</h4>
                      <span className="text-sm font-medium text-gray-500 tabular-nums">2019 - 2020</span>
                    </div>
                    <p className="text-blue-600 font-medium mb-1">Royal Bank of Canada</p>
                    <p className="text-base text-gray-500 mb-3">Fredericton, New Brunswick</p>
                    <div className="space-y-1.5 mb-3">
                      <div className="flex items-start">
                        <span className="text-gray-400 mr-2">—</span>
                        <span className="text-base text-gray-700">Resolved complex client issues, achieving a <span className="font-semibold text-gray-900">15% boost</span> in positive feedback scores for the branch</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-gray-400 mr-2">—</span>
                        <span className="text-base text-gray-700">Promoted RBC's digital banking tools, leading to a <span className="font-semibold text-gray-900">10% increase</span> in online and mobile banking adoption</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-100">Client Service</span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-100">Digital Banking</span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-100">Problem Resolution</span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-100">Customer Support</span>
                    </div>
                  </div>
                </div>

                {/* Irving Oil Marketing Intern */}
                <div className="flex gap-5 p-5 rounded-2xl hover:bg-gray-50/50 transition-colors">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center border border-gray-100">
                      <img src={irvingLogo} alt="Irving Oil" className="w-8 h-8 object-contain" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">Marketing Intern</h4>
                      <span className="text-sm font-medium text-gray-500 tabular-nums">2018</span>
                    </div>
                    <p className="text-blue-600 font-medium mb-1">Irving Oil Limited</p>
                    <p className="text-base text-gray-500 mb-3">Saint John, New Brunswick</p>
                    <div className="space-y-1.5 mb-3">
                      <div className="flex items-start">
                        <span className="text-gray-400 mr-2">—</span>
                        <span className="text-base text-gray-700">Conducted competitor analysis driving insights that improved targeted marketing by <span className="font-semibold text-gray-900">11%</span></span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-gray-400 mr-2">—</span>
                        <span className="text-base text-gray-700">Developed a Customer Lifecycle model that increased targeted promotions, boosting customer engagement by <span className="font-semibold text-gray-900">8%</span></span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-100">Market Research</span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-100">Customer Analytics</span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-100">Competitive Analysis</span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-100">Marketing Strategy</span>
                    </div>
                  </div>
                </div>

                {/* Grant Thornton Tax Return Intern */}
                <div className="flex gap-5 p-5 rounded-2xl hover:bg-gray-50/50 transition-colors">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center border border-gray-100">
                      <img src={grantThorntonLogo} alt="Grant Thornton" className="w-8 h-8 object-contain" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">Tax Return Intern</h4>
                      <span className="text-sm font-medium text-gray-500 tabular-nums">2018</span>
                    </div>
                    <p className="text-blue-600 font-medium mb-1">Grant Thornton LLP</p>
                    <p className="text-base text-gray-500 mb-3">Saint John, New Brunswick</p>
                    <div className="space-y-1.5 mb-3">
                      <div className="flex items-start">
                        <span className="text-gray-400 mr-2">—</span>
                        <span className="text-base text-gray-700">Streamlined client financial data, boosting accuracy by <span className="font-semibold text-gray-900">10%</span> ensuring timely submission of 100+ tax returns</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-gray-400 mr-2">—</span>
                        <span className="text-base text-gray-700">Improved tax return preparation processes, cutting filing errors by <span className="font-semibold text-gray-900">15%</span></span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-100">Tax Preparation</span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-100">Financial Analysis</span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-100">Data Management</span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-100">Client Service</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Professional Certifications */}
            <section className="mb-10">
              <h3 className="text-2xl font-semibold mb-8 text-gray-900 uppercase tracking-wider" style={{ fontSize: '1.25rem', letterSpacing: '0.08em' }}>
                Professional Certifications
              </h3>
              
              <div className="space-y-4">
                <div className="flex gap-5 p-5 rounded-2xl bg-gray-50/50">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center border border-gray-100">
                      <img src={cfaLogo} alt="CFA" className="w-8 h-8 object-contain" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">CFA Level I Candidate</h4>
                      <span className="text-sm font-medium text-gray-500 tabular-nums">2025</span>
                    </div>
                    <p className="text-blue-600 font-medium mb-2">CFA Institute</p>
                    <p className="text-base text-gray-600">Comprehensive training in investment analysis, portfolio management, and ethical standards</p>
                  </div>
                </div>

                <div className="flex gap-5 p-5 rounded-2xl bg-gray-50/50">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center border border-gray-100">
                      <img src={trainingTheStreetLogo} alt="Training the Street" className="w-8 h-8 object-contain" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">Discounted Cash Flow Analysis</h4>
                      <span className="text-sm font-medium text-gray-500 tabular-nums">2024</span>
                    </div>
                    <p className="text-blue-600 font-medium mb-1.5">Training the Street</p>
                    <p className="text-base text-gray-600">Advanced financial modeling techniques for valuation using discounted cash flow methodology</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Community Leadership & Volunteer Service */}
            <section>
              <h3 className="text-2xl font-semibold mb-8 text-gray-900 uppercase tracking-wider" style={{ fontSize: '1.25rem', letterSpacing: '0.08em' }}>
                Community
              </h3>
              
              <div className="space-y-4">
                {/* United Way */}
                <div className="flex gap-5 p-5 rounded-2xl bg-gray-50/50">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center border border-gray-100">
                      <img src={unitedWayLogo} alt="United Way" className="w-8 h-8 object-contain" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">Next Gen Ambassador</h4>
                      <span className="text-sm font-medium text-gray-500 tabular-nums">2020 - 2023</span>
                    </div>
                    <p className="text-blue-600 font-medium mb-1">United Way</p>
                    <p className="text-base text-gray-500 mb-3">Kingston, Ontario</p>
                    <div className="space-y-1.5 mb-3">
                      <div className="flex items-start">
                        <span className="text-gray-400 mr-2">—</span>
                        <span className="text-base text-gray-700">Led implementation of fundraising strategies achieving <span className="font-semibold text-gray-900">20% increase</span> in funds raised over three years</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-gray-400 mr-2">—</span>
                        <span className="text-base text-gray-700">Spearheaded engagement initiatives resulting in <span className="font-semibold text-gray-900">15% rise</span> in participation and awareness within workplace community</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-100">Fundraising Strategy</span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-100">Leadership</span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-100">Event Planning</span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-100">Community Engagement</span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-100">Stakeholder Management</span>
                    </div>
                  </div>
                </div>

              </div>
            </section>

          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          /* Page setup for exactly 2 pages */
          @page {
            margin: 0.5in;
            size: letter;
          }
          
          /* Global print settings - Apple-inspired clean design */
          body, html {
            background: white !important;
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
            margin: 0 !important;
            padding: 0 !important;
            font-size: 12pt !important;
            line-height: 1.4 !important;
            font-family: -apple-system, 'SF Pro Text', BlinkMacSystemFont, system-ui, sans-serif !important;
            letter-spacing: -0.008em !important;
            -webkit-font-smoothing: antialiased !important;
          }
          
          /* Hide navigation */
          nav, .print\\:hidden {
            display: none !important;
          }
          
          /* Clean white background */
          .min-h-screen {
            background: white !important;
            padding: 0 !important;
          }
          
          /* Container resets */
          .px-4, .sm\\:px-6, .pb-16, .pt-24 {
            padding: 0 !important;
          }
          
          .max-w-4xl {
            max-width: none !important;
            margin: 0 !important;
          }
          
          /* Resume cards - minimal Apple style */
          .bg-white\\/90 {
            background: white !important;
            border: none !important;
            border-radius: 0 !important;
            box-shadow: none !important;
            padding: 0 !important;
            margin-bottom: 0 !important;
            backdrop-filter: none !important;
          }
          
          /* Page break control */
          .bg-white\\/90:first-child {
            page-break-after: always !important;
          }
          
          /* Header section - Apple-style layout */
          .flex.items-start.gap-8 {
            display: flex !important;
            align-items: center !important;
            gap: 1.5rem !important;
            margin-bottom: 1.5rem !important;
            padding-bottom: 1rem !important;
            border-bottom: 1px solid #e5e7eb !important;
          }
          
          /* Profile photo - circular Apple style */
          .w-40.h-40 {
            width: 4rem !important;
            height: 4rem !important;
            border-radius: 50% !important;
            object-fit: cover !important;
            flex-shrink: 0 !important;
            border: 1px solid #f2f2f7 !important;
          }
          
          /* Name - Apple's clean typography */
          .text-6xl {
            font-size: 2.25rem !important;
            line-height: 1 !important;
            margin-bottom: 0.25rem !important;
            font-weight: 700 !important;
            color: #000 !important;
            letter-spacing: 0 !important;
            word-spacing: 0 !important;
            white-space: nowrap !important;
          }
          
          /* Professional title - subtle accent */
          h2.text-2xl {
            font-size: 1.15rem !important;
            line-height: 1.2 !important;
            margin-bottom: 0.5rem !important;
            color: #007AFF !important;
            font-weight: 500 !important;
            letter-spacing: -0.01em !important;
          }
          
          /* Description - refined text with emphasis on key words */
          .text-base {
            font-size: 1rem !important;
            line-height: 1.4 !important;
            color: #3C3C43 !important;
            font-weight: 400 !important;
          }
          
          /* Contact info - Apple's minimal style */
          .flex.justify-center.items-center.flex-wrap {
            justify-content: center !important;
            align-items: center !important;
            gap: 0.5rem !important;
            margin: 0 !important;
            padding: 0 !important;
            border: none !important;
          }
          
          .text-sm {
            font-size: 0.9rem !important;
            line-height: 1 !important;
            color: #8E8E93 !important;
            font-weight: 400 !important;
          }
          
          /* Hide icons for cleaner look */
          .w-4.h-4 {
            display: none !important;
          }
          
          /* Separator dots - ultra minimal */
          .mx-2 {
            margin: 0 0.4rem !important;
            color: #D1D1D6 !important;
            font-weight: 300 !important;
            font-size: 0.85rem !important;
          }
          
          /* Section headers - Apple's refined approach */
          h3.text-2xl.font-semibold,
          .text-2xl.font-semibold {
            font-size: 1.15rem !important;
            font-weight: 700 !important;
            margin: 1.5rem 0 0.75rem 0 !important;
            color: #1C1C1E !important;
            display: block !important;
            text-transform: uppercase !important;
            letter-spacing: 0.1em !important;
            padding-bottom: 0.3rem !important;
            border-bottom: 1px solid #F2F2F7 !important;
          }
          
          /* Remove divider lines in headers */
          .h-px.bg-border {
            display: none !important;
          }
          
          /* Experience entries - optimized spacing */
          .flex.gap-6 {
            display: flex !important;
            gap: 0.75rem !important;
            margin-bottom: 1.15rem !important;
            page-break-inside: avoid !important;
          }
          
          /* Company logo containers - minimal style */
          .w-12.h-12.bg-white.rounded-xl.shadow-md {
            width: 1.75rem !important;
            height: 1.75rem !important;
            background: #FAFAFA !important;
            border: none !important;
            border-radius: 0.25rem !important;
            box-shadow: none !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            flex-shrink: 0 !important;
          }
          
          /* Company logos */
          .w-8.h-8 {
            width: 1.1rem !important;
            height: 1.1rem !important;
            object-fit: contain !important;
            opacity: 0.75 !important;
          }
          
          /* Job titles - emphasis on role */
          .text-lg.font-semibold {
            font-size: 1.1rem !important;
            font-weight: 600 !important;
            color: #000 !important;
            margin-bottom: 0.1rem !important;
            letter-spacing: -0.008em !important;
          }
          
          /* Company names - subtle but recognizable */
          .text-primary.font-medium {
            color: #007AFF !important;
            font-weight: 500 !important;
            font-size: 0.95rem !important;
            margin-bottom: 0 !important;
          }
          
          /* Location text - de-emphasized */
          p.text-sm.text-muted-foreground {
            font-size: 0.9rem !important;
            color: #AEAEB2 !important;
            margin-bottom: 0.4rem !important;
            font-weight: 400 !important;
          }
          
          /* Dates - subtle but clear */
          span.text-sm.text-muted-foreground {
            font-size: 0.9rem !important;
            color: #8E8E93 !important;
            white-space: nowrap !important;
            font-weight: 400 !important;
            font-variant-numeric: tabular-nums !important;
          }
          
          /* Bullet points - emphasis on metrics */
          ul.space-y-1\\.5,
          ul.space-y-1 {
            margin: 0.4rem 0 0.5rem 0 !important;
          }
          
          ul.space-y-1\\.5 li,
          ul.space-y-1 li {
            margin: 0.15rem 0 !important;
            font-size: 0.95rem !important;
            line-height: 1.4 !important;
            color: #1C1C1E !important;
            font-weight: 400 !important;
            padding-left: 1rem !important;
            position: relative !important;
          }
          
          /* Minimalist bullet points with emphasis on numbers */
          ul li::before {
            content: "–" !important;
            position: absolute !important;
            left: 0 !important;
            color: #C7C7CC !important;
            font-weight: 300 !important;
          }
          
          /* Highlight percentages and metrics */
          ul li {
            list-style: none !important;
          }
          
          /* Make numbers stand out */
          ul li:contains("%"),
          ul li:contains("$") {
            font-weight: 500 !important;
          }
          
          /* Skills badges - refined Apple pills */
          .flex.flex-wrap.gap-1\\.5 {
            display: flex !important;
            flex-wrap: wrap !important;
            gap: 0.2rem !important;
            margin-top: 0.4rem !important;
          }
          
          /* Individual badge - ultra-minimal */
          .inline-flex.items-center.rounded-md.px-2\\.5.py-0\\.5,
          [class*="badge"] {
            display: inline-flex !important;
            align-items: center !important;
            background: transparent !important;
            color: #3C3C43 !important;
            border: 1px solid #E5E5EA !important;
            padding: 0.05rem 0.4rem !important;
            border-radius: 0.6rem !important;
            font-size: 0.8rem !important;
            font-weight: 500 !important;
            white-space: nowrap !important;
            letter-spacing: 0.015em !important;
          }
          
          /* Section spacing for perfect 2-page layout */
          .mb-8 {
            margin-bottom: 1.25rem !important;
          }
          
          .mb-6 {
            margin-bottom: 0.75rem !important;
          }
          
          .space-y-6 > * + * {
            margin-top: 0.85rem !important;
          }
          
          /* Strategic page break - after RBC Banking Advisor */
          .space-y-6 > div:nth-child(3) {
            page-break-after: always !important;
            margin-bottom: 0 !important;
          }
          
          /* Apple-inspired color palette */
          .text-muted-foreground {
            color: #8E8E93 !important;
          }
          
          .text-primary {
            color: #007AFF !important;
          }
          
          .text-foreground {
            color: #000000 !important;
          }
          
          /* Maintain font weights */
          h1, h2, h3, h4, h5, h6 {
            font-weight: inherit !important;
          }
          
          /* Emphasis on key achievements */
          /* Education highlights */
          ul li:contains("1st Place"),
          ul li:contains("$47,500") {
            color: #000 !important;
            font-weight: 500 !important;
          }
          
          /* Experience metrics emphasis */
          ul li:contains("100M"),
          ul li:contains("12%"),
          ul li:contains("9%"),
          ul li:contains("11%"),
          ul li:contains("15%"),
          ul li:contains("13%"),
          ul li:contains("8%"),
          ul li:contains("10%"),
          ul li:contains("20%") {
            color: #000 !important;
          }
          
          /* Ensure proper color printing */
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
        }
      `}</style>
      
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-300 ease-in-out rounded-full print:hidden ${
          showScrollToTop 
            ? 'opacity-100 pointer-events-auto translate-y-0' 
            : 'opacity-0 pointer-events-none translate-y-4'
        } hover:scale-105 shadow-xl hover:shadow-2xl`}
        style={{ 
          background: 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          border: '1px solid rgba(0, 0, 0, 0.08)'
        }}
        data-testid="scroll-to-top-button"
      >
        <div className="flex items-center px-5 py-3">
          <span className="text-sm font-medium mr-3 text-gray-700">
            Back to top
          </span>
          <div className="w-8 h-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors duration-200">
            <ChevronUp size={18} />
          </div>
        </div>
      </button>
      
      {/* Footer with Sign In */}
      <footer className="relative bg-gradient-to-b from-gray-900 to-black border-t border-gray-800 py-8 transition-all duration-500 print:hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/90 font-medium">
              © {new Date().getFullYear()} Tyler Bustard. All rights reserved.
            </p>
            <button
              onClick={() => window.location.href = '/resume-upload-signin'}
              className="px-4 py-2 text-sm font-medium rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white transition-all duration-200 hover:scale-105"
              data-testid="footer-resume-signin"
            >
              Sign In
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}