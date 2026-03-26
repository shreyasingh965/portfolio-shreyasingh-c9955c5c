import { motion } from "framer-motion";

const skills = [
  { category: "Languages", items: ["C++", "Python", "JavaScript"] },
  { category: "Frameworks & Tools", items: ["Flask", "Supabase", "Git", "VS Code", "Google Cloud Vertex AI"] },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 section-border">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-5xl font-bold mb-12 text-gradient"
        >
          Skills
        </motion.h2>

        <div className="space-y-10">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="font-heading text-lg text-muted-foreground mb-4">{group.category}</h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium border border-border hover:border-primary/50 transition-colors duration-300"
                  >
                    {skill}
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

export default SkillsSection;
