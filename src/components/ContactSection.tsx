import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 section-border">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-5xl font-bold mb-6 text-gradient"
        >
          Get in Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-lg mb-10"
        >
          Open to collaborations, internships, and exciting opportunities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="mailto:shreya.singh9@outlook.com" className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
            <Mail size={18} /> Email Me
          </a>
          <a href="https://github.com/shreyasingh965" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-medium border border-border hover:border-primary/50 transition-colors">
            <Github size={18} /> GitHub
          </a>
          <a href="https://linkedin.com/in/shreya-singh6" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-medium border border-border hover:border-primary/50 transition-colors">
            <Linkedin size={18} /> LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
