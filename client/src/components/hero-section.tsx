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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Section - Apple's asymmetrical approach */}
          <div className="order-2 lg:order-1 space-y-8">
            {/* Primary Intro Card - Apple style */}
            <div className="apple-card border-0 p-8">
              <div className="space-y-6">
                <div>
                  <h1 className="text-5xl font-bold text-foreground mb-4 tracking-tight">
                    Tyler Bustard
                  </h1>
                  <p className="text-xl font-semibold text-primary mb-2">
                    Equity Analyst & Financial Technology Specialist
                  </p>
                  <div className="inline-flex items-center bg-muted rounded-full px-4 py-2">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    <span className="body-text font-medium text-foreground">CFA Level I Candidate</span>
                  </div>
                </div>
                
                <p className="callout text-muted-foreground leading-relaxed">
                  Combining traditional finance expertise with modern data science to drive investment decision-making and portfolio optimization through equity research, financial modeling, and AI-driven analytics.
                </p>
              </div>
            </div>

            {/* Expertise Cards - Apple grid layout */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="apple-card border-0 p-6 apple-hover">
                <h3 className="font-semibold text-foreground mb-2">Financial Analysis</h3>
                <p className="body-text text-muted-foreground text-sm">Equity research & modeling</p>
              </div>
              <div className="apple-card border-0 p-6 apple-hover">
                <h3 className="font-semibold text-foreground mb-2">Technology Integration</h3>
                <p className="body-text text-muted-foreground text-sm">AI-driven analytics & optimization</p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="pt-4">
              <Button 
                size="lg"
                className="apple-button-primary text-lg w-full sm:w-auto"
                onClick={() => scrollToSection("#contact")}
                data-testid="button-contact"
              >
                <HiOutlineMail className="mr-3 h-5 w-5" />
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Profile Image Section - Apple's visual hierarchy */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Profile container with Apple styling */}
              <div className="relative">
                <div className="w-72 h-72 rounded-3xl overflow-hidden apple-card border-0 shadow-2xl">
                  <img 
                    src={profileImage} 
                    alt="Tyler Bustard professional headshot" 
                    className="w-full h-full object-cover object-center apple-hover"
                    data-testid="img-profile"
                  />
                </div>
                
                {/* Floating achievement badge - Apple style */}
                <div className="absolute -bottom-4 -right-4 apple-card border-0 p-3 shadow-lg">
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary mb-1">CFA</div>
                    <div className="body-text text-muted-foreground text-xs">Level I</div>
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
