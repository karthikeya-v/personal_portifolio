"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Star, GitFork, ExternalLink, CalendarDays, Circle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Repo } from "@/lib/github"; // Import the Repo type

interface GithubRepoCardProps {
  repo: Repo;
  index: number; // For staggered animation delay
}

// Helper to get language color (simplified)
const getLanguageColor = (language: string | null): string => {
  if (!language) return "bg-gray-500"; // Default color
  switch (language.toLowerCase()) {
    case "javascript": return "bg-yellow-400";
    case "typescript": return "bg-blue-400";
    case "python": return "bg-green-500";
    case "java": return "bg-red-500";
    case "html": return "bg-orange-500";
    case "css": return "bg-purple-500";
    case "go": return "bg-cyan-400";
    case "c#": return "bg-indigo-500";
    case "c++": return "bg-pink-500";
    case "ruby": return "bg-red-600";
    case "php": return "bg-indigo-400";
    default: return "bg-gray-400 dark:bg-gray-600";
  }
};


export function GithubRepoCard({ repo, index }: GithubRepoCardProps) {
  const { name, description, html_url, stargazers_count, forks_count, language, pushed_at } = repo;

  const mediumTransition = { duration: 0.5, ease: "easeInOut" };
  const fastTransition = { duration: 0.2, ease: "easeOut" };


  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ...mediumTransition, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -6, scale: 1.02, transition: fastTransition }}
      className="group h-full" // Ensure motion div takes full height for card
    >
      <Card className="h-full flex flex-col border-border hover:border-primary/50 dark:hover:border-primary/70 transition-colors duration-200 shadow-sm hover:shadow-lg dark:hover:shadow-primary/20">
        <CardHeader className="pb-4">
          <div className="flex justify-between items-start mb-2">
            <Github className="w-6 h-6 sm:w-7 sm:h-7 text-muted-foreground group-hover:text-foreground transition-colors duration-200" />
            <a
              href={html_url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${name} on GitHub`}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
          <CardTitle className="font-heading text-lg sm:text-xl font-semibold group-hover:text-primary transition-colors duration-200 leading-tight">
            <a href={html_url} target="_blank" rel="noopener noreferrer">
              {name}
            </a>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col pt-0">
          <CardDescription className="text-xs sm:text-sm text-muted-foreground mb-4 flex-grow min-h-[40px] sm:min-h-[60px] leading-relaxed">
            {description || "No description available."}
          </CardDescription>

          <div className="mt-auto space-y-3 pt-3 border-t border-border/60">
            {language && (
              <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
                <Circle className={`w-3 h-3 mr-1.5 ${getLanguageColor(language)} fill-current`} aria-hidden="true" />
                {language}
              </div>
            )}
            <div className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> {stargazers_count}
              </div>
              <div className="flex items-center gap-1">
                <GitFork className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> {forks_count}
              </div>
            </div>
            <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
              <CalendarDays className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5" />
              Updated: {new Date(pushed_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
