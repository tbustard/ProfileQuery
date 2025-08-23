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
  return (
    <section id="hero" className="relative overflow-hidden min-h-screen">
      {/* Clean Background */}
      <div className="absolute inset-0 bg-white" />
      
      <div className="relative z-10 pt-40 pb-32 px-6">
        <div className="container-width">
          {/* Hero Header - Profile & Name Side by Side */}
          <div className="mb-32">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
                  <div className="aspect-square rounded-[2.5rem] overflow-hidden bg-white shadow-2xl hover:shadow-3xl ring-1 ring-black/5 transition-all duration-500 hover:scale-[1.02]">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/10" />
                    <img 
                      src={profileImage} 
                      alt="Tyler Bustard professional headshot" 
                      className="w-full h-full object-cover object-center transition-all duration-500"
                      data-testid="img-profile"
                    />
                  </div>
                  {/* Subtle glow effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-transparent to-primary/5 rounded-[3rem] blur-xl opacity-50" />
                </div>
              </div>

              {/* Name & Content */}
              <div className="space-y-10 text-center lg:text-left max-w-2xl">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h1 className="text-6xl md:text-8xl lg:text-7xl xl:text-8xl font-bold text-foreground tracking-tight leading-none">
                      Tyler Bustard
                    </h1>
                    <div className="h-1 w-24 lg:w-32 bg-gradient-to-r from-primary to-primary/50 rounded-full mx-auto lg:mx-0" />
                  </div>
                  <p className="text-2xl md:text-4xl lg:text-3xl xl:text-4xl font-semibold text-primary tracking-wide">
                    Finance & Technology Professional
                  </p>
                </div>
                
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-lg">
                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
                    Driving innovation at the intersection of finance and technology. 
                    Delivering exceptional results through analytical expertise, strategic thinking, and client-focused solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-12 mb-20">
            {/* Professional Overview Quadrants */}
            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  
                  {/* Experience Quadrant */}
                  <div className="bg-white/95 backdrop-blur-xl rounded-[2rem] p-12 border border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] group">
                    <div className="space-y-8">
                      <div className="flex items-center gap-3 flex-wrap mb-2">
                        <div className="w-14 h-14 bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-white/40 group-hover:to-white/20">
                          <img 
                            src={bmoLogo} 
                            alt="BMO Logo" 
                            className="w-8 h-8 object-contain transition-all duration-300"
                          />
                        </div>
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110">
                          <img 
                            src={tdLogo} 
                            alt="TD Logo" 
                            className="w-8 h-8 object-contain transition-all duration-300"
                          />
                        </div>
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110">
                          <img 
                            src={rbcLogo} 
                            alt="RBC Logo" 
                            className="w-8 h-8 object-contain transition-all duration-300"
                          />
                        </div>
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110">
                          <img 
                            src={irvingLogo} 
                            alt="Irving Oil Logo" 
                            className="w-8 h-8 object-contain transition-all duration-300"
                          />
                        </div>
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110">
                          <img 
                            src={grantThorntonLogo} 
                            alt="Grant Thornton Logo" 
                            className="w-8 h-8 object-contain transition-all duration-300"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-4">Experience</h3>
                        <p className="text-base text-muted-foreground leading-relaxed font-medium">
                          Five years of progressive leadership across top-tier financial institutions, specializing in wealth management and private banking with a proven track record of delivering exceptional client results.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Education Quadrant */}
                  <div className="bg-white/95 backdrop-blur-xl rounded-[2rem] p-12 border border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] group">
                    <div className="space-y-8">
                      <div className="flex items-center gap-3 flex-wrap mb-2">
                        <div className="w-14 h-14 bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-white/40 group-hover:to-white/20">
                          <img 
                            src={unbLogo} 
                            alt="University of New Brunswick Logo" 
                            className="w-8 h-8 object-contain transition-all duration-300"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-4">Education</h3>
                        <p className="text-base text-muted-foreground leading-relaxed font-medium">
                          Bachelor of Business Administration with a Finance major and investment focus, recognized with $47,500 in academic scholarships and awards for exceptional academic achievement.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Certifications Quadrant */}
                  <div className="bg-white/95 backdrop-blur-xl rounded-[2rem] p-12 border border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] group">
                    <div className="space-y-8">
                      <div className="flex items-center gap-3 flex-wrap mb-2">
                        <div className="w-14 h-14 bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-white/40 group-hover:to-white/20">
                          <img 
                            src={cfaLogo} 
                            alt="CFA Institute Logo" 
                            className="w-8 h-8 object-contain transition-all duration-300"
                          />
                        </div>
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110">
                          <img 
                            src={trainingTheStreetLogo} 
                            alt="Training the Street Logo" 
                            className="w-8 h-8 object-contain transition-all duration-300"
                          />
                        </div>
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110">
                          <img 
                            src={etsLogo} 
                            alt="ETS Logo" 
                            className="w-8 h-8 object-contain transition-all duration-300"
                          />
                        </div>
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110">
                          <img 
                            src={csiLogo} 
                            alt="Canadian Securities Institute Logo" 
                            className="w-8 h-8 object-contain transition-all duration-300"
                          />
                        </div>
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110">
                          <img 
                            src={courseraLogo} 
                            alt="Coursera Logo" 
                            className="w-8 h-8 object-contain transition-all duration-300"
                          />
                        </div>
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110">
                          <img 
                            src={bloombergLogo} 
                            alt="Bloomberg Logo" 
                            className="w-8 h-8 object-contain transition-all duration-300"
                          />
                        </div>
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110">
                          <img 
                            src={wallStreetPrepLogo} 
                            alt="Wall Street Prep Logo" 
                            className="w-8 h-8 object-contain transition-all duration-300"
                          />
                        </div>
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110">
                          <img 
                            src={mcgillLogo} 
                            alt="McGill University Logo" 
                            className="w-8 h-8 object-contain transition-all duration-300"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-4">Certifications</h3>
                        <p className="text-base text-muted-foreground leading-relaxed font-medium">
                          Twenty-two professional certifications spanning four expertise areas across finance and technology from seventeen prestigious institutions and organizations, demonstrating continuous commitment to professional excellence.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Community Quadrant */}
                  <div className="bg-white/95 backdrop-blur-xl rounded-[2rem] p-12 border border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] group">
                    <div className="space-y-8">
                      <div className="flex items-center gap-3 flex-wrap mb-2">
                        <div className="w-14 h-14 bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-white/40 group-hover:to-white/20">
                          <img src={unitedWayLogo} alt="United Way Logo" className="w-8 h-8 object-contain transition-all duration-300" />
                        </div>
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110">
                          <img
                            src={rbcLogo}
                            alt="RBC Community Logo"
                            className="w-8 h-8 object-contain transition-all duration-300"
                          />
                        </div>
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110">
                          <img
                            src={irvingLogo}
                            alt="Irving Oil Community Logo"
                            className="w-8 h-8 object-contain transition-all duration-300"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-4">Community</h3>
                        <p className="text-base text-muted-foreground leading-relaxed font-medium">
                          Dedicated community leader through United Way campaign leadership, financial literacy mentorship, and advocacy for community investment initiatives that create lasting positive impact.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
