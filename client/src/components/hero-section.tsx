import { Button } from "@/components/ui/button";
import { HiOutlineMail } from "react-icons/hi";
import { useState, useEffect, useRef } from "react";
import profileImage from "@assets/Untitled design (1)_1755896187722.png";
import bmoLogo from "@assets/BMO_Logo.svg_1755913265896.png";
import tdLogo from "@assets/Toronto-Dominion_Bank_logo.svg_1755913265896.png";
import rbcLogo from "@assets/RBC-Logo_1755913716813.png";
import irvingLogo from "@assets/Irving_Oil.svg_1755913265895.png";
import grantThorntonLogo from "@assets/Grant_Thornton_logo_1755913265895.png";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const elementId = entry.target.getAttribute('data-animate-id');
          if (elementId) {
            setVisibleElements(prev => {
              const newSet = new Set(prev);
              if (entry.isIntersecting) {
                newSet.add(elementId);
              }
              return newSet;
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    // Observe all animatable elements
    const elementsToObserve = sectionRef.current?.querySelectorAll('[data-animate-id]');
    elementsToObserve?.forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getAnimationClass = (elementId: string, delay: number = 0) => {
    const isVisible = visibleElements.has(elementId);
    return `transition-all duration-1000 ease-out ${delay > 0 ? `delay-${delay}` : ''} ${
      isVisible 
        ? 'opacity-100 translate-y-0 scale-100' 
        : 'opacity-0 translate-y-8 scale-95'
    }`;
  };

  return (
    <section id="hero" ref={sectionRef} className="relative overflow-hidden min-h-screen">
      {/* Background Layers with Parallax */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/50 to-gray-100/30" />
      <div 
        className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/4 rounded-full blur-3xl animate-pulse transition-transform duration-1000 ease-out"
        style={{
          transform: `translate3d(${scrollY * 0.1}px, ${scrollY * 0.05}px, 0) translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
        }}
      />
      <div 
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse transition-transform duration-1000 ease-out" 
        style={{ 
          animationDelay: '2s',
          transform: `translate3d(${scrollY * -0.08}px, ${scrollY * -0.03}px, 0) translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`
        }}
      />
      
      <div className="relative z-10 pt-32 pb-24 px-6">
        <div className="container-width">
          {/* Hero Header - Profile & Name Side by Side */}
          <div className="mb-20">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
              {/* Profile Image */}
              <div 
                className={`flex-shrink-0 ${getAnimationClass('profile-image')}`}
                data-animate-id="profile-image"
              >
                <div className="w-72 h-72 lg:w-80 lg:h-80 relative group">
                  <div className="aspect-square rounded-[2rem] overflow-hidden bg-white shadow-2xl ring-1 ring-black/5 transition-all duration-700 ease-out group-hover:shadow-3xl group-hover:scale-105 group-hover:ring-primary/20 group-hover:ring-2">
                    <img 
                      src={profileImage} 
                      alt="Tyler Bustard professional headshot" 
                      className="w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-110"
                      data-testid="img-profile"
                    />
                  </div>
                  {/* Subtle glow effect on hover */}
                  <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out" />
                </div>
              </div>

              {/* Name & Content */}
              <div 
                className={`space-y-8 text-center lg:text-left max-w-2xl ${getAnimationClass('hero-content', 300)}`}
                data-animate-id="hero-content"
              >
                <div>
                  <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight leading-none hover:text-primary transition-colors duration-500 ease-out cursor-default">
                    Tyler Bustard
                  </h1>
                  <p className="text-2xl md:text-3xl font-semibold text-primary mb-8 hover:scale-105 transition-transform duration-300 ease-out cursor-default">
                    Finance & Technology Professional
                  </p>
                  
                  {/* Credentials */}
                  <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                    <div className="bg-primary/10 backdrop-blur-sm rounded-2xl px-6 py-3 border border-primary/10 hover:bg-primary/20 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-out cursor-default">
                      <span className="text-sm font-semibold text-primary">CFA Level I Candidate</span>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-3 border border-gray-200 hover:bg-white hover:scale-105 hover:shadow-lg transition-all duration-300 ease-out cursor-default">
                      <span className="text-sm font-medium text-foreground">5+ Years Experience</span>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-3 border border-gray-200 hover:bg-white hover:scale-105 hover:shadow-lg transition-all duration-300 ease-out cursor-default">
                      <span className="text-sm font-medium text-foreground">UNB Graduate</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed hover:text-foreground transition-colors duration-500 ease-out cursor-default">
                  Driving innovation at the intersection of finance and technology. 
                  Delivering exceptional results through analytical expertise, strategic thinking, and client-focused solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-12 mb-20">
            {/* Career Progression */}
            <div 
              className={`space-y-8 ${getAnimationClass('career-section')}`}
              data-animate-id="career-section"
            >
              <h2 className="text-3xl font-bold text-foreground text-center lg:text-left hover:text-primary transition-colors duration-500 ease-out cursor-default">Career Journey</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div 
                  className={`bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 hover:bg-white hover:shadow-2xl hover:scale-105 hover:border-primary/20 transition-all duration-500 ease-out group cursor-pointer ${getAnimationClass('career-card-1', 100)}`}
                  data-animate-id="career-card-1"
                >
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg transition-all duration-500 ease-out group-hover:bg-primary/10 group-hover:shadow-xl group-hover:scale-110">
                      <img 
                        src={bmoLogo} 
                        alt="BMO Logo" 
                        className="w-12 h-12 object-contain transition-all duration-500 ease-out group-hover:scale-125"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">BMO Private Wealth</h3>
                      <p className="text-primary font-medium mb-2 group-hover:scale-105 transition-transform duration-300">Portfolio Assistant • Present</p>
                      <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">Leading portfolio management and client advisory services for high-net-worth individuals</p>
                    </div>
                  </div>
                </div>

                <div 
                  className={`bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 hover:bg-white hover:shadow-2xl hover:scale-105 hover:border-primary/20 transition-all duration-500 ease-out group cursor-pointer ${getAnimationClass('career-card-2', 200)}`}
                  data-animate-id="career-card-2"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg transition-all duration-500 ease-out group-hover:bg-primary/10 group-hover:shadow-xl group-hover:scale-110">
                        <img 
                          src={tdLogo} 
                          alt="TD Logo" 
                          className="w-12 h-12 object-contain transition-all duration-500 ease-out group-hover:scale-125"
                        />
                      </div>
                      <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg transition-all duration-500 ease-out group-hover:bg-primary/10 group-hover:shadow-xl group-hover:scale-110">
                        <img 
                          src={rbcLogo} 
                          alt="RBC Logo" 
                          className="w-12 h-12 object-contain transition-all duration-500 ease-out group-hover:scale-125"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">Multi-Bank Experience</h3>
                      <p className="text-primary font-medium mb-2 group-hover:scale-105 transition-transform duration-300">TD Bank • RBC</p>
                      <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">Comprehensive financial services experience across major Canadian institutions</p>
                    </div>
                  </div>
                </div>

                <div 
                  className={`bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 hover:bg-white hover:shadow-2xl hover:scale-105 hover:border-primary/20 transition-all duration-500 ease-out group cursor-pointer ${getAnimationClass('career-card-3', 300)}`}
                  data-animate-id="career-card-3"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg transition-all duration-500 ease-out group-hover:bg-primary/10 group-hover:shadow-xl group-hover:scale-110">
                        <img 
                          src={irvingLogo} 
                          alt="Irving Oil Logo" 
                          className="w-12 h-12 object-contain transition-all duration-500 ease-out group-hover:scale-125"
                        />
                      </div>
                      <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg transition-all duration-500 ease-out group-hover:bg-primary/10 group-hover:shadow-xl group-hover:scale-110">
                        <img 
                          src={grantThorntonLogo} 
                          alt="Grant Thornton Logo" 
                          className="w-12 h-12 object-contain transition-all duration-500 ease-out group-hover:scale-125"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">Strategic Experience</h3>
                      <p className="text-primary font-medium mb-2 group-hover:scale-105 transition-transform duration-300">Irving Oil • Grant Thornton</p>
                      <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">Cross-industry expertise in marketing analytics and professional services, driving strategic initiatives</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Competencies */}
            <div 
              className={`space-y-8 ${getAnimationClass('expertise-section')}`}
              data-animate-id="expertise-section"
            >
              <h2 className="text-3xl font-bold text-foreground text-center lg:text-left hover:text-primary transition-colors duration-500 ease-out cursor-default">Core Expertise</h2>
              <div className="grid sm:grid-cols-2 gap-8">
                <div 
                  className={`space-y-6 ${getAnimationClass('expertise-card-1', 100)}`}
                  data-animate-id="expertise-card-1"
                >
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-3xl p-8 border border-blue-200/50 hover:from-blue-100 hover:to-blue-200/50 hover:border-blue-300/50 hover:shadow-xl hover:scale-105 transition-all duration-500 ease-out group cursor-pointer">
                    <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-blue-700 transition-colors duration-300">Financial Analysis</h3>
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

                <div 
                  className={`space-y-6 ${getAnimationClass('expertise-card-2', 200)}`}
                  data-animate-id="expertise-card-2"
                >
                  <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-3xl p-8 border border-green-200/50 hover:from-green-100 hover:to-green-200/50 hover:border-green-300/50 hover:shadow-xl hover:scale-105 transition-all duration-500 ease-out group cursor-pointer">
                    <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-green-700 transition-colors duration-300">Technology Integration</h3>
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
            <div 
              className={`space-y-8 ${getAnimationClass('impact-section')}`}
              data-animate-id="impact-section"
            >
              <h2 className="text-3xl font-bold text-foreground text-center lg:text-left hover:text-primary transition-colors duration-500 ease-out cursor-default">Professional Impact</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <div 
                  className={`text-center space-y-2 p-4 rounded-2xl hover:bg-primary/5 hover:scale-110 transition-all duration-500 ease-out cursor-default group ${getAnimationClass('impact-metric-1', 100)}`}
                  data-animate-id="impact-metric-1"
                >
                  <div className="text-4xl font-bold text-primary group-hover:scale-125 transition-transform duration-300">6</div>
                  <div className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">Companies</div>
                </div>
                <div 
                  className={`text-center space-y-2 p-4 rounded-2xl hover:bg-primary/5 hover:scale-110 transition-all duration-500 ease-out cursor-default group ${getAnimationClass('impact-metric-2', 200)}`}
                  data-animate-id="impact-metric-2"
                >
                  <div className="text-4xl font-bold text-primary group-hover:scale-125 transition-transform duration-300">3</div>
                  <div className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">Industries</div>
                </div>
                <div 
                  className={`text-center space-y-2 p-4 rounded-2xl hover:bg-primary/5 hover:scale-110 transition-all duration-500 ease-out cursor-default group ${getAnimationClass('impact-metric-3', 300)}`}
                  data-animate-id="impact-metric-3"
                >
                  <div className="text-4xl font-bold text-primary group-hover:scale-125 transition-transform duration-300">5+</div>
                  <div className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">Years</div>
                </div>
                <div 
                  className={`text-center space-y-2 p-4 rounded-2xl hover:bg-primary/5 hover:scale-110 transition-all duration-500 ease-out cursor-default group ${getAnimationClass('impact-metric-4', 400)}`}
                  data-animate-id="impact-metric-4"
                >
                  <div className="text-4xl font-bold text-primary group-hover:scale-125 transition-transform duration-300">2020</div>
                  <div className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">Graduate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div 
            className={`text-center ${getAnimationClass('cta-section')}`}
            data-animate-id="cta-section"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 inline-block hover:bg-white hover:shadow-2xl hover:scale-105 hover:border-primary/20 transition-all duration-700 ease-out group">
              <h3 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">Ready to Connect?</h3>
              <p className="text-muted-foreground mb-6 max-w-md group-hover:text-foreground transition-colors duration-300">
                Explore detailed insights into my experience, education, and achievements below.
              </p>
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white text-lg px-10 py-4 rounded-2xl font-semibold transition-all duration-500 hover:shadow-2xl hover:scale-110 hover:-translate-y-1 active:scale-95"
                onClick={() => scrollToSection("#contact")}
                data-testid="button-contact"
              >
                <HiOutlineMail className="mr-3 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
