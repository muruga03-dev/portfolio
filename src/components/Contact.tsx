import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "murugaperumal715@gmail.com",
    href: "mailto:murugaperumal715@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7708431922",
    href: "tel:+917708431922",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kamuthi, Ramanathapuram, Tamil Nadu",
    href: null,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "muruga03-dev",
    href: "https://linkedin.com/in/muruga03-dev",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              const content = (
                <Card className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{item.label}</h3>
                      <p className="text-sm text-muted-foreground break-words">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </Card>
              );

              return item.href ? (
                <a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block"
                >
                  {content}
                </a>
              ) : (
                <div key={index}>{content}</div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Card className="p-8 shadow-card">
              <h3 className="text-2xl font-semibold mb-4">
                Ready to work together?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                I'm currently looking for new opportunities and interesting projects. 
                Let's create something amazing together!
              </p>
              <Button
                size="lg"
                className="gradient-bg hover:opacity-90 transition-opacity shadow-elegant"
                onClick={() =>
                  (window.location.href = "mailto:murugaperumal715@gmail.com")
                }
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;