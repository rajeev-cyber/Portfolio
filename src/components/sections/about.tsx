"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Separator } from "@/components/ui/separator";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Animation variants for the section
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

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1.0], // Apple-like easing
      },
    },
  };

  return (
    <section
      id="about"
      className="section-container"
      ref={ref}
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="max-w-4xl mx-auto"
      >
        {/* Section heading with Apple-style separator */}
        <motion.div variants={item} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-medium mb-4">About Me</h2>
          <Separator className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image with hover effect */}
          <motion.div
            variants={item}
            className="relative rounded-2xl overflow-hidden aspect-square"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent z-10 opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Image
                src="/Photo copy.jpg"
                alt="Profile Image"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* About text content */}
          <div className="space-y-6">
            <motion.h1 variants={item} className="text-2xl sm:text-3xl font-medium">
              I'm <span className="text-primary">Rajeev</span>, a Cyber Security Student.
            </motion.h1>

            <motion.p variants={item} className="text-foreground/80 leading-relaxed">
              I’m a cybersecurity student with a growing focus on penetration testing and ethical hacking. I enjoy understanding how systems work, where they break, and how to make them stronger.
            </motion.p>

            <motion.p variants={item} className="text-foreground/80 leading-relaxed">
              Currently I’m pursuing a B.Tech in Cybersecurity and Digital Forensics, building hands-on experience with tools like Burp Suite, Nmap, and Wireshark. Whether it’s exploring vulnerabilities or working on personal labs, I’m driven by curiosity and a mindset to always keep learning.
            </motion.p>

            {/* Skills section */}
            <motion.div variants={item} className="pt-4">
              <h4 className="text-lg font-medium mb-3">My Skills</h4>
              <div className="flex flex-wrap gap-2">
                {["Network Security", "Penetration Testing", "SIEM", "Incident Response", "Firewalls", "IDS/IPS", "Risk Assessment", "SOC Operations", "Encryption"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-secondary text-foreground/90 rounded-pill text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
