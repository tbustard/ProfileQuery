import { Card, CardContent } from "@/components/ui/card";

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  duration: string;
  achievements: string[];
  technologies: string[];
}

export default function ExperienceSection() {
  const experiences: Experience[] = [
    {
      title: "Equity Analyst",
      company: "Fiscal.ai",
      location: "Toronto, Ontario",
      period: "2023 - Present",
      duration: "1+ years",
      achievements: [
        "Spearheaded comprehensive equity research and financial modeling initiatives using advanced AI-driven analytics",
        "Engineered data-driven investment recommendations contributing to portfolio optimization strategies",
        "Enhanced investment decision-making processes through advanced analytics and risk management protocols",
      ],
      technologies: ["Python", "AI Analytics", "Financial Modeling", "Risk Management"],
    },
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
    },
  ];

  return (
    <section id="experience" className="section-padding bg-muted/20">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Professional Experience</h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            My professional journey and key accomplishments in software development.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="liquid-glass-card shadow-2xl specular-highlight" data-testid={`experience-${index}`}>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{exp.title}</h3>
                    <p className="text-primary font-medium mb-2">{exp.company}</p>
                    <p className="text-secondary">{exp.location}</p>
                  </div>
                  <div className="text-secondary md:text-right mt-4 md:mt-0">
                    <p className="font-medium">{exp.period}</p>
                    <p>{exp.duration}</p>
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
