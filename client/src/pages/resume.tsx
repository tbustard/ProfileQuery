import { useInitialPageAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Globe, Download, Printer, Linkedin } from "lucide-react";

// Import logos from assets
import profileImage from "@assets/Untitled design (1)_1755896187722.png";
import unbLogo from "@assets/University_of_New_Brunswick_Logo.svg_1755912478863.png";
import bmoLogo from "@assets/BMO_Logo.svg_1755913265896.png";
import tdLogo from "@assets/Toronto-Dominion_Bank_logo.svg_1755913265896.png";
import rbcLogo from "@assets/RBC-Logo_1755913716813.png";
import cfaLogo from "@assets/CFA_Institute_Logo_1755923720192.png";
import trainingTheStreetLogo from "@assets/trainning the street_1755938972014.png";

export default function Resume() {
  const isPageLoaded = useInitialPageAnimation(400);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // This would trigger a PDF download in a real implementation
    alert("PDF download functionality would be implemented here");
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f5f7' }}>
      {/* Header Actions - Hide on print */}
      <div className="print:hidden sticky top-4 z-50 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto flex justify-end gap-3">
          <Button
            onClick={handlePrint}
            variant="outline"
            size="sm"
            className="bg-white/90 backdrop-blur-md border-white/30 hover:bg-white/95"
            data-testid="button-print"
          >
            <Printer className="w-4 h-4" />
            Print
          </Button>
          <Button
            onClick={handleDownload}
            size="sm"
            className="bg-primary hover:bg-primary/90"
            data-testid="button-download"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </Button>
        </div>
      </div>

      {/* Main Resume Content */}
      <div className="px-4 sm:px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          
          {/* Page 1 */}
          <div className={`bg-white/90 backdrop-blur-md border border-white/30 rounded-[2rem] p-8 sm:p-12 shadow-2xl mb-8 page-load-fade-in print:shadow-none print:border-0 print:rounded-none ${isPageLoaded ? 'loaded' : ''}`}>
            
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row items-start gap-8 mb-12">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-[1.5rem] overflow-hidden shadow-xl ring-1 ring-black/5">
                  <img 
                    src={profileImage} 
                    alt="Tyler Bustard" 
                    className="w-full h-full object-cover object-center"
                    data-testid="img-resume-profile"
                  />
                </div>
              </div>

              {/* Header Info */}
              <div className="flex-1 space-y-6">
                <div>
                  <h1 className="text-4xl sm:text-5xl font-bold apple-heading mb-2">
                    <span className="bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent">Tyler Bustard</span>
                  </h1>
                  <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-4">
                    Finance & Technology Professional
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
                    Results-driven finance and technology professional with expertise in financial analysis, 
                    client relationship management, and strategic business solutions. Proven track record in 
                    wealth management and financial services.
                  </p>
                </div>

                {/* Contact Information */}
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="w-4 h-4" />
                    <span>tbustard@unb.ca</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="w-4 h-4" />
                    <span>+1 (506) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>New Brunswick, Canada</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Linkedin className="w-4 h-4" />
                    <span>linkedin.com/in/tylerbustard</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Experience */}
            <section className="mb-12">
              <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                Professional Experience
                <div className="h-px bg-border flex-1"></div>
              </h3>
              
              <div className="space-y-8">
                {/* BMO Experience */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center">
                      <img src={bmoLogo} alt="BMO" className="w-8 h-8 object-contain" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-lg font-semibold text-foreground">Investment Advisor</h4>
                      <span className="text-sm text-muted-foreground">2023 - Present</span>
                    </div>
                    <p className="text-primary font-medium mb-3">BMO Nesbitt Burns</p>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Managed high-net-worth client portfolios exceeding $50M in assets under management</li>
                      <li>• Provided comprehensive financial planning and investment strategies</li>
                      <li>• Achieved 15% year-over-year client acquisition growth</li>
                      <li>• Specialized in equity research and market analysis</li>
                    </ul>
                  </div>
                </div>

                {/* TD Experience */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center">
                      <img src={tdLogo} alt="TD" className="w-8 h-8 object-contain" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-lg font-semibold text-foreground">Financial Advisor</h4>
                      <span className="text-sm text-muted-foreground">2022 - 2023</span>
                    </div>
                    <p className="text-primary font-medium mb-3">TD Wealth Management</p>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Delivered personalized financial advisory services to retail and commercial clients</li>
                      <li>• Conducted comprehensive financial needs assessments</li>
                      <li>• Exceeded quarterly sales targets by 20% consistently</li>
                      <li>• Collaborated with cross-functional teams to optimize client outcomes</li>
                    </ul>
                  </div>
                </div>

                {/* RBC Experience */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center">
                      <img src={rbcLogo} alt="RBC" className="w-8 h-8 object-contain" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-lg font-semibold text-foreground">Client Associate</h4>
                      <span className="text-sm text-muted-foreground">2021 - 2022</span>
                    </div>
                    <p className="text-primary font-medium mb-3">RBC Dominion Securities</p>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Supported senior advisors in managing client relationships and portfolios</li>
                      <li>• Prepared detailed financial reports and investment proposals</li>
                      <li>• Maintained client database and ensured regulatory compliance</li>
                      <li>• Assisted in new client onboarding and account management</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Education */}
            <section className="mb-12">
              <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                Education
                <div className="h-px bg-border flex-1"></div>
              </h3>
              
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center">
                    <img src={unbLogo} alt="UNB" className="w-8 h-8 object-contain" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="text-lg font-semibold text-foreground">Bachelor of Business Administration</h4>
                    <span className="text-sm text-muted-foreground">2017 - 2021</span>
                  </div>
                  <p className="text-primary font-medium mb-3">University of New Brunswick</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Major: Finance, Minor: Economics</li>
                    <li>• GPA: 3.8/4.0 - Dean's List (6 semesters)</li>
                    <li>• Relevant Coursework: Corporate Finance, Investment Analysis, Financial Markets</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Page 2 */}
          <div className={`bg-white/90 backdrop-blur-md border border-white/30 rounded-[2rem] p-8 sm:p-12 shadow-2xl page-load-fade-in print:shadow-none print:border-0 print:rounded-none ${isPageLoaded ? 'loaded' : ''}`}>
            
            {/* Professional Certifications */}
            <section className="mb-12">
              <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                Professional Certifications
                <div className="h-px bg-border flex-1"></div>
              </h3>
              
              <div className="space-y-6">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center">
                      <img src={cfaLogo} alt="CFA" className="w-8 h-8 object-contain" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-lg font-semibold text-foreground">CFA Level II Candidate</h4>
                      <span className="text-sm text-muted-foreground">In Progress</span>
                    </div>
                    <p className="text-primary font-medium mb-2">CFA Institute</p>
                    <p className="text-sm text-muted-foreground">Advanced financial analysis and portfolio management certification</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center">
                      <img src={trainingTheStreetLogo} alt="Training the Street" className="w-8 h-8 object-contain" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-lg font-semibold text-foreground">Financial Modeling & Valuation</h4>
                      <span className="text-sm text-muted-foreground">2023</span>
                    </div>
                    <p className="text-primary font-medium mb-2">Training the Street</p>
                    <p className="text-sm text-muted-foreground">Advanced Excel modeling and DCF valuation techniques</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Core Competencies */}
            <section className="mb-12">
              <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                Core Competencies
                <div className="h-px bg-border flex-1"></div>
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-medium text-foreground mb-4">Financial Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">Portfolio Management</Badge>
                    <Badge variant="secondary" className="text-xs">Financial Planning</Badge>
                    <Badge variant="secondary" className="text-xs">Investment Analysis</Badge>
                    <Badge variant="secondary" className="text-xs">Risk Assessment</Badge>
                    <Badge variant="secondary" className="text-xs">Financial Modeling</Badge>
                    <Badge variant="secondary" className="text-xs">Equity Research</Badge>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-foreground mb-4">Technical Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">Bloomberg Terminal</Badge>
                    <Badge variant="secondary" className="text-xs">Excel (Advanced)</Badge>
                    <Badge variant="secondary" className="text-xs">Power BI</Badge>
                    <Badge variant="secondary" className="text-xs">SQL</Badge>
                    <Badge variant="secondary" className="text-xs">Python</Badge>
                    <Badge variant="secondary" className="text-xs">Salesforce</Badge>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-foreground mb-4">Client Management</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">Relationship Building</Badge>
                    <Badge variant="secondary" className="text-xs">Needs Assessment</Badge>
                    <Badge variant="secondary" className="text-xs">Presentation Skills</Badge>
                    <Badge variant="secondary" className="text-xs">Client Retention</Badge>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-foreground mb-4">Leadership</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">Team Leadership</Badge>
                    <Badge variant="secondary" className="text-xs">Project Management</Badge>
                    <Badge variant="secondary" className="text-xs">Strategic Planning</Badge>
                    <Badge variant="secondary" className="text-xs">Process Improvement</Badge>
                  </div>
                </div>
              </div>
            </section>

            {/* Key Achievements */}
            <section className="mb-12">
              <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                Key Achievements
                <div className="h-px bg-border flex-1"></div>
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                  <h4 className="text-lg font-semibold text-blue-900 mb-2">$50M+</h4>
                  <p className="text-sm text-blue-700">Assets Under Management</p>
                </Card>
                
                <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                  <h4 className="text-lg font-semibold text-green-900 mb-2">15%</h4>
                  <p className="text-sm text-green-700">Annual Client Growth</p>
                </Card>
                
                <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                  <h4 className="text-lg font-semibold text-purple-900 mb-2">95%</h4>
                  <p className="text-sm text-purple-700">Client Retention Rate</p>
                </Card>
                
                <Card className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
                  <h4 className="text-lg font-semibold text-orange-900 mb-2">120%</h4>
                  <p className="text-sm text-orange-700">Target Achievement</p>
                </Card>
              </div>
            </section>

            {/* Professional Associations */}
            <section>
              <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                Professional Associations
                <div className="h-px bg-border flex-1"></div>
              </h3>
              
              <div className="space-y-4 text-sm text-muted-foreground">
                <div className="flex justify-between items-center">
                  <span>• CFA Institute Member</span>
                  <span>2022 - Present</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>• Canadian Securities Institute (CSI)</span>
                  <span>2021 - Present</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>• Investment Industry Association of Canada (IIAC)</span>
                  <span>2021 - Present</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>• New Brunswick Young Professionals Association</span>
                  <span>2020 - Present</span>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          body { print-color-adjust: exact; }
          .print\\:hidden { display: none !important; }
          .print\\:shadow-none { box-shadow: none !important; }
          .print\\:border-0 { border: none !important; }
          .print\\:rounded-none { border-radius: 0 !important; }
          .print\\:bg-white { background: white !important; }
          .print\\:text-black { color: black !important; }
          * { -webkit-print-color-adjust: exact; }
        }
      `}</style>
    </div>
  );
}