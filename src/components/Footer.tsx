import { Mail, Linkedin, Github, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="mailto:murugaperumal715@gmail.com"
              className="p-2 rounded-full hover:bg-primary/10 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/muruga03-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary/10 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center flex items-center gap-1">
            © {currentYear} Murugaperumal R. Built with
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;