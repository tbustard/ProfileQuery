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
      
      {/* Test Section */}
      <section id="education" className="section-padding">
        <div className="container-width">
          <h2 className="large-title text-foreground mb-4">Education</h2>
          <p>This is a test section to verify rendering works.</p>
        </div>
      </section>
      
      <section id="experience" className="section-padding">
        <div className="container-width">
          <h2 className="large-title text-foreground mb-4">Professional Experience</h2>
          <p>Experience section test content.</p>
        </div>
      </section>
      
      <section id="certifications" className="section-padding">
        <div className="container-width">
          <h2 className="large-title text-foreground mb-4">Professional Certifications</h2>
          <p>Certifications section test content.</p>
        </div>
      </section>
      
      <section id="community" className="section-padding">
        <div className="container-width">
          <h2 className="large-title text-foreground mb-4">Community</h2>
          <p>Community section test content.</p>
        </div>
      </section>
      
      <section id="contact" className="section-padding">
        <div className="container-width">
          <h2 className="large-title text-foreground mb-4">Get In Touch</h2>
          <p>Contact section test content.</p>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-6">
        <div className="container-width">
          <div className="text-center">
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
