import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "AI-Powered Marketplace Assistant for Local Artisans",
    description: "Full-stack platform empowering artisans to sell online with AI-generated descriptions, multilingual storytelling, and digital catalog creation.",
    tech: ["Supabase", "Google Cloud Vertex AI", "Flask", "Python"],
  },
  {
    title: "Road Accident Severity Prediction",
    description: "Predicts accident severity based on road, weather, and climate conditions using machine learning models with a web-based interface.",
    tech: ["Python", "Flask", "HTML/CSS", "JavaScript"],
  },
  {
    title: "AI Image Generator Website",
    description: "Web app converting text prompts into AI-generated images with REST API integration, instant preview, and error handling.",
    tech: ["JavaScript", "HTML/CSS", "AI Image API"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 section-border">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-5xl font-bold mb-12 text-gradient"
        >
          Projects
        </motion.h2>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 md:p-8 rounded-lg bg-card border border-border hover:border-primary/30 transition-all duration-300 glow"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-heading text-xl md:text-2xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <ArrowUpRight size={20} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
