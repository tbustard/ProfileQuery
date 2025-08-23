import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SiGoogle } from "react-icons/si";
import { FaCertificate, FaGraduationCap, FaTrophy, FaStar, FaChartLine, FaCalculator, FaHeart, FaRunning, FaUsers, FaHandshake, FaCode } from "react-icons/fa";
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

        {/* Key Certifications - Modern Showcase */}
        <div className="mb-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
            {/* GRE Achievement */}
            <div className="relative">
              <div className="bg-white/30 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-700">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-12">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl flex items-center justify-center mb-8 mx-auto shadow-xl">
                    <FaGraduationCap className="w-10 h-10 text-primary" />
                  </div>
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground">GRE General Test</h3>
                    <p className="text-lg text-muted-foreground font-medium">Educational Testing Service</p>
                    <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full">
                      <span className="text-sm font-semibold text-primary">2024</span>
                    </div>
                    <div className="pt-4 space-y-2">
                      <div className="text-sm text-muted-foreground font-medium">Performance Scores</div>
                      <div className="text-lg font-semibold text-foreground">Verbal: 77th | Quant: 94th | Writing: 56th</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Certifications Grid */}
            <div className="space-y-6">
              <div className="bg-white/30 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg p-8 hover:shadow-xl transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                    <FaChartLine className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground">Financial Analysis</h4>
                    <p className="text-sm text-muted-foreground">Corporate Finance & Investment</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Corporate Finance Fundamentals</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">2021</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Investment Management</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">2022</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Financial Markets</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">2021</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/30 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg p-8 hover:shadow-xl transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                    <FaCode className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground">Technology & Analytics</h4>
                    <p className="text-sm text-muted-foreground">Data Science & Programming</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Python for Data Science</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">2023</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Machine Learning</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">2023</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Excel Skills for Business</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">2020</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Development Summary */}
        <div className="bg-white/30 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-primary/10 via-blue-500/10 to-purple-500/10 p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-foreground mb-12 text-center">
              Professional Development Summary
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
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
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-3">94th</div>
                <div className="text-muted-foreground font-medium">GRE Percentile</div>
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

        {/* Community Activities Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>
          
          <div className="space-y-16">
            {communityActivities.map((activity, index) => (
              <div key={index} className="relative" data-testid={`community-activity-${index}`}>
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
                            {activity.logoSrc ? (
                              <img 
                                src={activity.logoSrc} 
                                alt={`${activity.organization} Logo`} 
                                className="w-10 h-10 object-contain"
                              />
                            ) : activity.icon ? (
                              <activity.icon className="w-8 h-8 text-primary" />
                            ) : null}
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

                      {/* Key Achievements */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-4">Key Achievements</h4>
                        <div className="space-y-3">
                          {activity.achievements.map((achievement, achievementIndex) => (
                            <div key={achievementIndex} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                              <p className="text-muted-foreground font-medium leading-relaxed">{achievement}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Skills Developed */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Core Competencies</h4>
                        <div className="flex flex-wrap gap-2">
                          {activity.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors duration-300"
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
