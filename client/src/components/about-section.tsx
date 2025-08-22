import { Card, CardContent } from "@/components/ui/card";
import { MapPin, GraduationCap, Briefcase, Heart } from "lucide-react";

export default function AboutSection() {
  const interests = ["Financial Analysis", "AI & Machine Learning", "Data Visualization", "Portfolio Management"];
  
  const quickFacts = [
    { icon: MapPin, label: "Toronto, Ontario, Canada" },
    { icon: GraduationCap, label: "BBA, University of New Brunswick" },
    { icon: Briefcase, label: "4+ Years Finance Experience" },
    { icon: Heart, label: "Fitness Enthusiast & United Way Volunteer" },
  ];

  return (
    <section id="about" className="section-padding bg-muted/20">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Learn more about my background, passion for technology, and what drives me as a developer.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-secondary leading-relaxed">
              Currently working as an Equity Analyst at Fiscal.ai, I specialize in AI-driven financial analytics and investment research. My journey from a Bachelor of Business Administration to advanced financial certifications has equipped me with both traditional finance expertise and modern technological skills.
            </p>
            <p className="text-lg text-secondary leading-relaxed">
              I'm passionate about combining quantitative analysis with innovative technology solutions. My SQL translator tool demonstrates this fusion - leveraging AI to make complex database queries more accessible for financial analysis and decision-making.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              {interests.map((interest, index) => (
                <span 
                  key={index}
                  className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium"
                  data-testid={`tag-interest-${index}`}
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
          
          <Card className="liquid-glass-card shadow-2xl specular-highlight">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">Quick Facts</h3>
              <div className="space-y-4">
                {quickFacts.map((fact, index) => (
                  <div key={index} className="flex items-center" data-testid={`fact-${index}`}>
                    <fact.icon className="text-primary w-6 h-6 mr-4" />
                    <span className="text-secondary">{fact.label}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
