import { Card, CardContent } from "@/components/ui/card";
import { Award, TrendingUp, Database, Calculator } from "lucide-react";

interface CertificationCategory {
  title: string;
  icon: typeof Award;
  certifications: string[];
}

export default function CertificationsSection() {
  const certificationCategories: CertificationCategory[] = [
    {
      title: "Financial Certifications",
      icon: TrendingUp,
      certifications: [
        "CFA Level I Candidate (2025)",
        "Wall Street Prep - Financial & Valuation Modeling (2024)",
        "Training the Street - Discounted Cash Flow Analysis and Modeling (2024)",
        "Canadian Securities Institute: Financial Planning 1 (2023)",
        "Canadian Securities Course (2021)",
        "McGill Personal Finance Essentials (2020)"
      ]
    },
    {
      title: "Data Analytics & Technology",
      icon: Database,
      certifications: [
        "Google Data Analytics Professional Certificate (2023)",
        "Data Visualization with Tableau - University of California, Davis (2023)",
        "Python for Everybody Specialization - University of Michigan (2023)",
        "Machine Learning - Stanford University (2020)",
        "SQL for Data Science - University of California, Davis (2020)",
        "Analyzing and Visualizing Data with Power BI (2020)"
      ]
    },
    {
      title: "Advanced Business Skills",
      icon: Calculator,
      certifications: [
        "Econometrics: Methods and Applications - Erasmus University Rotterdam (2024)",
        "Matrix Algebra for Engineers - HKUST (2024)",
        "Introduction to Calculus - University of Sydney (2023)",
        "Inferential Statistics - Duke University (2020)",
        "Excel Skills for Business - Macquarie University (2020)"
      ]
    },
    {
      title: "Academic Excellence",
      icon: Award,
      certifications: [
        "GRE General Test (May 30, 2024) - Verbal: 158 (77th percentile), Quantitative: 170 (94th percentile), Writing: 4.0 (56th percentile)"
      ]
    }
  ];

  return (
    <section id="certifications" className="section-padding bg-gradient-to-b from-background to-muted/30">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Professional Certifications</h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Comprehensive professional development and specialized expertise across finance, technology, and analytics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {certificationCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-10">
                <div className="flex items-center mb-8">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <category.icon className="text-primary w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.certifications.map((certification, certIndex) => (
                    <div 
                      key={certIndex} 
                      className="flex items-start text-secondary"
                      data-testid={`cert-${categoryIndex}-${certIndex}`}
                    >
                      <span className="text-primary mr-2">•</span>
                      <span className="leading-relaxed">{certification}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
