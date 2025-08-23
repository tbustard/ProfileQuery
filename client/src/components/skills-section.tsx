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

        {/* Featured Certifications - Apple-style hero showcase */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Featured Achievements</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredCerts.map((cert, index) => (
              <div key={index} className="relative bg-white/30 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] group text-center" data-testid={`featured-cert-${index}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <cert.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{cert.name}</h4>
                  <p className="text-muted-foreground font-medium mb-2">{cert.institution}</p>
                  <Badge variant="secondary" className="text-xs">{cert.year}</Badge>
                  {cert.percentile && (
                    <p className="text-sm text-primary font-medium mt-3">{cert.percentile}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Certifications - Apple-style list layout */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Complete Certification Portfolio</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {certificationCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-4">
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mr-4">
                    <category.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">{category.title}</h4>
                    <p className="text-muted-foreground font-medium">{category.certifications.length} certifications</p>
                  </div>
                </div>

                {/* Certifications List */}
                <div className="space-y-3">
                  {category.certifications.map((cert, certIndex) => (
                    <div 
                      key={certIndex}
                      className="relative bg-white/30 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] group p-5"
                      data-testid={`cert-${categoryIndex}-${certIndex}`}
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h5 className="font-medium text-foreground">{cert.name}</h5>
                            {cert.highlight && (
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                            )}
                          </div>
                          <p className="text-muted-foreground text-sm font-medium">{cert.institution}</p>
                          {cert.percentile && (
                            <p className="text-xs text-primary font-medium mt-1">{cert.percentile}</p>
                          )}
                        </div>
                        <span className="text-muted-foreground text-sm font-medium">{cert.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Metrics - Apple-style clean stats */}
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
