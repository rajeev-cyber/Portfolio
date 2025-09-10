"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import styles from "./hero.module.css";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Animation variants for staggered text animation
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0], // Custom easing similar to Apple
      },
    },
  };

  // Handle scroll to about section
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle the subtle parallax effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      // Calculate the movement based on mouse position
      const moveX = (clientX / innerWidth - 0.5) * 15;
      const moveY = (clientY / innerHeight - 0.5) * 15;

      // Apply the transformation to the gradient background
      const gradientElement = containerRef.current.querySelector(".gradient-bg") as HTMLElement;
      if (gradientElement) {
        gradientElement.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="home"
    >
      {/* Gradient background with subtle movement */}
      <div
        className={`gradient-bg absolute inset-0 opacity-20 transition-transform duration-200 ease-out ${styles.gradientBackground}`}
      />

      <div className="container max-w-7xl mx-auto px-4 py-12 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center relative"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6">
              <span className="text-primary">Breaking</span> Systems to Build <span className="text-primary">Stronger</span> Ones.
            </h1>
          </motion.div>

          <motion.div variants={item}>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto">
              I’m a cybersecurity explorer who thinks like an attacker to act like a defender. I decode the patterns, dig into the chaos, and turn vulnerabilities into insight — because real security starts where assumptions end.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-24"
            variants={item}
          >
            <Button 
              variant="outline" 
              className="rounded-pill hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              size="lg"
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                projectsSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-pill hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Me
            </Button>
          </motion.div>

          {/* Enhanced Scroll indicator */}
          <motion.button
            onClick={scrollToAbout}
            className="absolute left-1/2 -translate-x-1/2 bottom-[40px] flex flex-col items-center gap-2 cursor-pointer group"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span 
              className="text-base font-medium text-primary tracking-wide transition-colors select-none backdrop-blur-sm px-4 py-1 rounded-full bg-background/50"
              animate={{ y: [0, -3, 0] }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              Scroll Down
            </motion.span>
            <motion.div
              className="w-6 h-12 border-2 border-primary rounded-full flex justify-center p-2 group-hover:border-primary/80 transition-colors backdrop-blur-sm bg-background/50"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
            >
              <motion.div
                className="w-1.5 h-2.5 bg-primary rounded-full"
                animate={{
                  y: [0, 14, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
