import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 section-border">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-5xl font-bold mb-12 text-gradient"
        >
          About
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-foreground/80 text-lg leading-relaxed mb-16"
        >
          Software engineering student specializing in full-stack development and AI-driven systems. 
          Strong foundation in Python, C++, and problem-solving, with hands-on experience using 
          Supabase, Flask, and Google Cloud Vertex AI to build scalable web and AI-powered applications.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-lg bg-card border border-border glow"
          >
            <GraduationCap className="text-primary mb-4" size={28} />
            <h3 className="font-heading text-xl font-semibold mb-2">Education</h3>
            <p className="text-foreground/90 font-medium">Panveer Singh Institute of Technology</p>
            <p className="text-muted-foreground text-sm mt-1">B.Tech — CS&E (AI & ML)</p>
            <p className="text-muted-foreground text-sm">2023 – 2027</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="p-6 rounded-lg bg-card border border-border glow"
          >
            <Award className="text-primary mb-4" size={28} />
            <h3 className="font-heading text-xl font-semibold mb-2">Certification</h3>
            <p className="text-foreground/90 font-medium">Google UX Design Professional Certificate</p>
            <p className="text-muted-foreground text-sm mt-1">via Coursera</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
