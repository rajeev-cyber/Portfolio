"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";

// Define experience data
const experienceData = [
  {
    id: "balkrishna industries",
    company: "Bal Krishna Industries",
    role: "Governance, Risk, and Compliance Analyst",
    period: "1 June 2025 - 20 July 2025",
    location: "Mumbai, India",
    description: "Supported the Governance, Risk, and Compliance (GRC) team in developing and maintaining risk assessment documentation. Assisted in audits, policy reviews, and compliance mapping aligned with ISO 27001 and NIST frameworks. Helped implement security awareness initiatives and ensured proper documentation of controls and procedures.",
    skills: ["ServiceNow GRC", "ISO 27001", "NIST CSF", "Microsoft Excel", "Confluence"],
    logo: "../images/brand logo/BKT.png",
  },
  {
    id: "codesnag",
    company: "Codesnag",
    role: "Security Researcher",
    period: "1 June 2024 - 31 July 2024",
    location: "New Delhi, India",
    description: "Performed in-depth security research to identify vulnerabilities across web applications and APIs. Analyzed exploit patterns and contributed to threat intelligence reports. Worked with development teams to reproduce and document security flaws, and proposed mitigation strategies aligned with secure coding practices.",
    skills: ["Burp Suite", "OWASP Top 10", "Postman", "Wireshark", "Nmap"],
    logo: "../images/brand logo/codesnag.png",
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeExperience, setActiveExperience] = useState(experienceData[0].id);

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
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0], // Apple-like easing
      },
    },
  };

  return (
    <section
      id="experience"
      className="section-container"
      ref={ref}
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        {/* Section heading */}
        <motion.div variants={itemVariant} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-medium mb-4">Experience</h2>
          <Separator className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left sidebar - Company list */}
          <motion.div variants={itemVariant} className="md:col-span-1 space-y-4">
            {experienceData.map((exp) => (
              <Card
                key={exp.id}
                className={`transition-all duration-300 cursor-pointer border-l-4 ${
                  activeExperience === exp.id
                    ? "border-l-primary shadow-apple-md"
                    : "border-l-transparent hover:border-l-primary/50"
                }`}
                onClick={() => setActiveExperience(exp.id)}
              >
                <CardContent className="p-4 flex items-center">
                  <div className="w-10 h-10 flex-shrink-0 mr-4 flex items-center justify-center">
                    {exp.logo && (
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="w-8 h-8 object-contain"
                      />
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium">{exp.company}</h3>
                    <p className="text-sm text-foreground/70">{exp.period}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Right content - Experience details */}
          <motion.div
            variants={itemVariant}
            className="md:col-span-2"
            key={activeExperience} // Re-render when active experience changes
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            {experienceData.filter(exp => exp.id === activeExperience).map((exp) => (
              <Card key={exp.id} className="p-6 h-full shadow-apple-md">
                <div className="mb-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-medium">{exp.role}</h3>
                    <div className="flex items-center">
                      {exp.logo && (
                        <img
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          className="w-6 h-6 object-contain mr-2"
                        />
                      )}
                      <span className="font-medium">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-foreground/70 mt-2">
                    <span className="flex items-center mr-4">
                      <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {exp.period}
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.6569 16.6569L13.4142 20.8995C12.6332 21.6805 11.3668 21.6805 10.5858 20.8995L6.34315 16.6569C3.21895 13.5327 3.21895 8.46734 6.34315 5.34315C9.46734 2.21895 14.5327 2.21895 17.6569 5.34315C20.781 8.46734 20.781 13.5327 17.6569 16.6569Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-foreground/90 mb-6">
                  {exp.description}
                </p>

                <div>
                  <h4 className="text-sm font-medium mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-secondary text-foreground/80 rounded-pill text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
