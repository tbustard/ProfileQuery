import { Button } from "@/components/ui/button";
import { HiOutlineMail } from "react-icons/hi";
import profileImage from "@assets/Untitled design (1)_1755896187722.png";
import bmoLogo from "@assets/BMO_Logo.svg_1755913265896.png";
import tdLogo from "@assets/Toronto-Dominion_Bank_logo.svg_1755913265896.png";
import rbcLogo from "@assets/RBC-Logo_1755913716813.png";
import irvingLogo from "@assets/Irving_Oil.svg_1755913265895.png";
import grantThorntonLogo from "@assets/Grant_Thornton_logo_1755913265895.png";

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden min-h-screen">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/50 to-gray-100/30" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/4 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="relative z-10 pt-32 pb-24 px-6">
        <div className="container-width">
          {/* Hero Header - Profile & Name Side by Side */}
          <div className="mb-20">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <div className="w-72 h-72 lg:w-80 lg:h-80 relative">
                  <div className="aspect-square rounded-[2rem] overflow-hidden bg-white shadow-2xl ring-1 ring-black/5">
                    <img 
                      src={profileImage} 
                      alt="Tyler Bustard professional headshot" 
                      className="w-full h-full object-cover object-center"
                      data-testid="img-profile"
                    />
                  </div>
                </div>
              </div>

              {/* Name & Content */}
              <div className="space-y-8 text-center lg:text-left max-w-2xl">
                <div>
                  <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight leading-none">
                    Tyler Bustard
                  </h1>
                  <p className="text-2xl md:text-3xl font-semibold text-primary mb-8">
                    Finance & Technology Professional
                  </p>
                  
                  {/* Credentials */}
                  <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                    <div className="bg-primary/10 backdrop-blur-sm rounded-2xl px-6 py-3 border border-primary/10">
                      <span className="text-sm font-semibold text-primary">CFA Level I Candidate</span>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-3 border border-gray-200">
                      <span className="text-sm font-medium text-foreground">5+ Years Experience</span>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-3 border border-gray-200">
                      <span className="text-sm font-medium text-foreground">UNB Graduate</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  Driving innovation at the intersection of finance and technology. 
                  Delivering exceptional results through analytical expertise, strategic thinking, and client-focused solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-12 mb-20">
            {/* Professional Overview Quadrants */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-foreground text-center lg:text-left">Professional Overview</h2>
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  
                  {/* Career Quadrant */}
                  <div className="space-y-4 p-6 bg-gradient-to-br from-blue-50/50 to-blue-100/30 rounded-2xl border border-blue-200/30">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <img 
                          src={bmoLogo} 
                          alt="BMO Logo" 
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <img 
                          src={tdLogo} 
                          alt="TD Logo" 
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <img 
                          src={rbcLogo} 
                          alt="RBC Logo" 
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Career</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span>BMO Private Wealth Portfolio Assistant</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span>Multi-bank financial services experience</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span>Cross-industry strategic initiatives</span>
                      </div>
                    </div>
                  </div>

                  {/* Education Quadrant */}
                  <div className="space-y-4 p-6 bg-gradient-to-br from-green-50/50 to-green-100/30 rounded-2xl border border-green-200/30">
                    <div className="w-12 h-12 bg-green-500/10 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg mb-4">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Education</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <span>University of New Brunswick BBA</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <span>Class of 2020</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <span>Business Administration Focus</span>
                      </div>
                    </div>
                  </div>

                  {/* Certifications Quadrant */}
                  <div className="space-y-4 p-6 bg-gradient-to-br from-purple-50/50 to-purple-100/30 rounded-2xl border border-purple-200/30">
                    <div className="w-12 h-12 bg-purple-500/10 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg mb-4">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Certifications</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                        <span>CFA Level I Candidate</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                        <span>Professional Development Focus</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                        <span>Continuous Learning Commitment</span>
                      </div>
                    </div>
                  </div>

                  {/* Community Quadrant */}
                  <div className="space-y-4 p-6 bg-gradient-to-br from-orange-50/50 to-orange-100/30 rounded-2xl border border-orange-200/30">
                    <div className="w-12 h-12 bg-orange-500/10 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg mb-4">
                      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Community</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                        <span>Leadership through engagement</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                        <span>Meaningful community impact</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                        <span>Commitment to service</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Core Competencies */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-foreground text-center lg:text-left">Core Expertise</h2>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-3xl p-8 border border-blue-200/50">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Financial Analysis</h3>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span>Equity research & DCF modeling</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span>Portfolio optimization strategies</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span>Risk assessment & management</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-3xl p-8 border border-green-200/50">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Technology Integration</h3>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <span>AI-driven analytics & data science</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <span>Digital transformation initiatives</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <span>Automated investment solutions</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Achievements */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-foreground text-center lg:text-left">Professional Impact</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold text-primary">6</div>
                  <div className="text-sm font-medium text-muted-foreground">Companies</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold text-primary">3</div>
                  <div className="text-sm font-medium text-muted-foreground">Industries</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold text-primary">5+</div>
                  <div className="text-sm font-medium text-muted-foreground">Years</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold text-primary">2020</div>
                  <div className="text-sm font-medium text-muted-foreground">Graduate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 inline-block">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Ready to Connect?</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Explore detailed insights into my experience, education, and achievements below.
              </p>
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white text-lg px-10 py-4 rounded-2xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
                onClick={() => scrollToSection("#contact")}
                data-testid="button-contact"
              >
                <HiOutlineMail className="mr-3 h-5 w-5" />
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
