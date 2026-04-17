import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 95 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express", level: 80 },
      { name: "MongoDB", level: 85 },
      { name: "GraphQL", level: 78 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", level: 92 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "Figma", level: 80 },
    ],
  },
];

const technologies = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Vue",
  "React Native",
  "TanStack Query",
  "Node.js",
  "Express",
  "mysql",
  "MongoDB",
  "Redis",
  "GraphQL",
  "REST APIs",
  "MVC",
  "Socket.io",
  "Docker",
  "AWS",
  "Vercel",
  "Git",
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative bg-card/30">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">// skills</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Skill bars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm"
            >
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <span className="text-primary font-mono">#</span> {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        className="h-full bg-primary rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3"
        >
          {technologies.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="px-4 py-2 rounded-full border border-border bg-card/50 text-sm font-mono text-muted-foreground hover:text-primary hover:border-primary/50 transition-all cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
