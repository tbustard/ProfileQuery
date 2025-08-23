import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  codeUrl: string;
}

export default function PortfolioSection() {
  const projects: Project[] = [
    {
      title: "AI-Driven Investment Analytics Platform",
      description: "Advanced equity research platform leveraging machine learning for portfolio optimization and risk assessment.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      technologies: ["Python", "AI Analytics", "Financial Modeling"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Portfolio Performance Dashboard",
      description: "Real-time portfolio tracking and performance analysis tool with interactive visualizations and custom reporting.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      technologies: ["Power BI", "Tableau", "SQL"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Financial Risk Assessment Model",
      description: "Comprehensive risk management system for evaluating investment opportunities and market volatility.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      technologies: ["Excel VBA", "Python", "Statistical Analysis"],
      demoUrl: "#",
      codeUrl: "#",
    },
  ];

  return (
    <section id="portfolio" className="section-padding bg-muted/20">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            A showcase of my recent work and technical achievements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500" data-testid={`project-${index}`}>
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              
              <CardContent className="p-10">
                <h3 className="text-xl font-semibold text-foreground mb-3">{project.title}</h3>
                <p className="text-secondary mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                      data-testid={`project-tech-${index}-${techIndex}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.demoUrl} 
                    className="text-primary hover:text-primary/80 transition-all duration-500 flex items-center"
                    data-testid={`link-demo-${index}`}
                  >
                    <ExternalLink className="mr-1 h-4 w-4" />
                    Demo
                  </a>
                  <a 
                    href={project.codeUrl} 
                    className="text-secondary hover:text-foreground transition-all duration-500 flex items-center"
                    data-testid={`link-code-${index}`}
                  >
                    <Github className="mr-1 h-4 w-4" />
                    Code
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#" 
            className="text-primary hover:text-primary/80 transition-all duration-500 font-medium flex items-center justify-center"
            data-testid="link-github-more"
          >
            <Github className="mr-2 h-4 w-4" />
            View more projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
