import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Award, GraduationCap } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import universityLogo from "@assets/University_of_New_Brunswick_Logo.svg_1755912478863.png";

export default function EducationSection() {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const elementId = entry.target.getAttribute('data-animate-id');
          if (elementId) {
            setVisibleElements(prev => {
              const newSet = new Set(prev);
              if (entry.isIntersecting) {
                newSet.add(elementId);
              }
              return newSet;
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    // Observe all animatable elements
    const elementsToObserve = sectionRef.current?.querySelectorAll('[data-animate-id]');
    elementsToObserve?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const getAnimationClass = (elementId: string, delay: number = 0) => {
    const isVisible = visibleElements.has(elementId);
    return `transition-all duration-1000 ease-out ${delay > 0 ? `delay-${delay}` : ''} ${
      isVisible 
        ? 'opacity-100 translate-y-0 scale-100' 
        : 'opacity-0 translate-y-8 scale-95'
    }`;
  };

  const education = {
    institution: "University of New Brunswick",
    location: "Saint John, New Brunswick", 
    degree: "Bachelor of Business Administration",
    year: "2020",
    achievements: [
      "Case Competitions: 1st Place (CIBC), 3rd Place (TD), RBC and SLC participant",
      "Analyst and Portfolio Manager – University of New Brunswick Student Investment Fund",
      "UNB Finance Club, RBC Student Ambassador, Accredited Co-op Program",
      "Recipient of 5 Scholarship and Alumni Awards for academic merit and leadership skills, Total $47,500"
    ]
  };

  const highlights = [
    { title: "1st Place", subtitle: "CIBC Case Competition", iconType: "trophy" },
    { title: "$47,500", subtitle: "Total Scholarships & Awards", iconType: "award" },
    { title: "Top 15%", subtitle: "Academic Standing", iconType: "graduation" }
  ];

  const renderIcon = (iconType: string) => {
    switch (iconType) {
      case "trophy":
        return <Trophy className="w-8 h-8 text-primary" />;
      case "award":
        return <Award className="w-8 h-8 text-primary" />;
      case "graduation":
        return <GraduationCap className="w-8 h-8 text-primary" />;
      default:
        return null;
    }
  };

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

  return (
    <section id="education" ref={sectionRef} className="apple-section-alt">
      <div className="container-width">
        {/* Header */}
        <div 
          className={`text-center mb-20 ${getAnimationClass('education-header')}`}
          data-animate-id="education-header"
        >
          <h2 className="large-title text-foreground mb-4 hover:text-primary transition-colors duration-500 ease-out cursor-default">Education</h2>
          <p className="callout text-muted-foreground max-w-2xl mx-auto hover:text-foreground transition-colors duration-500 ease-out cursor-default">
            Academic foundation and achievements that drive my professional success.
          </p>
        </div>

        {/* Hero Education Card */}
        <div 
          className={`mb-16 ${getAnimationClass('education-hero')}`}
          data-animate-id="education-hero"
        >
          <Card className="apple-card border-0 text-center hover:shadow-2xl hover:scale-105 transition-all duration-700 ease-out group">
            <CardContent className="p-12">
              {/* University Logo/Badge */}
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-lg mx-auto mb-8 transition-all duration-500 ease-out group-hover:bg-primary/10 group-hover:shadow-xl group-hover:scale-110">
                <img 
                  src={universityLogo} 
                  alt="University Logo" 
                  className="w-16 h-16 object-contain transition-all duration-500 ease-out group-hover:scale-125"
                />
              </div>
              
              {/* Main Info */}
              <h3 className="text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{education.institution}</h3>
              <p className="text-lg font-medium text-primary mb-2 group-hover:scale-105 transition-transform duration-300">{education.degree}</p>
              <p className="body-text text-muted-foreground mb-4 group-hover:text-foreground transition-colors duration-300">{education.location}</p>
              
              {/* Year Badge */}
              <div className="inline-flex items-center bg-muted rounded-full px-4 py-2 group-hover:bg-primary/10 group-hover:scale-105 transition-all duration-300">
                <span className="font-medium text-foreground">Class of {education.year}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Academic Highlights */}
        <div 
          className={`mb-16 ${getAnimationClass('highlights-section')}`}
          data-animate-id="highlights-section"
        >
          <h3 className="text-xl font-semibold text-foreground mb-8 text-center hover:text-primary transition-colors duration-500 ease-out cursor-default">Academic Highlights</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className={`apple-card border-0 text-center hover:shadow-2xl hover:scale-105 hover:bg-white/90 transition-all duration-500 ease-out group cursor-pointer ${getAnimationClass(`highlight-${index}`, index * 100)}`} 
                data-testid={`highlight-${index}`}
                data-animate-id={`highlight-${index}`}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                    {renderIcon(highlight.iconType)}
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary group-hover:scale-125 transition-all duration-300">{highlight.title}</div>
                  <p className="body-text text-muted-foreground group-hover:text-foreground transition-colors duration-300">{highlight.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Activities & Leadership */}
        <div 
          className={`mb-16 ${getAnimationClass('activities-section')}`}
          data-animate-id="activities-section"
        >
          <h3 className="text-xl font-semibold text-foreground mb-8 text-center hover:text-primary transition-colors duration-500 ease-out cursor-default">Leadership & Activities</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <div 
                key={index} 
                className={`space-y-4 ${getAnimationClass(`activity-${index}`, index * 150)}`}
                data-animate-id={`activity-${index}`}
              >
                <div className="text-center">
                  <h4 className="font-semibold text-foreground mb-4 hover:text-primary transition-colors duration-300 cursor-default">{activity.category}</h4>
                </div>
                <div className="space-y-3">
                  {activity.items.map((item, itemIndex) => (
                    <Card key={itemIndex} className="apple-card border-0 p-4 hover:shadow-lg hover:scale-105 hover:bg-white/90 transition-all duration-300 ease-out cursor-default group">
                      <p className="body-text text-muted-foreground text-center text-sm group-hover:text-foreground transition-colors duration-300">{item}</p>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Summary Stats */}
        <div 
          className={`mt-16 ${getAnimationClass('summary-section')}`}
          data-animate-id="summary-section"
        >
          <Card className="apple-card border-0 text-center hover:shadow-2xl hover:scale-105 transition-all duration-700 ease-out group">
            <CardContent className="p-12">
              <h3 className="text-lg font-semibold text-foreground mb-8 group-hover:text-primary transition-colors duration-300">Academic Excellence Summary</h3>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="hover:bg-primary/5 hover:scale-110 p-4 rounded-2xl transition-all duration-500 ease-out cursor-default group/metric">
                  <div className="text-3xl font-bold text-foreground mb-2 group-hover/metric:text-primary group-hover/metric:scale-125 transition-all duration-300">BBA</div>
                  <div className="body-text text-muted-foreground group-hover/metric:text-foreground transition-colors duration-300">Business Administration</div>
                </div>
                <div className="hover:bg-primary/5 hover:scale-110 p-4 rounded-2xl transition-all duration-500 ease-out cursor-default group/metric">
                  <div className="text-3xl font-bold text-foreground mb-2 group-hover/metric:text-primary group-hover/metric:scale-125 transition-all duration-300">5</div>
                  <div className="body-text text-muted-foreground group-hover/metric:text-foreground transition-colors duration-300">Academic Awards</div>
                </div>
                <div className="hover:bg-primary/5 hover:scale-110 p-4 rounded-2xl transition-all duration-500 ease-out cursor-default group/metric">
                  <div className="text-3xl font-bold text-foreground mb-2 group-hover/metric:text-primary group-hover/metric:scale-125 transition-all duration-300">3</div>
                  <div className="body-text text-muted-foreground group-hover/metric:text-foreground transition-colors duration-300">Case Competition Podiums</div>
                </div>
                <div className="hover:bg-primary/5 hover:scale-110 p-4 rounded-2xl transition-all duration-500 ease-out cursor-default group/metric">
                  <div className="text-3xl font-bold text-foreground mb-2 group-hover/metric:text-primary group-hover/metric:scale-125 transition-all duration-300">2020</div>
                  <div className="body-text text-muted-foreground group-hover/metric:text-foreground transition-colors duration-300">Graduation Year</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
