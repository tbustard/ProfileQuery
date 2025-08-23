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
        <div className="text-center mb-16">
          <h2 className="large-title text-foreground mb-4">Professional Experience</h2>
          <p className="callout text-secondary max-w-2xl mx-auto">
            My professional journey and key accomplishments in financial services.
          </p>
        </div>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <Card key={index} className="apple-card apple-hover border-0" data-testid={`experience-${index}`}>
              <CardContent className="p-12">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8">
                  <div className="flex items-start space-x-4">
                    <div 
                      className="p-3 rounded-2xl flex-shrink-0 mt-1"
                      style={{ backgroundColor: `${exp.color}15` }}
                    >
                      <exp.logo className="w-8 h-8" style={{ color: exp.color }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{exp.title}</h3>
                      <p className="body-text font-semibold mb-2" style={{ color: exp.color }}>{exp.company}</p>
                      <p className="body-text text-muted-foreground">{exp.location}</p>
                    </div>
                  </div>
                  <div className="text-secondary md:text-right mt-4 md:mt-0">
                    <p className="font-semibold text-lg">{exp.period}</p>
                    <p className="text-muted-foreground">{exp.duration}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <ul className="space-y-2 text-secondary">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-4">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                        data-testid={`tech-${index}-${techIndex}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
