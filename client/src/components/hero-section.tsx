import { useState } from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import VideoOverlay from "@/components/video-overlay";
import profileImage from "@assets/Untitled design (1)_1755896187722.png";
import bmoLogo from "@assets/BMO_Logo.svg_1755913265896.png";
import tdLogo from "@assets/Toronto-Dominion_Bank_logo.svg_1755913265896.png";
import rbcLogo from "@assets/RBC-Logo_1755913716813.png";
import irvingLogo from "@assets/Irving_Oil.svg_1755913265895.png";
import grantThorntonLogo from "@assets/Grant_Thornton_logo_1755913265895.png";
import cfaLogo from "@assets/CFA_Institute_Logo_1755923720192.png";
import csiLogo from "@assets/canadian securities institute_1755923720191.png";
import bloombergLogo from "@assets/bloomberg_1755923720190.png";
import courseraLogo from "@assets/Coursera_1755937682843.png";
import mcgillLogo from "@assets/mcgill_1755937693386.png";
import unbLogo from "@assets/University_of_New_Brunswick_Logo.svg_1755912478863.png";
import wallStreetPrepLogo from "@assets/wall street prep_1755923720193.png";
import trainingTheStreetLogo from "@assets/trainning the street_1755938972014.png";
import etsLogo from "@assets/ETS_1755939510188.png";
import unitedWayLogo from "@assets/United-Way-Logo_1755913265895.png";

export default function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <section id="hero" className="relative overflow-hidden min-h-screen flex items-center justify-center" style={{ backgroundColor: '#f5f5f7' }}>
      <div className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Main Hero Card */}
          <div className="bg-white/70 backdrop-blur-[25px] backdrop-saturate-[200%] backdrop-brightness-[110%] border border-white/20 rounded-[2.5rem] p-12 lg:p-16 shadow-2xl hover:shadow-3xl transition-all duration-500"
               style={{
                 backdropFilter: 'blur(25px) saturate(200%) brightness(110%)',
                 WebkitBackdropFilter: 'blur(25px) saturate(200%) brightness(110%)',
                 boxShadow: '0 20px 80px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
               }}>
            
            <div className="flex flex-col lg:flex-row items-center gap-16">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-black/5 hover:scale-105 transition-all duration-500">
                    <img 
                      src={profileImage} 
                      alt="Tyler Bustard professional headshot" 
                      className="w-full h-full object-cover object-center"
                      data-testid="img-profile"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-8 text-center lg:text-left">
                {/* Name & Title */}
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h1 className="text-5xl lg:text-7xl font-bold text-foreground tracking-tight leading-tight">
                      Tyler Bustard
                    </h1>
                    <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/60 rounded-full mx-auto lg:mx-0" />
                  </div>
                  <p className="text-2xl lg:text-3xl font-semibold text-primary">
                    Finance & Technology Professional
                  </p>
                </div>

                {/* Description */}
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Driving innovation at the intersection of finance and technology. 
                  Delivering exceptional results through analytical expertise, strategic thinking, and client-focused solutions.
                </p>

                {/* Meet Tyler Button */}
                <div className="flex justify-center lg:justify-start pt-4">
                  <Button
                    onClick={() => setIsVideoOpen(true)}
                    className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3 text-lg"
                    data-testid="button-meet-tyler"
                  >
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <Play size={16} className="ml-0.5" />
                    </div>
                    Meet Tyler
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats/Highlights Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            
            {/* Experience Card */}
            <div className="bg-white/50 backdrop-blur-[20px] backdrop-saturate-[200%] backdrop-brightness-[110%] border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                 style={{
                   backdropFilter: 'blur(20px) saturate(200%) brightness(110%)',
                   WebkitBackdropFilter: 'blur(20px) saturate(200%) brightness(110%)',
                 }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <img src={bmoLogo} alt="Experience" className="w-6 h-6 object-contain" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Experience</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                5+ years across top-tier financial institutions
              </p>
            </div>

            {/* Education Card */}
            <div className="bg-white/50 backdrop-blur-[20px] backdrop-saturate-[200%] backdrop-brightness-[110%] border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                 style={{
                   backdropFilter: 'blur(20px) saturate(200%) brightness(110%)',
                   WebkitBackdropFilter: 'blur(20px) saturate(200%) brightness(110%)',
                 }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <img src={unbLogo} alt="Education" className="w-6 h-6 object-contain" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Education</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                BBA with $47,500 in academic scholarships
              </p>
            </div>

            {/* Certifications Card */}
            <div className="bg-white/50 backdrop-blur-[20px] backdrop-saturate-[200%] backdrop-brightness-[110%] border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                 style={{
                   backdropFilter: 'blur(20px) saturate(200%) brightness(110%)',
                   WebkitBackdropFilter: 'blur(20px) saturate(200%) brightness(110%)',
                 }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <img src={cfaLogo} alt="Certifications" className="w-6 h-6 object-contain" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Certifications</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                22+ professional certifications from 17 institutions
              </p>
            </div>

            {/* Community Card */}
            <div className="bg-white/50 backdrop-blur-[20px] backdrop-saturate-[200%] backdrop-brightness-[110%] border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                 style={{
                   backdropFilter: 'blur(20px) saturate(200%) brightness(110%)',
                   WebkitBackdropFilter: 'blur(20px) saturate(200%) brightness(110%)',
                 }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <img src={unitedWayLogo} alt="Community" className="w-6 h-6 object-contain" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Community</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                United Way leadership & financial literacy mentorship
              </p>
            </div>

          </div>
        </div>
      </div>
      
      {/* Video Overlay */}
      <VideoOverlay 
        isOpen={isVideoOpen} 
        onClose={() => setIsVideoOpen(false)}
        videoSrc="/api/introduction-video" 
      />
    </section>
  );
}
