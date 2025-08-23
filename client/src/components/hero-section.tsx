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
    <section className="apple-section pt-24 pb-32 px-6 relative overflow-hidden min-h-screen flex items-center justify-center">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, hsl(0 0% 100%) 0%, hsl(0 0% 99%) 40%, hsl(0 0% 97%) 100%)' }} />
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/2 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container-width relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Main Content Section */}
          <div className="lg:col-span-3 space-y-8">
            {/* Hero Header */}
            <div className="space-y-6">
              <div>
                <h1 className="text-6xl font-bold text-foreground mb-4 tracking-tight leading-none">
                  Tyler Bustard
                </h1>
                <p className="text-2xl font-semibold text-primary mb-4">
                  Finance & Technology Professional
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="inline-flex items-center bg-primary/10 rounded-full px-4 py-2">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    <span className="text-sm font-semibold text-primary">CFA Level I Candidate</span>
                  </div>
                  <div className="inline-flex items-center bg-muted rounded-full px-4 py-2">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-foreground">5+ Years Experience</span>
                  </div>
                </div>
              </div>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Transforming financial markets through data-driven insights and innovative technology solutions. 
                Specialized in equity research, portfolio optimization, and AI-enhanced investment strategies.
              </p>
            </div>

            {/* Key Metrics - Apple Numbers style */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="apple-card border-0 p-6 text-center apple-hover">
                <div className="text-3xl font-bold text-primary mb-1">6</div>
                <div className="text-sm font-medium text-muted-foreground">Companies</div>
              </div>
              <div className="apple-card border-0 p-6 text-center apple-hover">
                <div className="text-3xl font-bold text-primary mb-1">3</div>
                <div className="text-sm font-medium text-muted-foreground">Industries</div>
              </div>
              <div className="apple-card border-0 p-6 text-center apple-hover">
                <div className="text-3xl font-bold text-primary mb-1">BMO</div>
                <div className="text-sm font-medium text-muted-foreground">Current</div>
              </div>
              <div className="apple-card border-0 p-6 text-center apple-hover">
                <div className="text-3xl font-bold text-primary mb-1">2020</div>
                <div className="text-sm font-medium text-muted-foreground">Graduate</div>
              </div>
            </div>

            {/* Core Expertise - Enhanced */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Core Expertise</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="apple-card border-0 p-6 apple-hover">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <div className="w-6 h-6 bg-blue-500 rounded"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Financial Analysis</h4>
                      <p className="text-sm text-muted-foreground">Equity research, DCF modeling, financial statement analysis</p>
                    </div>
                  </div>
                </div>
                <div className="apple-card border-0 p-6 apple-hover">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <div className="w-6 h-6 bg-green-500 rounded"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Technology Integration</h4>
                      <p className="text-sm text-muted-foreground">AI-driven analytics, portfolio optimization, data science</p>
                    </div>
                  </div>
                </div>
                <div className="apple-card border-0 p-6 apple-hover">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <div className="w-6 h-6 bg-purple-500 rounded"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Investment Strategy</h4>
                      <p className="text-sm text-muted-foreground">Portfolio management, risk assessment, market analysis</p>
                    </div>
                  </div>
                </div>
                <div className="apple-card border-0 p-6 apple-hover">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <div className="w-6 h-6 bg-orange-500 rounded"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Client Relations</h4>
                      <p className="text-sm text-muted-foreground">Relationship management, advisory services, solutions design</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="pt-4">
              <Button 
                size="lg"
                className="apple-button-primary text-lg px-8 py-4"
                onClick={() => scrollToSection("#contact")}
                data-testid="button-contact"
              >
                <HiOutlineMail className="mr-3 h-5 w-5" />
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Profile & Achievements Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-full max-w-sm mx-auto relative">
                <div className="aspect-square rounded-3xl overflow-hidden apple-card border-0 shadow-2xl">
                  <img 
                    src={profileImage} 
                    alt="Tyler Bustard professional headshot" 
                    className="w-full h-full object-cover object-center apple-hover"
                    data-testid="img-profile"
                  />
                </div>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="apple-card border-0 p-6">
              <h3 className="font-semibold text-foreground mb-4">Professional Highlights</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Portfolio Assistant at BMO Private Wealth</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">University of New Brunswick Graduate (BBA)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Multi-bank experience (BMO, TD, RBC)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Marketing & Tax Experience</span>
                </div>
              </div>
            </div>

            {/* Education Preview */}
            <div className="apple-card border-0 p-6">
              <h3 className="font-semibold text-foreground mb-4">Education</h3>
              <div className="space-y-3">
                <div>
                  <div className="font-medium text-foreground">Bachelor of Business Administration</div>
                  <div className="text-sm text-muted-foreground">University of New Brunswick • Class of 2020</div>
                </div>
                <div className="text-xs text-muted-foreground">
                  Academic Excellence • Case Competition Winner • Leadership Recognition
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
