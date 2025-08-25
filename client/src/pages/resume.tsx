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
            <div className="mb-16">
              {/* Photo and Text */}
              <div className="flex items-start gap-12 mb-8">
                {/* Profile Photo */}
                <img 
                  src={profileImage} 
                  alt="Tyler Bustard" 
                  className="w-48 h-48 rounded-[2rem] object-cover shadow-xl ring-1 ring-black/5"
                  data-testid="img-resume-profile"
                />

                {/* Name, Title, and Description */}
                <div className="flex-1 pt-2">
                  <h1 className="text-7xl font-bold text-foreground mb-4 tracking-tight leading-none">
                    Tyler Bustard
                  </h1>
                  <h2 className="text-2xl text-primary font-medium mb-8 tracking-wide">
                    Finance & Technology Professional
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                    Driving innovation at the intersection of finance and technology. 
                    Delivering exceptional results through analytical expertise, strategic thinking, and client-focused solutions.
                  </p>
                </div>
              </div>
              
              {/* Contact Information - Full Width */}
              <div className="text-center border-t border-border/50 pt-6">
                <div className="text-sm text-muted-foreground flex justify-center items-center flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>tbustard@unb.ca</span>
                  </div>
                  <span className="text-border/60">•</span>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>+1 (613) 985-1223</span>
                  </div>
                  <span className="text-border/60">•</span>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Toronto, Ontario, Canada</span>
                  </div>
                  <span className="text-border/60">•</span>
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    <span>tylerbustard.ca</span>
                  </div>
                </div>
              </div>
            </div>

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
                    <span className="text-sm text-muted-foreground">2020</span>
                  </div>
                  <p className="text-primary font-medium mb-3">University of New Brunswick • Saint John, New Brunswick</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Major: Finance</li>
                    <li>• Case Competitions: 1st Place (CIBC), 3rd Place (TD), RBC and SLC participant</li>
                    <li>• Analyst and Portfolio Manager – University of New Brunswick Student Investment Fund</li>
                    <li>• UNB Finance Club, RBC Student Ambassador, Accredited Co-op Program</li>
                    <li>• Recipient of 5 Scholarship and Alumni Awards for academic merit and leadership skills, Total $47,500</li>
                  </ul>
                </div>
              </div>
            </section>

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
                      <h4 className="text-lg font-semibold text-foreground">Portfolio Assistant</h4>
                      <span className="text-sm text-muted-foreground">2022 - 2023</span>
                    </div>
                    <p className="text-primary font-medium mb-3">BMO Private Wealth</p>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Advised two Investment Counsellors managing portfolios over $100M and cut preparation time by 12%</li>
                      <li>• Bolstered client communications, boosting response rates by 9% heightening client satisfaction and retention</li>
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
                      <span className="text-sm text-muted-foreground">2021 - 2022</span>
                    </div>
                    <p className="text-primary font-medium mb-3">TD Canada Trust</p>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Cultivated strong client relationships by assessing individual financial needs, resulting in an 11% increase in sales</li>
                      <li>• Exceeded sales targets, achieving a top 15% performance ranking within the district</li>
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
                      <h4 className="text-lg font-semibold text-foreground">Banking Advisor</h4>
                      <span className="text-sm text-muted-foreground">2020 - 2021</span>
                    </div>
                    <p className="text-primary font-medium mb-3">Royal Bank of Canada</p>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Strengthened client relationships by advising on personalized solutions, increased repeat transactions by 13%</li>
                      <li>• Excelled in needs-based advising, boosting adoption of core products like GICs, mutual funds, and TFSAs by 8%</li>
                    </ul>
                  </div>
                </div>
                
                {/* RBC Intern Experience - Additional */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center">
                      <img src={rbcLogo} alt="RBC" className="w-8 h-8 object-contain" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-lg font-semibold text-foreground">Client Advisor Intern</h4>
                      <span className="text-sm text-muted-foreground">2019 - 2020</span>
                    </div>
                    <p className="text-primary font-medium mb-3">Royal Bank of Canada</p>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Resolved complex client issues, achieving a 15% boost in positive feedback scores for the branch</li>
                      <li>• Promoted RBC's digital banking tools, leading to a 10% increase in online and mobile banking adoption</li>
                    </ul>
                  </div>
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
                      <h4 className="text-lg font-semibold text-foreground">CFA Level I Candidate</h4>
                      <span className="text-sm text-muted-foreground">2025</span>
                    </div>
                    <p className="text-primary font-medium mb-2">CFA Institute</p>
                    <p className="text-sm text-muted-foreground">Comprehensive training in investment analysis, portfolio management, and ethical standards</p>
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
                      <h4 className="text-lg font-semibold text-foreground">Discounted Cash Flow Analysis</h4>
                      <span className="text-sm text-muted-foreground">2024</span>
                    </div>
                    <p className="text-primary font-medium mb-2">Training the Street</p>
                    <p className="text-sm text-muted-foreground">Advanced financial modeling techniques for valuation using discounted cash flow methodology</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Community Leadership & Volunteer Service */}
            <section>
              <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                Community
                <div className="h-px bg-border flex-1"></div>
              </h3>
              
              <div className="space-y-8">
                {/* United Way */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold">UW</div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-lg font-semibold text-foreground">Next Gen Ambassador</h4>
                      <span className="text-sm text-muted-foreground">2020 - 2023</span>
                    </div>
                    <p className="text-primary font-medium mb-3">United Way • Kingston, Ontario</p>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Led implementation of fundraising strategies achieving 20% increase in funds raised over three years</li>
                      <li>• Spearheaded engagement initiatives resulting in 15% rise in participation and awareness within workplace community</li>
                    </ul>
                  </div>
                </div>

                {/* RBC Student Ambassador */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center">
                      <img src={rbcLogo} alt="RBC" className="w-8 h-8 object-contain" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-lg font-semibold text-foreground">Student Ambassador</h4>
                      <span className="text-sm text-muted-foreground">2019 - 2020</span>
                    </div>
                    <p className="text-primary font-medium mb-3">Royal Bank of Canada • Fredericton, New Brunswick</p>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Organized and executed campus-wide events resulting in 25% increase in student engagement and awareness</li>
                      <li>• Developed targeted outreach strategy achieving 30% increase in student participation in RBC-sponsored events</li>
                    </ul>
                  </div>
                </div>

                {/* Irving Oil Volunteer */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">IO</div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-lg font-semibold text-foreground">Volunteer Staff</h4>
                      <span className="text-sm text-muted-foreground">2018</span>
                    </div>
                    <p className="text-primary font-medium mb-3">Irving Oil Limited • Saint John, New Brunswick</p>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Successfully organized and executed engaging activities for over 100 children ensuring safe and enjoyable experience</li>
                      <li>• Demonstrated leadership through collaboration with fellow volunteers for well-coordinated event execution</li>
                    </ul>
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