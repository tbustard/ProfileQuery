import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SiGoogle } from "react-icons/si";
import { FaCertificate, FaGraduationCap, FaTrophy, FaStar, FaChartLine, FaCalculator } from "react-icons/fa";

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
        <div className="text-center mb-16">
          <h2 className="large-title text-foreground mb-4">
            Professional Certifications
          </h2>
          <p className="callout text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across finance, technology, and analytics through continuous learning and professional development
          </p>
        </div>

        {/* Featured Certifications - Apple-style hero showcase */}
        <div className="mb-20">
          <h3 className="text-xl font-semibold text-foreground mb-8 text-center">Featured Achievements</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredCerts.map((cert, index) => (
              <Card key={index} className="apple-card apple-hover border-0 text-center" data-testid={`featured-cert-${index}`}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <cert.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{cert.name}</h4>
                  <p className="body-text text-muted-foreground mb-2">{cert.institution}</p>
                  <Badge variant="secondary" className="text-xs">{cert.year}</Badge>
                  {cert.percentile && (
                    <p className="text-sm text-primary font-medium mt-3">{cert.percentile}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Certifications - Apple-style list layout */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-foreground mb-8 text-center">Complete Certification Portfolio</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {certificationCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-4">
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-muted rounded-2xl flex items-center justify-center mr-4">
                    <category.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">{category.title}</h4>
                    <p className="body-text text-muted-foreground">{category.certifications.length} certifications</p>
                  </div>
                </div>

                {/* Certifications List */}
                <div className="space-y-3">
                  {category.certifications.map((cert, certIndex) => (
                    <div 
                      key={certIndex}
                      className="apple-card border-0 p-5 apple-hover"
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
                          <p className="body-text text-muted-foreground text-sm">{cert.institution}</p>
                          {cert.percentile && (
                            <p className="text-xs text-primary font-medium mt-1">{cert.percentile}</p>
                          )}
                        </div>
                        <span className="body-text text-muted-foreground text-sm font-medium">{cert.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Metrics - Apple-style clean stats */}
        <Card className="apple-card border-0 text-center">
          <CardContent className="p-12">
            <h3 className="text-lg font-semibold text-foreground mb-8">Professional Development Summary</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-foreground mb-2">20+</div>
                <div className="body-text text-muted-foreground">Total Certifications</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground mb-2">4</div>
                <div className="body-text text-muted-foreground">Expertise Areas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground mb-2">2024</div>
                <div className="body-text text-muted-foreground">Latest Achievement</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground mb-2">94th</div>
                <div className="body-text text-muted-foreground">GRE Percentile</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
