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
          <img 
            src={profileImage} 
            alt="Tyler Bustard professional headshot" 
            className="w-32 h-32 rounded-full mx-auto mb-8 object-cover shadow-lg"
            data-testid="img-profile"
          />
          
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
              variant="outline"
              onClick={() => scrollToSection("#contact")}
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
