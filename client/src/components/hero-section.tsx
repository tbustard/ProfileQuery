import { Button } from "@/components/ui/button";
import { Database, Mail } from "lucide-react";

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
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200" 
            alt="Professional headshot" 
            className="w-32 h-32 rounded-full mx-auto mb-8 object-cover shadow-lg"
            data-testid="img-profile"
          />
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            John Developer
          </h1>
          <p className="text-xl md:text-2xl text-secondary mb-8 max-w-3xl mx-auto">
            Full Stack Engineer & Data Specialist
          </p>
          <p className="text-lg text-secondary mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about building scalable web applications and transforming complex data into actionable insights. Specializing in modern web technologies and intelligent data processing solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection("#sql-translator")}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              data-testid="button-try-translator"
            >
              <Database className="mr-2 h-4 w-4" />
              Try SQL Translator
            </Button>
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
