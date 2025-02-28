
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-card py-10 border-t border-border">
      <div className="content-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <a 
              href="#about" 
              className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
            >
              dev.portfolio
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="#about" 
              className="text-sm hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                const aboutSection = document.getElementById("about");
                if (aboutSection) {
                  window.scrollTo({
                    top: aboutSection.offsetTop - 80,
                    behavior: "smooth",
                  });
                }
              }}
            >
              About
            </a>
            <a 
              href="#experience" 
              className="text-sm hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                const experienceSection = document.getElementById("experience");
                if (experienceSection) {
                  window.scrollTo({
                    top: experienceSection.offsetTop - 80,
                    behavior: "smooth",
                  });
                }
              }}
            >
              Experience
            </a>
            <a 
              href="#projects" 
              className="text-sm hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                const projectsSection = document.getElementById("projects");
                if (projectsSection) {
                  window.scrollTo({
                    top: projectsSection.offsetTop - 80,
                    behavior: "smooth",
                  });
                }
              }}
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="text-sm hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  window.scrollTo({
                    top: contactSection.offsetTop - 80,
                    behavior: "smooth",
                  });
                }
              }}
            >
              Contact
            </a>
          </div>
          
          <button
            onClick={scrollToTop}
            className={cn(
              "p-3 rounded-full bg-primary text-primary-foreground",
              "hover:bg-primary/90 transition-colors",
              "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            )}
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
