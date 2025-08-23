import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import EducationSection from "@/components/about-section";
import ExperienceSection from "@/components/experience-section";
import CertificationsSection, { CommunitySection } from "@/components/skills-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <EducationSection />
      <ExperienceSection />
      <CertificationsSection />
      <CommunitySection />
      <ContactSection />
      
      {/* Footer with Glass Effect */}
      <footer className="apple-section-glass bg-foreground/90 text-background py-12 px-6 backdrop-blur-[10px] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/80 to-transparent"></div>
        <div className="container-width relative z-10">
          <div className="text-center gsap-fade-in">
            <h3 className="text-2xl font-semibold mb-4">Tyler Bustard</h3>
            <p className="text-gray-400 mb-6">Driving investment excellence through advanced analytics and financial expertise.</p>
            
            <div className="border-t border-white/20 pt-8 mt-8">
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
