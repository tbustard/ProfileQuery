import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import EducationSection from "@/components/about-section";
import ExperienceSection from "@/components/experience-section";
import CertificationsSection, { CommunitySection } from "@/components/skills-section";
import ContactInfoSection from "@/components/contact-info-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <EducationSection />
      <ExperienceSection />
      <CertificationsSection />
      <CommunitySection />
      <ContactInfoSection />
      
      {/* Translucent Black Footer */}
      <footer className="relative bg-black/10 backdrop-blur-[25px] backdrop-saturate-[200%] backdrop-brightness-[50%] border-t border-black/20 py-8">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="text-center">
            <p className="text-white/90 font-medium">
              © {new Date().getFullYear()} Tyler Bustard. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
