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
    <section className="apple-section pt-32 pb-32 px-6 relative overflow-hidden min-h-screen flex items-center justify-center">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, hsl(0 0% 100%) 0%, hsl(0 0% 99%) 40%, hsl(0 0% 97%) 100%)' }} />
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/2 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="container-width relative z-10">
        <div className="text-center relative z-10">
          <div className="relative inline-block mb-12">
            <img 
              src={profileImage} 
              alt="Tyler Bustard professional headshot" 
              className="w-48 h-48 rounded-full mx-auto object-cover shadow-2xl border-4 border-white ring-4 ring-primary/10 apple-hover"
              data-testid="img-profile"
            />
          </div>
          
          <h1 className="headline text-foreground mb-8">
            Tyler Bustard
          </h1>
          <p className="subheadline text-primary mb-10 max-w-4xl mx-auto">
            Equity Analyst & Financial Technology Specialist
          </p>
          <p className="callout text-muted-foreground mb-16 max-w-3xl mx-auto">
            CFA Level I candidate with expertise in equity research, financial modeling, and AI-driven analytics. Combining traditional finance expertise with modern data science to drive investment decision-making and portfolio optimization.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg"
              className="apple-button-primary text-lg"
              onClick={() => scrollToSection("#contact")}
              data-testid="button-contact"
            >
              <HiOutlineMail className="mr-3 h-5 w-5" />
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
