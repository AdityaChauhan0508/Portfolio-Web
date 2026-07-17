"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-50 dark:opacity-20" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50 dark:opacity-20" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-8">
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-primary font-medium tracking-wide mb-3 flex items-center justify-center lg:justify-start gap-2">
                <span className="h-px w-8 bg-primary block" />
                Hello, I&apos;m Aditya Chauhan
              </h2>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 tracking-tight text-foreground"
            >
              Full-Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">& AI</span> Developer
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              I build scalable, modern web applications integrating cutting-edge AI features. Passionate about solving complex engineering challenges and creating seamless user experiences.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                View Projects <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="mailto:adityachauhan0520@gmail.com"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-border bg-background px-6 py-3 rounded-full font-medium hover:bg-muted transition-colors"
              >
                Contact Me <Mail className="h-4 w-4" />
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex items-center justify-center lg:justify-start gap-5"
            >
              <a href="https://github.com/AdityaChauhan0508" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-2 bg-muted/50 rounded-full hover:bg-muted">
                <FaGithub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/chauhan-aditya0508/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-2 bg-muted/50 rounded-full hover:bg-muted">
                <FaLinkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://leetcode.com/u/AdityaChauhan032/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-2 bg-muted/50 rounded-full hover:bg-muted flex items-center gap-2 text-sm font-medium pr-4">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.939 5.939 0 0 0 1.271 1.543l5.063 4.613c.28.253.649.396 1.026.396.377 0 .746-.143 1.026-.396l5.063-4.613c.34-.309.615-.688.804-1.114a5.551 5.551 0 0 0 .324-1.144 5.597 5.597 0 0 0 .05-1.185 5.51 5.51 0 0 0-.256-1.127 5.39 5.39 0 0 0-.61-1.123L10.74 2.871A1.373 1.373 0 0 0 9.779 2.43c-.368 0-.72.146-.98.406L4.743 7.027a3.46 3.46 0 0 1-1.077 1.956 3.493 3.493 0 0 1-2.28.775 3.493 3.493 0 0 1-2.28-.775 3.46 3.46 0 0 1-1.077-1.956L2.086 2.841A1.37 1.37 0 0 0 1.104 2.43c-.368 0-.72.146-.98.406a1.37 1.37 0 0 0-.406.98c0 .368.146.72.406.98l4.057 4.186a5.27 5.27 0 0 0 3.357 1.487 5.27 5.27 0 0 0 3.357-1.487l4.057-4.186a1.37 1.37 0 0 0 .406-.98c0-.368-.146-.72-.406-.98a1.37 1.37 0 0 0-.98-.406zM13.483 0"/></svg>
                LeetCode
              </a>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 flex justify-center lg:justify-end relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full p-2 border-2 border-primary/20 shadow-2xl">
              <div className="absolute inset-0 rounded-full border border-primary/50 animate-pulse" />
              <div className="relative w-full h-full rounded-full overflow-hidden bg-muted">
                <Image
                  src="/aditya.jpg"
                  alt="Aditya Chauhan"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
