import { Card, CardContent } from "@/components/ui/card";
import { FaTrophy, FaStar, FaGraduationCap } from "react-icons/fa";
import universityLogo from "@assets/University_of_New_Brunswick_Logo.svg_1755912478863.png";
import cibcLogo from "@assets/cibc_1755931822053.png";
import tdLogo from "@assets/Toronto-Dominion_Bank_logo.svg_1755913265896.png";
import rbcLogo from "@assets/RBC-Logo_1755913716813.png";

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
    { title: "$47,500", subtitle: "Total Scholarships & Awards", iconType: "award" },
    { title: "Student Ambassador", subtitle: "RBC Student Ambassador of the Month - February 2020", iconType: "image", logoSrc: rbcLogo },
    { title: "1st Place", subtitle: "CIBC Case Competition Winner", iconType: "image", logoSrc: cibcLogo }
  ];

  const renderIcon = (highlight: any) => {
    if (highlight.iconType === "image" && highlight.logoSrc) {
      return (
        <img 
          src={highlight.logoSrc} 
          alt="Logo" 
          className="w-10 h-10 object-contain"
        />
      );
    }
    
    switch (highlight.iconType) {
      case "trophy":
        return <FaTrophy className="w-8 h-8 text-primary" />;
      case "award":
        return <FaStar className="w-8 h-8 text-primary" />;
      case "graduation":
        return <FaGraduationCap className="w-8 h-8 text-primary" />;
      default:
        return null;
    }
  };

  const achievements = [
    { 
      category: "Academic Excellence", 
      items: [
        { title: "Finance Specialization", desc: "Bachelor of Business Administration with Finance Major focus" },
        { title: "5 Academic Awards", desc: "$47,500 in scholarships and alumni awards for merit and leadership" },
        { title: "Accredited Co-op Program", desc: "Professional work experience integrated with academic curriculum" }
      ],
      gradient: "from-blue-500/10 to-purple-500/10"
    },
    { 
      category: "Leadership & Professional", 
      items: [
        { title: "Student Investment Fund", desc: "Analyst and Portfolio Manager - Energy sector focus and analysis" },
        { title: "RBC Student Ambassador", desc: "Campus leadership and financial services representation role" },
        { title: "UNB Finance Club", desc: "Active member in professional development and networking activities" }
      ],
      gradient: "from-green-500/10 to-teal-500/10"
    },
    { 
      category: "Competition Achievements", 
      items: [
        { title: "CIBC Case Competition", desc: "1st Place - Strategic business problem solving and analysis" },
        { title: "TD Case Competition", desc: "3rd Place - Financial analysis and presentation excellence" },
        { title: "RBC Case Competition", desc: "Participant in competitive business case analysis and strategy" }
      ],
      gradient: "from-orange-500/10 to-red-500/10"
    }
  ];

  return (
    <section id="education" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />
      
      <div className="container-width">
        <div className="bg-white/90 backdrop-blur-xl rounded-[28px] p-10 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
              Education
            </h2>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Academic foundation in finance and business that drives professional excellence
            </p>
          </div>

        {/* Hero Education Card - Modern Apple Layout */}
        <div className="mb-24">
          <div className="relative bg-white/90 backdrop-blur-xl rounded-[28px] border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 p-12 lg:p-16 max-w-5xl mx-auto min-h-[200px]">
            <div className="flex items-center gap-8 h-full">
              {/* Logo on left */}
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 flex-shrink-0">
                <img 
                  src={universityLogo} 
                  alt="University Logo" 
                  className="w-12 h-12 object-contain"
                />
              </div>
              
              {/* Content on right */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-3xl lg:text-4xl font-bold text-foreground">
                    {education.institution}
                  </h3>
                  <span className="text-lg font-medium text-gray-500">2016-2020</span>
                </div>
                <div className="space-y-2">
                  <p className="text-xl font-semibold text-primary">{education.degree}</p>
                  <p className="text-lg font-medium text-primary">{education.major}</p>
                  <p className="text-base text-muted-foreground">{education.location}</p>
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
              className={`relative overflow-hidden rounded-[28px] bg-gradient-to-r ${category.gradient} backdrop-blur-sm border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500`}
            >
              <div className="absolute inset-0 bg-white/80 backdrop-blur-xl" />
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
                        className="bg-white/90 backdrop-blur-xl rounded-[20px] p-10 border border-white/20 shadow-lg hover:shadow-xl hover:bg-white/95 transition-all duration-500 hover:scale-[1.02]"
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
          <div className="bg-white/90 backdrop-blur-xl rounded-[28px] border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden">
            <div className="bg-gradient-to-r from-primary/10 via-blue-500/10 to-purple-500/10 p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-foreground mb-12 text-center">
                Academic Excellence Highlights
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-foreground mb-3">$47,500</div>
                  <div className="text-muted-foreground font-medium">Total Scholarships & Awards</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-green-600 mb-3">1st Place</div>
                  <div className="text-muted-foreground font-medium">RBC Student Ambassador of the Month - February 2020</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-primary mb-3">1st Place</div>
                  <div className="text-muted-foreground font-medium">CIBC Case Competition Winner</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}