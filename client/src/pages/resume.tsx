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
import trainingTheStreetLogo from "@assets/trainning the street_1755938972014.png";
import etsLogo from "@assets/ETS_1755939510188.png";
import wallStreetPrepLogo from "@assets/wall street prep_1755923720193.png";
import courseraLogo from "@assets/Coursera_1755937682843.png";
import bloombergLogo from "@assets/bloomberg_1755923720190.png";
import csiLogo from "@assets/canadian securities institute_1755923720191.png";

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

  const handlePrint = () => {
    window.print();
  };

  // Co-op experiences data
  const coopExperiences = [
    { logo: rbcLogo, title: "Client Advisor Intern", company: "RBC", location: "Fredericton, NB", period: "2019-2020" },
    { logo: irvingLogo, title: "Marketing Intern", company: "Irving Oil", location: "Saint John, NB", period: "2018" },
    { logo: grantThorntonLogo, title: "Tax Return Intern", company: "Grant Thornton", location: "Saint John, NB", period: "2018" }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f5f7' }}>
      <Navigation />

      {/* Resume Container - US Letter Size */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16 pt-24">
        <div className="resume-container mx-auto">
          
          {/* Page 1 */}
          <div className={`resume-page bg-white shadow-xl mb-6 page-load-fade-in print:shadow-none ${isPageLoaded ? 'loaded' : ''}`}>
            
            {/* Header Section - Compact */}
            <div className="header-section">
              <div className="flex items-center gap-6">
                <img 
                  src={profileImage} 
                  alt="Tyler Bustard" 
                  className="w-28 h-28 rounded-2xl object-cover shadow-lg"
                  data-testid="img-resume-profile"
                />
                <div className="flex-1">
                  <h1 className="text-4xl font-bold text-gray-900 mb-1">Tyler Bustard</h1>
                  <h2 className="text-xl text-blue-600 font-medium mb-3">Finance & Technology Professional</h2>
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
                    <span className="flex items-center gap-1">
                      <Linkedin className="w-3.5 h-3.5 text-blue-500" />
                      linkedin.com/in/tylerbustard
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Summary - Keywords for ATS */}
            <section className="resume-section">
              <p className="text-sm text-gray-700 leading-relaxed">
                Innovative finance professional with 6+ years experience across <strong>investment management</strong>, <strong>wealth advisory</strong>, and <strong>AI-driven fintech</strong>. 
                Proven track record managing <strong>$100M+ portfolios</strong>, implementing <strong>data analytics solutions</strong>, and driving <strong>12-15% efficiency gains</strong>. 
                Expertise in <strong>financial modeling</strong>, <strong>Python</strong>, <strong>SQL</strong>, and <strong>client relationship management</strong>. 
                <strong>CFA Level I Candidate</strong> with strong foundation in <strong>portfolio theory</strong>, <strong>equity analysis</strong>, and <strong>risk management</strong>.
              </p>
            </section>

            {/* Education */}
            <section className="resume-section">
              <div className="section-header">
                <GraduationCap className="w-5 h-5 text-blue-600" />
                <h3 className="section-title">Education</h3>
              </div>
              
              <div className="experience-card">
                <div className="flex gap-4">
                  <img src={unbLogo} alt="UNB" className="w-10 h-10 object-contain" />
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="text-base font-semibold text-gray-900">Bachelor of Business Administration - Finance Major</h4>
                      <span className="text-sm text-gray-600">2016-2020</span>
                    </div>
                    <p className="text-sm text-blue-600 font-medium mb-2">University of New Brunswick • Saint John, NB</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li className="flex">
                        <span className="mr-2">•</span>
                        <span><strong>Case Competitions:</strong> 1st Place CIBC, 3rd Place TD, Finalist RBC & SLC</span>
                      </li>
                      <li className="flex">
                        <span className="mr-2">•</span>
                        <span><strong>Investment Fund:</strong> Portfolio Manager - UNB Student Investment Fund ($500K AUM)</span>
                      </li>
                      <li className="flex">
                        <span className="mr-2">•</span>
                        <span><strong>Awards:</strong> $47,500 in scholarships for academic excellence and leadership</span>
                      </li>
                      <li className="flex">
                        <span className="mr-2">•</span>
                        <span><strong>Activities:</strong> Finance Club Executive, RBC Student Ambassador, Co-op Program</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Professional Experience - Top 3 */}
            <section className="resume-section">
              <div className="section-header">
                <Briefcase className="w-5 h-5 text-blue-600" />
                <h3 className="section-title">Professional Experience</h3>
              </div>
              
              <div className="space-y-4">
                {/* Fiscal.ai */}
                <div className="experience-card">
                  <div className="flex gap-4">
                    <img src={fiscalAiLogo} alt="Fiscal.ai" className="w-10 h-10 object-contain rounded" />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="text-base font-semibold text-gray-900">Equity Analyst</h4>
                        <span className="text-sm text-gray-600">2023-Present</span>
                      </div>
                      <p className="text-sm text-blue-600 font-medium mb-2">Fiscal.ai • Toronto, ON</p>
                      <ul className="text-sm text-gray-700 space-y-1 mb-2">
                        <li className="flex">
                          <span className="mr-2">•</span>
                          <span>Analyze and compile public company financial statements, cutting reporting turnaround by <strong>13%</strong></span>
                        </li>
                        <li className="flex">
                          <span className="mr-2">•</span>
                          <span>Collaborate with product and engineering to implement AI-driven data features boosting adoption by <strong>12%</strong></span>
                        </li>
                      </ul>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="secondary" className="text-xs">Financial Analysis</Badge>
                        <Badge variant="secondary" className="text-xs">AI/ML</Badge>
                        <Badge variant="secondary" className="text-xs">Python</Badge>
                        <Badge variant="secondary" className="text-xs">Data Analytics</Badge>
                      </div>
                    </div>
                  </div>
                </div>

                {/* BMO */}
                <div className="experience-card">
                  <div className="flex gap-4">
                    <img src={bmoLogo} alt="BMO" className="w-10 h-10 object-contain" />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="text-base font-semibold text-gray-900">Portfolio Assistant</h4>
                        <span className="text-sm text-gray-600">2022-2023</span>
                      </div>
                      <p className="text-sm text-blue-600 font-medium mb-2">BMO Private Wealth • Toronto, ON</p>
                      <ul className="text-sm text-gray-700 space-y-1 mb-2">
                        <li className="flex">
                          <span className="mr-2">•</span>
                          <span>Advised Investment Counsellors managing <strong>$100M+ portfolios</strong>, reduced preparation time by <strong>12%</strong></span>
                        </li>
                        <li className="flex">
                          <span className="mr-2">•</span>
                          <span>Enhanced client communications strategy, increasing response rates by <strong>9%</strong> and retention metrics</span>
                        </li>
                      </ul>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="secondary" className="text-xs">Portfolio Management</Badge>
                        <Badge variant="secondary" className="text-xs">UHNW Clients</Badge>
                        <Badge variant="secondary" className="text-xs">Financial Modeling</Badge>
                        <Badge variant="secondary" className="text-xs">Excel/VBA</Badge>
                      </div>
                    </div>
                  </div>
                </div>

                {/* TD */}
                <div className="experience-card">
                  <div className="flex gap-4">
                    <img src={tdLogo} alt="TD" className="w-10 h-10 object-contain" />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="text-base font-semibold text-gray-900">Financial Advisor</h4>
                        <span className="text-sm text-gray-600">2021-2022</span>
                      </div>
                      <p className="text-sm text-blue-600 font-medium mb-2">TD Canada Trust • Kingston, ON</p>
                      <ul className="text-sm text-gray-700 space-y-1 mb-2">
                        <li className="flex">
                          <span className="mr-2">•</span>
                          <span>Built client portfolio through needs-based advisory, achieving <strong>11% sales increase</strong></span>
                        </li>
                        <li className="flex">
                          <span className="mr-2">•</span>
                          <span>Ranked <strong>top 15%</strong> district-wide for sales performance and client satisfaction scores</span>
                        </li>
                      </ul>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="secondary" className="text-xs">Financial Planning</Badge>
                        <Badge variant="secondary" className="text-xs">Sales Excellence</Badge>
                        <Badge variant="secondary" className="text-xs">Wealth Advisory</Badge>
                        <Badge variant="secondary" className="text-xs">CRM</Badge>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Co-op Experience Summary Card */}
                <div className="coop-summary-card">
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="w-4 h-4 text-blue-600" />
                    <h4 className="text-sm font-semibold text-gray-900">Co-op & Early Career Experience</h4>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {coopExperiences.map((exp, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 bg-white rounded-lg">
                        <img src={exp.logo} alt={exp.company} className="w-8 h-8 object-contain" />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium text-gray-900 truncate">{exp.title}</p>
                          <p className="text-xs text-blue-600">{exp.company}</p>
                          <p className="text-xs text-gray-500">{exp.period}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-600 mt-2 italic">
                    Additional experience: RBC Banking Advisor (2020-2021) • Client service excellence, digital banking transformation
                  </p>
                </div>
              </div>
            </section>

          </div>

          {/* Page 2 */}
          <div className={`resume-page bg-white shadow-xl page-load-fade-in print:shadow-none ${isPageLoaded ? 'loaded' : ''}`}>
            
            {/* Professional Certifications */}
            <section className="resume-section">
              <div className="section-header">
                <Award className="w-5 h-5 text-blue-600" />
                <h3 className="section-title">Professional Certifications & Training</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {/* CFA */}
                <div className="cert-card">
                  <div className="flex items-start gap-3">
                    <img src={cfaLogo} alt="CFA" className="w-8 h-8 object-contain" />
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-gray-900">CFA Level I Candidate</h4>
                      <p className="text-xs text-blue-600">CFA Institute • 2025</p>
                      <p className="text-xs text-gray-600 mt-1">Investment analysis, portfolio management, ethics</p>
                    </div>
                  </div>
                </div>

                {/* Training the Street */}
                <div className="cert-card">
                  <div className="flex items-start gap-3">
                    <img src={trainingTheStreetLogo} alt="TTS" className="w-8 h-8 object-contain" />
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-gray-900">DCF & Valuation Modeling</h4>
                      <p className="text-xs text-blue-600">Training the Street • 2024</p>
                      <p className="text-xs text-gray-600 mt-1">Advanced financial modeling, M&A analysis</p>
                    </div>
                  </div>
                </div>

                {/* Wall Street Prep */}
                <div className="cert-card">
                  <div className="flex items-start gap-3">
                    <img src={wallStreetPrepLogo} alt="WSP" className="w-8 h-8 object-contain" />
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-gray-900">Financial Statement Modeling</h4>
                      <p className="text-xs text-blue-600">Wall Street Prep • 2024</p>
                      <p className="text-xs text-gray-600 mt-1">3-statement modeling, LBO, comps analysis</p>
                    </div>
                  </div>
                </div>

                {/* Bloomberg */}
                <div className="cert-card">
                  <div className="flex items-start gap-3">
                    <img src={bloombergLogo} alt="Bloomberg" className="w-8 h-8 object-contain" />
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-gray-900">Bloomberg Market Concepts</h4>
                      <p className="text-xs text-blue-600">Bloomberg LP • 2023</p>
                      <p className="text-xs text-gray-600 mt-1">Fixed income, equities, FX, commodities</p>
                    </div>
                  </div>
                </div>

                {/* Coursera */}
                <div className="cert-card">
                  <div className="flex items-start gap-3">
                    <img src={courseraLogo} alt="Coursera" className="w-8 h-8 object-contain" />
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-gray-900">Machine Learning for Finance</h4>
                      <p className="text-xs text-blue-600">Coursera • 2023</p>
                      <p className="text-xs text-gray-600 mt-1">Python, AI/ML applications in finance</p>
                    </div>
                  </div>
                </div>

                {/* CSI */}
                <div className="cert-card">
                  <div className="flex items-start gap-3">
                    <img src={csiLogo} alt="CSI" className="w-8 h-8 object-contain" />
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-gray-900">Canadian Securities Course</h4>
                      <p className="text-xs text-blue-600">CSI • 2021</p>
                      <p className="text-xs text-gray-600 mt-1">Securities regulation, investment products</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Technical Skills */}
            <section className="resume-section">
              <div className="section-header">
                <Award className="w-5 h-5 text-blue-600" />
                <h3 className="section-title">Technical Skills & Competencies</h3>
              </div>
              
              <div className="skills-grid">
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Financial & Analysis</h4>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">Financial Modeling</Badge>
                    <Badge variant="outline" className="text-xs">DCF Valuation</Badge>
                    <Badge variant="outline" className="text-xs">Portfolio Theory</Badge>
                    <Badge variant="outline" className="text-xs">Risk Management</Badge>
                    <Badge variant="outline" className="text-xs">Equity Research</Badge>
                    <Badge variant="outline" className="text-xs">Fixed Income</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Technology & Tools</h4>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">Python</Badge>
                    <Badge variant="outline" className="text-xs">SQL</Badge>
                    <Badge variant="outline" className="text-xs">Excel/VBA</Badge>
                    <Badge variant="outline" className="text-xs">Bloomberg Terminal</Badge>
                    <Badge variant="outline" className="text-xs">Power BI</Badge>
                    <Badge variant="outline" className="text-xs">Tableau</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Business & Strategy</h4>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">Client Relations</Badge>
                    <Badge variant="outline" className="text-xs">Wealth Management</Badge>
                    <Badge variant="outline" className="text-xs">Sales Strategy</Badge>
                    <Badge variant="outline" className="text-xs">Project Management</Badge>
                    <Badge variant="outline" className="text-xs">Stakeholder Engagement</Badge>
                    <Badge variant="outline" className="text-xs">Process Optimization</Badge>
                  </div>
                </div>
              </div>
            </section>

            {/* Community Leadership */}
            <section className="resume-section">
              <div className="section-header">
                <Users className="w-5 h-5 text-blue-600" />
                <h3 className="section-title">Community Leadership & Impact</h3>
              </div>
              
              <div className="experience-card">
                <div className="flex gap-4">
                  <img src={unitedWayLogo} alt="United Way" className="w-10 h-10 object-contain" />
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="text-base font-semibold text-gray-900">Next Gen Ambassador & Campaign Leader</h4>
                      <span className="text-sm text-gray-600">2020-2023</span>
                    </div>
                    <p className="text-sm text-blue-600 font-medium mb-2">United Way • Kingston, ON</p>
                    <ul className="text-sm text-gray-700 space-y-1 mb-2">
                      <li className="flex">
                        <span className="mr-2">•</span>
                        <span>Led fundraising strategies achieving <strong>20% increase</strong> in funds raised over three years ($150K+ total)</span>
                      </li>
                      <li className="flex">
                        <span className="mr-2">•</span>
                        <span>Spearheaded engagement initiatives resulting in <strong>15% rise</strong> in workplace participation</span>
                      </li>
                      <li className="flex">
                        <span className="mr-2">•</span>
                        <span>Organized 10+ corporate events, coordinated 50+ volunteers, presented to C-suite executives</span>
                      </li>
                    </ul>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="secondary" className="text-xs">Fundraising Strategy</Badge>
                      <Badge variant="secondary" className="text-xs">Leadership</Badge>
                      <Badge variant="secondary" className="text-xs">Event Planning</Badge>
                      <Badge variant="secondary" className="text-xs">Public Speaking</Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-3">
                <div className="community-card">
                  <h4 className="text-sm font-semibold text-gray-900">RBC Student Ambassador</h4>
                  <p className="text-xs text-gray-600">Campus recruitment, brand advocacy • 2018-2020</p>
                </div>
                <div className="community-card">
                  <h4 className="text-sm font-semibold text-gray-900">Irving Oil Community Volunteer</h4>
                  <p className="text-xs text-gray-600">Youth mentorship, STEM education • 2018</p>
                </div>
              </div>
            </section>

            {/* Key Achievements Footer */}
            <section className="achievements-footer">
              <div className="flex items-center justify-center gap-8 text-center">
                <div>
                  <p className="text-xl font-bold text-blue-600">$100M+</p>
                  <p className="text-xs text-gray-600">Portfolio Managed</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-blue-600">6+</p>
                  <p className="text-xs text-gray-600">Years Experience</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-blue-600">12-15%</p>
                  <p className="text-xs text-gray-600">Avg. Efficiency Gains</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-blue-600">7</p>
                  <p className="text-xs text-gray-600">Companies</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-blue-600">Top 15%</p>
                  <p className="text-xs text-gray-600">Sales Performance</p>
                </div>
              </div>
            </section>

          </div>

          {/* Action Buttons - Floating */}
          <div className="fixed bottom-8 right-8 flex flex-col gap-3 print:hidden">
            <Button 
              onClick={handlePrint}
              className="bg-blue-600 text-white hover:bg-blue-700 shadow-lg"
            >
              <Printer className="w-4 h-4 mr-2" />
              Print Resume
            </Button>
            {showScrollToTop && (
              <Button
                onClick={scrollToTop}
                variant="outline"
                className="bg-white shadow-lg"
              >
                <ChevronUp className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Styles for US Letter Size Resume */}
      <style jsx global>{`
        /* Resume Container - US Letter dimensions */
        .resume-container {
          max-width: 8.5in;
          margin: 0 auto;
        }

        .resume-page {
          width: 8.5in;
          min-height: 11in;
          padding: 0.5in;
          margin: 0 auto;
          position: relative;
          background: white;
          display: flex;
          flex-direction: column;
        }

        /* Section Styles */
        .resume-section {
          margin-bottom: 1.25rem;
        }

        .section-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
          padding-bottom: 0.25rem;
          border-bottom: 2px solid #e5e7eb;
        }

        .section-title {
          font-size: 1rem;
          font-weight: 700;
          color: #111827;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .header-section {
          padding-bottom: 1rem;
          margin-bottom: 1rem;
          border-bottom: 2px solid #e5e7eb;
        }

        /* Experience Cards */
        .experience-card {
          background: #f9fafb;
          padding: 0.75rem;
          border-radius: 0.5rem;
          margin-bottom: 0.75rem;
          border: 1px solid #e5e7eb;
        }

        /* Co-op Summary Card */
        .coop-summary-card {
          background: linear-gradient(135deg, #eff6ff 0%, #f3f4f6 100%);
          padding: 0.75rem;
          border-radius: 0.5rem;
          border: 1px solid #dbeafe;
        }

        /* Certification Cards */
        .cert-card {
          background: #f9fafb;
          padding: 0.625rem;
          border-radius: 0.5rem;
          border: 1px solid #e5e7eb;
        }

        /* Community Cards */
        .community-card {
          background: #f9fafb;
          padding: 0.625rem;
          border-radius: 0.5rem;
          border: 1px solid #e5e7eb;
        }

        /* Skills Grid */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        /* Achievements Footer */
        .achievements-footer {
          margin-top: auto;
          padding-top: 1rem;
          border-top: 2px solid #e5e7eb;
        }

        /* Print Styles */
        @media print {
          @page {
            size: letter;
            margin: 0;
          }

          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }

          .min-h-screen {
            background: white !important;
          }

          nav, .fixed, .print\\:hidden {
            display: none !important;
          }

          .resume-container {
            margin: 0;
            padding: 0;
          }

          .resume-page {
            margin: 0;
            box-shadow: none !important;
            page-break-after: always;
            page-break-inside: avoid;
          }

          .resume-page:last-child {
            page-break-after: auto;
          }

          /* Ensure badges print with colors */
          .bg-blue-50 {
            background-color: #eff6ff !important;
            print-color-adjust: exact;
          }

          .text-blue-600 {
            color: #2563eb !important;
            print-color-adjust: exact;
          }

          .text-blue-700 {
            color: #1d4ed8 !important;
            print-color-adjust: exact;
          }

          /* Ensure proper text sizing for print */
          body {
            font-size: 10pt !important;
          }

          h1 {
            font-size: 24pt !important;
          }

          h2 {
            font-size: 14pt !important;
          }

          h3 {
            font-size: 11pt !important;
          }

          h4 {
            font-size: 10pt !important;
          }

          .text-xs {
            font-size: 8pt !important;
          }

          .text-sm {
            font-size: 9pt !important;
          }

          .text-base {
            font-size: 10pt !important;
          }
        }

        /* Screen-only responsive adjustments */
        @media screen and (max-width: 8.5in) {
          .resume-page {
            width: 100%;
            min-height: auto;
            border-radius: 1rem;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}