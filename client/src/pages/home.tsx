import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ExperienceSection from "@/components/experience-section";
import SQLTranslator from "@/components/sql-translator";
import PortfolioSection from "@/components/portfolio-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <SQLTranslator />
      <PortfolioSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="liquid-glass-card bg-foreground/10 text-foreground py-12 px-6 specular-highlight">
        <div className="container-width">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Tyler Bustard</h3>
            <p className="text-gray-400 mb-6">Driving investment excellence through advanced analytics and financial expertise.</p>
            
            
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
