import { Card, CardContent } from "@/components/ui/card";
import bmoLogo from "@assets/BMO_Logo.svg_1755913265896.png";
import tdLogo from "@assets/Toronto-Dominion_Bank_logo.svg_1755913265896.png";
import rbcLogo from "@assets/RBC-Logo_1755913716813.png";
import irvingLogo from "@assets/Irving_Oil.svg_1755913265895.png";
import grantThorntonLogo from "@assets/Grant_Thornton_logo_1755913265895.png";

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  duration: string;
  achievements: string[];
  technologies: string[];
  logoSrc: string;
  color: string;
}

export default function ExperienceSection() {
  const experiences: Experience[] = [
    {
      title: "Portfolio Assistant",
      company: "BMO Private Wealth",
      location: "Toronto, Ontario",
      period: "2022-2023",
      duration: "1 year",
      achievements: [
        "Advised two Investment Counsellors managing portfolios over $100M and cut preparation time by 12%",
        "Bolstered client communications, boosting response rates by 9% heightening client satisfaction and retention",
      ],
      technologies: ["Portfolio Management", "Client Relations", "Financial Analysis", "Excel"],
      logoSrc: bmoLogo,
      color: "#005EB8"
    },
    {
      title: "Financial Advisor",
      company: "TD Canada Trust",
      location: "Kingston, Ontario",
      period: "2021-2022",
      duration: "1 year",
      achievements: [
        "Cultivated strong client relationships by assessing individual financial needs, resulting in an 11% increase in sales",
        "Exceeded sales targets, achieving a top 15% performance ranking within the district",
      ],
      technologies: ["Financial Planning", "Sales", "Client Advisory", "Product Knowledge"],
      logoSrc: tdLogo,
      color: "#00AC46"
    },
    {
      title: "Banking Advisor",
      company: "Royal Bank of Canada",
      location: "Kingston, Ontario",
      period: "2020-2021",
      duration: "1 year",
      achievements: [
        "Strengthened client relationships by advising on personalized solutions, increased repeat transactions by 13%",
        "Excelled in needs-based advising, boosting adoption of core products like GICs, mutual funds, and TFSAs by 8%",
      ],
      technologies: ["Banking Products", "Financial Advisory", "Client Relationship Management", "Digital Banking"],
      logoSrc: rbcLogo,
      color: "#005DAA"
    },
    {
      title: "Client Advisor Intern",
      company: "Royal Bank of Canada",
      location: "Fredericton, New Brunswick",
      period: "2019-2020",
      duration: "1 year",
      achievements: [
        "Resolved complex client issues, achieving a 15% boost in positive feedback scores for the branch",
        "Promoted RBC's digital banking tools, leading to a 10% increase in online and mobile banking adoption",
      ],
      technologies: ["Client Service", "Digital Banking", "Problem Resolution", "Customer Support"],
      logoSrc: rbcLogo,
      color: "#005DAA"
    },
    {
      title: "Marketing Intern",
      company: "Irving Oil Limited",
      location: "Saint John, New Brunswick",
      period: "2018",
      duration: "4 months",
      achievements: [
        "Conducted competitor analysis driving insights that improved targeted marketing by 11%",
        "Developed a Customer Lifecycle model that increased targeted promotions, boosting customer engagement by 8%",
      ],
      technologies: ["Market Research", "Customer Analytics", "Competitive Analysis", "Marketing Strategy"],
      logoSrc: irvingLogo,
      color: "#FF6B35"
    },
    {
      title: "Tax Return Intern",
      company: "Grant Thornton LLP",
      location: "Saint John, New Brunswick",
      period: "2018",
      duration: "5 months",
      achievements: [
        "Streamlined client financial data, boosting accuracy by 10% ensuring timely submission of 100+ tax returns",
        "Improved tax return preparation processes, cutting filing errors by 15%",
      ],
      technologies: ["Tax Preparation", "Financial Analysis", "Data Management", "Client Service"],
      logoSrc: grantThorntonLogo,
      color: "#8B5CF6"
    },
  ];

  return (
    <section id="experience" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Professional Experience
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My professional journey and key accomplishments in financial services
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>
          
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="relative" data-testid={`experience-${index}`}>
                {/* Timeline Marker */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-sm hidden md:block"></div>
                
                {/* Content */}
                <div className="md:ml-20">
                  <div className="relative bg-white/30 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] group">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative p-8">
                      {/* Header Section */}
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                        <div className="flex items-start gap-4">
                          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110">
                            <img 
                              src={exp.logoSrc} 
                              alt={`${exp.company} Logo`} 
                              className="w-10 h-10 object-contain"
                            />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-foreground mb-1">{exp.title}</h3>
                            <p className="text-lg font-medium text-primary mb-1">{exp.company}</p>
                            <p className="text-muted-foreground font-medium">{exp.location}</p>
                          </div>
                        </div>
                        <div className="mt-4 lg:mt-0 lg:text-right">
                          <span className="text-lg font-medium text-gray-500">{exp.period}</span>
                        </div>
                      </div>

                      {/* Key Achievements */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-4">Key Achievements</h4>
                        <div className="space-y-3">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <div key={achievementIndex} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0" style={{ backgroundColor: exp.color }}></div>
                              <p className="text-muted-foreground font-medium leading-relaxed">{achievement}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Skills & Technologies */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Core Competencies</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors duration-300"
                              data-testid={`tech-${index}-${techIndex}`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Summary */}
        <div className="mt-24">
          <div className="bg-white/30 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-primary/10 via-blue-500/10 to-purple-500/10 p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-foreground mb-12 text-center">
                Career Highlights
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-foreground mb-3">5+</div>
                  <div className="text-muted-foreground font-medium">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-green-600 mb-3">6</div>
                  <div className="text-muted-foreground font-medium">Companies</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-primary mb-3">3</div>
                  <div className="text-muted-foreground font-medium">Industries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
