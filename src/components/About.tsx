import { Card } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar, User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Get to know more about my background, education, and passion for technology
          </p>

          <Card className="p-8 shadow-card hover:shadow-elegant transition-all duration-300">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <User className="w-6 h-6 text-primary" />
                  Profile
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Motivated Computer Science Engineering student with hands-on experience in web development 
                  projects using HTML, CSS, JavaScript, and React. Strong problem-solving and programming skills, 
                  enthusiastic about learning new technologies and contributing to innovative projects. 
                  Seeking opportunities to grow as a full-stack developer.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 pt-4">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Education</h4>
                    <p className="text-sm text-muted-foreground">
                      B.E in Computer Science Engineering
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Syed Ammal Engineering College
                    </p>
                    <p className="text-sm text-muted-foreground">
                      CGPA: 7.98 | 2022 – 2026
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-sm text-muted-foreground">
                      Kamuthi, Ramanathapuram
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Tamil Nadu, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Age</h4>
                    <p className="text-sm text-muted-foreground">
                      21 years (Born: Nov 7, 2003)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <User className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Status</h4>
                    <p className="text-sm text-muted-foreground">
                      Final Year Engineering Student
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Available for Internships
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;