
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  const scrollToNextSection = () => {
    const experienceSection = document.getElementById("experience");
    if (experienceSection) {
      const topOffset = 80; // Adjust for navbar height
      const elementPosition = experienceSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl opacity-50 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/20 rounded-full filter blur-3xl opacity-50 animate-float animation-delay-200"></div>
      </div>
      
      <div className="content-container relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
        <div className="inline-block mb-6 animate-fade-in">
          <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary">
            Full Stack Developer
          </span>
        </div>
        
        <h1 className="mb-6 animate-fade-in animate-delay-100">
          Building digital experiences that 
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"> matter</span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-12 animate-fade-in animate-delay-200">
          I'm a passionate developer who crafts modern, responsive web applications with cutting-edge technologies. Specializing in creating elegant solutions to complex problems.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animate-delay-300">
          <a 
            href="#contact" 
            className={cn(
              "px-6 py-3 rounded-lg bg-primary text-primary-foreground",
              "hover:bg-primary/90 transition-colors shadow-lg",
              "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            )}
            onClick={(e) => {
              e.preventDefault();
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                const topOffset = 80;
                const elementPosition = contactSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - topOffset;
                
                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                });
              }
            }}
          >
            Get In Touch
          </a>
          
          <a 
            href="#projects" 
            className={cn(
              "px-6 py-3 rounded-lg border border-input bg-background",
              "hover:bg-secondary transition-colors",
              "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            )}
            onClick={(e) => {
              e.preventDefault();
              const projectsSection = document.getElementById("projects");
              if (projectsSection) {
                const topOffset = 80;
                const elementPosition = projectsSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - topOffset;
                
                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                });
              }
            }}
          >
            View Projects
          </a>
        </div>
      </div>
      
      <button 
        onClick={scrollToNextSection}
        className={cn(
          "absolute bottom-10 left-1/2 -translate-x-1/2 p-3 rounded-full",
          "bg-background hover:bg-secondary card-shadow",
          "transition-all hover:translate-y-1 animate-bounce",
          "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        )}
        aria-label="Scroll down"
      >
        <ArrowDown className="h-5 w-5" />
      </button>
    </section>
  );
};

export default HeroSection;
