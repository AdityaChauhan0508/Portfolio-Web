"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Code2, Database, Layout, Server, Settings, Cpu } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: <Code2 className="h-6 w-6" />,
    skills: ["Java", "JavaScript", "TypeScript", "Python", "HTML5", "CSS3"]
  },
  {
    title: "Web & Frameworks",
    icon: <Layout className="h-6 w-6" />,
    skills: ["React.js", "Next.js", "Express.js", "Tailwind CSS", "shadcn/ui"]
  },
  {
    title: "Databases & ORM",
    icon: <Database className="h-6 w-6" />,
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Drizzle ORM", "Supabase"]
  },
  {
    title: "Backend & APIs",
    icon: <Server className="h-6 w-6" />,
    skills: ["RESTful APIs", "Node.js", "Webhook Integration", "Gemini API"]
  },
  {
    title: "Tools & Platforms",
    icon: <Settings className="h-6 w-6" />,
    skills: ["Git", "GitHub", "Vercel", "Netlify", "Pabbly"]
  },
  {
    title: "Core CS",
    icon: <Cpu className="h-6 w-6" />,
    skills: ["Data Structures", "Algorithms", "OOP", "System Design"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-tight mb-4">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            My technology stack and core computer science competencies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              key={category.title}
              className="p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 text-primary rounded-xl">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-muted text-muted-foreground rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
