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
    <section className="pt-32 pb-24 px-6 relative overflow-hidden">
      <div className="container-width">
        <div className="text-center relative z-10">
          <div className="relative inline-block mb-12">
            <img 
              src={profileImage} 
              alt="Tyler Bustard professional headshot" 
              className="w-40 h-40 rounded-full mx-auto object-cover shadow-2xl border-4 border-white ring-4 ring-primary/10 transition-all duration-300 hover:scale-105"
              data-testid="img-profile"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 tracking-tight">
            Tyler Bustard
          </h1>
          <p className="text-2xl md:text-3xl text-primary mb-10 max-w-4xl mx-auto font-medium">
            Equity Analyst & Financial Technology Specialist
          </p>
          <p className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed font-light">
            CFA Level I candidate with expertise in equity research, financial modeling, and AI-driven analytics. Combining traditional finance expertise with modern data science to drive investment decision-making and portfolio optimization.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              onClick={() => scrollToSection("#contact")}
              data-testid="button-contact"
            >
              <Mail className="mr-3 h-5 w-5" />
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
