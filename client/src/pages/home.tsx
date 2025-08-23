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
      
      {/* Clean Footer */}
      <footer className="relative bg-white border-t border-gray-200 py-8">
        <div className="absolute inset-0 bg-white" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="text-center">
            <p className="text-foreground font-medium">
              © {new Date().getFullYear()} Tyler Bustard. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
