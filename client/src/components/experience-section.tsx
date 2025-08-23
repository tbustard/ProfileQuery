import { Card, CardContent } from "@/components/ui/card";
import { HiOfficeBuilding } from "react-icons/hi";
import { FaUniversity, FaBuilding } from "react-icons/fa";

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  duration: string;
  achievements: string[];
  technologies: string[];
  logo: React.ComponentType<{ className?: string }>;
  color: string;
}

export default function ExperienceSection() {
  const experiences: Experience[] = [
    {
      title: "Portfolio Assistant",
      company: "BMO Private Wealth",
      location: "Kingston, Ontario",
      period: "2022 - 2023",
      duration: "1 year",
      achievements: [
        "Orchestrated strategic support for two Investment Counsellors managing portfolios exceeding $100M",
        "Streamlined preparation processes reducing time requirements by 12%",
        "Enhanced client communication strategies achieving 9% improvement in response rates",
      ],
      technologies: ["Portfolio Management", "Client Relations", "Financial Analysis", "Excel"],
      logo: HiOfficeBuilding,
      color: "#005EB8"
    },
    {
      title: "Financial Advisor",
      company: "TD Canada Trust",
      location: "Kingston, Ontario",
      period: "2021 - 2022",
      duration: "1 year",
      achievements: [
        "Cultivated exceptional client relationships generating 11% increase in sales performance",
        "Consistently surpassed sales targets achieving top 15% ranking within the district",
        "Provided comprehensive financial needs assessment and personalized solution development",
      ],
      technologies: ["Financial Planning", "Sales", "Client Advisory", "Product Knowledge"],
      logo: FaUniversity,
      color: "#00AC46"
    },
    {
      title: "Banking Advisor",
      company: "Royal Bank of Canada",
      location: "Kingston, Ontario",
      period: "2020 - 2021",
      duration: "1 year",
      achievements: [
        "Strengthened client relationships increasing repeat transaction rates by 12%",
        "Boosted adoption rates of core products including GICs, mutual funds, and TFSAs by 9%",
        "Demonstrated expertise in needs-based financial advising and solution-oriented approach",
      ],
      technologies: ["Banking Products", "Financial Advisory", "Client Relationship Management", "Digital Banking"],
      logo: FaBuilding,
      color: "#005DAA"
    },
  ];

  return (
    <section id="experience" className="apple-section">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="large-title text-foreground mb-4">Professional Experience</h2>
          <p className="callout text-muted-foreground max-w-2xl mx-auto">
            My professional journey and key accomplishments in financial services.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>
          
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="relative" data-testid={`experience-${index}`}>
                {/* Timeline Marker */}
                <div className="absolute left-6 w-4 h-4 rounded-full border-4 border-background shadow-sm hidden md:block" 
                     style={{ backgroundColor: exp.color }}></div>
                
                {/* Content */}
                <div className="md:ml-20">
                  <Card className="apple-card apple-hover border-0">
                    <CardContent className="p-8">
                      {/* Header Section */}
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                        <div className="flex items-start gap-4">
                          <div 
                            className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: `${exp.color}15` }}
                          >
                            <exp.logo className="w-7 h-7" style={{ color: exp.color }} />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-foreground mb-1">{exp.title}</h3>
                            <p className="text-lg font-medium mb-1" style={{ color: exp.color }}>{exp.company}</p>
                            <p className="body-text text-muted-foreground">{exp.location}</p>
                          </div>
                        </div>
                        <div className="mt-4 lg:mt-0 lg:text-right">
                          <div className="inline-flex items-center gap-2 bg-muted rounded-full px-4 py-2">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: exp.color }}></div>
                            <span className="font-medium text-foreground">{exp.period}</span>
                          </div>
                          <p className="body-text text-muted-foreground mt-1 lg:text-right">{exp.duration}</p>
                        </div>
                      </div>

                      {/* Key Achievements */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-4">Key Achievements</h4>
                        <div className="space-y-3">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <div key={achievementIndex} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0" style={{ backgroundColor: exp.color }}></div>
                              <p className="body-text text-muted-foreground leading-relaxed">{achievement}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Skills & Technologies */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Core Competencies</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-muted text-foreground px-3 py-1.5 rounded-full text-sm font-medium apple-hover"
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
        <div className="mt-20">
          <Card className="apple-card border-0 text-center">
            <CardContent className="p-12">
              <h3 className="text-lg font-semibold text-foreground mb-8">Career Highlights</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold text-foreground mb-2">3+</div>
                  <div className="body-text text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground mb-2">$100M+</div>
                  <div className="body-text text-muted-foreground">Portfolio Value Managed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground mb-2">12%</div>
                  <div className="body-text text-muted-foreground">Average Improvement</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
