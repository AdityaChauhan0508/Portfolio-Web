"use client";

import * as React from "react";
import { Mail, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border py-12 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="font-heading font-bold text-xl tracking-tight">
              Aditya<span className="text-primary">.</span>
            </Link>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              &copy; {new Date().getFullYear()} Aditya Chauhan. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://github.com/AdityaChauhan0508" target="_blank" rel="noopener noreferrer" className="p-2 bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-colors">
              <FaGithub className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/chauhan-aditya0508/" target="_blank" rel="noopener noreferrer" className="p-2 bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-colors">
              <FaLinkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:adityachauhan0520@gmail.com" className="p-2 bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-colors">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
          
          <button
            onClick={scrollToTop}
            className="p-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
