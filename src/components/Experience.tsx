import { Card } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "AI & Data Science Intern",
    company: "Emglits Technologies",
    location: "Coimbatore, India",
    duration: "2025 | 1 Month",
    description: [
      "Worked on AI and Data Science projects, including data preprocessing and Python-based machine learning implementations",
      "Assisted in building models for skill analysis and prediction, gaining hands-on experience in NLP and ML tasks",
      "Improved analytical and problem-solving skills by contributing to real-world tasks under guidance",
    ],
  },
  {
    title: "Full Stack Development Trainee",
    company: "Novitec Private Limited",
    location: "Online",
    duration: "Dec 2023 – Jan 2024 | 1 Month",
    description: [
      "Completed an online professional training in Full Stack Web Development",
      "Learned frontend (HTML, CSS, JavaScript, React) and backend (Node.js, Express, MongoDB) development",
      "Built real-world web applications demonstrating practical full-stack skills",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            My journey through internships and training programs
          </p>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="p-6 md:p-8 shadow-card hover:shadow-elegant transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-primary" />
                      {exp.title}
                    </h3>
                    <p className="text-lg text-muted-foreground font-medium mb-2">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1 text-sm text-muted-foreground md:text-right">
                    <span className="flex items-center gap-1 md:justify-end">
                      <Calendar className="w-4 h-4" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1 md:justify-end">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;