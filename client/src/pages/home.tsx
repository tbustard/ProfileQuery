import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { LiquidGlass } from '@specy/liquid-glass-react';
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import EducationSection from "@/components/about-section";
import ExperienceSection from "@/components/experience-section";
import CertificationsSection, { CommunitySection } from "@/components/skills-section";
import DownloadSection from "@/components/download-section";
import ContactInfoSection from "@/components/contact-info-section";

export default function Home() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [isOverDarkSection, setIsOverDarkSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      setShowScrollToTop(scrollY > 300);
      
      // Check if we're actually over the black footer section
      // Footer is much smaller, only about 80px high, so be more precise
      const footerThreshold = documentHeight - windowHeight - 80;
      setIsOverDarkSection(scrollY > footerThreshold);
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
    <div className="min-h-screen" style={{ backgroundColor: '#f5f5f7' }}>
      <Navigation />
      <HeroSection />
      <EducationSection />
      <ExperienceSection />
      <CertificationsSection />
      <CommunitySection />
      <ContactInfoSection />
      <DownloadSection />
      
      {/* Scroll to Top Button with Liquid Glass Effect */}
      <div 
        className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-500 ease-out ${
          showScrollToTop 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <LiquidGlass
          className="shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
          style="border-radius: 50px; padding: 12px 24px;"
          radius={50}
          thickness={50}
          roughness={0.2}
          reflectivity={0.9}
          chromaticAberration={5}
          segments={86}
        >
          <div className="flex items-center">
            <span className={`text-sm font-medium mr-4 whitespace-nowrap transition-colors duration-300 ${
              isOverDarkSection ? 'text-white' : 'text-foreground'
            }`}>
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
        </LiquidGlass>
      </div>
      
      {/* Clean Footer */}
      <footer className="relative bg-black/90 border-t border-gray-200 py-8">
        <div className="absolute inset-0 bg-black/90" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white font-medium">
              © {new Date().getFullYear()} Tyler Bustard. All rights reserved.
            </p>
            <button
              onClick={() => window.location.href = '/employer'}
              className="px-4 py-2 text-sm font-medium rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white transition-all duration-200"
              data-testid="footer-employer-signin"
            >
              Sign In
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
