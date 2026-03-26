import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Subtle grid bg */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(42 90% 55%) 1px, transparent 1px), linear-gradient(90deg, hsl(42 90% 55%) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-muted-foreground tracking-[0.3em] uppercase text-sm mb-6"
        >
          Software Engineer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-heading text-6xl md:text-8xl font-bold tracking-tight mb-6"
        >
          Shreya{" "}
          <span className="text-gradient">Singh</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Full-stack developer & AI enthusiast building scalable web and AI-powered applications with Python, C++, and modern web technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex items-center justify-center gap-5"
        >
          <a href="mailto:shreya.singh9@outlook.com" className="p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
            <Mail size={20} />
          </a>
          <a href="tel:6394577969" className="p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
            <Phone size={20} />
          </a>
          <a href="https://github.com/shreyasingh965" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/shreya-singh6" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
            <Linkedin size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
