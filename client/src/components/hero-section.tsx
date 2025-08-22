import { Button } from "@/components/ui/button";
import { Database, Mail } from "lucide-react";
import profileImage from "@assets/Untitled design (1)_1755896187722.png";

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-16 px-6">
      <div className="container-width">
        <div className="text-center">
          <div className="relative w-32 h-32 mx-auto mb-8">
            <img 
              src={profileImage} 
              alt="Tyler Bustard professional headshot" 
              className="w-full h-full rounded-full object-cover shadow-2xl"
              data-testid="img-profile"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 to-transparent backdrop-blur-sm border border-white/40"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Tyler Bustard
          </h1>
          <p className="text-xl md:text-2xl text-secondary mb-8 max-w-3xl mx-auto">
            Equity Analyst & Financial Technology Specialist
          </p>
          <p className="text-lg text-secondary mb-12 max-w-2xl mx-auto leading-relaxed">
            CFA Level I candidate with expertise in equity research, financial modeling, and AI-driven analytics. Combining traditional finance expertise with modern data science to drive investment decision-making and portfolio optimization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection("#sql-translator")}
              className="liquid-glass-button text-primary font-semibold specular-highlight"
              data-testid="button-try-translator"
            >
              <Database className="mr-2 h-4 w-4" />
              Try Analytics Tool
            </Button>
            <Button 
              onClick={() => scrollToSection("#contact")}
              className="liquid-glass-button text-secondary font-semibold"
              data-testid="button-contact"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
