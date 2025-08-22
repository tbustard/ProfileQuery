import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Trophy, Users, Award } from "lucide-react";

export default function EducationSection() {
  const educationData = [
    {
      institution: "University of New Brunswick (UNB)",
      location: "Saint John, New Brunswick", 
      degree: "Bachelor of Business Administration, 2020",
      achievements: [
        "Case Competitions: 1st Place (CIBC), 3rd Place (TD), RBC and SLC participant",
        "Analyst and Portfolio Manager – University of New Brunswick Student Investment Fund",
        "UNB Finance Club, RBC Student Ambassador, Accredited Co-op Program",
        "Recipient of 5 Scholarship and Alumni Awards for academic merit and leadership skills, Total $47,500"
      ]
    }
  ];

  return (
    <section id="education" className="section-padding bg-gradient-to-b from-muted/30 to-background">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Education</h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Academic foundation and achievements that drive my professional success.
          </p>
        </div>

        <div className="space-y-10">
          {educationData.map((education, index) => (
            <Card key={index} className="shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm" data-testid={`education-${index}`}>
              <CardContent className="p-10">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">{education.institution}</h3>
                    <p className="text-primary font-semibold mb-3 text-lg">{education.location}</p>
                    <p className="text-xl font-semibold text-secondary">{education.degree}</p>
                  </div>
                  <div className="bg-primary/10 p-4 rounded-full">
                    <GraduationCap className="text-primary w-8 h-8" />
                  </div>
                </div>
                <div className="space-y-2">
                  <ul className="space-y-2 text-secondary">
                    {education.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
