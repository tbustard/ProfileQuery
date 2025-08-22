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
    <section id="experience" className="section-padding relative">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Professional Experience</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            My professional journey and key accomplishments in financial services.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="glass-card shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 border-white/10" data-testid={`experience-${index}`}>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{exp.title}</h3>
                    <p className="text-blue-400 font-medium mb-2">{exp.company}</p>
                    <p className="text-white/70">{exp.location}</p>
                  </div>
                  <div className="text-white/70 md:text-right mt-4 md:mt-0">
                    <p className="font-medium">{exp.period}</p>
                    <p>{exp.duration}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <ul className="space-y-2 text-white/80">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-4">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="glass px-3 py-1 rounded-full text-sm text-white/90 border border-white/20"
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
