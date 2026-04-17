import { Github, Linkedin, Book, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/MohamedATeama", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/mohamed-teama-software",
    label: "LinkedIn",
  },
  { icon: Book, href: "/resume.pdf", label: "Resume" },
];

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>by Mohamed Teama</span>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <div className="text-sm text-muted-foreground font-mono">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
