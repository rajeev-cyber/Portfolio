"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

// Define project data
const projectsData = [
  {
    id: "project1",
    title: "AI-Powered Health Analytics Dashboard",
    category: "Web Application",
    description: "A comprehensive health analytics platform with real-time data processing, interactive visualizations, and AI-driven insights for healthcare providers.",
    technologies: ["Next.js", "TensorFlow.js", "D3.js", "Tailwind CSS", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop",
    link: "#",
    featured: true,
  },
  {
    id: "project2",
    title: "Crypto Portfolio Tracker",
    category: "Finance App",
    description: "A real-time cryptocurrency portfolio tracker with price alerts, historical performance analysis, and personalized investment recommendations.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Chart.js", "CoinGecko API"],
    image: "https://images.unsplash.com/photo-1618044619888-009e412ff12a?q=80&w=1471&auto=format&fit=crop",
    link: "#",
    featured: true,
  },
  {
    id: "project3",
    title: "Immersive Virtual Gallery",
    category: "3D Experience",
    description: "An interactive 3D virtual art gallery that allows artists to showcase their work in an immersive environment with spatial audio and virtual tours.",
    technologies: ["Three.js", "React Three Fiber", "WebGL", "Howler.js", "Firebase"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1528&auto=format&fit=crop",
    link: "#",
    featured: false,
  },
  {
    id: "project4",
    title: "Smart Home Control System",
    category: "IoT Platform",
    description: "A centralized platform for controlling smart home devices with voice commands, automation routines, and energy usage analytics.",
    technologies: ["React Native", "GraphQL", "AWS IoT", "TensorFlow", "MQTT"],
    image: "https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?q=80&w=1364&auto=format&fit=crop",
    link: "#",
    featured: true,
  },
  {
    id: "project5",
    title: "Social Media Content Scheduler",
    category: "Marketing Tool",
    description: "A comprehensive tool for scheduling, analyzing, and optimizing social media content across multiple platforms with AI-powered content suggestions.",
    technologies: ["Vue.js", "Express", "Redis", "OAuth", "Twitter API", "Instagram API"],
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1374&auto=format&fit=crop",
    link: "#",
    featured: false,
  },
  {
    id: "project6",
    title: "E-Commerce Platform",
    category: "Web Application",
    description: "A feature-rich e-commerce platform with real-time inventory management, personalized product recommendations, and secure payment processing.",
    technologies: ["Next.js", "Redux", "Stripe", "MongoDB", "Elastic Search"],
    image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?q=80&w=1480&auto=format&fit=crop",
    link: "#",
    featured: false,
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [filter, setFilter] = useState("all");

  // Filter projects based on selected category
  const filteredProjects = filter === "all"
    ? projectsData
    : filter === "featured"
      ? projectsData.filter(p => p.featured)
      : projectsData.filter(p => p.category.toLowerCase() === filter.toLowerCase());

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0], // Apple-like easing
      },
    },
  };

  // Group projects by category for filter options
  const categories = ["all", "featured", ...new Set(projectsData.map(p => p.category.toLowerCase()))];

  return (
    <section
      id="projects"
      className="section-container bg-secondary/30"
      ref={ref}
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        {/* Section heading */}
        <motion.div variants={itemVariant} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-medium mb-4">Projects</h2>
          <Separator className="w-16 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="max-w-2xl mx-auto text-foreground/80">
            A collection of my recent work across various domains and technologies.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div variants={itemVariant} className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-pill text-sm font-medium transition-all ${
                filter === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground/80 hover:bg-secondary/80"
              }`}
              onClick={() => setFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariant}
              className="rounded-2xl overflow-hidden shadow-apple-sm transition-all duration-300 hover:shadow-apple-md bg-card"
              whileHover={{
                y: -5,
                transition: { duration: 0.2 }
              }}
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-300 hover:scale-105"
                />
                {project.featured && (
                  <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-pill">
                    Featured
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                <div className="text-sm text-primary mb-3">{project.category}</div>
                <p className="text-foreground/80 text-sm line-clamp-3 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-secondary/80 rounded-pill"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-secondary/80 rounded-pill">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full rounded-pill"
                >
                  View Project
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                className="bg-card relative max-w-4xl w-full max-h-[90vh] overflow-auto rounded-2xl shadow-apple-lg"
                onClick={(e) => e.stopPropagation()}
              >
                {projectsData.filter(p => p.id === selectedProject).map((project) => (
                  <div key={project.id}>
                    <div className="relative h-64 md:h-80">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                      <button
                        className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center"
                        onClick={() => setSelectedProject(null)}
                        aria-label="Close project details"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                    <div className="p-6 md:p-8">
                      <h3 className="text-2xl md:text-3xl font-medium mb-2">{project.title}</h3>
                      <div className="text-sm text-primary mb-4">{project.category}</div>

                      <h4 className="text-lg font-medium mb-2">Overview</h4>
                      <p className="text-foreground/80 mb-6">
                        {project.description}
                      </p>

                      <h4 className="text-lg font-medium mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-secondary text-foreground/80 rounded-pill text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3 mt-8">
                        <Button className="apple-button">
                          View Live Demo
                        </Button>
                        <Button variant="outline" className="rounded-pill">
                          View Source Code
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
