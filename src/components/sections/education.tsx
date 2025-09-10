"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Separator } from "@/components/ui/separator";

// Define education data
const educationData = [
  {
    degree: "B.Tech in Computer Science and Engineering specialized in Cybersecurity and Digital Forensics",
    institution: "Sharda University",
    location: "Greater Noida, Uttar Pradesh, India",
    period: "2022 - 2026",
    description: "Focused on cybersecurity principles, ethical hacking, digital forensics, and secure software development. Gained practical experience through labs, simulations, and CTF challenges. Maintained a 7.8 GPA throughout the program."
  },
  {
    degree: "Intermediate (10th-12th)",
    institution: "REI Intermediate College",
    location: "Agra, Uttar Pradesh, India",
    period: "2020 - 2021",
    description: "Studied Physics, Chemistry, and Mathematics with Computer Science. Graduated with distinction and developed a strong foundation in logical reasoning and programming.",
  },
  {
    degree: "High School (9th-10th)",
    institution: "REI Intermediate College",
    location: "Agra, Uttar Pradesh, India",
    period: "2017 - 2019",
    description: "Excelled academically with a focus on Science and Mathematics. Took part in school-level tech events and coding competitions.",
  },
];

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariant = {
    hidden: { 
      opacity: 0, 
      y: 50,
      clipPath: "inset(0 100% 0 0)"
    },
    show: {
      opacity: 1,
      y: 0,
      clipPath: "inset(0 0% 0 0)",
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };

  return (
    <section
      id="education"
      className="section-container bg-secondary/30"
      ref={ref}
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="max-w-4xl mx-auto"
      >
        {/* Section heading */}
        <motion.div variants={itemVariant} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-medium mb-4">Education</h2>
          <Separator className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Education timeline */}
        <div className="relative">
          {/* Timeline line */}
          <motion.div
            className="absolute left-0 md:left-1/2 top-0 h-full w-px bg-border"
            initial={{ scaleY: 0, transformOrigin: "top" }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />

          {/* Education items */}
          {educationData.map((edu, index) => (
            <motion.div
              key={`${edu.degree}-${edu.institution}`}
              className={`relative mb-12 md:mb-24 ${
                index % 2 === 0 ? "md:pr-12 md:text-right md:ml-auto md:mr-0" : "md:pl-12 md:ml-0"
              } md:w-1/2`}
              variants={itemVariant}
              custom={index}
            >
              {/* Timeline dot */}
              <motion.div
                className="hidden md:block absolute w-5 h-5 rounded-full bg-primary top-1 border-4 border-background z-10"
                style={{
                  left: index % 2 === 0 ? "-12px" : "auto",
                  right: index % 2 === 1 ? "-12px" : "auto",
                  transform: "translateX(50%)"
                }}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ 
                  delay: 0.4 + index * 0.2,
                  type: "spring",
                  stiffness: 200,
                  damping: 15
                }}
              />

              {/* Visible only on mobile - left aligned dot */}
              <motion.div 
                className="md:hidden absolute left-0 w-3 h-3 rounded-full bg-primary top-2 -ml-1.5 z-10"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ 
                  delay: 0.4 + index * 0.2,
                  type: "spring",
                  stiffness: 200,
                  damping: 15
                }}
              />

              {/* Content card */}
              <motion.div
                className="ml-6 md:ml-0 md:mr-0 apple-card overflow-hidden"
                initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
                animate={isInView ? { clipPath: "inset(0 0% 0 0)", opacity: 1 } : {}}
                transition={{ 
                  duration: 0.8, 
                  ease: "easeInOut", 
                  delay: 0.3 + index * 0.2 
                }}
              >
                <h3 className="text-xl font-medium mb-1 text-foreground">
                  {edu.degree}
                </h3>
                <h4 className="text-lg font-medium mb-2 text-primary">
                  {edu.institution}
                </h4>
                <div className="flex flex-wrap gap-x-4 text-sm text-foreground/70 mb-3">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {edu.location}
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {edu.period}
                  </span>
                </div>
                <p className="text-foreground/80 text-sm md:text-base">
                  {edu.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
