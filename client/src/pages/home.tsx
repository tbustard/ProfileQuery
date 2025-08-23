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
      
      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-6">
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
