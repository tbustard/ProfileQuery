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
      {/* Enhanced Background with subtle gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/30 to-white" />
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent" />
      
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="relative z-10 pt-32 pb-24 px-6">
        <div className="container-width">
          {/* Hero Header - Profile & Name Side by Side */}
          <div className="mb-20">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
              {/* Enhanced Profile Image */}
              <div className="flex-shrink-0 group">
                <div className="w-72 h-72 lg:w-80 lg:h-80 relative">
                  {/* Glowing ring effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-blue-500/20 to-primary/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  <div className="relative aspect-square rounded-[2rem] overflow-hidden bg-white shadow-2xl ring-1 ring-black/5 group-hover:shadow-3xl transition-all duration-500 group-hover:scale-[1.02]">
                    <img 
                      src={profileImage} 
                      alt="Tyler Bustard professional headshot" 
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      data-testid="img-profile"
                    />
                    
                    {/* Subtle overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>

              {/* Enhanced Name & Content */}
              <div className="space-y-8 text-center lg:text-left max-w-2xl">
                <div className="space-y-6">
                  {/* Name with subtle animation */}
                  <div className="relative">
                    <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight leading-none animate-fade-in-up">
                      Tyler Bustard
                    </h1>
                    {/* Subtle underline accent */}
                    <div className="absolute -bottom-2 left-0 lg:left-0 right-0 lg:right-auto h-1 w-32 bg-gradient-to-r from-primary to-blue-500 rounded-full opacity-80 mx-auto lg:mx-0"></div>
                  </div>
                  
                  {/* Enhanced subtitle with gradient */}
                  <div className="relative">
                    <p className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                      Finance & Technology Professional
                    </p>
                  </div>
                </div>
                
                {/* Enhanced description with better typography */}
                <div className="relative">
                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    Driving innovation at the <span className="text-foreground font-semibold">intersection of finance and technology</span>. 
                    <br className="hidden lg:block" />
                    Delivering exceptional results through analytical expertise, strategic thinking, and client-focused solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-12 mb-20">
            {/* Enhanced Professional Overview Quadrants */}
            <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-200/30 shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-blue-500/[0.02] rounded-3xl"></div>
                
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
                  
                  {/* Enhanced Career Quadrant */}
                  <div className="bg-white/95 backdrop-blur-xl rounded-[28px] p-10 border border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] group relative overflow-hidden">
                    {/* Hover gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[28px]"></div>
                    <div className="space-y-6">
                      <div className="flex items-center gap-2 flex-wrap">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110">
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
                        <h3 className="text-xl font-bold text-foreground mb-3">Career</h3>
                        <div className="space-y-2.5 text-sm text-muted-foreground font-medium">
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            <span>5+ years in financial services industry</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            <span>Wealth management & private banking expertise</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            <span>Progressive leadership across top-tier institutions</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Education Quadrant */}
                  <div className="bg-white/90 backdrop-blur-xl rounded-[28px] p-10 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
                    <div className="space-y-6">
                      <div className="flex items-center gap-2 flex-wrap">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110">
                          <img 
                            src={unbLogo} 
                            alt="University of New Brunswick Logo" 
                            className="w-8 h-8 object-contain transition-all duration-300"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-3">Education</h3>
                        <div className="space-y-2.5 text-sm text-muted-foreground font-medium">
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            <span>4-year Bachelor of Business Administration</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            <span>Finance major with investment focus</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            <span>$47,500 in academic scholarships & awards</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Certifications Quadrant */}
                  <div className="bg-white/90 backdrop-blur-xl rounded-[28px] p-10 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
                    <div className="space-y-6">
                      <div className="flex items-center gap-2 flex-wrap">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110">
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
                        <h3 className="text-xl font-bold text-foreground mb-3">Certifications</h3>
                        <div className="space-y-2.5 text-sm text-muted-foreground font-medium">
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            <span>22+ professional certifications earned</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            <span>4 expertise areas across finance & technology</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            <span>17 prestigious institutions & organizations</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Community Quadrant */}
                  <div className="bg-white/90 backdrop-blur-xl rounded-[28px] p-10 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
                    <div className="space-y-6">
                      <div className="flex items-center gap-2 flex-wrap">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110">
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
                        <h3 className="text-xl font-bold text-foreground mb-3">Community</h3>
                        <div className="space-y-2.5 text-sm text-muted-foreground font-medium">
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            <span>United Way campaign leadership</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            <span>Financial literacy mentorship</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            <span>Community investment advocate</span>
                          </div>
                        </div>
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
