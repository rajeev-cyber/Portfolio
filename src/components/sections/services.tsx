"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Lock, Eye, Database, Cloud, Code, X } from "lucide-react";
import React from "react";

const services = [
  {
    icon: Shield,
    title: "Penetration Testing",
    description: "Comprehensive security assessments to identify vulnerabilities in your systems and applications.",
    details: [
      "Network vulnerability scanning and assessment",
      "Web application security testing",
      "Mobile application penetration testing",
      "Infrastructure security assessment",
      "Social engineering testing",
      "Detailed reporting and remediation guidance"
    ]
  },
  {
    icon: Lock,
    title: "Security Auditing",
    description: "In-depth analysis of security controls, policies, and compliance with industry standards.",
    details: [
      "Security policy review and development",
      "Compliance assessment (GDPR, HIPAA, PCI DSS)",
      "Security controls evaluation",
      "Risk assessment and management",
      "Security awareness training",
      "Documentation and reporting"
    ]
  },
  {
    icon: Eye,
    title: "Threat Monitoring",
    description: "24/7 real-time monitoring and detection of security threats and suspicious activities.",
    details: [
      "Real-time security monitoring",
      "Incident detection and response",
      "Log analysis and management",
      "Behavioral analytics",
      "Threat intelligence integration",
      "Security alerts and notifications"
    ]
  },
  {
    icon: Database,
    title: "Data Protection",
    description: "Implementation of robust data encryption and secure storage solutions.",
    details: [
      "Data encryption implementation",
      "Secure data storage solutions",
      "Access control management",
      "Data backup and recovery",
      "Data privacy compliance",
      "Secure data transmission protocols"
    ]
  },
  {
    icon: Cloud,
    title: "Cloud Security",
    description: "Securing cloud infrastructure and ensuring compliance with best practices.",
    details: [
      "Cloud infrastructure security",
      "Container security",
      "Kubernetes security",
      "Cloud compliance management",
      "Identity and access management",
      "Cloud security monitoring"
    ]
  },
  {
    icon: Code,
    title: "Secure Development",
    description: "Integration of security best practices in software development lifecycle.",
    details: [
      "Secure code review",
      "DevSecOps implementation",
      "Security testing automation",
      "CI/CD security integration",
      "Security training for developers",
      "Vulnerability management"
    ]
  },
];

export function Services() {
  const [isMounted, setIsMounted] = useState(false);
  const [selectedService, setSelectedService] = useState<number | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container max-w-7xl mx-auto px-4">
        <AnimatePresence mode="wait">
          {isMounted && (
            <>
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Services I Run
                </h2>
                <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
                  Protecting your digital assets with comprehensive security solutions and expert consulting services.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    className="relative p-6 rounded-2xl border border-border bg-card hover:bg-card/80 transition-colors cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onClick={() => setSelectedService(index)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <service.icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-foreground/60">{service.description}</p>
                    <div className="mt-4 text-primary text-sm">Click to learn more →</div>
                  </motion.div>
                ))}
              </div>

              <AnimatePresence>
                {selectedService !== null && (
                  <motion.div
                    className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedService(null)}
                  >
                    <motion.div
                      className="bg-card rounded-2xl p-6 md:p-8 max-w-2xl w-full shadow-lg relative"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        onClick={() => setSelectedService(null)}
                        className="absolute top-4 right-4 p-2 rounded-full hover:bg-secondary text-foreground/60 hover:text-foreground"
                        aria-label="Close details"
                      >
                        <X size={20} />
                      </button>

                      <div className="flex items-start gap-4 mb-6">
                        {React.createElement(services[selectedService].icon, {
                          className: "w-8 h-8 text-primary mt-1"
                        })}
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{services[selectedService].title}</h3>
                          <p className="text-foreground/60">{services[selectedService].description}</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg">Key Features:</h4>
                          <ul className="space-y-3">
                            {services[selectedService].details.map((detail, index) => (
                              <motion.li
                                key={index}
                                className="flex items-center gap-3 text-foreground/80"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {/* This line is causing the issue */}
                                {detail}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
} 