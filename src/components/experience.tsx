"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-tight mb-4">Professional Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            My work history and professional internships.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative pl-8 md:pl-0"
          >
            {/* Timeline line - visible only on md+ */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

            {/* Experience Item */}
            <div className="relative md:w-1/2 md:pr-12 md:text-right mb-12">
              {/* Timeline dot */}
              <div className="absolute left-[-40px] md:left-auto md:right-[-48px] top-1 w-10 h-10 bg-primary/10 rounded-full border-4 border-background flex items-center justify-center z-10">
                <div className="w-3 h-3 bg-primary rounded-full" />
              </div>
              
              <div className="p-6 rounded-2xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-xl font-bold mb-1">Web Development Intern</h3>
                <h4 className="text-primary font-medium mb-3 flex items-center gap-2 md:justify-end">
                  <Briefcase className="h-4 w-4" /> Internpe
                </h4>
                <p className="text-sm text-muted-foreground mb-4 flex items-center gap-2 md:justify-end">
                  <Calendar className="h-4 w-4" /> 2024 (1 Month Summer Internship)
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 list-disc list-outside ml-4 md:ml-0 md:text-right md:list-none text-left">
                  <li className="md:relative md:pr-4">
                    <span className="hidden md:inline absolute right-0 top-1.5 w-1.5 h-1.5 bg-primary/50 rounded-full" />
                    Delivered four production-ready web projects (Calculator, E-commerce Website, To-Do App, Connect Four Game) applying software design patterns and iterative development.
                  </li>
                  <li className="md:relative md:pr-4">
                    <span className="hidden md:inline absolute right-0 top-1.5 w-1.5 h-1.5 bg-primary/50 rounded-full" />
                    Strengthened proficiency in DOM manipulation, responsive design, and interactive UI development using HTML, CSS, and JavaScript.
                  </li>
                </ul>
              </div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
