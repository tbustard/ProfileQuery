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
  const [isOverDarkSection, setIsOverDarkSection] = useState(false);
  const [buttonBottomOffset, setButtonBottomOffset] = useState(32); // 32px = bottom-8

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
      
      // Adjust button position to avoid overlapping with footer
      // Footer height is approximately 120px including padding and content
      const footerHeight = 120;
      const buttonAdjustmentThreshold = documentHeight - windowHeight - footerHeight;
      
      if (scrollY > buttonAdjustmentThreshold) {
        // Position button above footer when near bottom
        const adjustedBottom = footerHeight + 16; // 16px gap above footer
        setButtonBottomOffset(adjustedBottom);
      } else {
        // Normal position when not near footer
        setButtonBottomOffset(32); // 32px = bottom-8
      }
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
      
      {/* Clean Scroll to Top Button with Glass Effect */}
      <button
        onClick={scrollToTop}
        className={`fixed left-1/2 transform -translate-x-1/2 z-40 transition-all duration-500 ease-out rounded-full ${
          showScrollToTop 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 translate-y-4 pointer-events-none'
        } hover:scale-105 shadow-xl hover:shadow-2xl`}
        style={{ 
          bottom: `${buttonBottomOffset}px`,
          background: 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          border: '1px solid rgba(0, 0, 0, 0.08)'
        }}
        data-testid="scroll-to-top-button"
      >
        <div className="flex items-center px-5 py-3">
          <span className="text-sm font-medium mr-3 text-gray-700">
            Back to top
          </span>
          <div className="w-8 h-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors duration-200">
            <ChevronUp size={18} />
          </div>
        </div>
      </button>
      
      {/* Clean Footer with Smooth Transition */}
      <footer className="relative bg-gradient-to-b from-gray-900 to-black border-t border-gray-800 py-8 transition-all duration-500">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/90 font-medium">
              © {new Date().getFullYear()} Tyler Bustard. All rights reserved.
            </p>
            <button
              onClick={() => window.location.href = '/employer'}
              className="px-4 py-2 text-sm font-medium rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white transition-all duration-200 hover:scale-105"
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
