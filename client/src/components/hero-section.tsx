import { Button } from "@/components/ui/button";
import { HiOutlineMail } from "react-icons/hi";
import profileImage from "@assets/Untitled design (1)_1755896187722.png";

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden min-h-screen">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/50 to-gray-100/30" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/4 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="relative z-10 pt-32 pb-24 px-6">
        <div className="container-width">
          {/* Hero Header - Center Stage */}
          <div className="text-center mb-20">
            {/* Mobile Profile Image */}
            <div className="lg:hidden mb-12">
              <div className="w-72 h-72 mx-auto relative">
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

            <div className="space-y-8">
              <div>
                <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight leading-none">
                  Tyler Bustard
                </h1>
                <p className="text-2xl md:text-3xl font-semibold text-primary mb-8">
                  Finance & Technology Professional
                </p>
                
                {/* Credentials */}
                <div className="flex flex-wrap gap-4 justify-center mb-8">
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
              
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                Driving innovation at the intersection of finance and technology. 
                Delivering exceptional results through analytical expertise, strategic thinking, and client-focused solutions.
              </p>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-12 mb-20">
            {/* Desktop Profile Image */}
            <div className="hidden lg:block">
              <div className="sticky top-32">
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

            {/* Professional Overview */}
            <div className="lg:col-span-2 space-y-12">
              {/* Career Progression */}
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-foreground text-center lg:text-left">Career Journey</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 hover:shadow-lg transition-all duration-300">
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center">
                        <div className="w-6 h-6 bg-white rounded-lg"></div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">BMO Private Wealth</h3>
                        <p className="text-primary font-medium mb-2">Portfolio Assistant • Present</p>
                        <p className="text-sm text-muted-foreground">Leading portfolio management and client advisory services for high-net-worth individuals</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 hover:shadow-lg transition-all duration-300">
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center">
                        <div className="w-6 h-6 bg-white rounded-lg"></div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">Multi-Bank Experience</h3>
                        <p className="text-primary font-medium mb-2">TD Bank • RBC • Irving Oil</p>
                        <p className="text-sm text-muted-foreground">Comprehensive financial services experience across major Canadian institutions</p>
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
