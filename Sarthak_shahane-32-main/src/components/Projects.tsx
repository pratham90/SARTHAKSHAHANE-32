import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Filter } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const projects = [
    {
      title: "E-Commerce Microservices Platform",
      description: "Scalable backend system with Java Spring Boot, handling 10K+ concurrent users. Features payment processing, inventory management, and real-time notifications.",
      tech: ["Java", "Spring Boot", "PostgreSQL", "Redis", "Docker"],
      category: "backend",
      github: "https://github.com/sarthak/ecommerce-platform",
      demo: null,
      featured: true
    },
    {
      title: "Task Management React App",
      description: "Modern project management tool with real-time collaboration, drag-and-drop interface, and advanced filtering capabilities.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Zustand", "Framer Motion"],
      category: "frontend",
      github: "https://github.com/sarthak/task-manager",
      demo: "https://taskmanager-demo.vercel.app",
      featured: true
    },
    {
      title: "Mobile Fitness Tracker",
      description: "React Native app with workout tracking, social features, and AI-powered workout recommendations. Built with modern mobile UX patterns.",
      tech: ["React Native", "Firebase", "Redux Toolkit", "Expo"],
      category: "mobile",
      github: "https://github.com/sarthak/fitness-tracker",
      demo: null,
      featured: false
    },
    {
      title: "Design System Component Library",
      description: "Comprehensive UI component library built in React with Storybook documentation. Used across multiple production applications.",
      tech: ["React", "Storybook", "TypeScript", "Styled Components"],
      category: "design",
      github: "https://github.com/sarthak/design-system",
      demo: "https://designsystem-docs.netlify.app",
      featured: true
    },
    {
      title: "Real-time Chat API",
      description: "WebSocket-based chat service with JWT authentication, message history, and file sharing capabilities. Handles 1000+ concurrent connections.",
      tech: ["Java", "Spring WebSocket", "JWT", "MongoDB"],
      category: "backend",
      github: "https://github.com/sarthak/chat-api",
      demo: null,
      featured: false
    },
    {
      title: "Portfolio Website Builder",
      description: "Drag-and-drop website builder with Figma-like interface. Features component library, responsive previews, and code export functionality.",
      tech: ["React", "Figma API", "Canvas API", "Node.js"],
      category: "frontend",
      github: "https://github.com/sarthak/portfolio-builder",
      demo: "https://portfolio-builder-demo.com",
      featured: false
    }
  ];

  const categories = [
    { value: "all", label: "All Projects" },
    { value: "backend", label: "Backend" },
    { value: "frontend", label: "Frontend" },
    { value: "mobile", label: "Mobile" },
    { value: "design", label: "Design" }
  ];

  const filteredProjects = selectedFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            A showcase of end-to-end solutions, from robust backend systems to elegant user interfaces
          </p>
          
          {/* Filter */}
          <div className="flex justify-center">
            <Select value={selectedFilter} onValueChange={setSelectedFilter}>
              <SelectTrigger className="w-48 bg-card border-border">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Filter projects" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Featured Projects Grid */}
        {selectedFilter === "all" && (
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">⭐ Featured Work</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.slice(0, 2).map((project, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-large transition-all duration-300 hover:scale-[1.02] border-border bg-card hover:bg-card-hover overflow-hidden"
                >
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex gap-2">
                        {project.github && (
                          <Button variant="ghost" size="sm" asChild className="hover:text-primary">
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                        {project.demo && (
                          <Button variant="ghost" size="sm" asChild className="hover:text-primary">
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="secondary"
                          className="text-xs bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index}
              className="group hover:shadow-medium transition-all duration-300 hover:scale-105 border-border bg-card hover:bg-card-hover"
            >
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-1">
                    {project.github && (
                      <Button variant="ghost" size="sm" asChild className="h-8 w-8 p-0 hover:text-primary">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-3 w-3" />
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button variant="ghost" size="sm" asChild className="h-8 w-8 p-0 hover:text-primary">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary"
                      className="text-xs px-2 py-1 bg-secondary"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 3 && (
                    <Badge variant="secondary" className="text-xs px-2 py-1 bg-muted">
                      +{project.tech.length - 3}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;