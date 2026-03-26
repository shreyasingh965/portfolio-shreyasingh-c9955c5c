import { motion } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";

const posts = [
  {
    title: "Building AI-Powered Apps with Google Cloud Vertex AI",
    excerpt: "Exploring how to integrate Vertex AI into full-stack applications for scalable content generation and intelligent automation.",
    date: "Mar 2026",
    tags: ["AI", "Google Cloud", "Python"],
  },
  {
    title: "Why Supabase is My Go-To Backend for Rapid Prototyping",
    excerpt: "A deep dive into using Supabase Auth, Postgres, and Storage to ship products faster without managing infrastructure.",
    date: "Feb 2026",
    tags: ["Supabase", "Backend", "Web Dev"],
  },
  {
    title: "Lessons from Predicting Road Accident Severity with ML",
    excerpt: "What I learned about data preprocessing, feature engineering, and model selection while building a real-world prediction system.",
    date: "Jan 2026",
    tags: ["Machine Learning", "Flask", "Data Science"],
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-24 px-6 section-border">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-5xl font-bold mb-4 text-gradient"
        >
          Blog
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-lg mb-12"
        >
          Thoughts on building, learning, and shipping software.
        </motion.p>

        <div className="space-y-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 md:p-8 rounded-lg bg-card border border-border hover:border-primary/30 transition-all duration-300 cursor-pointer glow"
            >
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                <Calendar size={14} />
                <span>{post.date}</span>
              </div>

              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="font-heading text-xl md:text-2xl font-semibold group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <ArrowUpRight size={20} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>

              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
