import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

const featuredProjects = [
  {
    title: "Booking App",
    description:
      "A full-stack hotel management and booking platform inspired by real-world hospitality systems. The application allows employees to manage cabins, bookings, and guest operations through a modern dashboard with authentication, data filtering, and analytics.",
    tech: ["Next.js", "Tailwind", "Supabase"],
    github: "https://github.com/MohamedATeama/the-wild-oasis-website",
    live: "https://the-wild-oasis-website-mt.vercel.app",
    image: "/bookingProject.png",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application featuring real-time updates, team workspaces, and advanced filtering. Includes Kanban and calendar views.",
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Socket.io",
      "MongoDB",
      "Tailwind",
    ],
    github: "https://github.com/MohamedATeama/Gmate-Frontend",
    live: "https://gmate-frontend.vercel.app",
    image: "/taskProject.png",
  },
  {
    title: "E-Learning Platform",
    description:
      "A full-stack Learning Management System (LMS) platform for delivering, managing, and tracking online courses. It includes role-based dashboards for students and instructors, course management, video-based learning, quizzes, and progress tracking.",
    tech: ["React", "Tailwind", "TanStack Query", "framer-motion"],
    github: "https://github.com/MohamedATeama/LMS",
    live: "https://lms-front-live.vercel.app",
    image: "/public/lmsProject.png",
  },
];

const otherProjects = [
  {
    title: "Draft Management",
    description:
      "Minimalist web platform designed for capturing and organizing quick drafts and notes in a distraction-free environment.",
    tech: ["React", "Node.js"],
  },
  {
    title: "E-Commerce Backend System",
    description:
      "Production-ready REST API that provides a complete server-side solution for e-commerce platforms.",
    tech: ["TypeScript", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "Restaurant Management",
    description:
      "Modern, high-performance web application designed for restaurant order management.",
    tech: ["React", "Tailwind", "Redux-Toolkit"],
  },
  {
    title: "Hotel Management Dashboard",
    description:
      "Feature-rich internal administrative dashboard designed for boutique hotel management.",
    tech: ["React", "TanStack-Query", "Recharts"],
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">
            // projects
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for
            development
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-16 mb-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`aspect-video rounded-xl border border-border overflow-hidden relative group`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="aspect-video"
                  />
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <Button variant="hero" size="sm" asChild>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" /> Live
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" /> Code
                      </a>
                    </Button>
                  </div>
                </motion.div>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <span className="text-primary font-mono text-sm">
                  Featured Project
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold mt-2 mb-4">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl font-bold">Other Noteworthy Projects</h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all group"
            >
              <Folder className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
              <p className="text-sm text-muted-foreground mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono text-muted-foreground"
                  >
                    {tech}
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
