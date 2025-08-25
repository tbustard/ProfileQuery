import { useInitialPageAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Globe, Download, Printer, Linkedin } from "lucide-react";
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

  const handlePrint = () => {
    window.print();
  };


  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f5f7' }}>
      <Navigation />
      {/* Header Actions - Hide on print */}
      <div className="print:hidden sticky top-20 z-40 px-4 sm:px-6">
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
        </div>
      </div>

      {/* Main Resume Content */}
      <div className="px-4 sm:px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          
          {/* Page 1 */}
          <div className={`bg-white/90 backdrop-blur-md border border-white/30 rounded-[2rem] p-6 sm:p-10 shadow-2xl mb-6 page-load-fade-in print:shadow-none print:border-0 print:rounded-none ${isPageLoaded ? 'loaded' : ''}`}>
            
            {/* Header Section */}
            <div className="mb-8">
              {/* Photo and Text */}
              <div className="flex items-start gap-8 mb-6">
                {/* Profile Photo */}
                <img 
                  src={profileImage} 
                  alt="Tyler Bustard" 
                  className="w-40 h-40 rounded-[2rem] object-cover shadow-lg"
                  data-testid="img-resume-profile"
                />

                {/* Name, Title, and Description */}
                <div className="flex-1">
                  <h1 className="text-6xl font-bold text-foreground mb-2 tracking-tight">
                    Tyler Bustard
                  </h1>
                  <h2 className="text-2xl text-primary font-medium mb-6">
                    Finance & Technology Professional
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Driving innovation at the intersection of finance and technology. 
                    Delivering exceptional results through analytical expertise, strategic thinking, and client-focused solutions.
                  </p>
                </div>
              </div>
              
              {/* Contact Information - Full Width */}
              <div className="text-center">
                <div className="text-sm text-muted-foreground flex justify-center items-center flex-wrap gap-1">
                  <Mail className="w-4 h-4" />
                  <span>tbustard@unb.ca</span>
                  <span className="mx-2">•</span>
                  <Phone className="w-4 h-4" />
                  <span>+1 (613) 985-1223</span>
                  <span className="mx-2">•</span>
                  <MapPin className="w-4 h-4" />
                  <span>Toronto, Ontario, Canada</span>
                  <span className="mx-2">•</span>
                  <Globe className="w-4 h-4" />
                  <span>tylerbustard.ca</span>
                </div>
              </div>
            </div>

            {/* Education */}
            <section className="mb-8">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
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
                    <h4 className="text-lg font-semibold text-foreground">Bachelor of Business Administration - Finance Major</h4>
                    <span className="text-sm text-muted-foreground">2020</span>
                  </div>
                  <p className="text-primary font-medium mb-1">University of New Brunswick</p>
                  <p className="text-sm text-muted-foreground mb-3">Saint John, New Brunswick</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Case Competitions: 1st Place (CIBC), 3rd Place (TD), RBC and SLC participant</li>
                    <li>• Analyst and Portfolio Manager – University of New Brunswick Student Investment Fund</li>
                    <li>• UNB Finance Club, RBC Student Ambassador, Accredited Co-op Program</li>
                    <li>• Recipient of 5 Scholarship and Alumni Awards for academic merit and leadership skills, Total $47,500</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Professional Experience */}
            <section className="mb-6">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                Professional Experience
                <div className="h-px bg-border flex-1"></div>
              </h3>
              
              <div className="space-y-6">
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
                    <p className="text-primary font-medium mb-1">BMO Private Wealth</p>
                    <p className="text-sm text-muted-foreground mb-3">Toronto, Ontario</p>
                    <ul className="text-sm text-muted-foreground space-y-1.5 mb-3">
                      <li>• Advised two Investment Counsellors managing portfolios over $100M and cut preparation time by 12%</li>
                      <li>• Bolstered client communications, boosting response rates by 9% heightening client satisfaction and retention</li>
                    </ul>
                    <div className="flex flex-wrap gap-1.5">
                      <Badge variant="secondary" className="text-xs">Portfolio Management</Badge>
                      <Badge variant="secondary" className="text-xs">Client Relations</Badge>
                      <Badge variant="secondary" className="text-xs">Financial Analysis</Badge>
                      <Badge variant="secondary" className="text-xs">Excel</Badge>
                    </div>
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
                    <p className="text-primary font-medium mb-1">TD Canada Trust</p>
                    <p className="text-sm text-muted-foreground mb-3">Kingston, Ontario</p>
                    <ul className="text-sm text-muted-foreground space-y-1.5 mb-3">
                      <li>• Cultivated strong client relationships by assessing individual financial needs, resulting in an 11% increase in sales</li>
                      <li>• Exceeded sales targets, achieving a top 15% performance ranking within the district</li>
                    </ul>
                    <div className="flex flex-wrap gap-1.5">
                      <Badge variant="secondary" className="text-xs">Financial Planning</Badge>
                      <Badge variant="secondary" className="text-xs">Sales</Badge>
                      <Badge variant="secondary" className="text-xs">Client Advisory</Badge>
                      <Badge variant="secondary" className="text-xs">Product Knowledge</Badge>
                    </div>
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
                    <p className="text-primary font-medium mb-1">Royal Bank of Canada</p>
                    <p className="text-sm text-muted-foreground mb-3">Kingston, Ontario</p>
                    <ul className="text-sm text-muted-foreground space-y-1.5 mb-3">
                      <li>• Strengthened client relationships by advising on personalized solutions, increased repeat transactions by 13%</li>
                      <li>• Excelled in needs-based advising, boosting adoption of core products like GICs, mutual funds, and TFSAs by 8%</li>
                    </ul>
                    <div className="flex flex-wrap gap-1.5">
                      <Badge variant="secondary" className="text-xs">Banking Products</Badge>
                      <Badge variant="secondary" className="text-xs">Financial Advisory</Badge>
                      <Badge variant="secondary" className="text-xs">Client Relationship Management</Badge>
                      <Badge variant="secondary" className="text-xs">Digital Banking</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Page 2 */}
          <div className={`bg-white/90 backdrop-blur-md border border-white/30 rounded-[2rem] p-8 sm:p-12 shadow-2xl page-load-fade-in print:shadow-none print:border-0 print:rounded-none ${isPageLoaded ? 'loaded' : ''}`}>
            
            {/* Professional Experience Continued */}
            <section className="mb-12">
              <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                Professional Experience (continued)
                <div className="h-px bg-border flex-1"></div>
              </h3>
              
              <div className="space-y-8">
                {/* RBC Intern Experience */}
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
                    <p className="text-primary font-medium mb-1">Royal Bank of Canada</p>
                    <p className="text-sm text-muted-foreground mb-3">Fredericton, New Brunswick</p>
                    <ul className="text-sm text-muted-foreground space-y-1.5 mb-3">
                      <li>• Resolved complex client issues, achieving a 15% boost in positive feedback scores for the branch</li>
                      <li>• Promoted RBC's digital banking tools, leading to a 10% increase in online and mobile banking adoption</li>
                    </ul>
                    <div className="flex flex-wrap gap-1.5">
                      <Badge variant="secondary" className="text-xs">Client Service</Badge>
                      <Badge variant="secondary" className="text-xs">Digital Banking</Badge>
                      <Badge variant="secondary" className="text-xs">Problem Resolution</Badge>
                      <Badge variant="secondary" className="text-xs">Customer Support</Badge>
                    </div>
                  </div>
                </div>

                {/* Irving Oil Marketing Intern */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center">
                      <img src={irvingLogo} alt="Irving Oil" className="w-8 h-8 object-contain" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-lg font-semibold text-foreground">Marketing Intern</h4>
                      <span className="text-sm text-muted-foreground">2018</span>
                    </div>
                    <p className="text-primary font-medium mb-1">Irving Oil Limited</p>
                    <p className="text-sm text-muted-foreground mb-3">Saint John, New Brunswick</p>
                    <ul className="text-sm text-muted-foreground space-y-1.5 mb-3">
                      <li>• Conducted competitor analysis driving insights that improved targeted marketing by 11%</li>
                      <li>• Developed a Customer Lifecycle model that increased targeted promotions, boosting customer engagement by 8%</li>
                    </ul>
                    <div className="flex flex-wrap gap-1.5">
                      <Badge variant="secondary" className="text-xs">Market Research</Badge>
                      <Badge variant="secondary" className="text-xs">Customer Analytics</Badge>
                      <Badge variant="secondary" className="text-xs">Competitive Analysis</Badge>
                      <Badge variant="secondary" className="text-xs">Marketing Strategy</Badge>
                    </div>
                  </div>
                </div>

                {/* Grant Thornton Tax Return Intern */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center">
                      <img src={grantThorntonLogo} alt="Grant Thornton" className="w-8 h-8 object-contain" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-lg font-semibold text-foreground">Tax Return Intern</h4>
                      <span className="text-sm text-muted-foreground">2018</span>
                    </div>
                    <p className="text-primary font-medium mb-1">Grant Thornton LLP</p>
                    <p className="text-sm text-muted-foreground mb-3">Saint John, New Brunswick</p>
                    <ul className="text-sm text-muted-foreground space-y-1.5 mb-3">
                      <li>• Streamlined client financial data, boosting accuracy by 10% ensuring timely submission of 100+ tax returns</li>
                      <li>• Improved tax return preparation processes, cutting filing errors by 15%</li>
                    </ul>
                    <div className="flex flex-wrap gap-1.5">
                      <Badge variant="secondary" className="text-xs">Tax Preparation</Badge>
                      <Badge variant="secondary" className="text-xs">Financial Analysis</Badge>
                      <Badge variant="secondary" className="text-xs">Data Management</Badge>
                      <Badge variant="secondary" className="text-xs">Client Service</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </section>

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
                    <p className="text-primary font-medium mb-1.5">Training the Street</p>
                    <p className="text-sm text-muted-foreground">Advanced financial modeling techniques for valuation using discounted cash flow methodology</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Community Leadership & Volunteer Service */}
            <section>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                Community
                <div className="h-px bg-border flex-1"></div>
              </h3>
              
              <div className="space-y-6">
                {/* United Way */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center">
                      <img src={unitedWayLogo} alt="United Way" className="w-8 h-8 object-contain" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-lg font-semibold text-foreground">Next Gen Ambassador</h4>
                      <span className="text-sm text-muted-foreground">2020 - 2023</span>
                    </div>
                    <p className="text-primary font-medium mb-1">United Way</p>
                    <p className="text-sm text-muted-foreground mb-3">Kingston, Ontario</p>
                    <ul className="text-sm text-muted-foreground space-y-1.5 mb-3">
                      <li>• Led implementation of fundraising strategies achieving 20% increase in funds raised over three years</li>
                      <li>• Spearheaded engagement initiatives resulting in 15% rise in participation and awareness within workplace community</li>
                    </ul>
                    <div className="flex flex-wrap gap-1.5">
                      <Badge variant="secondary" className="text-xs">Fundraising Strategy</Badge>
                      <Badge variant="secondary" className="text-xs">Leadership</Badge>
                      <Badge variant="secondary" className="text-xs">Event Planning</Badge>
                      <Badge variant="secondary" className="text-xs">Community Engagement</Badge>
                      <Badge variant="secondary" className="text-xs">Stakeholder Management</Badge>
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