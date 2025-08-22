import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Server, Wrench } from "lucide-react";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: typeof Monitor;
  skills: Skill[];
}

export default function SkillsSection() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend",
      icon: Monitor,
      skills: [
        { name: "React", level: 5 },
        { name: "TypeScript", level: 4 },
        { name: "Next.js", level: 4 },
        { name: "Tailwind CSS", level: 5 },
      ],
    },
    {
      title: "Backend",
      icon: Server,
      skills: [
        { name: "Node.js", level: 5 },
        { name: "Python", level: 5 },
        { name: "PostgreSQL", level: 4 },
        { name: "MongoDB", level: 4 },
      ],
    },
    {
      title: "Tools & Others",
      icon: Wrench,
      skills: [
        { name: "Git", level: 5 },
        { name: "Docker", level: 4 },
        { name: "AWS", level: 3 },
        { name: "OpenAI API", level: 4 },
      ],
    },
  ];

  const renderSkillLevel = (level: number) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((dot) => (
          <div
            key={dot}
            className={`skill-dot ${
              dot <= level ? "skill-dot-filled" : "skill-dot-empty"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="skills" className="section-padding">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Technical Skills</h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="shadow-lg">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <category.icon className="text-4xl text-primary mb-4 w-12 h-12 mx-auto" />
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex} 
                      className="flex justify-between items-center"
                      data-testid={`skill-${categoryIndex}-${skillIndex}`}
                    >
                      <span className="text-secondary">{skill.name}</span>
                      {renderSkillLevel(skill.level)}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
