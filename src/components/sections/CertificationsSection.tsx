
import { Check, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  credentialUrl?: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "May 2023",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    credentialUrl: "#"
  },
  {
    id: 2,
    title: "Professional Full-Stack Engineer",
    issuer: "Meta",
    date: "January 2023",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    credentialUrl: "#"
  },
  {
    id: 3,
    title: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "October 2022",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    credentialUrl: "#"
  },
  {
    id: 4,
    title: "Microsoft Certified: Azure Developer Associate",
    issuer: "Microsoft",
    date: "March 2022",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    credentialUrl: "#"
  }
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="bg-secondary/50">
      <div className="content-container">
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">
          Professional certifications that validate my expertise.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert) => (
            <div 
              key={cert.id} 
              className="bg-card rounded-xl overflow-hidden relative card-shadow animate-fade-in"
            >
              <div className="h-36 overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 m-3">
                  <div className="p-1.5 rounded-full bg-primary text-primary-foreground">
                    <Check className="h-4 w-4" />
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-bold mb-1 line-clamp-2">{cert.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{cert.issuer} • {cert.date}</p>
                
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "inline-flex items-center gap-1.5 text-sm",
                      "text-primary hover:underline transition-colors"
                    )}
                  >
                    <span>View Credential</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
