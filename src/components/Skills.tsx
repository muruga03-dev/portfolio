import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Wrench, Brain, BookOpen } from "lucide-react";

const skillCategories = [
  {
    title: "Web Development",
    icon: Globe,
    skills: ["HTML", "CSS", "JavaScript", "React", "Responsive Design"],
  },
  {
    title: "Programming",
    icon: Code,
    skills: ["Python", "Data Structures", "Algorithms", "OOP"],
  },
  {
    title: "Backend & Frameworks",
    icon: Database,
    skills: ["Node.js", "Express", "FastAPI", "REST APIs"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code"],
  },
  {
    title: "AI & ML",
    icon: Brain,
    skills: ["Machine Learning", "NLP", "Data Science"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiencies
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card
                  key={index}
                  className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;