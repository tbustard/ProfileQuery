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
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "Jan 2021 - Present",
      duration: "3 years",
      achievements: [
        "Led development of a customer analytics platform serving 10M+ users daily",
        "Implemented microservices architecture reducing system response time by 40%",
        "Mentored 3 junior developers and established code review best practices",
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    },
    {
      title: "Full Stack Developer",
      company: "StartupCo",
      location: "San Francisco, CA",
      period: "Jun 2019 - Dec 2020",
      duration: "1.5 years",
      achievements: [
        "Built MVP from scratch using modern web technologies",
        "Developed real-time features using WebSocket connections",
        "Integrated payment systems and third-party APIs",
      ],
      technologies: ["Vue.js", "Express", "MongoDB", "Socket.io"],
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
            <Card key={index} className="shadow-lg" data-testid={`experience-${index}`}>
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
