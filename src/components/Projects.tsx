import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Brain, Globe, CheckSquare } from "lucide-react";

const projects = [
  {
    title: "SkillGraph AI",
    icon: Brain,
    period: "2024 – 2025",
    description:
      "AI-Powered Career & Skill Guidance Platform - A full-stack web application that analyzes student skills from resumes or text input, predicts suitable job roles using AI/ML and NLP, and provides personalized skill recommendations. Features include interactive skill visualizations, AI chatbot guidance, skill tests with certificates, and student/admin dashboards.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Python",
      "FastAPI",
      "NLP",
      "Machine Learning",
    ],
  },
  {
    title: "Portfolio Website",
    icon: Globe,
    period: "2025",
    description:
      "Personal Web Development Showcase - A responsive personal portfolio website to showcase projects, skills, and achievements. Designed with a clean UI and interactive components, allowing visitors to easily navigate through sections like About, Projects, Skills, and Contact. Demonstrates proficiency in frontend development, responsive design, and modern web technologies.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Todo List Web App",
    icon: CheckSquare,
    period: "2024",
    description:
      "Task Management Application - A web-based task management application that allows users to add, edit, and delete tasks efficiently. Implemented local storage to save tasks, ensuring data persistence across sessions. Demonstrates hands-on skills in frontend development, state management, and responsive UI design.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Showcasing my latest work and innovative solutions
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card
                  key={index}
                  className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {project.period}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
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

export default Projects;