import { Card, CardContent } from "@/components/ui/card";
import { MapPin, GraduationCap, Briefcase, Heart } from "lucide-react";

export default function AboutSection() {
  const interests = ["Web Development", "Data Science", "Machine Learning", "Open Source"];
  
  const quickFacts = [
    { icon: MapPin, label: "San Francisco, CA" },
    { icon: GraduationCap, label: "BS Computer Science, Stanford University" },
    { icon: Briefcase, label: "5+ Years Experience" },
    { icon: Heart, label: "Coffee Enthusiast & Rock Climber" },
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
              With over 5 years of experience in full-stack development, I've built everything from responsive web applications to complex data processing systems. My journey began with a Computer Science degree and has evolved through hands-on experience with cutting-edge technologies.
            </p>
            <p className="text-lg text-secondary leading-relaxed">
              I'm particularly passionate about the intersection of web development and data science. My SQL translator tool demonstrates this passion - combining natural language processing with database expertise to make SQL more accessible to everyone.
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
          
          <Card className="shadow-lg">
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
