import React from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import EducationSection from "@/components/about-section";
import ExperienceSection from "@/components/experience-section";
import CertificationsSection, { CommunitySection } from "@/components/skills-section";
import ContactInfoSection from "@/components/contact-info-section";

export default function Home() {

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f5f7' }}>
      <Navigation />
      <HeroSection />
      <EducationSection />
      <ExperienceSection />
      <CertificationsSection />
      <CommunitySection />
      <ContactInfoSection />
      
      
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
