import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ExperienceSection from "@/components/experience-section";
import SQLTranslator from "@/components/sql-translator";
import PortfolioSection from "@/components/portfolio-section";
import ContactSection from "@/components/contact-section";
import { Linkedin, Github, Twitter, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <SQLTranslator />
      <PortfolioSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-6">
        <div className="container-width">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Tyler Bustard</h3>
            <p className="text-gray-400 mb-6">Driving investment excellence through advanced analytics and financial expertise.</p>
            
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" data-testid="link-linkedin">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" data-testid="link-github">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" data-testid="link-twitter">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" data-testid="link-email">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            
            <div className="border-t border-gray-700 pt-8">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Tyler Bustard. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
