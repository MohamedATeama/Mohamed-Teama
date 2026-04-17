import { motion } from "framer-motion";
import { Code2, Coffee, Rocket, Users } from "lucide-react";

const stats = [
  { icon: Code2, value: "1+", label: "Years Experience" },
  { icon: Rocket, value: "10+", label: "Projects Completed" },
  { icon: Users, value: "5+", label: "Happy Clients" },
  { icon: Coffee, value: "∞", label: "Cups of Coffee" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">
            // about me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Who I <span className="text-gradient">Am</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                I'm a{" "}
                <span className="text-foreground font-medium">
                  full-stack developer
                </span>{" "}
                specializing in building scalable web and mobile applications
                using the MERN stack and modern JavaScript ecosystems. I enjoy
                turning complex problems into clean, efficient, and user-focused
                solutions.
              </p>
              <p className="leading-relaxed">
                My journey in web development has been driven by continuous
                learning and hands-on experience with React, Node.js, and
                MongoDB, with a strong focus on performance optimization, API
                design, and clean architecture. I’ve worked on building
                real-world applications that emphasize usability, scalability,
                and maintainability.
              </p>
              <p className="leading-relaxed">
                Outside of development, I stay engaged with new technologies,
                explore software engineering best practices, and continuously
                refine my skills through personal projects and learning.
              </p>
            </div>

            {/* Code block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 p-4 rounded-lg bg-card border border-border font-mono text-sm"
            >
              <div className="flex gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-destructive/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <code className="text-muted-foreground">
                <span className="text-purple-400">const</span>{" "}
                <span className="text-foreground">developer</span> = {"{"}
                <br />
                <span className="ml-4">
                  <span className="text-primary">name</span>:{" "}
                  <span className="text-green-400">"Mohamed Teama"</span>,
                </span>
                <br />
                <span className="ml-4">
                  <span className="text-primary">location</span>:{" "}
                  <span className="text-green-400">"Cairo, Egypt"</span>,
                </span>
                <br />
                <span className="ml-4">
                  <span className="text-primary">available</span>:{" "}
                  <span className="text-yellow-400">true</span>
                </span>
                <br />
                {"}"};
              </code>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 group"
              >
                <stat.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
