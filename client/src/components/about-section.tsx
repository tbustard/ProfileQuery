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

        {/* Apple-style Dynamic Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[200px]">
          
          {/* University Hero Card - Large */}
          <Card className="col-span-2 row-span-2 md:col-span-2 lg:col-span-3 apple-card border-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/30 dark:to-indigo-950/30 backdrop-blur-sm overflow-hidden group apple-hover">
            <CardContent className="p-8 h-full flex flex-col justify-center items-center text-center relative">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-lg mb-6 transition-all duration-300 group-hover:scale-110">
                <img 
                  src={universityLogo} 
                  alt="University Logo" 
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">{education.institution}</h3>
              <p className="text-lg font-semibold text-primary mb-2">{education.degree}</p>
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="font-medium text-foreground">Class of {education.year}</span>
              </div>
            </CardContent>
          </Card>

          {/* CIBC Competition Win */}
          <Card className="col-span-1 row-span-1 apple-card border-0 bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-yellow-950/30 dark:to-orange-950/30 backdrop-blur-sm apple-hover group">
            <CardContent className="p-6 h-full flex flex-col justify-center items-center text-center">
              <Trophy className="w-8 h-8 text-amber-600 mb-3 transition-all duration-300 group-hover:scale-110" />
              <div className="text-2xl font-bold text-foreground mb-1">1st</div>
              <div className="text-xs font-medium text-foreground">CIBC Competition</div>
            </CardContent>
          </Card>

          {/* Scholarships */}
          <Card className="col-span-1 row-span-1 apple-card border-0 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/30 dark:to-emerald-950/30 backdrop-blur-sm apple-hover group">
            <CardContent className="p-6 h-full flex flex-col justify-center items-center text-center">
              <Award className="w-8 h-8 text-emerald-600 mb-3 transition-all duration-300 group-hover:scale-110" />
              <div className="text-lg font-bold text-foreground mb-1">$47,500</div>
              <div className="text-xs font-medium text-foreground">Scholarships</div>
            </CardContent>
          </Card>

          {/* Academic Standing */}
          <Card className="col-span-1 row-span-1 apple-card border-0 bg-gradient-to-br from-purple-50 to-violet-100 dark:from-purple-950/30 dark:to-violet-950/30 backdrop-blur-sm apple-hover group">
            <CardContent className="p-6 h-full flex flex-col justify-center items-center text-center">
              <GraduationCap className="w-8 h-8 text-violet-600 mb-3 transition-all duration-300 group-hover:scale-110" />
              <div className="text-lg font-bold text-foreground mb-1">Top 15%</div>
              <div className="text-xs font-medium text-foreground">Academic</div>
            </CardContent>
          </Card>

          {/* Finance Major Focus */}
          <Card className="col-span-1 row-span-1 apple-card border-0 bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-indigo-950/30 dark:to-blue-950/30 backdrop-blur-sm apple-hover">
            <CardContent className="p-6 h-full flex flex-col justify-center items-center text-center">
              <div className="text-3xl mb-2">📊</div>
              <div className="text-sm font-bold text-foreground mb-1">Finance</div>
              <div className="text-xs font-medium text-foreground">Major</div>
            </CardContent>
          </Card>

          {/* Leadership Card - Tall */}
          <Card className="col-span-1 row-span-2 md:col-span-1 lg:col-span-2 apple-card border-0 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-950/30 dark:to-gray-950/30 backdrop-blur-sm apple-hover">
            <CardContent className="p-6 h-full flex flex-col justify-start">
              <h4 className="text-lg font-bold text-foreground mb-4 text-center">Leadership</h4>
              <div className="space-y-3 flex-1">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                  <p className="text-sm font-medium text-foreground">Investment Fund Manager</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                  <p className="text-sm font-medium text-foreground">Finance Club Executive</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                  <p className="text-sm font-medium text-foreground">RBC Ambassador</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Competition Results */}
          <Card className="col-span-2 row-span-1 md:col-span-2 lg:col-span-2 apple-card border-0 bg-gradient-to-br from-rose-50 to-pink-100 dark:from-rose-950/30 dark:to-pink-950/30 backdrop-blur-sm apple-hover">
            <CardContent className="p-6 h-full flex flex-col justify-center">
              <h4 className="text-lg font-bold text-foreground mb-4 text-center">Case Competitions</h4>
              <div className="grid grid-cols-3 gap-3 text-center">
                <div>
                  <div className="text-2xl font-bold text-foreground">🥇</div>
                  <div className="text-xs font-medium text-foreground">CIBC</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">🥉</div>
                  <div className="text-xs font-medium text-foreground">TD</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">🏆</div>
                  <div className="text-xs font-medium text-foreground">RBC</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Co-op Program */}
          <Card className="col-span-1 row-span-1 apple-card border-0 bg-gradient-to-br from-teal-50 to-cyan-100 dark:from-teal-950/30 dark:to-cyan-950/30 backdrop-blur-sm apple-hover">
            <CardContent className="p-6 h-full flex flex-col justify-center items-center text-center">
              <div className="text-3xl mb-2">🎓</div>
              <div className="text-sm font-bold text-foreground mb-1">Co-op</div>
              <div className="text-xs font-medium text-foreground">Program</div>
            </CardContent>
          </Card>

          {/* Awards Count */}
          <Card className="col-span-1 row-span-1 apple-card border-0 bg-gradient-to-br from-amber-50 to-yellow-100 dark:from-amber-950/30 dark:to-yellow-950/30 backdrop-blur-sm apple-hover">
            <CardContent className="p-6 h-full flex flex-col justify-center items-center text-center">
              <div className="text-2xl font-bold text-foreground mb-1">5</div>
              <div className="text-xs font-medium text-foreground">Academic Awards</div>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}
