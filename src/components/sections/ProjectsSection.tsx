
import { useState } from "react";
import { ExternalLink, GitHub } from "lucide-react";
import { cn } from "@/lib/utils";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A fully responsive e-commerce platform with product search, filtering, cart management, and secure checkout. Built with React, Redux, and integrated with Stripe for payments.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    tags: ["React", "Redux", "Node.js", "Express", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A Kanban-style task management application with drag-and-drop functionality, user authentication, and real-time updates. Features include task assignment, due dates, and progress tracking.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    tags: ["React", "TypeScript", "Firebase", "Material-UI"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A modern weather application that provides current conditions and forecasts for any location. Features include interactive maps, hourly predictions, and severe weather alerts.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    tags: ["JavaScript", "React", "OpenWeather API", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects">
      <div className="content-container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          A showcase of my recent work and personal projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="relative flex flex-col bg-card rounded-xl overflow-hidden card-shadow animate-fade-in"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative h-52 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className={cn(
                    "w-full h-full object-cover transition-transform duration-500",
                    hoveredProject === project.id ? "scale-110" : "scale-100"
                  )}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex justify-between items-center mt-auto">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:bg-secondary transition-colors"
                      aria-label="View GitHub repository"
                    >
                      <GitHub className="h-5 w-5" />
                    </a>
                  )}
                  
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={cn(
                        "flex items-center gap-2 px-4 py-2 rounded-lg",
                        "bg-primary text-primary-foreground",
                        "hover:bg-primary/90 transition-colors"
                      )}
                    >
                      <span>View Project</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
