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
                      console.log('Button clicked. Videos data:', videosQuery.data);
                      const activeVideo = videosQuery.data && 
                        Array.isArray(videosQuery.data) &&
                        videosQuery.data.find((video: any) => video.isActive);
                      
                      console.log('Active video found:', activeVideo);
                      
                      if (activeVideo) {
                        console.log('Creating video overlay for:', activeVideo.fileUrl);
                        
                        // Create simple video overlay
                        const overlay = document.createElement('div');
                        overlay.id = 'video-overlay';
                        overlay.style.cssText = `
                          position: fixed;
                          top: 0;
                          left: 0;
                          width: 100vw;
                          height: 100vh;
                          background: rgba(0,0,0,0.9);
                          z-index: 999999;
                          display: flex;
                          align-items: center;
                          justify-content: center;
                          padding: 20px;
                        `;
                        
                        // Create close button
                        const closeBtn = document.createElement('button');
                        closeBtn.innerHTML = '✕ Close';
                        closeBtn.style.cssText = `
                          position: absolute;
                          top: 20px;
                          right: 20px;
                          background: white;
                          border: none;
                          padding: 10px 15px;
                          border-radius: 5px;
                          cursor: pointer;
                          font-size: 16px;
                          z-index: 1000000;
                        `;
                        closeBtn.onclick = () => overlay.remove();
                        
                        // Create video element
                        const video = document.createElement('video');
                        video.controls = true;
                        video.autoplay = true;
                        video.muted = true;
                        video.style.cssText = `
                          max-width: 90%;
                          max-height: 90%;
                          width: auto;
                          height: auto;
                          background: black;
                        `;
                        video.src = activeVideo.fileUrl;
                        
                        // Add event listeners for debugging
                        video.addEventListener('loadstart', () => console.log('✅ Video loading started'));
                        video.addEventListener('loadeddata', () => {
                          console.log('✅ Video data loaded');
                          console.log('Video dimensions:', video.videoWidth, 'x', video.videoHeight);
                          console.log('Video element size:', video.offsetWidth, 'x', video.offsetHeight);
                        });
                        video.addEventListener('error', (e) => console.error('❌ Video error:', e));
                        video.addEventListener('canplay', () => console.log('✅ Video can play'));
                        
                        overlay.appendChild(video);
                        overlay.appendChild(closeBtn);
                        document.body.appendChild(overlay);
                        console.log('✅ Simple video overlay created');
                        
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
                        console.log('No active video found, scrolling to introduction');
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8 mb-6">
            
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
              <div className="flex items-center gap-3 mb-1">
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
              <div className="flex items-center gap-3 mb-1">
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
              <div className="flex items-center gap-3 mb-1">
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
              <div className="flex items-center gap-3 mb-1">
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
