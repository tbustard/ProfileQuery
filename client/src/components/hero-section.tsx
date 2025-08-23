import { Button } from "@/components/ui/button";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";
import profileImage from "@assets/Untitled design (1)_1755896187722.png";
import bmoLogo from "@assets/BMO_Logo.svg_1755913265896.png";
import tdLogo from "@assets/Toronto-Dominion_Bank_logo.svg_1755913265896.png";
import rbcLogo from "@assets/RBC-Logo_1755913716813.png";
import irvingLogo from "@assets/Irving_Oil.svg_1755913265895.png";
import grantThorntonLogo from "@assets/Grant_Thornton_logo_1755913265895.png";
import cfaLogo from "@assets/CFA_Institute_Logo_1755923720192.png";
import csiLogo from "@assets/canadian securities institute_1755923720191.png";
import bloombergLogo from "@assets/bloomberg_1755923720190.png";
import courseraLogo from "@assets/Coursera_1755923720192.png";
import unbLogo from "@assets/University_of_New_Brunswick_Logo.svg_1755912478863.png";
import wallStreetPrepLogo from "@assets/wall street prep_1755923720193.png";
import unitedWayLogo from "@assets/United-Way-Logo_1755913265895.png";

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animation variants for Apple-style entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 40
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden h-screen flex items-center justify-center">
      {/* Background Layers */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/50 to-gray-100/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      <motion.div 
        className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/4 rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/3 rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 1, ease: "easeOut" }}
      />
      
      <div className="relative z-10 px-6 w-full">
        <div className="container-width">
          {/* Hero Header - Profile & Name Side by Side */}
          <motion.div 
            className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Profile Image */}
            <motion.div className="flex-shrink-0" variants={imageVariants}>
              <div className="w-72 h-72 lg:w-80 lg:h-80 relative">
                <div className="aspect-square rounded-[2rem] overflow-hidden bg-white shadow-2xl ring-1 ring-black/5">
                  <img 
                    src={profileImage} 
                    alt="Tyler Bustard professional headshot" 
                    className="w-full h-full object-cover object-center"
                    data-testid="img-profile"
                  />
                </div>
              </div>
            </motion.div>

            {/* Name & Content */}
            <div className="space-y-8 text-center lg:text-left max-w-2xl">
              <div>
                <motion.h1 
                  className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight leading-none"
                  variants={itemVariants}
                >
                  Tyler Bustard
                </motion.h1>
                <motion.p 
                  className="text-2xl md:text-3xl font-semibold text-primary mb-8"
                  variants={itemVariants}
                >
                  Finance & Technology Professional
                </motion.p>
                
                {/* Credentials */}
              </div>
              
              <motion.p 
                className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8"
                variants={itemVariants}
              >
                Driving innovation at the intersection of finance and technology. 
                Delivering exceptional results through analytical expertise, strategic thinking, and client-focused solutions.
              </motion.p>
              
              <motion.div variants={itemVariants}>
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white text-lg px-10 py-4 rounded-2xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
                  onClick={() => scrollToSection("#contact")}
                  data-testid="button-contact"
                >
                  <HiOutlineMail className="mr-3 h-5 w-5" />
                  Get In Touch
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div 
            className="space-y-12 mb-20 mt-32"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Professional Overview Quadrants */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-foreground text-center lg:text-left">Professional Overview</h2>
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  
                  {/* Career Quadrant */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 hover:shadow-lg transition-all duration-300">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 flex-wrap">
                        <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg apple-hover">
                          <img 
                            src={bmoLogo} 
                            alt="BMO Logo" 
                            className="w-12 h-12 object-contain transition-all duration-300 hover:scale-110"
                          />
                        </div>
                        <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg apple-hover">
                          <img 
                            src={tdLogo} 
                            alt="TD Logo" 
                            className="w-12 h-12 object-contain transition-all duration-300 hover:scale-110"
                          />
                        </div>
                        <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg apple-hover">
                          <img 
                            src={rbcLogo} 
                            alt="RBC Logo" 
                            className="w-12 h-12 object-contain transition-all duration-300 hover:scale-110"
                          />
                        </div>
                        <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg apple-hover">
                          <img 
                            src={irvingLogo} 
                            alt="Irving Oil Logo" 
                            className="w-12 h-12 object-contain transition-all duration-300 hover:scale-110"
                          />
                        </div>
                        <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg apple-hover">
                          <img 
                            src={grantThorntonLogo} 
                            alt="Grant Thornton Logo" 
                            className="w-12 h-12 object-contain transition-all duration-300 hover:scale-110"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">Career</h3>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            <span>BMO Private Wealth Portfolio Assistant</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            <span>$2B+ portfolio management expertise</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            <span>Multi-sector financial analysis leader</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Education Quadrant */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 hover:shadow-lg transition-all duration-300">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg apple-hover">
                          <img 
                            src={unbLogo} 
                            alt="University of New Brunswick Logo" 
                            className="w-12 h-12 object-contain transition-all duration-300 hover:scale-110"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">Education</h3>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            <span>University of New Brunswick BBA</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            <span>Finance Major, Class of 2020</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            <span>Financial markets & investment focus</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Certifications Quadrant */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 hover:shadow-lg transition-all duration-300">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 flex-wrap">
                        <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg apple-hover">
                          <img 
                            src={cfaLogo} 
                            alt="CFA Institute Logo" 
                            className="w-12 h-12 object-contain transition-all duration-300 hover:scale-110"
                          />
                        </div>
                        <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg apple-hover">
                          <img 
                            src={csiLogo} 
                            alt="Canadian Securities Institute Logo" 
                            className="w-12 h-12 object-contain transition-all duration-300 hover:scale-110"
                          />
                        </div>
                        <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg apple-hover">
                          <img 
                            src={bloombergLogo} 
                            alt="Bloomberg Logo" 
                            className="w-12 h-12 object-contain transition-all duration-300 hover:scale-110"
                          />
                        </div>
                        <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg apple-hover">
                          <img 
                            src={wallStreetPrepLogo} 
                            alt="Wall Street Prep Logo" 
                            className="w-12 h-12 object-contain transition-all duration-300 hover:scale-110"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">Certifications</h3>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                            <span>CFA Level I Candidate</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                            <span>Bloomberg Market Concepts</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                            <span>Financial Modeling & Analysis</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Community Quadrant */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 hover:shadow-lg transition-all duration-300">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg apple-hover">
                          <img src={unitedWayLogo} alt="United Way Logo" className="w-12 h-12 object-contain transition-all duration-300 hover:scale-110" />
                        </div>
                        <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg apple-hover">
                          <img
                            src={rbcLogo}
                            alt="RBC Community Logo"
                            className="w-12 h-12 object-contain transition-all duration-300 hover:scale-110"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">Community</h3>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                            <span>United Way campaign leadership</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                            <span>Financial literacy mentorship</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                            <span>Community investment advocate</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
