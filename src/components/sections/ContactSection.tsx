
import { useState } from "react";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully!", {
        description: "I'll get back to you as soon as possible.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact">
      <div className="content-container">
        <h2 className="section-title">Contact Me</h2>
        <p className="section-subtitle">
          Let's discuss how we can work together on your next project.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left column - Contact info and message */}
          <div className="flex flex-col">
            <div className="glass card-shadow p-6 rounded-xl mb-8 animate-fade-in">
              <h3 className="text-xl font-bold mb-6">Let's Talk</h3>
              <p className="text-muted-foreground mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out using the form or my contact information.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a 
                      href="mailto:contact@example.com" 
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      contact@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a 
                      href="tel:+11234567890" 
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      +1 (123) 456-7890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-sm text-muted-foreground">
                      San Francisco, California
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-auto hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="Contact illustration" 
                className="rounded-xl object-cover h-64 w-full opacity-80"
              />
            </div>
          </div>
          
          {/* Right column - Contact form */}
          <div className="glass card-shadow p-8 rounded-xl animate-fade-in animate-delay-100">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={cn(
                    "w-full px-4 py-3 rounded-lg bg-secondary/50",
                    "border border-input focus:border-primary",
                    "outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-1",
                    "transition-colors"
                  )}
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={cn(
                    "w-full px-4 py-3 rounded-lg bg-secondary/50",
                    "border border-input focus:border-primary",
                    "outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-1",
                    "transition-colors"
                  )}
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={cn(
                    "w-full px-4 py-3 rounded-lg bg-secondary/50",
                    "border border-input focus:border-primary",
                    "outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-1",
                    "transition-colors"
                  )}
                  placeholder="Project inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={cn(
                    "w-full px-4 py-3 rounded-lg bg-secondary/50",
                    "border border-input focus:border-primary",
                    "outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-1",
                    "transition-colors resize-none"
                  )}
                  placeholder="I'd like to discuss a project idea..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground",
                  "hover:bg-primary/90 flex items-center justify-center gap-2",
                  "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                  "transition-colors",
                  isSubmitting && "opacity-70 cursor-not-allowed"
                )}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
