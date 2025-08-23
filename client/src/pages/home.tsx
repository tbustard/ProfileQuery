import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import EducationSection from "@/components/about-section";
import ExperienceSection from "@/components/experience-section";
import CertificationsSection, { CommunitySection } from "@/components/skills-section";
import ContactInfoSection from "@/components/contact-info-section";

export default function Home() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollToTop(scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <EducationSection />
      <ExperienceSection />
      <CertificationsSection />
      <CommunitySection />
      <ContactInfoSection />
      
      {/* Scroll to Top Button */}
      <div 
        className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-500 ease-out ${
          showScrollToTop 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <div className="bg-white/90 backdrop-blur-xl border border-gray-200/50 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
          <div className="flex items-center px-6 py-3">
            <span className="text-sm font-medium text-foreground mr-4 whitespace-nowrap">
              Back to top
            </span>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-primary hover:bg-primary/90 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
              data-testid="scroll-to-top-button"
            >
              <ChevronUp size={20} className="transition-transform duration-300 hover:scale-110" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Clean Footer */}
      <footer className="relative bg-black/90 border-t border-gray-200 py-8">
        <div className="absolute inset-0 bg-black/90" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="text-center">
            <p className="text-white font-medium">
              © {new Date().getFullYear()} Tyler Bustard. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
