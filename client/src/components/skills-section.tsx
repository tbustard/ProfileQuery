import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SiGoogle } from "react-icons/si";
import { FaCertificate, FaGraduationCap, FaTrophy, FaStar, FaChartLine, FaCalculator, FaHeart, FaRunning, FaUsers, FaHandshake } from "react-icons/fa";
import unitedWayLogo from "@assets/United-Way-Logo_1755913265895.png";
import rbcLogo from "@assets/RBC-Logo_1755913716813.png";

interface Certification {
  name: string;
  year: string;
  institution: string;
  highlight?: boolean;
  percentile?: string;
}

interface CertificationCategory {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  certifications: Certification[];
}

export default function CertificationsSection() {
  const certificationCategories: CertificationCategory[] = [
    {
      title: "Financial Excellence",
      icon: FaChartLine,
      color: "bg-blue-500",
      certifications: [
        { name: "CFA Level I Candidate", year: "2025", institution: "CFA Institute", highlight: true },
        { name: "Financial & Valuation Modeling", year: "2024", institution: "Wall Street Prep" },
        { name: "Discounted Cash Flow Analysis", year: "2024", institution: "Training the Street" },
        { name: "Financial Planning 1", year: "2023", institution: "Canadian Securities Institute" },
        { name: "Canadian Securities Course", year: "2021", institution: "CSI" },
        { name: "Personal Finance Essentials", year: "2020", institution: "McGill University" }
      ]
    },
    {
      title: "Data & Technology",
      icon: SiGoogle,
      color: "bg-emerald-500",
      certifications: [
        { name: "Data Analytics Professional", year: "2023", institution: "Google", highlight: true },
        { name: "Data Visualization with Tableau", year: "2023", institution: "UC Davis" },
        { name: "Python for Everybody", year: "2023", institution: "University of Michigan" },
        { name: "Machine Learning", year: "2020", institution: "Stanford University" },
        { name: "SQL for Data Science", year: "2020", institution: "UC Davis" },
        { name: "Power BI Data Visualization", year: "2020", institution: "Microsoft" }
      ]
    },
    {
      title: "Advanced Analytics",
      icon: FaCalculator,
      color: "bg-purple-500",
      certifications: [
        { name: "Econometrics: Methods & Applications", year: "2024", institution: "Erasmus University" },
        { name: "Matrix Algebra for Engineers", year: "2024", institution: "HKUST" },
        { name: "Introduction to Calculus", year: "2023", institution: "University of Sydney" },
        { name: "Inferential Statistics", year: "2020", institution: "Duke University" },
        { name: "Excel Skills for Business", year: "2020", institution: "Macquarie University" }
      ]
    },
    {
      title: "Academic Achievement",
      icon: FaGraduationCap,
      color: "bg-amber-500",
      certifications: [
        { 
          name: "GRE General Test", 
          year: "2024", 
          institution: "ETS", 
          highlight: true,
          percentile: "Verbal: 77th | Quant: 94th | Writing: 56th"
        }
      ]
    }
  ];

  // Get featured certifications (highlighted ones)
  const featuredCerts = certificationCategories.flatMap(category => 
    category.certifications
      .filter(cert => cert.highlight)
      .map(cert => ({ ...cert, category: category.title, icon: category.icon }))
  );

  return (
    <section id="certifications" className="apple-section-alt">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Professional Certifications
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive expertise across finance, technology, and analytics through continuous learning and professional development
          </p>
        </div>

        {/* All Certifications - Modern Apple-style showcase */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-foreground mb-16 text-center">Complete Certification Portfolio</h3>
          <div className="space-y-12">
            {certificationCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="relative overflow-hidden">
                {/* Modern Category Container */}
                <div className="bg-white/20 backdrop-blur-2xl rounded-3xl border border-white/30 shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-700">
                  {/* Category Header with gradient */}
                  <div className="bg-gradient-to-r from-primary/10 via-blue-500/10 to-purple-500/10 p-8 lg:p-10">
                    <div className="flex items-center gap-6">
                      <div className="w-20 h-20 bg-white/30 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-xl">
                        <category.icon className="w-10 h-10 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">{category.title}</h4>
                        <p className="text-lg text-muted-foreground font-medium">{category.certifications.length} professional certifications</p>
                      </div>
                    </div>
                  </div>

                  {/* Certifications Grid */}
                  <div className="p-8 lg:p-10">
                    <div className="grid gap-4">
                      {category.certifications.map((cert, certIndex) => (
                        <div 
                          key={certIndex}
                          className="group relative bg-white/40 backdrop-blur-sm rounded-2xl border border-white/40 p-6 hover:bg-white/50 transition-all duration-500 hover:scale-[1.01] hover:shadow-lg"
                          data-testid={`cert-${categoryIndex}-${certIndex}`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h5 className="text-lg font-semibold text-foreground">{cert.name}</h5>
                                {cert.highlight && (
                                  <div className="px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full border border-primary/30">
                                    FEATURED
                                  </div>
                                )}
                              </div>
                              <p className="text-muted-foreground font-medium mb-1">{cert.institution}</p>
                              {cert.percentile && (
                                <div className="mt-2">
                                  <p className="text-sm text-primary font-semibold bg-primary/10 px-4 py-2 rounded-full inline-block whitespace-nowrap">{cert.percentile}</p>
                                </div>
                              )}
                            </div>
                            <div className="text-right">
                              <span className="text-lg font-bold text-foreground">{cert.year}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Metrics - Apple-style clean stats */}
        <div className="bg-white/30 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-primary/10 via-blue-500/10 to-purple-500/10 p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-foreground mb-12 text-center">
              Professional Development Highlights
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-foreground mb-3">20+</div>
                <div className="text-muted-foreground font-medium">Total Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-green-600 mb-3">4</div>
                <div className="text-muted-foreground font-medium">Expertise Areas</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-3">2024</div>
                <div className="text-muted-foreground font-medium">Latest Achievement</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Community Impact Section Component
interface CommunityActivity {
  title: string;
  organization: string;
  period: string;
  duration: string;
  description: string;
  achievements: string[];
  skills: string[];
  icon?: React.ComponentType<{ className?: string }>;
  logoSrc?: string;
  color: string;
}

export function CommunitySection() {
  const communityActivities: CommunityActivity[] = [
    {
      title: "Limestone Race Weekend 10K Completion",
      organization: "Community Charitable Event",
      period: "2023",
      duration: "Annual Event",
      description: "Annual charitable fitness event supporting local community causes",
      achievements: [
        "Successfully completed 10K run",
        "Contributed to fundraising for local charities"
      ],
      skills: ["Physical Fitness", "Community Engagement", "Goal Achievement", "Charitable Support"],
      icon: FaRunning,
      color: "#FF6B35"
    },
    {
      title: "Next Generation Ambassador",
      organization: "United Way",
      period: "2020-2023",
      duration: "3 years",
      description: "Youth leadership and community engagement representative with 3 years of continuous service",
      achievements: [
        "Advocated for community initiatives and social causes",
        "Engaged with local organizations and stakeholders"
      ],
      skills: ["Leadership", "Public Speaking", "Community Organizing", "Stakeholder Engagement"],
      logoSrc: unitedWayLogo,
      color: "#FF5A28"
    },
    {
      title: "Student Ambassador",
      organization: "RBC",
      period: "2019-2020",
      duration: "1 year",
      description: "Campus representative and brand ambassador during university studies",
      achievements: [
        "Promoted RBC services to university students",
        "Organized campus events and educational sessions"
      ],
      skills: ["Marketing", "Event Coordination", "Peer Education", "Professional Networking"],
      logoSrc: rbcLogo,
      color: "#005DAA"
    }
  ];

  return (
    <section id="community" className="apple-section">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Community Impact
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Demonstrating leadership and commitment through meaningful community engagement and volunteer service
          </p>
        </div>

        {/* Enhanced Apple Timeline */}
        <div className="relative">
          {/* Sophisticated Multi-layer Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/60 to-transparent hidden md:block shadow-sm"></div>
          <div className="absolute left-7 top-0 bottom-0 w-1 bg-gradient-to-b from-white/20 via-white/40 to-white/20 backdrop-blur-xl rounded-full shadow-inner hidden md:block"></div>
          <div className="absolute left-7.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/30 via-primary/50 to-primary/30 rounded-full hidden md:block"></div>
          
          <div className="space-y-20">
            {communityActivities.map((activity, index) => (
              <div key={index} className="relative group" data-testid={`community-activity-${index}`}>
                {/* Premium Apple-style Timeline Marker */}
                <div className="absolute left-4 w-8 h-8 rounded-full border-2 border-white/80 bg-gradient-to-br from-white/95 to-white/80 shadow-xl hidden md:block backdrop-blur-xl group-hover:scale-110 transition-all duration-500">
                  <div className="absolute inset-1.5 rounded-full bg-gradient-to-br from-primary to-primary/80 shadow-inner"></div>
                  <div className="absolute inset-2 rounded-full bg-white/30 backdrop-blur-sm"></div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent to-white/40"></div>
                </div>
                
                {/* Content */}
                <div className="md:ml-24">
                  <div className="relative bg-white/40 backdrop-blur-[25px] backdrop-saturate-[200%] rounded-3xl border border-white/30 shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-700 hover:scale-[1.02] group-hover:border-white/50">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
                    <div className="relative p-10">
                      {/* Enhanced Header Section */}
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-8">
                        <div className="flex items-start gap-6">
                          <div className="w-18 h-18 bg-gradient-to-br from-primary/15 to-primary/5 rounded-3xl flex items-center justify-center flex-shrink-0 shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-110 border border-white/20 backdrop-blur-sm">
                            <div className="w-16 h-16 bg-white/30 rounded-2xl flex items-center justify-center shadow-inner">
                              {activity.logoSrc ? (
                                <img 
                                  src={activity.logoSrc} 
                                  alt={`${activity.organization} Logo`} 
                                  className="w-11 h-11 object-contain"
                                />
                              ) : activity.icon ? (
                                <activity.icon className="w-9 h-9 text-primary" />
                              ) : null}
                            </div>
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-foreground mb-1">{activity.title}</h3>
                            <p className="text-lg font-medium text-primary mb-1">{activity.organization}</p>
                            <p className="text-muted-foreground font-medium">{activity.description}</p>
                          </div>
                        </div>
                        <div className="mt-4 lg:mt-0 lg:text-right">
                          <span className="text-lg font-medium text-gray-500">{activity.period}</span>
                        </div>
                      </div>

                      {/* Enhanced Key Achievements */}
                      <div className="mb-8">
                        <h4 className="text-lg font-semibold text-foreground mb-5 tracking-tight">Key Achievements</h4>
                        <div className="space-y-4">
                          {activity.achievements.map((achievement, achievementIndex) => (
                            <div key={achievementIndex} className="flex items-start gap-4 p-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/10 hover:bg-white/30 transition-all duration-300">
                              <div className="w-2 h-2 bg-gradient-to-br from-primary to-primary/70 rounded-full mt-3 flex-shrink-0 shadow-sm"></div>
                              <p className="text-muted-foreground font-medium leading-relaxed text-base">{achievement}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Enhanced Skills Developed */}
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-4 tracking-tight">Core Competencies</h4>
                        <div className="flex flex-wrap gap-3">
                          {activity.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="bg-gradient-to-r from-primary/15 to-primary/10 text-primary px-4 py-2 rounded-2xl text-sm font-semibold hover:from-primary/25 hover:to-primary/15 transition-all duration-300 border border-primary/20 backdrop-blur-sm shadow-sm hover:shadow-md hover:scale-105"
                              data-testid={`skill-${index}-${skillIndex}`}
                            >
                              {skill}
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

        {/* Community Impact Summary */}
        <div className="mt-24">
          <div className="bg-white/30 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-primary/10 via-blue-500/10 to-purple-500/10 p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-foreground mb-12 text-center">
                Community Impact Highlights
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-foreground mb-3">4+</div>
                  <div className="text-muted-foreground font-medium">Years of Service</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-green-600 mb-3">3</div>
                  <div className="text-muted-foreground font-medium">Organizations Served</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-primary mb-3">10K</div>
                  <div className="text-muted-foreground font-medium">Community Challenge</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
