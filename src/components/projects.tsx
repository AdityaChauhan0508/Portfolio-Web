"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "AI Mock Interview Platform",
    description: "Architected a full-stack AI-powered interview simulation platform. Integrated Google Gemini API to dynamically generate domain-specific questions and evaluate responses in real-time.",
    image: "/interview.png",
    tags: ["Next.js", "React", "Tailwind CSS", "PostgreSQL", "Drizzle ORM", "Gemini API"],
    liveUrl: "https://mock-interview-ai-wine.vercel.app/",
    githubUrl: "https://github.com/AdityaChauhan0508",
  },
  {
    title: "Destiny Unlocked – AI Numerology Platform",
    description: "Built a production-ready AI numerology lead generation platform. Engineered multi-step forms with webhook integration (Pabbly) and serverless Supabase Edge Functions for real-time insights.",
    image: "/Destiny.png", // using placeholder for now
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "Pabbly Webhooks"],
    liveUrl: "https://numerovibe-destiny.vercel.app/",
    githubUrl: "https://github.com/AdityaChauhan0508",
  },
  {
    title: "ExamMate – Centralized Study Platform",
    description: "Scalable college-focused web application with multi-user access to study materials and exams. Designed RESTful APIs for efficient data retrieval and resource sharing.",
    image: "/gpt-clone.png", // using placeholder for now
    tags: ["MongoDB", "Express.js", "React.js", "Node.js (MERN)"],
    liveUrl: "#",
    githubUrl: "https://github.com/AdityaChauhan0508",
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-tight mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A selection of my recent work in building AI-integrated full-stack applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index}
              className="group rounded-2xl border border-border bg-card overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="relative h-60 w-full overflow-hidden bg-muted">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.liveUrl !== "#" && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform">
                    <FaGithub className="h-5 w-5" />
                  </a>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
