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
        <div className="text-center">
          <div className="relative floating">
            <img 
              src={profileImage} 
              alt="Tyler Bustard professional headshot" 
              className="w-40 h-40 rounded-full mx-auto mb-8 object-cover shadow-2xl border-4 border-white/20 glass-card"
              data-testid="img-profile"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-500/20 to-blue-500/20 blur-xl"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Tyler Bustard</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-medium">
            Equity Analyst & Financial Technology Specialist
          </p>
          <p className="text-lg text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            CFA Level I candidate with expertise in equity research, financial modeling, and AI-driven analytics. Combining traditional finance expertise with modern data science to drive investment decision-making and portfolio optimization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection("#contact")}
              className="glass-card hover:glow transition-all duration-300 text-white border-white/20 hover:border-white/40 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-md px-8 py-3 text-lg"
              data-testid="button-contact"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
