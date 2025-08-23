import { Button } from "@/components/ui/button";
import { HiOutlineMail } from "react-icons/hi";
import profileImage from "@assets/Untitled design (1)_1755896187722.png";
import bmoLogo from "@assets/BMO_Logo.svg_1755913265896.png";
import tdLogo from "@assets/Toronto-Dominion_Bank_logo.svg_1755913265896.png";
import rbcLogo from "@assets/RBC-Logo_1755913716813.png";
import irvingLogo from "@assets/Irving_Oil.svg_1755913265895.png";
import grantThorntonLogo from "@assets/Grant_Thornton_logo_1755913265895.png";
import cfaLogo from "@assets/CFA_Institute_Logo_1755923720192.png";
import csiLogo from "@assets/canadian securities institute_1755923720191.png";
import bloombergLogo from "@assets/bloomberg_1755923720190.png";
import courseraLogo from "@assets/Coursera_1755937682843.png";
import mcgillLogo from "@assets/mcgill_1755937693386.png";
import unbLogo from "@assets/University_of_New_Brunswick_Logo.svg_1755912478863.png";
import wallStreetPrepLogo from "@assets/wall street prep_1755923720193.png";
import trainingTheStreetLogo from "@assets/trainning the street_1755938972014.png";
import etsLogo from "@assets/ETS_1755939510188.png";
import unitedWayLogo from "@assets/United-Way-Logo_1755913265895.png";

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
                </div>
                
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
                  Driving innovation at the intersection of finance and technology. 
                  Delivering exceptional results through analytical expertise, strategic thinking, and client-focused solutions.
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

          {/* Main Content */}
          <div className="space-y-12 mb-20">
            {/* Professional Overview Quadrants */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-foreground text-center lg:text-left">Professional Overview</h2>
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  
                  {/* Career Quadrant */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 hover:shadow-lg transition-all duration-300">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 flex-wrap">
                        <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg apple-hover">
                          <img 
                            src={bmoLogo} 
                            alt="BMO Logo" 
                            className="w-12 h-12 object-contain transition-all duration-300 hover:scale-110"
                          />
                        </div>
                        <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg apple-hover">
                          <img 
                            src={tdLogo} 
                            alt="TD Logo" 
                            className="w-12 h-12 object-contain transition-all duration-300 hover:scale-110"
                          />
                        </div>
                        <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg apple-hover">
                          <img 
                            src={rbcLogo} 
                            alt="RBC Logo" 
                            className="w-12 h-12 object-contain transition-all duration-300 hover:scale-110"
                          />
                        </div>
                        <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg apple-hover">
                          <img 
                            src={irvingLogo} 
                            alt="Irving Oil Logo" 
                            className="w-12 h-12 object-contain transition-all duration-300 hover:scale-110"
                          />
                        </div>
                        <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg apple-hover">
                          <img 
                            src={grantThorntonLogo} 
                            alt="Grant Thornton Logo" 
                            className="w-12 h-12 object-contain transition-all duration-300 hover:scale-110"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Career</h3>
                        <div className="space-y-2 text-sm text-muted-foreground font-medium">
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            <span>BMO Private Wealth Portfolio Assistant</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            <span>$2B+ portfolio management expertise</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            <span>Multi-sector financial analysis leader</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Education Quadrant */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 hover:shadow-lg transition-all duration-300">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg apple-hover">
                          <img 
                            src={unbLogo} 
                            alt="University of New Brunswick Logo" 
                            className="w-12 h-12 object-contain transition-all duration-300 hover:scale-110"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Education</h3>
                        <div className="space-y-2 text-sm text-muted-foreground font-medium">
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            <span>University of New Brunswick BBA</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            <span>Finance Major, Class of 2020</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            <span>Financial markets & investment focus</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Certifications Quadrant */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 hover:shadow-lg transition-all duration-300">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 flex-wrap">
                        <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg apple-hover">
                          <img 
                            src={cfaLogo} 
                            alt="CFA Institute Logo" 
                            className="w-12 h-12 object-contain transition-all duration-300 hover:scale-110"
                          />
                        </div>
                        <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg apple-hover">
                          <img 
                            src={csiLogo} 
                            alt="Canadian Securities Institute Logo" 
                            className="w-12 h-12 object-contain transition-all duration-300 hover:scale-110"
                          />
                        </div>
                        <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg apple-hover">
                          <img 
                            src={bloombergLogo} 
                            alt="Bloomberg Logo" 
                            className="w-12 h-12 object-contain transition-all duration-300 hover:scale-110"
                          />
                        </div>
                        <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg apple-hover">
                          <img 
                            src={wallStreetPrepLogo} 
                            alt="Wall Street Prep Logo" 
                            className="w-12 h-12 object-contain transition-all duration-300 hover:scale-110"
                          />
                        </div>
                        <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg apple-hover">
                          <img 
                            src={courseraLogo} 
                            alt="Coursera Logo" 
                            className="w-12 h-12 object-contain transition-all duration-300 hover:scale-110"
                          />
                        </div>
                        <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg apple-hover">
                          <img 
                            src={mcgillLogo} 
                            alt="McGill University Logo" 
                            className="w-12 h-12 object-contain transition-all duration-300 hover:scale-110"
                          />
                        </div>
                        <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg apple-hover">
                          <img 
                            src={trainingTheStreetLogo} 
                            alt="Training the Street Logo" 
                            className="w-12 h-12 object-contain transition-all duration-300 hover:scale-110"
                          />
                        </div>
                        <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg apple-hover">
                          <img 
                            src={etsLogo} 
                            alt="ETS Logo" 
                            className="w-12 h-12 object-contain transition-all duration-300 hover:scale-110"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Certifications</h3>
                        <div className="space-y-2 text-sm text-muted-foreground font-medium">
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                            <span>CFA Level I Candidate</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                            <span>Bloomberg Market Concepts</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                            <span>Financial Modeling & Analysis</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Community Quadrant */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 hover:shadow-lg transition-all duration-300">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 flex-wrap">
                        <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg apple-hover">
                          <img src={unitedWayLogo} alt="United Way Logo" className="w-12 h-12 object-contain transition-all duration-300 hover:scale-110" />
                        </div>
                        <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg apple-hover">
                          <img
                            src={rbcLogo}
                            alt="RBC Community Logo"
                            className="w-12 h-12 object-contain transition-all duration-300 hover:scale-110"
                          />
                        </div>
                        <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg apple-hover">
                          <img
                            src={irvingLogo}
                            alt="Irving Oil Community Logo"
                            className="w-12 h-12 object-contain transition-all duration-300 hover:scale-110"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Community</h3>
                        <div className="space-y-2 text-sm text-muted-foreground font-medium">
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                            <span>United Way campaign leadership</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                            <span>Financial literacy mentorship</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                            <span>Community investment advocate</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
