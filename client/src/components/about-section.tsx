import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Award, GraduationCap } from "lucide-react";
import universityLogo from "@assets/University_of_New_Brunswick_Logo.svg_1755912478863.png";

export default function EducationSection() {
  const education = {
    institution: "University of New Brunswick",
    location: "Saint John, New Brunswick", 
    degree: "Bachelor of Business Administration",
    year: "2020",
    achievements: [
      "Case Competitions: 1st Place (CIBC), 3rd Place (TD), RBC and SLC participant",
      "Analyst and Portfolio Manager – University of New Brunswick Student Investment Fund",
      "UNB Finance Club, RBC Student Ambassador, Accredited Co-op Program",
      "Recipient of 5 Scholarship and Alumni Awards for academic merit and leadership skills, Total $47,500"
    ]
  };

  const highlights = [
    { title: "1st Place", subtitle: "CIBC Case Competition", iconType: "trophy" },
    { title: "$47,500", subtitle: "Total Scholarships & Awards", iconType: "award" },
    { title: "Top 15%", subtitle: "Academic Standing", iconType: "graduation" }
  ];

  const renderIcon = (iconType: string) => {
    switch (iconType) {
      case "trophy":
        return <Trophy className="w-8 h-8 text-primary" />;
      case "award":
        return <Award className="w-8 h-8 text-primary" />;
      case "graduation":
        return <GraduationCap className="w-8 h-8 text-primary" />;
      default:
        return null;
    }
  };

  const activities = [
    { 
      category: "Leadership", 
      items: [
        "Student Investment Fund Portfolio Manager",
        "Finance Club Executive Member",
        "Analyst and Portfolio Manager – UNB Student Investment Fund"
      ] 
    },
    { 
      category: "Recognition", 
      items: [
        "RBC Student Ambassador",
        "5 Academic Merit Awards",
        "Recipient of 5 Scholarship and Alumni Awards",
        "Total $47,500 in Academic Merit Recognition",
        "Accredited Co-op Program Participant"
      ] 
    },
    { 
      category: "Competition", 
      items: [
        "1st Place - CIBC Case Competition",
        "3rd Place - TD Case Competition", 
        "RBC Case Competition Participant",
        "SLC Competition Participant"
      ] 
    }
  ];

  return (
    <section id="education" className="apple-section-alt">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="large-title text-foreground mb-4">Education</h2>
          <p className="callout text-muted-foreground max-w-2xl mx-auto">
            Academic foundation and achievements that drive my professional success.
          </p>
        </div>

        {/* Hero Education Card */}
        <div className="mb-16">
          <Card className="apple-card border-0 text-center">
            <CardContent className="p-12">
              {/* University Logo/Badge */}
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-lg mx-auto mb-8 apple-hover">
                <img 
                  src={universityLogo} 
                  alt="University Logo" 
                  className="w-16 h-16 object-contain transition-all duration-300 hover:scale-110"
                />
              </div>
              
              {/* Main Info */}
              <h3 className="text-2xl font-semibold text-foreground mb-2">{education.institution}</h3>
              <p className="text-lg font-medium text-primary mb-2">{education.degree}</p>
              <p className="body-text text-muted-foreground mb-4">{education.location}</p>
              
              {/* Year Badge */}
              <div className="inline-flex items-center bg-muted rounded-full px-4 py-2">
                <span className="font-medium text-foreground">Class of {education.year}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Academic Highlights */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-foreground mb-8 text-center">Academic Highlights</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="apple-card apple-hover border-0 text-center" data-testid={`highlight-${index}`}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    {renderIcon(highlight.iconType)}
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-2">{highlight.title}</div>
                  <p className="body-text text-muted-foreground">{highlight.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Activities & Leadership */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-foreground mb-8 text-center">Leadership & Activities</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <div key={index} className="space-y-4">
                <div className="text-center">
                  <h4 className="font-semibold text-foreground mb-4">{activity.category}</h4>
                </div>
                <div className="space-y-3">
                  {activity.items.map((item, itemIndex) => (
                    <Card key={itemIndex} className="apple-card border-0 p-4 apple-hover">
                      <p className="body-text text-muted-foreground text-center text-sm">{item}</p>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Summary Stats */}
        <div className="mt-16">
          <Card className="apple-card border-0 text-center">
            <CardContent className="p-12">
              <h3 className="text-lg font-semibold text-foreground mb-8">Academic Excellence Summary</h3>
              <div className="grid md:grid-cols-4 gap-8">
                <div>
                  <div className="text-3xl font-bold text-foreground mb-2">BBA</div>
                  <div className="body-text text-muted-foreground">Business Administration</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground mb-2">5</div>
                  <div className="body-text text-muted-foreground">Academic Awards</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground mb-2">3</div>
                  <div className="body-text text-muted-foreground">Case Competition Podiums</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground mb-2">2020</div>
                  <div className="body-text text-muted-foreground">Graduation Year</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
