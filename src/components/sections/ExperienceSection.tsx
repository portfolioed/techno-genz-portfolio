
import { useState } from "react";
import { cn } from "@/lib/utils";

interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    company: "TechCorp Inc.",
    position: "Senior Frontend Developer",
    period: "2022 - Present",
    description: [
      "Led the frontend development team for the company's flagship product",
      "Implemented modern React architecture with TypeScript and Redux Toolkit",
      "Improved application performance by 40% through code optimization",
      "Mentored junior developers and conducted code reviews"
    ],
    technologies: ["React", "TypeScript", "Redux", "Tailwind CSS"]
  },
  {
    id: 2,
    company: "WebSolutions LLC",
    position: "Full Stack Developer",
    period: "2020 - 2022",
    description: [
      "Developed and maintained multiple client web applications",
      "Created RESTful APIs using Node.js and Express",
      "Implemented authentication systems using JWT and OAuth",
      "Collaborated with UX/UI designers to implement responsive designs"
    ],
    technologies: ["JavaScript", "Node.js", "Express", "MongoDB", "React"]
  },
  {
    id: 3,
    company: "StartUp Innovations",
    position: "Junior Developer",
    period: "2018 - 2020",
    description: [
      "Assisted in building the company's web application from scratch",
      "Learned and implemented best practices for frontend development",
      "Participated in agile development processes and sprint planning",
      "Collaborated with senior developers to implement new features"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"]
  }
];

const ExperienceSection = () => {
  const [activeExperience, setActiveExperience] = useState(experiences[0]);

  return (
    <section id="experience" className="bg-secondary/50">
      <div className="content-container">
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">
          My professional journey and the skills I've developed along the way.
        </p>
        
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Experience Navigation */}
          <div className="lg:w-1/4">
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 gap-2">
              {experiences.map((exp) => (
                <button
                  key={exp.id}
                  onClick={() => setActiveExperience(exp)}
                  className={cn(
                    "px-4 py-3 rounded-lg text-left whitespace-nowrap lg:whitespace-normal",
                    "transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary",
                    activeExperience.id === exp.id 
                      ? "bg-primary text-primary-foreground" 
                      : "hover:bg-secondary bg-background"
                  )}
                >
                  <div className="font-medium">{exp.company}</div>
                  <div className="text-sm text-muted-foreground">{exp.period}</div>
                </button>
              ))}
            </div>
          </div>
          
          {/* Experience Details */}
          <div className="lg:w-3/4">
            <div className="glass card-shadow p-6 rounded-xl animate-fade-in">
              <div className="mb-4">
                <h3 className="text-xl font-bold">{activeExperience.position}</h3>
                <p className="text-muted-foreground">{activeExperience.company} • {activeExperience.period}</p>
              </div>
              
              <div className="mb-6">
                <ul className="space-y-2">
                  {activeExperience.description.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {activeExperience.technologies.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
