"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Brain, Target } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-tight mb-6">About Me</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                I am an Integrated B.Tech + M.Tech Computer Science student with strong foundations in data structures, algorithms, and software design.
              </p>
              <p>
                My expertise lies in building scalable, full-stack AI-integrated applications using modern frameworks like React, Next.js, and Node.js. I have hands-on experience in distributed system concepts, RESTful API design, and end-to-end software development.
              </p>
              <p>
                I am deeply passionate about solving complex engineering challenges, exploring AI research, and contributing to large-scale systems.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="flex gap-4 items-start">
                <div className="p-2 bg-primary/10 rounded-lg text-primary mt-1">
                  <Brain className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">AI Integration</h4>
                  <p className="text-sm text-muted-foreground">Gemini API, LangChain</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="p-2 bg-primary/10 rounded-lg text-primary mt-1">
                  <Target className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Problem Solving</h4>
                  <p className="text-sm text-muted-foreground">LeetCode Knight (300+ streak)</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="p-6 rounded-2xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10" />
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 text-primary rounded-xl">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Education</h3>
                </div>
              </div>
              <div className="pl-[52px]">
                <h4 className="font-semibold text-lg">Integrated B.Tech + M.Tech in CSE</h4>
                <p className="text-primary font-medium mb-2">Noida Institute of Engineering and Technology (NIET)</p>
                <p className="text-sm text-muted-foreground">June 2022 – June 2027 | Greater Noida, UP</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10" />
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 text-primary rounded-xl">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Certifications</h3>
                </div>
              </div>
              <div className="pl-[52px] space-y-3">
                <div>
                  <h4 className="font-medium">Coursera: Python for Data Science, AI & Development</h4>
                  <p className="text-sm text-muted-foreground">Feb – Dec 2023</p>
                </div>
                <div>
                  <h4 className="font-medium">Coursera: Introduction to Artificial Intelligence</h4>
                  <p className="text-sm text-muted-foreground">Feb – Dec 2023</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
