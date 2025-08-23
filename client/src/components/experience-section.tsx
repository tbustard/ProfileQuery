import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect, useRef } from "react";
import bmoLogo from "@assets/BMO_Logo.svg_1755913265896.png";
import tdLogo from "@assets/Toronto-Dominion_Bank_logo.svg_1755913265896.png";
import rbcLogo from "@assets/RBC-Logo_1755913716813.png";
import irvingLogo from "@assets/Irving_Oil.svg_1755913265895.png";
import grantThorntonLogo from "@assets/Grant_Thornton_logo_1755913265895.png";

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  duration: string;
  achievements: string[];
  technologies: string[];
  logoSrc: string;
  color: string;
}

export default function ExperienceSection() {
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

  const experiences: Experience[] = [
    {
      title: "Portfolio Assistant",
      company: "BMO Private Wealth",
      location: "Toronto, Ontario",
      period: "2022 - 2023",
      duration: "1 year",
      achievements: [
        "Advised two Investment Counsellors managing portfolios over $100M and cut preparation time by 12%",
        "Bolstered client communications, boosting response rates by 9% heightening client satisfaction and retention",
      ],
      technologies: ["Portfolio Management", "Client Relations", "Financial Analysis", "Excel"],
      logoSrc: bmoLogo,
      color: "#005EB8"
    },
    {
      title: "Financial Advisor",
      company: "TD Canada Trust",
      location: "Kingston, Ontario",
      period: "2021 - 2022",
      duration: "1 year",
      achievements: [
        "Cultivated strong client relationships by assessing individual financial needs, resulting in an 11% increase in sales",
        "Exceeded sales targets, achieving a top 15% performance ranking within the district",
      ],
      technologies: ["Financial Planning", "Sales", "Client Advisory", "Product Knowledge"],
      logoSrc: tdLogo,
      color: "#00AC46"
    },
    {
      title: "Banking Advisor",
      company: "Royal Bank of Canada",
      location: "Kingston, Ontario",
      period: "2020 - 2021",
      duration: "1 year",
      achievements: [
        "Strengthened client relationships by advising on personalized solutions, increased repeat transactions by 13%",
        "Excelled in needs-based advising, boosting adoption of core products like GICs, mutual funds, and TFSAs by 8%",
      ],
      technologies: ["Banking Products", "Financial Advisory", "Client Relationship Management", "Digital Banking"],
      logoSrc: rbcLogo,
      color: "#005DAA"
    },
    {
      title: "Client Advisor Intern",
      company: "Royal Bank of Canada",
      location: "Fredericton, New Brunswick",
      period: "2019 - 2020",
      duration: "1 year",
      achievements: [
        "Resolved complex client issues, achieving a 15% boost in positive feedback scores for the branch",
        "Promoted RBC's digital banking tools, leading to a 10% increase in online and mobile banking adoption",
      ],
      technologies: ["Client Service", "Digital Banking", "Problem Resolution", "Customer Support"],
      logoSrc: rbcLogo,
      color: "#005DAA"
    },
    {
      title: "Marketing Intern",
      company: "Irving Oil Limited",
      location: "Saint John, New Brunswick",
      period: "Sep - Dec 2018",
      duration: "4 months",
      achievements: [
        "Conducted competitor analysis driving insights that improved targeted marketing by 11%",
        "Developed a Customer Lifecycle model that increased targeted promotions, boosting customer engagement by 8%",
      ],
      technologies: ["Market Research", "Customer Analytics", "Competitive Analysis", "Marketing Strategy"],
      logoSrc: irvingLogo,
      color: "#FF6B35"
    },
    {
      title: "Tax Return Intern",
      company: "Grant Thornton LLP",
      location: "Saint John, New Brunswick",
      period: "Jan - May 2018",
      duration: "5 months",
      achievements: [
        "Streamlined client financial data, boosting accuracy by 10% ensuring timely submission of 100+ tax returns",
        "Improved tax return preparation processes, cutting filing errors by 15%",
      ],
      technologies: ["Tax Preparation", "Financial Analysis", "Data Management", "Client Service"],
      logoSrc: grantThorntonLogo,
      color: "#8B5CF6"
    },
  ];

  return (
    <section id="experience" ref={sectionRef} className="apple-section">
      <div className="container-width">
        {/* Header */}
        <div 
          className={`text-center mb-20 ${getAnimationClass('experience-header')}`}
          data-animate-id="experience-header"
        >
          <h2 className="large-title text-foreground mb-4 hover:text-primary transition-colors duration-500 ease-out cursor-default">Professional Experience</h2>
          <p className="callout text-muted-foreground max-w-2xl mx-auto hover:text-foreground transition-colors duration-500 ease-out cursor-default">
            My professional journey and key accomplishments in financial services.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div 
            className={`absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block transition-all duration-1000 ease-out ${getAnimationClass('timeline-line')}`}
            data-animate-id="timeline-line"
          ></div>
          
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`relative ${getAnimationClass(`experience-${index}`, index * 100)}`} 
                data-testid={`experience-${index}`}
                data-animate-id={`experience-${index}`}
              >
                {/* Timeline Marker */}
                <div 
                  className={`absolute left-6 w-4 h-4 rounded-full border-4 border-background shadow-sm hidden md:block transition-all duration-700 ease-out hover:scale-125 hover:shadow-lg ${getAnimationClass(`marker-${index}`, index * 150)}`} 
                  style={{ backgroundColor: exp.color }}
                  data-animate-id={`marker-${index}`}
                ></div>
                
                {/* Content */}
                <div className="md:ml-20">
                  <Card className="apple-card border-0 hover:shadow-2xl hover:scale-105 hover:bg-white/90 transition-all duration-500 ease-out group cursor-pointer">
                    <CardContent className="p-8">
                      {/* Header Section */}
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                        <div className="flex items-start gap-4">
                          <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg transition-all duration-500 ease-out group-hover:bg-primary/10 group-hover:shadow-xl group-hover:scale-110">
                            <img 
                              src={exp.logoSrc} 
                              alt={`${exp.company} Logo`} 
                              className="w-12 h-12 object-contain transition-all duration-500 ease-out group-hover:scale-125"
                            />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">{exp.title}</h3>
                            <p className="text-lg font-medium mb-1 group-hover:scale-105 transition-transform duration-300" style={{ color: exp.color }}>{exp.company}</p>
                            <p className="body-text text-muted-foreground group-hover:text-foreground transition-colors duration-300">{exp.location}</p>
                          </div>
                        </div>
                        <div className="mt-4 lg:mt-0 lg:text-right">
                          <div className="inline-flex items-center gap-2 bg-muted rounded-full px-4 py-2 group-hover:bg-primary/10 group-hover:scale-105 transition-all duration-300">
                            <div className="w-2 h-2 rounded-full transition-all duration-300 group-hover:scale-125" style={{ backgroundColor: exp.color }}></div>
                            <span className="font-medium text-foreground">{exp.period}</span>
                          </div>
                          <p className="body-text text-muted-foreground mt-1 lg:text-right group-hover:text-foreground transition-colors duration-300">{exp.duration}</p>
                        </div>
                      </div>

                      {/* Key Achievements */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">Key Achievements</h4>
                        <div className="space-y-3">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <div key={achievementIndex} className="flex items-start gap-3 group/achievement hover:bg-primary/5 hover:px-3 hover:py-2 hover:rounded-lg transition-all duration-300">
                              <div className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0 transition-all duration-300 group-hover/achievement:scale-125" style={{ backgroundColor: exp.color }}></div>
                              <p className="body-text text-muted-foreground leading-relaxed group-hover:text-foreground group-hover/achievement:text-foreground transition-colors duration-300">{achievement}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Skills & Technologies */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">Core Competencies</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-muted text-foreground px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 hover:bg-primary/10 hover:scale-105 hover:shadow-md cursor-default"
                              data-testid={`tech-${index}-${techIndex}`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Summary */}
        <div 
          className={`mt-20 ${getAnimationClass('career-summary')}`}
          data-animate-id="career-summary"
        >
          <Card className="apple-card border-0 text-center hover:shadow-2xl hover:scale-105 transition-all duration-700 ease-out group">
            <CardContent className="p-12">
              <h3 className="text-lg font-semibold text-foreground mb-8 group-hover:text-primary transition-colors duration-300">Career Highlights</h3>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="hover:bg-primary/5 hover:scale-110 p-4 rounded-2xl transition-all duration-500 ease-out cursor-default group/metric">
                  <div className="text-3xl font-bold text-foreground mb-2 group-hover/metric:text-primary group-hover/metric:scale-125 transition-all duration-300">5+</div>
                  <div className="body-text text-muted-foreground group-hover/metric:text-foreground transition-colors duration-300">Years Experience</div>
                </div>
                <div className="hover:bg-primary/5 hover:scale-110 p-4 rounded-2xl transition-all duration-500 ease-out cursor-default group/metric">
                  <div className="text-3xl font-bold text-foreground mb-2 group-hover/metric:text-primary group-hover/metric:scale-125 transition-all duration-300">$100M+</div>
                  <div className="body-text text-muted-foreground group-hover/metric:text-foreground transition-colors duration-300">Portfolio Value Managed</div>
                </div>
                <div className="hover:bg-primary/5 hover:scale-110 p-4 rounded-2xl transition-all duration-500 ease-out cursor-default group/metric">
                  <div className="text-3xl font-bold text-foreground mb-2 group-hover/metric:text-primary group-hover/metric:scale-125 transition-all duration-300">6</div>
                  <div className="body-text text-muted-foreground group-hover/metric:text-foreground transition-colors duration-300">Companies</div>
                </div>
                <div className="hover:bg-primary/5 hover:scale-110 p-4 rounded-2xl transition-all duration-500 ease-out cursor-default group/metric">
                  <div className="text-3xl font-bold text-foreground mb-2 group-hover/metric:text-primary group-hover/metric:scale-125 transition-all duration-300">100+</div>
                  <div className="body-text text-muted-foreground group-hover/metric:text-foreground transition-colors duration-300">Tax Returns Processed</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
