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
    <section id="education" className="section-padding relative">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Academic foundation and achievements that drive my professional success.
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((education, index) => (
            <Card key={index} className="glass-card shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 border-white/10" data-testid={`education-${index}`}>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{education.institution}</h3>
                    <p className="text-emerald-400 font-medium mb-2">{education.location}</p>
                    <p className="text-lg font-medium text-white/90">{education.degree}</p>
                  </div>
                  <GraduationCap className="text-emerald-400 w-8 h-8 mt-4 md:mt-0" />
                </div>
                <div className="space-y-2">
                  <ul className="space-y-2 text-white/80">
                    {education.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start">
                        <span className="text-emerald-400 mr-2">•</span>
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
