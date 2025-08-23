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

  return (
    <section id="certifications" className="section-padding bg-gradient-to-b from-background to-muted/30">
      <div className="container-width">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-6">
            <FaTrophy className="text-primary w-6 h-6" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Professional Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive expertise across finance, technology, and analytics through continuous learning and professional development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {certificationCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="group shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 bg-white/95 backdrop-blur-sm overflow-hidden">
              <div className={`h-2 ${category.color} transition-all duration-300 group-hover:h-3`}></div>
              <CardContent className="p-8">
                <div className="flex items-center mb-8">
                  <div className={`p-4 rounded-2xl mr-5 transition-all duration-300 group-hover:scale-110`} style={{backgroundColor: category.color.replace('bg-', '').replace('-500', '') === 'blue' ? '#3b82f61a' : category.color.replace('bg-', '').replace('-500', '') === 'emerald' ? '#10b9811a' : category.color.replace('bg-', '').replace('-500', '') === 'purple' ? '#a855f71a' : '#f59e0b1a'}}>
                    <category.icon className="w-7 h-7" style={{color: category.color.replace('bg-', '').replace('-500', '') === 'blue' ? '#3b82f6' : category.color.replace('bg-', '').replace('-500', '') === 'emerald' ? '#10b981' : category.color.replace('bg-', '').replace('-500', '') === 'purple' ? '#a855f7' : '#f59e0b'}} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">{category.title}</h3>
                    <Badge variant="secondary" className="text-sm font-medium">
                      {category.certifications.length} Certification{category.certifications.length !== 1 ? 's' : ''}
                    </Badge>
                  </div>
                </div>
                
                <div className="space-y-5">
                  {category.certifications.map((cert, certIndex) => (
                    <div 
                      key={certIndex} 
                      className={`relative p-4 rounded-xl transition-all duration-300 hover:scale-105 ${cert.highlight ? 'bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20' : 'bg-muted/30 hover:bg-muted/50'}`}
                      data-testid={`cert-${categoryIndex}-${certIndex}`}
                    >
                      {cert.highlight && (
                        <div className="absolute -top-1 -right-1">
                          <FaStar className="w-5 h-5 text-amber-500" />
                        </div>
                      )}
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-foreground text-lg leading-tight">{cert.name}</h4>
                        <Badge variant="outline" className="text-xs font-medium ml-3 flex-shrink-0">
                          {cert.year}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground font-medium mb-1">{cert.institution}</p>
                      {cert.percentile && (
                        <p className="text-sm text-primary font-medium">{cert.percentile}</p>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievement Summary */}
        <div className="text-center bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">20+</div>
              <div className="text-sm text-muted-foreground font-medium">Total Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">4</div>
              <div className="text-sm text-muted-foreground font-medium">Expertise Areas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">2024</div>
              <div className="text-sm text-muted-foreground font-medium">Latest Achievement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">94th</div>
              <div className="text-sm text-muted-foreground font-medium">GRE Percentile</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
