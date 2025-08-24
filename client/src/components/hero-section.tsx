import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInitialPageAnimation } from "@/hooks/useScrollAnimation";
import { useQuery } from "@tanstack/react-query";
// VideoOverlay no longer needed - using YouTube directly
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
  const isPageLoaded = useInitialPageAnimation(300);
  
  // Fetch active video from backend
  const videosQuery = useQuery({
    queryKey: ['/api/videos'],
    staleTime: 60000, // 1 minute
  });

  // Smooth scroll to section function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  
  return (
    <section id="hero" className="relative overflow-hidden min-h-screen flex items-start justify-center pt-16 sm:pt-20" style={{ backgroundColor: '#f5f5f7' }}>
      <div className="relative z-10 px-4 sm:px-6 mt-2 sm:mt-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Main Hero Card */}
          <div className={`bg-white/70 backdrop-blur-[25px] backdrop-saturate-[200%] backdrop-brightness-[110%] border border-white/20 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-12 lg:p-16 shadow-2xl hover:shadow-3xl transition-all duration-500 page-load-fade-in ${isPageLoaded ? 'loaded' : ''}`}
               style={{
                 backdropFilter: 'blur(25px) saturate(200%) brightness(110%)',
                 WebkitBackdropFilter: 'blur(25px) saturate(200%) brightness(110%)',
                 boxShadow: '0 20px 80px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
               }}>
            
            <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-black/5 hover:scale-105 transition-all duration-500">
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
              <div className="flex-1 space-y-6 sm:space-y-8 text-center lg:text-left">
                {/* Name & Title */}
                <div className="space-y-4 sm:space-y-6">
                  <div className="space-y-2 sm:space-y-3">
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground tracking-tight leading-tight">
                      Tyler Bustard
                    </h1>
                    <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/60 rounded-full mx-auto lg:mx-0" />
                  </div>
                  <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-primary">
                    Finance & Technology Professional
                  </p>
                </div>

                {/* Description */}
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Driving innovation at the intersection of finance and technology. 
                  Delivering exceptional results through analytical expertise, strategic thinking, and client-focused solutions.
                </p>

                {/* Introduction Button */}
                <div className="flex justify-center lg:justify-start pt-2 sm:pt-4">
                  <Button
                    onClick={() => {
                      const activeVideo = videosQuery.data && 
                        Array.isArray(videosQuery.data) &&
                        videosQuery.data.find((video: any) => video.isActive);
                      
                      if (activeVideo) {
                        // Create and show video overlay with uploaded video player
                        const overlay = document.createElement('div');
                        overlay.id = 'video-overlay';
                        overlay.className = 'fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4';
                        
                        overlay.innerHTML = `
                          <div class="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">
                            <button 
                              onclick="document.getElementById('video-overlay').remove()" 
                              class="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-all"
                            >
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                              </svg>
                            </button>
                            <video 
                              width="100%" 
                              height="100%" 
                              controls
                              autoplay
                              muted
                              class="w-full h-full"
                            >
                              <source src="${activeVideo.fileUrl}" type="video/mp4">
                              <source src="${activeVideo.fileUrl}" type="video/quicktime">
                              <source src="${activeVideo.fileUrl}" type="video/mov">
                              <source src="${activeVideo.fileUrl}" type="video/avi">
                              <source src="${activeVideo.fileUrl}" type="video/webm">
                              Your browser does not support the video tag.
                            </video>
                          </div>
                        `;
                        
                        // Try to play the video after a short delay
                        setTimeout(() => {
                          const video = overlay.querySelector('video') as HTMLVideoElement;
                          if (video) {
                            video.play().catch(e => {
                              console.log('Autoplay failed, user will need to click play manually:', e);
                            });
                          }
                        }, 100);
                        document.body.appendChild(overlay);
                        
                        // Close on escape key
                        const handleEscape = (e: KeyboardEvent) => {
                          if (e.key === 'Escape') {
                            overlay.remove();
                            document.removeEventListener('keydown', handleEscape);
                          }
                        };
                        document.addEventListener('keydown', handleEscape);
                        
                        // Close on background click
                        overlay.addEventListener('click', (e) => {
                          if (e.target === overlay) {
                            overlay.remove();
                            document.removeEventListener('keydown', handleEscape);
                          }
                        });
                      } else {
                        scrollToSection('introduction');
                      }
                    }}
                    className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 sm:px-8 py-4 sm:py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3 text-base sm:text-lg min-h-[56px]"
                    data-testid="button-introduction"
                  >
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <Play size={16} className="ml-0.5" />
                    </div>
                    {videosQuery.data && 
                     Array.isArray(videosQuery.data) &&
                     videosQuery.data.find((video: any) => video.isActive) ? 'Watch Introduction Video' : 'Introduction'}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats/Highlights Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 mt-8 sm:mt-12 mb-8">
            
            {/* Education Card */}
            <div 
              onClick={() => scrollToSection('education')}
              className={`bg-white/50 backdrop-blur-[20px] backdrop-saturate-[200%] backdrop-brightness-[110%] border border-white/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 page-load-fade-in cursor-pointer min-h-[180px] sm:min-h-[200px] flex flex-col justify-between ${isPageLoaded ? 'loaded' : ''}`}
                 style={{
                   backdropFilter: 'blur(20px) saturate(200%) brightness(110%)',
                   WebkitBackdropFilter: 'blur(20px) saturate(200%) brightness(110%)',
                   animationDelay: '0.5s'
                 }}
                 data-testid="card-education">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center relative">
                  <img src={unbLogo} alt="Education" className="w-6 h-6 object-contain" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Education</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Bachelor of Business Administration in Finance
              </p>
            </div>

            {/* Experience Card */}
            <div 
              onClick={() => scrollToSection('experience')}
              className={`bg-white/50 backdrop-blur-[20px] backdrop-saturate-[200%] backdrop-brightness-[110%] border border-white/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 page-load-fade-in cursor-pointer min-h-[180px] sm:min-h-[200px] flex flex-col justify-between ${isPageLoaded ? 'loaded' : ''}`}
                 style={{
                   backdropFilter: 'blur(20px) saturate(200%) brightness(110%)',
                   WebkitBackdropFilter: 'blur(20px) saturate(200%) brightness(110%)',
                   animationDelay: '0.6s'
                 }}
                 data-testid="card-experience">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center relative overflow-visible">
                  {/* Three most recent experience logos stacked */}
                  <div className="flex relative">
                    <div className="w-6 h-6 bg-white rounded-full border-2 border-white shadow-md flex items-center justify-center relative z-30">
                      <img src={bmoLogo} alt="BMO" className="w-4 h-4 object-contain" />
                    </div>
                    <div className="w-6 h-6 bg-white rounded-full border-2 border-white shadow-md flex items-center justify-center relative z-20 -ml-2">
                      <img src={tdLogo} alt="TD" className="w-4 h-4 object-contain" />
                    </div>
                    <div className="w-6 h-6 bg-white rounded-full border-2 border-white shadow-md flex items-center justify-center relative z-10 -ml-2">
                      <img src={rbcLogo} alt="RBC" className="w-4 h-4 object-contain" />
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground">Experience</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Professional experience in investment banking and financial services
              </p>
            </div>

            {/* Certifications Card */}
            <div 
              onClick={() => scrollToSection('skills')}
              className={`bg-white/50 backdrop-blur-[20px] backdrop-saturate-[200%] backdrop-brightness-[110%] border border-white/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 page-load-fade-in cursor-pointer min-h-[180px] sm:min-h-[200px] flex flex-col justify-between ${isPageLoaded ? 'loaded' : ''}`}
                 style={{
                   backdropFilter: 'blur(20px) saturate(200%) brightness(110%)',
                   WebkitBackdropFilter: 'blur(20px) saturate(200%) brightness(110%)',
                   animationDelay: '0.7s'
                 }}
                 data-testid="card-certifications">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center relative overflow-visible">
                  {/* Three most recent certification logos stacked */}
                  <div className="flex relative">
                    <div className="w-6 h-6 bg-white rounded-full border-2 border-white shadow-md flex items-center justify-center relative z-30">
                      <img src={cfaLogo} alt="CFA" className="w-4 h-4 object-contain" />
                    </div>
                    <div className="w-6 h-6 bg-white rounded-full border-2 border-white shadow-md flex items-center justify-center relative z-20 -ml-2">
                      <img src={trainingTheStreetLogo} alt="Training the Street" className="w-4 h-4 object-contain" />
                    </div>
                    <div className="w-6 h-6 bg-white rounded-full border-2 border-white shadow-md flex items-center justify-center relative z-10 -ml-2">
                      <img src={etsLogo} alt="ETS" className="w-4 h-4 object-contain" />
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground">Certifications</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Advanced certifications in finance, technology, and professional development
              </p>
            </div>

            {/* Community Card */}
            <div 
              onClick={() => scrollToSection('community')}
              className={`bg-white/50 backdrop-blur-[20px] backdrop-saturate-[200%] backdrop-brightness-[110%] border border-white/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 page-load-fade-in cursor-pointer min-h-[180px] sm:min-h-[200px] flex flex-col justify-between ${isPageLoaded ? 'loaded' : ''}`}
                 style={{
                   backdropFilter: 'blur(20px) saturate(200%) brightness(110%)',
                   WebkitBackdropFilter: 'blur(20px) saturate(200%) brightness(110%)',
                   animationDelay: '0.8s'
                 }}
                 data-testid="card-community">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center relative overflow-visible">
                  {/* Three most recent community logos stacked */}
                  <div className="flex relative">
                    <div className="w-6 h-6 bg-white rounded-full border-2 border-white shadow-md flex items-center justify-center relative z-30">
                      <img src={unitedWayLogo} alt="United Way" className="w-4 h-4 object-contain" />
                    </div>
                    <div className="w-6 h-6 bg-white rounded-full border-2 border-white shadow-md flex items-center justify-center relative z-20 -ml-2">
                      <img src={rbcLogo} alt="RBC" className="w-4 h-4 object-contain" />
                    </div>
                    <div className="w-6 h-6 bg-white rounded-full border-2 border-white shadow-md flex items-center justify-center relative z-10 -ml-2">
                      <img src={irvingLogo} alt="Irving Oil" className="w-4 h-4 object-contain" />
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground">Community</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Community leadership and volunteer service initiatives
              </p>
            </div>

          </div>
        </div>
      </div>
      
      {/* Video now opens directly on YouTube */}
    </section>
  );
}
