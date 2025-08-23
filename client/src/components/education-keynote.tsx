import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Award, GraduationCap, Building2, Calendar, Star } from 'lucide-react';
import universityLogo from '@assets/University_of_New_Brunswick_Logo.svg_1755912478863.png';
import '../styles/education-keynote.css';

// Global declarations for external libraries
declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
    Swiper: any;
  }
}

export default function EducationKeynote() {
  const swiperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const education = {
    institution: "University of New Brunswick",
    location: "Saint John, New Brunswick", 
    degree: "Bachelor of Business Administration",
    major: "Finance",
    year: "2020",
    achievements: [
      "Case Competitions: 1st Place (CIBC), 3rd Place (TD), RBC and SLC participant",
      "Analyst and Portfolio Manager – University of New Brunswick Student Investment Fund",
      "UNB Finance Club, RBC Student Ambassador, Accredited Co-op Program",
      "Recipient of 5 Scholarship and Alumni Awards for academic merit and leadership skills, Total $47,500"
    ]
  };

  const highlights = [
    { title: "1st Place", subtitle: "CIBC Case Competition", iconType: "trophy", detail: "Financial analysis & strategic recommendations" },
    { title: "$47,500", subtitle: "Total Scholarships & Awards", iconType: "award", detail: "Academic merit and leadership recognition" },
    { title: "Top 15%", subtitle: "Academic Standing", iconType: "graduation", detail: "Consistently high academic performance" }
  ];

  const activities = [
    { 
      category: "Leadership", 
      items: [
        "Student Investment Fund Portfolio Manager",
        "Finance Club Executive Member",
        "Analyst and Portfolio Manager – UNB Student Investment Fund"
      ] 
    },
    { 
      category: "Recognition", 
      items: [
        "RBC Student Ambassador",
        "5 Academic Merit Awards",
        "Recipient of 5 Scholarship and Alumni Awards",
        "Total $47,500 in Academic Merit Recognition",
        "Accredited Co-op Program Participant"
      ] 
    },
    { 
      category: "Competition", 
      items: [
        "1st Place - CIBC Case Competition",
        "3rd Place - TD Case Competition", 
        "RBC Case Competition Participant",
        "SLC Competition Participant"
      ] 
    }
  ];

  const renderIcon = (iconType: string) => {
    const iconClass = "w-12 h-12 text-white icon-glow";
    switch (iconType) {
      case "trophy":
        return <Trophy className={iconClass} />;
      case "award":
        return <Award className={iconClass} />;
      case "graduation":
        return <GraduationCap className={iconClass} />;
      case "building":
        return <Building2 className={iconClass} />;
      case "calendar":
        return <Calendar className={iconClass} />;
      case "star":
        return <Star className={iconClass} />;
      default:
        return null;
    }
  };

  useEffect(() => {
    // Initialize GSAP and ScrollTrigger
    if (window.gsap && window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger);
    }

    // Initialize Swiper
    if (window.Swiper && swiperRef.current) {
      const swiper = new window.Swiper(swiperRef.current, {
        effect: 'fade',
        speed: 800,
        allowTouchMove: true,
        fadeEffect: {
          crossFade: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        on: {
          slideChangeTransitionStart: function(swiper: any) {
            // Animate slide content
            if (window.gsap) {
              const activeSlide = swiper.slides[swiper.activeIndex];
              const elements = activeSlide.querySelectorAll('.text-reveal');
              
              window.gsap.fromTo(elements, 
                { 
                  opacity: 0, 
                  y: 30,
                  scale: 0.95
                },
                { 
                  opacity: 1, 
                  y: 0,
                  scale: 1,
                  duration: 0.8,
                  stagger: 0.15,
                  ease: "power2.out"
                }
              );
            }
          }
        }
      });

      // Initial animation for first slide
      setTimeout(() => {
        if (window.gsap) {
          const firstSlideElements = swiperRef.current?.querySelectorAll('.swiper-slide-active .text-reveal');
          if (firstSlideElements) {
            window.gsap.fromTo(firstSlideElements, 
              { 
                opacity: 0, 
                y: 30,
                scale: 0.95
              },
              { 
                opacity: 1, 
                y: 0,
                scale: 1,
                duration: 1,
                stagger: 0.2,
                ease: "power2.out"
              }
            );
          }
        }
      }, 500);

      // Floating elements animation
      if (window.gsap && containerRef.current) {
        const floatingElements = containerRef.current.querySelectorAll('.floating-circle');
        floatingElements.forEach((element, index) => {
          window.gsap.to(element, {
            y: "-100vh",
            rotation: 360,
            duration: 20 + (index * 5),
            repeat: -1,
            ease: "none"
          });
        });
      }

      return () => {
        if (swiper) {
          swiper.destroy();
        }
      };
    }
  }, []);

  return (
    <section id="education" className="education-keynote-container" ref={containerRef}>
      {/* Floating background elements */}
      <div className="floating-elements">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className="floating-circle"
            style={{
              width: `${60 + i * 20}px`,
              height: `${60 + i * 20}px`,
              left: `${10 + i * 15}%`,
              animationDelay: `${i * 3}s`
            }}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="slide-counter">
        <span id="current-slide">1</span> / 5
      </div>

      {/* Swiper Container */}
      <div className="swiper-container" ref={swiperRef}>
        <div className="swiper-wrapper">
          
          {/* Slide 1: Hero Introduction */}
          <div className="swiper-slide">
            <div className="w-full max-w-6xl mx-auto text-center">
              <div className="liquid-glass p-12 max-w-4xl mx-auto">
                <div className="text-reveal mb-8">
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-lg mx-auto mb-8">
                    <img 
                      src={universityLogo} 
                      alt="University Logo" 
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                </div>
                
                <h1 className="hero-title text-reveal mb-6">
                  {education.institution}
                </h1>
                
                <div className="text-reveal mb-6">
                  <p className="text-2xl font-medium text-white/90 mb-4">
                    {education.degree}
                  </p>
                  <p className="text-xl text-white/80 mb-2">
                    Major in {education.major}
                  </p>
                  <p className="text-lg text-white/70">
                    {education.location} • Class of {education.year}
                  </p>
                </div>

                <div className="text-reveal">
                  <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-8 py-4 border border-white/30">
                    <Star className="w-6 h-6 text-yellow-300 mr-3" />
                    <span className="text-lg font-semibold text-white">Academic Excellence</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2: Academic Highlights */}
          <div className="swiper-slide">
            <div className="w-full max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-5xl font-bold text-white mb-4 text-reveal">Academic Highlights</h2>
                <p className="text-xl text-white/80 text-reveal">Outstanding achievements and recognition</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {highlights.map((highlight, index) => (
                  <div key={index} className="achievement-card text-center text-reveal" style={{animationDelay: `${index * 0.2}s`}}>
                    <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
                      {renderIcon(highlight.iconType)}
                    </div>
                    <div className="text-4xl font-bold text-white mb-3">{highlight.title}</div>
                    <p className="text-lg text-white/90 mb-3">{highlight.subtitle}</p>
                    <p className="text-sm text-white/70">{highlight.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Slide 3: Leadership & Activities */}
          <div className="swiper-slide">
            <div className="w-full max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-5xl font-bold text-white mb-4 text-reveal">Leadership & Activities</h2>
                <p className="text-xl text-white/80 text-reveal">Engagement beyond the classroom</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {activities.map((activity, index) => (
                  <div key={index} className="liquid-glass p-8 text-reveal" style={{animationDelay: `${index * 0.15}s`}}>
                    <div className="text-center mb-6">
                      <h4 className="text-2xl font-bold text-white mb-4">{activity.category}</h4>
                    </div>
                    <div className="space-y-4">
                      {activity.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                          <p className="text-white/90 text-center text-sm">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Slide 4: Case Competition Success */}
          <div className="swiper-slide">
            <div className="w-full max-w-6xl mx-auto text-center">
              <div className="liquid-glass p-12">
                <h2 className="text-5xl font-bold text-white mb-8 text-reveal">Case Competition Excellence</h2>
                
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="text-reveal">
                    <div className="achievement-card p-8">
                      <Trophy className="w-24 h-24 text-yellow-300 mx-auto mb-6 icon-glow" />
                      <h3 className="text-3xl font-bold text-white mb-4">1st Place</h3>
                      <p className="text-xl text-white/90 mb-4">CIBC Case Competition</p>
                      <p className="text-white/70">Leading financial analysis and strategic recommendations</p>
                    </div>
                  </div>
                  
                  <div className="text-reveal space-y-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                      <h4 className="text-lg font-semibold text-white mb-2">3rd Place - TD Competition</h4>
                      <p className="text-white/70 text-sm">Innovative banking solutions</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                      <h4 className="text-lg font-semibold text-white mb-2">RBC Participant</h4>
                      <p className="text-white/70 text-sm">Investment strategy development</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                      <h4 className="text-lg font-semibold text-white mb-2">SLC Competition</h4>
                      <p className="text-white/70 text-sm">Leadership and communication skills</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 5: Academic Summary */}
          <div className="swiper-slide">
            <div className="w-full max-w-6xl mx-auto text-center">
              <div className="liquid-glass p-12">
                <h2 className="text-5xl font-bold text-white mb-12 text-reveal">Academic Excellence Summary</h2>
                
                <div className="grid md:grid-cols-4 gap-8">
                  <div className="achievement-card p-8 text-reveal" style={{animationDelay: '0s'}}>
                    <GraduationCap className="w-16 h-16 text-blue-300 mx-auto mb-4 icon-glow" />
                    <div className="text-4xl font-bold text-white mb-2">BBA</div>
                    <div className="text-white/80">Finance Major</div>
                  </div>
                  
                  <div className="achievement-card p-8 text-reveal" style={{animationDelay: '0.15s'}}>
                    <Award className="w-16 h-16 text-yellow-300 mx-auto mb-4 icon-glow" />
                    <div className="text-4xl font-bold text-white mb-2">5</div>
                    <div className="text-white/80">Academic Awards</div>
                  </div>
                  
                  <div className="achievement-card p-8 text-reveal" style={{animationDelay: '0.3s'}}>
                    <Trophy className="w-16 h-16 text-orange-300 mx-auto mb-4 icon-glow" />
                    <div className="text-4xl font-bold text-white mb-2">3</div>
                    <div className="text-white/80">Competition Podiums</div>
                  </div>
                  
                  <div className="achievement-card p-8 text-reveal" style={{animationDelay: '0.45s'}}>
                    <Calendar className="w-16 h-16 text-green-300 mx-auto mb-4 icon-glow" />
                    <div className="text-4xl font-bold text-white mb-2">2020</div>
                    <div className="text-white/80">Graduation Year</div>
                  </div>
                </div>

                <div className="mt-12 text-reveal" style={{animationDelay: '0.6s'}}>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <h3 className="text-2xl font-semibold text-white mb-4">Financial Excellence</h3>
                    <p className="text-lg text-white/80">
                      Combining theoretical knowledge with practical application through portfolio management, 
                      case competitions, and leadership roles in finance-focused initiatives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Navigation */}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        
        {/* Pagination */}
        <div className="swiper-pagination"></div>
      </div>

      <script dangerouslySetInnerHTML={{
        __html: `
          // Update slide counter
          document.addEventListener('DOMContentLoaded', function() {
            const swiperEl = document.querySelector('.swiper-container');
            if (swiperEl && window.Swiper) {
              const swiper = swiperEl.swiper;
              if (swiper) {
                swiper.on('slideChange', function() {
                  const counter = document.getElementById('current-slide');
                  if (counter) {
                    counter.textContent = this.activeIndex + 1;
                  }
                });
              }
            }
          });
        `
      }} />
    </section>
  );
}