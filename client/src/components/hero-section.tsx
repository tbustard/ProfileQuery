import { Button } from "@/components/ui/button";
import { HiOutlineMail } from "react-icons/hi";
import { useEffect } from "react";
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

  useEffect(() => {
    // Initialize GSAP animations for Overview section only
    if (typeof window !== 'undefined' && (window as any).gsap) {
      const gsap = (window as any).gsap;
      
      // Profile image entrance animation
      gsap.fromTo(".overview-profile-entrance", 
        { 
          scale: 0.8, 
          opacity: 0, 
          rotateY: -30 
        },
        { 
          scale: 1, 
          opacity: 1, 
          rotateY: 0, 
          duration: 1.2, 
          ease: "elastic.out(1, 0.8)",
          delay: 0.3
        }
      );
      
      // Text content stagger animation
      gsap.fromTo(".overview-text-entrance", 
        { 
          y: 50, 
          opacity: 0 
        },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          ease: "power3.out",
          stagger: 0.2,
          delay: 0.6
        }
      );
      
      // Career cards cascade animation
      gsap.fromTo(".overview-career-card", 
        { 
          y: 30, 
          opacity: 0, 
          scale: 0.95 
        },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1, 
          duration: 0.6, 
          ease: "back.out(1.7)",
          stagger: 0.1,
          delay: 1.2
        }
      );
      
      // Credentials floating animation
      gsap.fromTo(".overview-credential", 
        { 
          y: 20, 
          opacity: 0 
        },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          ease: "elastic.out(1, 0.6)",
          stagger: 0.1,
          delay: 0.9
        }
      );
    }
  }, []);

  return (
    <>
      {/* SVG Filter for Advanced Glass Effects */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <filter id="liquid-glass-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0.5" result="blur"/>
            <feTurbulence baseFrequency="0.02" numOctaves="3" result="noise"/>
            <feDisplacementMap in="blur" in2="noise" scale="2" result="displacement"/>
            <feComposite in="displacement" in2="SourceGraphic" operator="over"/>
          </filter>
        </defs>
      </svg>

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
                <div className="w-72 h-72 lg:w-80 lg:h-80 relative overview-profile-entrance">
                  <div className="overview-profile-glass aspect-square overflow-hidden">
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
                  <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight leading-none overview-text-entrance">
                    Tyler Bustard
                  </h1>
                  <p className="text-2xl md:text-3xl font-semibold text-primary mb-8 overview-text-entrance">
                    Finance & Technology Professional
                  </p>
                  
                  {/* Credentials */}
                  <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                    <div className="overview-credential-glass px-6 py-3 overview-credential">
                      <span className="text-sm font-semibold text-primary">CFA Level I Candidate</span>
                    </div>
                    <div className="overview-credential-glass px-6 py-3 overview-credential">
                      <span className="text-sm font-medium text-foreground">5+ Years Experience</span>
                    </div>
                    <div className="overview-credential-glass px-6 py-3 overview-credential">
                      <span className="text-sm font-medium text-foreground">UNB Graduate</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed overview-text-entrance">
                  Driving innovation at the intersection of finance and technology. 
                  Delivering exceptional results through analytical expertise, strategic thinking, and client-focused solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-12 mb-20">
            {/* Career Progression */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-foreground text-center lg:text-left overview-text-entrance">Career Journey</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="overview-liquid-glass p-8 overview-career-card">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg apple-hover">
                      <img 
                        src={bmoLogo} 
                        alt="BMO Logo" 
                        className="w-12 h-12 object-contain transition-all duration-300 hover:scale-110"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">BMO Private Wealth</h3>
                      <p className="text-primary font-medium mb-2">Portfolio Assistant • Present</p>
                      <p className="text-sm text-muted-foreground">Leading portfolio management and client advisory services for high-net-worth individuals</p>
                    </div>
                  </div>
                </div>

                <div className="overview-liquid-glass p-8 overview-career-card">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
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
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Multi-Bank Experience</h3>
                      <p className="text-primary font-medium mb-2">TD Bank • RBC</p>
                      <p className="text-sm text-muted-foreground">Comprehensive financial services experience across major Canadian institutions</p>
                    </div>
                  </div>
                </div>

                <div className="overview-liquid-glass p-8 overview-career-card">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
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
                      <h3 className="text-xl font-semibold text-foreground mb-2">Strategic Experience</h3>
                      <p className="text-primary font-medium mb-2">Irving Oil • Grant Thornton</p>
                      <p className="text-sm text-muted-foreground">Cross-industry expertise in marketing analytics and professional services, driving strategic initiatives</p>
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
    </>
  );
}
