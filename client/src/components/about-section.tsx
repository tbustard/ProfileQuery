import { Card, CardContent } from "@/components/ui/card";

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
    <section id="education" className="apple-section-alt">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="large-title text-foreground mb-4">Education</h2>
          <p className="callout text-secondary max-w-2xl mx-auto">
            Academic foundation and achievements that drive my professional success.
          </p>
        </div>

        <div className="space-y-10">
          {educationData.map((education, index) => (
            <Card key={index} className="apple-card apple-hover border-0" data-testid={`education-${index}`}>
              <CardContent className="p-12">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{education.institution}</h3>
                    <p className="body-text text-primary font-semibold mb-3">{education.location}</p>
                    <p className="callout font-semibold text-secondary">{education.degree}</p>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    UNB
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
