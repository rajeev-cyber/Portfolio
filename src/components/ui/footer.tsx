"use client";

import { motion } from "framer-motion";
import { Separator } from "./separator";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-background pt-12 pb-6">
      <div className="container max-w-7xl mx-auto px-4">
        <Separator className="mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-medium mb-4">Portfolio</h3>
            <p className="text-sm text-foreground/70 max-w-xs">
            I think like an attacker, work like a defender — constantly exploring how systems fail, so I can learn how to make them stronger.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-foreground/70 hover:text-primary transition-colors">About</a>
              </li>
              <li>
                <a href="#experience" className="text-foreground/70 hover:text-primary transition-colors">Experience</a>
              </li>
              <li>
                <a href="#projects" className="text-foreground/70 hover:text-primary transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/70 hover:text-primary transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Get in Touch</h3>
            <address className="not-italic text-sm text-foreground/70 space-y-2">
              <p>Email: <a href="mailto:officialrajeevkoli@gmail.com" className="hover:text-primary transition-colors">officialrajeevkoli@gmail.com</a></p>
              <p>Location: New Delhi, India</p>
            </address>
          </div>
        </div>

        <Separator className="mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/60 mb-4 md:mb-0">
            © {year} Rajeev. All rights reserved.
          </p>

          <div className="flex items-center space-x-4 text-sm text-foreground/60">
            <a href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="/terms" className="hover:text-foreground transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="/sitemap.xml" className="hover:text-foreground transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
