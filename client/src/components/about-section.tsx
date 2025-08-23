import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Award, GraduationCap } from "lucide-react";
import universityLogo from "@assets/University_of_New_Brunswick_Logo.svg_1755912478863.png";

export default function EducationSection() {
  const education = {
    institution: "University of New Brunswick",
    location: "Saint John, New Brunswick", 
    degree: "Bachelor of Business Administration",
    major: "Finance Major",
    year: "2020",
    achievements: [
      "Case Competitions: 1st Place (CIBC), 3rd Place (TD), RBC and SLC participant",
      "Analyst and Portfolio Manager – University of New Brunswick Student Investment Fund",
      "UNB Finance Club, RBC Student Ambassador, Accredited Co-op Program",
      "Recipient of 5 Scholarship and Alumni Awards for academic merit and leadership skills, Total $47,500"
    ]
  };

  const highlights = [
    { title: "1st Place", subtitle: "CIBC Case Competition", iconType: "trophy", color: "bg-gradient-to-br from-yellow-100 to-yellow-50" },
    { title: "$47,500", subtitle: "Total Scholarships & Awards", iconType: "award", color: "bg-gradient-to-br from-green-100 to-green-50" },
    { title: "Top 15%", subtitle: "Academic Standing", iconType: "graduation", color: "bg-gradient-to-br from-blue-100 to-blue-50" }
  ];

  const renderIcon = (iconType: string) => {
    switch (iconType) {
      case "trophy":
        return <Trophy className="w-6 h-6 text-yellow-600" />;
      case "award":
        return <Award className="w-6 h-6 text-green-600" />;
      case "graduation":
        return <GraduationCap className="w-6 h-6 text-blue-600" />;
      default:
        return null;
    }
  };

  const achievements = [
    { 
      category: "Academic Excellence", 
      items: [
        { title: "Finance Major Focus", desc: "Specialized in financial markets & investment analysis" },
        { title: "5 Academic Awards", desc: "$47,500 in scholarships and merit recognition" },
        { title: "Top 15% Standing", desc: "Consistent academic performance throughout degree" }
      ],
      gradient: "from-blue-500/10 to-purple-500/10"
    },
    { 
      category: "Leadership Impact", 
      items: [
        { title: "Student Investment Fund", desc: "Portfolio Manager analyzing real market investments" },
        { title: "RBC Student Ambassador", desc: "Campus leadership and financial services representation" },
        { title: "Finance Club Executive", desc: "Member engagement and professional development" }
      ],
      gradient: "from-green-500/10 to-teal-500/10"
    },
    { 
      category: "Competition Success", 
      items: [
        { title: "CIBC Case Competition", desc: "1st Place - Strategic business problem solving" },
        { title: "TD Case Competition", desc: "3rd Place - Financial analysis and presentation" },
        { title: "RBC & SLC Competitions", desc: "Multiple case competition participation" }
      ],
      gradient: "from-orange-500/10 to-red-500/10"
    }
  ];

  return (
    <section id="education" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Education
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Academic foundation in finance and business that drives professional excellence
          </p>
        </div>

        {/* Hero Education Card - Modern Asymmetric Layout */}
        <div className="mb-24">
          <div className="bg-white/40 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-5 gap-0">
              {/* Left Content */}
              <div className="lg:col-span-3 p-12 lg:p-16">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                    <img 
                      src={universityLogo} 
                      alt="University Logo" 
                      className="w-14 h-14 object-contain"
                    />
                  </div>
                  <div className="bg-primary/10 backdrop-blur-sm rounded-2xl px-4 py-2">
                    <span className="text-sm font-semibold text-primary">Class of {education.year}</span>
                  </div>
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
                  {education.institution}
                </h3>
                <div className="space-y-2 mb-6">
                  <p className="text-xl font-semibold text-primary">{education.degree}</p>
                  <p className="text-lg font-medium text-blue-600">{education.major}</p>
                  <p className="text-muted-foreground">{education.location}</p>
                </div>
              </div>

              {/* Right Stats */}
              <div className="lg:col-span-2 bg-gradient-to-br from-primary/5 to-blue-500/10 p-8 lg:p-12 flex items-center">
                <div className="space-y-8 w-full">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className={`w-12 h-12 ${highlight.color} rounded-xl flex items-center justify-center shadow-sm`}>
                        {renderIcon(highlight.iconType)}
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-foreground">{highlight.title}</div>
                        <p className="text-sm text-muted-foreground">{highlight.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievement Categories - Modern Flowing Layout */}
        <div className="space-y-8">
          {achievements.map((category, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden rounded-3xl bg-gradient-to-r ${category.gradient} backdrop-blur-sm border border-white/20`}
            >
              <div className="absolute inset-0 bg-white/40 backdrop-blur-xl" />
              <div className="relative p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                  {/* Category Title */}
                  <div className="lg:w-1/4">
                    <h4 className="text-2xl font-bold text-foreground mb-2">
                      {category.category}
                    </h4>
                    <div className="w-12 h-1 bg-gradient-to-r from-primary to-blue-500 rounded-full" />
                  </div>

                  {/* Achievement Items */}
                  <div className="lg:w-3/4 grid md:grid-cols-3 gap-6">
                    {category.items.map((item, itemIndex) => (
                      <div 
                        key={itemIndex} 
                        className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:bg-white/40 transition-all duration-300 hover:scale-[1.02]"
                      >
                        <h5 className="font-semibold text-foreground mb-2 text-lg">
                          {item.title}
                        </h5>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Excellence Summary - Modern Stats Grid */}
        <div className="mt-24">
          <div className="bg-white/30 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-primary/10 via-blue-500/10 to-purple-500/10 p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-foreground mb-12 text-center">
                Academic Excellence at a Glance
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-foreground mb-3">BBA</div>
                  <div className="text-muted-foreground font-medium">Business Administration</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-green-600 mb-3">5</div>
                  <div className="text-muted-foreground font-medium">Academic Awards</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-yellow-600 mb-3">1st</div>
                  <div className="text-muted-foreground font-medium">CIBC Competition</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-primary mb-3">2020</div>
                  <div className="text-muted-foreground font-medium">Graduation Year</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}