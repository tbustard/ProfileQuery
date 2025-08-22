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
      title: "Financial Analysis",
      icon: Monitor,
      skills: [
        { name: "Financial Modeling", level: 5 },
        { name: "Equity Research", level: 5 },
        { name: "Portfolio Management", level: 4 },
        { name: "Risk Assessment", level: 4 },
      ],
    },
    {
      title: "Data & Technology",
      icon: Server,
      skills: [
        { name: "Python", level: 4 },
        { name: "SQL", level: 5 },
        { name: "Power BI", level: 4 },
        { name: "Tableau", level: 4 },
      ],
    },
    {
      title: "Certifications",
      icon: Wrench,
      skills: [
        { name: "CFA Level I", level: 4 },
        { name: "Wall Street Prep", level: 5 },
        { name: "Google Analytics", level: 4 },
        { name: "Machine Learning", level: 3 },
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
            <Card key={categoryIndex} className="liquid-glass-card shadow-2xl specular-highlight">
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
