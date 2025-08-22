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
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory management and payment processing.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      technologies: ["React", "Node.js", "Stripe"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time data visualization platform with interactive charts and custom reporting features.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      technologies: ["Vue.js", "D3.js", "Python"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates and team communication features.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      technologies: ["React Native", "Firebase", "Socket.io"],
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
            <Card key={index} className="shadow-lg overflow-hidden hover:shadow-xl transition-shadow" data-testid={`project-${index}`}>
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              
              <CardContent className="p-6">
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
                    className="text-primary hover:text-primary/80 transition-colors flex items-center"
                    data-testid={`link-demo-${index}`}
                  >
                    <ExternalLink className="mr-1 h-4 w-4" />
                    Demo
                  </a>
                  <a 
                    href={project.codeUrl} 
                    className="text-secondary hover:text-foreground transition-colors flex items-center"
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
            className="text-primary hover:text-primary/80 transition-colors font-medium flex items-center justify-center"
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
